import React from "react";
import { setFocused, tw } from "@/utils";
import { SettingsSide } from "../components/SettingsSide";
import { Settings } from "../components/Settings";
import { HeaderSettings } from "../components/HeaderSettings";
import { Line } from "@/components/Line";
import { settingHooks, getSettingValue } from "@/reducers/Settings/settings.model";
import { useColorMerge } from "@/data/system/colors.model";
import { DownOverlay } from "@/components/Overlays";
import { visibilityTemp } from "@/reducers/Object/allTemps";
const settingVisibility = "visibility/configurations.boolean";
export function SettingsView() {
  const visibility = getSettingValue(settingVisibility);
  const colorMerge = useColorMerge();
  React.useEffect(() => {
    if (visibility) {
      visibilityTemp.setTemp<boolean>("config", true);
    }
  }, [visibility]);
  //
  return (
    <DownOverlay
      hidden={!visibility}
      onLoadContent={() => {
        setFocused("findConfigurations-local");
      }}
      onClick={async (e) => {
        if (e.currentTarget != e.target) {
          return;
        }
        settingHooks.setOneFeild(settingVisibility, "value", false);
      }}
      // desc: this is a transition end event to set the value of the visibility to the temp state
      onTransitionEnd={() => {
        if (typeof visibility == "boolean") {
          visibilityTemp.setTemp<boolean>("config", visibility);
        }
      }}
    >
      <div
        className={tw(`
          overflow-hidden
          absolute
          transform
          -translate-y-1/2
          -translate-x-1/2
          top-1/2
          left-1/2
          rounded-2xl
          border
          border-solid
        `)}
        style={{
          ...colorMerge("secondry.background", {
            borderColor: "borders",
          }),
        }}
      >
        <HeaderSettings />
        <Line />
        <div className="flex w-[70vw] h-[70vh]">
          <SettingsSide />
          <Settings />
        </div>
      </div>
    </DownOverlay>
  );
}
