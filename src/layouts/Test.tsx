import { Window } from "./Window";
import { Toasts } from "@/layouts/Toasts";
import { TitleProvider } from "@/components/TitleProvider";
import { SettingUpdateView } from "@/layouts/SettingUpdateView";
import { SettingsView } from "@/layouts/SettingsView";
import { RightSide } from "@/layouts/RightSide";
import { Notifications } from "@/layouts/Notifications";
import { MenuList } from "./MenuList";
import { LeftSide } from "@/layouts/LeftSide";
import { Header } from "./Header";
import { EmptyComponent } from "@/components/EmptyComponent";
import { DialogBoxLayout } from "@/layouts/DialogBoxLayout";
import { Commands } from "@/layouts/Commands";
import { Card } from "@/components/Card";
import { CameraView } from "@/layouts/CameraView";
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
  PinField,
  ArrayFeild,
  DateFeild,
  ImageFeild,
  CircleLoading,
  LineLoading,
  BallLoading,
  RecorderFeild,
  Feild,
  PasswordFeild,
  NumberFeild,
  Starts,
  LargeButton,
  Tab,
  DarkLightIcon,
  StyledButton,
  RangeFeild,
  EnumFeild,
  FastList,
  Translate,
} from "@/components";
import { randomItem, range } from "@/utils";
import { PDFView } from "./PDFView";
import { openDialog, openMenu } from "@/functions/app/web/web-utils";
import { NotificationType } from "@/data/system/notifications.model";
import { KeyboardView } from "./KeyboardView";
import { IframeLayout } from "./IframeLayout";
import {
  useUser,
  useUserFromDB,
  langHooks,
  openCamera,
  setSettingValue,
  settingHooks,
  showApplications,
  showNotification,
  showProfile,
  showSetting,
  showToast,
  useColorMerge,
  useCopyState,
} from "@/hooks";
import React from "react";
import { Tabs } from "@/components/Tabs";
import { Route, Switch } from "react-router-dom";
import { PayoutResult, PayoutRoute } from "@/routes";
import { FullField } from "@/components/FullFields";
import { FixedProfileView } from "./ProfileView";
import { faAdd, faHome, faLink } from "@fortawesome/free-solid-svg-icons";
import { EnumLayout } from "./EnumLayout";
import { Confettiful } from "./CongratulationsAnimation";
import { AuthRoute } from "@/routes/AuthRoute";
import { ApplicationsLayout } from "./Application";
import { allIcons, getFunction, signInAccount } from "@/apis";
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
  const userFromDb = useUserFromDB();
  const booleanFieldState = useCopyState<null | boolean>(null);
  const stringFieldState = useCopyState<string | undefined>(undefined);
  const fileFieldState = useCopyState<string[] | null>(null);
  const filterFieldState = useCopyState<string[] | undefined>(undefined);
  const arrayFieldState = useCopyState<string[] | undefined>(undefined);
  const pinFieldState = useCopyState<string | undefined>(undefined);
  const dateFieldState = useCopyState<null | string | undefined>(null);
  const imageFieldState = useCopyState<string | null>(null);
  const recorderFieldState = useCopyState<string | null>(null);
  const passwordFieldState = useCopyState<string | undefined>(undefined);
  const enumFieldState = useCopyState<string | undefined>(undefined);
  const numberFieldState = useCopyState<number | undefined | null>(3);
  const priceState = useCopyState<number | undefined | null>(3);
  const rangeFieldState = useCopyState<number>(2);
  const homePageIsActive = useCopyState(false);
  const allSettings = settingHooks.getAll();
  const colorMerge = useColorMerge();
  const user = useUser();
  const langsTranslations = langHooks.getAll();
  const fullObjectState = useCopyState<Record<string, any>>({});
  const words = React.useMemo(() => {
    return langsTranslations
      .map(({ word, ...allTranlations }) =>
        Object.values(allTranlations)
          .map((w) => w.split(/ +/gi))
          .flat(),
      )
      .flat();
  }, [langsTranslations]);
  const chargeIcons: Partial<Record<PayoutResult["status"], typeof allIcons.solid.faHome>> = {
    failed: allIcons.solid.faWarning,
    pending: allIcons.solid.faClock,
    canceled: allIcons.solid.faXmarkCircle,
    paid: allIcons.solid.faCheckCircle, // Added icon for 'paid' status,
  };
  const chargeColors: Partial<Record<PayoutResult["status"], string>> = {
    failed: "#e74c3c", // Beautiful red for failed status
    pending: "#f39c12", // Warm orange for pending status
    canceled: "#95a5a6", // Soft gray for canceled status
    paid: "#2ecc71", // Vibrant green for paid status,
  };
  const activeTab = useCopyState("home");
  return (
    <EmptyComponent>
      <Switch>
        <Route path="/auth">
          <AuthRoute
            onAuthSuccess={() => {
              window.close();
            }}
          />
        </Route>
        <Route path="/payout">
          <PayoutRoute
            successComponent={({ payout }) => {
              const { status } = payout;
              return (
                <Card>
                  {status && (
                    <EmptyComponent>
                      <div
                        className="flex justify-center items-center p-3"
                        style={{
                          color: chargeColors[status],
                        }}
                      >
                        <Icon iconClassName="text-7xl" icon={chargeIcons[status]} />
                      </div>
                      <Line />
                    </EmptyComponent>
                  )}
                  <div className="flex justify-center items-center p-3">
                    <EmptyComponent>
                      {status == "paid" && (
                        <EmptyComponent>
                          <div className="fixed inset-0 pointer-events-none">
                            <Confettiful />
                          </div>
                          <h1 className="text-4xl capitalize">
                            <Translate content="your charge success" />
                          </h1>
                        </EmptyComponent>
                      )}
                      {status && status != "paid" && (
                        <div className="flex justify-center items-center gap-2 text-4xl">
                          <h1 className="text-center capitalize">
                            <Translate content={`your charge is ${status}`} />
                          </h1>
                        </div>
                      )}
                    </EmptyComponent>
                  </div>
                  <Line />
                  <div className="flex justify-end items-center gap-1 p-2">
                    <Button
                      className="w-full"
                      onClick={() => {
                        window.close();
                      }}
                    >
                      Done
                    </Button>
                  </div>
                </Card>
              );
            }}
          />
        </Route>
        <Route path="/">
          <Header>
            <h1 className="w-full text-center capitalize">
              <Translate content="click in the link to see your account" /> {userFromDb && "(" + userFromDb.nickname + ")"}
              <Anchor
                onClick={(e) => {
                  e.preventDefault();
                  showProfile();
                }}
              >
                <Icon icon={faLink} iconClassName="mr-1 ml-2" />
                <Translate content="here" />
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
                            showToast("You click Rate Now 🙃", "info");
                          }}
                        >
                          Click Me
                        </StyledButton>
                      ),
                      label: "Styled Button",
                    },
                    {
                      label: "Tabs",
                      jsxElement: (
                        <Tabs
                          state={activeTab}
                          tabs={[
                            {
                              value: "home",
                              label: "Home",
                              icon: allIcons.solid.faHome,
                            },
                            {
                              value: "about",
                              label: "About",
                              icon: allIcons.solid.faInfo,
                            },
                            {
                              value: "contact",
                              label: "Contact",
                              icon: allIcons.solid.faPhone,
                            },
                            {
                              value: "settings",
                              label: "Settings",
                              icon: allIcons.solid.faCog,
                            },
                          ]}
                        />
                      ),
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
                      jsxElement: <Feild className="h-[200px]" multiLines inputName="exmple" propositions={words} placeholder="Input Exmple" />,
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
                      jsxElement: (
                        <StringFeild
                          state={stringFieldState}
                          config={{
                            autoChange: true,
                          }}
                          id="string-field"
                        />
                      ),
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
                        <div className="flex flex-col gap-20">
                          <RangeFeild
                            state={rangeFieldState}
                            config={{
                              min: 5,
                              max: 10,
                              marked: {
                                8: "orange",
                              },
                            }}
                            id="range-field"
                          />
                          <RangeFeild
                            state={rangeFieldState}
                            config={{
                              min: 5,
                              max: 10,
                              isFloat: true,
                              showValue: true,
                            }}
                            id="range-field-float"
                          />
                        </div>
                      ),
                      label: "Range Field",
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
                        <EnumFeild
                          config={{
                            list: range(0, 10).map((num) => {
                              return {
                                value: num.toString(),
                                content: "Number " + num,
                                desc: "Choise `Number` " + num,
                              };
                            }),
                          }}
                          id="enum-field"
                          state={enumFieldState}
                        />
                      ),
                      label: "Enum Field",
                    },
                    {
                      jsxElement: (
                        <FilterFeild
                          config={{
                            list: [
                              {
                                content: "Dog",
                                value: "dog",
                              },
                              {
                                content: "Cat",
                                value: "cat",
                              },
                            ],
                          }}
                          state={filterFieldState}
                          id="filter-field"
                        />
                      ),
                      label: "Filter Field",
                    },
                    {
                      jsxElement: (
                        <PinField
                          config={{
                            match: "..-..-..-..-..",
                            size: 30,
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
                              detail: "This Is A Detail Section",
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
                            showApplications();
                          }}
                        >
                          Show Application
                        </Button>
                      ),
                      label: "Show Water Fetch Application",
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
                    {
                      jsxElement: (
                        <Button
                          onClick={async () => {
                            await signInAccount({
                              place: "window",
                              projectId: import.meta.env.VITE_PROJECT_ID,
                              platform: import.meta.env.DEV ? "test" : "web",
                              isDev: import.meta.env.DEV,
                            });
                          }}
                        >
                          <Translate content="Authicate" />
                        </Button>
                      ),
                      label: "Authicate",
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
                        <div className="relative w-full h-[20px]">
                          <LineLoading />
                        </div>
                      ),
                      label: "Line Loading",
                    },
                    {
                      jsxElement: <BallLoading />,
                      label: "Ball Loading",
                    },
                    {
                      label: "Somthing",
                      jsxElement: (
                        <Button
                          onClick={async () => {
                            const { callback } = getFunction<any, Record<string, string>>("hello", import.meta.env.DEV);
                            const result = await callback({});
                            console.log({
                              result,
                            });
                          }}
                        >
                          Somthing
                        </Button>
                      ),
                    },
                  ],
                },
                {
                  label: "Performence",
                  elements: [
                    {
                      jsxElement: (
                        <div className="w-[300px] h-[200px] overflow-hidden">
                          <FastList
                            data={range(400).map((index) => ({ index }))}
                            focusId="list"
                            slotId="list"
                            itemSize={30}
                            component={({ data, style }) => {
                              return (
                                <div
                                  style={{
                                    ...style,
                                  }}
                                  className="flex items-center px-3"
                                >
                                  {data.index}
                                </div>
                              );
                            }}
                          />
                        </div>
                      ),
                      label: "Fast List",
                    },
                    {
                      label: "Somthing Buty",
                      jsxElement: (
                        <EmptyComponent>
                          <FullField
                            id="somthing"
                            list={{
                              name: {
                                label: "your name",
                                config: {
                                  proposition: ["Ilyes", "Ahmed"],
                                  authChange: true,
                                },
                                type: "string",
                                icon: allIcons.solid.faUser,
                              },
                              age: {
                                label: "your age",
                                config: {
                                  authChange: true,
                                },
                                type: "number",
                                onNext({ state, stop }) {
                                  const num = state["age"];
                                  if (typeof num == "number" && num < 50) {
                                    showToast("your small");
                                    stop();
                                  }
                                },
                                icon: allIcons.solid.faListNumeric,
                              },
                              "phone-number": {
                                label: "Your Phone Number",
                                config: {},
                                type: "number",
                                onNext({ stop, currentValue }) {
                                  if (currentValue?.toString().match(/[0-9]/gi)) {
                                  } else {
                                    showToast("Number Is Not Correct!", "warning");
                                    stop();
                                  }
                                },
                                icon: allIcons.solid.faPhone,
                              },
                              photo: {
                                config: {
                                  alt: "Upload Your Picture",
                                  rounded: true,
                                },
                                label: "Your Picture",
                                icon: allIcons.solid.faImage,
                                type: "image",
                                onNext({ stop, currentValue }) {
                                  if (typeof currentValue != "string") {
                                    stop();
                                    showToast("Upload Your Picture First", "error");
                                  }
                                },
                              },
                              "my-code": {
                                label: "Your Pin Sm",
                                config: {
                                  match: "..-..",
                                },
                                type: "pin",
                                icon: allIcons.solid.faAmbulance,
                              },
                            }}
                            state={fullObjectState}
                          />
                        </EmptyComponent>
                      ),
                    },
                  ],
                },
              ].map(({ label, elements }, i) => {
                return (
                  <EmptyComponent key={i}>
                    <div className="p-3 max-md:w-full">
                      <h1 className="font-bold text-4xl max-md:text-center">
                        <Translate content={label} />
                      </h1>
                    </div>
                    <Line />
                    <div className="flex flex-wrap max-lg:justify-center gap-3 p-3 max-md:w-full">
                      {elements
                        .sort((a, b) => (a.label > b.label ? 1 : -1))
                        .map(({ definition, jsxElement, label }, j) => {
                          return (
                            <Card className="w-fit max-md:w-full min-w-[200px] h-fit min-h-[200px]" key={j}>
                              <div className="p-2">
                                <h1 className="text-2xl">
                                  <Translate content={label} />
                                </h1>
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
              <div>
                <div className="h-[500px]" />
              </div>
            </Scroll>
            <RightSide />
          </Window>
        </Route>
      </Switch>
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
      <DialogBoxLayout />
      <IframeLayout />
      <ApplicationsLayout />
      <EnumLayout />
    </EmptyComponent>
  );
}
