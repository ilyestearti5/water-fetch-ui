import { default as default_2 } from 'react';
import { Dispatch } from 'react';
import { EnhancedStore } from '@reduxjs/toolkit';
import { EntityId } from '@reduxjs/toolkit';
import { EntityState } from '@reduxjs/toolkit';
import { GenerativeModel } from '@google/generative-ai';
import { OpenDialogOptions } from 'electron';
import { PayloadAction } from '@reduxjs/toolkit';
import { QueryStatus } from 'react-query';
import { RecaptchaVerifier } from 'firebase/auth';
import { SetStateAction } from 'react';
import { StoreEnhancer } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Tuple } from '@reduxjs/toolkit';
import { UnknownAction } from 'redux';
import { Unsubscribe } from 'redux';
import { User } from 'firebase/auth';

declare interface Action {
    actionId: string;
    status: QueryStatus | "ready";
    args?: any;
    output?: any;
}

export declare const actionHooks: {
    getFull(): InitState<any, "actionId">;
    getIds(): EntityId[];
    getId(): "actionId";
    remove(ids: EntityId[]): void;
    add(data: Action[]): void;
    upsert(data: Action[]): void;
    getOne(id: EntityId): {
        actionId: string;
        status: QueryStatus | "ready";
        args?: any;
        output?: any;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Action>): void;
    setWriteStatus(status?: InitState<Action, "actionId">["writeStatus"]): void;
    useOne(id: EntityId): {
        get: {
            actionId: string;
            status: QueryStatus | "ready";
            args?: any;
            output?: any;
        } | undefined;
        set: default_2.Dispatch<default_2.SetStateAction<{
            actionId: string;
            status: QueryStatus | "ready";
            args?: any;
            output?: any;
        } | undefined>>;
    };
    getOneFeild<F extends keyof Action>(recordId: EntityId, field: F): ({
        actionId: string;
        status: QueryStatus | "ready";
        args?: any;
        output?: any;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Action>(id: EntityId, field: F, value: Action[F]): void;
    useOneFeild<F extends keyof Action>(recordeId: EntityId, field: F): {
        get: ({
            actionId: string;
            status: QueryStatus | "ready";
            args?: any;
            output?: any;
        }[F] & ({} | null)) | undefined;
        set: default_2.Dispatch<default_2.SetStateAction<({
            actionId: string;
            status: QueryStatus | "ready";
            args?: any;
            output?: any;
        }[F] & ({} | null)) | undefined>>;
    };
    getOneFeilds<F extends keyof Action>(id: EntityId, fields: F[]): (F extends infer T extends keyof Action ? { [key in T]: Action[F]; } : never) | undefined;
    getAll(): Action[];
    setAll(data: Record<EntityId, Action> | readonly Action[]): void;
    useAll(): {
        get: Action[];
        set: default_2.Dispatch<default_2.SetStateAction<Action[]>>;
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
    getEntity(): Record<EntityId, Action>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

declare type CameraResult<T extends keyof FullCameraResult> = FullCameraResult[T];

declare interface Casher {
    linkId: string;
    response?: string;
    status?: "error" | "success" | "idle";
}

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

export declare const closeProfile: () => void;

declare interface Color {
    colorId: string;
    dark?: string;
    light?: string;
    default?: string;
    propositions?: string[];
}

export declare const colorHooks: {
    getFull(): InitState<any, "colorId">;
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
    setWriteStatus(status?: InitState<Color, "colorId">["writeStatus"]): void;
    useOne(id: EntityId): {
        get: {
            colorId: string;
            dark?: string;
            light?: string;
            default?: string;
            propositions?: string[];
        } | undefined;
        set: Dispatch<SetStateAction<    {
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
        set: Dispatch<SetStateAction<({
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
        set: Dispatch<SetStateAction<Color[]>>;
    };
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): {
        get: "idle" | "ready" | "loading" | "error" | "success";
        set: Dispatch<SetStateAction<"idle" | "ready" | "loading" | "error" | "success">>;
    };
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): {
        get: "idle" | "loading" | "error" | "success";
        set: Dispatch<SetStateAction<"idle" | "loading" | "error" | "success">>;
    };
    getEntity(): Record<EntityId, Color>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

declare type ColorIds = keyof typeof data_3;

declare interface Command {
    commandId: string;
    label?: string;
    commands?: (Command["commandId"] | PayloadAction<any> | number)[];
    private?: boolean;
    blocked?: boolean;
}

declare type CommandIds = keyof typeof data;

export declare const commandsHooks: {
    getFull(): InitState<any, "commandId">;
    getIds(): EntityId[];
    getId(): "commandId";
    remove(ids: EntityId[]): void;
    add(data: Command[]): void;
    upsert(data: Command[]): void;
    getOne(id: EntityId): {
        commandId: string;
        label?: string;
        commands?: (Command["commandId"] | PayloadAction<any> | number)[];
        private?: boolean;
        blocked?: boolean;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Command>): void;
    setWriteStatus(status?: InitState<Command, "commandId">["writeStatus"]): void;
    useOne(id: EntityId): {
        get: {
            commandId: string;
            label?: string;
            commands?: (Command["commandId"] | PayloadAction<any> | number)[];
            private?: boolean;
            blocked?: boolean;
        } | undefined;
        set: Dispatch<SetStateAction<    {
        commandId: string;
        label?: string;
        commands?: (Command["commandId"] | PayloadAction<any> | number)[];
        private?: boolean;
        blocked?: boolean;
        } | undefined>>;
    };
    getOneFeild<F extends keyof Command>(recordId: EntityId, field: F): ({
        commandId: string;
        label?: string;
        commands?: (Command["commandId"] | PayloadAction<any> | number)[];
        private?: boolean;
        blocked?: boolean;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Command>(id: EntityId, field: F, value: Command[F]): void;
    useOneFeild<F extends keyof Command>(recordeId: EntityId, field: F): {
        get: ({
            commandId: string;
            label?: string;
            commands?: (Command["commandId"] | PayloadAction<any> | number)[];
            private?: boolean;
            blocked?: boolean;
        }[F] & ({} | null)) | undefined;
        set: Dispatch<SetStateAction<({
        commandId: string;
        label?: string;
        commands?: (Command["commandId"] | PayloadAction<any> | number)[];
        private?: boolean;
        blocked?: boolean;
        }[F] & ({} | null)) | undefined>>;
    };
    getOneFeilds<F extends keyof Command>(id: EntityId, fields: F[]): (F extends infer T extends keyof Command ? { [key in T]: Command[F]; } : never) | undefined;
    getAll(): Command[];
    setAll(data: Record<EntityId, Command> | readonly Command[]): void;
    useAll(): {
        get: Command[];
        set: Dispatch<SetStateAction<Command[]>>;
    };
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): {
        get: "idle" | "ready" | "loading" | "error" | "success";
        set: Dispatch<SetStateAction<"idle" | "ready" | "loading" | "error" | "success">>;
    };
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): {
        get: "idle" | "loading" | "error" | "success";
        set: Dispatch<SetStateAction<"idle" | "loading" | "error" | "success">>;
    };
    getEntity(): Record<EntityId, Command>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

declare type CssColorKeys = "background" | "backgroundColor" | "color" | "borderColor" | "outlineColor" | "borderLeftColor" | "borderRightColor" | "borderBottomColor" | "borderTopColor" | "boxShadow" | "caretColor" | "fill" | "stroke";

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

declare const data_2: {
    appPassword: {};
    colorDarkValue: {};
    colorDefaultValue: {};
    colorLightValue: {};
    colorName: {};
    findCommand: {};
    "findConfigurations-local": {};
    number: {};
    "password/def": {};
    "setting/number": {};
    updateConfigSetting: {};
    "window/password": {};
};

declare const data_3: {
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
    opacity: {
        dark: string;
        light: string;
    };
};

declare const data_4: {
    "preferences/animation.boolean": {
        def: boolean;
        desc: string;
        name: string;
    };
    "preferences/fastScrollKey.enum": {
        config: {
            list: {
                value: string;
            }[];
        };
        def: string;
        desc: string;
        name: string;
    };
    "preferences/font.enum": {
        config: {
            list: {
                content: string;
                value: string;
            }[];
        };
        def: string;
        desc: string;
        name: string;
    };
    "preferences/toastTime.number": {
        config: {
            max: number;
            min: number;
        };
        def: number;
        desc: string;
        name: string;
    };
    "settings/findBy.enum": {
        config: {
            list: ({
                content: string;
                value: string;
            } | {
                value: string;
                content?: undefined;
            })[];
        };
        def: string;
        desc: string;
        name: string;
    };
    "toast/position.enum": {
        config: {
            list: {
                content: string;
                value: string;
            }[];
        };
        def: string;
        desc: string;
        name: string;
    };
    "visibility/configurations.boolean": {
        def: boolean;
        desc: string;
        name: string;
        private: boolean;
    };
    "visibility/header.boolean": {
        def: boolean;
        name: string;
    };
    "visibility/headerNotifays.boolean": {
        def: boolean;
        name: string;
        private: boolean;
    };
    "visibility/keyPanding/form.boolean": {
        def: boolean;
        private: boolean;
    };
    "visibility/leftSide.boolean": {
        def: boolean;
        desc: string;
        name: string;
    };
    "visibility/notifays.boolean": {
        def: boolean;
        desc: string;
        name: string;
        private: boolean;
    };
    "visibility/notifays/nots.boolean": {
        def: boolean;
        private: boolean;
    };
    "visibility/rightSide.boolean": {
        def: boolean;
        desc: string;
        name: string;
    };
    "window/dark.boolean": {
        config: {
            style: string;
        };
        def: boolean;
        desc: string;
        name: string;
    };
    "window/lang.enum": {
        config: {
            list: {
                content: string;
                value: string;
            }[];
        };
        def: string;
        desc: string;
        name: string;
    };
    "preferences/scrollAnimation.boolean.boolean": {
        def: boolean;
        desc: string;
        name: string;
    };
    "visibility/keyboard.boolean": {
        name: string;
        desc: string;
        def: boolean;
    };
};

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

declare type FeildIds = keyof typeof data_2;

declare type FeildRecord<T extends string | number> = Record<T, FeildIds>;

export declare const fieldHooks: {
    getFull(): InitState<any, "fieldId">;
    getIds(): EntityId[];
    getId(): "fieldId";
    remove(ids: EntityId[]): void;
    add(data: Feild[]): void;
    upsert(data: Feild[]): void;
    getOne(id: EntityId): {
        fieldId: string;
        selection: TextAreaProps["selection"];
        value: string;
        controls: Record<string, {
            succ?: string;
            err?: string;
        }>;
        history?: string[];
    } | undefined;
    setOne(id: EntityId, changes: Partial<Feild>): void;
    setWriteStatus(status?: InitState<Feild, "fieldId">["writeStatus"]): void;
    useOne(id: EntityId): {
        get: {
            fieldId: string;
            selection: TextAreaProps["selection"];
            value: string;
            controls: Record<string, {
                succ?: string;
                err?: string;
            }>;
            history?: string[];
        } | undefined;
        set: default_2.Dispatch<default_2.SetStateAction<{
            fieldId: string;
            selection: TextAreaProps["selection"];
            value: string;
            controls: Record<string, {
                succ?: string;
                err?: string;
            }>;
            history?: string[];
        } | undefined>>;
    };
    getOneFeild<F extends keyof Feild>(recordId: EntityId, field: F): ({
        fieldId: string;
        selection: TextAreaProps["selection"];
        value: string;
        controls: Record<string, {
            succ?: string;
            err?: string;
        }>;
        history?: string[];
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Feild>(id: EntityId, field: F, value: Feild[F]): void;
    useOneFeild<F extends keyof Feild>(recordeId: EntityId, field: F): {
        get: ({
            fieldId: string;
            selection: TextAreaProps["selection"];
            value: string;
            controls: Record<string, {
                succ?: string;
                err?: string;
            }>;
            history?: string[];
        }[F] & ({} | null)) | undefined;
        set: default_2.Dispatch<default_2.SetStateAction<({
            fieldId: string;
            selection: TextAreaProps["selection"];
            value: string;
            controls: Record<string, {
                succ?: string;
                err?: string;
            }>;
            history?: string[];
        }[F] & ({} | null)) | undefined>>;
    };
    getOneFeilds<F extends keyof Feild>(id: EntityId, fields: F[]): (F extends infer T extends keyof Feild ? { [key in T]: Feild[F]; } : never) | undefined;
    getAll(): Feild[];
    setAll(data: Record<EntityId, Feild> | readonly Feild[]): void;
    useAll(): {
        get: Feild[];
        set: default_2.Dispatch<default_2.SetStateAction<Feild[]>>;
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
    getEntity(): Record<EntityId, Feild>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

declare interface FileProps extends OpenDialogOptions {
    nullable: boolean;
}

declare interface FullCameraResult {
    scanner: string;
    take: string;
}

declare type FullStateManagment = ReturnType<typeof store.getState>;

export declare function getAllKeys(): Key[];

export declare function getColor(isDark: boolean, color: Color): string | undefined;

export declare function getFeildNext(fieldId: string): string;

export declare function getFeildPrevious(fieldId: string): string;

export declare function getFeildSelected(fieldId: string): string;

export declare function getManyFeilds<S extends string | number, T extends FeildRecord<S>>(fields: T, deps?: any): Record<keyof T, string | undefined>;

export declare const getModel: ({ model }: GetModelProps) => GenerativeModel | null;

declare interface GetModelProps {
    model?: "gemini-pro" | "gemini-pro-vision";
}

export declare function getNext(value: string | undefined, selection: TextAreaProps["selection"]): string;

export declare function getPrevious(value: string | undefined, selection: TextAreaProps["selection"]): string;

export declare function getPublicSettings(): Setting<keyof SettingConfig>[];

export declare function getPublicSettingsFilter(): Setting<keyof SettingConfig>[];

export declare function getSelected(value: string | undefined, selection: TextAreaProps["selection"]): string;

export declare function getSettingById<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`): Setting<ID> | null;

export declare function getSettingConfig<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`): SettingConfig[ID] | null;

export declare function getSettingValue<ID extends keyof SettingConfig>(settingId: Setting<ID>["settingId"]): SettingValueType[ID] | undefined;

export declare function getShortcutsOfAction(actionName: string): Key[];

export declare function getShortcutsOfCommand(commandId: CommandIds | string): Key[];

export declare const getUser: () => User | null;

export declare const getUserFromDB: () => Partial<{
    name: string | null;
    email: string | null;
    phone: string | null;
    photo: string | null;
}> | null;

export declare function handelGradientColor(direction: string, ...colors: ColorIds[]): ReturnColorHandelFunction;

export declare function handelShadowColor(array?: {
    colorId: ColorIds;
    x?: number;
    y?: number;
    size?: number;
    blur?: number;
    isInset?: boolean;
}[]): ReturnColorHandelFunction;

export declare function initNewFeild(fieldId: string): void;

export declare function initNewFeilds(inputNames: string[]): void;

declare type InitState<T extends object, I extends keyof T> = EntityState<T, EntityId> & {
    status: QueryStatus;
    id: I;
    changed: boolean;
    name: string;
    loadingTime: number;
    writeStatus: QueryStatus | "ready";
};

export declare const initUser: () => void;

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

declare interface KeyState extends Record<Parameters<default_2.KeyboardEvent<HTMLElement>["getModifierState"]>[0], boolean> {
    Key?: string;
}

declare interface Lang {
    langId: string;
    value: string;
}

export declare const langHooks: {
    getFull(): InitState<any, "langId">;
    getIds(): EntityId[];
    getId(): "langId";
    remove(ids: EntityId[]): void;
    add(data: Lang[]): void;
    upsert(data: Lang[]): void;
    getOne(id: EntityId): {
        langId: string;
        value: string;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Lang>): void;
    setWriteStatus(status?: InitState<Lang, "langId">["writeStatus"]): void;
    useOne(id: EntityId): {
        get: {
            langId: string;
            value: string;
        } | undefined;
        set: Dispatch<SetStateAction<    {
        langId: string;
        value: string;
        } | undefined>>;
    };
    getOneFeild<F extends keyof Lang>(recordId: EntityId, field: F): {
        langId: string;
        value: string;
    }[F] | undefined;
    setOneFeild<F extends keyof Lang>(id: EntityId, field: F, value: Lang[F]): void;
    useOneFeild<F extends keyof Lang>(recordeId: EntityId, field: F): {
        get: {
            langId: string;
            value: string;
        }[F] | undefined;
        set: Dispatch<SetStateAction<    {
        langId: string;
        value: string;
        }[F] | undefined>>;
    };
    getOneFeilds<F extends keyof Lang>(id: EntityId, fields: F[]): (F extends infer T extends keyof Lang ? { [key in T]: Lang[F]; } : never) | undefined;
    getAll(): Lang[];
    setAll(data: Record<EntityId, Lang> | readonly Lang[]): void;
    useAll(): {
        get: Lang[];
        set: Dispatch<SetStateAction<Lang[]>>;
    };
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): {
        get: "idle" | "ready" | "loading" | "error" | "success";
        set: Dispatch<SetStateAction<"idle" | "ready" | "loading" | "error" | "success">>;
    };
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): {
        get: "idle" | "loading" | "error" | "success";
        set: Dispatch<SetStateAction<"idle" | "loading" | "error" | "success">>;
    };
    getEntity(): Record<EntityId, Lang>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

declare interface Log {
    logId?: string;
    title: string;
    createdAt?: string;
    showDesc?: boolean;
    desc?: string;
    type?: "INFO" | "SUCC" | "ERR" | "WARN";
    category?: string;
}

export declare const logHooks: {
    getFull(): InitState<any, "logId">;
    getIds(): EntityId[];
    getId(): "logId";
    remove(ids: EntityId[]): void;
    add(data: Log[]): void;
    upsert(data: Log[]): void;
    getOne(id: EntityId): {
        logId?: string;
        title: string;
        createdAt?: string;
        showDesc?: boolean;
        desc?: string;
        type?: "INFO" | "SUCC" | "ERR" | "WARN";
        category?: string;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Log>): void;
    setWriteStatus(status?: InitState<Log, "logId">["writeStatus"]): void;
    useOne(id: EntityId): {
        get: {
            logId?: string;
            title: string;
            createdAt?: string;
            showDesc?: boolean;
            desc?: string;
            type?: "INFO" | "SUCC" | "ERR" | "WARN";
            category?: string;
        } | undefined;
        set: Dispatch<SetStateAction<    {
        logId?: string;
        title: string;
        createdAt?: string;
        showDesc?: boolean;
        desc?: string;
        type?: "INFO" | "SUCC" | "ERR" | "WARN";
        category?: string;
        } | undefined>>;
    };
    getOneFeild<F extends keyof Log>(recordId: EntityId, field: F): ({
        logId?: string;
        title: string;
        createdAt?: string;
        showDesc?: boolean;
        desc?: string;
        type?: "INFO" | "SUCC" | "ERR" | "WARN";
        category?: string;
    }[F] & {}) | undefined;
    setOneFeild<F extends keyof Log>(id: EntityId, field: F, value: Log[F]): void;
    useOneFeild<F extends keyof Log>(recordeId: EntityId, field: F): {
        get: ({
            logId?: string;
            title: string;
            createdAt?: string;
            showDesc?: boolean;
            desc?: string;
            type?: "INFO" | "SUCC" | "ERR" | "WARN";
            category?: string;
        }[F] & {}) | undefined;
        set: Dispatch<SetStateAction<({
        logId?: string;
        title: string;
        createdAt?: string;
        showDesc?: boolean;
        desc?: string;
        type?: "INFO" | "SUCC" | "ERR" | "WARN";
        category?: string;
        }[F] & {}) | undefined>>;
    };
    getOneFeilds<F extends keyof Log>(id: EntityId, fields: F[]): (F extends infer T extends keyof Log ? { [key in T]: Log[F]; } : never) | undefined;
    getAll(): Log[];
    setAll(data: Record<EntityId, Log> | readonly Log[]): void;
    useAll(): {
        get: Log[];
        set: Dispatch<SetStateAction<Log[]>>;
    };
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): {
        get: "idle" | "ready" | "loading" | "error" | "success";
        set: Dispatch<SetStateAction<"idle" | "ready" | "loading" | "error" | "success">>;
    };
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): {
        get: "idle" | "loading" | "error" | "success";
        set: Dispatch<SetStateAction<"idle" | "loading" | "error" | "success">>;
    };
    getEntity(): Record<EntityId, Log>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

declare type Nothing = false | 0 | null | "" | undefined;

export declare const notifayHooks: {
    getFull(): InitState<any, "id">;
    getIds(): EntityId[];
    getId(): "id";
    remove(ids: EntityId[]): void;
    add(data: NotificationType[]): void;
    upsert(data: NotificationType[]): void;
    getOne(id: EntityId): {
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
    setOne(id: EntityId, changes: Partial<NotificationType>): void;
    setWriteStatus(status?: InitState<NotificationType, "id">["writeStatus"]): void;
    useOne(id: EntityId): {
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
        set: Dispatch<SetStateAction<    {
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
    getOneFeild<F extends keyof NotificationType>(recordId: EntityId, field: F): ({
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
    setOneFeild<F extends keyof NotificationType>(id: EntityId, field: F, value: NotificationType[F]): void;
    useOneFeild<F extends keyof NotificationType>(recordeId: EntityId, field: F): {
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
        set: Dispatch<SetStateAction<({
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
    getOneFeilds<F extends keyof NotificationType>(id: EntityId, fields: F[]): (F extends infer T extends keyof NotificationType ? { [key in T]: NotificationType[F]; } : never) | undefined;
    getAll(): NotificationType[];
    setAll(data: Record<EntityId, NotificationType> | readonly NotificationType[]): void;
    useAll(): {
        get: NotificationType[];
        set: Dispatch<SetStateAction<NotificationType[]>>;
    };
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): {
        get: "idle" | "ready" | "loading" | "error" | "success";
        set: Dispatch<SetStateAction<"idle" | "ready" | "loading" | "error" | "success">>;
    };
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): {
        get: "idle" | "loading" | "error" | "success";
        set: Dispatch<SetStateAction<"idle" | "loading" | "error" | "success">>;
    };
    getEntity(): Record<EntityId, NotificationType>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

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

export declare const onceState: <T extends object | string | number | boolean | null>(stateDir: string, comparedValue: T | ((val: T | undefined) => boolean), on: (state: FullStateManagment) => void) => Unsubscribe;

export declare const onState: <T extends object | string | number | boolean | null>(stateDir: string, comparedValue: T | ((val: T | undefined) => boolean), on?: (state: FullStateManagment) => void) => Unsubscribe;

export declare function openCamera<T extends keyof FullCameraResult>(type: T): Promise<CameraResult<T>>;

declare interface Positions extends Partial<Omit<DOMRect, "toJSON">> {
    positionId: string;
}

export declare const positionsHooks: {
    getFull(): InitState<any, "positionId">;
    getIds(): EntityId[];
    getId(): "positionId";
    remove(ids: EntityId[]): void;
    add(data: Positions[]): void;
    upsert(data: Positions[]): void;
    getOne(id: EntityId): {
        positionId: string;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        readonly right?: number | undefined;
        readonly left?: number | undefined;
        readonly top?: number | undefined;
        readonly bottom?: number | undefined;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Positions>): void;
    setWriteStatus(status?: InitState<Positions, "positionId">["writeStatus"]): void;
    useOne(id: EntityId): {
        get: {
            positionId: string;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            readonly right?: number | undefined;
            readonly left?: number | undefined;
            readonly top?: number | undefined;
            readonly bottom?: number | undefined;
        } | undefined;
        set: Dispatch<SetStateAction<    {
        positionId: string;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        readonly right?: number | undefined;
        readonly left?: number | undefined;
        readonly top?: number | undefined;
        readonly bottom?: number | undefined;
        } | undefined>>;
    };
    getOneFeild<F extends keyof Positions>(recordId: EntityId, field: F): ({
        positionId: string;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        readonly right?: number | undefined;
        readonly left?: number | undefined;
        readonly top?: number | undefined;
        readonly bottom?: number | undefined;
    }[F] & {}) | undefined;
    setOneFeild<F extends keyof Positions>(id: EntityId, field: F, value: Positions[F]): void;
    useOneFeild<F extends keyof Positions>(recordeId: EntityId, field: F): {
        get: ({
            positionId: string;
            height?: number | undefined;
            width?: number | undefined;
            x?: number | undefined;
            y?: number | undefined;
            readonly right?: number | undefined;
            readonly left?: number | undefined;
            readonly top?: number | undefined;
            readonly bottom?: number | undefined;
        }[F] & {}) | undefined;
        set: Dispatch<SetStateAction<({
        positionId: string;
        height?: number | undefined;
        width?: number | undefined;
        x?: number | undefined;
        y?: number | undefined;
        readonly right?: number | undefined;
        readonly left?: number | undefined;
        readonly top?: number | undefined;
        readonly bottom?: number | undefined;
        }[F] & {}) | undefined>>;
    };
    getOneFeilds<F extends keyof Positions>(id: EntityId, fields: F[]): (F extends infer T extends keyof Positions ? { [key in T]: Positions[F]; } : never) | undefined;
    getAll(): Positions[];
    setAll(data: Record<EntityId, Positions> | readonly Positions[]): void;
    useAll(): {
        get: Positions[];
        set: Dispatch<SetStateAction<Positions[]>>;
    };
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): {
        get: "idle" | "ready" | "loading" | "error" | "success";
        set: Dispatch<SetStateAction<"idle" | "ready" | "loading" | "error" | "success">>;
    };
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): {
        get: "idle" | "loading" | "error" | "success";
        set: Dispatch<SetStateAction<"idle" | "loading" | "error" | "success">>;
    };
    getEntity(): Record<EntityId, Positions>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

export declare function resetManyFeilds<T extends FeildIds>(fields: T[]): void;

export declare type ReturnColorHandelFunction = (allColors: Record<EntityId, Color>, isDark: boolean) => string;

export declare const scanQr: () => Promise<unknown>;

export declare function setSettingConfig<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`, config: SettingConfig[ID]): void;

export declare function setSettingValue<ID extends keyof SettingValueType>(settingId: `${string}.${ID}`, value: SettingValueType[ID]): void;

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
        format?: "date" | "time" | "month" | "datetime-local";
        goToCurrent?: boolean;
    }>;
    pin: Partial<{
        length: number;
        nullable: boolean;
        match: string;
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
        uncancable: boolean;
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
        noConfirm: boolean;
        center: boolean;
        size: "small" | "large";
    }>;
    regexp: Partial<{}>;
    file: Partial<FileProps>;
    array: Partial<{}>;
    filter: Partial<{
        list: string[];
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
        alt?: string;
        rounded?: boolean;
    }>;
}

export declare const settingHooks: {
    getFull(): InitState<any, "settingId">;
    getIds(): EntityId[];
    getId(): "settingId";
    remove(ids: EntityId[]): void;
    add(data: Setting<keyof SettingConfig>[]): void;
    upsert(data: Setting<keyof SettingConfig>[]): void;
    getOne(id: EntityId): {
        settingId: `${string}.string` | `${string}.number` | `${string}.boolean` | `${string}.object` | `${string}.filter` | `${string}.image` | `${string}.file` | `${string}.date` | `${string}.pin` | `${string}.enum` | `${string}.regexp` | `${string}.array` | `${string}.password` | `${string}.audio`;
        name?: string;
        desc?: string;
        private?: boolean;
        value: string | number | boolean | Record<string, string> | string[] | null;
        config?: Partial<{
            maxLength: number;
            minLength: number;
            help: string[];
            locked: boolean;
            hint: string;
            uncancable: boolean;
        }> | Partial<{
            max: number;
            min: number;
            placeholder: string;
            noConfirm: boolean;
            center: boolean;
            size: "small" | "large";
        }> | Partial<{
            onActive: string;
            onDisactive: string;
            style: "checkbox" | "switch";
        }> | Partial<{
            proposition: "path";
        }> | Partial<{
            list: string[];
            extra: string[][];
        }> | Partial<{
            filter: string[];
            alt?: string;
            rounded?: boolean;
        }> | Partial<FileProps> | Partial<{
            format?: "date" | "time" | "month" | "datetime-local";
            goToCurrent?: boolean;
        }> | Partial<{
            length: number;
            nullable: boolean;
            match: string;
        }> | Partial<{
            position: "bottom" | "left" | "top" | "right";
            list: {
                value: string;
                content?: string;
                desc?: string;
            }[];
            nullable: boolean;
            expandIcon: boolean;
        }> | Partial<{}> | Partial<{
            canEmpty: string;
        }> | undefined;
        deperacted?: boolean;
        def?: string | number | boolean | Record<string, string> | string[] | null | undefined;
        readonly?: boolean;
    } | undefined;
    setOne(id: EntityId, changes: Partial<Setting<keyof SettingConfig>>): void;
    setWriteStatus(status?: InitState<Setting<keyof SettingConfig>, "settingId">["writeStatus"]): void;
    useOne(id: EntityId): {
        get: {
            settingId: `${string}.string` | `${string}.number` | `${string}.boolean` | `${string}.object` | `${string}.filter` | `${string}.image` | `${string}.file` | `${string}.date` | `${string}.pin` | `${string}.enum` | `${string}.regexp` | `${string}.array` | `${string}.password` | `${string}.audio`;
            name?: string;
            desc?: string;
            private?: boolean;
            value: string | number | boolean | Record<string, string> | string[] | null;
            config?: Partial<{
                maxLength: number;
                minLength: number;
                help: string[];
                locked: boolean;
                hint: string;
                uncancable: boolean;
            }> | Partial<{
                max: number;
                min: number;
                placeholder: string;
                noConfirm: boolean;
                center: boolean;
                size: "small" | "large";
            }> | Partial<{
                onActive: string;
                onDisactive: string;
                style: "checkbox" | "switch";
            }> | Partial<{
                proposition: "path";
            }> | Partial<{
                list: string[];
                extra: string[][];
            }> | Partial<{
                filter: string[];
                alt?: string;
                rounded?: boolean;
            }> | Partial<FileProps> | Partial<{
                format?: "date" | "time" | "month" | "datetime-local";
                goToCurrent?: boolean;
            }> | Partial<{
                length: number;
                nullable: boolean;
                match: string;
            }> | Partial<{
                position: "bottom" | "left" | "top" | "right";
                list: {
                    value: string;
                    content?: string;
                    desc?: string;
                }[];
                nullable: boolean;
                expandIcon: boolean;
            }> | Partial<{}> | Partial<{
                canEmpty: string;
            }> | undefined;
            deperacted?: boolean;
            def?: string | number | boolean | Record<string, string> | string[] | null | undefined;
            readonly?: boolean;
        } | undefined;
        set: Dispatch<SetStateAction<    {
        settingId: `${string}.string` | `${string}.number` | `${string}.boolean` | `${string}.object` | `${string}.filter` | `${string}.image` | `${string}.file` | `${string}.date` | `${string}.pin` | `${string}.enum` | `${string}.regexp` | `${string}.array` | `${string}.password` | `${string}.audio`;
        name?: string;
        desc?: string;
        private?: boolean;
        value: string | number | boolean | Record<string, string> | string[] | null;
        config?: Partial<{
        maxLength: number;
        minLength: number;
        help: string[];
        locked: boolean;
        hint: string;
        uncancable: boolean;
        }> | Partial<{
        max: number;
        min: number;
        placeholder: string;
        noConfirm: boolean;
        center: boolean;
        size: "small" | "large";
        }> | Partial<{
        onActive: string;
        onDisactive: string;
        style: "checkbox" | "switch";
        }> | Partial<{
        proposition: "path";
        }> | Partial<{
        list: string[];
        extra: string[][];
        }> | Partial<{
        filter: string[];
        alt?: string;
        rounded?: boolean;
        }> | Partial<FileProps> | Partial<{
        format?: "date" | "time" | "month" | "datetime-local";
        goToCurrent?: boolean;
        }> | Partial<{
        length: number;
        nullable: boolean;
        match: string;
        }> | Partial<{
        position: "bottom" | "left" | "top" | "right";
        list: {
        value: string;
        content?: string;
        desc?: string;
        }[];
        nullable: boolean;
        expandIcon: boolean;
        }> | Partial<{}> | Partial<{
        canEmpty: string;
        }> | undefined;
        deperacted?: boolean;
        def?: string | number | boolean | Record<string, string> | string[] | null | undefined;
        readonly?: boolean;
        } | undefined>>;
    };
    getOneFeild<F extends keyof Setting<keyof SettingConfig>>(recordId: EntityId, field: F): ({
        settingId: `${string}.string` | `${string}.number` | `${string}.boolean` | `${string}.object` | `${string}.filter` | `${string}.image` | `${string}.file` | `${string}.date` | `${string}.pin` | `${string}.enum` | `${string}.regexp` | `${string}.array` | `${string}.password` | `${string}.audio`;
        name?: string;
        desc?: string;
        private?: boolean;
        value: string | number | boolean | Record<string, string> | string[] | null;
        config?: Partial<{
            maxLength: number;
            minLength: number;
            help: string[];
            locked: boolean;
            hint: string;
            uncancable: boolean;
        }> | Partial<{
            max: number;
            min: number;
            placeholder: string;
            noConfirm: boolean;
            center: boolean;
            size: "small" | "large";
        }> | Partial<{
            onActive: string;
            onDisactive: string;
            style: "checkbox" | "switch";
        }> | Partial<{
            proposition: "path";
        }> | Partial<{
            list: string[];
            extra: string[][];
        }> | Partial<{
            filter: string[];
            alt?: string;
            rounded?: boolean;
        }> | Partial<FileProps> | Partial<{
            format?: "date" | "time" | "month" | "datetime-local";
            goToCurrent?: boolean;
        }> | Partial<{
            length: number;
            nullable: boolean;
            match: string;
        }> | Partial<{
            position: "bottom" | "left" | "top" | "right";
            list: {
                value: string;
                content?: string;
                desc?: string;
            }[];
            nullable: boolean;
            expandIcon: boolean;
        }> | Partial<{}> | Partial<{
            canEmpty: string;
        }> | undefined;
        deperacted?: boolean;
        def?: string | number | boolean | Record<string, string> | string[] | null | undefined;
        readonly?: boolean;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof Setting<keyof SettingConfig>>(id: EntityId, field: F, value: Setting<keyof SettingConfig>[F]): void;
    useOneFeild<F extends keyof Setting<keyof SettingConfig>>(recordeId: EntityId, field: F): {
        get: ({
            settingId: `${string}.string` | `${string}.number` | `${string}.boolean` | `${string}.object` | `${string}.filter` | `${string}.image` | `${string}.file` | `${string}.date` | `${string}.pin` | `${string}.enum` | `${string}.regexp` | `${string}.array` | `${string}.password` | `${string}.audio`;
            name?: string;
            desc?: string;
            private?: boolean;
            value: string | number | boolean | Record<string, string> | string[] | null;
            config?: Partial<{
                maxLength: number;
                minLength: number;
                help: string[];
                locked: boolean;
                hint: string;
                uncancable: boolean;
            }> | Partial<{
                max: number;
                min: number;
                placeholder: string;
                noConfirm: boolean;
                center: boolean;
                size: "small" | "large";
            }> | Partial<{
                onActive: string;
                onDisactive: string;
                style: "checkbox" | "switch";
            }> | Partial<{
                proposition: "path";
            }> | Partial<{
                list: string[];
                extra: string[][];
            }> | Partial<{
                filter: string[];
                alt?: string;
                rounded?: boolean;
            }> | Partial<FileProps> | Partial<{
                format?: "date" | "time" | "month" | "datetime-local";
                goToCurrent?: boolean;
            }> | Partial<{
                length: number;
                nullable: boolean;
                match: string;
            }> | Partial<{
                position: "bottom" | "left" | "top" | "right";
                list: {
                    value: string;
                    content?: string;
                    desc?: string;
                }[];
                nullable: boolean;
                expandIcon: boolean;
            }> | Partial<{}> | Partial<{
                canEmpty: string;
            }> | undefined;
            deperacted?: boolean;
            def?: string | number | boolean | Record<string, string> | string[] | null | undefined;
            readonly?: boolean;
        }[F] & ({} | null)) | undefined;
        set: Dispatch<SetStateAction<({
        settingId: `${string}.string` | `${string}.number` | `${string}.boolean` | `${string}.object` | `${string}.filter` | `${string}.image` | `${string}.file` | `${string}.date` | `${string}.pin` | `${string}.enum` | `${string}.regexp` | `${string}.array` | `${string}.password` | `${string}.audio`;
        name?: string;
        desc?: string;
        private?: boolean;
        value: string | number | boolean | Record<string, string> | string[] | null;
        config?: Partial<{
        maxLength: number;
        minLength: number;
        help: string[];
        locked: boolean;
        hint: string;
        uncancable: boolean;
        }> | Partial<{
        max: number;
        min: number;
        placeholder: string;
        noConfirm: boolean;
        center: boolean;
        size: "small" | "large";
        }> | Partial<{
        onActive: string;
        onDisactive: string;
        style: "checkbox" | "switch";
        }> | Partial<{
        proposition: "path";
        }> | Partial<{
        list: string[];
        extra: string[][];
        }> | Partial<{
        filter: string[];
        alt?: string;
        rounded?: boolean;
        }> | Partial<FileProps> | Partial<{
        format?: "date" | "time" | "month" | "datetime-local";
        goToCurrent?: boolean;
        }> | Partial<{
        length: number;
        nullable: boolean;
        match: string;
        }> | Partial<{
        position: "bottom" | "left" | "top" | "right";
        list: {
        value: string;
        content?: string;
        desc?: string;
        }[];
        nullable: boolean;
        expandIcon: boolean;
        }> | Partial<{}> | Partial<{
        canEmpty: string;
        }> | undefined;
        deperacted?: boolean;
        def?: string | number | boolean | Record<string, string> | string[] | null | undefined;
        readonly?: boolean;
        }[F] & ({} | null)) | undefined>>;
    };
    getOneFeilds<F extends keyof Setting<keyof SettingConfig>>(id: EntityId, fields: F[]): (F extends infer T extends keyof Setting<keyof SettingConfig> ? { [key in T]: Setting<keyof SettingConfig>[F]; } : never) | undefined;
    getAll(): Setting<keyof SettingConfig>[];
    setAll(data: Record<EntityId, Setting<keyof SettingConfig>> | readonly Setting<keyof SettingConfig>[]): void;
    useAll(): {
        get: Setting<keyof SettingConfig>[];
        set: Dispatch<SetStateAction<Setting<keyof SettingConfig>[]>>;
    };
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): {
        get: "idle" | "ready" | "loading" | "error" | "success";
        set: Dispatch<SetStateAction<"idle" | "ready" | "loading" | "error" | "success">>;
    };
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): {
        get: "idle" | "loading" | "error" | "success";
        set: Dispatch<SetStateAction<"idle" | "loading" | "error" | "success">>;
    };
    getEntity(): Record<EntityId, Setting<keyof SettingConfig>>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

declare type SettingIds = keyof typeof data_4;

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
}

export declare const showNotification: ({ ...notification }: Partial<NotificationType>) => void;

export declare const showPdf: (content: null | string) => void;

export declare const showProfile: () => void;

export declare const showSetting: (settingId: SettingIds | Setting<keyof SettingConfig>["settingId"] | null) => void;

export declare function showToast(message: ToastType["message"], type?: ToastType["type"], id?: string, time?: number): string;

export declare const slotHooks: {
    getFull(): InitState<any, "slotId">;
    getIds(): EntityId[];
    getId(): "slotId";
    remove(ids: EntityId[]): void;
    add(data: SlotType[]): void;
    upsert(data: SlotType[]): void;
    getOne(id: EntityId): {
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
    setOne(id: EntityId, changes: Partial<SlotType>): void;
    setWriteStatus(status?: InitState<SlotType, "slotId">["writeStatus"]): void;
    useOne(id: EntityId): {
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
        set: default_2.Dispatch<default_2.SetStateAction<{
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
    getOneFeild<F extends keyof SlotType>(recordId: EntityId, field: F): ({
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
    setOneFeild<F extends keyof SlotType>(id: EntityId, field: F, value: SlotType[F]): void;
    useOneFeild<F extends keyof SlotType>(recordeId: EntityId, field: F): {
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
        set: default_2.Dispatch<default_2.SetStateAction<({
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
    getOneFeilds<F extends keyof SlotType>(id: EntityId, fields: F[]): (F extends infer T extends keyof SlotType ? { [key in T]: SlotType[F]; } : never) | undefined;
    getAll(): SlotType[];
    setAll(data: Record<EntityId, SlotType> | readonly SlotType[]): void;
    useAll(): {
        get: SlotType[];
        set: default_2.Dispatch<default_2.SetStateAction<SlotType[]>>;
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
    getEntity(): Record<EntityId, SlotType>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

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

export declare const store: EnhancedStore<    {
keyboard: KeyState;
object: ObjectTemp;
title: TitleInitState;
commands: EntityState<Command, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
};
keys: EntityState<Key, EntityId> & {
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
settings: EntityState<Setting<keyof SettingConfig>, EntityId> & {
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
actions: EntityState<Action, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
};
color: EntityState<Color, EntityId> & {
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
langs: EntityState<Lang, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "langId";
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
commands: EntityState<Command, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "commandId";
name: "commands";
loadingTime: number;
changed: boolean;
};
keys: EntityState<Key, EntityId> & {
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
settings: EntityState<Setting<keyof SettingConfig>, EntityId> & {
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
actions: EntityState<Action, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "actionId";
name: "actions";
loadingTime: number;
changed: boolean;
};
color: EntityState<Color, EntityId> & {
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
langs: EntityState<Lang, EntityId> & {
saved: boolean;
status: string;
writeStatus: string;
id: "langId";
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

export declare const toastHooks: {
    getFull(): InitState<any, "id">;
    getIds(): EntityId[];
    getId(): "id";
    remove(ids: EntityId[]): void;
    add(data: ToastType[]): void;
    upsert(data: ToastType[]): void;
    getOne(id: EntityId): {
        id?: string;
        message: string | number;
        type?: "info" | "warning" | "error" | "success";
        time?: number;
    } | undefined;
    setOne(id: EntityId, changes: Partial<ToastType>): void;
    setWriteStatus(status?: InitState<ToastType, "id">["writeStatus"]): void;
    useOne(id: EntityId): {
        get: {
            id?: string;
            message: string | number;
            type?: "info" | "warning" | "error" | "success";
            time?: number;
        } | undefined;
        set: Dispatch<SetStateAction<    {
        id?: string;
        message: string | number;
        type?: "info" | "warning" | "error" | "success";
        time?: number;
        } | undefined>>;
    };
    getOneFeild<F extends keyof ToastType>(recordId: EntityId, field: F): ({
        id?: string;
        message: string | number;
        type?: "info" | "warning" | "error" | "success";
        time?: number;
    }[F] & {}) | undefined;
    setOneFeild<F extends keyof ToastType>(id: EntityId, field: F, value: ToastType[F]): void;
    useOneFeild<F extends keyof ToastType>(recordeId: EntityId, field: F): {
        get: ({
            id?: string;
            message: string | number;
            type?: "info" | "warning" | "error" | "success";
            time?: number;
        }[F] & {}) | undefined;
        set: Dispatch<SetStateAction<({
        id?: string;
        message: string | number;
        type?: "info" | "warning" | "error" | "success";
        time?: number;
        }[F] & {}) | undefined>>;
    };
    getOneFeilds<F extends keyof ToastType>(id: EntityId, fields: F[]): (F extends infer T extends keyof ToastType ? { [key in T]: ToastType[F]; } : never) | undefined;
    getAll(): ToastType[];
    setAll(data: Record<EntityId, ToastType> | readonly ToastType[]): void;
    useAll(): {
        get: ToastType[];
        set: Dispatch<SetStateAction<ToastType[]>>;
    };
    getWriteStatus(): "ready" | QueryStatus;
    useWriteStatus(): {
        get: "idle" | "ready" | "loading" | "error" | "success";
        set: Dispatch<SetStateAction<"idle" | "ready" | "loading" | "error" | "success">>;
    };
    getStatus(): QueryStatus;
    setStatus(value: ReturnType<() => QueryStatus>): void;
    useStatus(): {
        get: "idle" | "loading" | "error" | "success";
        set: Dispatch<SetStateAction<"idle" | "loading" | "error" | "success">>;
    };
    getEntity(): Record<EntityId, ToastType>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

export declare enum ToastTime {
    short = 5,
    long = 5
}

declare interface ToastType {
    id?: string;
    message: string | number;
    type?: "info" | "warning" | "error" | "success";
    time?: number;
}

export declare const treeHooks: {
    getFull(): InitState<any, "treeId">;
    getIds(): EntityId[];
    getId(): "treeId";
    remove(ids: EntityId[]): void;
    add(data: TreeType[]): void;
    upsert(data: TreeType[]): void;
    getOne(id: EntityId): {
        ends: string[];
        treeId: string;
        focused?: string | null;
        submited?: string;
        selected?: Record<string, boolean>;
        skiped?: Record<string, boolean>;
        expanded?: Record<string, boolean>;
        separator?: string;
    } | undefined;
    setOne(id: EntityId, changes: Partial<TreeType>): void;
    setWriteStatus(status?: InitState<TreeType, "treeId">["writeStatus"]): void;
    useOne(id: EntityId): {
        get: {
            ends: string[];
            treeId: string;
            focused?: string | null;
            submited?: string;
            selected?: Record<string, boolean>;
            skiped?: Record<string, boolean>;
            expanded?: Record<string, boolean>;
            separator?: string;
        } | undefined;
        set: default_2.Dispatch<default_2.SetStateAction<{
            ends: string[];
            treeId: string;
            focused?: string | null;
            submited?: string;
            selected?: Record<string, boolean>;
            skiped?: Record<string, boolean>;
            expanded?: Record<string, boolean>;
            separator?: string;
        } | undefined>>;
    };
    getOneFeild<F extends keyof TreeType>(recordId: EntityId, field: F): ({
        ends: string[];
        treeId: string;
        focused?: string | null;
        submited?: string;
        selected?: Record<string, boolean>;
        skiped?: Record<string, boolean>;
        expanded?: Record<string, boolean>;
        separator?: string;
    }[F] & ({} | null)) | undefined;
    setOneFeild<F extends keyof TreeType>(id: EntityId, field: F, value: TreeType[F]): void;
    useOneFeild<F extends keyof TreeType>(recordeId: EntityId, field: F): {
        get: ({
            ends: string[];
            treeId: string;
            focused?: string | null;
            submited?: string;
            selected?: Record<string, boolean>;
            skiped?: Record<string, boolean>;
            expanded?: Record<string, boolean>;
            separator?: string;
        }[F] & ({} | null)) | undefined;
        set: default_2.Dispatch<default_2.SetStateAction<({
            ends: string[];
            treeId: string;
            focused?: string | null;
            submited?: string;
            selected?: Record<string, boolean>;
            skiped?: Record<string, boolean>;
            expanded?: Record<string, boolean>;
            separator?: string;
        }[F] & ({} | null)) | undefined>>;
    };
    getOneFeilds<F extends keyof TreeType>(id: EntityId, fields: F[]): (F extends infer T extends keyof TreeType ? { [key in T]: TreeType[F]; } : never) | undefined;
    getAll(): TreeType[];
    setAll(data: Record<EntityId, TreeType> | readonly TreeType[]): void;
    useAll(): {
        get: TreeType[];
        set: default_2.Dispatch<default_2.SetStateAction<TreeType[]>>;
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
    getEntity(): Record<EntityId, TreeType>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

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

export declare function useAsyncEffect(callback: () => Promise<void>, deps?: any[], cleanUp?: (deps: any[]) => void): void;

export declare function useAsyncMemo<T>(callback: () => Promise<T>, deps?: any[], cleanUp?: (deps: any[]) => void): T | null;

export declare function useColorMerge<T extends Partial<Record<CssColorKeys, ColorIds | ReturnColorHandelFunction>>>(): (...args: (Nothing | ColorIds | T)[]) => Partial<Record<keyof T, string>>;

export declare function useCopyState<T>(initData: T | (() => T)): {
    get: T;
    set: default_2.Dispatch<default_2.SetStateAction<T>>;
};

export declare function useDref<T>(firstState: T, upload: (val: T) => any, download?: (val: T) => T): {
    get: T;
    set: default_2.Dispatch<default_2.SetStateAction<T>>;
};

export declare function useEffectDelay(fn: () => Promise<void> | void | (() => Promise<void> | void), deps?: any[], time?: number): boolean;

export declare const useIdleStatus: <T>(fn: () => Promise<T>, deps?: any[]) => {
    status: {
        get: "ready" | QueryStatus;
        set: default_2.Dispatch<default_2.SetStateAction<"ready" | QueryStatus>>;
    };
    data: {
        get: T | null;
        set: default_2.Dispatch<default_2.SetStateAction<T | null>>;
    };
    error: {
        get: any;
        set: default_2.Dispatch<any>;
    };
};

export declare function useMemoDelay<G>(fn: () => G, deps?: any[], time?: number): [boolean, G | null];

export declare function usePublicCommands(): Command[];

export declare function usePublicCommandsFilter(): {
    keys: Key[];
    commandId: string;
    label?: string;
    commands?: (Command["commandId"] | PayloadAction<any> | number)[];
    private?: boolean;
    blocked?: boolean;
}[];

export declare type UserDB = Partial<{
    name: string | null;
    email: string | null;
    phone: string | null;
    photo: string | null;
}>;

export declare const verifieCapatcha: () => Promise<RecaptchaVerifier>;

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

export declare const viewHooks: {
    getFull(): InitState<any, "viewId">;
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
    setWriteStatus(status?: InitState<View, "viewId">["writeStatus"]): void;
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
        set: default_2.Dispatch<default_2.SetStateAction<{
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
    getOneFeild<F extends keyof View>(recordId: EntityId, field: F): ({
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
    setOneFeild<F extends keyof View>(id: EntityId, field: F, value: View[F]): void;
    useOneFeild<F extends keyof View>(recordeId: EntityId, field: F): {
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
        set: default_2.Dispatch<default_2.SetStateAction<({
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
    getOneFeilds<F extends keyof View>(id: EntityId, fields: F[]): (F extends infer T extends keyof View ? { [key in T]: View[F]; } : never) | undefined;
    getAll(): View[];
    setAll(data: Record<EntityId, View> | readonly View[]): void;
    useAll(): {
        get: View[];
        set: default_2.Dispatch<default_2.SetStateAction<View[]>>;
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
    getEntity(): Record<EntityId, View>;
    getLoadingTime(): number;
    setLoadingTime(time: number): void;
    useLoadingTime(): void;
    getChanged(): boolean;
    setChanged(value: boolean): void;
    useChanged(): void;
};

export { }
