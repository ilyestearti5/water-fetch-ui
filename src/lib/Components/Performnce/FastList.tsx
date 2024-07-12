import React from "react";
import { escape, initNewList, slotHooks } from "models/system/slot.slice";
import { Focus } from "@/Components/Helpers/Focus";
import { isSorted, renameValues } from "utils/index";
import { tw } from "@/functions/react-utils";
import { useCopyState } from "@/functions/react-utils";
import { ReactElement } from "@/types/global";
import { getSettingValue } from "@/reducers/Settings/settings.model";
import { ScrollShadow } from "./ScrollShadow";
import { ScrollBar } from "./ScrollBar";
import { ChangableComponent } from "../App/Header/PositionView";
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
  const speedKey = getSettingValue("preferences/fastScrollKey.enum");
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
  const isScrollAnimation = getSettingValue("window/scroll/animation.boolean");
  const Item = React.useMemo(() => component, []);
  return (
    <Focus focusId={focusId} className="w-full h-full" ignoreOutline={typeof focused == "number"} id={slotId}>
      <ChangableComponent
        onContentChange={(props) => {
          height.set(props.height);
        }}
        className="relative h-full overflow-hidden"
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
        {heightPercantage <= 100 && <ScrollBar height={height.get} onChangeScrollBarValue={scroll.set} heightPercantage={heightPercantage} topScroll={topScroll} />}
        <ScrollShadow value={scroll.get} />
      </ChangableComponent>
    </Focus>
  );
}
export interface ComponentVarFastListProps<T, D extends Record<string, any>> {
  style: React.CSSProperties;
  data: T;
  index: number;
  scrollToMe(margin?: number | "top" | "bottom"): void;
  scrollByIndex(index: number): void;
  scroll: number;
  deps: D;
}
export interface VarFastListProps<T, D extends Record<string, any>> {
  data?: T[];
  deps: D;
  itemSize: (row: T, index: number) => number;
  Render: (props: ComponentVarFastListProps<T, D>) => JSX.Element;
}
export function VarFastList<T, D extends Record<string, any>>({ data, deps, itemSize, Render }: VarFastListProps<T, D>) {
  const [scroll, setScroll] = React.useState(0);
  const maxHeight = React.useMemo(() => {
    if (!data) {
      return 0;
    }
    return data.reduce((prv, curr, index) => prv + itemSize(curr, index) || 0, 0);
  }, [data, itemSize]);
  const [dom, setDom] = React.useState<Omit<DOMRect, "toJSON"> | null>(null);
  const itemsPositions = React.useMemo(() => {
    const newArray = data || [];
    let top = 0;
    const result: { top: number; bottom: number; height: number }[] = [];
    for (let index = 0; index < newArray.length; index++) {
      const ele = newArray[index];
      const height = itemSize(ele, index);
      const bottom = top + height;
      result.push({
        height,
        top,
        bottom,
      });
      top = bottom;
    }
    return result;
  }, [data, itemSize]);
  const height = React.useMemo(() => dom?.height || 0, [dom]);
  return (
    <ChangableComponent
      onContentChange={({ x, y, left, right, bottom, height, top, width }) => {
        setDom({ x, y, left, right, bottom, height, top, width });
      }}
      className={tw(`
        h-full
        w-full
        relative
      `)}
      onWheel={(e) => {
        setScroll((s) => {
          s += e.deltaY * 0.6;
          if (s < 0) {
            return 0;
          }
          return Math.min(s, maxHeight - height);
        });
      }}
    >
      <div
        className={tw(`
          absolute
          inset-x-0
        `)}
        style={{
          height: `${maxHeight}px`,
          top: `${-1 * scroll}px`,
        }}
      >
        {data?.map((item, index) => {
          const position = itemsPositions[index] || { top: 0, bottom: 0 };
          //
          if (isSorted(scroll, position.bottom) && isSorted(position.top, scroll + height)) {
            return (
              <Render
                deps={deps}
                scroll={scroll}
                scrollToMe={(s = 0) => {
                  if (typeof s == "string") {
                    if (s == "top") {
                      setScroll(position.top);
                    } else {
                      setScroll(2 * position.top - height - position.bottom);
                    }
                  }
                }}
                scrollByIndex={(index) => {
                  const pos = itemsPositions[index];
                  pos && setScroll(pos.top);
                }}
                index={index}
                data={item}
                key={index}
                style={{
                  position: "absolute",
                  insetInline: 0,
                  ...renameValues(position, (val) => `${val}px`),
                }}
              />
            );
          }
        })}
      </div>
    </ChangableComponent>
  );
}