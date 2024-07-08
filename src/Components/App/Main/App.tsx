import { EmptyComponent } from "@/Components/Helpers/EmptyComponent";
import { Toasts } from "@/reducers/Toast/Toats";
import { Window } from "./Window";
import { TitleProvider } from "@/Components/Helpers/Title";
import { SettingsView } from "@/Components/App/Configurations/SettingsView";
import { SettingUpdateView } from "@/Components/App/Configurations/SettingUpdateView";
import { CameraView } from "@/Components/CameraView";
import { DialogBox } from "@/Components/DialogBox";
import { Notifications } from "@/reducers/Notification/Notifications";
import { MenuList } from "./MenuList";
import { Commands } from "@/reducers/Command/Commands";
import { Card } from "./Card";
export function App() {
  return (
    <EmptyComponent>
      <Window>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <Card>
            <p className="p-3">Water Fetch UI Design 💦</p>
          </Card>
        </div>
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
