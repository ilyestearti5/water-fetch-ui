import settings from "@/apis/settings";
import React from "react";
import { store } from "@/store";
import { Setting, settingHooks } from "@/reducers/Settings/settings.model";
import { Provider } from "react-redux";
import { initSystem } from "@/components/initSystem";
import { initConfigurations } from "@/components/initing";
import { execAction } from "@/data/system/actions.model";
import { EmptyComponent } from "@/components/EmptyComponent";
import { defaultObject, delay, mapAsync } from "@/utils";
import { createRoot } from "react-dom/client";
import { commandsHooks, execCommand } from "@/data/system/command.model";
import { Color, colorHooks, getTemp, initUser, keyHooks, Lang, langHooks, setTemp, SettingValueType, useIdleStatus } from "@/hooks";
import { Cmd, getLocalDB, Server } from "@/apis";
import { Button, Card, CircleLoading, Translate } from "@/components";
import "@/scss/index.scss";
const { data } = settings;
export const defineGlobal = (name: string, config: any) => {
  window[name] = config;
};
export type MebePromise<T> = T | Promise<T>;
export interface StartApplicationProps {
  app: JSX.Element | (() => JSX.Element);
  loading?: JSX.Element | (() => JSX.Element);
  onPrepare?: () => MebePromise<
    | undefined
    | void
    | {
        colors?: Color[];
        settings?: Setting<keyof SettingValueType>[];
        commands?: Cmd[];
        translations?: Lang[];
      }
  >;
  timeLoading?: number;
  isDev?: boolean;
}
export interface ApplicationProps {
  props: StartApplicationProps;
}
export interface CallableComponentProps {
  render?: JSX.Element | (() => JSX.Element);
}
export const CallableComponent = ({ render: Render = <EmptyComponent /> }: CallableComponentProps) => {
  return typeof Render == "function" ? <Render /> : Render;
};
export const Application = ({ props }: ApplicationProps) => {
  initConfigurations();
  initSystem();
  initUser();
  React.useEffect(() => {
    settingHooks.setAll(
      Object.entries(data).map(([key, props]: [string, any]) => {
        return {
          ...props,
          settingId: key,
          value: props.def,
        };
      }),
    );
  }, []);
  const isDev = getTemp<boolean>("env.isDev");
  React.useEffect(() => {
    if (isDev) {
      window.store = store;
      window.execAction = execAction;
      window.localDB = getLocalDB();
      window.execCommand = execCommand;
      window.auth = Server.server?.auth;
      return () => {
        delete window.store;
        delete window.execAction;
        delete window.execCommand;
        delete window.localDB;
        delete window.auth;
      };
    }
  }, [isDev]);
  const { status } = useIdleStatus(async () => {
    await delay(props.timeLoading);
    setTemp("env.isDev", props.isDev);
    let config = props.onPrepare?.();
    if (config instanceof Promise) {
      config = await config;
    }
    if (!config) {
      return;
    }
    if (config.colors) {
      await mapAsync(config.colors, async (color) => {
        await delay(30);
        colorHooks.upsert([color]);
      });
    }
    if (config.translations) {
      await mapAsync(config.translations, async (lang) => {
        await delay(20);
        langHooks.upsert([lang]);
      });
    }
    if (config.commands) {
      await mapAsync(config.commands, async ({ commandId, keys, ...command }) => {
        await delay(30);
        commandsHooks.upsert([
          {
            ...command,
            commandId,
          },
        ]);
        await mapAsync(keys, async (key) => {
          await delay(10);
          keyHooks.upsert([key]);
        });
      });
    }
    setTemp("project", config);
  }, [props]);
  React.useEffect(() => {
    status.set("idle");
  }, []);
  return (
    <EmptyComponent>
      {["ready", "idle", "loading"].includes(status.get) && <CallableComponent render={props.loading} />}
      {status.get == "success" && <CallableComponent render={props.app} />}
      {status.get == "error" && (
        <div className="flex justify-center items-center w-full h-full">
          <Card className="flex flex-col items-center gap-2">
            <h1 className="p-2 text-2xl text-center">
              <Translate content={`Found Problem , Try After Moment!`} />
            </h1>
            <div className="p-2">
              <Button
                onClick={() => {
                  status.set("idle");
                }}
              >
                <Translate content={`Try Again`} />
              </Button>
            </div>
          </Card>
        </div>
      )}
    </EmptyComponent>
  );
};
export const startApplication = async (props: StartApplicationProps) => {
  const rootElement = document.createElement("div");
  rootElement.classList.add("window");
  props = defaultObject(props, {
    loading: (
      <div className="top-1/2 left-1/2 fixed transform -translate-x-1/2 -translate-y-1/2">
        <CircleLoading circleClassName="w-[50px] h-[50px] border-4 " />
      </div>
    ),
    timeLoading: 500,
  });
  //
  document.body.appendChild(rootElement);
  // render react elements inside the rootElement
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Application props={props} />
      </Provider>
    </React.StrictMode>,
  );
  return root;
};
