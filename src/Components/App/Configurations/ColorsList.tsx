import React from "react";
import { include, transformCase } from "utils/index";
import { tw, useCopyState } from "@/functions/react-utils";
import { FastList } from "Components/Performnce";
import { colorHooks, getColor, useColorMerge } from "models/system/colors.model";
import { feildHooks } from "models/system/feild.model";
import Input from "Components/ReactComponentOnly/Input";
import { getSettingValue } from "@/reducers/Settings/settings.model";
import { TitleView } from "Components/Helpers/Title";
import { setTemp } from "@/reducers/Object/object.slice";
import { Tip } from "@/Components/Helpers/Buttons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export function ColorsList() {
  const findConfigurationsValue = feildHooks.getOneFeild("findConfigurations", "value");
  const allColors = colorHooks.getAll();
  const colorList = React.useMemo(() => {
    return typeof findConfigurationsValue == "string" ? allColors.filter(({ colorId }) => include(colorId, findConfigurationsValue)) : allColors;
  }, [allColors, findConfigurationsValue]);
  React.useEffect(() => {
    setTemp("configurations.found.length", colorList.length);
  }, [colorList]);
  // Render Component
  return (
    <FastList
      countLastItems={-1}
      focusId="colors-list"
      slotId="colors-list"
      data={colorList}
      itemSize={50}
      component={({ data, style, status, index, handel }) => {
        const hover = useCopyState(false);
        const copyed = useCopyState(false);
        const colorMerge = useColorMerge();
        const isDark = getSettingValue("window/dark.boolean");
        const backgroundColor = React.useMemo(() => {
          return getColor(!!isDark, data);
        }, [isDark, data]);
        let timer: NodeJS.Timeout | null = null;
        return (
          <div
            onMouseEnter={() => hover.set(true)}
            onMouseLeave={() => hover.set(false)}
            style={{
              ...style,
              ...colorMerge(
                index % 2 && "primary.background",
                hover.get && "gray.opacity",
                status.isFocused && { borderColor: "primary" },
                status.isSubmited && {
                  backgroundColor: "secondry",
                  color: "secondry.content",
                },
              ),
            }}
            className={tw(`
              flex
              justify-between
              items-center
              p-3
              gap-2
              border
              border-solid
              border-transparent
            `)}
            onClick={() => {
              handel.focus();
              handel.submit();
            }}
          >
            <div className="flex items-center gap-x-2">
              <span className="capitalize">{transformCase(data.colorId.replace(/[^a-zA-Z0-9]+/gi, " "), "camel", "normal")}</span>
            </div>
            <span className="inline-flex flex-wrap items-center gap-x-2">
              {data.propositions?.map((backgroundColor, index) => {
                return (
                  <span
                    key={index}
                    className={tw(`
                      inline-block
                      w-[25px]
                      h-[25px]
                      rounded-md
                      border
                      border-solid
                      border-transparent
                    `)}
                    style={{
                      backgroundColor,
                      ...colorMerge({
                        borderColor: "borders",
                      }),
                    }}
                  />
                );
              })}
              <TitleView title={`**${backgroundColor}**`.toUpperCase()}>
                <label
                  key={index}
                  className={tw(`
                  inline-block
                  w-[25px]
                  h-[25px]
                  rounded-md
                  border
                  border-solid
                  border-transparent
                `)}
                  style={{
                    backgroundColor,
                    borderColor: "white",
                  }}
                  htmlFor={`color:${data.colorId}`}
                />
              </TitleView>
              <div className="flex items-center tips">
                {hover.get && (
                  <Tip
                    icon={copyed.get ? faCheck : faCopy}
                    onClick={async () => {
                      if (!backgroundColor) {
                        return;
                      }
                      copyed.set(true);
                      await navigator.clipboard.writeText(backgroundColor);
                    }}
                    onMouseLeave={() => {
                      copyed.set(false);
                    }}
                  />
                )}
                <Input
                  id={`color:${data.colorId}`}
                  tabIndex={-1}
                  value={backgroundColor}
                  type="color"
                  onValueChange={(value) => {
                    timer != null && clearTimeout(timer);
                    timer = setTimeout(() => {
                      colorHooks.setOneFeild(data.colorId, isDark ? "dark" : "light", value);
                    }, 1000);
                  }}
                  className="w-0 h-0 invisible pointer-events-none"
                />
              </div>
            </span>
          </div>
        );
      }}
    />
  );
}
