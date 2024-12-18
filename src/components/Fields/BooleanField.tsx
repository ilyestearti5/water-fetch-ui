import { useColorMerge } from "@/hooks";
import { tw } from "@/utils";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { useCopyState } from "@/hooks";
import { Icon } from "../Icon";
import { allIcons } from "@/apis";
export type BooleanFeildProps = FeildGeneralProps<boolean | null, SettingConfig["boolean"]>;
export function BooleanFeild({ state, config = {}, id }: BooleanFeildProps) {
  const isActive = React.useMemo(() => {
    return typeof state.get == "boolean" ? state.get : false;
  }, [state.get]);
  React.useEffect(() => {
    return () => {
      focused.set(false);
    };
  }, []);
  const colorMerge = useColorMerge();
  const focused = useCopyState(false);
  // desc: This is a boolean field component that can be used to toggle between true and false values.
  return (
    <span className="inline-flex items-center gap-1 overflow-hidden">
      {config.style == "checkbox" ? (
        <button
          onClick={() => {
            state.set((s) => !s);
          }}
          onFocus={() => {
            focused.set(true);
          }}
          onBlur={() => {
            focused.set(false);
          }}
          id={id}
          style={{
            ...colorMerge(
              "checkbox.background",
              {
                borderColor: "borders",
              },
              focused.get && { outlineColor: "primary" },
            ),
          }}
          className={tw(`
            inline-flex
            w-[20px]
            h-[20px]
            items-center
            justify-center
            rounded-md
            border-solid
            border
            border-transparent
            outline-1
            -outline-offset-1
            outline-transparent
          `)}
        >
          <Icon
            iconClassName={tw(
              `
              transform
              transition-transform
              duration-300
              scale-0
            `,
              isActive && "scale-100",
            )}
            icon={faCheck}
          />
        </button>
      ) : (
        <button
          id={id}
          onFocus={() => focused.set(true)}
          onBlur={() => focused.set(false)}
          onClick={() => {
            state.set((s) => !s);
          }}
          type="button"
          className={tw(`
            inline-block
            w-[40px]
            h-[20px]
            relative
            rounded-full
            shadow-lg
            border-solid
            border
            border-transparent
          `)}
          style={{
            ...colorMerge(
              "checkbox.background",
              {
                borderColor: "borders",
              },
              focused.get && { borderColor: "primary" },
            ),
          }}
        >
          <span
            className={tw(`absolute left-0 inline-flex items-center justify-center top-1/2 transform -translate-y-1/2 w-[20px] h-[20px] rounded-full duration-300 text-white`, isActive && "left-1/2")}
            style={{
              ...colorMerge(isActive && "checkbox.true", !isActive && "checkbox.false"),
            }}
          >
            <FontAwesomeIcon icon={isActive ? allIcons.solid.faCheck : allIcons.solid.faXmark} />
          </span>
        </button>
      )}
      <label htmlFor={id}>{(isActive ? config?.onActive : config?.onDisactive) || ""}</label>
    </span>
  );
}
