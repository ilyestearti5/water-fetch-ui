import { useAction } from "@/data/system/actions.model";
import { setFocused } from "main/src/functions/react-utils";
import { ipcRenderer } from "electron";
export const passwordSetting = "app/window/password.password";
export function initGlobalActions() {
  useAction(
    "focus",
    (e: string) => {
      setFocused(e);
    },
    [],
  );
  useAction(
    "window",
    (...args) => {
      ipcRenderer.send("window", ...args);
    },
    [],
  );
}
