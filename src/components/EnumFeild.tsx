import React from "react";
import { isLike, range } from "@/utils/index";
import { Shortcut, tw } from "@/utils";
import { useColorMerge } from "@/data/system/colors.model";
import { execAction, useAction } from "@/data/system/actions.model";
import { back, getSlotData, next, slotHooks } from "@/data/system/slot.slice";
import { FastList } from "./FastList";
import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { setTemp } from "@/reducers/Object/object.slice";
import { EmptyComponent } from "./EmptyComponent";
import { MarkDown } from "./MarkDown";
import { Scroll } from "./Scroll";
import { useCopyState } from "@/hooks";
export interface EnumListProps {
  list: {
    isChoised: boolean;
    item?: Required<SettingConfig["enum"]>["list"][number];
  }[];
}
export const EnumList = React.memo(
  ({ list }: EnumListProps) => {
    const colorMerge = useColorMerge();
    /*
     ******************************************************************************************************************************************************
     *                                                                                                                                                    *
     *                                                                                                                                                    *
     *                                                                                                                                                    *
     *                                                                                                                                                    *
     *                                                                                                                                                    *
     *                                                                                                                                                    *
     *                                                                                                                                                    *
     *                                                                                                                                                    *
     *                                                                                                                                                    *
     *                                                                                                                                                    *
     *                                                                                                                                                    *
     *                                                                                                                                                    *
     ******************************************************************************************************************************************************
     */
    return (
      <FastList
        itemSize={30}
        data={list}
        focusId={slotId}
        slotId={slotId}
        countLastItems={-1}
        component={({ data: { item, isChoised }, style, status, handel }) => {
          const hover = useCopyState(false);
          const output = item?.content || item?.value;
          return (
            <div
              className="flex justify-center items-center px-2 truncate"
              onPointerDown={() => {
                handel.submit();
              }}
              style={{
                ...colorMerge(
                  hover.get && "primary.hover.background",
                  status.isFocused && {
                    backgroundColor: "primary",
                    color: "primary.content",
                  },
                ),
                ...style,
              }}
              onMouseEnter={() => hover.set(true)}
              onMouseLeave={() => hover.set(false)}
            >
              {isChoised && <b>{output}</b>}
              {!isChoised && output}
            </div>
          );
        }}
      />
    );
  },
  (prev, current) => {
    const length = prev.list.length;
    if (length != current.list.length) {
      return true;
    }
    const containeDiff = range(0, length).some((index) => {
      return !isLike(prev.list[index], current.list[index]);
    });
    return containeDiff;
  },
);
export type EnumFeildProps = FeildGeneralProps<string | undefined, SettingConfig["enum"]>;
//
export const slotId = "enum/list";
// render enum list
export function EnumFeild({ config = {}, id, state }: EnumFeildProps) {
  // element reference
  const elementRef = React.createRef<HTMLDivElement>();
  // position of enum
  const { position = "bottom" } = config;
  // colorize
  const colorMerge = useColorMerge();
  // when focused this state gona change
  const focused = useCopyState(false);
  // get Full List Of How Checked
  const list = React.useMemo(() => {
    return (config.list || []).map((item) => {
      return {
        item,
        isChoised: item.value == state.get,
      };
    });
  }, [config.list, state.get]);
  // visibility of enum
  const visibility = useCopyState(false);
  // focus next
  useAction(
    "enum/next",
    () => {
      if (elementRef.current == document.activeElement) {
        if (visibility.get) {
          next(slotId);
        }
      }
    },
    [visibility.get],
  );
  // focus back
  useAction(
    "enum/back",
    () => {
      if (elementRef.current == document.activeElement) {
        if (visibility.get) {
          back(slotId);
        }
      }
    },
    [visibility.get],
  );
  const dataSubmit = getSlotData(list, slotId, "submited");
  React.useEffect(() => {
    setTemp("enum.focused", focused.get);
    return () => {
      setTemp("enum.focused", false);
    };
  }, [focused.get]);
  // when list change
  React.useEffect(() => {
    const index = list.findIndex(({ isChoised }) => isChoised);
    slotHooks.setOneFeild(slotId, "focused", index >= 0 ? index : null);
  }, [list]);
  React.useEffect(() => {
    if (!visibility.get || !dataSubmit) {
      return;
    }
    state.set(dataSubmit.item.value);
    slotHooks.setOneFeild(slotId, "submited", null);
    visibility.set(false);
  }, [dataSubmit, visibility.get]);
  //
  React.useEffect(() => {
    visibility.set(focused.get);
  }, [focused.get]);
  // toggle open the enum
  useAction(
    "enum.toggle.opening",
    () => {
      if (elementRef.current != document.activeElement) {
        visibility.set(false);
        return;
      }
      visibility.set((s) => !s);
      slotHooks.setOneFeild(slotId, "focused", null);
    },
    [elementRef],
  );
  React.useEffect(() => {
    if (!state.get) {
      return;
    }
    const pass = config.list?.some(({ value }) => value == state.get);
    if (pass) {
      return;
    }
    if (config.nullable) {
      state.set("");
    } else {
      const item = config.list?.[0];
      item && state.set(item.value);
    }
  }, [config, state.get, list]);
  /*
   ******************************************************************************************************************************************************
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   *                                                                                                                                                    *
   ******************************************************************************************************************************************************
   */
  const val = React.useMemo(() => {
    return config.list?.find(({ value }) => value == state.get);
  }, [config, state.get]);
  const info = getSlotData(list || [], slotId, "focused");
  return (
    <div className="relative w-full">
      <div
        id={id}
        ref={elementRef}
        tabIndex={1}
        onPointerDown={() => {
          if (!focused.get) {
            return;
          }
          execAction("enum.toggle.opening");
        }}
        onKeyDown={(e) => {
          new Shortcut("space").test(e) && visibility.set((s) => !s);
        }}
        onFocus={() => {
          focused.set(true);
        }}
        onBlur={() => {
          focused.set(false);
        }}
        className={tw(`
          border
          border-solid
          border-transparent
          px-2
          py-1
          cursor-pointer
          rounded-md
          min-w-[80px]
          flex
          justify-between
          items-center
        `)}
        style={{
          ...colorMerge(
            "gray.opacity",
            {
              borderColor: "borders",
            },
            focused.get && {
              borderColor: "primary",
              backgroundColor: "gray.opacity.2",
            },
          ),
        }}
      >
        <div className="w-full text-center">{val?.content || val?.value || "no option choised"}</div>
        {config.expandIcon !== false && Boolean(config.list?.length) && <FontAwesomeIcon icon={visibility.get ? faAngleUp : faAngleDown} />}
      </div>
      {visibility.get && Boolean(config.list?.length) && (
        <EmptyComponent>
          {info?.item.desc && (
            <div
              className={tw(
                `z-[10000000] p-2 flex flex-col absolute overflow-hidden rounded-md border border-solid border-transparent w-full`,
                position == "top" && "left-1/2 -translate-x-1/2 top-full my-2",
                position == "bottom" && "left-1/2 -translate-x-1/2 bottom-full my-2",
                position == "right" && "top-1/2 -translate-y-1/2 right-full mx-2",
                position == "left" && "top-1/2 -translate-y-1/2 left-full mx-2",
              )}
              style={{
                ...colorMerge("secondry.background", {
                  borderColor: "borders",
                }),
              }}
            >
              <Scroll className="max-h-[150px]">
                <MarkDown value={info.item.desc} />
              </Scroll>
            </div>
          )}
          <div
            className={tw(
              ` 
              z-[10000000]
              h-[150px]
              flex
              flex-col
              absolute
              overflow-hidden
              rounded-md
              border border-solid border-transparent
              w-full
            `,
              position == "top" && "left-1/2 -translate-x-1/2 bottom-full my-2",
              position == "bottom" && "left-1/2 -translate-x-1/2 top-full my-2",
              position == "right" && "top-1/2 -translate-y-1/2 left-full mx-2",
              position == "left" && "top-1/2 -translate-y-1/2 right-full mx-2",
            )}
            style={{
              ...colorMerge("secondry.background", {
                borderColor: "borders",
              }),
            }}
          >
            <EnumList list={list} />
          </div>
        </EmptyComponent>
      )}
    </div>
  );
}
