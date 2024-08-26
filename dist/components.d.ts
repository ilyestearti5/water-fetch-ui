import { default as default_2 } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { OpenDialogOptions } from 'electron';

export declare function Anchor({ className, style, ...props }: AnchorProps): JSX_2.Element;

export declare type AnchorProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export declare function ArrayFeild({ state, id }: ArrayFeildProps): JSX_2.Element;

export declare type ArrayFeildProps = FeildGeneralProps<string[] | undefined, SettingConfig["array"]>;

export declare function AsyncComponent({ render, error, deps, loading }: AsyncComponentProps): JSX_2.Element;

export declare interface AsyncComponentProps {
    render: () => Promise<JSX.Element>;
    error?: JSX.Element;
    loading?: JSX.Element;
    deps?: any[];
}

export declare function BlurOverlay({ className, animted, style, hidden, onLoadContent, children, onTransitionEnd, ...props }: OverlaysProps): JSX_2.Element;

export declare function BooleanFeild({ state, config, id }: BooleanFeildProps): JSX_2.Element;

export declare type BooleanFeildProps = FeildGeneralProps<boolean | null, SettingConfig["boolean"]>;

export declare function Button({ children, className, icon, style, iconClassName, onPointerDown, onPointerLeave, onPointerUp, onMouseEnter, onMouseLeave, ...props }: ButtonProps): JSX_2.Element;

export declare type ButtonProps = default_2.DetailedHTMLProps<default_2.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & IconProps;

export declare const Card: ({ className, style, ...props }: CardProps) => JSX_2.Element;

export declare type CardProps = ReactElement;

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

declare type ClickProps<T> = ReactElement<T> & IconProps;

export declare const CloseActionIcon: ({ color }: SVGIconProps) => JSX_2.Element;

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

export declare interface ComponentVarFastListProps<T, D extends Record<string, any>> {
    style: default_2.CSSProperties;
    data: T;
    index: number;
    scrollToMe(margin?: number | "top" | "bottom"): void;
    scrollByIndex(index: number): void;
    scroll: number;
    deps: D;
}

export declare const ContentOfImageView: () => JSX_2.Element;

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

export declare const DialogBox: () => JSX_2.Element;

export declare function DownOverlay({ hidden, animted, className, style, children, onLoadContent, onTransitionEnd, ...props }: OverlaysProps): JSX_2.Element;

export declare const EmptyComponent: ({ children }: EmptyComponentProps) => JSX_2.Element;

export declare interface EmptyComponentProps {
    children?: ReactElement["children"];
}

export declare function EnumFeild({ config, id, state }: EnumFeildProps): JSX_2.Element;

export declare type EnumFeildProps = FeildGeneralProps<string | undefined, SettingConfig["enum"]>;

export declare const EnumList: default_2.MemoExoticComponent<({ list }: EnumListProps) => JSX_2.Element>;

export declare interface EnumListProps {
    list: {
        isChoised: boolean;
        item?: Required<SettingConfig["enum"]>["list"][number];
    }[];
}

export declare function FastList<T>({ focusId, itemSize, slotId, component, handelSkip, data, countLastItems, overflow: { top, bottom } }: FastListProps<T>): JSX_2.Element;

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

export declare let Focus: default_2.ForwardRefExoticComponent<Omit<FocusProps, "ref"> & default_2.RefAttributes<HTMLDivElement>>;

export declare interface FocusProps extends ReactElement {
    focusId?: string;
    ignoreOutline?: boolean;
}

declare type FunctionComponentListItem<T> = (props: ListItemProps<T>) => JSX.Element;

export declare const getText: (content: TextProps["content"]) => string;

export declare function Hours(): JSX_2.Element;

export declare const Icon: ({ icon, iconClassName }: IconProps) => JSX_2.Element;

export declare interface IconProps {
    icon?: FontAwesomeIconProps["icon"];
    iconClassName?: ReactElement["className"];
}

export declare function Icons(): JSX_2.Element;

declare function Image_2({ className, alt, src, children, style, ...props }: ImageProps): JSX_2.Element;
export { Image_2 as Image }

export declare function ImageFeild({ state, config }: ImageFeildProps): JSX_2.Element;

declare type ImageFeildProps = FeildGeneralProps<SettingValueType["image"], SettingConfig["image"]>;

declare interface ImageProps extends Omit<default_2.DetailedHTMLProps<default_2.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "alt"> {
    alt?: any;
}

export declare function InnerText({ component, text }: InnerTextProps): JSX_2.Element;

export declare interface InnerTextProps {
    component: (props: {
        text: string;
    }) => JSX.Element;
    text: string;
}

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

export declare function MarkDown({ value }: {
    value: string;
}): JSX_2.Element;

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

declare interface OverlaysProps extends ReactElement {
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

export declare function PinFeild({ id, config, state }: PinFeildProps): JSX_2.Element;

export declare type PinFeildProps = FeildGeneralProps<number | undefined, SettingConfig["pin"]>;

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

export declare function Starts({ length, starts, onSubmit }: StartsProps): JSX_2.Element;

declare interface StartsProps {
    length?: number;
    starts?: number;
    onSubmit?: (e: number) => any;
}

declare type State<T = undefined> = {
    get: T;
    set: React.Dispatch<React.SetStateAction<T>>;
};

export declare function StringFeild({ state, config, id }: StringFeildProps): JSX_2.Element;

export declare type StringFeildProps = FeildGeneralProps<string | undefined, SettingConfig["string"]>;

export declare const StyledButton: ({ className, ...props }: ClickProps<HTMLButtonElement>) => JSX_2.Element;

export declare interface SVGIconProps {
    color?: string;
}

export declare function Tab({ children, icon, className, iconClassName, isActive, style, ...props }: TabProps): JSX_2.Element;

export declare interface TabProps extends ClickProps<HTMLSpanElement> {
    isActive?: boolean;
}

declare function Text_2({ content }: TextProps): JSX_2.Element;
export { Text_2 as Text }

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

export declare interface TextProps {
    content: string;
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

export declare function VarFastList<T, D extends Record<string, any>>({ data, deps, itemSize, Render }: VarFastListProps<T, D>): JSX_2.Element;

export declare interface VarFastListProps<T, D extends Record<string, any>> {
    data?: T[];
    deps: D;
    itemSize: (row: T, index: number) => number;
    Render: (props: ComponentVarFastListProps<T, D>) => JSX.Element;
}

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
