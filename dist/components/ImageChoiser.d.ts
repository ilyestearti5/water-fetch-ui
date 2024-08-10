export type ImageParam = {
    dataURL?: string;
};
export interface ImageChoiserProps {
    onChange?: (input: ImageParam | null) => void;
    alt?: any;
    src?: ImageParam["dataURL"];
}
export declare function ImageChoiser({ onChange, alt, src }: ImageChoiserProps): import("react/jsx-runtime").JSX.Element;
