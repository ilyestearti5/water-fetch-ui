import React from "react";
import { useSettingValue, handelShadowColor, openDialog, setSettingValue, settingHooks, useColorMerge } from "@/hooks";
import { useAction } from "@/data/system/actions.model";
import { tw } from "@/utils";
import { Translate } from "@/components/Translate";
import { slotHooks } from "@/data/system/slot.slice";
import { Scroll } from "@/components/Scroll";
import { NotifaysSlot } from "./NotifaysSlot";
import { notifayHooks } from "@/data/system/notifications.model";
import { Line } from "@/components/Line";
import { Focus } from "@/components/Focus";
import { CircleTip } from "@/components";
import { allIcons } from "@/apis";
const notificationVisibility = "visibility/notifays.boolean";
const notsVisibility = "visibility/notifays/nots.boolean";
//
export function Notifications() {
  const visibility = useSettingValue(notificationVisibility);
  // visibility for if show notifications or not
  const notes = useSettingValue(notsVisibility);
  const notifaysIds = notifayHooks.getIds();
  const colorMerge = useColorMerge();
  const focusedIndex = slotHooks.getOneFeild("notification", "focused");
  const notifays = notifayHooks.getAll();
  const focusedNotifay = React.useMemo(() => {
    if (typeof focusedIndex != "number") {
      return null;
    }
    return notifays[focusedIndex] || null;
  }, [notifays, focusedIndex]);
  useAction(
    "toggleExpandNotifay",
    () => {
      focusedNotifay && notifayHooks.setOneFeild(focusedNotifay.id, "showDesc", !focusedNotifay.showDesc);
    },
    [focusedNotifay],
  );
  useAction(
    "notification.deleteFocus",
    () => {
      focusedNotifay && notifayHooks.remove([focusedNotifay.id]);
    },
    [focusedNotifay],
  );
  const isAnimation = useSettingValue("preferences/animation.boolean");
  const confirmationBefore = useSettingValue("notification/clearAllConfirmation.boolean");
  const notificationsToolsElement = React.createRef<HTMLDivElement>();
  return (
    <div
      onClick={() => {
        if (!visibility) {
          settingHooks.setOneFeild(notificationVisibility, "value", true);
        }
      }}
      className={tw(
        `
          z-[1000000000000]
          transition-transform
          shadow-xl
          duration-300
          fixed
          bottom-[10px]
          right-[10px]
          rounded-xl
          w-[400px]
          max-md:w-[calc(100%-20px)]
          border
          border-solid
          border-transparent
          overflow-hidden
      `,
        !visibility && "translate-x-[calc(100%)]",
      )}
      style={{
        ...colorMerge({
          backgroundColor: "secondary.background",
          borderColor: "borders",
          boxShadow: handelShadowColor([
            {
              colorId: "shadow.color",
              blur: 3,
              size: 2,
              x: 0,
              y: 0,
            },
          ]),
        }),
      }}
    >
      <div
        onClick={({ target }) => {
          if (!visibility || notificationsToolsElement.current?.contains(target as HTMLElement)) {
            return;
          }
          settingHooks.setOneFeild(notsVisibility, "value", !notes);
        }}
      >
        <div className="notifay-top-view flex justify-between items-center gap-2 p-3 cursor-pointer">
          <h3 className="font-bold text-lg uppercase notifay-full-title">
            <span
              style={{
                ...colorMerge(
                  {
                    color: "gray.opacity.2",
                  },
                  notifaysIds.length && {
                    color: "primary",
                  },
                ),
              }}
              className="mr-2"
            >
              {!notes && `(${notifaysIds.length})`}
            </span>
            <Translate content="notifications" />
          </h3>
          <div ref={notificationsToolsElement} className="inline-flex">
            {!!notifaysIds.length && (
              <CircleTip
                onClick={async () => {
                  let response = 0;
                  if (confirmationBefore) {
                    const props = await openDialog({
                      title: "Clear All Notifications",
                      message: "Do You Want To Clear All Notifications",
                      checkboxLabel: "Don't Ask Me Again",
                      buttons: ["Yes", "No"],
                      defaultId: 0,
                    });
                    if (props.checkboxChecked) {
                      setSettingValue("notification/clearAllConfirmation.boolean", false);
                    }
                    response = props.response;
                  }
                  if (response) {
                    return;
                  }
                  notifayHooks.remove(notifays.filter(({ removable = true }) => removable).map(({ id }) => id));
                }}
                icon={allIcons.solid.faXmarksLines}
              />
            )}
            <CircleTip
              onClick={() => {
                settingHooks.setOneFeild(notificationVisibility, "value", false);
              }}
              icon={allIcons.solid.faChevronRight}
            />
          </div>
        </div>
      </div>
      {Boolean(notifaysIds.length) && notes && <Line />}
      <Focus
        focusId="notifications"
        ignoreOutline={!!focusedNotifay}
        className={tw(`flex flex-col overflow-hidden max-h-[80vh] rounded-ee-xl rounded-es-xl`, isAnimation && "duration-300 transition-[max-height]", !notes && "max-h-[0vh]")}
      >
        <Scroll>
          <NotifaysSlot />
        </Scroll>
      </Focus>
    </div>
  );
}
