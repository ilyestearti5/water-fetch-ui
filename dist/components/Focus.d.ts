import React from "react";
import { ReactElement } from "@/types/global";
export interface FocusProps extends ReactElement {
    focusId?: string;
    ignoreOutline?: boolean;
}
export declare const Focus: React.ForwardRefExoticComponent<Omit<FocusProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
