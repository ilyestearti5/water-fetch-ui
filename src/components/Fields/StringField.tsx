import { Button } from "@/components/Button";
import { fieldHooks, initNewFeild, useEffectDelay, useMemoDelay } from "@/hooks";
import { execAction, useAction } from "@/data/system/actions.model";
import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { getFocus } from "@/utils";
import { useColorMerge } from "@/hooks";
import { Input } from "../Input";
import React from "react";
export type StringFeildProps = FeildGeneralProps<string | undefined, SettingConfig["string"]>;
// String Feild Rendering
export function StringFeild({ state, config = {}, id }: StringFeildProps) {
  initNewFeild(`${id}:input`);
  const value = fieldHooks.useOneFeild(`${id}:input`, "value");
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
        const val = state.get || "";
        value.set(val);
        state.set(val);
      }
    },
    [state.get, id, config],
  );
  const colorMerge = useColorMerge();
  const currentValue = React.useMemo(() => {
    return value.get || "";
  }, [value.get]);
  const diffValue = React.useDeferredValue(currentValue);
  useEffectDelay(
    () => {
      if (config.autoChange) {
        state.set(diffValue);
      }
    },
    [config.autoChange, diffValue],
    200,
  );
  return (
    <div className="flex justify-between items-center gap-3">
      <Input
        maxLength={config.maxLength}
        minLength={config.minLength}
        type={config.locked ? "password" : "text"}
        id={id}
        className="text-xs"
        value={currentValue}
        placeholder={config.hint}
        onValueChange={value.set}
      />
      {!config?.autoChange && (state.get || "") != (value.get || "") && (
        <div className="flex items-cente gap-x-2">
          <Button
            className="w-fit"
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
            className="w-fit"
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
