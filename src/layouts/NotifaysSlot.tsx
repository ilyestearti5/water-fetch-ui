import React from "react";
import { notifayHooks } from "@/data/system/notifications.model";
import { tw } from "@/utils";
import { useColorMerge, useCopyState } from "@/hooks";
import { Button } from "@/components/Button";
import { Tip } from "@/components/Tip";
import { List } from "@/components/List";
import { LineLoading } from "@/components/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faCheckDouble, faChevronDown, faChevronUp, faClose, faInfoCircle, faWarning, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { ColorIds } from "@/data/system/colors.model";
import { execCommand } from "@/data/system/command.model";
import { execAction } from "@/data/system/actions.model";
export const NotifaysSlot = () => {
  const notifications = notifayHooks.getAll();
  return (
    <List
      data={notifications}
      slotId={"notification"}
      component={({ item: notifay, id, handelFocus, handelSelect, handelSubmit, status }) => {
        const hover = useCopyState(false);
        function iwes<T>(info: T, warning: T, error: T, success: T) {
          return notifay.type == "warning" ? warning : notifay.type == "error" ? error : notifay.type == "success" ? success : info;
        }
        const colorMerge = useColorMerge();
        return (
          <div
            id={id}
            onClick={handelSubmit()}
            onPointerDown={handelFocus(handelSelect())}
            onDoubleClick={() => {
              notifayHooks.setOneFeild(notifay.id, "showDesc", !notifay.showDesc);
            }}
            style={{
              ...colorMerge(
                hover.get && "gray.opacity",
                status.isFocused && {
                  borderColor: "secondry",
                },
                status.isSubmited && {
                  backgroundColor: "secondry",
                  color: "secondry.content",
                },
              ),
            }}
            className={tw(
              `
                overflow-hidden
                transform
                transition-[transform,opacity]
                relative
                max-h-[calc(80vh+50px)]
                border
                border-solid
                border-transparent
              `,
            )}
            onMouseEnter={() => hover.set(true)}
            onMouseLeave={() => hover.set(false)}
          >
            <div className={tw(`relative p-3 flex justify-between items-center`)}>
              <div className={`truncate text-xl flex items-center gap-2`}>
                <FontAwesomeIcon
                  icon={iwes<IconDefinition>(faInfoCircle, faWarning, faXmarkCircle, faCheckDouble)}
                  style={{
                    ...colorMerge({
                      color: iwes<ColorIds>("notifay.info", "notifay.warning", "notifay.error", "notifay.success"),
                    }),
                  }}
                />
                <span>{notifay.title}</span>
              </div>
              <div
                className={tw(`
                  absolute
                  flex
                  gap-x-2
                  top-1/2
                  h-2/3
                  w-[5px]
                  transform
                  -translate-y-1/2
                  left-0
                  rounded-ee-md
                  rounded-se-md
                `)}
                style={{
                  ...colorMerge(iwes<ColorIds>("notifay.info", "notifay.warning", "notifay.error", "notifay.success")),
                }}
              />
              <ul
                className="flex gap-1"
                style={{
                  visibility: hover.get || status.isSubmited ? "visible" : "hidden",
                }}
              >
                {notifay.desc && (
                  <Tip
                    onClick={() => {
                      notifayHooks.setOneFeild(notifay.id, "showDesc", !notifay.showDesc);
                    }}
                    icon={notifay.showDesc ? faChevronDown : faChevronUp}
                  />
                )}
                {notifay.removable && (
                  <Tip
                    onClick={() => {
                      notifayHooks.remove([notifay.id]);
                    }}
                    icon={faClose}
                  />
                )}
              </ul>
            </div>
            {notifay.desc && notifay.showDesc && <p className="p-6">{notifay.desc}</p>}
            {Array.isArray(notifay.buttons) && (
              <div className="flex justify-end p-5 overflow-x-auto">
                {notifay.buttons.map(({ command, label }, index) => {
                  return (
                    <Button
                      className="px-2 py-1 rounded-sm"
                      key={index}
                      onClick={async () => {
                        if (typeof command == "object") {
                          execAction(command.action, command.arg);
                        } else {
                          execCommand(command as any);
                        }
                      }}
                    >
                      {label}
                    </Button>
                  );
                })}
              </div>
            )}
            {notifay.status == "loading" && <LineLoading />}
          </div>
        );
      }}
    ></List>
  );
};
