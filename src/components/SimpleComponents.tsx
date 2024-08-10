import { ReactElement } from "@/types/global";
import React from "react";
import { Line } from "./Line";
import { useColorMerge } from "@/data/system/colors.model";
import { tw } from "@/utils";
import { Nothing } from "@/types/global";
import { EmptyComponent } from "./EmptyComponent";
import { JoinComponentBy } from "./JoinComponentBy";
export interface SeparatedViewsLineProps extends ReactElement {
  list: (JSX.Element | Nothing)[];
}
export const SeparatedViewsLine = React.forwardRef<HTMLDivElement, SeparatedViewsLineProps>(({ list, style, className, ...props }, ref) => {
  const colorMerge = useColorMerge();
  return (
    <div
      {...props}
      ref={ref}
      className={tw(`border border-solid border-transparent rounded-lg flex flex-col`, className)}
      style={{
        ...colorMerge("secondry.background", {
          borderColor: "borders",
        }),
        ...style,
      }}
    >
      <JoinComponentBy
        list={list.filter(Boolean).map((element, index) => (
          <EmptyComponent key={index}>{element}</EmptyComponent>
        ))}
        joinComponent={<Line />}
      />
    </div>
  );
});
export interface SeparatedViewsLineTitleProps {
  title: string;
  rightSide?: ReactElement["children"];
}
export const SeparatedViewsLineTitle = ({ title, rightSide }: SeparatedViewsLineTitleProps) => (
  <div className="flex justify-between items-center p-2">
    <h1 className="text-3xl truncate capitalize">{title}</h1>
    <div className="flex items-center gap-1">{rightSide}</div>
  </div>
);
