import { SettingConfig } from "@/reducers/Settings/SettingConfig";
import { FeildGeneralProps } from "@/types/global";
export type PinFeildProps = FeildGeneralProps<number | undefined, SettingConfig["pin"]>;
export declare function PinFeild({ id, config, state }: PinFeildProps): import("react/jsx-runtime").JSX.Element;
