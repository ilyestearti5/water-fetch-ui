import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare const ApplicationsLayout: () => JSX_2.Element;

export declare const BottomSheetLayout: ({ children, min, max }: BottomSheetLayoutProps) => JSX_2.Element;

export declare interface BottomSheetLayoutProps {
    children?: default_2.ReactNode;
    min?: number | `${number}${size}`;
    max?: number | `${number}${size}`;
}

export declare interface CameraDeviceInfo {
    label: string;
    id: string;
}

export declare function CameraView(): JSX_2.Element;

export declare function Commands(): JSX_2.Element;

export declare const CongratulationsView: default_2.MemoExoticComponent<() => JSX_2.Element>;

export declare const dataKeyboard: {
    normal: string;
    shift: string;
    alt: string;
}[][];

export declare const DateLayout: () => JSX_2.Element;

export declare function DevReadingHTML(): JSX_2.Element;

export declare const DialogBoxLayout: () => JSX_2.Element;

export declare const emailRegExp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,} *$";

export declare const EnumLayout: () => JSX_2.Element;

export declare function FindCommandInput(): JSX_2.Element;

export declare function FindSettingFeild(): JSX_2.Element;

export declare const FixedProfileView: ({ children }: FixedProfileViewProps) => JSX_2.Element;

export declare interface FixedProfileViewProps extends ProfileViewProps {
}

export declare function getTree(inputs?: string[], sep?: string): TreeReturn[];

export declare function Header({ children }: HeaderProps): JSX_2.Element;

export declare function HeaderNotification(): JSX_2.Element;

export declare interface HeaderProps {
    children?: default_2.ReactNode;
}

export declare const HeaderSettings: () => JSX_2.Element;

export declare const headerVisibility = "visibility/header.boolean";

export declare const IframeLayout: () => JSX_2.Element;

export declare const KeyboardButton: ({ isActive, className, ...props }: KeyboardButtonProps) => JSX_2.Element;

export declare interface KeyboardButtonProps extends ReactElement<HTMLSpanElement> {
    isActive?: boolean;
}

export declare function KeyboardShortcuts(): JSX_2.Element;

export declare const KeyboardView: () => JSX_2.Element;

export declare const Layoutes: ({ children }: LayoutesProps) => JSX_2.Element;

export declare interface LayoutesProps {
    children: React.ReactNode;
}

export declare const LeftSide: ({ children }: LeftSideProps) => JSX_2.Element;

export declare interface LeftSideProps {
    children?: default_2.ReactNode;
}

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

export declare const LoginContent: () => JSX_2.Element;

export declare const LoginPage: () => JSX_2.Element;

export declare const MenuList: () => JSX_2.Element;

export declare const MenuRecord: ({ item: props, status, handelFocus, handelSubmit }: ListItemProps<Partial<Electron.MenuItem>>) => JSX_2.Element;

export declare const NotifaysSlot: () => JSX_2.Element;

export declare function Notifications(): JSX_2.Element;

export declare const PDFView: () => JSX_2.Element;

export declare const ProfileContent: ({ children }: ProfileContentProps) => JSX_2.Element;

export declare interface ProfileContentProps {
    children?: any;
}

export declare const ProfileView: ({ children }: ProfileViewProps) => JSX_2.Element;

export declare interface ProfileViewProps extends ProfileContentProps {
}

declare type ReactElement<T = HTMLDivElement> = React.DetailedHTMLProps<React.HTMLAttributes<T>, T>;

export declare const RightSide: ({ children }: RightSideProps) => JSX_2.Element;

export declare interface RightSideProps {
    children?: React.ReactNode;
}

export declare function Settings(): JSX_2.Element;

export declare function SettingsList(): JSX_2.Element;

export declare function SettingsSide(): JSX_2.Element;

export declare function SettingsTree(): JSX_2.Element;

export declare function SettingsView(): JSX_2.Element;

export declare const SettingUpdateView: () => JSX_2.Element;

export declare function SettingUpdating({ settingId }: SettingUpdatingProps): JSX_2.Element;

export declare interface SettingUpdatingProps {
    settingId: string;
}

export declare const SignupPage: () => JSX_2.Element;

export declare type size = "px" | "rem" | "em" | "vh" | "vw" | "vmin" | "vmax";

export declare const ToastItem: ({ item, index }: ToastItemProps) => JSX_2.Element;

export declare interface ToastItemProps {
    item: ToastType;
    index: number;
}

export declare const Toasts: () => JSX_2.Element;

declare interface ToastType {
    id?: string;
    message: string | number;
    type?: "info" | "warning" | "error" | "success";
    time?: number;
}

export declare interface TreeReturn {
    data: string;
    innerTree?: TreeReturn[];
}

export declare function UpdateKeyboardShortcut(): JSX_2.Element;

export declare function UserSetting(): JSX_2.Element;

declare function Window_2({ children }: WindowProps): JSX_2.Element;
export { Window_2 as Window }

export declare interface WindowProps {
    children?: default_2.ReactNode;
}

export { }
