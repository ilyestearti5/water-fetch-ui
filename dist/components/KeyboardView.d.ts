import { ReactElement } from "@/types/global";
export interface KeyboardButtonProps extends ReactElement<HTMLSpanElement> {
    isActive?: boolean;
}
export declare const KeyboardButton: ({ isActive, className, ...props }: KeyboardButtonProps) => import("react/jsx-runtime").JSX.Element;
export declare const dataKeyboard: {
    normal: string;
    shift: string;
    alt: string;
}[][];
export declare const KeyboardView: () => import("react/jsx-runtime").JSX.Element;
