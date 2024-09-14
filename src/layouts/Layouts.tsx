import { EmptyComponent, TitleProvider } from "@/components";
import {
  CameraView,
  Commands,
  DevReadingHTML,
  DialogBoxLayout,
  FixedProfileView,
  IframeLayout,
  KeyboardView,
  MenuList,
  Notifications,
  PDFView,
  SettingUpdateView,
  Toasts,
  UpdateKeyboardShortcut,
  SettingsView,
  EnumLayout,
} from "@/layouts";
export interface LayoutesProps {
  children: React.ReactNode;
}
export const Layoutes = ({ children }: LayoutesProps) => {
  return (
    <EmptyComponent>
      {children}
      <KeyboardView />
      <PDFView />
      <IframeLayout />
      <FixedProfileView />
      <Commands />
      <SettingsView />
      <SettingUpdateView />
      <UpdateKeyboardShortcut />
      <CameraView />
      <Notifications />
      <EnumLayout />
      <MenuList />
      <DialogBoxLayout />
      <Toasts />
      <TitleProvider />
      <DevReadingHTML />
    </EmptyComponent>
  );
};
