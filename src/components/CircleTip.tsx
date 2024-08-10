import React from "react";
import { useColorMerge } from "@/data/system/colors.model";
import { useCopyState } from "@/hooks";
import { ClickProps } from "@/types/global";
import { tw } from "@/utils";
import { twMerge } from "tailwind-merge";
import { Icon } from "./Icon";

export interface CircleTipProps extends ClickProps<HTMLButtonElement> {}
export function CircleTip({ children, className, icon, style, iconClassName, onPointerDown, onPointerLeave, onPointerUp, onMouseEnter, onMouseLeave, ...props }: CircleTipProps) {
  const colorMerge = useColorMerge();
  const active = useCopyState(false);
  const hover = useCopyState(false);
  React.useEffect(() => {
    return () => {
      active.set(false);
      hover.set(false);
    };
  }, []);
  return (
    <button
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
      className={tw(
        `
        rounded-full
        w-[40px]
        h-[40px]
        gap-2
        flex
        items-center
        justify-center
        outline-2
        outline-offset-1
        outline-transparent
        truncate
      `,
        className,
        `relative`,
      )}
      type="button"
      style={{
        ...colorMerge(hover.get && "gray.opacity", active.get && "gray.opacity.2"),
      }}
      {...props}
    >
      <Icon iconClassName={twMerge("text-xl", iconClassName)} icon={icon} />
      {children}
    </button>
  );
}
