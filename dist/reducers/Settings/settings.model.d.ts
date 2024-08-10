import React from "react";
import { PayloadAction } from "@reduxjs/toolkit";
import { SettingConfig, SettingValueType } from "./SettingConfig";
declare const data: {
    "activity/position.enum": {
        config: {
            list: {
                content: string;
                value: string;
            }[];
        };
        def: string;
        desc: string;
        name: string;
    };
    "camera/clear/time.number": {
        config: {
            max: number;
            min: number;
        };
        def: number;
        desc: string;
        name: string;
    };
    "camera/loading/time.number": {
        def: number;
        desc: string;
        name: string;
    };
    "preferences/animation.boolean": {
        def: boolean;
        desc: string;
        name: string;
    };
    "preferences/fastScrollKey.enum": {
        config: {
            list: {
                value: string;
            }[];
        };
        def: string;
        desc: string;
        name: string;
    };
    "preferences/font.enum": {
        config: {
            list: {
                content: string;
                value: string;
            }[];
        };
        def: string;
        desc: string;
        name: string;
    };
    "preferences/toastTime.number": {
        config: {
            max: number;
            min: number;
        };
        def: number;
        desc: string;
        name: string;
    };
    "settings/findBy.enum": {
        config: {
            list: ({
                content: string;
                value: string;
            } | {
                value: string;
                content?: undefined;
            })[];
        };
        def: string;
        desc: string;
        name: string;
    };
    "toast/position.enum": {
        config: {
            list: {
                content: string;
                value: string;
            }[];
        };
        def: string;
        desc: string;
        name: string;
    };
    "visibility/activity.boolean": {
        def: boolean;
        name: string;
    };
    "visibility/configurations.boolean": {
        def: boolean;
        desc: string;
        name: string;
        private: boolean;
    };
    "visibility/header.boolean": {
        def: boolean;
        name: string;
    };
    "visibility/headerNotifays.boolean": {
        def: boolean;
        name: string;
        private: boolean;
    };
    "visibility/keyPanding/form.boolean": {
        def: boolean;
        private: boolean;
    };
    "visibility/leftSide.boolean": {
        def: boolean;
        desc: string;
        name: string;
    };
    "visibility/notifays.boolean": {
        def: boolean;
        desc: string;
        name: string;
        private: boolean;
    };
    "visibility/notifays/nots.boolean": {
        def: boolean;
        private: boolean;
    };
    "visibility/rightSide.boolean": {
        def: boolean;
        desc: string;
        name: string;
    };
    "window/dark.boolean": {
        config: {
            style: string;
        };
        def: boolean;
        desc: string;
        name: string;
    };
    "window/lang.enum": {
        config: {
            list: {
                content: string;
                value: string;
            }[];
        };
        def: string;
        desc: string;
        name: string;
    };
    "window/scroll/animation.boolean": {
        def: boolean;
        desc: string;
        name: string;
    };
};
export type SettingIds = keyof typeof data;
export interface Setting<T extends keyof SettingConfig> {
    settingId: `${string}.${T}`;
    name?: string;
    desc?: string;
    private?: boolean;
    value: SettingValueType[T];
    config?: SettingConfig[T];
    deperacted?: boolean;
    def?: SettingValueType[T];
    readonly?: boolean;
}
export declare function getSettingValue<ID extends keyof SettingConfig>(settingId: Setting<ID>["settingId"]): SettingValueType[ID] | undefined;
export declare const settingHooks: {
    getFull(): import("@/types/global").InitState<any, "settingId">;
    getIds(): import("@reduxjs/toolkit").EntityId[];
    getId(): "settingId";
    remove(ids: import("@reduxjs/toolkit").EntityId[]): void;
    add(data: Setting<keyof SettingConfig>[]): void;
    upsert(data: Setting<keyof SettingConfig>[]): void;
    getOne(id: import("@reduxjs/toolkit").EntityId): {
        settingId: `${string}.string` | `${string}.number` | `${string}.boolean` | `${string}.object` | `${string}.filter` | `${string}.image` | `${string}.file` | `${string}.date` | `${string}.pin` | `${string}.enum` | `${string}.regexp` | `${string}.array` | `${string}.password` | `${string}.audio`;
        name?: string;
        desc?: string;
        private?: boolean;
        value: string | number | boolean | Record<string, string> | string[] | null;
        config?: Partial<{
            maxLength: number;
            minLength: number;
            help: string[];
            locked: boolean;
            hint: string;
        }> | Partial<{
            max: number;
            min: number;
            placeholder: string;
            noConfirm: boolean;
            center: boolean;
            size: "small" | "large";
        }> | Partial<{
            onActive: string;
            onDisactive: string;
            style: "checkbox" | "switch";
        }> | Partial<{
            proposition: "path";
        }> | Partial<{
            list: string[];
            extra: string[][];
        }> | Partial<{
            filter: string[];
        }> | Partial<import("./SettingConfig").FileProps> | Partial<{
            format?: "date" | "time" | "month" | "datetime-local";
            goToCurrent?: boolean;
        }> | Partial<{
            length: number;
            nullable: boolean;
            match: string;
        }> | Partial<{
            position: "bottom" | "left" | "top" | "right";
            list: {
                value: string;
                content?: string;
                desc?: string;
            }[];
            nullable: boolean;
            expandIcon: boolean;
        }> | Partial<{}> | Partial<{
            canEmpty: string;
        }> | undefined;
        deperacted?: boolean;
        def?: string | number | boolean | Record<string, string> | string[] | null | undefined;
        readonly?: boolean;
    } | undefined;
    setOne(id: import("@reduxjs/toolkit").EntityId, changes: Partial<Setting<keyof SettingConfig>>): void;
    setWriteStatus(status?: import("@/types/global").InitState<Setting<keyof SettingConfig>, "settingId">["writeStatus"]): void;
    useOne(id: import("@reduxjs/toolkit").EntityId): {
        get: {
            settingId: `${string}.string` | `${string}.number` | `${string}.boolean` | `${string}.object` | `${string}.filter` | `${string}.image` | `${string}.file` | `${string}.date` | `${string}.pin` | `${string}.enum` | `${string}.regexp` | `${string}.array` | `${string}.password` | `${string}.audio`;
            name?: string;
            desc?: string;
            private?: boolean;
            value: string | number | boolean | Record<string, string> | string[] | null;
            config?: Partial<{
                maxLength: number;
                minLength: number;
                help: string[];
                locked: boolean;
                hint: string;
            }> | Partial<{
                max: number;
                min: number;
                placeholder: string;
                noConfirm: boolean;
                center: boolean;
                size: "small" | "large";
            }> | Partial<{
                onActive: string;
                onDisactive: string;
                style: "checkbox" | "switch";
            }> | Partial<{
                proposition: "path";
            }> | Partial<{
                list: string[];
                extra: string[][];
            }> | Partial<{
                filter: string[];
            }> | Partial<import("./SettingConfig").FileProps> | Partial<{
                format?: "date" | "time" | "month" | "datetime-local";
                goToCurrent?: boolean;
            }> | Partial<{
                length: number;
                nullable: boolean;
                match: string;
            }> | Partial<{
                position: "bottom" | "left" | "top" | "right";
                list: {
                    value: string;
                    content?: string;
                    desc?: string;
                }[];
                nullable: boolean;
                expandIcon: boolean;
            }> | Partial<{}> | Partial<{
                canEmpty: string;
            }> | undefined;
            deperacted?: boolean;
            def?: string | number | boolean | Record<string, string> | string[] | null | undefined;
            readonly?: boolean;
        } | undefined;
        set: React.Dispatch<React.SetStateAction<{
            settingId: `${string}.string` | `${string}.number` | `${string}.boolean` | `${string}.object` | `${string}.filter` | `${string}.image` | `${string}.file` | `${string}.date` | `${string}.pin` | `${string}.enum` | `${string}.regexp` | `${string}.array` | `${string}.password` | `${string}.audio`;
            name?: string;
            desc?: string;
            private?: boolean;
            value: string | number | boolean | Record<string, string> | string[] | null;
            config?: Partial<{
                maxLength: number;
                minLength: number;
                help: string[];
                locked: boolean;
                hint: string;
            }> | Partial<{
                max: number;
                min: number;
                placeholder: string;
                noConfirm: boolean;
                center: boolean;
                size: "small" | "large";
            }> | Partial<{
                onActive: string;
                onDisactive: string;
                style: "checkbox" | "switch";
            }> | Partial<{
                proposition: "path";
            }> | Partial<{
                list: string[];
                extra: string[][];
            }> | Partial<{
                filter: string[];
            }> | Partial<import("./SettingConfig").FileProps> | Partial<{
                format?: "date" | "time" | "month" | "datetime-local";
                goToCurrent?: boolean;
            }> | Partial<{
                length: number;
                nullable: boolean;
                match: string;
            }> | Partial<{
                position: "bottom" | "left" | "top" | "right";
                list: {
                    value: string;
                    content?: string;
                    desc?: string;
                }[];
                nullable: boolean;
                expandIcon: boolean;
            }> | Partial<{}> | Partial<{
                canEmpty: string;
            }> | undefined;
            deperacted?: boolean;
            def?: string | number | boolean | Record<string, string> | string[] | null | undefined;
            readonly?: boolean;
        } | undefined>>;
    };
    getOneFeild<F extends keyof Setting<keyof SettingConfig>>(recordId: import("@reduxjs/toolkit").EntityId, feild: F): ({
        settingId: `${string}.string` | `${string}.number` | `${string}.boolean` | `${string}.object` | `${string}.filter` | `${string}.image` | `${string}.file` | `${string}.date` | `${string}.pin` | `${string}.enum` | `${string}.regexp` | `${string}.array` | `${string}.password` | `${string}.audio`;
        name?: string;
        desc?: string;
        private?: boolean;
        value: string | number | boolean | Record<string, string> | string[] | null;
        config?: Partial<{
            maxLength: number;
            minLength: number;
            help: string[];
            locked: boolean;
            hint: string;
        }> | Partial<{
            max: number;
            min: number;
            placeholder: string;
            noConfirm: boolean;
            center: boolean;
            size: "small" | "large";
        }> | Partial<{
            onActive: string;
            onDisactive: string;
            style: "checkbox" | "switch";
        }> | Partial<{
            proposition: "path";
        }> | Partial<{
            list: string[];
            extra: string[][];
        }> | Partial<{
            filter: string[];
        }> | Partial<import("./SettingConfig").FileProps> | Partial<{
            format?: "date" | "time" | "month" | "datetime-local";
            goToCurrent?: boolean;
        }> | Partial<{
            length: number;
            nullable: boolean;
            match: string;
        }> | Partial<{
            position: "bottom" | "left" | "top" | "right";
            list: {
                value: string;
                content?: string;
                desc?: string;
            }[];
            nullable: boolean;
            expandIcon: boolean;
        }> | Partial<{}> | Partial<{
            canEmpty: string;
        }> | undefined;
        deperacted?: boolean;
        def?: string | number | boolean | Record<string, string> | string[] | null | undefined;
        readonly?: boolean;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Setting<keyof SettingConfig>>(id: import("@reduxjs/toolkit").EntityId, feild: F, value: Setting<keyof SettingConfig>[F]): void;
    useOneFeild<F extends keyof Setting<keyof SettingConfig>>(recordeId: import("@reduxjs/toolkit").EntityId, feild: F): {
        get: ({
            settingId: `${string}.string` | `${string}.number` | `${string}.boolean` | `${string}.object` | `${string}.filter` | `${string}.image` | `${string}.file` | `${string}.date` | `${string}.pin` | `${string}.enum` | `${string}.regexp` | `${string}.array` | `${string}.password` | `${string}.audio`;
            name?: string;
            desc?: string;
            private?: boolean;
            value: string | number | boolean | Record<string, string> | string[] | null;
            config?: Partial<{
                maxLength: number;
                minLength: number;
                help: string[];
                locked: boolean;
                hint: string;
            }> | Partial<{
                max: number;
                min: number;
                placeholder: string;
                noConfirm: boolean;
                center: boolean;
                size: "small" | "large";
            }> | Partial<{
                onActive: string;
                onDisactive: string;
                style: "checkbox" | "switch";
            }> | Partial<{
                proposition: "path";
            }> | Partial<{
                list: string[];
                extra: string[][];
            }> | Partial<{
                filter: string[];
            }> | Partial<import("./SettingConfig").FileProps> | Partial<{
                format?: "date" | "time" | "month" | "datetime-local";
                goToCurrent?: boolean;
            }> | Partial<{
                length: number;
                nullable: boolean;
                match: string;
            }> | Partial<{
                position: "bottom" | "left" | "top" | "right";
                list: {
                    value: string;
                    content?: string;
                    desc?: string;
                }[];
                nullable: boolean;
                expandIcon: boolean;
            }> | Partial<{}> | Partial<{
                canEmpty: string;
            }> | undefined;
            deperacted?: boolean;
            def?: string | number | boolean | Record<string, string> | string[] | null | undefined;
            readonly?: boolean;
        }[F] & ({} | null)) | undefined;
        set: React.Dispatch<React.SetStateAction<({
            settingId: `${string}.string` | `${string}.number` | `${string}.boolean` | `${string}.object` | `${string}.filter` | `${string}.image` | `${string}.file` | `${string}.date` | `${string}.pin` | `${string}.enum` | `${string}.regexp` | `${string}.array` | `${string}.password` | `${string}.audio`;
            name?: string;
            desc?: string;
            private?: boolean;
            value: string | number | boolean | Record<string, string> | string[] | null;
            config?: Partial<{
                maxLength: number;
                minLength: number;
                help: string[];
                locked: boolean;
                hint: string;
            }> | Partial<{
                max: number;
                min: number;
                placeholder: string;
                noConfirm: boolean;
                center: boolean;
                size: "small" | "large";
            }> | Partial<{
                onActive: string;
                onDisactive: string;
                style: "checkbox" | "switch";
            }> | Partial<{
                proposition: "path";
            }> | Partial<{
                list: string[];
                extra: string[][];
            }> | Partial<{
                filter: string[];
            }> | Partial<import("./SettingConfig").FileProps> | Partial<{
                format?: "date" | "time" | "month" | "datetime-local";
                goToCurrent?: boolean;
            }> | Partial<{
                length: number;
                nullable: boolean;
                match: string;
            }> | Partial<{
                position: "bottom" | "left" | "top" | "right";
                list: {
                    value: string;
                    content?: string;
                    desc?: string;
                }[];
                nullable: boolean;
                expandIcon: boolean;
            }> | Partial<{}> | Partial<{
                canEmpty: string;
            }> | undefined;
            deperacted?: boolean;
            def?: string | number | boolean | Record<string, string> | string[] | null | undefined;
            readonly?: boolean;
        }[F] & ({} | null)) | undefined>>;
    };
    getOneFeilds<F extends keyof Setting<keyof SettingConfig>>(id: import("@reduxjs/toolkit").EntityId, feilds: F[]): (F extends infer T extends keyof Setting<keyof SettingConfig> ? { [key in T]: Setting<keyof SettingConfig>[F]; } : never) | undefined;
    getAll(): Setting<keyof SettingConfig>[];
    setAll(data: Record<import("@reduxjs/toolkit").EntityId, Setting<keyof SettingConfig>> | readonly Setting<keyof SettingConfig>[]): void;
    useAll(): {
        get: Setting<keyof SettingConfig>[];
        set: React.Dispatch<React.SetStateAction<Setting<keyof SettingConfig>[]>>;
    };
    getWriteStatus(): "ready" | import("react-query").QueryStatus;
    useWriteStatus(): {
        get: "idle" | "ready" | "loading" | "error" | "success";
        set: React.Dispatch<React.SetStateAction<"idle" | "ready" | "loading" | "error" | "success">>;
    };
    getStatus(): import("react-query").QueryStatus;
    setStatus(value: ReturnType<() => import("react-query").QueryStatus>): void;
    useStatus(): {
        get: "idle" | "loading" | "error" | "success";
        set: React.Dispatch<React.SetStateAction<"idle" | "loading" | "error" | "success">>;
    };
    getEntity(): Record<import("@reduxjs/toolkit").EntityId, Setting<keyof SettingConfig>>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
}, settingSlice: import("@reduxjs/toolkit").Slice<import("@reduxjs/toolkit").EntityState<Setting<keyof SettingConfig>, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "settingId";
    name: "settings";
    loadingTime: number;
    changed: boolean;
}, {
    set(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Setting<keyof SettingConfig>, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "settingId";
        name: "settings";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Setting<keyof SettingConfig>> | readonly Setting<keyof SettingConfig>[];
        type: string;
    }): void;
    add(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Setting<keyof SettingConfig>, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "settingId";
        name: "settings";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Setting<keyof SettingConfig>> | readonly Setting<keyof SettingConfig>[];
        type: string;
    }): void;
    remove(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Setting<keyof SettingConfig>, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "settingId";
        name: "settings";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<readonly import("@reduxjs/toolkit").EntityId[]>): void;
    update(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Setting<keyof SettingConfig>, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "settingId";
        name: "settings";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: readonly import("@reduxjs/toolkit").Update<Setting<keyof SettingConfig>, import("@reduxjs/toolkit").EntityId>[];
        type: string;
    }): void;
    reset(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Setting<keyof SettingConfig>, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "settingId";
        name: "settings";
        loadingTime: number;
        changed: boolean;
    }>): void;
    upsert(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Setting<keyof SettingConfig>, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "settingId";
        name: "settings";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Setting<keyof SettingConfig>> | readonly Setting<keyof SettingConfig>[];
        type: string;
    }): void;
    changeStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Setting<keyof SettingConfig>, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "settingId";
        name: "settings";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<import("@/types/global").InitState<Setting<keyof SettingConfig>, "settingId">["status"]>): void;
    setLoadingTime(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Setting<keyof SettingConfig>, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "settingId";
        name: "settings";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<number>): void;
    setChanged(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Setting<keyof SettingConfig>, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "settingId";
        name: "settings";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<boolean>): void;
    changeWriteStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Setting<keyof SettingConfig>, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "settingId";
        name: "settings";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<import("@/types/global").InitState<Setting<keyof SettingConfig>, "settingId">["writeStatus"]>): void;
}, "settings", "settings", import("@reduxjs/toolkit").SliceSelectors<import("@reduxjs/toolkit").EntityState<Setting<keyof SettingConfig>, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "settingId";
    name: "settings";
    loadingTime: number;
    changed: boolean;
}>>, initSettings: () => {
    id: "settingId";
    saved: "ready" | import("react-query").QueryStatus;
    status: import("react-query").QueryStatus;
    timeLoading: number;
}, settingEntitySelect: import("@reduxjs/toolkit").EntitySelectors<Setting<keyof SettingConfig>, import("@reduxjs/toolkit").EntityState<Setting<keyof SettingConfig>, import("@reduxjs/toolkit").EntityId>, import("@reduxjs/toolkit").EntityId>;
export declare function getSettingById<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`): Setting<ID> | null;
export declare function getPublicSettings(): Setting<keyof SettingConfig>[];
export declare function getSettingConfig<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`): SettingConfig[ID] | null;
export declare function getPublicSettingsFilter(): Setting<keyof SettingConfig>[];
export declare function setSettingConfig<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`, config: SettingConfig[ID]): void;
export declare function setSettingValue<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`, value: SettingValueType[ID]): void;
export {};
