import { ReactElement } from "@/types/global";
interface OverlaysProps extends ReactElement {
    onLoadContent?: () => void;
    animted?: boolean;
}
export declare function DownOverlay({ hidden, animted, className, style, children, onLoadContent, onTransitionEnd, ...props }: OverlaysProps): import("react/jsx-runtime").JSX.Element;
export declare function BlurOverlay({ className, animted, style, hidden, onLoadContent, children, onTransitionEnd, ...props }: OverlaysProps): import("react/jsx-runtime").JSX.Element;
export {};
