export interface TextProps {
    content: string;
}
export declare const getText: (content: TextProps["content"]) => string;
export declare function Text({ content }: TextProps): import("react/jsx-runtime").JSX.Element;
export interface InnerTextProps {
    component: (props: {
        text: string;
    }) => JSX.Element;
    text: string;
}
export declare function InnerText({ component, text }: InnerTextProps): import("react/jsx-runtime").JSX.Element;
