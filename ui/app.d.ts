import { OpenDialogOptions } from 'electron';
import { PayloadAction } from '@reduxjs/toolkit';
import { QueryStatus } from 'react-query';
import { Root } from 'react-dom/client';

declare interface Action {
    actionId: string;
    status: QueryStatus | "ready";
    args?: any;
    output?: any;
}

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

declare interface Command {
    commandId: string;
    label?: string;
    commands?: (Command["commandId"] | PayloadAction<any> | number)[];
    private?: boolean;
    blocked?: boolean;
}

declare interface FileProps extends OpenDialogOptions {
    nullable: boolean;
}

declare interface FileProps_2 extends OpenDialogOptions {
    nullable: boolean;
}

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

declare interface Lang extends Record<string, string> {
    word: string;
}

declare type MebePromise<T> = T | Promise<T>;

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
    file: Partial<FileProps_2>;
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

export { }
