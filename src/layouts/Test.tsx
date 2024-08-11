import { EmptyComponent } from "@/components/EmptyComponent";
import { Toasts } from "@/layouts/Toasts";
import { Window } from "./Window";
import { SettingsView } from "@/layouts/SettingsView";
import { SettingUpdateView } from "@/layouts/SettingUpdateView";
import { CameraView } from "@/layouts/CameraView";
import { DialogBox } from "@/components/DialogBox";
import { Notifications } from "@/layouts/Notifications";
import { MenuList } from "./MenuList";
import { Commands } from "@/layouts/Commands";
import { Header } from "./Header";
import { LeftSide } from "@/layouts/LeftSide";
import { Card } from "@/components/Card";
import { RightSide } from "@/layouts/RightSide";
import { TitleProvider } from "@/components/TitleProvider";
import { Anchor, Icon } from "@/components";
import { FixedProfileView } from "./ProfileView";
import { getUserFromDB, showProfile } from "@/hooks";
import { faLink } from "@fortawesome/free-solid-svg-icons";
export function Test() {
  const userFromDb = getUserFromDB();
  return (
    <EmptyComponent>
      <Header>
        <h1 className="w-full text-center capitalize">
          click in the link to see your account {userFromDb && "(" + userFromDb.name + ")"}
          <Anchor
            onClick={(e) => {
              e.preventDefault();
              showProfile();
            }}
          >
            <Icon icon={faLink} iconClassName="mr-1 ml-2" />
            here
          </Anchor>
        </h1>
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
      <FixedProfileView />
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
