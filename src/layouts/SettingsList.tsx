import React from "react";
import { getModifier } from "@/reducers/Global/keyboard.slice";
import { settingHooks } from "@/reducers/Settings/settings.model";
import { isLike } from "@/utils/index";
import { tw } from "@/utils";
import { usePublicSettingsFilter, showSetting, useCopyState } from "@/hooks";
import { fieldHooks } from "@/data/system/field.model";
import { useColorMerge } from "@/hooks";
import { Tip } from "@/components/Tip";
import { faArrowTurnDown, faGear } from "@fortawesome/free-solid-svg-icons";
import { useAction } from "@/data/system/actions.model";
import { TitleView } from "@/components/TitleView";
import { FastList } from "../components/FastList";
export function SettingsList() {
  const settings = usePublicSettingsFilter();
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
                index % 2 == 0 && "secondary.background",
                hover.get && "gray.opacity",
                status.isFocused && {
                  borderColor: "primary",
                },
                status.isSubmited && {
                  backgroundColor: "secondary",
                  color: "secondary.content",
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
                  isControl && setting.name != undefined && fieldHooks.setOneFeild("findConfigurations", "value", setting.name);
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
                isControl && fieldHooks.setOneFeild("findConfigurations", "value", `@id ${setting.settingId}`);
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
