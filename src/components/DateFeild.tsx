import React from "react";
import Input from "./Input";
import { useColorMerge } from "@/data/system/colors.model";
import { Shortcut, tw } from "@/utils";
import { SettingConfig, SettingValueType } from "@/reducers/Settings/SettingConfig";
import { getText } from "./Text";
import { format } from "date-fns";
import { FeildGeneralProps } from "@/types/global";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { useCopyState } from "@/hooks";
import { Tip } from "@/components/Tip";
export const dateToStringForInput = (date: Date, to: SettingConfig["date"]["format"] = "datetime-local") => {
  if (to == "time") {
    return format(date, "HH:mm");
  } else if (to == "month") {
    return format(date, "yyyy-MM");
  } else if (to == "date") {
    return format(date, "yyyy-MM-dd");
  } else {
    return date.toISOString().replace(/\.[0-9]+Z/gi, "");
  }
};
export type DateFeildProps = FeildGeneralProps<SettingValueType["date"] | undefined, SettingConfig["date"]>;
//
export function DateFeild({ state, config = {}, id }: DateFeildProps) {
  const colorMerge = useColorMerge();
  const focused = useCopyState(false);
  const styleView = colorMerge("secondry.background", {
    borderColor: "borders",
  });
  const error = useCopyState(true);
  const borderStyle = colorMerge(
    focused.get &&
      error.get && {
        borderColor: "primary",
      },
    focused.get &&
      !error.get && {
        borderColor: "checkbox.true",
      },
  );
  const noProvidedMessage = getText("no provided");
  const resetToDefault = React.useCallback(() => {
    const currentDate = new Date();
    state.set(dateToStringForInput(currentDate, config.format));
  }, [config.format]);
  return (
    <div
      className={tw(`
        border
        border-solid
        border-transparent
        rounded-[4px]
        flex
        px-1
      `)}
      style={{
        ...styleView,
        ...borderStyle,
      }}
    >
      <Input
        id={id}
        style={{
          backgroundColor: "transparent",
        }}
        type={config.format && ["date", "time", "month"].includes(config.format) ? config.format : "datetime-local"}
        value={state.get ?? undefined}
        onKeyDown={(e) => {
          const current = new Shortcut("control+shift+d");
          if (current.test(e)) {
            resetToDefault();
            return;
          }
          const deleteAll = new Shortcut("control+backspace");
          if (deleteAll.test(e)) {
            state.set("");
          }
        }}
        onChange={(e) => {
          const date = e.currentTarget.value;
          if (!date) {
            error.set(true);
            return;
          }
          error.set(false);
          state.set(date);
        }}
        className={tw(`p-1 border-none`)}
        onBlur={() => {
          focused.set(false);
        }}
        onFocus={() => {
          focused.set(true);
        }}
        title={state.get || noProvidedMessage}
      />
      <div className="inline-flex items-center tools">
        {config.goToCurrent && (
          <Tip
            icon={faClockRotateLeft}
            onClick={() => {
              resetToDefault();
            }}
          />
        )}
      </div>
    </div>
  );
}
