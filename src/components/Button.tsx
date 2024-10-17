import React from "react";
import { handelShadowColor, useColorMerge } from "@/hooks";
import { useCopyState } from "@/hooks";
import { Icon, IconProps } from "./Icon";
import { mergeObject, range, tw } from "@/utils";
export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
  IconProps &
  Partial<Record<`${"left" | "top" | "right" | "bottom"}Icon`, IconProps["icon"]>>;
export function Button({
  children,
  leftIcon,
  rightIcon,
  topIcon,
  bottomIcon,
  className,
  icon,
  style,
  iconClassName,
  onPointerDown,
  onPointerLeave,
  onPointerUp,
  onMouseEnter,
  onMouseLeave,
  ...props
}: ButtonProps) {
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
        (active.get || focused.get) && {
          boxShadow: handelShadowColor([
            {
              colorId: "shadow.color",
              blur: 4,
              size: 1,
              x: 0,
              y: 2,
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
      className={tw("btn rounded-md cursor-pointer w-full px-3 py-2 relative capitalize overflow-hidden transition-[transform,box-shadow] active:scale-95", className)}
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
      <div className="flex flex-col flex-none justify-center items-center gap-2 btn-content">
        <Icon iconClassName={iconClassName} icon={topIcon} />
        <div className="flex justify-center items-center gap-2">
          <Icon iconClassName={iconClassName} icon={leftIcon || icon} />
          {children}
          <Icon iconClassName={iconClassName} icon={rightIcon} />
        </div>
        <Icon iconClassName={iconClassName} icon={bottomIcon} />
      </div>
    </button>
  );
}
