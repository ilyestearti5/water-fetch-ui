import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
type FilterFeildProps = FeildGeneralProps<string[] | undefined, SettingConfig["filter"]>;
export declare function FilterFeild({ id, config, state }: FilterFeildProps): import("react/jsx-runtime").JSX.Element;
export {};
