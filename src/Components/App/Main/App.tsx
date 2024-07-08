import React from "react";
import { Link, Redirect, Route, Switch, useParams } from "react-router-dom";
import { EmptyComponent } from "@/Components/Helpers/EmptyComponent";
import { Toasts } from "@/reducers/Toast/Toats";
import { settingHooks } from "@/reducers/Settings/settings.model";
import { Header } from "../Header/Header";
import { Anchor, Button, CircleTip } from "@/Components/Helpers/Buttons";
import { Window } from "./Window";
import { TitleProvider, TitleView } from "@/Components/Helpers/Title";
import { CreateEcommerceForm } from "./CreateEcommerceForm";
import { Profile } from "./Profile";
import { SettingsView } from "../Configurations/SettingsView";
import { SettingUpdateView } from "../Configurations/SettingUpdateView";
import { faBars, faGears, faHome, faPlus, faRotate, faTrash } from "@fortawesome/free-solid-svg-icons";
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
import { mergeArray, useCopyState, useIdleStatus } from "@/functions/react-utils";
import { faEdit, faUser } from "@fortawesome/free-regular-svg-icons";
import { Commands } from "@/reducers/Command/Commands";
import { Line } from "@/Components/Helpers/Line";
import { showToast } from "@/data/system/toasts.model";
import { firebaseApp } from "@/functions/app/web/firebase";
import { List } from "@/hooks/list.hooks";
import { collection, getDocs, onSnapshot, deleteDoc, doc, getDoc } from "firebase/firestore";
import { Card } from "./Card";
import { LeftSide } from "../Sides/LeftSide";
import { RightSide } from "../Sides/RightSide";
import { CircleLoading } from "@/Components/Helpers/Loading";
import { LeftSideView } from "./LeftSideView";
import { WebUI } from "./WebUI";
export const ProjectName = () => {
  const project = useParams<{ id: string }>();
  const user = getUser();
  const { data: projectName, status } = useIdleStatus<string>(async () => {
    if (!user.get) {
      throw Error("Need To Login");
    }
    let docRef = doc(firebaseApp.db, "users", user.get.uid, "projects", project.id);
    const docSnap = await getDoc(docRef);
    const result = { ...docSnap.data() };
    return result.name;
  }, [user.get, project]);

  React.useEffect(() => {
    status.set("idle");
  }, []);

  return (
    <EmptyComponent>
      {status.get == "loading" && <CircleLoading />}
      {status.get == "success" && <Link to="/">{projectName.get}</Link>}
    </EmptyComponent>
  );
};
export function App() {
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
  const {
    data: projects,
    status,
    error,
  } = useIdleStatus(async () => {
    if (!user.get) {
      throw Error("Need To Login");
    }
    let colRef = collection(firebaseApp.db, "users", user.get.uid, "projects");
    const { docs } = await getDocs(colRef);
    return docs;
  }, [user.get]);
  React.useEffect(() => {
    if (user.get) {
      status.set("idle");
      let colRef = collection(firebaseApp.db, "users", user.get.uid, "projects");
      const un = onSnapshot(colRef, () => {
        status.set("idle");
      });
      return un;
    }
  }, [user.get]);
  React.useEffect(() => {
    if (error.get) {
      showToast("Get Projects Problem", "error");
    }
  }, [error.get]);
  return (
    <EmptyComponent>
      <Header>
        <div className="flex justify-between items-center px-4 w-full">
          <h1 className="text-2xl truncate">
            <Switch>
              <Route exact path="/projects/:id">
                <ProjectName />
              </Route>
              <Route path="*">
                <Link to="/">Build Ecommerce</Link>
              </Route>
            </Switch>
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
      </Header>
      <Window>
        <Route exact path="/">
          <div className="flex flex-wrap justify-center items-center gap-3 w-full h-full">
            {status.get == "success" && (
              <List
                slotId="projects"
                data={projects.get || []}
                component={({ item: line, index }) => {
                  const project = line.data();
                  const hover = useCopyState(false);
                  return (
                    <Card draggable key={index} onMouseEnter={() => hover.set(true)} onMouseLeave={() => hover.set(false)} className="justify-center w-[300px] max-md:w-full h-[200px] cursor-pointer">
                      <Link to={`/projects/${line.id}`} className="flex justify-center p-1 h-full">
                        <div className="rounded-2xl overflow-hidden">
                          <img src={project.imgSrc} className="w-full h-full object-cover" />
                        </div>
                      </Link>
                      <div>
                        <Line />
                        <div className="flex justify-between items-center px-5 py-2 h-[70px]">
                          <TitleView className="text-3xl truncate" title={project.name}>
                            {project.name || " - "}
                          </TitleView>
                          {hover.get && (
                            <EmptyComponent>
                              <span>
                                <CircleTip
                                  onClick={async () => {
                                    const red = new Redirect({
                                      to: "/ecommerce/" + line.ref.id,
                                    });
                                    red.render();
                                  }}
                                  icon={faEdit}
                                />
                              </span>
                              <span>
                                <CircleTip
                                  onClick={async () => {
                                    const { response } = await webApi.openDialog({
                                      title: "Delete Ecommerce",
                                      message: "Are You Sure?",
                                      buttons: ["no", "yes"],
                                    });
                                    if (response) {
                                      await deleteDoc(line.ref);
                                    }
                                  }}
                                  icon={faTrash}
                                />
                              </span>
                            </EmptyComponent>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                }}
              />
            )}
            {user.get && (
              <Card className="flex-row justify-center items-center w-[300px] max-md:w-full h-[200px]">
                {status.get != "loading" && (
                  <TitleView title="Reload">
                    <CircleTip
                      onClick={() => {
                        status.set("idle");
                      }}
                      icon={faRotate}
                    />
                  </TitleView>
                )}
                <TitleView title="Add New Ecommerce">
                  <CircleTip
                    icon={faPlus}
                    onClick={() => {
                      if (user.get) {
                        visibilityTemp.setTemp("create-ecommerce", true);
                      } else {
                        visibilityTemp.setTemp("login-page", true);
                      }
                    }}
                  />
                </TitleView>
              </Card>
            )}
            {!user.get && (
              <div className="flex justify-center text-3xl">
                No User,{" "}
                <Anchor
                  onClick={() => {
                    visibilityTemp.setTemp("login-page", true);
                  }}
                >
                  Login
                </Anchor>
              </div>
            )}
          </div>
        </Route>
        <Route exact path="/projects/:id">
          <EmptyComponent>
            <LeftSide>
              <LeftSideView />
            </LeftSide>
            <div className="w-full h-full">
              <WebUI
                viewId="inrow-view"
                metaData={{
                  className: "flex justify-center items-center",
                }}
                childContent={[
                  {
                    viewId: "card",
                    metaData: {
                      className: "flex flex-col gap-2",
                    },
                    childContent: [
                      {
                        viewId: "inrow-view",
                        metaData: {
                          className: "flex p-2 justify-between",
                        },
                        childContent: [
                          {
                            viewId: "text",
                            metaData: {
                              content: "Projects",
                              className: "text-2xl",
                            },
                          },
                          {
                            viewId: "circle-tip",
                            metaData: {
                              icon: "faXmark",
                            },
                          },
                        ],
                      },
                      {
                        viewId: "line",
                        metaData: {},
                      },
                      {
                        viewId: "inrow-view",
                        metaData: {
                          className: "flex flex-col p-2 gap-2",
                        },
                        childContent: [
                          {
                            viewId: "feild",
                            metaData: {
                              content: "Name",
                              value: "Project Name",
                              placeholder: "Project Name",
                            },
                          },
                          {
                            viewId: "feild",
                            metaData: {
                              content: "Name",
                              value: "Project Name",
                              placeholder: "Project Name",
                            },
                          },
                          {
                            viewId: "button",
                            metaData: {
                              content: "Add",
                              icon: "faPlus",
                            },
                          },
                          {
                            viewId: "button",
                            metaData: {
                              content: "Delete",
                              icon: "faTrash",
                            },
                          },
                        ],
                      },
                    ],
                  },
                ]}
              />
            </div>
            <RightSide>Problems</RightSide>
          </EmptyComponent>
        </Route>
      </Window>
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
