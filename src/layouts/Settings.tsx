import { FindSettingFeild } from "./FindSettingFeild";
import { KeyboardShortcuts } from "./KeyboardShortcuts";
import { Line } from "@/components/Line";
import { ViewPage } from "@/components/ViewPage";
import { Icons } from "@/components/Icons";
import { ColorsList } from "@/components/ColorsList";
import React from "react";
import { visibilityTemp } from "@/reducers/Object/allTemps";
import { UserSetting } from "./UserSetting";
import { showSetting } from "@/hooks";
export function Settings() {
  const visibility = visibilityTemp.getTemp<boolean>("config");
  React.useEffect(() => {
    if (!visibility) {
      showSetting(null);
    }
  }, [visibility]);
  return (
    <div className="flex flex-col w-full h-full overflow-hidden">
      <FindSettingFeild />
      <Line />
      {visibility && (
        <ViewPage
          viewId="settings"
          views={{
            keyboardShortcuts: KeyboardShortcuts,
            user: UserSetting,
            icons: Icons,
            colors: ColorsList,
          }}
        />
      )}
    </div>
  );
}
