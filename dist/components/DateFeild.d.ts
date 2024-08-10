import { SettingConfig, SettingValueType } from "@/reducers/Settings/SettingConfig";
import { FeildGeneralProps } from "@/types/global";
export declare const dateToStringForInput: (date: Date, to?: SettingConfig["date"]["format"]) => string;
export type DateFeildProps = FeildGeneralProps<SettingValueType["date"] | undefined, SettingConfig["date"]>;
export declare function DateFeild({ state, config, id }: DateFeildProps): import("react/jsx-runtime").JSX.Element;
