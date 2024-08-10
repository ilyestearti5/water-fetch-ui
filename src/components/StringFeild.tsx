import { Button } from "@/components/Button";
import { feildHooks, initNewFeild } from "@/data/system/feild.model";
import { execAction, useAction } from "@/data/system/actions.model";
import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import Input from ".//Input";
import { getFocus } from "@/utils";
import { useColorMerge } from "@/data/system/colors.model";
type StringFeildProps = FeildGeneralProps<string | undefined, SettingConfig["string"]>;
// String Feild Rendering
export function StringFeild({ state, config = {}, id }: StringFeildProps) {
  initNewFeild(`${id}:input`);
  const value = feildHooks.useOneFeild(`${id}:input`, "value");
  //
  useAction(
    "string.change",
    () => {
      const focused = getFocus();
      if (focused && [id, `${id}:change`].includes(focused)) {
        state.set(value.get || "");
      }
    },
    [value.get, id],
  );
  useAction(
    "string.cancel",
    () => {
      const focused = getFocus();
      if (focused && [id, `${id}:cancel`].includes(focused)) {
        value.set(state.get || "");
      }
    },
    [state.get, id],
  );
  /*
   ******************************************************************************************************************************************************
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   ******************************************************************************************************************************************************
   */
  const colorMerge = useColorMerge();
  return (
    <div className="flex justify-between items-center gap-3">
      <Input
        maxLength={config.maxLength}
        minLength={config.minLength}
        type={config.locked ? "password" : "text"}
        id={id}
        className="text-xs"
        value={value.get}
        placeholder={config.hint || `provide value for ${id}`}
        onValueChange={value.set}
      />
      {(state.get || "") != (value.get || "") && (
        <div className="flex items-cente gap-x-2">
          <Button
            className="py-1"
            id={`${id}:cancel`}
            onClick={() => {
              execAction("string.cancel");
            }}
            style={{
              ...colorMerge("gray.opacity.2"),
            }}
          >
            cancel
          </Button>
          <Button
            className="py-1"
            id={`${id}:change`}
            onClick={() => {
              execAction("string.change");
            }}
          >
            change
          </Button>
        </div>
      )}
    </div>
  );
}
