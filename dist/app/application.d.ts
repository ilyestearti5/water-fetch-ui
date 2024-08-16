import React from "react";
import "@/scss/index.scss";
export declare const defineGlobal: (configName: string, config: any) => void;
export interface ApplicationProps {
    children?: React.ReactNode;
}
export declare const Application: ({ children }: ApplicationProps) => import("react/jsx-runtime").JSX.Element;
export declare const startApplication: (App: JSX.Element | (() => JSX.Element)) => Promise<import("react-dom/client").Root>;
