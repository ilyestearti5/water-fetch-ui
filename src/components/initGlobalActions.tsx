import { useAction } from "@/data/system/actions.model";
import { setFocused } from "@/utils";
export function initGlobalActions() {
  useAction(
    "focus",
    (e: string) => {
      setFocused(e);
    },
    [],
  );
}
