import PouchDB from "pouchdb";
import * as solid from "@fortawesome/free-solid-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import * as brands from "@fortawesome/free-brands-svg-icons";
import { Server } from "./firebase";
import { getDoc, collection } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { showFrame } from "@/hooks";
import { delay } from "@/utils";
export * from "./firebase";
export const getFunction = <R = any, P = any>(name: string, isDev = false) => {
  const url = new URL(isDev ? "http://localhost:8888" : "https://water-fetch-account.netlify.app");
  url.pathname = "/.netlify/functions/" + name;
  return async (data: P) => {
    const response = await fetch(url.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result: R = await response.json();
    return result;
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
  userToken?: string;
  projectId: string;
  platform: Platform;
  amount: number;
  isDev?: boolean;
}
export interface ProjectConfig {
  label: string;
  id: string;
  imageUrl?: string;
  auth?: Partial<Record<Platform, string | null>>;
  payout?: Partial<Record<Platform, string | null>>;
}
export const generateAuthUrl = getFunction<GenerateAuthUrlResult, GenerateAuthUrlParams>("generate-auth-url");
export const generatePayoutUrl = getFunction<GeneratePayoutUrlResult, GeneratePayoutUrlParams>("generate-payout-url");
export interface SignInAccountProps extends GenerateAuthUrlParams {
  place: "window" | "frame";
}
export const signInAccount = async ({ place, ...props }: SignInAccountProps) => {
  const { url } = await generateAuthUrl(props);
  return new Promise<void>(async (res, rej) => {
    if (place == "frame") {
      const id = showFrame(url);
      await delay(1000);
      const element = document.querySelector<HTMLIFrameElement>("#" + id);
      if (element) {
        const win = element.contentWindow;
        const callback = () => {
          res();
          win?.removeEventListener("close", callback);
        };
        win?.addEventListener("close", callback);
      } else {
        rej("Cannot Access Frame");
      }
    } else {
      const win = open(url, "_blank", "width=400,height=600,menubar=no,location=no,resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no,x=30,y=30");
      const callback = () => {
        res();
        win?.removeEventListener("close", callback);
      };
      win?.addEventListener("close", callback);
    }
  });
};
export const allIcons = {
  solid,
  regular,
  brands,
};
export const getProjectConfig = async (projectId: string): Promise<ProjectConfig> => {
  if (!Server.server?.db) {
    throw Error("Server is not initialized");
  }
  const recorde = await getDoc(doc(collection(Server.server.db, "projects"), projectId));
  return {
    ...recorde.data(),
    id: projectId,
  } as ProjectConfig;
};
