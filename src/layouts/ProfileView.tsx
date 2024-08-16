import React from "react";
import { storage, auth, db } from "@/apis/firebase";
import {
  Anchor,
  AsyncComponent,
  BlurOverlay,
  Button,
  Card,
  CircleLoading,
  CircleTip,
  EmptyComponent,
  FastList,
  Feild,
  Icon,
  Line,
  LineLoading,
  MultiScreenPage,
  Scroll,
  StringFeild,
  Text,
} from "@/components";
import { execAction, useAction } from "@/data/system/actions.model";
import { openDialog } from "@/functions/app/web/web-utils";
import { checkFormByFeilds, fieldHooks, getSettingValue, getUser, getUserFromDB, openCamera, showToast, useColorMerge, useCopyState, useIdleStatus } from "@/hooks";
import { delay, mergeArray, setFocused, tw } from "@/utils";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faArrowRight, faRefresh, faRotate, faXmark } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "@reduxjs/toolkit";
import { updateProfile, signOut, createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Password } from "@/components/PasswordFeild";
import { setTemp, getTemp } from "@/reducers/Object/object.slice";
import { viewTemps } from "@/reducers/Object/allTemps";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
const emailRegExp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,} *$";
export const SignupPage = () => {
  const colorMerge = useColorMerge();
  const email = fieldHooks.getOneFeild("signupUseremail", "value");
  const passwordState = useCopyState<undefined | string>("");
  const passwordConfirmState = useCopyState<undefined | string>("");
  const signupAction = useAction(
    "signup",
    async () => {
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
      await createUserWithEmailAndPassword(auth, email, passwordState.get);
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
            <label className="block mb-2">email</label>
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
            <label className="block mb-2">Password</label>
            <Password placeholder="********" id="user-password" state={passwordState} />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Confirm Password</label>
            <Password placeholder="********" id="user-password-confirm" state={passwordConfirmState} />
          </div>
          <Button icon={signupAction?.status == "loading" ? faRotate : undefined} iconClassName={tw("animate-spin")} type="submit" className="py-2 rounded-md w-full">
            Sign Up
          </Button>
        </form>
        <p className="mt-8 text-center text-sm">
          <span
            style={{
              ...colorMerge({
                color: "gray.opacity.2",
              }),
            }}
          >
            Already have an account?
          </span>{" "}
          <Anchor
            onClick={(e) => {
              e.preventDefault();
              setTemp("focusedLoginView", 0);
            }}
          >
            Login
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
            Payment And Achet Cards
          </h2>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus.</p>
          <div className="flex items-center space-x-4">
            <div className="flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12">
              <span className="text-xl">📦</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">History</h3>
              <p
                className="text-sm"
                style={{
                  ...colorMerge({
                    color: "gray.opacity.2",
                  }),
                }}
              >
                See All Historys
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12">
              <span className="text-xl">💵</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">Payouts</h3>
              <p
                className="text-sm"
                style={{
                  ...colorMerge({
                    color: "gray.opacity.2",
                  }),
                }}
              >
                Power Save Pays
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
      if (!email) {
        showToast("Email is required", "error");
        return;
      }
      if (!passwordState.get) {
        showToast("Password must be at least 6 characters", "error");
        return;
      }
      await signInWithEmailAndPassword(auth, email, passwordState.get);
    },
    [email, passwordState.get],
  );
  const signInWithPopupFacebookAction = useAction(
    "sign-in-facebook",
    async () => {
      await signInWithPopup(auth, new FacebookAuthProvider());
    },
    [],
  );
  const signInWithPopupGoogleAction = useAction(
    "sign-in-google",
    async () => {
      await signInWithPopup(auth, new GoogleAuthProvider());
    },
    [],
  );
  return (
    <Scroll className="flex max-sm:flex-col items-center">
      <div className="p-8 w-1/2 max-sm:w-full">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (email && passwordState.get) {
              try {
                await signInWithEmailAndPassword(auth, email, passwordState.get);
              } catch {
                showToast("Password Or Email Is Incorrect 😴", "error");
              }
            }
          }}
        >
          <div className="mb-4">
            <label className="block mb-2">Username or email</label>
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
            <label className="block mb-2">Password</label>
            <Password placeholder="********" state={passwordState} />
          </div>
          <Button type="submit" className="py-2 rounded-md w-full">
            Login
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
          >
            Don't have an account?
          </span>{" "}
          <Anchor
            onClick={(e) => {
              e.preventDefault();
              setTemp("focusedLoginView", 1);
            }}
          >
            Sign up
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
            Payment And Achet Cards
          </h2>
          <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in ipsum id orci porta dapibus.</p>
          <div className="flex items-center space-x-4">
            <div className="flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12">
              <span className="text-xl">📦</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">History</h3>
              <p
                className="text-sm"
                style={{
                  ...colorMerge({
                    color: "gray.opacity.2",
                  }),
                }}
              >
                See All Historys
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12">
              <span className="text-xl">💵</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg">Payouts</h3>
              <p
                className="text-sm"
                style={{
                  ...colorMerge({
                    color: "gray.opacity.2",
                  }),
                }}
              >
                Power Save Pays
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
export interface PayoutsProps {
  projectId: string;
}
export const Payouts = ({ projectId }: PayoutsProps) => {
  const user = getUser();
  const { data, error, status } = useIdleStatus(async () => {
    if (!user?.uid) {
      return [];
    } else {
      const { docs } = await getDocs(collection(db, "users", user.uid, "projects", projectId, "payouts"));
      return docs;
    }
  }, [projectId, user]);
  React.useEffect(() => {
    status.set("idle");
  }, []);
  React.useEffect(() => {
    if (status.get == "error" && error.get) {
      showToast("Error When Loading The Payouts", "error");
    }
  }, [status.get, error.get]);
  return (
    <EmptyComponent>
      {status.get == "success" && (
        <EmptyComponent>
          {!!data.get?.length && (
            <FastList
              data={data.get}
              focusId="payouts-list"
              itemSize={50}
              slotId="payouts-list"
              component={({ style, data }) => {
                const info = data.data();
                return (
                  <div
                    style={{
                      ...style,
                    }}
                    className="flex justify-between items-center gap-1 p-3"
                  >
                    <span>{info.price}DA</span>
                    <Button onClick={async () => {}}>
                      <Text content="Prepare" />
                    </Button>
                  </div>
                );
              }}
            />
          )}
          {!data.get?.length && (
            <div className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2">
              <h1>No Payouts In Your Account 😔</h1>
            </div>
          )}
        </EmptyComponent>
      )}
      {status.get == "loading" && <CircleLoading className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" />}
    </EmptyComponent>
  );
};
export const ProfileContent = () => {
  const colorMerge = useColorMerge();
  const user = getUser();
  const userFromDb = getUserFromDB();
  const editName = useCopyState<boolean>(false);
  const state = useCopyState<string | undefined>(undefined);
  const isAnimation = getSettingValue("preferences/animation.boolean");
  const actionChangeMyName = useAction(
    "change-my-name",
    async () => {
      if (state.get && user) {
        await setDoc(
          doc(db, "users", user.uid),
          {
            name: state.get,
          },
          {
            merge: true,
          },
        );
      }
    },
    [state.get, user],
  );
  React.useEffect(() => {
    execAction("change-my-name");
  }, [state.get, user]);
  React.useEffect(() => {
    setFocused("userLoginDisplayName");
  }, [editName.get]);
  React.useEffect(() => {
    editName.set(false);
  }, [state.get]);
  const action = useAction(
    "profile-change-image",
    async () => {
      if (!user) {
        return;
      }
      const buttons = mergeArray(user.photoURL && "Delete", "Cancel", "Upload", "Open Camera");
      const { response } = await openDialog({
        title: "Profile Picture",
        message: "Change your profile picture",
        buttons,
        defaultId: 2,
      });
      const choised = buttons[response];
      if (choised == "Delete") {
        await updateProfile(user, {
          photoURL: null,
        });
        return;
      }
      if (choised == "Cancel") {
        return;
      }
      if (choised == "Upload") {
        return new Promise((res) => {
          const input = document.createElement("input");
          input.type = "file";
          input.accept = "image/*";
          input.onchange = async () => {
            const file = input.files?.[0];
            if (!file) {
              return;
            }
            // upload a file to firestore
            let p = ["users", user.uid, "profile", nanoid()].filter(Boolean).join("/");
            let refStore = ref(storage, p);
            await uploadBytes(refStore, file);
            const photoURL = await getDownloadURL(refStore);
            await updateProfile(user, {
              photoURL,
            });
            return res("Done");
          };
          input.click();
        });
      }
      const cameraBaseUrl64 = await openCamera("take");
      if (!cameraBaseUrl64) {
        return;
      }
      // upload a baseUrl image to firestore
      const imageBlob = await fetch(cameraBaseUrl64).then((response) => response.blob());
      let p = ["users", user.uid, "profile", nanoid()].filter(Boolean).join("/");
      let refStore = ref(storage, p);
      await uploadBytes(refStore, imageBlob);
      const photoURL = await getDownloadURL(refStore);
      await updateProfile(user, {
        photoURL,
      });
    },
    [user],
  );
  const editPhoneNumber = useCopyState(false);
  const newUserPhoneNumber = fieldHooks.getOneFeild("newUserPhoneNumber", "value");
  const verificationId = useCopyState<string | null>(null);
  const act = useAction(
    "send-verification-code",
    async () => {
      if (!newUserPhoneNumber) {
        return;
      }
      if (!checkFormByFeilds(["newUserPhoneNumber"]).isValide) {
        showToast("Invalid Phone Number", "error");
        return;
      }
      if (!user) {
        return;
      }
    },
    [newUserPhoneNumber, user],
  );
  React.useEffect(() => {
    if (editPhoneNumber.get) {
      setFocused("newUserPhoneNumber");
    }
  }, [editPhoneNumber.get]);
  const {
    data: userProjects,
    status,
    error,
  } = useIdleStatus(async () => {
    if (user) {
      const { docs } = await getDocs(collection(db, "users", user.uid, "projects"));
      return docs;
    } else {
      return [];
    }
  }, [user]);
  React.useEffect(() => {
    status.set("idle");
  }, []);
  React.useEffect(() => {
    if (status.get == "error" && error.get) {
      showToast("Error Loading Your Projects", "error");
    }
  }, [error.get, status.get]);
  const selectedProjectId = useCopyState<null | string>(null);
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
            onClick={async () => {
              execAction("profile-change-image");
            }}
          >
            {action?.status != "loading" && <img src={user?.photoURL?.toString()} className="w-full h-full object-cover" />} {!user?.photoURL && <Icon icon={faUser} />}
            {action?.status == "loading" && (
              <CircleLoading
                className="top-1/2 left-1/2 absolute w-3/4 h-3/4 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  ...colorMerge({
                    borderColor: "success.text",
                  }),
                }}
              />
            )}
          </div>
          <div className="max-sm:flex max-sm:flex-col max-sm:justify-cente">
            {actionChangeMyName?.status != "loading" && (
              <EmptyComponent>
                {!editName.get && (
                  <h1
                    className="text-2xl"
                    onClick={() => {
                      editName.set(true);
                    }}
                  >
                    {userFromDb?.name || "No Name"}
                  </h1>
                )}
                {editName.get && (
                  <StringFeild
                    id="userLoginDisplayName"
                    state={state}
                    config={{
                      hint: "Enter Your Name",
                      uncancable: true,
                    }}
                  />
                )}
              </EmptyComponent>
            )}
            {actionChangeMyName?.status == "loading" && <LineLoading />}
            <p>{userFromDb?.email}</p>
            {userFromDb && (
              <div className="flex items-center">
                <span
                  className="cursor-pointer"
                  onClick={() => {
                    // editPhoneNumber.set(true);
                  }}
                >
                  Phone Number
                </span>{" "}
                : {!editPhoneNumber.get && (user?.phoneNumber || " - ")}
                {editPhoneNumber.get && !verificationId.get && (
                  <div className="flex items-center gap-1 p-2">
                    <Feild
                      controls={{
                        "(0|\\+[0-9]+)[0-9]{9}": {
                          succ: "valide phone number",
                          err: "invalid phone number",
                        },
                      }}
                      inputName="newUserPhoneNumber"
                      placeholder="Enter Phone Number"
                    />
                    <Button
                      className="px-5 py-1"
                      icon={faRefresh}
                      iconClassName={tw("animate-spin", act?.status != "loading" && "hidden")}
                      onClick={async () => {
                        execAction("send-verification-code");
                      }}
                    >
                      Verifie
                    </Button>
                    <Button
                      style={{
                        ...colorMerge("gray.opacity"),
                      }}
                      className="px-5 py-1"
                      onClick={() => {
                        editPhoneNumber.set(false);
                      }}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
                {editPhoneNumber.get && verificationId.get && (
                  <div className="flex items-center gap-1 p-2">
                    <Feild inputName="verificationCode" />
                    <Button onClick={async () => {}}>Ok</Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Line />
      <Scroll className="relative">
        {status.get == "success" && (
          <EmptyComponent>
            <div className="flex flex-wrap">
              {userProjects.get?.map((project, index) => {
                return (
                  <div className="flex justify-between items-center p-3 w-1/3 max-sm:w-1/2" key={index}>
                    <Card className="w-full">
                      <div className="p-3">
                        <h1 className="font-bold text-lg">{project.id}</h1>
                      </div>
                      <Line />
                      <div className="flex justify-between items-center p-2">
                        <span />
                        <CircleTip
                          onClick={() => {
                            selectedProjectId.set(project.id);
                          }}
                          icon={faArrowRight}
                        />
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
            {!userProjects.get?.length && (
              <div className="flex justify-center items-center w-full h-full capitalize">
                <Text content="no water fetch projects you sigin" />
              </div>
            )}
          </EmptyComponent>
        )}
        {status.get == "loading" && <CircleLoading className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
        <div
          style={{
            ...colorMerge("primary.background"),
          }}
          className={tw("right-0 absolute inset-y-0 left-full", selectedProjectId.get && "left-0", isAnimation && "transition-[left]")}
        >
          <div className="flex items-center gap-3 p-3">
            <CircleTip
              icon={faArrowLeft}
              onClick={() => {
                selectedProjectId.set(null);
              }}
            />
            <h1 className="font-bold text-4xl">{selectedProjectId.get}</h1>
          </div>
          <Line />
          {selectedProjectId.get && <Payouts projectId={selectedProjectId.get} />}
        </div>
      </Scroll>
      <Line />
      <div className="flex justify-end gap-2 p-2">
        <Button
          className="max-sm:w-full sm:w-1/4 capitalize"
          style={{
            ...colorMerge("error"),
          }}
          onClick={async () => {
            const { response } = await openDialog({
              title: "Delete Account",
              message: "Are you sure you want to delete your account?",
              buttons: ["No", "Yes"],
              defaultId: 1,
            });
            if (response) {
              user?.delete();
              await signOut(auth);
            }
          }}
        >
          <Text content="delete" />
        </Button>
        <Button
          className="max-sm:w-full sm:w-1/4 capitalize"
          style={{
            ...colorMerge("error"),
          }}
          onClick={async () => {
            const { response } = await openDialog({
              title: "Logout",
              message: "Are you sure you want to logout?",
              buttons: ["No", "Yes"],
              defaultId: 1,
            });
            if (response) {
              await signOut(auth);
            } else {
              showToast("Ignore Logout", "error");
            }
          }}
        >
          <Text content="logout" />
        </Button>
      </div>
    </div>
  );
};
export const ProfileView = () => {
  const user = getUser();
  return (
    <div className="relative w-full h-full overflow-hidden">
      <AsyncComponent
        render={async () => {
          await delay(1000);
          return (
            <EmptyComponent>
              {user && <ProfileContent />}
              {!user && <LoginContent />}
            </EmptyComponent>
          );
        }}
        loading={<CircleLoading className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2" />}
      />
    </div>
  );
};
export const FixedProfileView = () => {
  const profileView = viewTemps.getTemp<boolean>("profile-view");
  return (
    <BlurOverlay hidden={!profileView}>
      <Card className="w-[80vw] h-[80vh]">
        <div className="flex justify-between items-center p-3">
          <h1 className="text-3xl">
            <Text content="Your Profile" />
          </h1>
          <CircleTip
            icon={faXmark}
            onClick={() => {
              viewTemps.setTemp("profile-view", false);
            }}
          />
        </div>
        <Line />
        <Scroll>
          <ProfileView />
        </Scroll>
      </Card>
    </BlurOverlay>
  );
};
