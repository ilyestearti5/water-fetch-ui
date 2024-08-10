import { EntityId } from "@reduxjs/toolkit";
import React from "react";
declare const data: {
    settings: {
        focused: string;
        label: string;
        tabs: {
            user: {
                icon: {
                    value: string;
                };
            };
            keyboardShortcuts: {
                icon: {
                    value: string;
                };
                news: {
                    value: string;
                };
            };
            icons: {
                icon: {
                    value: string;
                };
            };
            colors: {
                icon: {
                    value: string;
                    type: string;
                };
            };
        };
    };
    "settings.viewType": {
        focused: string;
        label: string;
        tab: {
            list: {};
            tree: {};
        };
    };
};
export type ViewIds = keyof typeof data;
export interface View {
    viewId: string;
    label: string;
    focused: string | null;
    tabs: {
        [label: string]: {
            icon?: {
                type: "solid" | "normal" | "brad";
                value: string;
            };
            news?: View["tabs"][string]["icon"];
            label?: string;
        };
    };
}
export declare const viewHooks: {
    getFull(): import("@/types/global").InitState<any, "viewId">;
    getIds(): EntityId[];
    getId(): "viewId";
    remove(ids: EntityId[]): void;
    add(data: View[]): void;
    upsert(data: View[]): void;
    getOne(id: EntityId): {
        viewId: string;
        label: string;
        focused: string | null;
        tabs: {
            [label: string]: {
                icon?: {
                    type: "solid" | "normal" | "brad";
                    value: string;
                };
                news?: View["tabs"][string]["icon"];
                label?: string;
            };
        };
    } | undefined;
    setOne(id: EntityId, changes: Partial<View>): void;
    setWriteStatus(status?: import("@/types/global").InitState<View, "viewId">["writeStatus"]): void;
    useOne(id: EntityId): {
        get: {
            viewId: string;
            label: string;
            focused: string | null;
            tabs: {
                [label: string]: {
                    icon?: {
                        type: "solid" | "normal" | "brad";
                        value: string;
                    };
                    news?: View["tabs"][string]["icon"];
                    label?: string;
                };
            };
        } | undefined;
        set: React.Dispatch<React.SetStateAction<{
            viewId: string;
            label: string;
            focused: string | null;
            tabs: {
                [label: string]: {
                    icon?: {
                        type: "solid" | "normal" | "brad";
                        value: string;
                    };
                    news?: View["tabs"][string]["icon"];
                    label?: string;
                };
            };
        } | undefined>>;
    };
    getOneFeild<F extends keyof View>(recordId: EntityId, feild: F): ({
        viewId: string;
        label: string;
        focused: string | null;
        tabs: {
            [label: string]: {
                icon?: {
                    type: "solid" | "normal" | "brad";
                    value: string;
                };
                news?: View["tabs"][string]["icon"];
                label?: string;
            };
        };
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof View>(id: EntityId, feild: F, value: View[F]): void;
    useOneFeild<F extends keyof View>(recordeId: EntityId, feild: F): {
        get: ({
            viewId: string;
            label: string;
            focused: string | null;
            tabs: {
                [label: string]: {
                    icon?: {
                        type: "solid" | "normal" | "brad";
                        value: string;
                    };
                    news?: View["tabs"][string]["icon"];
                    label?: string;
                };
            };
        }[F] & ({} | null)) | undefined;
        set: React.Dispatch<React.SetStateAction<({
            viewId: string;
            label: string;
            focused: string | null;
            tabs: {
                [label: string]: {
                    icon?: {
                        type: "solid" | "normal" | "brad";
                        value: string;
                    };
                    news?: View["tabs"][string]["icon"];
                    label?: string;
                };
            };
        }[F] & ({} | null)) | undefined>>;
    };
    getOneFeilds<F extends keyof View>(id: EntityId, feilds: F[]): (F extends infer T extends keyof View ? { [key in T]: View[F]; } : never) | undefined;
    getAll(): View[];
    setAll(data: Record<EntityId, View> | readonly View[]): void;
    useAll(): {
        get: View[];
        set: React.Dispatch<React.SetStateAction<View[]>>;
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
    getEntity(): Record<EntityId, View>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
}, viewSlice: import("@reduxjs/toolkit").Slice<import("@reduxjs/toolkit").EntityState<View, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "viewId";
    name: "views";
    loadingTime: number;
    changed: boolean;
}, {
    set(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<View, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "viewId";
        name: "views";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<EntityId, View> | readonly View[];
        type: string;
    }): void;
    add(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<View, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "viewId";
        name: "views";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<EntityId, View> | readonly View[];
        type: string;
    }): void;
    remove(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<View, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "viewId";
        name: "views";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<readonly EntityId[]>): void;
    update(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<View, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "viewId";
        name: "views";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: readonly import("@reduxjs/toolkit").Update<View, EntityId>[];
        type: string;
    }): void;
    reset(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<View, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "viewId";
        name: "views";
        loadingTime: number;
        changed: boolean;
    }>): void;
    upsert(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<View, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "viewId";
        name: "views";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<EntityId, View> | readonly View[];
        type: string;
    }): void;
    changeStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<View, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "viewId";
        name: "views";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<View, "viewId">["status"]>): void;
    setLoadingTime(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<View, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "viewId";
        name: "views";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<number>): void;
    setChanged(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<View, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "viewId";
        name: "views";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<boolean>): void;
    changeWriteStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<View, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "viewId";
        name: "views";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<View, "viewId">["writeStatus"]>): void;
}, "views", "views", import("@reduxjs/toolkit").SliceSelectors<import("@reduxjs/toolkit").EntityState<View, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "viewId";
    name: "views";
    loadingTime: number;
    changed: boolean;
}>>, initViews: () => {
    id: "viewId";
    saved: "ready" | import("react-query").QueryStatus;
    status: import("react-query").QueryStatus;
    timeLoading: number;
}, select: (state: {
    [x: string]: import("@/types/global").InitState<View, "viewId">;
}) => import("@/types/global").InitState<View, "viewId">;
export declare function useFocusedTab(id: EntityId): {
    icon?: {
        type: "solid" | "normal" | "brad";
        value: string;
    };
    news?: View["tabs"][string]["icon"];
    label?: string;
} | null;
export {};
