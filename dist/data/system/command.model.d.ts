import { PayloadAction } from "@reduxjs/toolkit";
import { TableDefConfig } from "@/types/global";
import { FullStateManagment } from "@/types/global";
export type CommandIds = string;
export interface Command {
    commandId: string;
    label?: string;
    commands?: (Command["commandId"] | PayloadAction<any> | number)[];
    private?: boolean;
    blocked?: boolean;
}
export declare const name = "commands";
export declare function execList(cmdId: CommandIds, state?: FullStateManagment): (PayloadAction<any> | number)[];
export declare function isExist(cmd: string, state?: FullStateManagment): boolean;
export declare function execCommand(cmd: CommandIds, state?: FullStateManagment): Promise<void>;
export declare const initCommandsConfig: TableDefConfig<Command, "commandId", "commands">;
export declare const commandsHooks: {
    getFull(): import("@/types/global").InitState<any, "commandId">;
    getIds(): import("@reduxjs/toolkit").EntityId[];
    getId(): "commandId";
    remove(ids: import("@reduxjs/toolkit").EntityId[]): void;
    add(data: Command[]): void;
    upsert(data: Command[]): void;
    getOne(id: import("@reduxjs/toolkit").EntityId): {
        commandId: string;
        label?: string;
        commands?: (Command["commandId"] | PayloadAction<any> | number)[];
        private?: boolean;
        blocked?: boolean;
    } | undefined;
    setOne(id: import("@reduxjs/toolkit").EntityId, changes: Partial<Command>): void;
    setWriteStatus(status?: import("@/types/global").InitState<Command, "commandId">["writeStatus"]): void;
    useOne(id: import("@reduxjs/toolkit").EntityId): {
        get: {
            commandId: string;
            label?: string;
            commands?: (Command["commandId"] | PayloadAction<any> | number)[];
            private?: boolean;
            blocked?: boolean;
        } | undefined;
        set: import("react").Dispatch<import("react").SetStateAction<{
            commandId: string;
            label?: string;
            commands?: (Command["commandId"] | PayloadAction<any> | number)[];
            private?: boolean;
            blocked?: boolean;
        } | undefined>>;
    };
    getOneFeild<F extends keyof Command>(recordId: import("@reduxjs/toolkit").EntityId, feild: F): ({
        commandId: string;
        label?: string;
        commands?: (Command["commandId"] | PayloadAction<any> | number)[];
        private?: boolean;
        blocked?: boolean;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Command>(id: import("@reduxjs/toolkit").EntityId, feild: F, value: Command[F]): void;
    useOneFeild<F extends keyof Command>(recordeId: import("@reduxjs/toolkit").EntityId, feild: F): {
        get: ({
            commandId: string;
            label?: string;
            commands?: (Command["commandId"] | PayloadAction<any> | number)[];
            private?: boolean;
            blocked?: boolean;
        }[F] & ({} | null)) | undefined;
        set: import("react").Dispatch<import("react").SetStateAction<({
            commandId: string;
            label?: string;
            commands?: (Command["commandId"] | PayloadAction<any> | number)[];
            private?: boolean;
            blocked?: boolean;
        }[F] & ({} | null)) | undefined>>;
    };
    getOneFeilds<F extends keyof Command>(id: import("@reduxjs/toolkit").EntityId, feilds: F[]): (F extends infer T extends keyof Command ? { [key in T]: Command[F]; } : never) | undefined;
    getAll(): Command[];
    setAll(data: Record<import("@reduxjs/toolkit").EntityId, Command> | readonly Command[]): void;
    useAll(): {
        get: Command[];
        set: import("react").Dispatch<import("react").SetStateAction<Command[]>>;
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
    getEntity(): Record<import("@reduxjs/toolkit").EntityId, Command>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
}, commandsSlice: import("@reduxjs/toolkit").Slice<import("@reduxjs/toolkit").EntityState<Command, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "commandId";
    name: "commands";
    loadingTime: number;
    changed: boolean;
}, {
    set(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Command, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "commandId";
        name: "commands";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Command> | readonly Command[];
        type: string;
    }): void;
    add(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Command, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "commandId";
        name: "commands";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Command> | readonly Command[];
        type: string;
    }): void;
    remove(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Command, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "commandId";
        name: "commands";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<readonly import("@reduxjs/toolkit").EntityId[]>): void;
    update(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Command, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "commandId";
        name: "commands";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: readonly import("@reduxjs/toolkit").Update<Command, import("@reduxjs/toolkit").EntityId>[];
        type: string;
    }): void;
    reset(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Command, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "commandId";
        name: "commands";
        loadingTime: number;
        changed: boolean;
    }>): void;
    upsert(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Command, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "commandId";
        name: "commands";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: {
        payload: Record<import("@reduxjs/toolkit").EntityId, Command> | readonly Command[];
        type: string;
    }): void;
    changeStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Command, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "commandId";
        name: "commands";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<import("@/types/global").InitState<Command, "commandId">["status"]>): void;
    setLoadingTime(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Command, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "commandId";
        name: "commands";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<number>): void;
    setChanged(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Command, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "commandId";
        name: "commands";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<boolean>): void;
    changeWriteStatus(state: import("immer").WritableDraft<import("@reduxjs/toolkit").EntityState<Command, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "commandId";
        name: "commands";
        loadingTime: number;
        changed: boolean;
    }>, { payload }: PayloadAction<import("@/types/global").InitState<Command, "commandId">["writeStatus"]>): void;
}, "commands", "commands", import("@reduxjs/toolkit").SliceSelectors<import("@reduxjs/toolkit").EntityState<Command, import("@reduxjs/toolkit").EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: "commandId";
    name: "commands";
    loadingTime: number;
    changed: boolean;
}>>, commandSelect: import("@reduxjs/toolkit").EntitySelectors<Command, import("@reduxjs/toolkit").EntityState<Command, import("@reduxjs/toolkit").EntityId>, import("@reduxjs/toolkit").EntityId>, initCommands: () => {
    id: "commandId";
    saved: "ready" | import("react-query").QueryStatus;
    status: import("react-query").QueryStatus;
    timeLoading: number;
};
