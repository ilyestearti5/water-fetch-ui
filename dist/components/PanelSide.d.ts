import { ReactElement, position } from "@/types/global";
export interface PanelSideProps extends ReactElement {
    position: position;
}
export declare function PanelSide({ position, style, className, children, ...props }: PanelSideProps): import("react/jsx-runtime").JSX.Element;
