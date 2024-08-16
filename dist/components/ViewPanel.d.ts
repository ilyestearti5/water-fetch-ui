import { ReactElement, position } from "@/types/global";
export interface ViewPanelProps extends ReactElement {
    position: position;
}
export declare function ViewPanel({ ref, position: [left, top], children, style, className, ...props }: ViewPanelProps): import("react/jsx-runtime").JSX.Element;
