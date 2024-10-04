import React from "react";
import { Button } from "@/components/Button";
import { execAction, useAction } from "@/data/system/actions.model";
import { setFocused, tw } from "@/utils";
import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { Translate } from "./Translate";
import { useColorMerge, useCopyState } from "@/hooks";
import { Input } from "./Input";
export type NumberFeildProps = FeildGeneralProps<number | undefined | null, SettingConfig["number"]>;
export function NumberFeild({ state, config = {}, id }: NumberFeildProps) {
  React.useEffect(() => {
    if (typeof state.get != "number") {
      return;
    }
    if (typeof config.max == "number" && config.max < state.get!) {
      state.set(config.max);
    } else if (typeof config.min == "number" && config.min > state.get!) {
      state.set(config.min);
    }
  }, [config.max, config.min, state.get]);
  const value = useCopyState(String(state.get));
  const elementRef = React.createRef<HTMLInputElement>();
  React.useEffect(() => {
    if (elementRef.current) {
      elementRef.current.value = state.get?.toString() || "";
    }
  }, [state.get, elementRef.current]);
  React.useEffect(() => {
    if (!+value.get) {
      const ele = document.getElementById(id) as HTMLInputElement | null;
      ele?.select();
    }
  }, [value.get, id]);
  useAction(
    "number.changeState",
    (idState: string) => {
      if (idState == id) {
        if (value.get.length) {
          const val = +value.get;
          state.set(val);
        } else {
          state.set(null);
        }
      }
    },
    [value.get, id],
  );
  useAction(
    "number.cancelChangeState",
    (idState: string) => {
      if (idState == id) {
        const oldValue = typeof state.get == "number" ? state.get.toString() : "";
        value.set(oldValue);
        if (elementRef.current) {
          elementRef.current.value = oldValue;
        }
        setFocused(id);
      }
    },
    [state.get, elementRef, id],
  );
  React.useEffect(() => {
    if (config.autoChange) {
      execAction("number.changeState", id);
    }
  }, [value.get, config.autoChange]);
  const focused = useCopyState(false);
  const showButton = React.useMemo(() => {
    return !config.autoChange && state.get != +value.get;
  }, [config.autoChange, state.get, value.get]);
  const colorMerge = useColorMerge();
  return (
    <div
      className={tw(`
        relative
        rounded-md
        flex
        items-center
        gap-1
        w-full
      `)}
    >
      <div className="flex items-center w-full">
        <Input
          ref={elementRef}
          onFocus={(e) => {
            focused.set(true);
            if (config.selectOnFocus) {
              e.currentTarget.select();
            }
          }}
          onBlur={() => {
            focused.set(false);
          }}
          className={tw(config.size == "small" ? "p-1" : "p-2", config.center && "text-center")}
          type="number"
          id={id}
          min={config.min}
          max={config.max}
          placeholder={config.placeholder}
          onKeyDown={(e) => {
            if (showButton && e.key == "Enter") {
              e.preventDefault();
              e.stopPropagation();
              if (e) execAction("number.changeState", id);
            }
          }}
          onValueChange={value.set}
        />
      </div>
      {showButton && (
        <div className="flex gap-1">
          <Button
            className="py-1"
            onClick={() => {
              execAction("number.cancelChangeState", id);
            }}
            style={{
              ...colorMerge("gray.opacity", {
                color: "text.color",
              }),
            }}
          >
            <Translate content="cancel" />
          </Button>
          <Button
            className="py-1"
            onClick={() => {
              execAction("number.changeState", id);
            }}
          >
            <Translate content="change" />
          </Button>
        </div>
      )}
    </div>
  );
}
