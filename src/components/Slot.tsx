import React from "react";
import { useColorMerge } from "@/hooks";
import { useCopyState, slotHooks } from "@/hooks";
import { FunctionComponentListItem } from "@/types/global";
import { tw, isVisible, scrollToElement } from "@/utils";
import { EmptyComponent } from "./EmptyComponent";
import { FocusProps, Focus } from "./Focus";
import { Scroll } from "./Scroll";
export interface SlotProps<T> extends FocusProps {
  slotId: string;
  data: T[];
  direction?: (keyof T)[];
  component?: FunctionComponentListItem<T> | (keyof T)[];
  handelSkipedItem?: (data: T) => boolean;
  type?: "horizontal" | "vertical";
}
export function Slot<T>({ data, slotId, focusId = slotId, component: compo, children, handelSkipedItem, className, direction, ref, type = "horizontal", ...props }: SlotProps<T>) {
  const component: FunctionComponentListItem<T> =
    typeof compo == "function"
      ? compo
      : ({ index, id, handelSubmit, handelFocus, handelSelect, status, item }) => {
          const hover = useCopyState(false);
          const showTips = React.useMemo(() => {
            return hover.get;
          }, [hover.get]);
          const isOdd = index % 2 == 1;
          const colorMerge = useColorMerge();
          return (
            <div
              id={id}
              data-is-odd={isOdd}
              onMouseEnter={() => hover.set(true)}
              onMouseLeave={() => hover.set(false)}
              className="border border-transparent border-solid cursor-pointer row"
              onClick={handelSubmit()}
              onPointerDown={handelFocus(handelSelect())}
              style={{
                ...colorMerge(
                  isOdd && "secondary.background",
                  hover.get && "gray.opacity",
                  (status.isFocused || status.isSubmited) && {
                    borderColor: "primary",
                  },
                  (status.isSelected || status.isSubmited) && {
                    backgroundColor: "secondary",
                    color: "secondary.content",
                  },
                ),
              }}
            >
              <div className="col">
                <div className={tw("w-[100px] flex items-center justify-end", !showTips && "invisible")} />
              </div>
              {compo?.map((key) => {
                return <div className="col">{`${item[key]}`}</div>;
              })}
            </div>
          );
        };
  const focus = slotHooks.useOneFeild(slotId, "focused");
  const submit = slotHooks.useOneFeild(slotId, "submited");
  const length = slotHooks.useOneFeild(slotId, "length");
  const select = slotHooks.useOneFeild(slotId, "selected");
  const dir = slotHooks.useOneFeild(slotId, "direction");
  const Component = React.useMemo(() => component, []);
  React.useEffect(() => {
    length.set(data.length);
  }, [data]);
  React.useEffect(() => {
    if (typeof focus.get != "number") {
      return;
    }
    const ele = document.getElementById(`${slotId}/${focus.get}`) as HTMLElement | null;
    if (!ele) {
      return;
    }
    !isVisible(ele) && scrollToElement(ele, dir.get == "backward" ? 0 : -1);
  }, [focus.get, dir.get]);
  return (
    <Focus className={tw("flex flex-col overflow-hidden h-full w-full", className)} focusId={focusId} {...props}>
      <Scroll className={tw(type == "vertical" && "flex")}>
        <EmptyComponent>
          {data.map((item, index) => {
            const status = {
              isFocused: index == focus.get,
              isSelected: Boolean(select.get?.[index]),
              isSubmited: index == submit.get,
              isSkiped: Boolean(handelSkipedItem ? handelSkipedItem(item) : false),
            };
            return (
              <Component
                key={index}
                id={`${slotId}/${index}`}
                handelFocus={(fn) => {
                  return (e) => {
                    focus.set(index);
                    fn?.(e);
                  };
                }}
                handelSubmit={(fn) => {
                  return (e) => {
                    submit.set(index);
                    fn?.(e);
                  };
                }}
                handelSelect={(fn) => {
                  return (e) => {
                    if (e.ctrlKey)
                      select.set((args) => ({
                        ...args,
                        [index]: !args?.[index],
                      }));
                    else
                      select.set({
                        [index]: true,
                      });
                    fn?.(e);
                  };
                }}
                tabIndex={status.isFocused ? 1 : -1}
                item={item}
                index={index}
                status={status}
              />
            );
          })}
        </EmptyComponent>
        {children}
      </Scroll>
    </Focus>
  );
}
