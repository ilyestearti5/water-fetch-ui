import { useColorMerge } from "@/data/system/colors.model";
import { tw } from "@/utils";
import { useCopyState } from "@/hooks";
import React from "react";
import { Icon } from "./Icon";
import { ClickProps } from "@/types/global";
export type TipProps = ClickProps<HTMLSpanElement>;
export function Tip({
  icon,
  className,
  children,
  "aria-checked": checked,
  iconClassName,
  onFocus,
  onBlur,
  onMouseEnter,
  onMouseLeave,
  onPointerDown,
  onPointerUp,
  onPointerLeave,
  style,
  ...props
}: TipProps) {
  const colorMerge = useColorMerge();
  const hover = useCopyState(false);
  const focused = useCopyState(false);
  const active = useCopyState(false);
  React.useEffect(() => {
    return () => {
      active.set(false);
      focused.set(false);
      hover.set(false);
    };
  }, []);
  return (
    <span
      onFocus={(e) => {
        focused.set(true);
        onFocus?.(e);
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
      onBlur={(e) => {
        focused.set(false);
        onBlur?.(e);
      }}
      onMouseEnter={(e) => {
        hover.set(true);
        onMouseEnter?.(e);
      }}
      onMouseLeave={(e) => {
        hover.set(false);
        onMouseLeave?.(e);
      }}
      className={tw(
        `
          rounded-md
          p-1
          inline-flex
          items-center
          justify-center
          -outline-offset-1
          outline-1
          outline-transparent
          cursor-pointer
        `,
        props["aria-disabled"] && `pointer-events-none`,
        className,
      )}
      style={{
        ...colorMerge(
          hover.get && {
            backgroundColor: "gray.opacity",
          },
          props["aria-disabled"] && {
            color: "gray.opacity.2",
          },
          checked && "primary",
          checked && {
            color: "primary.content",
          },
          focused.get && {
            outlineColor: "primary",
          },
        ),
        ...style,
      }}
      {...props}
    >
      <Icon iconClassName={iconClassName} icon={icon} />
      {children}
    </span>
  );
}
