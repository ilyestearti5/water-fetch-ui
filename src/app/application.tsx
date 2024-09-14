import React from "react";
import settings from "@/apis/settings";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/store";
import "@/scss/index.scss";
import { execAction } from "@/data/system/actions.model";
import { execCommand } from "@/data/system/command.model";
import { initSystem } from "@/components/initSystem";
import { initConfigurations } from "@/components/initing";
import { settingHooks } from "@/reducers/Settings/settings.model";
import { EmptyComponent } from "@/components/EmptyComponent";
import { initUser, langHooks, SettingValueType, useAsyncEffect, useChangedSetting, useIdleStatus } from "@/hooks";
import { delay, mapAsync } from "@/utils";
import { CircleLoading } from "@/components";
import { getLocalDB } from "@/apis";
const { data } = settings;
export const defineGlobal = (configName: string, config: any) => {
  (window as any)[configName] = config;
};
export interface ApplicationProps {
  element?: React.ReactNode;
  loading?: React.ReactNode;
  timeLoading?: number;
}
if (import.meta.env.DEV) {
  defineGlobal("store", store);
  defineGlobal("execAction", execAction);
  defineGlobal("execCommand", execCommand);
  defineGlobal("localDB", getLocalDB());
}
export const Application = ({ element, loading, timeLoading = 500 }: ApplicationProps) => {
  initConfigurations();
  initSystem();
  initUser();
  const localDb = React.useMemo(() => {
    return getLocalDB();
  }, []);
  const changedSettings = useChangedSetting();
  const { status } = useIdleStatus(async () => {
    await delay(timeLoading);
    let settings: [string, SettingValueType[keyof SettingValueType]][] = [];
    let langs: [string, string][] = [];
    // get settings from local data base
    const allDocs = await localDb.allDocs<{ value: string | SettingValueType[keyof SettingValueType] }>({
      include_docs: true,
    });
    allDocs.rows
      .filter(({ id }) => id.startsWith("settings-"))
      .forEach(({ doc, id }) => {
        if (doc) {
          settings.push([id.replace("settings-", ""), doc.value]);
        }
      });
    allDocs.rows
      .filter(({ id }) => id.startsWith("langs-"))
      .forEach(({ doc, id }) => {
        if (doc && typeof doc.value == "string") {
          langs.push([id.replace("langs-", ""), doc.value]);
        }
      });
    settings.forEach(([settingId, value]) => {
      settingHooks.setOneFeild(settingId, "value", value);
    });
    langs.forEach(([langId, value]) => {
      langHooks.setOneFeild(langId, "value", value);
    });
  }, [localDb, timeLoading]);
  React.useEffect(() => {
    if (status.get != "success") {
      status.set("idle");
    }
  }, [status.get, localDb]);
  useAsyncEffect(async () => {
    if (status.get == "success") {
      await delay(1000);
      // get settings from local data base
      const allDocs = await localDb.allDocs();
      await mapAsync(allDocs.rows, async (doc) => {
        await localDb.remove(doc.id, doc.value.rev);
      });
      await mapAsync(changedSettings, async (setting) => {
        const id = `settings-${setting.settingId}`;
        await localDb.upsert(id, () => {
          return {
            value: setting.value,
          };
        });
      });
    }
    // get settings from user
  }, [changedSettings, localDb, status.get]);
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
  return (
    <EmptyComponent>
      {["ready", "idle", "loading"].includes(status.get) && loading}
      {status.get == "success" && element}
    </EmptyComponent>
  );
};
export const startApplication = async (
  App: JSX.Element | (() => JSX.Element),
  Loading: JSX.Element | (() => JSX.Element) = (
    <div className="top-1/2 left-1/2 fixed transform -translate-x-1/2 -translate-y-1/2">
      <CircleLoading circleClassName="w-[50px] h-[50px] border-4 " />
    </div>
  ),
  timeLoading = 500,
) => {
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
        <Application timeLoading={timeLoading} element={typeof App == "function" ? <App /> : App} loading={typeof Loading == "function" ? <Loading /> : Loading}></Application>
      </Provider>
    </React.StrictMode>,
  );
  return root;
};
