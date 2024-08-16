import { FeildGeneralProps } from "@/types/global";
import { SettingConfig, SettingValueType } from "@/reducers/Settings/SettingConfig";
export type FileFeildProps = FeildGeneralProps<SettingValueType["file"], SettingConfig["file"]>;
export declare function FileFeild({ state, config, id }: FileFeildProps): import("react/jsx-runtime").JSX.Element;
