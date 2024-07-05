import React from "react";
import { HeaderNotification } from "Components/HeaderNotification";
import { tw, useCopyState, useIdleStatus } from "@/functions/react-utils";
import { getSettingValue } from "@/reducers/Settings/settings.model";
import { Card } from "./Card";
import { Anchor, CircleTip } from "@/Components/Helpers/Buttons";
import { faPlus, faRotate, faTrash } from "@fortawesome/free-solid-svg-icons";
import { TitleView } from "@/Components/Helpers/Title";
import { visibilityTemp } from "@/reducers/Object/allTemps";
import { firebaseApp } from "@/functions/app/web/firebase";
import { getUser } from "@/hooks/firebase";
import { collection, deleteDoc, getDocs, onSnapshot } from "firebase/firestore";
import { Line } from "@/Components/Helpers/Line";
import { showToast } from "@/data/system/toasts.model";
import { List } from "@/hooks/list.hooks";
import { useColorMerge } from "@/data/system/colors.model";
import { webApi } from "@/functions/app/web";
export function Window() {
  const visibility = getSettingValue("visibility/header.boolean");
  const isAnimation = getSettingValue("preferences/animation.boolean");
  const user = getUser();
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
    <div className={tw("absolute bottom-0 inset-x-0 w-full border-solid border-transparent border-b top-0 flex flex-col", visibility && "top-[51px]", isAnimation && "transition-[top] duration-200")}>
      <HeaderNotification />
      <div className="flex flex-wrap justify-center items-center gap-1 p-1 h-full overflow-hidden">
        <List
          slotId="projects"
          data={projects.get || []}
          component={({ item: line, index }) => {
            const project = line.data();
            const hover = useCopyState(false);
            const colorMerge = useColorMerge();
            return (
              <Card draggable key={index} onMouseEnter={() => hover.set(true)} onMouseLeave={() => hover.set(false)} className="justify-center w-[300px] max-md:w-full h-[200px] cursor-pointer">
                <div className="flex justify-center p-1 h-full">
                  <div className="rounded-2xl overflow-hidden">
                    <img src={project.imgSrc} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div>
                  <Line />
                  <div className="flex justify-between items-center px-5 py-2 h-[70px]">
                    <TitleView className="text-3xl truncate" title={project.name}>
                      {project.name || " - "}
                    </TitleView>
                    {hover.get && (
                      <span>
                        <CircleTip
                          style={{
                            ...colorMerge("error", {
                              color: "error.content",
                            }),
                          }}
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
                    )}
                  </div>
                </div>
              </Card>
            );
          }}
        />
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
    </div>
  );
}
