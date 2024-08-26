import React from "react";
import { ToastType } from "@/data/system/toasts.model";
import { TextAreaProps } from "@/components/TextArea";
import { store } from "@/store";
import { SettingValueType, SettingConfig } from "@/reducers/Settings/SettingConfig";
import { Setting, SettingIds } from "@/reducers/Settings/settings.model";
import { QueryStatus } from "react-query";
import { RecaptchaVerifier, User } from "firebase/auth";
import { NotificationType } from "@/data/system/notifications.model";
import { FeildRecord, FeildIds } from "@/data/system/field.model";
import { EntityId } from "@reduxjs/toolkit";
import { CommandIds } from "@/data/system/command.model";
import { ColorIds, Color } from "@/data/system/colors.model";
import { CameraResult, CssColorKeys, FullCameraResult, FullStateManagment, Nothing } from "@/types/global";
export * from "@/reducers/Settings/settings.model";
export * from "@/reducers/Settings/SettingConfig";
export * from "@/reducers/Object/object.slice";
export * from "@/reducers/Object/allTemps";
export * from "@/data/system/views.model";
export * from "@/data/system/tree.model";
export * from "@/data/system/toasts.model";
export * from "@/data/system/slot.slice";
export * from "@/data/system/positions.model";
export * from "@/data/system/notifications.model";
export * from "@/data/system/logs.model";
export * from "@/data/system/lang.model";
export * from "@/data/system/keys.model";
export * from "@/data/system/field.model";
export * from "@/data/system/command.model";
export * from "@/data/system/colors.model";
export * from "@/data/system/actions.model";
export { getModel } from "./api/googleApi";
export declare function useAsyncMemo<T>(callback: () => Promise<T>, deps?: any[], cleanUp?: (deps: any[]) => void): T | null;
export declare function useAsyncEffect(callback: () => Promise<void>, deps?: any[], cleanUp?: (deps: any[]) => void): void;
export declare function useCopyState<T>(initData: T | (() => T)): {
    get: T;
    set: React.Dispatch<React.SetStateAction<T>>;
};
export declare function useDref<T>(firstState: T, upload: (val: T) => any, download?: (val: T) => T): {
    get: T;
    set: React.Dispatch<React.SetStateAction<T>>;
};
export declare function useMemoDelay<G>(fn: () => G, deps?: any[], time?: number): [boolean, G | null];
export declare function useEffectDelay(fn: () => Promise<void> | void | (() => Promise<void> | void), deps?: any[], time?: number): boolean;
export declare const useIdleStatus: <T>(fn: () => Promise<T>, deps?: any[]) => {
    status: {
        get: "ready" | QueryStatus;
        set: React.Dispatch<React.SetStateAction<"ready" | QueryStatus>>;
    };
    data: {
        get: T | null;
        set: React.Dispatch<React.SetStateAction<T | null>>;
    };
    error: {
        get: any;
        set: React.Dispatch<any>;
    };
};
export declare function getSettingById<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`): Setting<ID> | null;
export declare function getPublicSettings(): Setting<keyof SettingConfig>[];
export declare function getSettingConfig<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`): SettingConfig[ID] | null;
export declare function getPublicSettingsFilter(): Setting<keyof SettingConfig>[];
export declare function setSettingConfig<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`, config: SettingConfig[ID]): void;
export declare function setSettingValue<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`, value: SettingValueType[ID]): void;
export declare function getSettingValue<ID extends keyof SettingConfig>(settingId: Setting<ID>["settingId"]): SettingValueType[ID] | undefined;
export declare function getShortcutsOfCommand(commandId: CommandIds | string): import("@/data/system/keys.model").Key[];
export declare function getAllKeys(): import("@/data/system/keys.model").Key[];
export declare function getShortcutsOfAction(actionName: string): import("@/data/system/keys.model").Key[];
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
export declare function getManyFeilds<S extends string | number, T extends FeildRecord<S>>(fields: T, deps?: any): Record<keyof T, string | undefined>;
export declare function resetManyFeilds<T extends FeildIds>(fields: T[]): void;
export declare function initNewFeild(fieldId: string): void;
export declare function getPrevious(value: string | undefined, selection: TextAreaProps["selection"]): string;
export declare function getNext(value: string | undefined, selection: TextAreaProps["selection"]): string;
export declare function getSelected(value: string | undefined, selection: TextAreaProps["selection"]): string;
export declare function initNewFeilds(inputNames: string[]): void;
export declare function getFeildPrevious(fieldId: string): string;
export declare function getFeildNext(fieldId: string): string;
export declare function getFeildSelected(fieldId: string): string;
export declare function checkFormByFeilds(fields: string[], state?: FullStateManagment): {
    controls: ({
        response: never[];
        isValide: boolean;
        fieldName?: undefined;
    } | {
        response: (RegExpMatchArray | null)[];
        isValide: boolean;
        fieldName: string;
    })[];
    isValide: boolean;
};
export declare function showToast(message: ToastType["message"], type?: ToastType["type"], id?: string, time?: number): string;
export declare enum ToastTime {
    short = 5,
    long = 5
}
export declare const scanQr: () => Promise<unknown>;
export declare function openCamera<T extends keyof FullCameraResult>(type: T): Promise<CameraResult<T>>;
export declare function useColorMerge<T extends Partial<Record<CssColorKeys, ColorIds | ReturnColorHandelFunction>>>(): (...args: (Nothing | ColorIds | T)[]) => Partial<Record<keyof T, string>>;
export type ReturnColorHandelFunction = (allColors: Record<EntityId, Color>, isDark: boolean) => string;
export declare function handelGradientColor(direction: string, ...colors: ColorIds[]): ReturnColorHandelFunction;
export declare function getColor(isDark: boolean, color: Color): string | undefined;
export declare function handelShadowColor(array?: {
    colorId: ColorIds;
    x?: number;
    y?: number;
    size?: number;
    blur?: number;
    isInset?: boolean;
}[]): ReturnColorHandelFunction;
export declare const onceState: <T extends object | string | number | boolean | null>(stateDir: string, comparedValue: T | ((val: T | undefined) => boolean), on: (state: FullStateManagment) => void) => import("redux").Unsubscribe;
export declare const onState: <T extends object | string | number | boolean | null>(stateDir: string, comparedValue: T | ((val: T | undefined) => boolean), on?: (state: FullStateManagment) => void) => import("redux").Unsubscribe;
export { store };
export type UserDB = Partial<{
    name: string | null;
    email: string | null;
    phone: string | null;
    photo: string | null;
}>;
export declare const getUserFromDB: () => Partial<{
    name: string | null;
    email: string | null;
    phone: string | null;
    photo: string | null;
}> | null;
export declare const initUser: () => void;
export declare const getUser: () => User | null;
export declare const verifieCapatcha: () => Promise<RecaptchaVerifier>;
export declare const showProfile: () => void;
export declare const closeProfile: () => void;
export declare const showPdf: (content: null | string) => void;
export declare const showNotification: ({ ...notification }: Partial<NotificationType>) => void;
