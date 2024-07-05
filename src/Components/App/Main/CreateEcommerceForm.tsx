import { Button, CircleTip } from "@/Components/Helpers/Buttons";
import { faPlus, faRotate, faXmark } from "@fortawesome/free-solid-svg-icons";
import { visibilityTemp } from "@/reducers/Object/allTemps";
import { BlurOverlay } from "@/Components/Helpers/Overlays";
import { Card } from "./Card";
import { Line } from "@/Components/Helpers/Line";
import { Label } from "@/Components/Helpers/Form";
import { Feild } from "@/Components/Feilds/Feild";
import { useColorMerge } from "@/data/system/colors.model";
import { feildHooks, getManyFeilds, checkFormByFeilds } from "@/data/system/feild.model";
import { mergeObject, setFocused } from "@/functions/react-utils";
import { TitleView } from "@/Components/Helpers/Title";
import { twMerge } from "tailwind-merge";
import { firebaseApp } from "@/functions/app/web/firebase";
import { doc, setDoc } from "firebase/firestore";
import { getUser } from "@/hooks/firebase";
import { nanoid } from "@reduxjs/toolkit";
import { showToast } from "@/data/system/toasts.model";
import { ImageChoiser } from "@/Components/Feilds/ImageChoiser";
import { useTemp } from "@/reducers/Object/object.slice";
import { execAction, useAction } from "@/data/system/actions.model";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
export const CreateEcommerceForm = () => {
  const visited = visibilityTemp.getTemp<boolean>("create-ecommerce");
  const colorMerge = useColorMerge();
  const project = getManyFeilds({
    name: "create-ecommerce-name",
  });
  const user = getUser();
  const base64 = useTemp<string>("create-ecommerce-image-url");
  const action = useAction(
    "create-new-ecommerce",
    async () => {
      if (!user.get) {
        showToast("Please Login", "error");
        return;
      }
      const { isValide, controls } = checkFormByFeilds(["create-ecommerce-name"]);
      if (!isValide) {
        const a = controls.find(({ isValide }) => !isValide);
        if (a?.feildName) {
          setFocused(a.feildName);
          return;
        }
      }
      let imageUrl: string | null = null;
      if (base64.get) {
        try {
          const binaryString = atob(base64.get);
          const length = binaryString.length;
          const bytes = new Uint8Array(length);
          for (let i = 0; i < length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
          }
          // Now `bytes` is ready to be used with `uploadBytes`
          const storeRef = ref(firebaseApp.store, `users/${user.get.uid}/projects/${project.name}/image`);
          const upload = await uploadBytes(storeRef, bytes);
          imageUrl = await getDownloadURL(upload.ref);
        } catch (e: any) {
          showToast(`[ERR] : ${e.message}`, "error");
          return;
        }
      }
      await setDoc(
        doc(firebaseApp.db, "users", user.get.uid, "projects", nanoid()),
        { ...project, imageUrl },
        {
          merge: true,
        },
      );
      feildHooks.setOneFeild("create-ecommerce-name", "value", "");
      visibilityTemp.setTemp("create-ecommerce", false);
      base64.set(null);
      showToast("Ecommerce Created", "success");
    },
    [user.get, base64.get, project],
  );
  return (
    <BlurOverlay
      onLoadContent={() => {
        setFocused("create-ecommerce-name");
      }}
      hidden={!visited}
    >
      <Card className="max-md:rounded-none max-md:w-full max-md:h-full">
        <div className="flex justify-between items-center p-2">
          <h1 className="text-4xl truncate">Create New Ecommerce</h1>
          <TitleView title="Close">
            <CircleTip
              onClick={() => {
                visibilityTemp.setTemp("create-ecommerce", false);
              }}
              icon={faXmark}
            />
          </TitleView>
        </div>
        <Line />
        <div className="flex justify-center items-center p-2">
          <ImageChoiser
            alt={<span className="no-italic">No Image Choised</span>}
            onChange={(p) => {
              base64.set(p?.dataURL || null);
            }}
            src={base64.get ?? undefined}
          />
        </div>
        <Line />
        <div className="p-2">
          <Label labelName="name">
            <Feild
              controlsPosition="top"
              controls={{
                "^[a-zA-Z0-9_ ]+$": {
                  err: "Only letters and numbers are allowed",
                },
                "^[a-zA-Z0-9_]": {
                  err: "Name can't start with a space",
                },
                "[a-zA-Z0-9_]$": {
                  err: "Name can't end with a space",
                },
              }}
              placeholder="name"
              inputName="create-ecommerce-name"
            />
          </Label>
        </div>
        <Line />
        <div className="flex justify-end gap-1 p-2">
          <Button
            style={{
              ...colorMerge("gray.opacity", {
                color: "text.color",
              }),
            }}
            onClick={() => {
              ["create-ecommerce-name"].forEach((name) => {
                feildHooks.setOneFeild(name, "value", "");
              });
            }}
          >
            Reset
          </Button>
          <Button
            icon={mergeObject(faPlus, action?.status == "loading" && faRotate)}
            iconClassName={twMerge("transition-transform duration-200", action?.status == "loading" && "animate-spin")}
            onClick={async () => {
              try {
                await execAction("create-new-ecommerce");
              } catch {}
            }}
          >
            Create
          </Button>
        </div>
      </Card>
    </BlurOverlay>
  );
};
