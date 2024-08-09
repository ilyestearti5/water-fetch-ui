import React from "react";
import { handelShadowColor, useColorMerge } from "@/data/system/colors.model";
interface ScrollShadowProps {
  value: number;
}
export const ScrollShadow = React.memo(
  ({ value }: ScrollShadowProps) => {
    const colorMerge = useColorMerge();
    return (
      <div
        data-scrolled={value >= 10}
        className="-top-[20px] absolute inset-x-0 h-[20px]"
        style={{
          ...colorMerge(
            value >= 10 && {
              boxShadow: handelShadowColor([
                {
                  x: 0,
                  y: 4,
                  size: 10,
                  blur: 10,
                  colorId: "shadow.color",
                },
              ]),
            },
          ),
        }}
      />
    );
  },
  (prev, next) => {
    const prevIsVisible = prev.value > 10;
    const nextIsVisible = next.value > 10;
    return prevIsVisible == nextIsVisible;
  },
);
