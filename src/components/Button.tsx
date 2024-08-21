import React from "react";
import { handelShadowColor, useColorMerge } from "@/hooks";
import { useCopyState } from "@/hooks";
import { Icon, IconProps } from "./Icon";
import { mergeObject, range, tw } from "@/utils";
export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & IconProps;
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
      type="button"
      style={{
        ...colorMerge("primary"),
        ...mergeObject(fullStyle),
      }}
      className={tw("btn rounded-md cursor-pointer w-full px-3 py-2 relative lowercase overflow-hidden transition-[transform] active:scale-95", className)}
      {...props}
    >
      <div className="flex justify-center items-center gap-2 btn-content">
        <Icon iconClassName={iconClassName} icon={icon} />
        {children}
      </div>
      {range(1, 4).map((index) => {
        return (
          <i
            key={index}
            className="btn__bg"
            style={{
              ...colorMerge("opacity"),
            }}
          />
        );
      })}
    </button>
  );
}
