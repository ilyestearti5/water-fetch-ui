import { notifayHooks } from "@/data/system/notifications.model";
import { tw } from "@/utils";
import { Tip } from "@/components/Tip";
import { Focus } from "@/components/Focus";
import { Scroll } from "@/components/Scroll";
import { faChevronDown, faChevronRight, faChevronUp, faXmarksLines } from "@fortawesome/free-solid-svg-icons";
import { Line } from "@/components/Line";
import { NotifaysSlot } from "./NotifaysSlot";
import { useAction } from "@/data/system/actions.model";
import { slotHooks } from "@/data/system/slot.slice";
import React from "react";
import { Translate } from "@/components/Translate";
import { useSettingValue, handelShadowColor, openDialog, setSettingValue, settingHooks, useColorMerge } from "@/hooks";
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
        overflow-hidden;
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
        className="notifay-top-view flex justify-between items-center gap-2 p-3 cursor-pointer"
        onClick={() => {
          settingHooks.setOneFeild(notsVisibility, "value", !notes);
        }}
      >
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
        <div className="flex gap-3 text-xl">
          {!!notifaysIds.length && (
            <Tip
              onClick={async () => {
                let response = 1;
                if (confirmationBefore) {
                  const props = await openDialog({
                    message: "Do You Want To Clear All Notifications",
                    checkboxLabel: "Don't Ask Me Again",
                    buttons: ["No", "Yes"],
                  });
                  if (props.checkboxChecked) {
                    setSettingValue("notification/clearAllConfirmation.boolean", false);
                  }
                  response = props.response;
                }
                if (response) {
                  notifayHooks.remove(notifays.filter(({ removable = true }) => removable).map(({ id }) => id));
                }
              }}
              icon={faXmarksLines}
            />
          )}
          <Tip
            onClick={() => {
              settingHooks.setOneFeild(notificationVisibility, "value", false);
            }}
            icon={faChevronRight}
          />
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
