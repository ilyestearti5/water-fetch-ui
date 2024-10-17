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
  ApplicationsLayout,
} from "@/layouts";
export interface LayoutesProps {
  children: React.ReactNode;
}
export const Layoutes = ({ children }: LayoutesProps) => {
  return (
    <EmptyComponent>
      {children}
      <KeyboardView />
      <ApplicationsLayout />
      <PDFView />
      <IframeLayout />
      <FixedProfileView />
      <Commands />
      <SettingsView />
      <SettingUpdateView />
      <UpdateKeyboardShortcut />
      <CameraView />
      <EnumLayout />
      <Notifications />
      <Toasts />
      <DialogBoxLayout />
      <MenuList />
      <TitleProvider />
      <DevReadingHTML />
    </EmptyComponent>
  );
};
