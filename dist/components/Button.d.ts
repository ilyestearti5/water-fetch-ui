import React from "react";
import { IconProps } from "./Icon";
export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & IconProps;
export declare function Button({ children, className, icon, style, iconClassName, onPointerDown, onPointerLeave, onPointerUp, onMouseEnter, onMouseLeave, ...props }: ButtonProps): import("react/jsx-runtime").JSX.Element;
