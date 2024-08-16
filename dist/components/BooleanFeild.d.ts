import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
export type BooleanFeildProps = FeildGeneralProps<boolean | null, SettingConfig["boolean"]>;
export declare function BooleanFeild({ state, config, id }: BooleanFeildProps): import("react/jsx-runtime").JSX.Element;
