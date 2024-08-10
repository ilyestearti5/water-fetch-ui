declare const data: {};
import { CommandIds } from "./command.model";
export type NotificationIds = keyof typeof data;
export interface NotificationType {
    id: string;
    title: string;
    type?: "info" | "warning" | "error" | "success";
    desc?: string;
    removable?: boolean;
    status?: "loading" | "idle";
    showDesc?: boolean;
    buttons?: {
        label: string;
        command: CommandIds | string | {
            action: string;
            arg: any;
        };
    }[];
}
export declare const notifayHooks: {
    getFull(): import("@/types/global").InitState<any, "id">;
    getIds(): import("@reduxjs/toolkit").EntityId[];
    getId(): "id";
    remove(ids: import("@reduxjs/toolkit").EntityId[]): void;
    add(data: NotificationType[]): void;
    upsert(data: NotificationType[]): void;
    getOne(id: import("@reduxjs/toolkit").EntityId): {
        id: string;
        title: string;
        type?: "info" | "warning" | "error" | "success";
        desc?: string;
        removable?: boolean;
        status?: "loading" | "idle";
        showDesc?: boolean;
        buttons?: {
            label: string;
            command: CommandIds | string | {
                action: string;
                arg: any;
            };
        }[];
    } | undefined;
    setOne(id: import("@reduxjs/toolkit").EntityId, changes: Partial<NotificationType>): void;
    setWriteStatus(status?: import("@/types/global").InitState<NotificationType, "id">["writeStatus"]): void;
    useOne(id: import("@reduxjs/toolkit").EntityId): {
        get: {
            id: string;
            title: string;
            type?: "info" | "warning" | "error" | "success";
            desc?: string;
            removable?: boolean;
            status?: "loading" | "idle";
            showDesc?: boolean;
            buttons?: {
                label: string;
                command: CommandIds | string | {
                    action: string;
                    arg: any;
                };
            }[];
        } | undefined;
        set: import("react").Dispatch<import("react").SetStateAction<{
            id: string;
            title: string;
            type?: "info" | "warning" | "error" | "success";
            desc?: string;
            removable?: boolean;
            status?: "loading" | "idle";
            showDesc?: boolean;
            buttons?: {
                label: string;
                command: CommandIds | string | {
                    action: string;
                    arg: any;
                };
            }[];
        } | undefined>>;
    };
    getOneFeild<F extends keyof NotificationType>(recordId: import("@reduxjs/toolkit").EntityId, feild: F): ({
        id: string;
        title: string;
        type?: "info" | "warning" | "error" | "success";
        desc?: string;
        removable?: boolean;
        status?: "loading" | "idle";
        showDesc?: boolean;
        buttons?: {
            label: string;
            command: CommandIds | string | {
                action: string;
                arg: any;
            };
        }[];
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof NotificationType>(id: import("@reduxjs/toolkit").EntityId, feild: F, value: NotificationType[F]): void;
    useOneFeild<F extends keyof NotificationType>(recordeId: import("@reduxjs/toolkit").EntityId, feild: F): {
        get: ({
            id: string;
            title: string;
            type?: "info" | "warning" | "error" | "success";
            desc?: string;
            removable?: boolean;
            status?: "loading" | "idle";
            showDesc?: boolean;
            buttons?: {
                label: string;
                command: CommandIds | string | {
                    action: string;
                    arg: any;
                };
            }[];
        }[F] & ({} | null)) | undefined;
        set: import("react").Dispatch<import("react").SetStateAction<({
            id: string;
            title: string;
            type?: "info" | "warning" | "error" | "success";
            desc?: string;
            removable?: boolean;
            status?: "loading" | "idle";
            showDesc?: boolean;
            buttons?: {
                label: string;
                command: CommandIds | string | {
                    action: string;
                    arg: any;
                };
            }[];
        }[F] & ({} | null)) | undefined>>;
    };
    getOneFeilds<F extends keyof NotificationType>(id: import("@reduxjs/toolkit").EntityId, feilds: F[]): (F extends infer T extends keyof NotificationType ? { [key in T]: NotificationType[F]; } : never) | undefined;
    getAll(): NotificationType[];
    setAll(data: Record<import("@reduxjs/toolkit").EntityId, NotificationType> | readonly NotificationType[]): void;
    useAll(): {
        get: NotificationType[];
        set: import("react").Dispatch<import("react").SetStateAction<NotificationType[]>>;
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
    getEntity(): Record<import("@reduxjs/toolkit").EntityId, NotificationType>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
}, initNotifays: () => {
    id: "id";
    saved: "ready" | import("react-query").QueryStatus;
    status: import("react-query").QueryStatus;
    timeLoading: number;
}, selectNotifays: (state: {
    [x: string]: import("@/types/global").InitState<NotificationType, "id">;
}) => import("@/types/global").InitState<NotificationType, "id">, notifaySlice: import("@reduxjs/toolkit").Slice<import("@reduxjs/toolkit").EntityState<NotificationType, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "id";
    name: "notifications";
    loadingTime: number;
    changed: boolean;
}, {
    set(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<NotificationType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "notifications";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, NotificationType> | readonly NotificationType[];
        type: string;
    }): void;
    add(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<NotificationType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "notifications";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, NotificationType> | readonly NotificationType[];
        type: string;
    }): void;
    remove(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<NotificationType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "notifications";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<readonly import("@reduxjs/toolkit").EntityId[]>): void;
    update(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<NotificationType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "notifications";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: readonly import("@reduxjs/toolkit").Update<NotificationType, import("@reduxjs/toolkit").EntityId>[];
        type: string;
    }): void;
    reset(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<NotificationType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "notifications";
        loadingTime: number;
        changed: boolean;
    }>): void;
    upsert(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<NotificationType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "notifications";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, NotificationType> | readonly NotificationType[];
        type: string;
    }): void;
    changeStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<NotificationType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "notifications";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<NotificationType, "id">["status"]>): void;
    setLoadingTime(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<NotificationType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "notifications";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<number>): void;
    setChanged(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<NotificationType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "notifications";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<boolean>): void;
    changeWriteStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<NotificationType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "notifications";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: import("@reduxjs/toolkit").PayloadAction<import("@/types/global").InitState<NotificationType, "id">["writeStatus"]>): void;
}, "notifications", "notifications", import("@reduxjs/toolkit").SliceSelectors<import("@reduxjs/toolkit").EntityState<NotificationType, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "id";
    name: "notifications";
    loadingTime: number;
    changed: boolean;
}>>, notifayEntity: import("@reduxjs/toolkit").EntityAdapter<NotificationType, import("@reduxjs/toolkit").EntityId>;
export declare function openNotifays(): void;
export declare function closeNotifays(): void;
export declare function openDuringNotifay(notifay: Partial<NotificationType>, options?: Partial<{
    time: number;
    open: boolean;
    close: boolean;
}>): Promise<void>;
export declare function openForActionDone<T>(notifay: NotificationType, action: () => Promise<T> | T): Promise<T>;
export {};
