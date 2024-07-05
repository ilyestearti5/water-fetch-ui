import { Button, CircleTip, Tip } from "@/Components/Helpers/Buttons";
import { visibilityTemp } from "@/reducers/Object/allTemps";
import { faArrowLeft, faArrowRight, faRotate, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Text } from "@/Components/Text";
import { BlurOverlay } from "@/Components/Helpers/Overlays";
import { Feild } from "@/Components/Feilds/Feild";
import { Card } from "./Card";
import { Label } from "@/Components/Helpers/Form";
import { Password } from "@/Components/Feilds/PasswordFeild";
import { setFocused, tw, useCopyState } from "@/functions/react-utils";
import { Line } from "@/Components/Helpers/Line";
import { execAction, useAction } from "@/data/system/actions.model";
import { feildHooks, checkFormByFeilds } from "@/data/system/feild.model";
import { FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { firebaseApp } from "@/functions/app/web/firebase";
import { showToast } from "@/data/system/toasts.model";
import { MultiScreenPage } from "@/Components/Helpers/MultiScreenPageProps";
import { useColorMerge } from "@/data/system/colors.model";
import { ImageChoiser } from "@/Components/Feilds/ImageChoiser";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { range } from "main/utils";
export const Login = () => {
  const passwordState = useCopyState<string | undefined>(undefined);
  const nameState = feildHooks.getOneFeild("login-user-email", "value");
  const action = useAction(
    "change-account",
    async () => {
      if (typeof nameState == "string" && typeof passwordState.get == "string") {
        const { isValide } = checkFormByFeilds(["login-user-email"]);
        if (!isValide) {
          setFocused("login-user-email");
          return;
        }
        try {
          await signInWithEmailAndPassword(firebaseApp.auth, nameState, passwordState.get);
        } catch {
          showToast("Firebase Problem", "error", "firebase-login");
        }
      } else {
        showToast("Login Problem", "error", "login");
      }
    },
    [passwordState.get, nameState],
  );
  return (
    <div className="flex flex-col justify-center h-full">
      <div>
        <Label labelName="email">
          <Feild
            controls={{
              "([a-zA-Z0-9_]|\\.)+@gmail.com$": {
                err: "Invalide Email",
                succ: "Valide Email",
              },
            }}
            controlsPosition="top"
            placeholder="Enter Email"
            inputName="login-user-email"
          />
        </Label>
        <Label labelName="password">
          <Password state={passwordState} placeholder="Enter Password" />
        </Label>
      </div>
      <div className="flex justify-end gap-1 p-2">
        <Button
          icon={action?.status == "loading" ? faRotate : undefined}
          iconClassName={tw("transition-[transform] duration-200", action?.status == "loading" && "animate-spin")}
          className="w-full"
          onClick={() => {
            execAction("change-account");
          }}
        >
          <Text content="Login" />
        </Button>
      </div>
    </div>
  );
};
export const Signin = () => {
  const passwordState = useCopyState<string | undefined>(undefined);
  const passwordConfirmState = useCopyState<string | undefined>(undefined);
  const imageUrl = useCopyState<string | null>(null);
  return (
    <div className="flex flex-col h-full">
      <div>
        <div className="flex justify-center p-3">
          <ImageChoiser
            onChange={(e) => {
              imageUrl.set(e?.dataURL || null);
            }}
            src={imageUrl.get ?? undefined}
          />
        </div>
        <Line />
      </div>
      <div className="h-full">
        <Label labelName="email">
          <Feild inputName="email" placeholder="Enter Email" />
        </Label>
        <Label labelName="password">
          <Password state={passwordState} placeholder="Enter Password" />
        </Label>
        <Label labelName="confirm password">
          <Password state={passwordConfirmState} placeholder="Enter Confirmation Of Password" />
        </Label>
      </div>
      <div className="flex justify-evenly items-center gap-1 p-3">
        <Tip
          icon={faFacebook}
          className="w-[50px] h-[50px] text-2xl"
          onClick={async () => {
            await signInWithPopup(firebaseApp.auth, new FacebookAuthProvider());
            showToast("User Login Success", "success");
          }}
        />
        <Tip
          icon={faGoogle}
          className="w-[50px] h-[50px] text-2xl"
          onClick={async () => {
            await signInWithPopup(firebaseApp.auth, new GoogleAuthProvider());
            showToast("User Login Success", "success");
          }}
        />
      </div>
      <Line />
      <div className="p-2">
        <Button className="w-full">Create</Button>
      </div>
    </div>
  );
};
export const pages = [<Login />, <Signin />];
export const LoginPage = () => {
  const loginPage = visibilityTemp.getTemp<boolean>("login-page");
  const focused = useCopyState(0);
  const colorMerge = useColorMerge();
  const isStart = focused.get == 0;
  const isEnd = focused.get == pages.length - 1;
  return (
    <BlurOverlay hidden={!loginPage}>
      <Card className="justify-between max-md:rounded-none max-md:w-full md:h-[80vh] max-md:h-full">
        <div className="flex justify-between items-center p-2">
          <h1 className="text-2xl truncate">{focused.get ? "Signin" : "Login"}</h1>
          <CircleTip
            onClick={() => {
              visibilityTemp.setTemp("login-page", false);
            }}
            icon={faXmark}
          />
        </div>
        <Line />
        <div className="relative h-full overflow-hidden">
          <MultiScreenPage pages={pages} focused={focused.get} />
        </div>
        <Line />
        <div className="flex justify-evenly p-2">
          <Tip
            icon={faArrowLeft}
            className={tw(isStart && "pointer-events-none")}
            style={{
              ...colorMerge(
                isStart && {
                  color: "gray.opacity",
                },
              ),
            }}
            onClick={() => {
              focused.set((s) => s - 1);
            }}
          />
          <div className="flex">
            {range(0, pages.length - 1).map((index) => {
              return (
                <span
                  className="inline-block rounded-full w-[20px] h-[20px] cursor-pointer"
                  onClick={() => {
                    focused.set(index);
                  }}
                  style={{
                    ...colorMerge(index == focused.get ? "primary" : "gray.opacity"),
                  }}
                />
              );
            })}
          </div>
          <Tip
            className={tw(isEnd && "pointer-events-none")}
            icon={faArrowRight}
            style={{
              ...colorMerge(
                isEnd && {
                  color: "gray.opacity",
                },
              ),
            }}
            onClick={() => {
              focused.set((s) => s + 1);
            }}
          />
        </div>
      </Card>
    </BlurOverlay>
  );
};
