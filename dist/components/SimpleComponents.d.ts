import { ReactElement } from "@/types/global";
import React from "react";
import { Nothing } from "@/types/global";
export interface SeparatedViewsLineProps extends ReactElement {
    list: (JSX.Element | Nothing)[];
}
export declare const SeparatedViewsLine: React.ForwardRefExoticComponent<Omit<SeparatedViewsLineProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export interface SeparatedViewsLineTitleProps {
    title: string;
    rightSide?: ReactElement["children"];
}
export declare const SeparatedViewsLineTitle: ({ title, rightSide }: SeparatedViewsLineTitleProps) => import("react/jsx-runtime").JSX.Element;
