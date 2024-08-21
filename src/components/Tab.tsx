import React from "react";
import { useCopyState, useColorMerge, handelShadowColor } from "@/hooks";
import { ClickProps } from "@/types/global";
import { tw } from "@/utils";
import { Icon } from "./Icon";
export interface TabProps extends ClickProps<HTMLSpanElement> {
  isActive?: boolean;
}
export function Tab({ children, icon, className, iconClassName, isActive, style, ...props }: TabProps) {
  const hover = useCopyState(false);
  React.useEffect(() => {
    return () => {
      hover.set(false);
    };
  }, []);
  const colorMerge = useColorMerge();
  return (
    <span
      onMouseEnter={() => {
        hover.set(true);
      }}
      onMouseLeave={() => {
        hover.set(false);
      }}
      style={{
        ...colorMerge(
          isActive && "primary",
          isActive && {
            color: "primary.content",
          },
          {
            borderColor: "borders",
          },
        ),
        ...style,
      }}
      className={tw(`styled-tab flex items-center justify-center p-2 rounded-[15%] cursor-pointer border border-solid`, className)}
      {...props}
    >
      <Icon iconClassName={iconClassName} icon={icon} />
      {children}
    </span>
  );
}
