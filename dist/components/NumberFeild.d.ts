import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
export type NumberFeildProps = FeildGeneralProps<number | undefined | null, SettingConfig["number"]>;
export declare function NumberFeild({ state, config, id }: NumberFeildProps): import("react/jsx-runtime").JSX.Element;
