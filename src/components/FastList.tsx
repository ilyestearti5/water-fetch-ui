import React from "react";
import { Focus } from "@/components/Focus";
import { mergeObject, tw, isSorted } from "@/utils";
import { ReactElement } from "@/types/global";
import { useSettingValue, useCopyState, handelShadowColor, useColorMerge, escape, initNewList, slotHooks } from "@/hooks";
import { ChangableComponent } from "./PositionView";
export interface FastListItemProps<T> extends ReactElement {
  status: {
    [key in `is${"Selected" | "Focused" | "Skiped" | "Submited"}`]: boolean;
  };
  data: T;
  index: number;
  handel: {
    focus: () => void;
    submit: () => void;
    select: (only: boolean, value: boolean) => void;
    skip: (only: boolean, value: boolean) => void;
  };
}
export interface FastListProps<T> {
  focusId: string;
  slotId: string;
  itemSize: number;
  maxSize?: number;
  minSize?: number;
  data: T[];
  component: (props: FastListItemProps<T>) => JSX.Element;
  handelSkip?: (props: { data: T; index: number }) => boolean;
  countLastItems?: number;
  overflow?: Partial<{
    top: number;
    bottom: number;
    left: number;
    right: number;
  }>;
}
export function FastList<T>({ focusId, itemSize, slotId, component, handelSkip, data, countLastItems = 3, overflow: { top = 0, bottom = 0 } = { top: 0, bottom: 0 } }: FastListProps<T>) {
  // all config of slot list (length , submited , focused , selected , ...)
  const slotConfig = slotHooks.getOne(slotId);
  const scroll = useCopyState(0);
  const height = useCopyState(0);
  // get focused index
  let focused = slotHooks.getOneFeild(slotId, "focused");
  // add slot if is not exists
  initNewList(slotId, data);
  // make the list length it is the data length and scroll to top
  React.useEffect(() => {
    slotHooks.setOneFeild(slotId, "length", data.length);
    if (!data.length) {
      escape(slotId);
    }
  }, [data]);
  React.useEffect(() => {
    if (typeof focused != "number") {
      return;
    }
    if (data.length <= focused) {
      slotHooks.setOneFeild(slotId, "focused", data.length - 1);
    }
  }, [focused, data]);
  // calculate height of the view element every 600 ms
  React.useEffect(() => {
    let ele: HTMLElement | null = null;
    const callback = () => {
      ele = ele || document.getElementById(slotId);
      if (!ele) {
        return;
      }
      const h = ele.getBoundingClientRect().height;
      height.set(h);
    };
    callback();
    const time = setInterval(callback, 1000);
    return () => {
      clearInterval(time);
    };
  }, []);
  // temp for scrolling without using scrol bar
  const scrollingUsingBar = useCopyState(false);
  // when focused changed the scrolling is not by bar
  React.useEffect(() => {
    scrollingUsingBar.set(false);
  }, [focused]);
  // check the focused item in the slot and scroll to it
  React.useEffect(() => {
    if ([scrollingUsingBar.get, typeof focused != "number", focused! >= data.length, height.get < itemSize].some(Boolean)) {
      return;
    }
    const insideFromTop = scroll.get <= focused! * itemSize;
    const insideFromBottom = (focused! + 1) * itemSize <= scroll.get + height.get;
    if (insideFromBottom && insideFromTop) {
      return;
    }
    let x;
    if (focused! < 0) {
      focused = 0;
    } else if (focused! > (x = Math.abs(data.length - countLastItems))) {
      focused = x;
    }
    if (!insideFromBottom) {
      focused = focused! + 1 - height.get / itemSize;
    }
    const s = itemSize * focused!;
    scroll.set(s);
  }, [focused, data, countLastItems, scroll.get, height.get, scrollingUsingBar.get]);
  // key for where press this key the scroll gona scrolling speedly and is one of alt , control , shift
  const speedKey = useSettingValue("preferences/fastScrollKey.enum");
  // make component not every time changed
  const maxHeight = React.useMemo(() => {
    return itemSize * data.length;
  }, [itemSize, data]);
  //
  // get fully scroll height for list with height of last height
  const maxHeightWithLastItems = React.useMemo(() => {
    return maxHeight + itemSize * countLastItems;
  }, [maxHeight, itemSize, countLastItems]);
  // height of thumb in percantage;
  const heightPercantage = React.useMemo(() => {
    return (height.get * 100) / maxHeightWithLastItems;
  }, [maxHeightWithLastItems, height.get]);
  // top scroll value
  const topScroll = React.useMemo(() => {
    return (scroll.get * 100) / maxHeightWithLastItems;
  }, [maxHeightWithLastItems, scroll.get]);
  // render element list
  const isScrollAnimation = useSettingValue("preferences/scrollAnimation.boolean.boolean");
  const scrollBarHoverd = useCopyState(false);
  const changableComponentViewConfig = useCopyState<null | DOMRect>(null);
  const Item = React.useMemo(() => component, []);
  const colorMerge = useColorMerge();
  const changePositionCallback = (clientY: number) => {
    const configuration = changableComponentViewConfig.get;
    if (configuration) {
      const y = clientY - configuration.top - (scrollBarRefElement.current?.clientHeight || 0) / 2;
      let scrollValue = (y / configuration.height) * maxHeightWithLastItems;
      const s = maxHeightWithLastItems - configuration.height;
      if (scrollValue < 0) {
        scrollValue = 0;
      } else if (scrollValue > s) {
        scrollValue = s;
      }
      scroll.set(scrollValue);
    }
  };
  const scrollBarRefElement = React.createRef<HTMLDivElement>();
  const scrollVisibility = React.useMemo(() => {
    return heightPercantage <= 100;
  }, [heightPercantage]);
  const elementRef = React.createRef<HTMLDivElement>();
  const handleMouseMove = (e: MouseEvent) => {};
  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMouseMove(e.nativeEvent); // Update immediately
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };
  return (
    <Focus focusId={focusId} className="relative w-full h-full" ignoreOutline={typeof focused == "number"} id={slotId}>
      <ChangableComponent
        onContentChange={(props) => {
          height.set(props.height);
          changableComponentViewConfig.set(props);
        }}
        className="relative h-full overflow-hidden"
        onPointerDown={handleMouseDown}
        onWheel={(e) => {
          if (heightPercantage < 100) {
            let speed = false;
            if (speedKey == "alt") {
              speed = e.altKey;
            } else if (speedKey == "control") {
              speed = e.ctrlKey;
            } else if (speedKey == "shift") {
              speed = e.shiftKey;
            }
            scrollingUsingBar.set(true);
            scroll.set((s) => {
              s += e.deltaY * (speed ? 0.6 : 0.1);
              if (s < 0) {
                return 0;
              }
              return Math.min(s, (data.length + countLastItems) * itemSize - height.get);
            });
          }
        }}
      >
        <div
          ref={elementRef}
          className={tw(`absolute inset-x-0`, isScrollAnimation && "transition-[top,left]")}
          style={{
            top: -scroll.get,
            height: maxHeight,
          }}
        >
          {data.map((item, index) => {
            const position = itemSize * index;
            const val = position - scroll.get;
            if (isSorted(-(top + 1) * itemSize, val, val + itemSize, height.get + (bottom + 1) * itemSize)) {
              const status = {
                isFocused: index == slotConfig?.focused,
                isSelected: Boolean(slotConfig?.selected?.[index]),
                isSubmited: index == slotConfig?.submited,
                isSkiped: Boolean(
                  handelSkip
                    ? handelSkip({
                        data: item,
                        index,
                      })
                    : false,
                ),
              };
              const style = {
                height: itemSize,
                position: "absolute" as const,
                top: itemSize * index,
                insetInline: "0px",
              };
              const handel = {
                focus() {
                  slotHooks.setOneFeild(slotId, "focused", index);
                },
                select(only: boolean, v: boolean) {
                  if (only) {
                    slotHooks.setOneFeild(slotId, "selected", {
                      [index]: v,
                    });
                  } else {
                    if (!slotConfig?.selected) {
                      return;
                    }
                    slotHooks.setOneFeild(slotId, "selected", {
                      ...slotConfig.selected,
                      [index]: v,
                    });
                  }
                },
                submit() {
                  slotHooks.setOneFeild(slotId, "submited", index);
                },
                skip(only: boolean, v: boolean) {
                  if (only) slotHooks.setOneFeild(slotId, "skiped", { [index]: v });
                },
              };
              return <Item status={status} key={index} index={index} data={item} style={style} handel={handel} />;
            }
          })}
        </div>
        <div
          hidden={!scrollVisibility}
          aria-label="scroll-bar"
          onMouseEnter={() => {
            scrollBarHoverd.set(true);
          }}
          onMouseLeave={() => {
            scrollBarHoverd.set(false);
          }}
          onPointerDown={(e) => {
            scrollingUsingBar.set(true);
            changePositionCallback(e.clientY);
          }}
          style={{
            ...colorMerge(scrollBarHoverd.get && "gray.opacity"),
          }}
          className={tw(`absolute right-0 w-[5px] h-full inset-y-0 transition-[width] duration-300 backdrop-blur-md`, scrollBarHoverd.get && "w-[20px]")}
        >
          <div
            aria-label="scroll-bar-thumb"
            className={`w-full transition-[top] duration-100 inset-x-0 absolute`}
            ref={scrollBarRefElement}
            style={{
              ...colorMerge("gray.opacity.2"),
              ...mergeObject({
                height: `${heightPercantage}%`,
                top: `${topScroll}%`,
              }),
            }}
            onMouseDown={() => {
              scrollingUsingBar.set(true);
              const callback = (e: MouseEvent) => {
                changePositionCallback(e.clientY);
              };
              document.addEventListener("mousemove", callback);
              const onMouseUpCallback = () => {
                document.removeEventListener("mousemove", callback);
                document.removeEventListener("mouseup", onMouseUpCallback);
              };
              document.addEventListener("mouseup", onMouseUpCallback);
            }}
          />
        </div>
        <div
          data-scrolled={scroll.get >= 10}
          className="-top-[20px] absolute inset-x-0 h-[20px]"
          style={{
            ...colorMerge(
              scroll.get >= 10 && {
                boxShadow: handelShadowColor([
                  {
                    x: 0,
                    y: 4,
                    size: 10,
                    blur: 10,
                    colorId: "shadow.color",
                  },
                ]),
              },
            ),
          }}
        />
      </ChangableComponent>
    </Focus>
  );
}
