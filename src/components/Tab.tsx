import React from "react";
import { useCopyState, useColorMerge, handelShadowColor, useSettingValue } from "@/hooks";
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
  const isAnimation = useSettingValue("preferences/animation.boolean");
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
          "secondry.background",
          isActive && "primary",
          isActive && {
            color: "primary.content",
          },
          {
            borderColor: "borders",
          },
          {
            boxShadow: handelShadowColor([
              {
                colorId: "shadow.color",
                blur: 20,
                size: 3,
                x: 0,
                y: 4,
              },
            ]),
          },
        ),
        ...style,
      }}
      className={tw(`flex items-center justify-center p-2 rounded-[15%] cursor-pointer border border-solid active:scale-95`, isAnimation && "transition-[background,color,transform]", className)}
      {...props}
    >
      <Icon iconClassName={iconClassName} icon={icon} />
      {children}
    </span>
  );
}
