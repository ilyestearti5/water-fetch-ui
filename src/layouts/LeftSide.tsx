import React from "react";
import { ResizeView } from "@/components/ResizeView";
import { settingHooks, useSettingValue } from "@/hooks";
import { useColorMerge } from "@/hooks";
import { isSorted } from "@/utils/index";
import { tw } from "@/utils";
const leftSideVisibility = "visibility/leftSide.boolean";
export interface LeftSideProps {
  children?: React.ReactNode;
}
export const LeftSide = ({ children }: LeftSideProps) => {
  const visibility = useSettingValue(leftSideVisibility);
  const colorMerge = useColorMerge();
  return (
    <ResizeView
      position="right"
      min={200}
      temp="leftSide.currentWidth"
      max={() => Math.max(window.innerWidth / 3, 350)}
      handelResize={({ size }) => {
        const s = isSorted(150, size);
        s != visibility && settingHooks.setOneFeild(leftSideVisibility, "value", s);
      }}
      className={tw(`h-full flex-col flex overflow-hidden border-r border-solid border-transparent z-[10000000000000000]`, !visibility && "border-r-0")}
      hidden={!visibility}
      style={{
        ...colorMerge("secondary.background", {
          borderColor: "borders",
        }),
      }}
      children={children}
    />
  );
};
