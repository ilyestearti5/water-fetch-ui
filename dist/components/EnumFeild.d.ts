import React from "react";
import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
export interface EnumListProps {
    list: {
        isChoised: boolean;
        item?: Required<SettingConfig["enum"]>["list"][number];
    }[];
}
export declare const EnumList: React.MemoExoticComponent<({ list }: EnumListProps) => import("react/jsx-runtime").JSX.Element>;
export type EnumFeildProps = FeildGeneralProps<string | undefined, SettingConfig["enum"]>;
export declare const slotId = "enum/list";
export declare function EnumFeild({ config, id, state }: EnumFeildProps): import("react/jsx-runtime").JSX.Element;
