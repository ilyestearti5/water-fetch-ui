export interface ToastType {
    id?: string;
    message: string | number;
    type?: "info" | "warning" | "error" | "success";
    time?: number;
}
export declare const toastHooks: {
    getFull(): import("@/types/global").InitState<any, "id">;
    getIds(): import("@reduxjs/toolkit").EntityId[];
    getId(): "id";
    remove(ids: import("@reduxjs/toolkit").EntityId[]): void;
    add(data: ToastType[]): void;
    upsert(data: ToastType[]): void;
    getOne(id: import("@reduxjs/toolkit").EntityId): {
        id?: string;
        message: string | number;
        type?: "info" | "warning" | "error" | "success";
        time?: number;
    } | undefined;
    setOne(id: import("@reduxjs/toolkit").EntityId, changes: Partial<ToastType>): void;
    setWriteStatus(status?: import("@/types/global").InitState<ToastType, "id">["writeStatus"]): void;
    useOne(id: import("@reduxjs/toolkit").EntityId): {
        get: {
            id?: string;
            message: string | number;
            type?: "info" | "warning" | "error" | "success";
            time?: number;
        } | undefined;
        set: import("react").Dispatch<import("react").SetStateAction<{
            id?: string;
            message: string | number;
            type?: "info" | "warning" | "error" | "success";
            time?: number;
        } | undefined>>;
    };
    getOneFeild<F extends keyof ToastType>(recordId: import("@reduxjs/toolkit").EntityId, feild: F): ({
        id?: string;
        message: string | number;
        type?: "info" | "warning" | "error" | "success";
        time?: number;
    }[F] & {}) | undefined;
    setOneFeild<F extends keyof ToastType>(id: import("@reduxjs/toolkit").EntityId, feild: F, value: ToastType[F]): void;
    useOneFeild<F extends keyof ToastType>(recordeId: import("@reduxjs/toolkit").EntityId, feild: F): {
        get: ({
            id?: string;
            message: string | number;
            type?: "info" | "warning" | "error" | "success";
            time?: number;
        }[F] & {}) | undefined;
        set: import("react").Dispatch<import("react").SetStateAction<({
            id?: string;
            message: string | number;
            type?: "info" | "warning" | "error" | "success";
            time?: number;
        }[F] & {}) | undefined>>;
    };
    getOneFeilds<F extends keyof ToastType>(id: import("@reduxjs/toolkit").EntityId, feilds: F[]): (F extends infer T extends keyof ToastType ? { [key in T]: ToastType[F]; } : never) | undefined;
    getAll(): ToastType[];
    setAll(data: Record<import("@reduxjs/toolkit").EntityId, ToastType> | readonly ToastType[]): void;
    useAll(): {
        get: ToastType[];
        set: import("react").Dispatch<import("react").SetStateAction<ToastType[]>>;
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
    getEntity(): Record<import("@reduxjs/toolkit").EntityId, ToastType>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
}, initToasts: () => {
    id: "id";
    saved: "ready" | import("react-query").QueryStatus;
    status: import("react-query").QueryStatus;
    timeLoading: number;
}, selectToasts: (state: {
    [x: string]: import("@/types/global").InitState<ToastType, "id">;
}) => import("@/types/global").InitState<ToastType, "id">, taostsSlice: import("@reduxjs/toolkit").Slice<import("@reduxjs/toolkit").EntityState<ToastType, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "id";
    name: "toasts";
    loadingTime: number;
    changed: boolean;
}, {
    set(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<ToastType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "toasts";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, ToastType> | readonly ToastType[];
        type: string;
    }): void;
    add(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<ToastType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "toasts";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, ToastType> | readonly ToastType[];
        type: string;
    }): void;
    remove(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<ToastType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "toasts";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<readonly import("@reduxjs/toolkit").EntityId[]>): void;
    update(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<ToastType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "toasts";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: readonly import("@reduxjs/toolkit").Update<ToastType, import("@reduxjs/toolkit").EntityId>[];
        type: string;
    }): void;
    reset(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<ToastType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "toasts";
        loadingTime: number;
        changed: boolean;
    }>): void;
    upsert(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<ToastType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "toasts";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, ToastType> | readonly ToastType[];
        type: string;
    }): void;
    changeStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<ToastType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "toasts";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<ToastType, "id">["status"]>): void;
    setLoadingTime(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<ToastType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "toasts";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<number>): void;
    setChanged(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<ToastType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "toasts";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<boolean>): void;
    changeWriteStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<ToastType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "toasts";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<ToastType, "id">["writeStatus"]>): void;
}, "toasts", "toasts", import("@reduxjs/toolkit").SliceSelectors<import("@reduxjs/toolkit").EntityState<ToastType, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "id";
    name: "toasts";
    loadingTime: number;
    changed: boolean;
}>>, toastsEntity: import("@reduxjs/toolkit").EntityAdapter<ToastType, import("@reduxjs/toolkit").EntityId>;
export declare function showToast(message: ToastType["message"], type: ToastType["type"], id?: string, time?: number): string;
export declare enum ToastTime {
    short = 5,
    long = 5
}
