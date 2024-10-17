import React from "react";
import { useColorMerge, useCopyState, handelShadowColor } from "@/hooks";
import { ReactElement } from "@/types/global";
import { mergeObject, tw, range } from "@/utils";
export interface ClickedViewProps extends ReactElement {}
export const ClickedView = ({ children, className, style, onPointerDown, onPointerLeave, onPointerUp, onMouseEnter, onMouseLeave, ...props }: ClickedViewProps) => {
  const colorMerge = useColorMerge();
  const focused = useCopyState(false);
  const active = useCopyState(false);
  const hover = useCopyState(false);
  React.useEffect(() => {
    return () => {
      focused.set(false);
      active.set(false);
      hover.set(false);
    };
  }, []);
  const fullStyle = React.useMemo(() => {
    return {
      ...colorMerge(
        focused.get && {
          boxShadow: handelShadowColor([
            {
              colorId: "shadow.color",
              isInset: true,
              blur: 1,
            },
          ]),
        },
      ),
      ...style,
    };
  }, [colorMerge, focused.get, handelShadowColor, style]);
  return (
    <div
      onFocus={() => {
        focused.set(true);
      }}
      onBlur={() => {
        focused.set(false);
      }}
      onMouseEnter={(e) => {
        hover.set(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        hover.set(false);
        onMouseLeave?.(e);
      }}
      onPointerDown={(e) => {
        active.set(true);
        onPointerDown?.(e);
      }}
      onPointerUp={(e) => {
        active.set(false);
        onPointerUp?.(e);
      }}
      onPointerLeave={(e) => {
        active.set(false);
        onPointerLeave?.(e);
      }}
      style={{
        ...mergeObject(fullStyle),
      }}
      className={tw("btn select-none w-full relative overflow-hidden transition-[transform]", className)}
      {...props}
    >
      {range(1, 3).map((index) => {
        return (
          <i
            key={index}
            className="btn_bg"
            style={{
              ...colorMerge("opacity"),
            }}
          />
        );
      })}
      <div className="w-full h-full btn-content">{children}</div>
    </div>
  );
};
