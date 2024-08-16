export interface Log {
    logId?: string;
    title: string;
    createdAt?: string;
    showDesc?: boolean;
    desc?: string;
    type?: "INFO" | "SUCC" | "ERR" | "WARN";
    category?: string;
}
export declare const logEntity: import("@reduxjs/toolkit").EntityAdapter<Log, import("@reduxjs/toolkit").EntityId>, logSlice: import("@reduxjs/toolkit").Slice<import("@reduxjs/toolkit").EntityState<Log, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "logId";
    name: "logs";
    loadingTime: number;
    changed: boolean;
}, {
    set(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Log, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "logId";
        name: "logs";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Log> | readonly Log[];
        type: string;
    }): void;
    add(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Log, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "logId";
        name: "logs";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Log> | readonly Log[];
        type: string;
    }): void;
    remove(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Log, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "logId";
        name: "logs";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<readonly import("@reduxjs/toolkit").EntityId[]>): void;
    update(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Log, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "logId";
        name: "logs";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: readonly import("@reduxjs/toolkit").Update<Log, import("@reduxjs/toolkit").EntityId>[];
        type: string;
    }): void;
    reset(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Log, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "logId";
        name: "logs";
        loadingTime: number;
        changed: boolean;
    }>): void;
    upsert(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Log, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "logId";
        name: "logs";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Log> | readonly Log[];
        type: string;
    }): void;
    changeStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Log, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "logId";
        name: "logs";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<Log, "logId">["status"]>): void;
    setLoadingTime(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Log, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "logId";
        name: "logs";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<number>): void;
    setChanged(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Log, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "logId";
        name: "logs";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<boolean>): void;
    changeWriteStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Log, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "logId";
        name: "logs";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<Log, "logId">["writeStatus"]>): void;
}, "logs", "logs", import("@reduxjs/toolkit").SliceSelectors<import("@reduxjs/toolkit").EntityState<Log, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "logId";
    name: "logs";
    loadingTime: number;
    changed: boolean;
}>>, initLogs: () => {
    id: "logId";
    saved: "ready" | import("react-query").QueryStatus;
    status: import("react-query").QueryStatus;
    timeLoading: number;
}, logHooks: {
    getFull(): import("@/types/global").InitState<any, "logId">;
    getIds(): import("@reduxjs/toolkit").EntityId[];
    getId(): "logId";
    remove(ids: import("@reduxjs/toolkit").EntityId[]): void;
    add(data: Log[]): void;
    upsert(data: Log[]): void;
    getOne(id: import("@reduxjs/toolkit").EntityId): {
        logId?: string;
        title: string;
        createdAt?: string;
        showDesc?: boolean;
        desc?: string;
        type?: "INFO" | "SUCC" | "ERR" | "WARN";
        category?: string;
    } | undefined;
    setOne(id: import("@reduxjs/toolkit").EntityId, changes: Partial<Log>): void;
    setWriteStatus(status?: import("@/types/global").InitState<Log, "logId">["writeStatus"]): void;
    useOne(id: import("@reduxjs/toolkit").EntityId): {
        get: {
            logId?: string;
            title: string;
            createdAt?: string;
            showDesc?: boolean;
            desc?: string;
            type?: "INFO" | "SUCC" | "ERR" | "WARN";
            category?: string;
        } | undefined;
        set: import("react").Dispatch<import("react").SetStateAction<{
            logId?: string;
            title: string;
            createdAt?: string;
            showDesc?: boolean;
            desc?: string;
            type?: "INFO" | "SUCC" | "ERR" | "WARN";
            category?: string;
        } | undefined>>;
    };
    getOneFeild<F extends keyof Log>(recordId: import("@reduxjs/toolkit").EntityId, field: F): ({
        logId?: string;
        title: string;
        createdAt?: string;
        showDesc?: boolean;
        desc?: string;
        type?: "INFO" | "SUCC" | "ERR" | "WARN";
        category?: string;
    }[F] & {}) | undefined;
    setOneFeild<F extends keyof Log>(id: import("@reduxjs/toolkit").EntityId, field: F, value: Log[F]): void;
    useOneFeild<F extends keyof Log>(recordeId: import("@reduxjs/toolkit").EntityId, field: F): {
        get: ({
            logId?: string;
            title: string;
            createdAt?: string;
            showDesc?: boolean;
            desc?: string;
            type?: "INFO" | "SUCC" | "ERR" | "WARN";
            category?: string;
        }[F] & {}) | undefined;
        set: import("react").Dispatch<import("react").SetStateAction<({
            logId?: string;
            title: string;
            createdAt?: string;
            showDesc?: boolean;
            desc?: string;
            type?: "INFO" | "SUCC" | "ERR" | "WARN";
            category?: string;
        }[F] & {}) | undefined>>;
    };
    getOneFeilds<F extends keyof Log>(id: import("@reduxjs/toolkit").EntityId, fields: F[]): (F extends infer T extends keyof Log ? { [key in T]: Log[F]; } : never) | undefined;
    getAll(): Log[];
    setAll(data: Record<import("@reduxjs/toolkit").EntityId, Log> | readonly Log[]): void;
    useAll(): {
        get: Log[];
        set: import("react").Dispatch<import("react").SetStateAction<Log[]>>;
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
    getEntity(): Record<import("@reduxjs/toolkit").EntityId, Log>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};
