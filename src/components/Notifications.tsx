import { notifayHooks } from "@/data/system/notifications.model";
import { tw } from "@/utils";
import { Tip } from "@/components/Tip";
import { Focus } from "@/components/Focus";
import { Scroll } from "@/components/Scroll";
import { faChevronDown, faChevronUp, faXmarksLines } from "@fortawesome/free-solid-svg-icons";
import { Line } from "@/components/Line";
import { NotifaysSlot } from "./NotifaysSlot";
import { settingHooks, getSettingValue } from "../reducers/Settings/settings.model";
import { handelShadowColor, useColorMerge } from "@/data/system/colors.model";
import { useAction } from "@/data/system/actions.model";
import { slotHooks } from "@/data/system/slot.slice";
import React from "react";
import { Text } from "@/components/Text";
const notificationVisibility = "visibility/notifays.boolean";
const notsVisibility = "visibility/notifays/nots.boolean";
//
export function Notifications() {
  const visibility = getSettingValue(notificationVisibility);
  // visibility for if show notifications or not
  const notes = getSettingValue(notsVisibility);
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
  return (
    <div
      onClick={() => {
        settingHooks.setOneFeild(notificationVisibility, "value", true);
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
        border
        border-solid
        border-transparent
        overflow-hidden;
      `,
        !visibility && "translate-x-[400px]",
      )}
      style={{
        ...colorMerge({
          backgroundColor: "secondry.background",
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
        className="notifay-top-view flex justify-between items-center gap-2 p-3 cursor-pointer group"
        onClick={() => {
          settingHooks.setOneFeild(notsVisibility, "value", !notes);
        }}
      >
        <h3 className="font-bold text-lg uppercase notifay-full-title">
          <Text content="notifications" />
          <span
            style={{
              ...colorMerge({
                color: "gray.opacity.2",
              }),
            }}
          >
            {!notes && `(${notifaysIds.length})`}
          </span>
        </h3>
        <div className="group-hover:visible flex invisible">
          <Tip
            onClick={() => {
              notifayHooks.setAll([]);
            }}
            className={tw(!notifaysIds.length && "pointer-events-none")}
            icon={faXmarksLines}
          />
          <Tip hidden={Boolean(!notifaysIds.length)} icon={notes ? faChevronDown : faChevronUp} />
        </div>
      </div>
      {Boolean(notifaysIds.length) && notes && <Line />}
      {notes && Boolean(notifaysIds.length) && (
        <Focus
          focusId="notifications"
          className={tw(
            `
          w-[400px]
          flex
          flex-col
          overflow-hidden
          transition-[max-height]
          duration-500
          max-h-[80vh]
          rounded-ee-xl
          rounded-es-xl
        `,
            !notes && "max-h-[0vh]",
          )}
        >
          <Scroll>
            <NotifaysSlot />
          </Scroll>
        </Focus>
      )}
    </div>
  );
}
