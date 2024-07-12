import React from "react";
import { handelShadowColor, useColorMerge } from "models/system/colors.model";
interface ScrollShadowProps {
  value: number;
}
export const ScrollShadow = React.memo(
  ({ value }: ScrollShadowProps) => {
    const colorMerge = useColorMerge();
    return (
      <div
        data-scrolled={value >= 10}
        className="absolute -top-[20px] h-[20px] inset-x-0"
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
