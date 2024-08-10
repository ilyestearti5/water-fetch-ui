import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
export type ArrayFeildProps = FeildGeneralProps<string[] | undefined, SettingConfig["array"]>;
export declare function ArrayFeild({ state, id }: ArrayFeildProps): import("react/jsx-runtime").JSX.Element;
