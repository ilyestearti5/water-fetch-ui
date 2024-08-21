import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';

export declare function CameraView(): JSX_2.Element;

export declare function Commands(): JSX_2.Element;

export declare function DevReadingHTML(): JSX_2.Element;

export declare function FindCommandInput(): JSX_2.Element;

export declare function FindSettingFeild(): JSX_2.Element;

export declare const FixedProfileView: () => JSX_2.Element;

export declare function Header({ children }: HeaderProps): JSX_2.Element;

export declare function HeaderNotification(): JSX_2.Element;

declare interface HeaderProps {
    children?: default_2.ReactNode;
}

export declare const HeaderSettings: () => JSX_2.Element;

export declare function KeyboardShortcuts(): JSX_2.Element;

export declare const KeyboardView: () => JSX_2.Element;

export declare const LeftSide: ({ children }: LeftSideProps) => JSX_2.Element;

declare interface LeftSideProps {
    children?: default_2.ReactNode;
}

export declare const LeftSideView: () => JSX_2.Element;

export declare const LoginContent: () => JSX_2.Element;

export declare const LoginPage: () => JSX_2.Element;

export declare const MenuList: () => JSX_2.Element;

export declare const NotifaysSlot: () => JSX_2.Element;

export declare function Notifications(): JSX_2.Element;

export declare const PDFView: () => JSX_2.Element;

export declare const ProfileContent: () => JSX_2.Element;

export declare const ProfileView: () => JSX_2.Element;

export declare const RightSide: ({ children }: RightSideProps) => JSX_2.Element;

declare interface RightSideProps {
    children?: React.ReactNode;
}

export declare function Settings(): JSX_2.Element;

export declare function SettingsList(): JSX_2.Element;

export declare function SettingsSide(): JSX_2.Element;

export declare function SettingsTree(): JSX_2.Element;

export declare function SettingsView(): JSX_2.Element;

export declare const SettingUpdateView: () => JSX_2.Element;

export declare function SettingUpdating({ settingId }: SettingUpdatingProps): JSX_2.Element;

declare interface SettingUpdatingProps {
    settingId: string;
}

export declare const SignupPage: () => JSX_2.Element;

export declare function Test(): JSX_2.Element;

export declare const Toasts: () => JSX_2.Element;

export declare function UpdateKeyboardShortcut(): JSX_2.Element;

export declare function UserSetting(): JSX_2.Element;

declare function Window_2({ children }: WindowProps): JSX_2.Element;
export { Window_2 as Window }

declare interface WindowProps {
    children?: default_2.ReactNode;
}

export { }
