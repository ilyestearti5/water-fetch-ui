import { useAction } from "models/system/actions.model";
import { setFocused } from "@/functions/react-utils";
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
