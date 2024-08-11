import React from "react";
import { useCopyState, useColorMerge, handelShadowColor } from "@/hooks";
import { ClickProps } from "@/types/global";
import { tw } from "@/utils";
import { Icon } from "./Icon";
export interface TabProps extends ClickProps<HTMLSpanElement> {
  isActive?: boolean;
}
export function Tab({ children, icon, iconClassName, isActive, style, ...props }: TabProps) {
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
        ),
        ...style,
      }}
      className={tw(`relative inline-flex items-center gap-1 px-3 cursor-pointer h-[35px] capitalize outline-1 -outline-offset-1 outline-transparent rounded-lg`)}
      {...props}
    >
      <div
        className={tw("transition-[width,height,box-shadow] duration-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 rounded-lg -translate-y-1/2 w-full h-full pointer-events-none z-[-10]")}
        style={{
          ...colorMerge(
            "secondry.background",
            hover.get && "gray.opacity.2",
            isActive && "primary",
            isActive && {
              boxShadow: handelShadowColor([
                {
                  colorId: "shadow.color",
                  x: 0,
                  y: 5,
                  blur: 6,
                  size: 0,
                },
              ]),
            },
          ),
        }}
      />
      <Icon iconClassName={iconClassName} icon={icon} />
      {children}
    </span>
  );
}
