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
  PinFeild,
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
  Text,
} from "@/components";
import { randomItem, range } from "@/utils";
import { PDFView } from "./PDFView";
import { openDialog, openMenu } from "@/functions/app/web/web-utils";
import { NotificationType } from "@/data/system/notifications.model";
import { KeyboardView } from "./KeyboardView";
import { IframeLayout } from "./IframeLayout";
import {
  getUser,
  getUserFromDB,
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
import { FixedProfileView } from "./ProfileView";
import { faAdd, faHome, faLink } from "@fortawesome/free-solid-svg-icons";
import { EnumLayout } from "./EnumLayout";
import { Route, Switch } from "react-router-dom";
import { AuthRoute } from "@/routes/AuthRoute";
import { allIcons, generatePayoutUrl, getFunction, signInAccount } from "@/apis";
import React from "react";
import { PayoutResult, PayoutRoute } from "@/routes";
import { CongratulationsView } from "./Congratulations";
import { Confettiful } from "./CongratulationsAnimation";
import { ApplicationsLayout } from "./Application";
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
  const enumFieldState = useCopyState<string | undefined>(undefined);
  const numberFieldState = useCopyState<number | undefined | null>(3);
  const rangeFieldState = useCopyState<number>(2);
  const homePageIsActive = useCopyState(false);
  const allSettings = settingHooks.getAll();
  const colorMerge = useColorMerge();
  const user = getUser();
  const langsTranslations = langHooks.getAll();
  const words = React.useMemo(() => {
    return langsTranslations.map(({ value }) => value.split(/ +/gi)).flat();
  }, [langsTranslations]);
  const chargeIcons: Partial<Record<PayoutResult["status"], typeof allIcons.solid.faHome>> = {
    failed: allIcons.solid.faWarning,
    pending: allIcons.solid.faClock,
    canceled: allIcons.solid.faXmarkCircle,
    processing: allIcons.solid.faProcedures,
    paid: allIcons.solid.faCheckCircle, // Added icon for 'paid' status,
    expired: allIcons.solid.faHourglassEnd, // Added icon for 'expired' status,
  };
  const chargeColors: Partial<Record<PayoutResult["status"], string>> = {
    failed: "#e74c3c", // Beautiful red for failed status
    pending: "#f39c12", // Warm orange for pending status
    canceled: "#95a5a6", // Soft gray for canceled status
    processing: "#3498db", // Cool blue for processing status
    paid: "#2ecc71", // Vibrant green for paid status,
    expired: "#8e44ad", // Deep purple for expired status,
  };
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
                            <Text content="your charge success" />
                          </h1>
                        </EmptyComponent>
                      )}
                      {status && status != "paid" && (
                        <div className="flex justify-center items-center gap-2 text-4xl">
                          <h1 className="text-center capitalize">
                            <Text content={`your charge is ${status}`} />
                          </h1>
                        </div>
                      )}
                    </EmptyComponent>
                  </div>
                  {/* { status == "pending" && url && (
                    <EmptyComponent>
                      <Line />
                      <div className="p-2">
                        <Anchor href={url}>
                          Complete Payment <Icon iconClassName="ml-2" icon={allIcons.solid.faExternalLink} />
                        </Anchor>
                      </div>
                    </EmptyComponent>
                  )} */}
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
              <Text content="click in the link to see your account" /> {userFromDb && "(" + userFromDb.name + ")"}
              <Anchor
                onClick={(e) => {
                  e.preventDefault();
                  showProfile();
                }}
              >
                <Icon icon={faLink} iconClassName="mr-1 ml-2" />
                <Text content="here" />
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
                        <div className="flex flex-col gap-20">
                          <RangeFeild
                            state={rangeFieldState}
                            config={{
                              min: 5,
                              max: 10,
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
                            match: "..-..",
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
                          <Text content="Authicate" />
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
                      label: "Test Payment",
                      jsxElement: (
                        <Button
                          onClick={async () => {
                            if (!user) {
                              showToast("You need to login first", "error");
                              return;
                            }
                            const { VITE_PROJECT_ID: projectId, DEV: isDev } = import.meta.env;
                            const userToken = await user.getIdToken(true);
                            const { url } = await generatePayoutUrl({
                              projectId,
                              amount: 4000,
                              isDev,
                              platform: isDev ? "test" : "web",
                              userToken,
                            });
                            open(url);
                          }}
                        >
                          Pay Somthing
                        </Button>
                      ),
                    },
                    {
                      label: "Somthing",
                      jsxElement: (
                        <Button
                          onClick={async () => {
                            const fn = getFunction<any, undefined>("hello", true);
                            const result = await fn(undefined);
                            console.log(result);
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
                  ],
                },
              ].map(({ label, elements }, i) => {
                return (
                  <EmptyComponent key={i}>
                    <div className="p-3 max-md:w-full">
                      <h1 className="font-bold text-4xl max-md:text-center">
                        <Text content={label} />
                      </h1>
                    </div>
                    <Line />
                    <div className="flex flex-wrap max-lg:justify-center gap-3 p-3 max-md:w-full">
                      {elements
                        .sort((a, b) => (a.label > b.label ? 1 : -1))
                        .map(({ definition, jsxElement, label }, j) => {
                          return (
                            <Card className="w-fit max-md:w-full min-w-[200px] max-w-[500px] h-fit min-h-[200px]" key={j}>
                              <div className="p-2">
                                <h1 className="text-2xl">
                                  <Text content={label} />
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
