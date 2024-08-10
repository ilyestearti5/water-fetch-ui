import React from "react";
import { ReactElement } from "@/types/global";
export interface FastListItemProps<T> extends ReactElement {
    status: {
        [key in `is${"Selected" | "Focused" | "Skiped" | "Submited"}`]: boolean;
    };
    data: T;
    index: number;
    handel: {
        focus: () => void;
        submit: () => void;
        select: (only: boolean, value: boolean) => void;
        skip: (only: boolean, value: boolean) => void;
    };
}
export interface FastListProps<T> {
    focusId: string;
    slotId: string;
    itemSize: number;
    maxSize?: number;
    minSize?: number;
    data: T[];
    component: (props: FastListItemProps<T>) => JSX.Element;
    handelSkip?: (props: {
        data: T;
        index: number;
    }) => boolean;
    countLastItems?: number;
    overflow?: Partial<{
        top: number;
        bottom: number;
        left: number;
        right: number;
    }>;
}
export declare function FastList<T>({ focusId, itemSize, slotId, component, handelSkip, data, countLastItems, overflow: { top, bottom } }: FastListProps<T>): import("react/jsx-runtime").JSX.Element;
export interface ComponentVarFastListProps<T, D extends Record<string, any>> {
    style: React.CSSProperties;
    data: T;
    index: number;
    scrollToMe(margin?: number | "top" | "bottom"): void;
    scrollByIndex(index: number): void;
    scroll: number;
    deps: D;
}
export interface VarFastListProps<T, D extends Record<string, any>> {
    data?: T[];
    deps: D;
    itemSize: (row: T, index: number) => number;
    Render: (props: ComponentVarFastListProps<T, D>) => JSX.Element;
}
export declare function VarFastList<T, D extends Record<string, any>>({ data, deps, itemSize, Render }: VarFastListProps<T, D>): import("react/jsx-runtime").JSX.Element;
