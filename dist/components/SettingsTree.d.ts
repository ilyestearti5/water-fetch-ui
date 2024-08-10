export interface TreeReturn {
    data: string;
    innerTree?: TreeReturn[];
}
export declare function getTree(inputs?: string[], sep?: string): TreeReturn[];
export declare function SettingsTree(): import("react/jsx-runtime").JSX.Element;
