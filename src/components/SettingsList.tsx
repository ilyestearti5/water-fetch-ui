import React from "react";
import { getModifier } from "@/reducers/Global/keyboard.slice";
import { settingHooks, getPublicSettingsFilter } from "@/reducers/Settings/settings.model";
import { isLike } from "@/utils/index";
import { tw } from "@/utils";
import { useCopyState } from "@/hooks";
import { feildHooks } from "@/data/system/feild.model";
import { useColorMerge } from "@/data/system/colors.model";
import { Tip } from "@/components/Tip";
import { faArrowTurnDown, faGear } from "@fortawesome/free-solid-svg-icons";
import { useAction } from "@/data/system/actions.model";
import { TitleView } from "@/components/Title";
import { showSetting } from "main/src/hooks/db.hooks";
import { FastList } from "./FastList";
export function SettingsList() {
  const settings = getPublicSettingsFilter();
  return (
    <FastList
      data={settings}
      slotId="configurations"
      focusId="configurations"
      itemSize={50}
      overflow={{
        top: 4,
        bottom: 4,
      }}
      countLastItems={-1}
      component={({ data: setting, index, style, status, handel, id }) => {
        const isControl = getModifier("Control");
        const hover = useCopyState(false);
        const canReset = React.useMemo(() => {
          return !setting.settingId.match(/\.password$/gi) && !isLike(setting.def, setting.value);
        }, [setting]);
        /* colors */
        const colorMerge = useColorMerge();
        // hover
        useAction(
          "showSubmitSetting",
          () => {
            status.isSubmited && showSetting(setting.settingId);
          },
          [status],
        );
        const gearVisible = React.useMemo(() => {
          return status.isFocused || status.isSubmited || hover.get;
        }, [status, hover.get]);
        // render component
        return (
          <div
            id={id}
            onMouseEnter={() => hover.set(true)}
            onMouseLeave={() => hover.set(false)}
            className={tw(
              `
                flex
                items-center
                justify-between
                h-[70px]
                p-4
                cursor-default
                border
                border-solid
                border-transparent
              `,
            )}
            style={{
              ...colorMerge(
                index % 2 && "primary.background",
                index % 2 == 0 && "secondry.background",
                hover.get && "gray.opacity",
                status.isFocused && {
                  borderColor: "primary",
                },
                status.isSubmited && {
                  backgroundColor: "secondry",
                  color: "secondry.content",
                },
              ),
              ...style,
            }}
            onClick={() => {
              handel.focus();
              handel.submit();
            }}
          >
            {!isLike(setting.value, setting.def) && (
              <div
                className="left-0 absolute inset-y-0 w-[3px]"
                style={{
                  ...colorMerge("primary"),
                }}
              />
            )}
            <h1
              className={tw(`
                flex
                gap-1
                items-center
                overflow-hidden
              `)}
            >
              <span
                className={tw("text-xl capitalize truncate", isControl && "hover:underline cursor-pointer")}
                onClick={() => {
                  isControl && setting.name != undefined && feildHooks.setOneFeild("findConfigurations", "value", setting.name);
                }}
              >
                {setting.name || (
                  <span
                    style={colorMerge({
                      color: "gray.opacity.2",
                    })}
                  >
                    name not provided
                  </span>
                )}
              </span>
            </h1>
            <span
              className={tw("inline-flex gap-1 items-center text-xs italic font-extralight truncate")}
              onClick={() => {
                isControl && feildHooks.setOneFeild("findConfigurations", "value", `@id ${setting.settingId}`);
              }}
            >
              <span
                className={tw(isControl && "hover:underline cursor-pointer")}
                style={colorMerge(
                  isControl &&
                    hover.get && {
                      color: "primary",
                    },
                )}
              >
                @<span className="font-normal">{setting.settingId}</span>
              </span>
              <div className={tw(`flex opacity-0 transition-[opacity] duration-500`, gearVisible && "opacity-100")}>
                {canReset && (
                  <TitleView title="reset">
                    <Tip
                      icon={faArrowTurnDown}
                      onClick={() => {
                        settingHooks.setOneFeild(setting.settingId, "value", setting.def!);
                      }}
                    />
                  </TitleView>
                )}
                <TitleView title={"configurate"}>
                  <Tip
                    onClick={() => {
                      showSetting(setting.settingId);
                    }}
                    icon={faGear}
                  />
                </TitleView>
              </div>
            </span>
          </div>
        );
      }}
    />
  );
}
