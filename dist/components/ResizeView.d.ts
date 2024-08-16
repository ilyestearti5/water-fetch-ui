import React from "react";
import { ReactElement } from "@/types/global";
export interface ResizeViewProps extends ReactElement {
    position?: "top" | "left" | "right" | "bottom";
    max?: number | ((change: number) => number);
    min?: number | ((change: number) => number);
    handelResize?: (e: React.MouseEvent<HTMLDivElement, MouseEvent> & {
        size: number;
        min: number;
        max: number;
    }) => any;
    temp?: string;
    animited?: boolean;
}
export declare function ResizeView({ temp, animited, style, children, max, min, position, hidden, handelResize, className, ...props }: ResizeViewProps): import("react/jsx-runtime").JSX.Element;
