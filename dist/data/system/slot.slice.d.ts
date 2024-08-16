import { PayloadAction } from "@reduxjs/toolkit";
import config from "@/apis/slot";
import React from "react";
export type SlotIds = keyof typeof config.data;
export interface SlotType {
    slotId?: string;
    focused?: number | null;
    submited?: number | null;
    selected?: {
        [x: number]: boolean;
    };
    skiped?: {
        [x: number]: boolean;
    };
    length?: number;
    direction?: "forward" | "backward" | null;
    redirect?: boolean;
}
export declare const slotHooks: {
    getFull(): import("@/types/global").InitState<any, "slotId">;
    getIds(): import("@reduxjs/toolkit").EntityId[];
    getId(): "slotId";
    remove(ids: import("@reduxjs/toolkit").EntityId[]): void;
    add(data: SlotType[]): void;
    upsert(data: SlotType[]): void;
    getOne(id: import("@reduxjs/toolkit").EntityId): {
        slotId?: string;
        focused?: number | null;
        submited?: number | null;
        selected?: {
            [x: number]: boolean;
        };
        skiped?: {
            [x: number]: boolean;
        };
        length?: number;
        direction?: "forward" | "backward" | null;
        redirect?: boolean;
    } | undefined;
    setOne(id: import("@reduxjs/toolkit").EntityId, changes: Partial<SlotType>): void;
    setWriteStatus(status?: import("@/types/global").InitState<SlotType, "slotId">["writeStatus"]): void;
    useOne(id: import("@reduxjs/toolkit").EntityId): {
        get: {
            slotId?: string;
            focused?: number | null;
            submited?: number | null;
            selected?: {
                [x: number]: boolean;
            };
            skiped?: {
                [x: number]: boolean;
            };
            length?: number;
            direction?: "forward" | "backward" | null;
            redirect?: boolean;
        } | undefined;
        set: React.Dispatch<React.SetStateAction<{
            slotId?: string;
            focused?: number | null;
            submited?: number | null;
            selected?: {
                [x: number]: boolean;
            };
            skiped?: {
                [x: number]: boolean;
            };
            length?: number;
            direction?: "forward" | "backward" | null;
            redirect?: boolean;
        } | undefined>>;
    };
    getOneFeild<F extends keyof SlotType>(recordId: import("@reduxjs/toolkit").EntityId, field: F): ({
        slotId?: string;
        focused?: number | null;
        submited?: number | null;
        selected?: {
            [x: number]: boolean;
        };
        skiped?: {
            [x: number]: boolean;
        };
        length?: number;
        direction?: "forward" | "backward" | null;
        redirect?: boolean;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof SlotType>(id: import("@reduxjs/toolkit").EntityId, field: F, value: SlotType[F]): void;
    useOneFeild<F extends keyof SlotType>(recordeId: import("@reduxjs/toolkit").EntityId, field: F): {
        get: ({
            slotId?: string;
            focused?: number | null;
            submited?: number | null;
            selected?: {
                [x: number]: boolean;
            };
            skiped?: {
                [x: number]: boolean;
            };
            length?: number;
            direction?: "forward" | "backward" | null;
            redirect?: boolean;
        }[F] & ({} | null)) | undefined;
        set: React.Dispatch<React.SetStateAction<({
            slotId?: string;
            focused?: number | null;
            submited?: number | null;
            selected?: {
                [x: number]: boolean;
            };
            skiped?: {
                [x: number]: boolean;
            };
            length?: number;
            direction?: "forward" | "backward" | null;
            redirect?: boolean;
        }[F] & ({} | null)) | undefined>>;
    };
    getOneFeilds<F extends keyof SlotType>(id: import("@reduxjs/toolkit").EntityId, fields: F[]): (F extends infer T extends keyof SlotType ? { [key in T]: SlotType[F]; } : never) | undefined;
    getAll(): SlotType[];
    setAll(data: Record<import("@reduxjs/toolkit").EntityId, SlotType> | readonly SlotType[]): void;
    useAll(): {
        get: SlotType[];
        set: React.Dispatch<React.SetStateAction<SlotType[]>>;
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
    getEntity(): Record<import("@reduxjs/toolkit").EntityId, SlotType>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
}, slotSlice: import("@reduxjs/toolkit").Slice<import("@reduxjs/toolkit").EntityState<SlotType, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "slotId";
    name: "slot";
    loadingTime: number;
    changed: boolean;
}, {
    set(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<SlotType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "slotId";
        name: "slot";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, SlotType> | readonly SlotType[];
        type: string;
    }): void;
    add(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<SlotType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "slotId";
        name: "slot";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, SlotType> | readonly SlotType[];
        type: string;
    }): void;
    remove(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<SlotType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "slotId";
        name: "slot";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<readonly import("@reduxjs/toolkit").EntityId[]>): void;
    update(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<SlotType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "slotId";
        name: "slot";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: readonly import("@reduxjs/toolkit").Update<SlotType, import("@reduxjs/toolkit").EntityId>[];
        type: string;
    }): void;
    reset(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<SlotType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "slotId";
        name: "slot";
        loadingTime: number;
        changed: boolean;
    }>): void;
    upsert(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<SlotType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "slotId";
        name: "slot";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, SlotType> | readonly SlotType[];
        type: string;
    }): void;
    changeStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<SlotType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "slotId";
        name: "slot";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<import("@/types/global").InitState<SlotType, "slotId">["status"]>): void;
    setLoadingTime(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<SlotType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "slotId";
        name: "slot";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<number>): void;
    setChanged(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<SlotType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "slotId";
        name: "slot";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<boolean>): void;
    changeWriteStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<SlotType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "slotId";
        name: "slot";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<import("@/types/global").InitState<SlotType, "slotId">["writeStatus"]>): void;
}, "slot", "slot", import("@reduxjs/toolkit").SliceSelectors<import("@reduxjs/toolkit").EntityState<SlotType, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "slotId";
    name: "slot";
    loadingTime: number;
    changed: boolean;
}>>, slotEntity: import("@reduxjs/toolkit").EntityAdapter<SlotType, import("@reduxjs/toolkit").EntityId>, initSlot: () => {
    id: "slotId";
    saved: "ready" | import("react-query").QueryStatus;
    status: import("react-query").QueryStatus;
    timeLoading: number;
};
export declare function next(slotId: SlotType["slotId"]): void;
export declare function back(slotId: SlotType["slotId"]): {
    type: string;
    payload: string | undefined;
};
export declare function escape(slotId: SlotType["slotId"]): {
    type: string;
    payload: string | undefined;
};
export declare function submit(slotId: SlotType["slotId"]): void;
export declare function submitNext(slotId: SlotType["slotId"]): void;
export declare function submitBack(slotId: SlotType["slotId"]): void;
export declare function initNewList(slotId: string, data: any[]): void;
export declare function getSlotData<T>(data: T[], slotId: string, get?: "focused" | "submited"): NonNullable<T> | null;
