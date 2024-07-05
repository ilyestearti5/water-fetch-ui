import React from "react";
import { Note, Tab } from "@/Components/Helpers/Buttons";
import { getSettingValue } from "@/reducers/Settings/settings.model";
import { Focus } from "Components/Helpers/Focus";
import { List } from "@/hooks/list.hooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { viewHooks } from "models/system/views.model";
import { getIcon, useCopyState } from "@/functions/react-utils";
import { tw } from "@/functions/react-utils";
import { handelShadowColor, useColorMerge } from "models/system/colors.model";
import { execCommand } from "models/system/command.model";
import { getSlotData, slotHooks } from "models/system/slot.slice";
import { getKeys } from "models/system/keys.model";
import { Db } from "@/functions/classes";
import { Scroll } from "Components/Helpers/Scroll";
import { getText } from "Components/Text";
import { TitleView } from "Components/Helpers/Title";
import { getTemp } from "@/reducers/Object/object.slice";
/*
 ******************************************************************************************************************************************************
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 *                                                                                                                                                    *
 ******************************************************************************************************************************************************
 */
const activityVisibility = "visibility/activity.boolean";
const activitySlotId = "activity/tools";
// Activity Side Component
export function Activity() {
  const isAnimation = getSettingValue("preferences/animation.boolean"); // animation
  const visibility = getSettingValue(activityVisibility);
  const positionOf = getSettingValue("activity.position.enum");
  const tabs = viewHooks.getOneFeild("window", "tabs");
  const focused = viewHooks.getOneFeild("window", "focused");
  const tabsList = React.useMemo(
    () =>
      Object.entries(tabs || {}).map(([key, props]) => ({
        ...props,
        label: String(props.label),
        key,
        isFocused: key == focused,
      })),
    [focused, tabs],
  );
  const submitedTab = getSlotData(tabsList, activitySlotId);
  const colorMerge = useColorMerge();
  const isFocused = getTemp<boolean>("window.isFocused");
  React.useEffect(() => {
    if (submitedTab && !submitedTab.isFocused) {
      viewHooks.setOneFeild("window", "focused", submitedTab.key);
      slotHooks.setOneFeild(activitySlotId, "submited", null);
    }
  }, [submitedTab]);
  React.useEffect(() => {
    const index = tabsList.findIndex((tab) => tab.isFocused);
    slotHooks.setOneFeild(activitySlotId, "focused", index);
  }, [tabsList]);
  // color merge
  return (
    <div aria-label="activity">
      <div
        className={tw(`flex flex-col h-full justify-between border-x-0 border-transparent border-solid w-[0px]`, visibility && "w-[90px] border-x", isAnimation && "transition-[width]")}
        style={{
          ...colorMerge(!isFocused && "secondry.background", {
            borderColor: "borders",
            boxShadow: handelShadowColor([
              {
                colorId: "shadow.color",
                blur: 13,
                size: 3,
                x: 0,
                y: 0,
              },
            ]),
          }),
        }}
        data-position={positionOf}
      >
        <Focus focusId="activity" className="activity-top-bar flex flex-col w-full h-full">
          <div id="activity" className="flex flex-col overflow-hidden">
            <Scroll>
              <List
                slotId={activitySlotId}
                data={tabsList}
                component={({ item, handelSubmit, handelFocus, id, status }) => {
                  const { icon, news, isFocused, label, key } = item;
                  const colorMerge = useColorMerge();
                  const titleOnHover = getSettingValue("activity/titleShowOnHover.boolean");
                  // desc:
                  const commandId = `view.${key}.show`;
                  const allKeys = getKeys();
                  const gotoViewKeys = React.useMemo(() => {
                    const result = Db.join({ commandId }, allKeys, "commandId->command").map(({ value }) => value!);
                    return result;
                  }, [commandId, allKeys]);
                  //
                  const name = getText(label);
                  const hover = useCopyState(false);
                  //
                  return (
                    <div
                      id={id}
                      className={tw(`relative flex flex-col justify-center items-center cursor-pointer py-1`)}
                      onMouseEnter={() => {
                        hover.set(true);
                      }}
                      onMouseLeave={() => {
                        hover.set(false);
                      }}
                    >
                      <div className="relative flex justify-center p-1 w-full">
                        <TitleView title={titleOnHover ? `${name} ${gotoViewKeys.length ? `(\`${gotoViewKeys.join(" , ")}\`)` : ""}` : undefined}>
                          <Tab
                            draggable
                            onClick={handelFocus(
                              handelSubmit(() => {
                                if (isFocused) {
                                  execCommand("view.leftSide.toggle");
                                }
                              }),
                            )}
                            icon={icon ? getIcon(icon.type, icon.value) : undefined}
                            iconClassName="text-xs"
                            isActive={isFocused}
                          >
                            {news && (
                              <Note>
                                <FontAwesomeIcon icon={getIcon(news.type, news.value)} />
                              </Note>
                            )}
                          </Tab>
                        </TitleView>
                        <div
                          className={tw(`transition-[height] duration-300 absolute top-1/2 -translate-y-1/2 right-0 w-[2px] h-[0%]`, (hover.get || status.isFocused) && "h-full")}
                          style={{
                            ...colorMerge(hover.get && "gray.opacity.2", status.isFocused && "primary"),
                          }}
                        />
                      </div>
                      {!titleOnHover && <div className="w-2/3 text-center text-xs capitalize">{name}</div>}
                    </div>
                  );
                }}
              />
            </Scroll>
          </div>
        </Focus>
      </div>
    </div>
  );
}
