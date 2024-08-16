import { PayloadAction } from "@reduxjs/toolkit";
import { TableDefConfig } from "@/types/global";
import { FullStateManagment } from "@/types/global";
declare const data: {
    "camera-take": {
        commands: {
            payload: string[];
            type: string;
        }[];
    };
    "colors-list-back": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "colors-list-next": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "colors-list-submit": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "commands.back": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "commands.close": {
        commands: {
            payload: {
                direction: string;
                force: boolean;
                value: null;
            };
            type: string;
        }[];
        label: string;
    };
    "commands.next": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "commands.open": {
        commands: {
            payload: {
                direction: string;
                force: boolean;
                value: string;
            };
            type: string;
        }[];
        label: string;
    };
    "commands.submit": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "configurations.back": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "configurations.next": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "configurations.settings.layout.submit": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "configurations.settings.layouts.next": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "configurations.settings.layouts.previous": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "configurations.submit": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "defaultCommand.ignore": {
        commands: never[];
        private: boolean;
    };
    "dialog.clickOnButton": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "dialog.escape": {
        commands: {
            payload: string[];
            type: string;
        }[];
        label: string;
    };
    "dialog.goToNextButton": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "dialog.goToPreviousButton": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "feedback/add": {
        commands: {
            payload: string[];
            type: string;
        }[];
        label: string;
    };
    "header.toggle": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "headerNotifays.toggleExpand": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "input.addLineBellow": {
        commands: {
            payload: string[];
            type: string;
        }[];
        label: string;
    };
    "input.completeWord": {
        commands: {
            payload: string[];
            type: string;
        }[];
        label: string;
    };
    "input.selectLine": {
        commands: {
            payload: string[];
            type: string;
        }[];
        label: string;
    };
    "input.tab": {
        commands: {
            payload: string[];
            type: string;
        }[];
        label: string;
    };
    "keyboard/update": {
        commands: {
            payload: string[];
            type: string;
        }[];
    };
    "keyboardShortcuts.focusNextKeyPanding": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "keyboardShortcuts.focusPreviousKeyPanding": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "keyboardShortcuts.submitCurrentKeyPanding": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "menu.back": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "menu.escape": {
        commands: {
            payload: {
                direction: string;
                force: boolean;
                value: null;
            };
            type: string;
        }[];
    };
    "menu.next": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "menu.submit": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "notifays.toggleExpandNotifay": {
        commands: {
            payload: (string | null)[];
            type: string;
        }[];
        label: string;
    };
    "notification.close": {
        commands: {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        }[];
        label: string;
    };
    "notification.closeAndExpandLess": {
        commands: (string | {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        })[];
        label: string;
    };
    "notification.deleteFocus": {
        commands: {
            payload: string[];
            type: string;
        }[];
        label: string;
    };
    "notification.focusNext": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "notification.focusPrevious": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "notification.open": {
        commands: {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        }[];
        label: string;
    };
    "notification.openAndExpandMoreAndFocus": {
        commands: (string | {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        } | {
            payload: string[];
            type: string;
        })[];
        label: string;
    };
    "notification.submitCurrent": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "notification.toggle": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
    "search.history.clear": {
        commands: {
            payload: string[];
            type: string;
        }[];
        label: string;
    };
    "settings.colors.show": {
        commands: {
            payload: {
                changes: {
                    focused: string;
                };
                id: string;
            }[];
            type: string;
        }[];
    };
    "settings.focusNext": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "settings.focusPrevious": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "settings.icons.back": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "settings.icons.next": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "settings.icons.show": {
        commands: {
            payload: {
                changes: {
                    focused: string;
                };
                id: string;
            }[];
            type: string;
        }[];
    };
    "settings.icons.submit": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "settings.keyboardShortcuts.show": {
        commands: {
            payload: {
                changes: {
                    focused: string;
                };
                id: string;
            }[];
            type: string;
        }[];
    };
    "settings.tree.expandLess": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "settings.tree.expandMore": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "settings.tree.toggleExpand": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "settings.user.show": {
        commands: {
            payload: {
                changes: {
                    focused: string;
                };
                id: string;
            }[];
            type: string;
        }[];
    };
    "show.submit.setting": {
        commands: {
            payload: (string | null)[];
            type: string;
        }[];
    };
    "string.cancel": {
        commands: {
            payload: string[];
            type: string;
        }[];
        private: boolean;
    };
    "string.change": {
        commands: {
            payload: string[];
            type: string;
        }[];
        private: boolean;
    };
    "tools.tip.click": {
        commands: {
            payload: string[];
            type: string;
        }[];
    };
    "view.leftSide.close": {
        commands: {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        }[];
        label: string;
    };
    "view.leftSide.open": {
        commands: {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        }[];
    };
    "view.leftSide.toggle": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "view.rightSide.close": {
        commands: {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        }[];
    };
    "view.rightSide.open": {
        commands: {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        }[];
    };
    "view.rightSide.toggle": {
        commands: {
            payload: string;
            type: string;
        }[];
    };
    "view.settings.hide": {
        commands: {
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        }[];
        label: string;
    };
    "view.settings.show": {
        commands: ({
            payload: {
                changes: {
                    value: boolean;
                };
                id: string;
            }[];
            type: string;
        } | {
            payload: {
                changes: {
                    value: string;
                };
                id: string;
            }[];
            type: string;
        } | {
            payload: string[];
            type: string;
        })[];
        label: string;
    };
    "view.settings.update.hide": {
        commands: ({
            payload: {
                direction: string;
                force: boolean;
                value: null;
            };
            type: string;
        } | {
            payload: string[];
            type: string;
        })[];
        label: string;
    };
    "window.toggleMode": {
        commands: {
            payload: string;
            type: string;
        }[];
        label: string;
    };
};
export type CommandIds = keyof typeof data;
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
    getOneFeild<F extends keyof Command>(recordId: import("@reduxjs/toolkit").EntityId, field: F): ({
        commandId: string;
        label?: string;
        commands?: (Command["commandId"] | PayloadAction<any> | number)[];
        private?: boolean;
        blocked?: boolean;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Command>(id: import("@reduxjs/toolkit").EntityId, field: F, value: Command[F]): void;
    useOneFeild<F extends keyof Command>(recordeId: import("@reduxjs/toolkit").EntityId, field: F): {
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
    getOneFeilds<F extends keyof Command>(id: import("@reduxjs/toolkit").EntityId, fields: F[]): (F extends infer T extends keyof Command ? { [key in T]: Command[F]; } : never) | undefined;
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
export {};
