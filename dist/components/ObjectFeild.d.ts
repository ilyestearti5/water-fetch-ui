import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
export declare const objectIfPrefix: (id: string) => string;
export type ObjectFeildProps = FeildGeneralProps<Record<string, string> | undefined, SettingConfig["object"]>;
export declare function ObjectFeild({ state, id }: ObjectFeildProps): import("react/jsx-runtime").JSX.Element;
