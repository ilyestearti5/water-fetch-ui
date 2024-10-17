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
import { Anchor, Button, CircleTip, Icon, Line, MarkDown, Scroll, Tip, CircleLoading, LineLoading, BallLoading, Starts, LargeButton, DarkLightIcon, StyledButton, Translate } from "@/components";
import { randomItem, range } from "@/utils";
import { PDFView } from "./PDFView";
import { openDialog, openMenu } from "@/functions/app/web/web-utils";
import { NotificationType } from "@/data/system/notifications.model";
import { KeyboardView } from "./KeyboardView";
import { IframeLayout } from "./IframeLayout";
import { useUserFromDB, openCamera, setSettingValue, settingHooks, showApplications, showNotification, showProfile, showSetting, showToast, useColorMerge, viewTemps } from "@/hooks";
import { Route, Switch } from "react-router-dom";
import { PayoutResult, PayoutRoute } from "@/routes";
import { FixedProfileView } from "./ProfileView";
import { faAdd, faLink } from "@fortawesome/free-solid-svg-icons";
import { EnumLayout } from "./EnumLayout";
import { Confettiful } from "./CongratulationsAnimation";
import { AuthRoute } from "@/routes/AuthRoute";
import { ApplicationsLayout } from "./Application";
import { allIcons, getFunction, signInAccount } from "@/apis";
import { BottomSheetLayout } from "@/layouts/BottomSheetLayout";
import { DateLayout } from "./DateLayout";
import { ColorLayout } from "./ColorLayout";
import { ClickedView } from "@/components/ClickedView";
import {
  ArrayFieldCode,
  BooleanFieldCode,
  DateFieldCode,
  EnumFieldCode,
  FastListCode,
  FieldCode,
  FileFieldCode,
  FilterFieldCode,
  FullFieldCode,
  ImageFieldCode,
  InfinityScrollCode,
  NumberFieldCode,
  PasswordFieldCode,
  PinFieldCode,
  RangeFieldCode,
  RecorderFieldCode,
  StringFieldCode,
  TabCode,
  TabsCode,
} from "@/test-components/Components";
import React from "react";
const markDownArrayContent = [
  "# First Section",
  "## Second Section",
  "```js",
  "console.log('Hello World')",
  "```",
  "```ts",
  "const a : number = 3",
  "```",
  "```html",
  "<div>",
  "  <h1>Hello World</h1>",
  "</div>",
  "```",
  "End",
];
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
  const allSettings = settingHooks.getAll();
  const colorMerge = useColorMerge();
  const chargeIcons = React.useMemo(() => {
    const chargeIcons: Partial<Record<PayoutResult["status"], typeof allIcons.solid.faHome>> = {
      failed: allIcons.solid.faWarning,
      pending: allIcons.solid.faClock,
      canceled: allIcons.solid.faXmarkCircle,
      paid: allIcons.solid.faCheckCircle, // Added icon for 'paid' status,
    };
    return chargeIcons;
  }, []);
  const chargeColors = React.useMemo(() => {
    const result: Partial<Record<PayoutResult["status"], string>> = {
      failed: "#e74c3c", // Beautiful red for failed status
      pending: "#f39c12", // Warm orange for pending status
      canceled: "#95a5a6", // Soft gray for canceled status
      paid: "#2ecc71", // Vibrant green for paid status,
    };
    return result;
  }, []);
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
            <LeftSide />
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
                      jsxElement: <TabsCode />,
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
                      jsxElement: <TabCode />,
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
                      jsxElement: <FieldCode />,
                      label: "Feild",
                    },
                  ],
                },
                {
                  label: "Fields",
                  elements: [
                    {
                      jsxElement: <BooleanFieldCode />,
                      label: "Boolean Field",
                    },
                    {
                      jsxElement: <StringFieldCode />,
                      label: "String Field",
                    },
                    {
                      jsxElement: <PasswordFieldCode />,
                      label: "Password Field",
                    },
                    {
                      jsxElement: <NumberFieldCode />,
                      label: "Number Field",
                    },
                    {
                      jsxElement: <RangeFieldCode />,
                      label: "Range Field",
                    },
                    {
                      jsxElement: <FileFieldCode />,
                      label: "File Field",
                    },
                    {
                      jsxElement: <EnumFieldCode />,
                      label: "Enum Field",
                    },
                    {
                      jsxElement: <FilterFieldCode />,
                      label: "Filter Field",
                    },
                    {
                      jsxElement: <PinFieldCode />,
                      label: "Pin Field",
                    },
                    {
                      jsxElement: <RecorderFieldCode />,
                      label: "Recorder Field",
                    },
                    {
                      jsxElement: <ArrayFieldCode />,
                      label: "Array Field",
                    },
                    {
                      jsxElement: <DateFieldCode />,
                      label: "Date Field",
                    },
                    {
                      jsxElement: <ImageFieldCode />,
                      label: "Image Field",
                    },
                  ],
                },
                {
                  label: "UI",
                  elements: [
                    {
                      jsxElement: (
                        <div className="flex flex-col">
                          <Starts length={10} starts={2} />
                          <Starts color="primary" choisedIcon={allIcons.solid.faHeart} length={5} starts={2} unchoisedIcon={allIcons.regular.faHeart} />
                        </div>
                      ),
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
                      jsxElement: (
                        <ClickedView>
                          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam ratione, quidem adipisci, impedit nemo beatae similique ducimus error obcaecati voluptas labore cum facere
                          neque voluptates quam eum illum odit earum.
                        </ClickedView>
                      ),
                      label: "Clicked View",
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
                              menu: range(5).map((item, index) => {
                                return {
                                  label: `Item ${index}`,
                                  click() {
                                    showToast(`Menu Item ${index} Clicked`, "info");
                                  },
                                  icon: "solid:faCheck",
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
                    {
                      jsxElement: (
                        <Button
                          onClick={() => {
                            viewTemps.setTemp("bottomSheet", true);
                          }}
                        >
                          <Translate content="show bottom sheet" />
                        </Button>
                      ),
                      label: "Bottom Sheet",
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
                      jsxElement: <BallLoading balls={6} />,
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
                      jsxElement: <FastListCode />,
                      label: "Fast List",
                    },
                    {
                      label: "Full Field",
                      jsxElement: (
                        <EmptyComponent>
                          <FullFieldCode />
                        </EmptyComponent>
                      ),
                    },
                    {
                      label: "Infinity Scroll",
                      jsxElement: <InfinityScrollCode />,
                    },
                  ],
                },
              ].map(({ label, elements }, i) => {
                return (
                  <EmptyComponent key={i}>
                    <div
                      className="p-3 max-md:w-full"
                      style={{
                        ...colorMerge("secondary.background"),
                      }}
                    >
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
      <BottomSheetLayout min={"80vh"}>
        <div className="p-5">
          <Scroll>
            <MarkDown value={markDownArrayContent.join("\n")} />
          </Scroll>
        </div>
      </BottomSheetLayout>
      <DateLayout />
      <ColorLayout />
    </EmptyComponent>
  );
}
