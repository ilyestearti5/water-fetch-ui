import { viewTemps } from "@/reducers/Object/allTemps";
import { signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { setTemp, getTemp } from "@/reducers/Object/object.slice";
import { Server } from "@/apis/firebase";
import { Password } from "@/components/Fields/PasswordField";
import { openDialog, openMenu } from "@/functions/app/web/web-utils";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { faRotate, faXmark } from "@fortawesome/free-solid-svg-icons";
import { execAction, useAction } from "@/data/system/actions.model";
import { delay, mergeArray, setFocused, tw } from "@/utils";
import { checkFormByFeilds, fieldHooks, useUser, useUserFromDB, showToast, useColorMerge, useCopyState } from "@/hooks";
import { Anchor, AsyncComponent, BlurOverlay, Button, Card, CircleLoading, CircleTip, EmptyComponent, Feild, Icon, Line, MultiScreenPage, Scroll, Translate } from "@/components";
import { allIcons } from "@/apis";
export const emailRegExp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,} *$";
export interface ProfileContentProps {
  children?: any;
}
export interface ProfileViewProps extends ProfileContentProps {}
export interface FixedProfileViewProps extends ProfileViewProps {}
export const SignupPage = () => {
  const colorMerge = useColorMerge();
  const email = fieldHooks.getOneFeild("signupUseremail", "value");
  const passwordState = useCopyState<undefined | string>("");
  const passwordConfirmState = useCopyState<undefined | string>("");
  const signupAction = useAction(
    "signup",
    async () => {
      if (!Server.server?.auth) {
        showToast("Error When Loading The Auth", "error");
        return;
      }
      if (!email) {
        showToast("Email is required", "error");
        setFocused("signupUseremail");
        return;
      }
      if (!checkFormByFeilds(["signupUseremail"]).isValide) {
        showToast("Please fill the email correctly!", "error");
        setFocused("signupUseremail");
        return;
      }
      if (!passwordState.get) {
        showToast("Password must be at least 6 characters", "error");
        setFocused("user-password");
        return;
      }
      if (passwordState.get !== passwordConfirmState.get) {
        showToast("Password and confirm password must be the same!", "error");
        setFocused("user-password-confirm");
        return;
      }
      await createUserWithEmailAndPassword(Server.server.auth, email, passwordState.get);
    },
    [email, passwordState.get, passwordConfirmState.get],
  );
  return (
    <Scroll className="flex max-sm:flex-col items-center h-full">
      <div className="p-8 w-1/2 max-sm:w-full">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            await execAction("signup");
          }}
        >
          <div className="mb-4">
            <label className="block mb-2 capitalize">
              <Translate content="email" /> :{" "}
            </label>
            <Feild
              controls={{
                [emailRegExp]: {
                  err: "Invalid email",
                  succ: "Valid email",
                },
              }}
              placeholder="@exmple.com"
              inputName="signupUseremail"
              propositions={email && !email.includes("@") ? [email + "@gmail.com"] : []}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 capitalize">
              <Translate content="password" />
            </label>
            <Password placeholder="********" id="user-password" state={passwordState} />
          </div>
          <div className="mb-4">
            <label className="block mb-2 capitalize">
              <Translate content="confirm password" />
            </label>
            <Password placeholder="********" id="user-password-confirm" state={passwordConfirmState} />
          </div>
          <Button icon={signupAction?.status == "loading" ? faRotate : undefined} iconClassName={tw("animate-spin")} type="submit" className="py-2 rounded-md">
            <Translate content="signup" />
          </Button>
        </form>
        <p className="mt-8 text-center text-sm capitalize">
          <span
            style={{
              ...colorMerge({
                color: "gray.opacity.2",
              }),
            }}
          >
            <Translate content="already have an account?" />
          </span>{" "}
          <Anchor
            onClick={(e) => {
              e.preventDefault();
              setTemp("focusedLoginView", 0);
            }}
            className="capitalize"
          >
            <Translate content="login" />
          </Anchor>
        </p>
      </div>
      <div className="flex justify-center items-center p-8 w-1/2 max-sm:w-full">
        <div className="flex flex-col gap-1">
          <h2
            className="mb-4 font-semibold text-2xl"
            style={{
              ...colorMerge({
                color: "primary",
              }),
            }}
          >
            Sigin Into Water Fetch
          </h2>
          <p className="mb-4 capitalize">
            <Translate content="water fetch is a platform give's the possiblity for doing more thing by dahbia card" />
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12">
              <span className="text-xl">📦</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg capitalize">
                <Translate content="history" />
              </h3>
              <p
                style={{
                  ...colorMerge({
                    color: "gray.opacity.2",
                  }),
                }}
                className="text-sm capitalize"
              >
                <Translate content="see all historys" />
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12">
              <span className="text-xl">💵</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg capitalize">
                <Translate content="payouts" />
              </h3>
              <p
                className="text-sm capitalize"
                style={{
                  ...colorMerge({
                    color: "gray.opacity.2",
                  }),
                }}
              >
                <Translate content="power save pays" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  );
};
export const LoginPage = () => {
  const colorMerge = useColorMerge();
  const email = fieldHooks.getOneFeild("loginUseremail", "value");
  const passwordState = useCopyState<undefined | string>("");
  useAction(
    "login",
    async () => {
      if (!Server.server?.auth) {
        showToast("Error When Loading The Auth", "error");
        return;
      }
      if (!email) {
        showToast("Email is required", "error");
        return;
      }
      if (!passwordState.get) {
        showToast("Password must be at least 6 characters", "error");
        return;
      }
      await signInWithEmailAndPassword(Server.server.auth, email, passwordState.get);
    },
    [email, passwordState.get],
  );
  const signInWithPopupFacebookAction = useAction(
    "sign-in-facebook",
    async () => {
      if (Server.server?.auth) {
        await signInWithPopup(Server.server.auth, new FacebookAuthProvider());
      }
    },
    [],
  );
  const signInWithPopupGoogleAction = useAction(
    "sign-in-google",
    async () => {
      if (Server.server?.auth) {
        await signInWithPopup(Server.server.auth, new GoogleAuthProvider());
      }
    },
    [],
  );
  return (
    <Scroll className="flex max-sm:flex-col items-center">
      <div className="p-8 w-1/2 max-sm:w-full">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (!Server.server?.auth) {
              showToast("Error When Loading The Auth", "error");
              return;
            }
            if (email && passwordState.get) {
              try {
                await signInWithEmailAndPassword(Server.server.auth, email, passwordState.get);
              } catch {
                showToast("Password Or Email Is Incorrect 😴", "error");
              }
            } else if (!email) {
              showToast("Email Required!", "warning");
            } else {
              showToast("Password Required!", "warning");
            }
          }}
        >
          <div className="mb-4">
            <label className="block mb-2 capitalize">
              <Translate content="email" /> :{" "}
            </label>
            <Feild
              controls={{
                [emailRegExp]: {
                  err: "Invalid email",
                  succ: "Valid email",
                },
              }}
              inputName="loginUseremail"
              placeholder="@exmple.com"
              propositions={email && !email.includes("@") ? [email + "@gmail.com"] : []}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 capitalize">
              <Translate content="password" />
            </label>
            <Password placeholder="********" state={passwordState} />
          </div>
          <Button type="submit" className="py-2">
            <Translate content="login" />
          </Button>
        </form>
        <div className="flex justify-evenly items-center my-3">
          <CircleTip
            iconClassName={tw(signInWithPopupGoogleAction?.status == "loading" && "animate-spin")}
            icon={signInWithPopupGoogleAction?.status == "loading" ? faRotate : faGoogle}
            onClick={async () => {
              // Google Sign In
              await execAction("sign-in-google");
            }}
          />
          <CircleTip
            iconClassName={tw(signInWithPopupFacebookAction?.status == "loading" && "animate-spin")}
            icon={signInWithPopupFacebookAction?.status == "loading" ? faRotate : faFacebook}
            onClick={async () => {
              // Facebook Sign In
              await execAction("sign-in-facebook");
            }}
          />
        </div>
        <p className="text-center text-sm">
          <span
            style={{
              ...colorMerge({
                color: "gray.opacity.2",
              }),
            }}
            className="capitalize"
          >
            <Translate content="don't have an account?" />
          </span>{" "}
          <Anchor
            onClick={(e) => {
              e.preventDefault();
              setTemp("focusedLoginView", 1);
            }}
            className="capitalize"
          >
            <Translate content="sign up" />
          </Anchor>
        </p>
      </div>
      <div className="flex justify-center items-center p-8 w-1/2 max-sm:w-full">
        <div className="flex flex-col gap-1">
          <h2
            className="mb-4 font-semibold text-2xl capitalize"
            style={{
              ...colorMerge({
                color: "primary",
              }),
            }}
          >
            <Translate content="login into water fetch" />
          </h2>
          <p className="mb-4 capitalize">
            <Translate content="water fetch is a platform give's the possiblity for doing more thing by dahbia card" />
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12">
              <span className="text-xl">📦</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg capitalize">
                <Translate content="history" />
              </h3>
              <p
                className="text-sm"
                style={{
                  ...colorMerge({
                    color: "gray.opacity.2",
                  }),
                }}
              >
                <Translate content="see all historys" />
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12">
              <span className="text-xl">💵</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg capitalize">
                <Translate content="payouts" />
              </h3>
              <p
                className="text-sm capitalize"
                style={{
                  ...colorMerge({
                    color: "gray.opacity.2",
                  }),
                }}
              >
                <Translate content="power save pays" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Scroll>
  );
};
export const LoginContent = () => {
  const focusedView = getTemp<number>("focusedLoginView");
  return <MultiScreenPage focused={focusedView ?? 0} pages={[<LoginPage />, <SignupPage />]} />;
};
export const ProfileContent = ({ children = "" }: ProfileContentProps) => {
  const colorMerge = useColorMerge();
  const user = useUser();
  const userFromDb = useUserFromDB();
  const isDev = getTemp<boolean>("env.isDev");
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="p-2">
        <div className="flex max-sm:flex-col items-center gap-3">
          <div
            style={{
              ...colorMerge(
                user?.emailVerified && {
                  outlineColor: "success.text",
                },
              ),
            }}
            className={tw("relative rounded-full w-[100px] h-[100px] max-sm:w-[60px] max-sm:h-[60px] overflow-hidden", user?.emailVerified && "outline-1 outline-offset-1")}
          >
            {user?.photoURL && <img src={user?.photoURL?.toString()} className="w-full h-full object-cover" />}
            {!user?.photoURL && <Icon icon={faUser} />}
          </div>
          <div className="max-sm:flex max-sm:flex-col max-sm:justify-cente">
            <h1 className="text-2xl">{userFromDb?.nickname || "No Name"}</h1>
            <p>{userFromDb?.email}</p>
            {userFromDb && (
              <div className="flex items-center">
                <span>Phone Number</span> : {user?.phoneNumber || " - "}
              </div>
            )}
            <Button
              onClick={({ clientX, clientY }) => {
                openMenu({
                  x: clientX,
                  y: clientY,
                  menu: mergeArray<Partial<Electron.MenuItem>>(
                    ...[
                      { label: "Profile", pathname: "personal" },
                      {
                        label: "Billing",
                        pathname: "billing",
                      },
                      {
                        label: "Security",
                        pathname: "security",
                      },
                    ].map(({ label, pathname }) => {
                      return {
                        label,
                        click() {
                          const a = document.createElement("a");
                          const url = (isDev ? "http://localhost:2000" : "https://water-fetch-account.web.app") + "/profile/" + pathname;
                          a.target = "_blank";
                          a.href = url;
                          a.click();
                        },
                      };
                    }),
                    {
                      type: "separator",
                    },
                    {
                      async click() {
                        setTemp("menu.id", null);
                      },
                      label: "Close",
                    },
                  ),
                });
              }}
              className="md:mt-4 max-md:mt-2 border border-transparent border-solid max-md:text-md"
              style={{
                ...colorMerge("primary.background", {
                  color: "text.color",
                  borderColor: "borders",
                }),
              }}
              icon={allIcons.solid.faGear}
            >
              <Translate content="manage account" />
            </Button>
          </div>
        </div>
      </div>
      <Line />
      <Scroll className="relative">{children}</Scroll>
      <Line />
      <div className="flex justify-end gap-2 p-2">
        <Button
          className="max-sm:w-full sm:w-1/4 capitalize"
          style={{
            ...colorMerge("error"),
          }}
          onClick={async () => {
            if (!Server.server) {
              return;
            }
            const { response } = await openDialog({
              title: "Logout",
              message: "Are you sure you want to logout?",
              buttons: ["No", "Yes"],
              defaultId: 1,
            });
            if (response) {
              await signOut(Server.server.auth);
            } else {
              showToast("Ignore Logout", "error");
            }
          }}
        >
          <Translate content="logout" />
        </Button>
      </div>
    </div>
  );
};
export const ProfileView = ({ children }: ProfileViewProps) => {
  const user = useUserFromDB();
  return (
    <div className="relative flex flex-col w-full h-full overflow-hidden">
      <AsyncComponent
        render={async () => {
          await delay(1000);
          return (
            <EmptyComponent>
              {user && <ProfileContent children={children} />}
              {!user && <LoginContent />}
            </EmptyComponent>
          );
        }}
        loading={<CircleLoading className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" />}
      />
    </div>
  );
};
export const FixedProfileView = ({ children }: FixedProfileViewProps) => {
  const profileView = viewTemps.getTemp<boolean>("profile-view");
  return (
    <BlurOverlay hidden={!profileView}>
      <Card className="max-md:rounded-none w-5/6 max-md:w-full h-5/6 max-md:h-full">
        <div className="flex justify-between items-center p-3">
          <h1 className="text-3xl">
            <Translate content="Your Profile" />
          </h1>
          <div className="flex items-center">
            <CircleTip
              icon={faXmark}
              onClick={() => {
                viewTemps.setTemp("profile-view", false);
              }}
            />
          </div>
        </div>
        <Line />
        <Scroll>
          <ProfileView children={children} />
        </Scroll>
      </Card>
    </BlurOverlay>
  );
};
