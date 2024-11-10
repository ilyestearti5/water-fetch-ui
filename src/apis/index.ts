import { getTempFromStore, showFrame } from "@/hooks";
import { delay } from "@/utils";
import { getMainCloud } from "./server.config";
import * as brands from "@fortawesome/free-brands-svg-icons";
import * as regular from "@fortawesome/free-regular-svg-icons";
import * as solid from "@fortawesome/free-solid-svg-icons";
import PouchDB from "pouchdb";
export * from "./server.config";
export interface ProjectConfig {
  label?: string;
  id: string;
  imageUrl?: string;
  auth?: Partial<Record<string, string>>;
  payout?: Partial<Record<string, string>>;
  site?: string;
}
declare interface GenerateAuthUrlResult {
  url: string;
}
declare interface GenerateAuthUrlParams {
  projectId: string;
  key?: string;
  mode?: "live" | "sandbox";
}
declare interface SignInAccountProps extends GenerateAuthUrlParams {
  place: "window" | "frame" | "redirect";
}
export async function generateAuthUrl(params: GenerateAuthUrlParams) {
  const fn = await getFunction<GenerateAuthUrlParams, GenerateAuthUrlResult>("generate-auth-url", params.mode ? "sandbox" : "live");
  if (!fn) {
    throw "Function not found";
  }
  return await fn.callback(params);
}
export async function signInAccount({ place, ...props }: SignInAccountProps) {
  const { url } = await generateAuthUrl(props);
  await delay(1000);
  if (place == "frame") {
    showFrame(url);
  } else if (place == "window") {
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2 + window.screenX;
    const top = (window.innerHeight - height) / 2 + window.screenY;
    window.open(url, "_blank", `width=${width},height=${height},left=${left},top=${top}`);
  } else {
    location.href = url;
  }
}
export async function getProjectConfig(projectId: string): Promise<ProjectConfig> {
  const data = await getMainCloud().app.database.getDoc<ProjectConfig>(["projects", projectId]);
  return {
    ...data!,
    id: projectId,
  };
}
export function onManySnaping<T extends string>(props: Record<T, string>, callback: (executed: T) => void, skip = 0): Record<T, Function> {
  let o: Record<string, Function> = {};
  for (let prop in props) {
    let some = skip;
    o[prop] = getMainCloud().app.database.onCollectionSnapshot(props[prop], () => {
      if (some) {
        some--;
        return;
      }
      callback(prop);
    });
  }
  return o;
}
export function getFunction<T = any, P = any>(name: string, mode = getTempFromStore<"sandbox" | "live">("env.mode") || "sandbox", metaData: object = {}) {
  return getMainCloud().app.functions.getFunction<T, P>(name, mode, metaData);
}
export function getUserFunction<T = any, P = any>(name: string, mode = getTempFromStore<"sandbox" | "live">("env.mode") || "sandbox", metaData: object = {}) {
  return getMainCloud().app.functions.getUserFunction<T, P>(name, mode, metaData);
}
export function getLocalDB() {
  return new PouchDB(import.meta.env.VITE_LOCAL_DATA_BASE);
}
export const allIcons = {
  solid,
  regular,
  brands,
};
