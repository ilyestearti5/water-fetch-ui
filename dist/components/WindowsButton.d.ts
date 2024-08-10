import React from "react";
export type WindowsButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export declare const WindowsButton: ({ ...props }: WindowsButtonProps) => import("react/jsx-runtime").JSX.Element;
export interface SVGIconProps {
    color?: string;
}
export declare const MinimizeActionIcon: ({ color }: SVGIconProps) => import("react/jsx-runtime").JSX.Element;
export declare const UnMaximizeActionIcon: ({ color }: SVGIconProps) => import("react/jsx-runtime").JSX.Element;
export declare const CloseActionIcon: ({ color }: SVGIconProps) => import("react/jsx-runtime").JSX.Element;
export declare const MaximizeActionIcon: ({ color }: SVGIconProps) => import("react/jsx-runtime").JSX.Element;
