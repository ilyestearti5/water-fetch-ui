import { Feild as FeildProps } from "@/data/system/feild.model";
export interface UpdateDataProps {
    inputName: string;
    visibility: boolean;
    setVisibility: (value: boolean) => void;
    value: string;
    setValue: (value: string) => void;
    defaultContent: string;
    controls?: FeildProps["controls"];
    placeholder?: string;
}
export declare function UpdateData({ inputName, defaultContent, value, setValue, visibility, setVisibility, controls, placeholder }: UpdateDataProps): import("react/jsx-runtime").JSX.Element;
