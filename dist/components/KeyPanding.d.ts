import { ReactElement } from "@/types/global";
export interface KeyPandingProps extends ReactElement<HTMLSpanElement> {
    shortcut: string | string[];
}
export interface SinglePandingProps {
    content: string;
}
export declare function SinglePanding({ content }: SinglePandingProps): import("react/jsx-runtime").JSX.Element;
export declare function KeyPanding({ shortcut, className, ...props }: KeyPandingProps): import("react/jsx-runtime").JSX.Element;
