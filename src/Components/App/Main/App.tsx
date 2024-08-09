import { EmptyComponent } from "main/src/Components/Helpers/EmptyComponent";
import { Toasts } from "@/reducers/Toast/Toats";
import { Window } from "./Window";
import { TitleProvider } from "main/src/Components/Helpers/Title";
import { SettingsView } from "main/src/Components/App/Configurations/SettingsView";
import { SettingUpdateView } from "main/src/Components/App/Configurations/SettingUpdateView";
import { CameraView } from "main/src/Components/CameraView";
import { DialogBox } from "main/src/Components/DialogBox";
import { Notifications } from "@/reducers/Notification/Notifications";
import { MenuList } from "./MenuList";
import { Commands } from "@/reducers/Command/Commands";
import { Card } from "../../Helpers/Card";
import { Header } from "../Header/Header";
import { LeftSide } from "../Sides/LeftSide";
import { RightSide } from "../Sides/RightSide";
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
