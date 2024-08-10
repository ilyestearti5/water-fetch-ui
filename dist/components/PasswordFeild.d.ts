import React from "react";
import { State } from "@/types/global";
import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
export type PasswordFeildProps = FeildGeneralProps<string | undefined, SettingConfig["password"]>;
export interface PasswordProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    state: State<string | undefined>;
    eays?: boolean;
}
export declare function Password({ eays, state, onFocus, onBlur, className, style, value, type, ...props }: PasswordProps): import("react/jsx-runtime").JSX.Element;
export declare function PasswordFeild({ state, config, id }: PasswordFeildProps): import("react/jsx-runtime").JSX.Element;
