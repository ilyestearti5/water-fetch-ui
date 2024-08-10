import { useAction } from "@/data/system/actions.model";
import { setFocused } from "@/utils";
export const passwordSetting = "app/window/password.password";
export function initGlobalActions() {
  useAction(
    "focus",
    (e: string) => {
      setFocused(e);
    },
    [],
  );
}
