import React from "react";
import { tw } from "@/utils";
import { ColorIds } from "@/data/system/colors.model";
import { IconDefinition, faCopy, faXmarkCircle } from "@fortawesome/free-regular-svg-icons";
import { Scroll } from "@/components/Scroll";
import { ToastType, toastHooks } from "@/data/system/toasts.model";
import { MarkDown } from "@/components/MarkDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckDouble, faInfoCircle, faWarning, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Tip } from "@/components/Tip";
import { getSettingValue, handelShadowColor, useColorMerge, useCopyState } from "@/hooks";
export interface ToastItemProps {
  item: ToastType;
  index: number;
}
export const ToastItem = ({ item, index }: ToastItemProps) => {
  const hover = useCopyState(false);
  const copyed = useCopyState(false);
  const startDeleting = useCopyState(false);
  const timeState = useCopyState(0);
  const { message } = item;
  const colorMerge = useColorMerge();
  const toastTime = getSettingValue("preferences/toastTime.number");
  const isAnimated = getSettingValue("preferences/animation.boolean");
  const finishTime = React.useMemo(() => {
    return item.time || toastTime || 5;
  }, [toastTime, item.time]);
  React.useEffect(() => {
    if (startDeleting.get) {
      const timer = setTimeout(() => {
        item.id && toastHooks.remove([item.id]);
        startDeleting.set(false);
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [startDeleting.get, item]);
  React.useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      timeState.set(++index);
      if (index >= finishTime) {
        startDeleting.set(true);
        clearInterval(timer);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [finishTime]);
  React.useEffect(() => {
    if (copyed.get) {
      const timer = setTimeout(() => {
        copyed.set(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [copyed.get]);
  function iwes<T>(info: T, warning: T, error: T, success: T) {
    return item.type == "warning" ? warning : item.type == "error" ? error : item.type == "success" ? success : info;
  }
  return (
    <div
      className={tw("flex z-[100000] items-center justify-between p-2 opacity-100 scale-100", startDeleting.get && "opacity-0 scale-0", isAnimated && "transition-[transform,opacity] duration-300")}
      onMouseEnter={() => hover.set(true)}
      onMouseLeave={() => hover.set(false)}
      style={{
        ...colorMerge(index % 2 && "gray.opacity"),
      }}
    >
      <div className="inline-flex items-center gap-1">
        <FontAwesomeIcon
          icon={iwes<IconDefinition>(faInfoCircle, faWarning, faXmarkCircle, faCheckDouble)}
          style={{
            ...colorMerge({
              color: iwes<ColorIds>("notifay.info", "notifay.warning", "notifay.error", "notifay.success"),
            }),
          }}
        />
        <MarkDown value={message.toString()} />
      </div>
      <div className="flex items-center">
        <span
          className={tw("relative rounded-full w-[30px] h-[30px] mx-2 inline-flex items-center justify-center")}
          style={{
            ...colorMerge("gray.opacity"),
          }}
        >
          {finishTime - timeState.get}
        </span>
        <div className={tw("tools w-[0px] flex gap-1 items-center overflow-hidden", hover.get && "w-[50px]", isAnimated && "transition-[width]")}>
          <Tip
            onClick={async () => {
              copyed.set(true);
              await navigator.clipboard.writeText(message.toString());
            }}
            icon={copyed.get ? faCheck : faCopy}
          />
          <Tip
            onClick={() => {
              startDeleting.set(true);
            }}
            icon={faXmark}
          />
        </div>
      </div>
    </div>
  );
};
export const Toasts = () => {
  const list = toastHooks.getAll();
  const colorMerge = useColorMerge();
  const isAnimated = getSettingValue("preferences/animation.boolean");
  const Component = React.useMemo(() => ToastItem, []);
  const position = getSettingValue("toast/position.enum");
  return (
    <div
      className={tw(
        `fixed z-[100000000000000000000000000000] min-w-[300px] border overflow-hidden border-transparent rounded-md border-solid left-1/2 transform -translate-x-1/2 scale-0`,
        Boolean(list?.length) && "scale-100",
        isAnimated && "transition-transform duration-300",
        position == "top" && "top-[50px]",
        position == "bottom" && "bottom-[50px]",
      )}
      style={{
        ...colorMerge("toast.background", {
          boxShadow: handelShadowColor([
            {
              colorId: "shadow.color",
              x: 0,
              y: 20,
              blur: 40,
              size: 10,
            },
          ]),
          borderColor: "borders",
        }),
      }}
    >
      <Scroll className="max-h-[400px]">{list?.map((toast, index) => <Component key={toast.id} index={index} item={toast} />)}</Scroll>
    </div>
  );
};
