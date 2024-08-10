import { Setting, SettingIds } from "@/reducers/Settings/settings.model";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
export declare const showSetting: (settingId: SettingIds | Setting<keyof SettingConfig>["settingId"] | null) => void;
export declare function usePublicCommands(): import("@/data/system/command.model").Command[];
export declare function usePublicCommandsFilter(): {
    keys: import("@/data/system/keys.model").Key[];
    commandId: string;
    label?: string;
    commands?: (import("@/data/system/command.model").Command["commandId"] | import("@reduxjs/toolkit").PayloadAction<any> | number)[];
    private?: boolean;
    blocked?: boolean;
}[];
