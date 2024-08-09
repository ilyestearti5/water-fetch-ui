export interface SetSmallStateProps {
  force?: boolean;
  direction: string;
  value: any;
}
export interface SetProgressProps {
  value?: number;
  options?: globalThis.Electron.ProgressBarOptions | undefined;
}
export interface SendEmailProps {
  to: string;
  subject?: string;
  body?: string;
}
export interface SendTelProps {
  tel: string;
}
export interface SendSmsProps {
  to: string;
  body?: string;
}
export interface OpenMenuProps {
  menu: Partial<Electron.MenuItem>[];
  x: number;
  y: number;
}
export interface AddRecentDocumentsProps {
  path: string;
}
export interface GoogleAuthCodeProps {
  url: string;
}
export interface DialogProps extends Electron.MessageBoxOptions {
  force?: boolean;
}
