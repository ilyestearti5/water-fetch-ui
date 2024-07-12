import React from "react";
import { settingHooks } from "@/reducers/Settings/settings.model";
import { con, isLike } from "utils/index";
import { setFocused } from "@/functions/react-utils";
import { tw } from "@/functions/react-utils";
import { MarkDown } from "@/Components/Helpers/MarkDown";
import { Scroll } from "@/Components/Helpers/Scroll";
import { useColorMerge } from "models/system/colors.model";
import { Tip } from "@/Components/Helpers/Buttons";
import { faArrowDown19, faArrowDownAZ, faArrowRight, faArrowsTurnRight, faCheck, faCode, faFileUpload, faList, faLock, faRightToBracket, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTemp } from "@/reducers/Object/object.slice";
import { Line } from "@/Components/Helpers/Line";
import { SettingUpdating } from "./SettingUpdating";
import { JoinComponentBy } from "@/Components/Helpers/JoinComponentBy";
import { EmptyComponent } from "@/Components/Helpers/EmptyComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { store } from "@/store";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { BlurOverlay } from "@/Components/Helpers/Overlays";
import { faAudible } from "@fortawesome/free-brands-svg-icons";
import { webApi } from "@/functions/app/web";
export const SettingUpdateView = React.memo(
  () => {
    const colorMerge = useColorMerge();
    const id = useTemp<string>("view.settings");
    const setting = settingHooks.getOne(id.get || "");
    const canReset = React.useMemo(() => {
      if (!setting || setting.settingId.match(/\.password$/gi)) {
        return false;
      }
      return !isLike(setting.def, setting.value);
    }, [setting]);
    const finalDescription = React.useMemo(() => {
      try {
        const fn = Function(`return (state)=> \`${setting?.desc || "**no description defined**"}\` `)() as (state: any) => string;
        const state = store.getState();
        return fn(state);
      } catch (e) {
        con.err(e);
        return " - ";
      }
    }, [setting?.desc]);
    return (
      <BlurOverlay
        onLoadContent={() => {
          id.get && setFocused(`setting:${id.get}`);
        }}
        hidden={!id.get}
      >
        <div
          hidden={!id.get}
          className={tw(`rounded-md border-solid border border-transparent w-1/2`)}
          style={colorMerge("secondry.background", {
            borderColor: "borders",
          })}
        >
          <div className="flex justify-between items-center gap-1 p-3">
            {setting && (
              <EmptyComponent>
                <h1 className="text-2xl">{setting.name}</h1>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <JoinComponentBy
                    list={setting.settingId
                      .split("/")
                      .filter(Boolean)
                      .map((keySetting, index) => {
                        const settingType = keySetting.match(/\..+$/gi)?.[0].slice(1);
                        //
                        let icon: IconDefinition | null = null;
                        switch (settingType) {
                          case "boolean": {
                            icon = faCheck;
                            break;
                          }
                          case "password": {
                            icon = faLock;
                            break;
                          }
                          case "number": {
                            icon = faArrowDown19;
                            break;
                          }
                          case "string": {
                            icon = faArrowDownAZ;
                            break;
                          }
                          case "file": {
                            icon = faFileUpload;
                            break;
                          }
                          case "enum": {
                            icon = faList;
                            break;
                          }
                          case "object": {
                            icon = faCode;
                            break;
                          }
                          case "array": {
                            icon = faRightToBracket;
                            break;
                          }
                          case "audio": {
                            icon = faAudible;
                          }
                        }
                        //
                        return (
                          <span
                            className="inline-flex items-center gap-x-2 px-2 py-1 rounded-md"
                            style={{
                              ...colorMerge("gray.opacity.2"),
                            }}
                            key={index}
                          >
                            {keySetting.replaceAll(/\..+$/gi, "")}
                            {icon && <FontAwesomeIcon icon={icon} />}
                          </span>
                        );
                      })}
                    joinComponent={<FontAwesomeIcon icon={faArrowRight} />}
                  />
                </div>
              </EmptyComponent>
            )}
            <div className="flex tools">
              {canReset && (
                <Tip
                  icon={faArrowsTurnRight}
                  onClick={async () => {
                    const { response } = await webApi.openDialog({
                      message: "are you sure about reset this setting",
                      buttons: ["No", "Yes"],
                      defaultId: 1,
                    });
                    if (response && setting) {
                      settingHooks.setOneFeild(setting.settingId, "value", setting.def!);
                    }
                  }}
                />
              )}
              <Tip
                onClick={() => {
                  id.set(null);
                  setFocused("findConfigurations");
                }}
                icon={faXmark}
              />
            </div>
          </div>
          <Line />
          {setting && (
            <EmptyComponent>
              <Scroll className="p-2 max-h-[150px]">
                <MarkDown value={finalDescription} />
              </Scroll>
              <Line />
            </EmptyComponent>
          )}
          {id.get && (
            <div className="p-3">
              <SettingUpdating settingId={id.get} />
            </div>
          )}
        </div>
      </BlurOverlay>
    );
  },
  () => false,
);