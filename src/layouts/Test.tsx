import { EmptyComponent } from "@/components/EmptyComponent";
import { Toasts } from "@/layouts/Toats";
import { Window } from "./Window";
import { TitleProvider } from "@/components/Title";
import { SettingsView } from "@/layouts/SettingsView";
import { SettingUpdateView } from "@/layouts/SettingUpdateView";
import { CameraView } from "@/components/CameraView";
import { DialogBox } from "@/components/DialogBox";
import { Notifications } from "@/components/Notifications";
import { MenuList } from "./MenuList";
import { Commands } from "@/layouts/Commands";
import { Header } from "./Header";
import { LeftSide } from "@/components/LeftSide";
import { Card } from "@/components/Card";
import { RightSide } from "@/components/RightSide";
export function App() {
  return (
    <EmptyComponent>
      <Header>
        <h1 className="w-full text-center">This is the header</h1>
      </Header>
      <Window>
        <LeftSide>Somthing in the primary Side</LeftSide>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <Card className="justify-center items-center">
            <p className="p-3">Water Fetch UI Design 💦</p>
          </Card>
        </div>
        <RightSide>Somthing in the secondry Side</RightSide>
      </Window>
      <SettingsView />
      <SettingUpdateView />
      <CameraView />
      <Notifications />
      <Commands />
      <DialogBox />
      <Toasts />
      <MenuList />
      <TitleProvider />
    </EmptyComponent>
  );
}
