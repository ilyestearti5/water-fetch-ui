import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { FeildGeneralProps } from "@/types/global";
type PinFeildProps = FeildGeneralProps<number | undefined, SettingConfig["pin"]>;
export declare function PinFeild({ id, config }: PinFeildProps): import("react/jsx-runtime").JSX.Element;
export {};
