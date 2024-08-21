import { ClickProps } from "@/types/global";
export interface TabProps extends ClickProps<HTMLSpanElement> {
    isActive?: boolean;
}
export declare function Tab({ children, icon, className, iconClassName, isActive, style, ...props }: TabProps): import("react/jsx-runtime").JSX.Element;
