import { FindSettingFeild } from "./FindSettingFeild";
import { KeyboardShortcuts } from "./KeyboardShortcuts";
import { UserSetting } from "./UserSetting";
import { Line } from "Components/Helpers/Line";
import { ViewPage } from "Components/Helpers/ViewPage";
import { Icons } from "./Icons";
import { ColorsList } from "./ColorsList";
import { showSetting } from "@/hooks/db.hooks";
import React from "react";
import { visibilityTemp } from "@/reducers/Object/allTemps";
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
