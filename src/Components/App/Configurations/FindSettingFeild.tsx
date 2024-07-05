import React from "react";
import { viewHooks } from "models/system/views.model";
import { Feild } from "Components/Feilds/Feild";
import { transformCase } from "utils/index";
import { getTemp } from "@/reducers/Object/object.slice";
import { Text, getText } from "Components/Text";
import { feildHooks, initNewFeild } from "models/system/feild.model";
import { setFocused, useCopyState, useEffectDelay } from "@/functions/react-utils";
import { useColorMerge } from "models/system/colors.model";
import { TitleView } from "@/Components/Helpers/Title";
import { visibilityTemp } from "@/reducers/Object/allTemps";
export function FindSettingFeild() {
  const focused = viewHooks.getOneFeild("settings", "focused");
  const isOpened = visibilityTemp.getTemp<boolean>("config");
  const feildContent = feildHooks.getOneFeild("findConfigurations", "value");
  initNewFeild("findConfigurations");
  const colorMerge = useColorMerge();
  const lengthOfConfigsFound = getTemp<number>("configurations.found.length");
  const s = React.useMemo(() => transformCase(focused || "no settings focused", "camel", "normal"), [focused]);
  const placeholder = getText(`search ${s} in list`);
  const focusedConfig = getText(s);
  const hover = useCopyState(false);
  const findConfigurationsLocal = feildHooks.getOneFeild("findConfigurations-local", "value");
  useEffectDelay(
    () => {
      typeof findConfigurationsLocal == "string" && feildHooks.setOneFeild("findConfigurations", "value", findConfigurationsLocal);
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
            .filter((string) => !feildContent?.includes(string))}
          tabIndex={isOpened ? -1 : 1}
        />
        <div className="top-1/2 right-2 absolute flex items-center gap-2 -translate-y-1/2">
          {Boolean(feildContent) && (
            <TitleView
              title="clear"
              onClick={() => {
                feildHooks.setOneFeild("findConfigurations-local", "value", "");
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
                  <Text content="found" /> {lengthOfConfigsFound} <Text content={focusedConfig} />
                </span>
                {hover.get && (
                  <span>
                    {" "}
                    (<Text content="Delete" />)
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
