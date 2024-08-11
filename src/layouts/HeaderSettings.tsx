import React from "react";
import { Tip } from "@/components/Tip";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { viewHooks } from "@/data/system/views.model";
import { settingHooks } from "@/reducers/Settings/settings.model";
import { transformCase } from "@/utils/index";
import { getText } from "@/components/Text";
import { TitleView } from "@/components/TitleView";
// desc: this var is the path to the visibility of the settings
const settingsVisibility = "visibility/configurations.boolean";
// desc: this is the header of the settings view
export const HeaderSettings = () => {
  const focusTabSetting = viewHooks.getOneFeild("settings", "focused");
  const transformedString = React.useMemo(() => {
    return transformCase(String(focusTabSetting), "camel", "normal");
  }, [focusTabSetting]);
  const title = getText(transformedString);
  return (
    <div className="flex justify-between items-center p-2">
      <h1 className="font-bold text-2xl capitalize">{title}</h1>
      <div className="tools">
        <TitleView
          position={{
            x: "left",
            y: "bottom",
          }}
          title="close view configurations"
        >
          <Tip
            onClick={() => {
              settingHooks.setOneFeild(settingsVisibility, "value", false);
            }}
            icon={faXmark}
          />
        </TitleView>
      </div>
    </div>
  );
};
