import { default as default_2 } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { OpenDialogOptions } from 'electron';
import { QueryStatus } from 'react-query';

export declare interface A<T, L> {
    state: L;
    data: T[];
}

export declare function Anchor({ className, style, ...props }: AnchorProps): JSX_2.Element;

export declare type AnchorProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export declare function ArrayFeild({ state, id, config }: ArrayFeildProps): JSX_2.Element;

export declare type ArrayFeildProps = FeildGeneralProps<string[] | undefined, SettingConfig["array"]>;

export declare function AsyncComponent({ render, error, deps, loading }: AsyncComponentProps): JSX_2.Element;

export declare interface AsyncComponentProps {
    render: () => Promise<JSX.Element>;
    error?: JSX.Element;
    loading?: JSX.Element;
    deps?: any[];
}

export declare const BallLoading: ({ balls, ballClassName, ballStyle, icon, iconClassName }: BallLoadingProps) => JSX_2.Element;

export declare interface BallLoadingProps extends ReactElement {
    balls?: number;
    ballClassName?: string;
    ballStyle?: React.CSSProperties;
    icon?: IconProps["icon"];
    iconClassName?: string;
}

export declare function BlurOverlay({ className, animted, style, hidden, onLoadContent, children, onTransitionEnd, ...props }: OverlaysProps): JSX_2.Element;

export declare function BooleanFeild({ state, config, id }: BooleanFeildProps): JSX_2.Element;

export declare type BooleanFeildProps = FeildGeneralProps<boolean | null, SettingConfig["boolean"]>;

export declare function Button({ children, leftIcon, rightIcon, topIcon, bottomIcon, className, icon, style, iconClassName, onPointerDown, onPointerLeave, onPointerUp, onMouseEnter, onMouseLeave, ...props }: ButtonProps): JSX_2.Element;

export declare type ButtonProps = default_2.DetailedHTMLProps<default_2.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & IconProps & Partial<Record<`${"left" | "top" | "right" | "bottom"}Icon`, IconProps["icon"]>>;

export declare const Card: ({ className, style, ...props }: CardProps) => JSX_2.Element;

export declare type CardProps = ReactElement;

export declare const CardWait: ({ className, children, ...props }: CardWaitProps) => JSX_2.Element;

export declare interface CardWaitProps extends ReactElement {
}

export declare function CenterWindowDrag({ children }: CenterWindowDragProps): JSX_2.Element;

export declare interface CenterWindowDragProps {
    children?: React.ReactNode;
}

/**
 *
 * For Local State
 */
export declare const ChangableComponent: ({ onContentChange, ...props }: ChangableComponentProps) => JSX_2.Element;

export declare interface ChangableComponentProps extends default_2.DetailedHTMLProps<default_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onContentChange?: (rect: DOMRect) => any;
}

export declare const CircleLoading: ({ className, circleClassName, ...props }: CircleLoadingProps) => JSX_2.Element;

declare interface CircleLoadingProps extends ReactElement {
    circleClassName?: string;
}

export declare function CircleTip({ children, className, icon, style, iconClassName, onPointerDown, onPointerLeave, onPointerUp, onMouseEnter, onMouseLeave, ...props }: CircleTipProps): JSX_2.Element;

export declare interface CircleTipProps extends ClickProps<HTMLButtonElement> {
}

export declare const ClickedView: ({ children, className, style, onPointerDown, onPointerLeave, onPointerUp, onMouseEnter, onMouseLeave, ...props }: ClickedViewProps) => JSX_2.Element;

export declare interface ClickedViewProps extends ReactElement {
}

declare type ClickProps<T> = ReactElement<T> & IconProps;

export declare const CloseActionIcon: ({ color }: SVGIconProps) => JSX_2.Element;

declare type ColorIds = keyof typeof data_2;

export declare function ColorsList(): JSX_2.Element;

export declare interface CommandLine {
    id: string;
    content?: string;
    keyPanding?: string | string[];
    tools?: {
        onClick: () => void;
        icon?: IconProp;
    }[];
    checked?: boolean;
    sub?: string;
}

export declare const DarkLightIcon: () => JSX_2.Element;

declare const data: {
    activity: {};
    keyboardShortcuts: {};
    menuBar: {};
    menuBars: {};
    profile: {};
    title: {};
    userSettings: {};
};

declare const data_2: {
    autoCompleteInput: {
        default: string;
    };
    "bg.selection": {
        dark: string;
        light: string;
    };
    "bottom-sheeet.background": {};
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
    "field.background": {
        default: string;
    };
    "focus.text": {
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
    "notifay.error": {
        default: string;
    };
    "notifay.error.text": {
        default: string;
    };
    "notifay.info": {
        default: string;
    };
    "notifay.info.text": {
        default: string;
    };
    "notifay.success": {
        default: string;
    };
    "notifay.success.text": {
        default: string;
    };
    "notifay.warning": {
        default: string;
    };
    "notifay.warning.text": {
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
    secondary: {
        dark: string;
        light: string;
    };
    "secondary.background": {
        dark: string;
        light: string;
    };
    "secondary.content": {
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
    "submit.color": {};
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
    "warning.text": {
        default: string;
    };
    opacity: {
        dark: string;
        light: string;
    };
};

export declare function DataBaseManagmentList({ data }: DataBaseManagmentListProps): JSX_2.Element;

export declare interface DataBaseManagmentListProps {
    data: Record<string, {
        onSubmit?: (line: CommandLine) => void;
        lines?: CommandLine[];
    }>;
}

export declare function DateFeild({ state, config, id }: DateFeildProps): JSX_2.Element;

export declare type DateFeildProps = FeildGeneralProps<SettingValueType["date"] | undefined, SettingConfig["date"]>;

export declare const dateToStringForInput: (date: Date, to?: SettingConfig["date"]["format"]) => string;

export declare function DownOverlay({ hidden, animted, className, style, children, onLoadContent, onTransitionEnd, ...props }: OverlaysProps): JSX_2.Element;

export declare const EmptyComponent: ({ children }: EmptyComponentProps) => JSX_2.Element;

export declare interface EmptyComponentProps {
    children?: ReactElement["children"];
}

export declare function EnumFeild({ config, id, state }: EnumFeildProps): JSX_2.Element;

export declare type EnumFeildProps = FeildGeneralProps<string | undefined, SettingConfig["enum"]>;

export declare function FastList<T>({ focusId, itemSize, slotId, component, handelSkip, data, countLastItems, overflow: { top, bottom }, ...props }: FastListProps<T>): JSX_2.Element;

export declare interface FastListItemProps<T> extends ReactElement {
    status: {
        [key in `is${"Selected" | "Focused" | "Skiped" | "Submited"}`]: boolean;
    };
    data: T;
    index: number;
    handel: {
        focus: () => void;
        submit: () => void;
        select: (only: boolean, value: boolean) => void;
        skip: (only: boolean, value: boolean) => void;
    };
}

export declare interface FastListProps<T> {
    focusId: string;
    slotId: string;
    itemSize: number;
    maxSize?: number;
    minSize?: number;
    data: T[];
    component: (props: FastListItemProps<T>) => JSX.Element;
    handelSkip?: (props: {
        data: T;
        index: number;
    }) => boolean;
    countLastItems?: number;
    overflow?: Partial<{
        top: number;
        bottom: number;
        left: number;
        right: number;
    }>;
}

export declare function Feild({ inputName, selectWhenFocusIn, placeholder, controlsPosition, className, value: _v, rows, style, controls, onFocus, onBlur, acceptHistory, propositions, ...props }: FeildProps): JSX_2.Element;

declare interface Feild_2 {
    fieldId: string;
    selection: TextAreaProps["selection"];
    value: string;
    controls: Record<string, {
        succ?: string;
        err?: string;
    }>;
    history?: string[];
}

declare interface FeildGeneralProps<T, C extends object> {
    id: string;
    state: State<T>;
    config?: C;
}

export declare interface FeildProps extends TextAreaProps {
    inputName: string;
    selectWhenFocusIn?: boolean;
    help?: any;
    controls?: Feild_2["controls"];
    controlsPosition?: "top" | "bottom";
    maxRows?: number;
    minRows?: number;
    acceptHistory?: boolean;
    propositions?: string[];
}

export declare function FileFeild({ state, config, id }: FileFeildProps): JSX_2.Element;

export declare type FileFeildProps = FeildGeneralProps<SettingValueType["file"], SettingConfig["file"]>;

declare interface FileProps extends OpenDialogOptions {
    nullable: boolean;
}

export declare function FilterFeild({ id, config, state }: FilterFeildProps): JSX_2.Element;

declare type FilterFeildProps = FeildGeneralProps<string[] | undefined, SettingConfig["filter"]>;

export declare interface FilterListItemProps {
    isSelected: boolean;
    item: Required<SettingConfig["filter"]>["list"][number];
    toggle: Function;
}

export declare let Focus: default_2.ForwardRefExoticComponent<Omit<FocusProps, "ref"> & default_2.RefAttributes<HTMLDivElement>>;

export declare interface FocusProps extends ReactElement {
    focusId?: string;
    ignoreOutline?: boolean;
}

export declare const FullField: ({ list, id: parentId, state }: FullFieldProps) => JSX_2.Element;

export declare interface FullFieldProps {
    list: Record<string, {
        label: string;
        type: keyof SettingValueType;
        config: SettingConfig[keyof SettingValueType];
        onNext?(prop: FullFieldRecordNextCallbackParams): any;
        icon?: IconProps["icon"];
    }>;
    state: State<Record<string, Setting<keyof SettingValueType>["value"]>>;
    id: string;
}

export declare function FullFieldRecord<T extends keyof SettingValueType>({ value, onChange, type, config: aConfig, id }: FullFieldRecordProps<T>): JSX_2.Element;

export declare interface FullFieldRecordNextCallbackParams {
    stop(): void;
    currentIndex: number;
    state: FullFieldProps["state"]["get"];
    currentValue: FullFieldRecordNextCallbackParams["state"][string];
}

export declare interface FullFieldRecordProps<T extends keyof SettingValueType> {
    onChange: default_2.Dispatch<default_2.SetStateAction<Setting<T>["value"]>>;
    value: Setting<T>["value"];
    id: string;
    config: SettingConfig[T];
    type: T;
}

declare type FunctionComponentListItem<T> = (props: ListItemProps<T>) => JSX.Element;

export declare function Hours(): JSX_2.Element;

export declare const Icon: ({ icon, iconClassName }: IconProps) => JSX_2.Element;

export declare interface IconProps {
    icon?: FontAwesomeIconProps["icon"];
    iconClassName?: ReactElement["className"];
}

export declare function Icons(): JSX_2.Element;

export declare const iconsFileFeild: Record<QueryStatus | "ready", IconProps["icon"]>;

declare function Image_2({ className, alt, src, children, style, ...props }: ImageProps): JSX_2.Element;
export { Image_2 as Image }

export declare function ImageFeild({ state, config }: ImageFeildProps): JSX_2.Element;

declare type ImageFeildProps = FeildGeneralProps<SettingValueType["image"], SettingConfig["image"]>;

declare interface ImageProps extends Omit<default_2.DetailedHTMLProps<default_2.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "alt"> {
    alt?: any;
}

export declare function InfinityScroll<T, L>({ onUpdate, onScroll, onLoading, updateWhere, onDone, onError, className, onDataChange, initData, initState, ...props }: InfinityScrollProps<T, L>): JSX_2.Element;

export declare interface InfinityScrollProps<T, L> extends ReactElement {
    render: (data: T, index: number) => JSX.Element;
    onUpdate: (options: {
        data: T[];
        state?: L;
        setState: (info: L) => void;
    }) => A<T, L> | Promise<A<T, L>>;
    onDone?: () => void;
    onLoading?: () => JSX.Element | undefined;
    onError?: () => JSX.Element | undefined;
    onDataChange?: (data: T[]) => void;
    initState?: L;
    initData?: T[];
    updateWhere?: number | Function;
}

export declare interface InnerTextProps extends TranslateProps {
    component: (props: {
        result: string;
        isLoading: boolean;
    }) => JSX.Element;
}

export declare function InnerTranslate({ component, content, lang }: InnerTextProps): JSX_2.Element;

export declare const Input: default_2.ForwardRefExoticComponent<Omit<InputProps, "ref"> & default_2.RefAttributes<HTMLInputElement>>;

export declare interface InputProps extends default_2.DetailedHTMLProps<default_2.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    onValueChange?: (value: string, number: number) => any;
    selectOnFocus?: boolean;
}

export declare function JoinComponentBy({ joinComponent, list }: JoinComponentByProps): JSX.Element[];

export declare interface JoinComponentByProps {
    list: JSX.Element[];
    joinComponent: JSX.Element;
}

export declare function KeyPanding({ shortcut, className, ...props }: KeyPandingProps): JSX_2.Element;

export declare interface KeyPandingProps extends ReactElement<HTMLSpanElement> {
    shortcut: string | string[];
}

export declare function LargeButton({ "aria-selected": selected, children, className, icon, iconClassName, onBlur, onFocus, onMouseEnter, onMouseLeave, onPointerDown, onPointerUp, style, ...props }: LargeButtonProps): JSX_2.Element;

export declare type LargeButtonProps = ClickProps<HTMLButtonElement>;

export declare function Line(): JSX_2.Element;

export declare function LineLoading(): JSX_2.Element;

export declare function List<T>({ slotId, component, data, skipFn }: ListProps<T>): JSX_2.Element;

declare interface ListItemProps<T> extends ReactElement {
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

export declare interface ListProps<T> {
    slotId: string;
    data: T[];
    component: FunctionComponentListItem<T>;
    skipFn?: (item: T, index: number) => boolean;
}

export declare function MarkDown({ value }: MarkDownProps): JSX_2.Element;

export declare interface MarkDownProps {
    value?: string;
}

export declare const MaximizeActionIcon: ({ color }: SVGIconProps) => JSX_2.Element;

export declare const MinimizeActionIcon: ({ color }: SVGIconProps) => JSX_2.Element;

export declare function MultiScreenPage({ pages, focused }: MultiScreenPageProps): JSX_2.Element;

declare interface MultiScreenPageProps {
    pages?: JSX.Element[];
    focused?: number;
}

export declare function Note({ onClick, className, children, iconClassName, ...props }: NoteProps): JSX_2.Element;

export declare type NoteProps = ClickProps<HTMLSpanElement>;

declare type Nothing = false | 0 | null | "" | undefined;

export declare function NumberFeild({ state, config, id }: NumberFeildProps): JSX_2.Element;

export declare type NumberFeildProps = FeildGeneralProps<number | undefined | null, SettingConfig["number"]>;

export declare function ObjectFeild({ state, id }: ObjectFeildProps): JSX_2.Element;

export declare type ObjectFeildProps = FeildGeneralProps<Record<string, string> | undefined, SettingConfig["object"]>;

export declare const objectIfPrefix: (id: string) => string;

export declare interface OverlaysProps extends ReactElement {
    onLoadContent?: () => void;
    animted?: boolean;
}

export declare function PanelSide({ position, style, className, children, ...props }: PanelSideProps): JSX_2.Element;

export declare interface PanelSideProps extends ReactElement {
    position: position;
}

export declare function Password({ eays, state, onFocus, onBlur, className, style, value, type, ...props }: PasswordProps): JSX_2.Element;

export declare function PasswordFeild({ state, config, id }: PasswordFeildProps): JSX_2.Element;

export declare type PasswordFeildProps = FeildGeneralProps<string | undefined, SettingConfig["password"]>;

export declare interface PasswordProps extends default_2.DetailedHTMLProps<default_2.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    state: State<string | undefined>;
    eays?: boolean;
}

export declare const PinField: default_2.MemoExoticComponent<({ id, config, state }: PinFieldProps) => JSX_2.Element>;

export declare type PinFieldProps = FeildGeneralProps<string | undefined, SettingConfig["pin"]>;

declare type position = [number, number] | undefined;

export declare interface PositionProps extends default_2.DetailedHTMLProps<default_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    readonly positionId: PositionsIds | string;
}

declare type PositionsIds = keyof typeof data;

/**
 *
 * for redux state Global
 */
export declare const PositionView: ({ positionId, ...props }: PositionProps) => JSX_2.Element;

export declare const RangeFeild: default_2.FC<RangeFeildProps>;

export declare type RangeFeildProps = FeildGeneralProps<number, SettingConfig["range"]>;

declare type ReactElement<T = HTMLDivElement> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

export declare function RecorderFeild({ id, state }: RecorderFeildProps): JSX_2.Element;

export declare type RecorderFeildProps = FeildGeneralProps<string | null, {}>;

export declare function RegexpFeild({ state, id }: RegexpFeildProps): JSX_2.Element;

export declare type RegexpFeildProps = FeildGeneralProps<string | undefined, SettingConfig["regexp"]>;

export declare function ResizeView({ temp, animited, style, children, max, min, position, hidden, handelResize, className, ...props }: ResizeViewProps): JSX_2.Element;

export declare interface ResizeViewProps extends ReactElement {
    position?: "top" | "left" | "right" | "bottom";
    max?: number | ((change: number) => number);
    min?: number | ((change: number) => number);
    handelResize?: (e: default_2.MouseEvent<HTMLDivElement, MouseEvent> & {
        size: number;
        min: number;
        max: number;
    }) => any;
    temp?: string;
    animited?: boolean;
}

export declare const Scroll: default_2.ForwardRefExoticComponent<Omit<ScrollProps, "ref"> & default_2.RefAttributes<HTMLDivElement>>;

export declare interface ScrollProps extends ReactElement {
    type?: "list" | "normal";
}

export declare const SeparatedViewsLine: default_2.ForwardRefExoticComponent<Omit<SeparatedViewsLineProps, "ref"> & default_2.RefAttributes<HTMLDivElement>>;

export declare interface SeparatedViewsLineProps extends ReactElement {
    list: (JSX.Element | Nothing)[];
}

export declare const SeparatedViewsLineTitle: ({ title, rightSide }: SeparatedViewsLineTitleProps) => JSX_2.Element;

export declare interface SeparatedViewsLineTitleProps {
    title: string;
    rightSide?: ReactElement["children"];
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
        mode: ReactElement["inputMode"];
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
    array: Partial<{
        controls: Record<string, {
            succ?: string;
            err?: string;
        }> | undefined;
        addText: string;
    }>;
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
        steps: number;
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

export declare function SinglePanding({ content }: SinglePandingProps): JSX_2.Element;

export declare interface SinglePandingProps {
    content: string;
}

export declare function Slot<T>({ data, slotId, focusId, component: compo, children, handelSkipedItem, className, direction, ref, type, ...props }: SlotProps<T>): JSX_2.Element;

export declare const slotId = "enum/list";

export declare interface SlotProps<T> extends FocusProps {
    slotId: string;
    data: T[];
    direction?: (keyof T)[];
    component?: FunctionComponentListItem<T> | (keyof T)[];
    handelSkipedItem?: (data: T) => boolean;
    type?: "horizontal" | "vertical";
}

export declare function Starts({ length, direction, color, choisedIcon, unchoisedIcon, starts, onSubmit }: StartsProps): JSX_2.Element;

export declare interface StartsProps {
    length?: number;
    starts?: number;
    onSubmit?: (e: number) => any;
    color?: ColorIds;
    choisedIcon?: IconProps["icon"];
    unchoisedIcon?: IconProps["icon"];
    direction?: "vertical" | "horizontal";
}

declare type State<T = undefined> = {
    get: T;
    set: React.Dispatch<React.SetStateAction<T>>;
};

export declare function StringFeild({ state, config, id }: StringFeildProps): JSX_2.Element;

export declare type StringFeildProps = FeildGeneralProps<string | undefined, SettingConfig["string"]>;

export declare const StyledButton: ({ className, children, ...props }: ClickProps<HTMLButtonElement>) => JSX_2.Element;

export declare interface SVGIconProps {
    color?: string;
}

export declare function Tab({ children, icon, className, iconClassName, isActive, style, ...props }: TabProps): JSX_2.Element;

export declare interface TabProps extends ClickProps<HTMLSpanElement> {
    isActive?: boolean;
}

export declare const Tabs: ({ state, tabs, direction, hideLabelWhereSmalled, buttonClassName, className, style, ...props }: TabsProps) => JSX_2.Element;

export declare interface TabsProps extends ReactElement {
    buttonClassName?: string;
    state: State<string>;
    tabs?: {
        label: string;
        value: string;
        icon?: IconProps["icon"];
    }[];
    hideLabelWhereSmalled?: boolean;
    direction?: "vertical" | "horizontal";
}

export declare const TextAnimation: ({ content, time }: TextAnimationProps) => JSX_2.Element;

export declare interface TextAnimationProps {
    content?: string;
    time?: number;
}

export declare function TextArea({ className, multiLines, onChange, onKeyDown, onSelect, onSelectionChange, onValueChange, onFocus, onBlur, propositions, selection, style, tabSize, supportTab, hidden, acceptKeys, pattern, ...props }: TextAreaProps): JSX_2.Element;

export declare interface TextAreaProps extends default_2.DetailedHTMLProps<default_2.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
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

export declare function Tip({ icon, className, children, "aria-checked": checked, iconClassName, onFocus, onBlur, onMouseEnter, onMouseLeave, onPointerDown, onPointerUp, onPointerLeave, style, ...props }: TipProps): JSX_2.Element;

export declare type TipProps = ClickProps<HTMLSpanElement>;

declare interface TitleInitState {
    content: string | number | null | undefined;
    position: null | [number, number];
    x: "left" | "right" | "center";
    y: "top" | "bottom" | "center";
}

export declare function TitleProvider(): JSX_2.Element;

export declare function TitleView({ title, onClick, position: { x, y }, onMouseMove, onMouseLeave, children, canMouseOn, ...props }: TitleViewProps): JSX_2.Element;

export declare interface TitleViewProps extends default_2.DetailedHTMLProps<default_2.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    position?: {
        x?: TitleInitState["x"];
        y?: TitleInitState["y"];
    };
    canMouseOn?: boolean;
}

export declare function Translate({ content, lang }: TranslateProps): JSX_2.Element;

export declare interface TranslateProps {
    content: string;
    lang?: string;
}

export declare function Tree<T>({ treeId, tree, component, level, position, parent }: TreeProps<T>): JSX_2.Element;

declare interface TreeComponentProps<T> extends ReactElement {
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

declare interface TreeProps<T> {
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

export declare const UnMaximizeActionIcon: ({ color }: SVGIconProps) => JSX_2.Element;

export declare function UpdateData({ inputName, defaultContent, value, setValue, visibility, setVisibility, controls, placeholder }: UpdateDataProps): JSX_2.Element;

export declare interface UpdateDataProps {
    inputName: string;
    visibility: boolean;
    setVisibility: (value: boolean) => void;
    value: string;
    setValue: (value: string) => void;
    defaultContent: string;
    controls?: Feild_2["controls"];
    placeholder?: string;
}

export declare function useTextAnimation({ string, time }: {
    string?: string;
    time?: number;
}): {
    state: {
        get: string;
        set: default_2.Dispatch<default_2.SetStateAction<string>>;
    };
    value: string;
    isLoading: boolean;
};

export declare const useTranslate: (content: TranslateProps["content"], lang?: string) => [string, boolean];

export declare function ViewPage({ views, viewId }: ViewPageProps): JSX_2.Element;

export declare interface ViewPageProps {
    views: Partial<Record<string, () => JSX.Element>>;
    viewId: string;
}

export declare function ViewPanel({ ref, position: [left, top], children, style, className, ...props }: ViewPanelProps): JSX_2.Element;

export declare interface ViewPanelProps extends ReactElement {
    position: position;
}

export declare function WindowControls(): JSX_2.Element;

export declare const WindowsButton: ({ ...props }: WindowsButtonProps) => JSX_2.Element;

export declare type WindowsButtonProps = default_2.DetailedHTMLProps<default_2.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export { }
