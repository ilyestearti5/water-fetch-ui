import { ReactElement } from "@/types/global";
import React from "react";
export interface ScrollProps extends ReactElement {
    type?: "list" | "normal";
}
export declare const Scroll: React.ForwardRefExoticComponent<Omit<ScrollProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
