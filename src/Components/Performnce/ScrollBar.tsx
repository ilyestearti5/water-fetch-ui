import React from "react";
import { mergeObject, tw, useCopyState } from "@/functions/react-utils";
import { useColorMerge } from "models/system/colors.model";
// desc :
export interface ScrollBarHeightProps {
  onChangeScrollBarValue: (x: number) => any;
  height: number;
  heightPercantage: number;
  topScroll: number;
}
export const ScrollBar = React.memo(
  ({ onChangeScrollBarValue, height, heightPercantage, topScroll }: ScrollBarHeightProps) => {
    const colorMerge = useColorMerge();
    const hover = useCopyState(false);
    return (
      <div
        onMouseEnter={() => {
          hover.set(true);
        }}
        onMouseLeave={() => {
          hover.set(false);
        }}
        className={tw(`absolute right-0 w-[5px] h-full inset-y-0 transition-[width] duration-300`, hover.get && "w-[10px]")}
      >
        <div
          className={tw(`w-full transition-[top] duration-100 inset-x-0 absolute rounded-ss-md rounded-es-md`)}
          style={{
            ...colorMerge("gray.opacity.2"),
            ...mergeObject({
              height: `${heightPercantage}%`,
              top: `${topScroll}%`,
            }),
          }}
          onMouseDown={(e) => {
            const startY = e.clientY;
            const startTopScroll = topScroll;
            const handleMouseMove = (e: MouseEvent) => {
              const deltaY = e.clientY - startY;
              const scrollHeight = height - heightPercantage;
              const scrollDelta = (deltaY / height) * scrollHeight;
              const newTopScroll = startTopScroll + scrollDelta;
              onChangeScrollBarValue(newTopScroll);
            };
            const handleMouseUp = () => {
              document.removeEventListener("mousemove", handleMouseMove);
              document.removeEventListener("mouseup", handleMouseUp);
            };
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
          }}
        />
      </div>
    );
  },
  (prev, current) => {
    if (prev.height != current.height) {
      return false;
    }
    if (prev.heightPercantage != current.heightPercantage) {
      return false;
    }
    if (prev.topScroll != current.topScroll) {
      return false;
    }
    return true;
  },
);
