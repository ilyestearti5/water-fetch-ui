import React from "react";
import { viewHooks } from "@/data/system/views.model";
import { Feild } from "../components/Fields/Field";
import { transformCase } from "@/utils/index";
import { getTemp } from "@/reducers/Object/object.slice";
import { Translate, useTranslate } from "@/components/Translate";
import { fieldHooks, initNewFeild } from "@/hooks";
import { setFocused } from "@/utils";
import { useColorMerge } from "@/hooks";
import { TitleView } from "@/components/TitleView";
import { visibilityTemp } from "@/reducers/Object/allTemps";
import { useCopyState, useEffectDelay } from "@/hooks";
export function FindSettingFeild() {
  const focused = viewHooks.getOneFeild("settings", "focused");
  const isOpened = visibilityTemp.getTemp<boolean>("config");
  const fieldContent = fieldHooks.getOneFeild("findConfigurations", "value");
  initNewFeild("findConfigurations");
  const colorMerge = useColorMerge();
  const lengthOfConfigsFound = getTemp<number>("configurations.found.length");
  const s = React.useMemo(() => transformCase(focused || "no settings focused", "camel", "normal"), [focused]);
  const [placeholder] = useTranslate(`search ${s} in list`);
  const [focusedConfig] = useTranslate(s);
  const hover = useCopyState(false);
  const findConfigurationsLocal = fieldHooks.getOneFeild("findConfigurations-local", "value");
  useEffectDelay(
    () => {
      typeof findConfigurationsLocal == "string" && fieldHooks.setOneFeild("findConfigurations", "value", findConfigurationsLocal);
    },
    [findConfigurationsLocal],
    500,
  );
  return (
    <div
      className="p-2 border-transparent border-b border-solid"
      onClick={() => {
        setFocused("findConfigurations");
      }}
    >
      <div className="relative w-full">
        <Feild
          selectWhenFocusIn
          inputName="findConfigurations-local"
          placeholder={placeholder}
          propositions={(focused == "user" ? ["id", "name", "changed"] : focused == "keyboardShortcuts" ? ["key", "label", "commandId"] : [])
            .map((s) => `@${s}`)
            .filter((string) => !fieldContent?.includes(string))}
          tabIndex={isOpened ? -1 : 1}
        />
        <div className="top-1/2 right-2 absolute flex items-center gap-2 -translate-y-1/2">
          {Boolean(fieldContent) && (
            <TitleView
              title="clear"
              onClick={() => {
                fieldHooks.setOneFeild("findConfigurations-local", "value", "");
              }}
              onMouseEnter={() => {
                hover.set(true);
              }}
              onMouseLeave={() => {
                hover.set(false);
              }}
            >
              <div
                className="px-2 py-1 rounded-sm cursor-pointer"
                style={{
                  ...colorMerge("primary", {
                    color: "primary.content",
                  }),
                }}
              >
                <span>
                  <Translate content="found" /> {lengthOfConfigsFound} <Translate content={focusedConfig} />
                </span>
                {hover.get && (
                  <span>
                    {" "}
                    (<Translate content="Delete" />)
                  </span>
                )}
              </div>
            </TitleView>
          )}
        </div>
      </div>
    </div>
  );
}
