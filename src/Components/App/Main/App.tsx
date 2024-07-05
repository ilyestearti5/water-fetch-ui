import React from "react";
import { Link } from "react-router-dom";
import { initConfigurations } from "@/Components/initing";
import { initSystem } from "./initSystem";
import { EmptyComponent } from "@/Components/Helpers/EmptyComponent";
import { Toasts } from "@/reducers/Toast/Toats";
import { settingHooks } from "@/reducers/Settings/settings.model";
import { data } from "api/settings.json";
import { Header } from "../Header/Header";
import { Button, CircleTip } from "@/Components/Helpers/Buttons";
import { Window } from "./Window";
import { TitleProvider } from "@/Components/Helpers/Title";
import { CreateEcommerceForm } from "./CreateEcommerceForm";
import { Profile } from "./Profile";
import { SettingsView } from "../Configurations/SettingsView";
import { SettingUpdateView } from "../Configurations/SettingUpdateView";
import { faBars, faGears, faHome } from "@fortawesome/free-solid-svg-icons";
import { DarkLightIcon } from "../Header/Tips/DarkLightIcon";
import { Text } from "@/Components/Text";
import { useColorMerge } from "@/data/system/colors.model";
import { CameraView } from "@/Components/CameraView";
import { DialogBox } from "@/Components/DialogBox";
import { LoginPage } from "./LoginPage";
import { Notifications } from "@/reducers/Notification/Notifications";
import { MenuList } from "./MenuList";
import { webApi } from "@/functions/app/web";
import { getUser } from "@/hooks/firebase";
import { Image } from "@/Components/Helpers/Image";
import { visibilityTemp } from "@/reducers/Object/allTemps";
import { mergeArray } from "@/functions/react-utils";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Commands } from "@/reducers/Command/Commands";
export function App() {
  initConfigurations();
  initSystem();
  React.useEffect(() => {
    settingHooks.setAll(
      Object.entries(data).map(([key, { def, ...props }]: [string, any]) => {
        return {
          ...props,
          settingId: key,
          def,
          value: def,
        };
      }),
    );
  }, []);
  const user = getUser();
  const colorMerge = useColorMerge();
  const list = React.useMemo(() => {
    return mergeArray(
      {
        onClick() {},
        icon: faHome,
        content: "Home",
        isHome: true,
      },
      {
        onClick() {
          settingHooks.setOneFeild("visibility/configurations.boolean", "value", true);
        },
        content: "Settings",
        icon: faGears,
      },
      !user.get && {
        onClick() {
          visibilityTemp.setTemp("login-page", true);
        },
        content: "Login",
        icon: faUser,
      },
    );
  }, [user.get]);
  return (
    <EmptyComponent>
      <Header
        children={
          <div className="flex justify-between items-center px-4 w-full">
            <h1 className="text-2xl truncate">
              <Link to="/home">Build Ecommerce</Link>
            </h1>
            <div className="flex items-center gap-3">
              <div className="flex gap-1 max-md:hidden">
                <DarkLightIcon />
                {list.map(({ onClick, content, icon, isHome = false }, index) => {
                  return (
                    <Button
                      key={index}
                      icon={icon}
                      onClick={onClick}
                      style={{
                        ...colorMerge(
                          !isHome && "gray.opacity",
                          !isHome && {
                            color: "text.color",
                          },
                        ),
                      }}
                      className="px-3 py-2 rounded-3xl"
                    >
                      <Text content={content} />
                    </Button>
                  );
                })}
              </div>
              {user.get && (
                <span
                  onClick={() => {
                    visibilityTemp.setTemp("profile", true);
                  }}
                  className="inline-block w-[40px] h-[40px] overflow-hidden"
                >
                  <Image className="w-full h-full" src={user.get.photoURL ?? undefined} alt={<span className="font-bold text-2xl">{user.get.displayName?.[0]}</span>} />
                </span>
              )}
              <CircleTip
                className="max-md:inline-block hidden"
                icon={faBars}
                onClick={async (e) => {
                  const { bottom, x } = e.currentTarget.getBoundingClientRect();
                  webApi.openMenu({
                    x,
                    y: bottom,
                    menu: list.map(({ onClick, content }) => {
                      return {
                        label: content,
                        click() {
                          onClick?.();
                        },
                      };
                    }),
                  });
                }}
              />
            </div>
          </div>
        }
      />
      <Window />
      <Profile />
      <CreateEcommerceForm />
      <SettingsView />
      <LoginPage />
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
