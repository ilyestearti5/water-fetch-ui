import { Tip } from "@/Components/Helpers/Buttons";
import { tw } from "@/functions/react-utils";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Scroll } from "Components/Helpers/Scroll";
import { handelGradientColor, useColorMerge } from "models/system/colors.model";
import { useTemp } from "@/reducers/Object/object.slice";
import React from "react";
import { Slot } from "@/hooks/list.hooks";
export function HeaderNotification() {
  // const visibility = useSettingValue(headerNotifaysVisibility);
  const headerNotifications = useTemp<{ message?: string; desc?: string; expanded?: boolean }[]>("notification.header");
  const notifications = React.useMemo(() => {
    return (Array.isArray(headerNotifications.get) ? headerNotifications.get : []).slice(0, 3);
  }, [headerNotifications.get]);
  const colorMerge = useColorMerge();
  return (
    <div
      className="h-fit"
      style={{
        ...colorMerge({
          background: handelGradientColor("right", "secondry", "primary"),
          borderColor: "borders",
          color: "primary.content",
        }),
      }}
    >
      {Boolean(notifications.length) && (
        <Slot
          data={notifications}
          slotId="header-notifications"
          focusId="header-notifications"
          component={({ index, item }) => {
            return (
              <div>
                <div className="flex justify-between items-center p-3">
                  <div>{item.message || "empty message"}</div>
                  <div className="flex tools">
                    <Tip
                      onClick={() => {
                        headerNotifications.set((props) => {
                          const prop = props?.[index];
                          if (!prop) {
                            return props;
                          }
                          prop.expanded = !prop.expanded;
                          return props;
                        });
                      }}
                      icon={faXmark}
                    />
                  </div>
                </div>
                <div
                  className={tw(
                    `
                  h-[0px]
                  p-3
                  flex
                  flex-col
                `,
                    item.expanded && "h-[200px]",
                  )}
                >
                  <Scroll>{item.desc || ""}</Scroll>
                </div>
              </div>
            );
          }}
        />
      )}
    </div>
  );
}
