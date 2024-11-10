import { getTempFromStore } from "@/hooks";
import { FirebaseOptions, initializeApp } from "firebase/app";
import {
  EmailAuthProvider,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  PhoneAuthProvider,
  sendPasswordResetEmail,
  signInWithCustomToken,
  signInWithEmailAndPassword,
  signInWithPopup,
  TwitterAuthProvider,
} from "firebase/auth";
import { getFirestore, setDoc, deleteDoc, getDoc, getDocs, collection, onSnapshot, doc } from "firebase/firestore";
import { getStorage, ref, uploadString, uploadBytes, deleteObject, getDownloadURL, listAll } from "firebase/storage";
import { ClientCloud, getPathString } from "..";
import { CloudFunction } from "@/types/global";
export interface InitCloudProps {
  appId: string;
  measurementId: string;
}
export function initCloud(options: FirebaseOptions) {
  const myCloud = new ClientCloud("my-cloud");
  const app = initializeApp({
    ...options,
  });
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  // auth
  myCloud.set("auth", "getCurrentAuth", async () => {
    return auth.currentUser;
  });
  myCloud.set("auth", "signIn", async (provider) => {
    switch (provider) {
      case "google":
        const googleProvider = new GoogleAuthProvider();
        await signInWithPopup(auth, googleProvider);
        break;
      case "facebook":
        const facebookProvider = new FacebookAuthProvider();
        await signInWithPopup(auth, facebookProvider);
        break;
      case "phone":
        const phoneProvider = new PhoneAuthProvider(auth);
        await signInWithPopup(auth, phoneProvider);
        break;
      case "github":
        const githubProvider = new GithubAuthProvider();
        await signInWithPopup(auth, githubProvider);
        break;
      case "twitter":
        const twitterProvider = new TwitterAuthProvider();
        await signInWithPopup(auth, twitterProvider);
        break;
      case "email":
        const emailProvider = new EmailAuthProvider();
        await signInWithPopup(auth, emailProvider);
        break;
      default:
        throw "Provider not found";
    }
  });
  myCloud.set("auth", "signOut", async () => {
    await auth.signOut();
  });
  myCloud.set("auth", "deleteUser", async () => {
    await auth.currentUser?.delete();
  });
  myCloud.set("auth", "getUserToken", async () => {
    return (await auth.currentUser?.getIdToken()) || null;
  });
  myCloud.set("auth", "resetPassword", async () => {
    await sendPasswordResetEmail(auth, auth.currentUser?.email || "");
  });
  myCloud.set("auth", "changeUser", async (token) => {
    await signInWithCustomToken(auth, token);
  });
  myCloud.set("auth", "update", async (userInfo) => {
    await setDoc(doc(db, `users/${auth.currentUser?.uid}`), userInfo, {
      merge: true,
    });
  });
  myCloud.set("auth", "onAuthStateChanged", (callback) => {
    return auth.onAuthStateChanged((user) => {
      callback(user);
    });
  });
  myCloud.set("auth", "signInWithCustomToken", async (token) => {
    await signInWithCustomToken(auth, token);
  });
  myCloud.set("auth", "signInWithEmailAndPassword", async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  });
  // database
  myCloud.set("database", "createDoc", async (path, content) => {
    await setDoc(doc(db, getPathString(path)), content, {
      merge: true,
    });
  });
  myCloud.set("database", "upsertDoc", async (path, content) => {
    await setDoc(doc(db, getPathString(path)), content, {
      merge: true,
    });
  });
  myCloud.set("database", "updateDoc", async (path, content) => {
    await setDoc(doc(db, getPathString(path)), content, {
      merge: true,
    });
  });
  myCloud.set("database", "deleteDoc", async (path) => {
    await deleteDoc(doc(db, getPathString(path)));
  });
  myCloud.set("database", "getDoc", async (path) => {
    const docRef = getDoc(doc(db, getPathString(path)));
    const docSnap = await docRef;
    let result = docSnap.data() as any | null;
    return result;
  });
  myCloud.set("database", "getDocs", async (path) => {
    const docRef = getDocs(collection(db, getPathString(path)));
    const docSnap = await docRef;
    let result = docSnap.docs.map((info) => ({
      id: info.id,
      data: info.data(),
    })) as any;
    return result;
  });
  myCloud.set("database", "onDocSnapshot", (path, callback) => {
    const docRef = doc(db, getPathString(path));
    return onSnapshot(docRef, (doc) => {
      callback(doc.data() as any);
    });
  });
  // storage
  myCloud.set("storage", "createFile", async (path, content) => {
    const storeRef = ref(storage, getPathString(path));
    if (typeof content == "string") {
      await uploadString(storeRef, content);
    } else {
      await uploadBytes(storeRef, content);
    }
  });
  myCloud.set("storage", "upsertFile", async (path, content) => {
    const storeRef = ref(storage, getPathString(path));
    if (typeof content == "string") {
      await uploadString(storeRef, content);
    } else {
      await uploadBytes(storeRef, content);
    }
  });
  myCloud.set("storage", "updateFile", async (path, content) => {
    const storeRef = ref(storage, getPathString(path));
    if (typeof content == "string") {
      await uploadString(storeRef, content);
    } else {
      await uploadBytes(storeRef, content);
    }
  });
  myCloud.set("storage", "deleteFile", async (path) => {
    const storeRef = ref(storage, getPathString(path));
    deleteObject(storeRef);
  });
  myCloud.set("storage", "getFileContent", async (path) => {
    const storeRef = ref(storage, getPathString(path));
    const url = await getDownloadURL(storeRef);
    const response = await fetch(url);
    return await response.blob();
  });
  myCloud.set("storage", "getFiles", async (path) => {
    const storeRef = ref(storage, getPathString(path));
    const list = await listAll(storeRef);
    return list.items.map((item) => item.name);
  });
  myCloud.set("functions", "getFunction", async <P, R>(name: string, mode?: "live" | "sandbox", metaData?: any) => {
    const isDev = mode ? mode : getTempFromStore<boolean>("env.isDev") ?? false;
    const controller = new AbortController();
    const signal = controller.signal;
    const url = new URL(isDev ? "http://localhost:8888" : "https://water-fetch-account.netlify.app");
    url.pathname = "/.netlify/functions/" + name;
    let result: CloudFunction<P, R> = {
      async callback(data: any) {
        const response = await fetch(url.toString(), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          signal,
        });
        if (!response.ok) {
          throw await response.text();
        }
        return await response.json();
      },
      signal,
      controller,
    };
    return result;
  });
  return myCloud;
}
