import { handelShadowColor, useColorMerge } from "@/data/system/colors.model";
import { useCopyState } from "@/hooks";
import React from "react";
import { Icon } from "./Icon";
import { mergeObject, tw } from "@/utils";
import { ClickProps } from "@/types/global";
export type ButtonProps = ClickProps<HTMLButtonElement>;
export function Button({ children, className, icon, style, iconClassName, onPointerDown, onPointerLeave, onPointerUp, onMouseEnter, onMouseLeave, ...props }: ButtonProps) {
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
        "primary",
        props["aria-disabled"] && "gray.opacity",
        !props["aria-disabled"] && {
          color: "primary.content",
        },
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
  }, [colorMerge, props, focused.get, handelShadowColor, style, active.get]);
  return (
    <button
      onFocus={() => focused.set(true)}
      onBlur={() => focused.set(false)}
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
      className={tw(`p-2 rounded-[4px] gap-2 flex items-center outline-2 outline-offset-1 outline-transparent truncate justify-center`, className, `relative`)}
      type="button"
      style={mergeObject(fullStyle, focused.get && { outlineColor: fullStyle.backgroundColor?.toString() })}
      {...props}
    >
      <span
        className={tw(`absolute inset-0 opacity-0 transition-[opacity] inline-block pointer-events-none`, hover.get && `opacity-60`)}
        style={{
          ...colorMerge("shadow.color", active.get && "gray.opacity.toLight"),
        }}
      />
      <Icon iconClassName={iconClassName} icon={icon} />
      {children}
    </button>
  );
}