import { EntityId } from "@reduxjs/toolkit";
declare const data: {
    autoCompleteInput: {
        default: string;
    };
    "bg.selection": {
        dark: string;
        light: string;
    };
    "black.opacity": {
        dark: string;
        light: string;
    };
    borders: {
        dark: string;
        light: string;
    };
    "checkbox.background": {
        default: string;
    };
    "checkbox.false": {
        default: string;
    };
    "checkbox.true": {
        default: string;
    };
    error: {
        default: string;
    };
    "error.border": {
        default: string;
    };
    "error.content": {
        default: string;
    };
    "error.text": {
        default: string;
    };
    "facebook-icon": {
        default: string;
    };
    "field.background": {
        default: string;
    };
    "focus.text": {
        default: string;
    };
    "google-icon": {
        default: string;
    };
    "gray.opacity": {
        default: string;
    };
    "gray.opacity.2": {
        default: string;
    };
    "gray.opacity.toLight": {
        default: string;
    };
    htmlContentHover: {
        default: string;
    };
    "info.text": {
        default: string;
    };
    locationIconSetup: {
        default: string;
    };
    "log.error.color": {
        default: string;
    };
    "log.info.color": {
        default: string;
    };
    "log.secuess.color": {
        default: string;
    };
    "log.warning.color": {
        default: string;
    };
    "microsoft-icon": {
        default: string;
    };
    "notifay.error": {
        default: string;
    };
    "notifay.info": {
        default: string;
    };
    "notifay.success": {
        default: string;
    };
    "notifay.warning": {
        default: string;
    };
    primary: {
        dark: string;
        light: string;
    };
    "primary.background": {
        dark: string;
        light: string;
    };
    "primary.content": {
        dark: string;
        light: string;
    };
    "primary.hover.background": {
        dark: string;
        light: string;
    };
    "qrCode.detection.secuess": {
        dark: string;
        light: string;
    };
    "qrCode.detection.secuess.content": {
        default: string;
    };
    secondry: {
        dark: string;
        light: string;
    };
    "secondry.background": {
        dark: string;
        light: string;
    };
    "secondry.content": {
        default: string;
    };
    selectedTextBackgroundBlured: {
        default: string;
    };
    selectedTextBackgroundFocused: {
        default: string;
    };
    selectedTextColorBlur: {
        default: string;
    };
    selectedTextColorFocused: {
        default: string;
    };
    "shadow.background.from": {
        default: string;
    };
    "shadow.background.to": {
        dark: string;
        light: string;
    };
    "shadow.color": {
        dark: string;
        light: string;
    };
    "starts.color": {
        dark: string;
        light: string;
    };
    "status.content": {
        default: string;
    };
    "submit.background": {
        default: string;
    };
    "success.text": {
        default: string;
    };
    "text.color": {
        dark: string;
        light: string;
    };
    "text.selection": {
        dark: string;
        light: string;
    };
    "toast.background": {
        dark: string;
        light: string;
    };
    transparent: {
        default: string;
    };
    userIconSetup: {
        default: string;
    };
    "warning.text": {
        default: string;
    };
    wifiIconSetup: {
        default: string;
    };
    "window.inWindows.close": {
        default: string;
    };
};
export type ColorIds = keyof typeof data;
export interface Color {
    colorId: string;
    dark?: string;
    light?: string;
    default?: string;
    propositions?: string[];
}
export declare const colorHooks: {
    getFull(): import("@/types/global").InitState<any, "colorId">;
    getIds(): EntityId[];
    getId(): "colorId";
    remove(ids: EntityId[]): void;
    add(data: Color[]): void;
    upsert(data: Color[]): void;
    getOne(id: EntityId): {
        colorId: string;
        dark?: string;
        light?: string;
        default?: string;
        propositions?: string[];
    } | undefined;
    setOne(id: EntityId, changes: Partial<Color>): void;
    setWriteStatus(status?: import("@/types/global").InitState<Color, "colorId">["writeStatus"]): void;
    useOne(id: EntityId): {
        get: {
            colorId: string;
            dark?: string;
            light?: string;
            default?: string;
            propositions?: string[];
        } | undefined;
        set: import("react").Dispatch<import("react").SetStateAction<{
            colorId: string;
            dark?: string;
            light?: string;
            default?: string;
            propositions?: string[];
        } | undefined>>;
    };
    getOneFeild<F extends keyof Color>(recordId: EntityId, field: F): ({
        colorId: string;
        dark?: string;
        light?: string;
        default?: string;
        propositions?: string[];
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Color>(id: EntityId, field: F, value: Color[F]): void;
    useOneFeild<F extends keyof Color>(recordeId: EntityId, field: F): {
        get: ({
            colorId: string;
            dark?: string;
            light?: string;
            default?: string;
            propositions?: string[];
        }[F] & ({} | null)) | undefined;
        set: import("react").Dispatch<import("react").SetStateAction<({
            colorId: string;
            dark?: string;
            light?: string;
            default?: string;
            propositions?: string[];
        }[F] & ({} | null)) | undefined>>;
    };
    getOneFeilds<F extends keyof Color>(id: EntityId, fields: F[]): (F extends infer T extends keyof Color ? { [key in T]: Color[F]; } : never) | undefined;
    getAll(): Color[];
    setAll(data: Record<EntityId, Color> | readonly Color[]): void;
    useAll(): {
        get: Color[];
        set: import("react").Dispatch<import("react").SetStateAction<Color[]>>;
    };
    getWriteStatus(): "ready" | import("react-query").QueryStatus;
    useWriteStatus(): {
        get: "idle" | "ready" | "loading" | "error" | "success";
        set: import("react").Dispatch<import("react").SetStateAction<"idle" | "ready" | "loading" | "error" | "success">>;
    };
    getStatus(): import("react-query").QueryStatus;
    setStatus(value: ReturnType<() => import("react-query").QueryStatus>): void;
    useStatus(): {
        get: "idle" | "loading" | "error" | "success";
        set: import("react").Dispatch<import("react").SetStateAction<"idle" | "loading" | "error" | "success">>;
    };
    getEntity(): Record<EntityId, Color>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
}, colorSlice: import("@reduxjs/toolkit").Slice<import("@reduxjs/toolkit").EntityState<Color, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "colorId";
    name: "color";
    loadingTime: number;
    changed: boolean;
}, {
    set(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Color, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "colorId";
        name: "color";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<EntityId, Color> | readonly Color[];
        type: string;
    }): void;
    add(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Color, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "colorId";
        name: "color";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<EntityId, Color> | readonly Color[];
        type: string;
    }): void;
    remove(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Color, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "colorId";
        name: "color";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<readonly EntityId[]>): void;
    update(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Color, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "colorId";
        name: "color";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: readonly import("@reduxjs/toolkit").Update<Color, EntityId>[];
        type: string;
    }): void;
    reset(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Color, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "colorId";
        name: "color";
        loadingTime: number;
        changed: boolean;
    }>): void;
    upsert(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Color, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "colorId";
        name: "color";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<EntityId, Color> | readonly Color[];
        type: string;
    }): void;
    changeStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Color, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "colorId";
        name: "color";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<Color, "colorId">["status"]>): void;
    setLoadingTime(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Color, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "colorId";
        name: "color";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<number>): void;
    setChanged(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Color, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "colorId";
        name: "color";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<boolean>): void;
    changeWriteStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Color, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "colorId";
        name: "color";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<Color, "colorId">["writeStatus"]>): void;
}, "color", "color", import("@reduxjs/toolkit").SliceSelectors<import("@reduxjs/toolkit").EntityState<Color, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "colorId";
    name: "color";
    loadingTime: number;
    changed: boolean;
}>>, initColors: () => {
    id: "colorId";
    saved: "ready" | import("react-query").QueryStatus;
    status: import("react-query").QueryStatus;
    timeLoading: number;
}, selectColors: (state: {
    [x: string]: import("@/types/global").InitState<Color, "colorId">;
}) => import("@/types/global").InitState<Color, "colorId">, colorEntity: import("@reduxjs/toolkit").EntityAdapter<Color, EntityId>, colorSelectors: import("@reduxjs/toolkit").EntitySelectors<Color, import("@reduxjs/toolkit").EntityState<Color, EntityId>, EntityId>;
export {};
