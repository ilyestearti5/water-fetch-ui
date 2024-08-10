import { ReactElement } from "@/types/global";
export interface LabelProps extends ReactElement {
    labelName?: string;
}
export declare function Label({ children, labelName, className, ...props }: LabelProps): import("react/jsx-runtime").JSX.Element;
