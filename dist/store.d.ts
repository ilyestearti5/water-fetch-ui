export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    keyboard: import("@/reducers/Global/keyboard.slice").KeyState;
    object: import("@/reducers/Object/object.slice").ObjectTemp;
    title: import("./reducers/Global/title.slice").TitleInitState;
    commands: import("@reduxjs/toolkit").EntityState<import("@/data/system/command.model").Command, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "commandId";
        name: "commands";
        loadingTime: number;
        changed: boolean;
    };
    keys: import("@reduxjs/toolkit").EntityState<import("@/data/system/keys.model").Key, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "keyId";
        name: "keys";
        loadingTime: number;
        changed: boolean;
    };
    notifications: import("@reduxjs/toolkit").EntityState<import("@/data/system/notifications.model").NotificationType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "notifications";
        loadingTime: number;
        changed: boolean;
    };
    views: import("@reduxjs/toolkit").EntityState<import("@/data/system/views.model").View, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "viewId";
        name: "views";
        loadingTime: number;
        changed: boolean;
    };
    positions: import("@reduxjs/toolkit").EntityState<import("@/data/system/positions.model").Positions, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "positionId";
        name: "positions";
        loadingTime: number;
        changed: boolean;
    };
    slot: import("@reduxjs/toolkit").EntityState<import("@/data/system/slot.slice").SlotType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "slotId";
        name: "slot";
        loadingTime: number;
        changed: boolean;
    };
    settings: import("@reduxjs/toolkit").EntityState<import("@/reducers/Settings/settings.model").Setting<keyof import("./reducers/Settings/SettingConfig").SettingConfig>, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "settingId";
        name: "settings";
        loadingTime: number;
        changed: boolean;
    };
    feilds: import("@reduxjs/toolkit").EntityState<import("@/data/system/feild.model").Feild, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "feildId";
        name: "feilds";
        loadingTime: number;
        changed: boolean;
    };
    actions: import("@reduxjs/toolkit").EntityState<import("@/data/system/actions.model").Action, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "actionId";
        name: "actions";
        loadingTime: number;
        changed: boolean;
    };
    color: import("@reduxjs/toolkit").EntityState<import("@/data/system/colors.model").Color, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "colorId";
        name: "color";
        loadingTime: number;
        changed: boolean;
    };
    tree: import("@reduxjs/toolkit").EntityState<import("@/data/system/tree.model").Tree, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "treeId";
        name: "tree";
        loadingTime: number;
        changed: boolean;
    };
    logs: import("@reduxjs/toolkit").EntityState<import("@/data/system/logs.model").Log, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "logId";
        name: "logs";
        loadingTime: number;
        changed: boolean;
    };
    langs: import("@reduxjs/toolkit").EntityState<import("./data/system/lang.model").Lang, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "langId";
        name: "langs";
        loadingTime: number;
        changed: boolean;
    };
    cahser: import("@reduxjs/toolkit").EntityState<import("./data/system/cash.model").Casher, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "linkId";
        name: "cahser";
        loadingTime: number;
        changed: boolean;
    };
    toasts: import("@reduxjs/toolkit").EntityState<import("./data/system/toasts.model").ToastType, import("@reduxjs/toolkit").EntityId> & {
        saved: boolean;
        status: string;
        writeStatus: string;
        id: "id";
        name: "toasts";
        loadingTime: number;
        changed: boolean;
    };
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        keyboard: import("@/reducers/Global/keyboard.slice").KeyState;
        object: import("@/reducers/Object/object.slice").ObjectTemp;
        title: import("./reducers/Global/title.slice").TitleInitState;
        commands: import("@reduxjs/toolkit").EntityState<import("@/data/system/command.model").Command, import("@reduxjs/toolkit").EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: "commandId";
            name: "commands";
            loadingTime: number;
            changed: boolean;
        };
        keys: import("@reduxjs/toolkit").EntityState<import("@/data/system/keys.model").Key, import("@reduxjs/toolkit").EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: "keyId";
            name: "keys";
            loadingTime: number;
            changed: boolean;
        };
        notifications: import("@reduxjs/toolkit").EntityState<import("@/data/system/notifications.model").NotificationType, import("@reduxjs/toolkit").EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: "id";
            name: "notifications";
            loadingTime: number;
            changed: boolean;
        };
        views: import("@reduxjs/toolkit").EntityState<import("@/data/system/views.model").View, import("@reduxjs/toolkit").EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: "viewId";
            name: "views";
            loadingTime: number;
            changed: boolean;
        };
        positions: import("@reduxjs/toolkit").EntityState<import("@/data/system/positions.model").Positions, import("@reduxjs/toolkit").EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: "positionId";
            name: "positions";
            loadingTime: number;
            changed: boolean;
        };
        slot: import("@reduxjs/toolkit").EntityState<import("@/data/system/slot.slice").SlotType, import("@reduxjs/toolkit").EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: "slotId";
            name: "slot";
            loadingTime: number;
            changed: boolean;
        };
        settings: import("@reduxjs/toolkit").EntityState<import("@/reducers/Settings/settings.model").Setting<keyof import("./reducers/Settings/SettingConfig").SettingConfig>, import("@reduxjs/toolkit").EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: "settingId";
            name: "settings";
            loadingTime: number;
            changed: boolean;
        };
        feilds: import("@reduxjs/toolkit").EntityState<import("@/data/system/feild.model").Feild, import("@reduxjs/toolkit").EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: "feildId";
            name: "feilds";
            loadingTime: number;
            changed: boolean;
        };
        actions: import("@reduxjs/toolkit").EntityState<import("@/data/system/actions.model").Action, import("@reduxjs/toolkit").EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: "actionId";
            name: "actions";
            loadingTime: number;
            changed: boolean;
        };
        color: import("@reduxjs/toolkit").EntityState<import("@/data/system/colors.model").Color, import("@reduxjs/toolkit").EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: "colorId";
            name: "color";
            loadingTime: number;
            changed: boolean;
        };
        tree: import("@reduxjs/toolkit").EntityState<import("@/data/system/tree.model").Tree, import("@reduxjs/toolkit").EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: "treeId";
            name: "tree";
            loadingTime: number;
            changed: boolean;
        };
        logs: import("@reduxjs/toolkit").EntityState<import("@/data/system/logs.model").Log, import("@reduxjs/toolkit").EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: "logId";
            name: "logs";
            loadingTime: number;
            changed: boolean;
        };
        langs: import("@reduxjs/toolkit").EntityState<import("./data/system/lang.model").Lang, import("@reduxjs/toolkit").EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: "langId";
            name: "langs";
            loadingTime: number;
            changed: boolean;
        };
        cahser: import("@reduxjs/toolkit").EntityState<import("./data/system/cash.model").Casher, import("@reduxjs/toolkit").EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: "linkId";
            name: "cahser";
            loadingTime: number;
            changed: boolean;
        };
        toasts: import("@reduxjs/toolkit").EntityState<import("./data/system/toasts.model").ToastType, import("@reduxjs/toolkit").EntityId> & {
            saved: boolean;
            status: string;
            writeStatus: string;
            id: "id";
            name: "toasts";
            loadingTime: number;
            changed: boolean;
        };
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
