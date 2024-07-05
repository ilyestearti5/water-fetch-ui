import { ReactElement } from "@/types/global";
import { SlotType, initNewList, slotHooks } from "models/system/slot.slice";
import React from "react";
import { isVisible, scrollToElement } from "@/functions/react-utils";
import { tw } from "@/functions/react-utils";
import { useCopyState } from "@/functions/react-utils";
import { Focus, FocusProps } from "Components/Helpers/Focus";
import { useColorMerge } from "models/system/colors.model";
import { Scroll } from "Components/Helpers/Scroll";
import { EmptyComponent } from "@/Components/Helpers/EmptyComponent";
export interface ListItemProps<T> extends ReactElement {
  handelSubmit: (fn?: Function) => (e?: any) => void;
  handelFocus: (fn?: Function) => (e?: any) => void;
  handelSelect: (fn?: Function) => (e?: any) => void;
  item: T;
  index: number;
  status: {
    isFocused: boolean;
    isSelected: boolean;
    isSubmited: boolean;
    isSkiped: boolean;
  };
}
export interface FunctionComponentListItem<T> {
  (props: ListItemProps<T>): JSX.Element;
}
export interface SlotProps<T> extends FocusProps {
  slotId: string;
  data: T[];
  direction?: (keyof T)[];
  component?: FunctionComponentListItem<T> | (keyof T)[];
  handelSkipedItem?: (data: T) => boolean;
  type?: "horizontal" | "vertical";
}
export interface ListProps<T> {
  slotId: string;
  data: T[];
  component: FunctionComponentListItem<T>;
  skipFn?: (item: T, index: number) => boolean;
}
export const prefixId = (a: string | number, b: number | string) => `slot_${a}_${b}`;
export function List<T>({ slotId, component, data, skipFn }: ListProps<T>) {
  const focus = slotHooks.getOneFeild(slotId, "focused");
  const submit = slotHooks.getOneFeild(slotId, "submited");
  const select = slotHooks.getOneFeild(slotId, "selected");
  const dir = slotHooks.getOneFeild(slotId, "direction");
  initNewList(slotId, data);
  const Component = React.useMemo(() => component, []);
  React.useEffect(() => {
    if (typeof focus != "number") {
      return;
    }
    const ele = document.getElementById(prefixId(slotId, focus));
    if (!ele) {
      return;
    }
    !isVisible(ele) && scrollToElement(ele, dir == "backward" ? 0 : -1);
  }, [focus, dir]);
  const dataSkiped = React.useMemo(() => {
    if (!skipFn) {
      return {};
    }
    const a: SlotType["skiped"] = {};
    data.forEach((item, index) => {
      if (!skipFn) {
        return false;
      } else {
        a[index] = Boolean(skipFn(item, index));
      }
    });
    return a;
  }, [skipFn, data]);
  React.useEffect(() => {
    slotHooks.setOneFeild(slotId, "skiped", dataSkiped);
  }, [dataSkiped]);
  return (
    <EmptyComponent>
      {data.map((item, index) => {
        const status = {
          isFocused: index == focus,
          isSelected: Boolean(select?.[index]),
          isSubmited: index == submit,
          isSkiped: Boolean(skipFn ? skipFn(item, index) : false),
        };
        return (
          <Component
            key={index}
            id={prefixId(slotId, index)}
            handelFocus={(fn) => {
              return (e) => {
                slotHooks.setOneFeild(slotId, "focused", index);
                fn?.(e);
              };
            }}
            handelSubmit={(fn) => {
              return (e) => {
                slotHooks.setOneFeild(slotId, "submited", index);
                fn?.(e);
              };
            }}
            handelSelect={(_fn) => {
              return (_e) => {};
            }}
            tabIndex={status.isFocused ? 1 : -1}
            item={item}
            index={index}
            status={status}
          />
        );
      })}
    </EmptyComponent>
  );
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
                  isOdd && "secondry.background",
                  hover.get && "gray.opacity",
                  (status.isFocused || status.isSubmited) && {
                    borderColor: "primary",
                  },
                  (status.isSelected || status.isSubmited) && {
                    backgroundColor: "secondry",
                    color: "secondry.content",
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
