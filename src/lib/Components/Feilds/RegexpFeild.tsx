import { useColorMerge } from "models/system/colors.model";
import { tw } from "@/functions/react-utils";
import { useCopyState } from "@/functions/react-utils";
import { Input } from "@/hooks/input.hooks";
import React from "react";
import { Button } from "@/Components/Helpers/Buttons";
import { FeildGeneralProps } from "./Types";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
export type RegexpFeildProps = FeildGeneralProps<string | undefined, SettingConfig["regexp"]>;
// render RegExp Feild Prop
function RegexpFeild({ state, id }: RegexpFeildProps) {
  const value = useCopyState("");
  React.useEffect(() => {
    value.set(state.get || "");
  }, [state.get]);
  const changed = useCopyState(false);
  const errRegexp = React.useMemo(() => {
    try {
      new RegExp(value.get);
      changed.set(true);
      return null;
    } catch (e: any) {
      return String(e?.message) as string;
    }
  }, [value.get]);
  const colorMerge = useColorMerge();
  return (
    <div>
      <div className="flex items-center gap-2">
        <Input
          id={`${id}:input`}
          placeholder="write your regexp here..."
          onFocus={(e) => {
            e.target.select();
          }}
          onValueChange={state.set}
          value={state.get}
        />
        {!errRegexp && (
          <Button
            className="py-1"
            id={`${id}:submit`}
            onClick={() => {
              state.set(value.get);
              changed.set(false);
            }}
          >
            Ok
          </Button>
        )}
      </div>
      {errRegexp && (
        <div
          className={tw(`
            mt-2
            p-1
            text-xs
            border
            border-solid
            border-transparent
            w-fit
          `)}
          style={{
            ...colorMerge("error", {
              color: "error.content",
              borderColor: "error.border",
            }),
          }}
        >
          {errRegexp}
        </div>
      )}
    </div>
  );
}
export { RegexpFeild };
