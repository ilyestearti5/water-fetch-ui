import React from "react";
import settings from "@/apis/settings";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/store";
// Components
// Deps
import "@/scss/index.scss";
import { execAction } from "@/data/system/actions.model";
import { execCommand } from "@/data/system/command.model";
import { initSystem } from "@/components/initSystem";
import { initConfigurations } from "@/components/initing";
import { settingHooks } from "@/reducers/Settings/settings.model";
import { EmptyComponent } from "@/components/EmptyComponent";
import { initUser } from "@/hooks";
const { data } = settings;
export const defineGlobal = (configName: string, config: any) => {
  (window as any)[configName] = config;
};
export interface ApplicationProps {
  children?: React.ReactNode;
}
if (import.meta.env.DEV) {
  defineGlobal("store", store);
  defineGlobal("execAction", execAction);
  defineGlobal("execCommand", execCommand);
}
export const Application = ({ children }: ApplicationProps) => {
  initConfigurations();
  initSystem();
  initUser();
  React.useEffect(() => {
    settingHooks.setAll(
      Object.entries(data).map(([key, { def, ...props }]: [string, any]) => {
        return {
          ...props,
          settingId: key,
          def,
          value: def,
        };
      }),
    );
  }, []);
  return <EmptyComponent>{children}</EmptyComponent>;
};
export const startApplication = async (App: JSX.Element | (() => JSX.Element)) => {
  const rootElement = document.createElement("div");
  rootElement.classList.add("window");
  //
  document.body.appendChild(rootElement);
  // render react elements inside the rootElement
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      {/* provide the storage */}
      <Provider store={store}>
        <Application>{typeof App == "function" ? <App /> : App}</Application>
      </Provider>
    </React.StrictMode>,
  );
  return root;
};
