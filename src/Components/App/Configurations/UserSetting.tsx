import { List } from "@/hooks/list.hooks";
import { Tip } from "@/Components/Helpers/Buttons";
import { faCodeFork, faList } from "@fortawesome/free-solid-svg-icons";
import { ViewPage } from "Components/Helpers/ViewPage";
import React from "react";
import { viewHooks } from "models/system/views.model";
import { Line } from "Components/Helpers/Line";
import { SettingsList } from "./SettingsList";
import { SettingsTree } from "./SettingsTree";
import { Focus } from "Components/Helpers/Focus";
import { useColorMerge } from "models/system/colors.model";
import { getSlotData, slotHooks } from "models/system/slot.slice";
import { TitleView } from "@/Components/Helpers/Title";
export function UserSetting() {
  const layoutTools = React.useMemo(() => {
    return [
      {
        click() {
          viewHooks.setOneFeild("settings.viewType", "focused", "list");
        },
        title: "list",
        icon: faList,
      },
      {
        click() {
          viewHooks.setOneFeild("settings.viewType", "focused", "tree");
        },
        title: "tree",
        icon: faCodeFork,
      },
    ];
  }, []);
  const submited = getSlotData(layoutTools, "settings.layout.tools");
  React.useEffect(() => {
    if (!submited) {
      return;
    }
    submited.click();
    slotHooks.setOneFeild("settings.layout.tools", "submited", null);
  }, [submited]);
  return (
    <div className="relative flex flex-col w-full h-full overflow-hidden">
      <Focus focusId="settings.layouts" className="flex justify-between items-center p-2">
        <div />
        <div className="flex gap-1 tools">
          <List
            slotId={"settings.layout.tools"}
            data={layoutTools}
            component={({ item: { click, title, icon }, tabIndex, handelFocus, status }) => {
              const colorMerge = useColorMerge();
              return (
                <TitleView
                  title={title}
                  position={{
                    x: "center",
                    y: "top",
                  }}
                >
                  <Tip
                    icon={icon}
                    onPointerDown={handelFocus()}
                    style={{
                      ...colorMerge(
                        status.isFocused && {
                          outlineColor: "primary",
                        },
                      ),
                    }}
                    tabIndex={tabIndex}
                    onClick={click}
                  />
                </TitleView>
              );
            }}
          />
        </div>
      </Focus>
      <Line />
      <ViewPage
        views={{
          list: SettingsList,
          tree: SettingsTree,
        }}
        viewId="settings.viewType"
      />
    </div>
  );
}
