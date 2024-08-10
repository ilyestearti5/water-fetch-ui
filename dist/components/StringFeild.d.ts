import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
type StringFeildProps = FeildGeneralProps<string | undefined, SettingConfig["string"]>;
export declare function StringFeild({ state, config, id }: StringFeildProps): import("react/jsx-runtime").JSX.Element;
export {};
