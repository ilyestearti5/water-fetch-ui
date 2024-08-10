import { IconProp } from "@fortawesome/fontawesome-svg-core";
export interface CommandLine {
    id: string;
    content?: string;
    keyPanding?: string | string[];
    tools?: {
        onClick: () => void;
        icon?: IconProp;
    }[];
    checked?: boolean;
    sub?: string;
}
export interface DataBaseManagmentListProps {
    data: Record<string, {
        onSubmit?: (line: CommandLine) => void;
        lines?: CommandLine[];
    }>;
}
export declare function DataBaseManagmentList({ data }: DataBaseManagmentListProps): import("react/jsx-runtime").JSX.Element;
