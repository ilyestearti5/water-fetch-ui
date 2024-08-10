import { Feild as FeildType } from "@/data/system/feild.model";
import { TextAreaProps } from "./TextArea";
export interface FeildProps extends TextAreaProps {
    inputName: string;
    selectWhenFocusIn?: boolean;
    help?: any;
    controls?: FeildType["controls"];
    controlsPosition?: "top" | "bottom";
    maxRows?: number;
    minRows?: number;
    acceptHistory?: boolean;
    propositions?: string[];
}
export declare function Feild({ inputName, selectWhenFocusIn, placeholder, controlsPosition, className, value: _v, rows, style, controls, onFocus, onBlur, acceptHistory, propositions, ...props }: FeildProps): import("react/jsx-runtime").JSX.Element;
