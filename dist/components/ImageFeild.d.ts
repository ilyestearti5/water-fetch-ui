import { FeildGeneralProps } from "@/types/global";
import { SettingConfig, SettingValueType } from "@/reducers/Settings/SettingConfig";
type ImageFeildProps = FeildGeneralProps<SettingValueType["image"], SettingConfig["image"]>;
export declare function ImageFeild({ state, config }: ImageFeildProps): import("react/jsx-runtime").JSX.Element;
export {};
