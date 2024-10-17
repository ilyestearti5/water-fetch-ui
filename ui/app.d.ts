import { default as default_2 } from 'react';
import { EnhancedStore } from '@reduxjs/toolkit';
import { EntityAdapter } from '@reduxjs/toolkit';
import { EntityId } from '@reduxjs/toolkit';
import { EntitySelectors } from '@reduxjs/toolkit';
import { EntityState } from '@reduxjs/toolkit';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { OpenDialogOptions } from 'electron';
import { PayloadAction } from '@reduxjs/toolkit';
import { QueryStatus } from 'react-query';
import { Root } from 'react-dom/client';
import { Slice } from '@reduxjs/toolkit';
import { SliceSelectors } from '@reduxjs/toolkit';
import { Store } from '@reduxjs/toolkit';
import { StoreEnhancer } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Tuple } from '@reduxjs/toolkit';
import { UnknownAction } from 'redux';
import { Update } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer';

declare interface Action {
    actionId: string;
    status: QueryStatus | "ready";
    args?: any;
    output?: any;
}

declare interface Action_2 {
    actionId: string;
    status: QueryStatus | "ready";
    args?: any;
    output?: any;
}

export declare interface CameraConfig<T extends keyof FullCameraResult> {
    result?: CameraResult<T>;
    error?: string;
    id?: string;
}

export declare interface CameraOptions {
    type: keyof FullCameraResult;
}

export declare type CameraResult<T extends keyof FullCameraResult> = FullCameraResult[T];

export declare type cases = "camel" | "normal" | "cabab";

declare interface Casher {
    linkId: string;
    response?: string;
    status?: "error" | "success" | "idle";
}

export declare type ClickProps<T> = ReactElement<T> & IconProps;

declare interface Cmd extends Command {
    keys: Omit<Key, "command">[];
}

declare interface Color {
    colorId: string;
    dark?: string;
    light?: string;
    default?: string;
    propositions?: string[];
}

declare interface Color_2 {
    colorId: string;
    dark?: string;
    light?: string;
    default?: string;
    propositions?: string[];
}

declare interface Command {
    commandId: string;
    label?: string;
    commands?: (Command["commandId"] | PayloadAction<any> | number)[];
    private?: boolean;
    blocked?: boolean;
}

declare interface Command_2 {
    commandId: string;
    label?: string;
    commands?: (Command_2["commandId"] | PayloadAction<any> | number)[];
    private?: boolean;
    blocked?: boolean;
}

declare type CommandIds = keyof typeof data;

export declare type CssColorKeys = "background" | "backgroundColor" | "color" | "borderColor" | "outlineColor" | "borderLeftColor" | "borderRightColor" | "borderBottomColor" | "borderTopColor" | "boxShadow" | "caretColor" | "fill" | "stroke";

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
    "enum/next": {
        commands: {
            type: string;
            payload: string;
        }[];
        label: string;
    };
    "enum/back": {
        commands: {
            type: string;
            payload: string;
        }[];
        label: string;
    };
    "enum/submit": {
        commands: {
            type: string;
            payload: string;
        }[];
        label: string;
    };
    "enum/escape": {
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
    "bottomSheet/escape": {
        commands: {
            payload: {
                direction: string;
                force: boolean;
                value: boolean;
            };
            type: string;
        }[];
        label: string;
    };
};

export declare function defineTable<T extends object, I extends keyof T, N extends string, A extends object, O extends GetOptinal<T> = any>(config: TableDefConfig<T, I, N, A>): {
    slice: Slice<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }, {
    set(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: InsertRowParams<T>): void;
    add(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: InsertRowParams<T>): void;
    remove(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: PayloadAction<readonly EntityId[]>): void;
    update(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: PayloadAction<readonly Update<T, EntityId>[]>): void;
    reset(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>): void;
    upsert(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: InsertRowParams<T>): void;
    changeStatus(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: PayloadAction<InitState<T, I>["status"]>): void;
    setLoadingTime(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: PayloadAction<number>): void;
    setChanged(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: PayloadAction<boolean>): void;
    changeWriteStatus(state: WritableDraft<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>, { payload }: PayloadAction<InitState<T, I>["writeStatus"]>): void;
    }, N, N, SliceSelectors<EntityState<T, EntityId> & {
    saved: boolean;
    status: string;
    writeStatus: string;
    id: I;
    name: N;
    loadingTime: number;
    changed: boolean;
    }>>;
    entity: EntityAdapter<T, EntityId>;
    hooks: {
        getFull(): { [name in N]: InitState<T & O, I>; }[N];
        getIds(): EntityId[];
        getId(): I;
        remove(ids: EntityId[]): void;
        add(data: T[]): void;
        upsert(data: T[]): void;
        getOne(id: EntityId): { [K in keyof T]: T[K]; } | undefined;
        setOne(id: EntityId, changes: Update<T, EntityId>["changes"]): void;
        setWriteStatus(status?: InitState<T, I>["writeStatus"]): void;
        useOne(id: EntityId): {
            get: { [K in keyof T]: T[K]; } | undefined;
            set: default_2.Dispatch<default_2.SetStateAction<{ [K in keyof T]: T[K]; } | undefined>>;
        };
        getOneFeild<F extends keyof T>(recordId: EntityId, field: F): ({ [K in keyof T]: T[K]; }[F] & ({} | null)) | undefined;
        setOneFeild<F extends keyof T>(id: EntityId, field: F, value: T[F]): void;
        useOneFeild<F extends keyof T>(recordeId: EntityId, field: F): {
            get: ({ [K in keyof T]: T[K]; }[F] & ({} | null)) | undefined;
            set: default_2.Dispatch<default_2.SetStateAction<({ [K in keyof T]: T[K]; }[F] & ({} | null)) | undefined>>;
        };
        getOneFeilds<F extends keyof T>(id: EntityId, fields: F[]): { [key in F]: T[F]; } | undefined;
        getAll(): T[];
        setAll(data: InsertRowParams<T>["payload"]): void;
        useAll(): {
            get: T[];
            set: default_2.Dispatch<default_2.SetStateAction<T[]>>;
        };
        getWriteStatus(): "ready" | QueryStatus;
        useWriteStatus(): {
            get: "idle" | "ready" | "loading" | "error" | "success";
            set: default_2.Dispatch<default_2.SetStateAction<"idle" | "ready" | "loading" | "error" | "success">>;
        };
        getStatus(): QueryStatus;
        setStatus(value: ReturnType<() => QueryStatus>): void;
        useStatus(): {
            get: "idle" | "loading" | "error" | "success";
            set: default_2.Dispatch<default_2.SetStateAction<"idle" | "loading" | "error" | "success">>;
        };
        getEntity(): Record<EntityId, T>;
        getLoadingTime(): number;
        setLoadingTime(time: number): void;
        useLoadingTime(): void;
        getChanged(): boolean;
        setChanged(value: boolean): void;
        useChanged(): void;
    };
    entitySelect: EntitySelectors<T, EntityState<T, EntityId>, EntityId>;
    initialState: EntityState<T, EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: I;
        name: N;
        loadingTime: number;
        changed: boolean;
    };
    init: () => {
        id: I;
        saved: "ready" | QueryStatus;
        status: QueryStatus;
        timeLoading: number;
    };
    select: (state: { [name in string]: InitState<T, I>; }) => InitState<T, I>;
};

export declare interface DialogProps extends Electron.MessageBoxOptions {
    force?: boolean;
}

export declare type Exact<T> = T extends undefined ? never : T;

declare interface Feild {
    fieldId: string;
    selection: TextAreaProps["selection"];
    value: string;
    controls: Record<string, {
        succ?: string;
        err?: string;
    }>;
    history?: string[];
}

export declare interface FeildGeneralProps<T, C extends object> {
    id: string;
    state: State<T>;
    config?: C;
}

declare interface FileProps extends OpenDialogOptions {
    nullable: boolean;
}

declare interface FileProps_2 extends OpenDialogOptions {
    nullable: boolean;
}

export declare interface FullCameraResult {
    scanner: string;
    take: string;
}

export declare type FullStateManagment = ReturnType<typeof store.getState>;

export declare type FunctionComponentListItem<T> = (props: ListItemProps<T>) => JSX.Element;

export declare type GetOptinal<T extends object> = Partial<{
    [key in OptinalKeys<T>]: T[key];
}>;

declare interface IconProps {
    icon?: FontAwesomeIconProps["icon"];
    iconClassName?: ReactElement["className"];
}

export declare type IncludeParam = string | number | (string | number)[];

export declare type InitState<T extends object, I extends keyof T> = EntityState<T, EntityId> & {
    status: QueryStatus;
    id: I;
    changed: boolean;
    name: string;
    loadingTime: number;
    writeStatus: QueryStatus | "ready";
};

export declare type InsertRowParams<T> = PayloadAction<readonly T[] | Record<EntityId, T>>;

declare interface Key {
    value?: string;
    keyId?: string;
    command?: Command["commandId"];
    only?: boolean;
    when?: string;
    preventDefault?: boolean;
    repeation?: boolean;
    type?: "up" | "down";
    private?: boolean;
    action?: Action["actionId"];
}

declare interface Key_2 {
    value?: string;
    keyId?: string;
    command?: Command_2["commandId"];
    only?: boolean;
    when?: string;
    preventDefault?: boolean;
    repeation?: boolean;
    type?: "up" | "down";
    private?: boolean;
    action?: Action_2["actionId"];
}

declare interface KeyState extends Record<Parameters<default_2.KeyboardEvent<HTMLElement>["getModifierState"]>[0], boolean> {
    Key?: string;
}

export declare type KeysType = ("control" | "shift" | "alt")[];

declare interface Lang extends Record<string, string> {
    word: string;
}

declare interface Lang_2 extends Record<string, string> {
    word: string;
}

export declare interface ListItemProps<T> extends ReactElement {
    handelSubmit: (fn?: Function) => (e?: any) => void;
    handelFocus: (fn?: Function) => (e?: any) => void;
    handelSelect: (fn?: Function) => (e?: any) => void;
    item: T;
    index: number;
    status: {
        isFocused: boolean;
        isSelected: boolean;
        isSubmited: boolean;
        isSkiped: boolean;
    };
}

declare interface Log {
    logId?: string;
    title: string;
    createdAt?: string;
    showDesc?: boolean;
    desc?: string;
    type?: "INFO" | "SUCC" | "ERR" | "WARN";
    category?: string;
}

declare type MebePromise<T> = T | Promise<T>;

export declare type Nothing = false | 0 | null | "" | undefined;

declare interface NotificationType {
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

declare interface ObjectTemp {
    data: any;
    settings: {
        saved: boolean;
        status: QueryStatus;
        reloaded: boolean;
        watch: boolean;
        ignoreAccess: {
            dir: string;
            pass: string;
        }[];
    };
}

export declare interface OpenMenuProps {
    menu: Partial<Electron.MenuItem>[];
    x: number;
    y: number;
}

export declare type OptinalKeys<T> = {
    [K in keyof T]-?: undefined extends T[K] ? K : never;
}[keyof T];

export declare type position = [number, number] | undefined;

declare interface Positions extends Partial<Omit<DOMRect, "toJSON">> {
    positionId: string;
}

export declare type ReactElement<T = HTMLDivElement> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

export declare interface SendEmailProps {
    to: string;
    subject?: string;
    body?: string;
}

export declare interface SendSmsProps {
    to: string;
    body?: string;
}

export declare interface SendTelProps {
    tel: string;
}

export declare interface SetProgressProps {
    value?: number;
    options?: globalThis.Electron.ProgressBarOptions | undefined;
}

export declare interface SetSmallStateProps {
    force?: boolean;
    direction: string;
    value: any;
}

declare interface Setting<T extends keyof SettingConfig> {
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

declare interface SettingConfig {
    date: Partial<{
        format: "date" | "time" | "month" | "datetime-local";
        goToCurrent: boolean;
    }>;
    pin: Partial<{
        length: number;
        match: string;
        size: number;
    }>;
    enum: Partial<{
        position: "bottom" | "left" | "top" | "right";
        list: {
            value: string;
            content?: string;
            desc?: string;
        }[];
        nullable: boolean;
        expandIcon: boolean;
    }>;
    string: Partial<{
        maxLength: number;
        minLength: number;
        help: string[];
        locked: boolean;
        hint: string;
        autoChange: boolean;
    }>;
    boolean: Partial<{
        onActive: string;
        onDisactive: string;
        style: "checkbox" | "switch";
    }>;
    number: Partial<{
        max: number;
        min: number;
        placeholder: string;
        autoChange: boolean;
        center: boolean;
        size: "small" | "large";
        selectOnFocus: boolean;
    }>;
    regexp: Partial<{}>;
    file: Partial<FileProps>;
    array: Partial<{}>;
    filter: Partial<{
        list: {
            content: string;
            value: string;
        }[];
        extra: string[][];
    }>;
    password: Partial<{
        canEmpty: string;
    }>;
    object: Partial<{
        proposition: "path";
    }>;
    audio: Partial<{}>;
    image: Partial<{
        filter: string[];
        alt: string;
        rounded: boolean;
        size: number;
    }>;
    range: Partial<{
        min: number;
        max: number;
        isFloat: boolean;
        showValue: boolean;
        marked: Record<number, string>;
    }>;
}

declare interface SettingConfig_2 {
    date: Partial<{
        format: "date" | "time" | "month" | "datetime-local";
        goToCurrent: boolean;
    }>;
    pin: Partial<{
        length: number;
        match: string;
        size: number;
    }>;
    enum: Partial<{
        position: "bottom" | "left" | "top" | "right";
        list: {
            value: string;
            content?: string;
            desc?: string;
        }[];
        nullable: boolean;
        expandIcon: boolean;
    }>;
    string: Partial<{
        maxLength: number;
        minLength: number;
        help: string[];
        locked: boolean;
        hint: string;
        autoChange: boolean;
    }>;
    boolean: Partial<{
        onActive: string;
        onDisactive: string;
        style: "checkbox" | "switch";
    }>;
    number: Partial<{
        max: number;
        min: number;
        placeholder: string;
        autoChange: boolean;
        center: boolean;
        size: "small" | "large";
        selectOnFocus: boolean;
    }>;
    regexp: Partial<{}>;
    file: Partial<FileProps_2>;
    array: Partial<{}>;
    filter: Partial<{
        list: {
            content: string;
            value: string;
        }[];
        extra: string[][];
    }>;
    password: Partial<{
        canEmpty: string;
    }>;
    object: Partial<{
        proposition: "path";
    }>;
    audio: Partial<{}>;
    image: Partial<{
        filter: string[];
        alt: string;
        rounded: boolean;
        size: number;
    }>;
    range: Partial<{
        min: number;
        max: number;
        isFloat: boolean;
        showValue: boolean;
        marked: Record<number, string>;
    }>;
}

declare interface SettingValueType extends Record<keyof SettingConfig, any> {
    string: string;
    boolean: boolean;
    number: number;
    array: string[];
    enum: string;
    file: string[] | null;
    filter: string[];
    password: string | null;
    object: Record<string, string>;
    date: string | null;
    regexp: string;
    audio: string | null;
    pin: number | null;
    image: string | null;
    range: number;
}

declare interface SettingValueType_2 extends Record<keyof SettingConfig_2, any> {
    string: string;
    boolean: boolean;
    number: number;
    array: string[];
    enum: string;
    file: string[] | null;
    filter: string[];
    password: string | null;
    object: Record<string, string>;
    date: string | null;
    regexp: string;
    audio: string | null;
    pin: number | null;
    image: string | null;
    range: number;
}

declare interface SlotType {
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

export declare const startApplication: (props: StartApplicationProps) => Promise<Root>;

declare interface StartApplicationProps {
    app: JSX.Element | (() => JSX.Element);
    loading?: JSX.Element | (() => JSX.Element);
    onPrepare?: () => MebePromise<undefined | void | {
        colors?: Color[];
        settings?: Setting<keyof SettingValueType_2>[];
        commands?: Cmd[];
        translations?: Lang[];
    }>;
    timeLoading?: number;
    isDev?: boolean;
}

export declare type State<T = undefined> = {
    get: T;
    set: React.Dispatch<React.SetStateAction<T>>;
};

declare const store: EnhancedStore<    {
keyboard: KeyState;
object: ObjectTemp;
title: TitleInitState;
commands: EntityState<Command_2, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
};
keys: EntityState<Key_2, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "keyId";
name: "keys";
loadingTime: number;
changed: boolean;
};
notifications: EntityState<NotificationType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "notifications";
loadingTime: number;
changed: boolean;
};
views: EntityState<View, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "viewId";
name: "views";
loadingTime: number;
changed: boolean;
};
positions: EntityState<Positions, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "positionId";
name: "positions";
loadingTime: number;
changed: boolean;
};
slot: EntityState<SlotType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "slotId";
name: "slot";
loadingTime: number;
changed: boolean;
};
settings: EntityState<Setting<keyof SettingConfig_2>, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "settingId";
name: "settings";
loadingTime: number;
changed: boolean;
};
fields: EntityState<Feild, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "fieldId";
name: "fields";
loadingTime: number;
changed: boolean;
};
actions: EntityState<Action_2, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
};
color: EntityState<Color_2, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "colorId";
name: "color";
loadingTime: number;
changed: boolean;
};
tree: EntityState<TreeType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "treeId";
name: "tree";
loadingTime: number;
changed: boolean;
};
logs: EntityState<Log, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "logId";
name: "logs";
loadingTime: number;
changed: boolean;
};
langs: EntityState<Lang_2, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "word";
name: "langs";
loadingTime: number;
changed: boolean;
};
cahser: EntityState<Casher, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "linkId";
name: "cahser";
loadingTime: number;
changed: boolean;
};
toasts: EntityState<ToastType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "toasts";
loadingTime: number;
changed: boolean;
};
}, UnknownAction, Tuple<[StoreEnhancer<    {
dispatch: ThunkDispatch<    {
keyboard: KeyState;
object: ObjectTemp;
title: TitleInitState;
commands: EntityState<Command_2, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
};
keys: EntityState<Key_2, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "keyId";
name: "keys";
loadingTime: number;
changed: boolean;
};
notifications: EntityState<NotificationType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "notifications";
loadingTime: number;
changed: boolean;
};
views: EntityState<View, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "viewId";
name: "views";
loadingTime: number;
changed: boolean;
};
positions: EntityState<Positions, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "positionId";
name: "positions";
loadingTime: number;
changed: boolean;
};
slot: EntityState<SlotType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "slotId";
name: "slot";
loadingTime: number;
changed: boolean;
};
settings: EntityState<Setting<keyof SettingConfig_2>, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "settingId";
name: "settings";
loadingTime: number;
changed: boolean;
};
fields: EntityState<Feild, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "fieldId";
name: "fields";
loadingTime: number;
changed: boolean;
};
actions: EntityState<Action_2, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
};
color: EntityState<Color_2, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "colorId";
name: "color";
loadingTime: number;
changed: boolean;
};
tree: EntityState<TreeType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "treeId";
name: "tree";
loadingTime: number;
changed: boolean;
};
logs: EntityState<Log, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "logId";
name: "logs";
loadingTime: number;
changed: boolean;
};
langs: EntityState<Lang_2, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "word";
name: "langs";
loadingTime: number;
changed: boolean;
};
cahser: EntityState<Casher, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "linkId";
name: "cahser";
loadingTime: number;
changed: boolean;
};
toasts: EntityState<ToastType, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "id";
name: "toasts";
loadingTime: number;
changed: boolean;
};
}, undefined, UnknownAction>;
}>, StoreEnhancer]>>;

export declare interface TableDefConfig<T extends object = any, I extends keyof T = any, N extends string = any, A extends object = {}> {
    name: N;
    id: I;
    actions?: A;
    default?: GetOptinal<T> | ((state: InitState<T, I>, arg: T) => GetOptinal<T>);
    uniques?: ((keyof T)[] | keyof T)[];
    data?: Record<EntityId, any>;
    onSave?: (state: Record<EntityId, T>, config: TableDefConfig<T, I, N, A>, fullState: FullStateManagment) => Promise<void> | void;
    onRead?: () => Promise<T[]> | T[];
    reduxStore?: () => Nothing | Store;
}

declare interface TextAreaProps extends default_2.DetailedHTMLProps<default_2.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    propositions?: string[];
    selection?: {
        direction: HTMLTextAreaElement["selectionDirection"];
        end: HTMLTextAreaElement["selectionEnd"];
        start: HTMLTextAreaElement["selectionStart"];
    };
    onSelectionChange?: (selection?: TextAreaProps["selection"]) => void;
    onValueChange?: (value: string) => any;
    tabSize?: number;
    supportTab?: boolean;
    multiLines?: boolean;
    acceptKeys?: string[];
    pattern?: string | RegExp;
}

declare interface TitleInitState {
    content: string | number | null | undefined;
    position: null | [number, number];
    x: "left" | "right" | "center";
    y: "top" | "bottom" | "center";
}

declare interface ToastType {
    id?: string;
    message: string | number;
    type?: "info" | "warning" | "error" | "success";
    time?: number;
}

export declare interface TreeComponentProps<T> extends ReactElement {
    position: string;
    data: T;
    index: number;
    handels: {
        expand: (only: boolean, value: boolean) => any;
        focus: Function;
        select: (only: boolean, value: boolean) => any;
        submit: Function;
    };
    status: Record<`is${"Submited" | "Selected" | "Focused" | "Expanded"}`, boolean>;
    parent?: TreeProps<T>["parent"];
    isFins: boolean;
    innerTree: TreeProps<T>["tree"];
    level: number;
}

export declare interface TreeProps<T> {
    treeId: string;
    tree?: {
        data: T;
        innerTree?: TreeProps<T>["tree"] | undefined;
    }[];
    component: (props: TreeComponentProps<T>) => JSX.Element;
    level?: number;
    size?: string;
    position?: string;
    parent?: {
        data: T;
        parent: TreeProps<T>["parent"];
    };
}

declare interface TreeType {
    ends: string[];
    treeId: string;
    focused?: string | null;
    submited?: string;
    selected?: Record<string, boolean>;
    skiped?: Record<string, boolean>;
    expanded?: Record<string, boolean>;
    separator?: string;
}

declare interface View {
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

export { }
