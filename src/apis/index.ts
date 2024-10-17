export * from "./firebase";
import { Command, getTempFromStore, Key, showFrame } from "@/hooks";
import { delay } from "@/utils";
import { getDoc, doc, collection, Unsubscribe, Query, DocumentData, onSnapshot } from "firebase/firestore";
import { Server } from "./firebase";
import * as brands from "@fortawesome/free-brands-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import * as solid from "@fortawesome/free-solid-svg-icons";
import PouchDB from "pouchdb";
export const getFunction = <R = any, P = any>(name: string, isDev = getTempFromStore<boolean>("env.isDev")) => {
  isDev = isDev ?? false;
  const controller = new AbortController();
  const signal = controller.signal;
  const url = new URL(isDev ? "http://localhost:8888" : "https://water-fetch-account.netlify.app");
  url.pathname = "/.netlify/functions/" + name;
  const callback = async (data: P) => {
    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      signal,
    });
    const result: R = await response.json();
    return result;
  };
  return {
    callback,
    signal,
    controller,
  };
};
export const getUserFunction = <T = any, P = any>(name: string, isDev?: boolean | null) => {
  const { callback, signal, controller } = getFunction<T, { data: P; token: string | null }>(name, isDev);
  return {
    signal,
    controller,
    callback: async (data: P) => {
      const tokenPromise = Server.server?.auth.currentUser?.getIdToken();
      let token: string | null = null;
      if (tokenPromise instanceof Promise) {
        token = await tokenPromise;
      }
      return await callback({
        data,
        token,
      });
    },
  };
};
export const getLocalDB = () => {
  return new PouchDB(import.meta.env.VITE_LOCAL_DATA_BASE);
};
export type Platform = "test" | "web" | "mobile" | "desktop";
export interface GenerateAuthUrlResult {
  url: string;
}
export interface GenerateAuthUrlParams {
  projectId: string;
  platform: Platform;
  isDev?: boolean;
}
export interface GeneratePayoutUrlResult {
  url: string;
}
export interface GeneratePayoutUrlParams {
  projectId: string;
  platform: Platform;
  amount: number;
  isDev?: boolean;
}
export interface Cmd extends Command {
  keys: Omit<Key, "command">[];
}
export interface ProjectConfig {
  label: string;
  id: string;
  imageUrl?: string;
  auth?: Partial<Record<Platform, string | null>>;
  payout?: Partial<Record<Platform, string | null>>;
}
export const generateAuthUrl = async (params: GenerateAuthUrlParams) => {
  const { callback } = getFunction<GenerateAuthUrlResult, GenerateAuthUrlParams>("generate-auth-url", params.isDev);
  return await callback(params);
};
export interface SignInAccountProps extends GenerateAuthUrlParams {
  place: "window" | "frame" | "redirect";
}
export const signInAccount = async ({ place, ...props }: SignInAccountProps) => {
  const { url } = await generateAuthUrl(props);
  await delay(1000);
  if (place == "frame") {
    showFrame(url);
  } else if (place == "window") {
    open(url, "_blank", "width=400,height=600,menubar=no,location=no,resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no,x=30,y=30");
  } else {
    location.href = url;
  }
};
export const allIcons = {
  solid,
  regular,
  brands,
};
export const getProjectConfig = async (projectId: string): Promise<ProjectConfig> => {
  if (!Server.server?.db) {
    throw "Server is not initialized";
  }
  const recorde = await getDoc(doc(collection(Server.server.db, "projects"), projectId));
  return {
    ...recorde.data(),
    id: projectId,
  } as ProjectConfig;
};
export function onManySnaping<T extends string>(
  firestoreOnSnapshot: typeof onSnapshot,
  props: Record<T, Query<DocumentData, DocumentData>>,
  callback: (executed: T) => void,
  skip = 0,
): Record<T, Unsubscribe> {
  let o: Record<string, Unsubscribe> = {};
  for (let prop in props) {
    let some = skip;
    o[prop] = firestoreOnSnapshot(props[prop], () => {
      if (some) {
        some--;
        return;
      }
      callback(prop);
    });
  }
  return o;
}
