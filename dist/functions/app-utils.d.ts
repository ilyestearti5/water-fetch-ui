import { DialogProps } from "./app/types";
export declare const openDialog: (props: DialogProps) => Promise<Electron.MessageBoxReturnValue>;
export interface PasswordConfig {
    canCancel?: boolean;
    title?: string;
    after?: number;
    lockable?: boolean;
    closeOnTrue?: boolean;
}
export interface PasswordResult {
    result: boolean;
}
export declare const confirmUsingPassword: (config?: PasswordConfig) => Promise<PasswordResult>;
export declare const scanQr: () => Promise<unknown>;
export interface CameraOptions {
    type: keyof FullCameraResult;
}
export interface FullCameraResult {
    scanner: string;
    take: string;
}
export type CameraResult<T extends keyof FullCameraResult> = FullCameraResult[T];
export interface CameraConfig<T extends keyof FullCameraResult> {
    result?: CameraResult<T>;
    error?: string;
    id?: string;
}
export declare function openCamera<T extends keyof FullCameraResult>(type: T): Promise<CameraResult<T>>;
