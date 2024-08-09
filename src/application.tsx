import { store } from "./store";
// Components
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// Deps
import "@/scss/index.scss";
import { execAction } from "@/data/system/actions.model";
import { execCommand } from "@/data/system/command.model";
import { initSystem } from "./Components/App/Main/initSystem";
import { initConfigurations } from "./Components/initing";
import { settingHooks } from "./reducers/Settings/settings.model";
import { data } from "@/apis/settings.json";
import { EmptyComponent } from "./Components/Helpers/EmptyComponent";
export const defineGlobal = (configName: string, config: any) => {
  (window as any)[configName] = config;
};
export interface ApplicationProps {
  children?: React.ReactNode;
}
export const Application = ({ children }: ApplicationProps) => {
  initConfigurations();
  initSystem();
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
export const startApplication = (App: JSX.Element | (() => JSX.Element)) => {
  if (import.meta.env.DEV) {
    defineGlobal("store", store);
    defineGlobal("execAction", execAction);
    defineGlobal("execCommand", execCommand);
  }
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
