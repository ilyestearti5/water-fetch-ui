declare const _default: {
    data: {
        "activity/position.enum": {
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
        "camera/clear/time.number": {
            config: {
                max: number;
                min: number;
            };
            def: number;
            desc: string;
            name: string;
        };
        "camera/loading/time.number": {
            def: number;
            desc: string;
            name: string;
        };
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
        "visibility/activity.boolean": {
            def: boolean;
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
        "window/scroll/animation.boolean": {
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
};
export default _default;
