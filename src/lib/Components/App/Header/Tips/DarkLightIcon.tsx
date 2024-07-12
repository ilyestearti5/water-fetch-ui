import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { settingHooks } from "@/reducers/Settings/settings.model";
import React from "react";
import { tw } from "@/functions/react-utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useColorMerge } from "models/system/colors.model";
import { getText } from "@/Components/Text";
import { TitleView } from "@/Components/Helpers/Title";
export const DarkLightIcon = React.memo(
  () => {
    const isDark = settingHooks.useOneFeild("window/dark.boolean", "value");
    const colorMerge = useColorMerge();
    const toLight = getText("toggle to light");
    const toDark = getText("toggle to dark");
    return (
      <TitleView
        title={(isDark.get ? toLight : toDark) ?? undefined}
        position={{
          x: "left",
          y: "bottom",
        }}
        className="flex items-center"
      >
        <button
          tabIndex={-1}
          className={tw(`
            relative
            inline-block
            h-[20px]
            w-[40px]
            rounded-[20px]
            border
            border-solid
            border-transparent
          `)}
          onClick={() => {
            isDark.set(!isDark.get);
          }}
          style={{
            ...colorMerge({
              backgroundColor: "primary.background",
              borderColor: "borders",
            }),
          }}
        >
          <span
            className={tw(
              `
                transition-[left]
                duration-200
                w-[20px]
                inline-flex
                items-center
                justify-center
                text-xs
                h-[20px]
                rounded-full
                absolute
                inset-y-0
                top-1/2
                -translate-y-1/2
                border-solid
                border
                border-transparent
                left-0
              `,
              isDark.get && "left-1/2",
            )}
            style={{
              ...colorMerge("primary.background", {
                borderColor: "borders",
              }),
            }}
          >
            <FontAwesomeIcon icon={isDark.get ? faMoon : faSun} />
          </span>
        </button>
      </TitleView>
    );
  },
  () => false,
);
