import { BlurOverlay, Scroll, FastList, Line, MarkDown, Feild, CircleLoading } from "@/components";
import { useColorMerge, enumTemp, getSlotData, useSettingValue, slotHooks, useCopyState, fieldHooks, useMemoDelay, useAsyncMemo, setTemp } from "@/hooks";
import { delay, include, setFocused, tw } from "@/utils";
import React from "react";
export const EnumLayout = () => {
  const colorMerge = useColorMerge();
  const id = enumTemp.getTemp<string>("id");
  const enumList = enumTemp.getTemp<{ value: string; content?: string; desc?: string }[]>("list");
  const value = fieldHooks.getOneFeild("find-item-from-enum", "value");
  const [isLoading, animatedValue] = useMemoDelay(() => value, [value], 700);
  const filterd = React.useMemo(() => {
    return (
      enumList?.filter(({ desc, content }) => {
        return include([content, desc].join(" "), String(animatedValue));
      }) || []
    );
  }, [enumList, animatedValue]);
  const focused = getSlotData(filterd, "enum-list", "focused");
  const submited = getSlotData(filterd, "enum-list", "submited");
  const isAnimated = useSettingValue("preferences/animation.boolean");
  React.useEffect(() => {
    if (id && submited) {
      enumTemp.setTemp("result", submited.value);
      slotHooks.setOneFeild("enum-list", "focused", null);
      slotHooks.setOneFeild("enum-list", "submited", null);
    }
  }, [submited, id]);
  React.useEffect(() => {
    setTemp("enumIsLoading", isLoading);
  }, [isLoading]);
  const elementRef = React.createRef<HTMLDivElement>();
  return (
    <BlurOverlay
      hidden={!id}
      onClick={({ target }) => {
        if (!elementRef.current?.contains(target as HTMLElement)) {
          enumTemp.setTemp("id", null);
        }
      }}
    >
      {enumList && (
        <div
          ref={elementRef}
          className="flex flex-col border border-transparent border-solid rounded-md w-[60vw] max-md:w-3/4 h-[400px] max-md:h-3/4 overflow-hidden"
          style={{
            ...colorMerge("secondary.background", {
              borderColor: "borders",
            }),
          }}
        >
          <div>
            <div className="p-3">
              <Feild inputName="find-item-from-enum" />
            </div>
            <Line />
          </div>
          <Scroll>
            {!isLoading && (
              <FastList
                minSize={40}
                maxSize={200}
                data={filterd || []}
                slotId="enum-list"
                focusId="enum-list"
                itemSize={40}
                countLastItems={-1}
                component={({ data, style, status, handel }) => {
                  const colorMerge = useColorMerge();
                  const choised = enumTemp.getTemp<string>("choised");
                  const hover = useCopyState(false);
                  return (
                    <div
                      onMouseEnter={(e) => hover.set(true)}
                      onMouseLeave={(e) => hover.set(false)}
                      style={{
                        ...style,
                        ...colorMerge(
                          choised == data.value && {
                            color: "primary",
                          },
                          hover.get && "gray.opacity",
                          status.isFocused && "primary",
                          status.isFocused && {
                            color: "primary.content",
                          },
                        ),
                      }}
                      onClick={() => {
                        handel.focus();
                        handel.submit();
                      }}
                      className={tw("cursor-pointer text-lg p-1 max-md:p-2 flex items-center justify-center", choised == data.value && "font-bold")}
                    >
                      <span>{data.content || data.value}</span>
                    </div>
                  );
                }}
              />
            )}
            {isLoading && (
              <div className="flex justify-center items-center p-6 h-full">
                <CircleLoading />
              </div>
            )}
          </Scroll>
          <div className={tw("h-[0px]", isAnimated && "transition-[height] duration-200", focused?.desc && "h-[100px]")}>
            <Line />
            <div
              className="flex justify-center items-center p-4 h-full text-center"
              style={{
                ...colorMerge("primary.background"),
              }}
            >
              <MarkDown value={focused?.desc || ""} />
            </div>
          </div>
        </div>
      )}
    </BlurOverlay>
  );
};
