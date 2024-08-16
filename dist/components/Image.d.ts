import React from "react";
interface ImageProps extends Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "alt"> {
    alt?: any;
}
export declare function Image({ className, alt, src, children, style, ...props }: ImageProps): import("react/jsx-runtime").JSX.Element;
export {};
