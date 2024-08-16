import { ClickProps } from "@/types/global";
export interface CircleTipProps extends ClickProps<HTMLButtonElement> {
}
export declare function CircleTip({ children, className, icon, style, iconClassName, onPointerDown, onPointerLeave, onPointerUp, onMouseEnter, onMouseLeave, ...props }: CircleTipProps): import("react/jsx-runtime").JSX.Element;
