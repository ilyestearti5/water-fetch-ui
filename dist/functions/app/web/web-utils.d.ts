import { DialogProps, SendEmailProps, SendTelProps, SendSmsProps, SetProgressProps, OpenMenuProps } from "@/types/global";
export declare const imageExtensions: string[];
export declare function openDialog(props: DialogProps): Promise<Electron.MessageBoxReturnValue>;
export declare function getWindowData(): Promise<{
    x: number;
    y: number;
    width: number;
    height: number;
}>;
export declare function getLocalAdressIp(): Promise<string | null>;
export declare const getImageFileType: (filePath: string) => string;
export declare const sendEmail: ({ to, subject, body }: SendEmailProps) => Promise<void>;
export declare const sendTel: ({ tel }: SendTelProps) => void;
export declare const sendSms: ({ to, body }: SendSmsProps) => void;
export declare const on: (event: string, callback: () => boolean | void | Promise<boolean | void>) => void;
export declare const off: (event: string) => void;
export declare const setProgress: ({ options, value }: SetProgressProps) => Promise<void>;
export declare const openMenu: (config: OpenMenuProps) => void;
export declare const openPath: (config: Electron.OpenDialogOptions) => Promise<string[]>;
