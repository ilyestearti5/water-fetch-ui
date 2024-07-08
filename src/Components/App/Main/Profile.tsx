import { visibilityTemp } from "@/reducers/Object/allTemps";
import { BlurOverlay } from "@/Components/Helpers/Overlays";
import { Card } from "./Card";
import { Line } from "@/Components/Helpers/Line";
import { Button, CircleTip, Icon } from "@/Components/Helpers/Buttons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { getUser } from "@/hooks/firebase";
import { Image } from "@/Components/Helpers/Image";
import { EmptyComponent } from "@/Components/Helpers/EmptyComponent";
import { useColorMerge } from "@/data/system/colors.model";
import { signOut } from "firebase/auth";
import { firebaseApp } from "@/functions/app/web/firebase";
import { webApi } from "@/functions/app/web";
export const Profile = () => {
  const visibility = visibilityTemp.getTemp<boolean>("profile");
  const user = getUser();
  const colorMerge = useColorMerge();
  return (
    <BlurOverlay hidden={!(visibility && user.get)} onLoadContent={() => {}}>
      <Card>
        <div className="flex justify-between items-center p-2">
          <h1 className="flex items-center gap-2 text-3xl">
            <Icon icon={faUserCircle} />
            Profile
          </h1>
          <CircleTip
            icon={faXmark}
            onClick={() => {
              visibilityTemp.setTemp("profile", false);
            }}
          />
        </div>
        <Line />
        {user.get && (
          <EmptyComponent>
            <div className="flex items-center p-2">
              <Image className="w-[100px] h-[100px]" src={user.get?.photoURL ?? undefined} alt={<div>No Image</div>} />
              <div className="flex flex-col gap-1 ml-2">
                <div className="text-xl">{user.get.displayName}</div>
                <div className="text-sm">{user.get.email}</div>
              </div>
            </div>
            <Line />
            <div className="flex justify-end gap-1 p-2">
              <Button
                onClick={async () => {
                  const { response } = await webApi.openDialog({
                    title: "Logout",
                    message: "Are you sure you want to logout?",
                    buttons: ["No", "Yes"],
                    defaultId: 1,
                    cancelId: 0,
                    type: "warning",
                  });
                  if (response === 1) {
                    await signOut(firebaseApp.auth);
                  }
                }}
                style={{
                  ...colorMerge("error", {
                    color: "error.content",
                  }),
                }}
              >
                Logout
              </Button>
            </div>
          </EmptyComponent>
        )}
      </Card>
    </BlurOverlay>
  );
};
