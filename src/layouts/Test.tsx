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
import {
  Anchor,
  BooleanFeild,
  Button,
  CircleTip,
  Icon,
  Line,
  MarkDown,
  Scroll,
  StringFeild,
  Tip,
  FileFeild,
  FilterFeild,
  PinFeild,
  ArrayFeild,
  DateFeild,
  ImageFeild,
  CircleLoading,
  LineLoading,
  RecorderFeild,
  Feild,
  PasswordFeild,
  NumberFeild,
  Starts,
  LargeButton,
  Tab,
  DarkLightIcon,
  StyledButton,
} from "@/components";
import { FixedProfileView } from "./ProfileView";
import { getUserFromDB, handelShadowColor, openCamera, setSettingValue, settingHooks, showNotification, showPdf, showProfile, showSetting, showToast, useColorMerge, useCopyState } from "@/hooks";
import { faAdd, faHome, faLink } from "@fortawesome/free-solid-svg-icons";
import { openDialog, openMenu } from "@/functions/app/web/web-utils";
import { randomItem, range } from "@/utils";
import { PDFView } from "./PDFView";
import { KeyboardView } from "./KeyboardView";
import { NotificationType } from "@/data/system/notifications.model";

const notificationsExmples: Omit<NotificationType, "id">[] = [
  {
    title: "Product Posted",
    type: "info",
    desc: "Ahmed Post A New Product",
  },
  {
    title: "You Post A Product",
    type: "success",
    desc: "Your Product Is Now Live",
  },
  {
    title: "Product Deleted",
    type: "error",
    desc: "Your Product Is Deleted",
  },
  {
    title: "Product Updated",
    type: "warning",
    desc: "Your Product Is Updated",
  },
  {
    title: "Product Posted",
    type: "info",
    desc: "Ahmed Post A New Product",
  },
];

export function Test() {
  const userFromDb = getUserFromDB();
  const booleanFieldState = useCopyState<null | boolean>(null);
  const stringFieldState = useCopyState<string | undefined>(undefined);
  const fileFieldState = useCopyState<string[] | null>(null);
  const filterFieldState = useCopyState<string[] | undefined>(undefined);
  const arrayFieldState = useCopyState<string[] | undefined>(undefined);
  const pinFieldState = useCopyState<number | undefined>(undefined);
  const dateFieldState = useCopyState<null | string | undefined>(null);
  const imageFieldState = useCopyState<string | null>(null);
  const recorderFieldState = useCopyState<string | null>(null);
  const passwordFieldState = useCopyState<string | undefined>(undefined);
  const numberFieldState = useCopyState<number | undefined | null>(3);
  const homePageIsActive = useCopyState(false);
  const allSettings = settingHooks.getAll();
  const colorMerge = useColorMerge();
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
        <Scroll>
          {[
            {
              label: "Buttons",
              elements: [
                {
                  jsxElement: (
                    <StyledButton
                      onClick={() => {
                        showToast("You Clic Rate Now 🙃", "info");
                      }}
                    />
                  ),
                  label: "New Outher Button",
                },
                {
                  jsxElement: <LargeButton>Large Button</LargeButton>,
                  label: "Large Button",
                },
                {
                  jsxElement: <Button>Ok</Button>,
                  label: "Button",
                  definition: "",
                },
                {
                  jsxElement: <CircleTip icon={faAdd} />,
                  label: "Circle Tip",
                },
                {
                  jsxElement: <Tip icon={faAdd} />,
                  label: "Tip",
                },
                {
                  jsxElement: (
                    <Tab
                      className="text-4xl"
                      isActive={homePageIsActive.get}
                      onClick={() => {
                        homePageIsActive.set(!homePageIsActive.get);
                      }}
                      icon={faHome}
                    />
                  ),
                  label: "Tab",
                },
                {
                  jsxElement: <DarkLightIcon />,
                  label: "Dark Light Icon",
                  definition: "Recommended To Use In The Header And One Time In The App",
                },
              ],
            },
            {
              label: "Inputs",
              elements: [
                {
                  jsxElement: <Feild className="h-[200px]" multiLines inputName="exmple" propositions={["Dog", "Cat", "Link", "Simple", "Word", "Hi"]} placeholder="Input Exmple" />,
                  label: "Feild",
                },
              ],
            },
            {
              label: "Fields",
              elements: [
                {
                  jsxElement: <BooleanFeild state={booleanFieldState} id="boolean-field" />,
                  label: "Boolean Field",
                },
                {
                  jsxElement: <StringFeild state={stringFieldState} id="string-field" />,
                  label: "String Field",
                },
                {
                  jsxElement: <PasswordFeild state={passwordFieldState} id="password-field" />,
                  label: "Password Field",
                },
                {
                  jsxElement: <NumberFeild state={numberFieldState} id="number-field" />,
                  label: "Number Field",
                },
                {
                  jsxElement: (
                    <FileFeild
                      config={{
                        properties: ["multiSelections"],
                      }}
                      state={fileFieldState}
                      id="file-field"
                    />
                  ),
                  label: "File Field",
                },
                {
                  jsxElement: (
                    <FilterFeild
                      config={{
                        list: ["Dog", "Cat"],
                      }}
                      state={filterFieldState}
                      id="filter-field"
                    />
                  ),
                  label: "Filter Field",
                },
                {
                  jsxElement: (
                    <PinFeild
                      config={{
                        match: "....",
                      }}
                      state={pinFieldState}
                      id="pin-field"
                    />
                  ),
                  label: "Pin Field",
                },
                {
                  jsxElement: <RecorderFeild id="recorder-field" state={recorderFieldState} />,
                  label: "Recorder Field",
                },
                {
                  jsxElement: <ArrayFeild state={arrayFieldState} id="array-field" />,
                  label: "Array Field",
                },
                {
                  jsxElement: <DateFeild state={dateFieldState} id="date-field" />,
                  label: "Date Field",
                },
                {
                  jsxElement: (
                    <ImageFeild
                      state={imageFieldState}
                      config={{
                        rounded: true,
                      }}
                      id="image-field"
                    />
                  ),
                  label: "Image Field",
                },
              ],
            },
            {
              label: "UI",
              elements: [
                {
                  jsxElement: <Starts length={10} starts={2} />,
                  label: "Starts",
                },
                {
                  jsxElement: <EmptyComponent></EmptyComponent>,
                  label: "",
                },
                {
                  jsxElement: (
                    <Card className="w-fit">
                      <p className="p-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, tempora. Quod, debitis aut eveniet illo nemo adipisci atque veniam eum distinctio rerum dolore facere magnam
                        libero dolor ratione omnis explicabo.
                      </p>
                    </Card>
                  ),
                  label: "Card",
                },
                {
                  jsxElement: <Line />,
                  label: "Line",
                },
              ],
            },
            {
              label: "Layouts",
              elements: [
                {
                  jsxElement: (
                    <Button
                      onClick={() => {
                        const value = randomItem(notificationsExmples).value;
                        if (value) {
                          showNotification(value);
                        }
                      }}
                    >
                      Show Notification
                    </Button>
                  ),
                  label: "Notification",
                },

                {
                  jsxElement: (
                    <Button
                      onClick={async () => {
                        await openDialog({
                          message: "This is a dialog",
                          title: "Dialog",
                          type: "info",
                          buttons: ["Ok"],
                        });
                      }}
                    >
                      Show Dialog
                    </Button>
                  ),
                  label: "Dialog",
                },
                {
                  jsxElement: (
                    <Button
                      onClick={() => {
                        showProfile();
                      }}
                    >
                      Show Profile
                    </Button>
                  ),
                  label: "Show Profile",
                },
                {
                  jsxElement: (
                    <div className="flex flex-col justify-between h-full">
                      <select
                        style={{
                          ...colorMerge("gray.opacity"),
                        }}
                        className="mb-3 p-2"
                        name="all-settings-selection"
                      >
                        {allSettings.map(({ name, settingId }) => {
                          return (
                            <option
                              style={{
                                ...colorMerge({
                                  borderColor: "borders",
                                  backgroundColor: "primary.background",
                                }),
                              }}
                              key={settingId}
                              value={settingId}
                            >
                              {name || settingId}
                            </option>
                          );
                        })}
                      </select>
                      <Line />
                      <Button
                        onClick={() => {
                          const value = document.querySelector<HTMLSelectElement>("select[name=all-settings-selection]")?.value;
                          if (value) {
                            showSetting(value as any);
                          }
                        }}
                      >
                        Show Current Setting
                      </Button>
                    </div>
                  ),
                  label: "Update Setting",
                },
                {
                  jsxElement: (
                    <Button
                      onClick={() => {
                        showToast("This is a toast", "info");
                      }}
                    >
                      Show Toast
                    </Button>
                  ),
                  label: "Toast",
                },
                {
                  jsxElement: (
                    <Button
                      onClick={async () => {
                        openCamera("take");
                      }}
                    >
                      Show Camera
                    </Button>
                  ),
                  label: "Show Camera",
                },
                {
                  jsxElement: (
                    <Button
                      onClick={({ clientX, clientY }) => {
                        openMenu({
                          x: clientX,
                          y: clientY,
                          menu: range(15).map((item, index) => {
                            return {
                              label: `Item ${index}`,
                              click() {
                                showToast(`Menu Item ${index} Clicked`, "info");
                              },
                            };
                          }),
                        });
                      }}
                    >
                      Show Menu
                    </Button>
                  ),
                  label: "Show Menu",
                },
                {
                  jsxElement: <Button onClick={async () => {}}>Show A Pdf</Button>,
                  label: "Pdf",
                },
                {
                  jsxElement: (
                    <Button
                      onClick={() => {
                        setSettingValue("visibility/keyboard.boolean", true);
                      }}
                    >
                      Show Keyboard
                    </Button>
                  ),
                  label: "Keyboard",
                },
              ],
            },
            {
              label: "Loading",
              elements: [
                {
                  jsxElement: <CircleLoading />,
                  label: "Circle Loading",
                },
                {
                  jsxElement: (
                    <div className="relative h-[20px]">
                      <LineLoading />
                    </div>
                  ),
                  label: "Line Loading",
                },
              ],
            },
          ].map(({ label, elements }, i) => {
            return (
              <EmptyComponent key={i}>
                <div className="p-3 max-md:w-full">
                  <h1 className="font-bold text-4xl max-md:text-center">{label}</h1>
                </div>
                <Line />
                <div className="flex flex-wrap gap-3 p-3 max-md:w-full">
                  {elements.map(({ definition, jsxElement, label }, j) => {
                    return (
                      <Card className="w-fit max-md:w-full min-w-[200px] max-w-[500px] h-fit min-h-[200px]" key={j}>
                        <div className="p-2">
                          <h1 className="text-2xl">{label}</h1>
                        </div>
                        <Line />
                        <div className="flex justify-center items-center p-2 w-full h-full">{jsxElement}</div>
                        {definition && (
                          <EmptyComponent>
                            <Line />
                            <Scroll className="p-2">
                              <MarkDown value={definition} />
                            </Scroll>
                          </EmptyComponent>
                        )}
                      </Card>
                    );
                  })}
                </div>
                <Line />
              </EmptyComponent>
            );
          })}
        </Scroll>
        <RightSide>Somthing in the secondry Side</RightSide>
      </Window>
      <FixedProfileView />
      <SettingsView />
      <KeyboardView />
      <SettingUpdateView />
      <CameraView />
      <Notifications />
      <Commands />
      <Toasts />
      <PDFView />
      <MenuList />
      <TitleProvider />
      <DialogBox />
    </EmptyComponent>
  );
}
