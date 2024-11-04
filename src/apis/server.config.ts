// Import the functions you need from the SDKs you need
import { FirebaseApp as App, initializeApp, FirebaseOptions } from "firebase/app";
import {
  FacebookAuthProvider,
  EmailAuthProvider,
  TwitterAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  PhoneAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signInWithCustomToken,
} from "firebase/auth";
import { getFirestore, Firestore, setDoc, doc, deleteDoc, getDoc, getDocs, collection, onSnapshot } from "firebase/firestore";
import { deleteObject, FirebaseStorage, getDownloadURL, getStorage, listAll, ref, uploadBytes, uploadString } from "firebase/storage";
import { Auth } from "firebase/auth";
import { getTempFromStore, UserDB } from "@/hooks";

export const firebaseConfig = {
  apiKey: "AIzaSyBmcnHP80KXpBXltHrVnP1MZPsiSbVbWqQ",
  authDomain: "water-fetch.firebaseapp.com",
  projectId: "water-fetch",
  storageBucket: "water-fetch.appspot.com",
  messagingSenderId: "911813185967",
};
export interface ServerProps {
  appId: string;
  measurementId: string;
  projectId?: string;
}
export class Server {
  static server: Server | null = null;
  public app: App;
  public auth: Auth;
  public db: Firestore;
  public storage: FirebaseStorage;
  private lockConfig: FirebaseOptions;
  constructor(public props: ServerProps) {
    if (Server.server) {
      throw "server already initialized";
    }
    const { projectId, ...restConfig } = props;
    this.lockConfig = {
      ...firebaseConfig,
      ...restConfig,
    };
    this.app = initializeApp(this.lockConfig);
    this.auth = getAuth(this.app);
    this.db = getFirestore(this.app);
    this.storage = getStorage(this.app);
    Server.server = this;
  }
  get config() {
    return this.lockConfig;
  }
}
export const getPathString = (path: string | string[]) => {
  return typeof path === "string" ? path : path.join("/");
};
export class Cloud<M> {
  // #defaultFunction = (a: string, b: string) => {
  //   con.warn(`${a}/${b} Not Defined`);
  // };
  inited: Record<string, boolean> = {};
  private app = {
    // for access database
    database: {
      // write options
      createDoc: async <T extends object>(path: string[] | string, content: T) => {},
      upsertDoc: async <T extends object>(path: string[] | string, content: T) => {},
      updateDoc: async <T extends object>(path: string[] | string, content: T) => {},
      deleteDoc: async (path: string[] | string) => {},
      // read options
      getDoc: async <T extends object>(path: string[] | string): Promise<T | null> => null,
      getDocs: async <T extends object>(path: string[] | string): Promise<{ id: string; data: T }[] | null> => null,
      onDocSnapshot: async <T extends object>(path: string[] | string, callback: (data: T | null) => void) => {
        return () => {};
      },
      onCollectionSnapshot: async <T extends object>(path: string[] | string, callback: (data: { id: string; data: T }[]) => void) => {
        return () => {};
      },
      // rest of the database methods
    },
    storage: {
      // write options
      async createFile(path: string[] | string, content: string | Blob | Uint8Array | ArrayBuffer) {},
      async upsertFile(path: string[] | string, content: string | Blob | Uint8Array | ArrayBuffer) {},
      async updateFile(path: string[] | string, content: string | Blob | Uint8Array | ArrayBuffer) {},
      async deleteFile(path: string[] | string) {},
      // read options
      async getFileContent(path: string[] | string): Promise<Blob | null> {
        return null;
      },
      async getFiles(path: string[] | string): Promise<string[] | null> {
        return null;
      },
      // rest of the storage methods
    },
    auth: {
      async changeUser(token: string) {},
      async signIn(provider: "phone" | "google" | "facebook" | "github" | "tiktok" | "linkdin" | "twitter" | "email") {},
      async update(
        userInfo: UserDB,
        extraInfo: Partial<{
          pinCode: string;
          smsCode: string;
        }>,
      ) {},
      async getCurrentAuth(): Promise<UserDB | null> {
        return null;
      },
      async signOut() {},
      async deleteUser() {},
      async getUserToken(): Promise<string | null> {
        return null;
      },
      async resetPassword() {},
    },
    functions: {
      // write options
      getFunction: async <P, R>(name: string, mode: "sandbox" | "live", metaData: object): Promise<CloudFunction<P, R> | null> => {
        return null;
      },
      // rest of the functions methods
    },
  };
  static plugins: Record<string, Cloud<any>> = {};
  constructor(plugin?: string, options?: any) {}
  set<T extends keyof Cloud<M>["app"], S extends keyof Cloud<M>["app"][T]>(a: T, b: S, callback: Cloud<M>["app"][T][S]) {
    this.inited[`${a}/${b.toString()}`] = true;
    this.app[a][b] = callback;
  }
  remove<T extends keyof Cloud<M>["app"], S extends keyof Cloud<M>["app"][T]>(a: T, b: S) {
    this.inited[`${a}/${b.toString()}`] = false;
  }
  get<T extends keyof Cloud<M>["app"], S extends keyof Cloud<M>["app"][T]>(a: T, b: S) {
    const state = `${a}/${b.toString()}`;
    return this.inited[state]
      ? this.app[a][b]
      : () => {
          throw `${state} Not Defined`;
        };
  }
  static registerPlugin(name: string, options?: any) {
    if (!name.match(/^[a-zA-Z]+$/gi)) {
      throw `Plugin '${name}' is not valid"`;
    }
    if (this.plugins[name]) {
      throw `Plugin '${name}' already exists`;
    }
    this.plugins[name] = new Cloud(name, options);
  }
}
export interface CloudFunction<P, R> {
  callback: (data: P) => Promise<R>;
  signal: AbortSignal;
  controller: AbortController;
}
/**
 * @class MyCloudApp
 * @extends Cloud
 * @description This class is a wrapper around the Cloud class that provides a more user-friendly interface for the Water Fetch app.
 * @param {ServerProps} options - The options for the server.
 * @returns {MyCloudApp} - An instance of the MyCloudApp class.
 * @example
 * const server = new Server({
 *  appId: "water-fetch",
 *  measurementId: "G-1234567890",
 *  projectId: "water-fetch",
 * });
 * const cloud = new MyCloudApp();
 * const signIn = cloud.call("auth", "signIn");
 * signIn("google").then(console.log);
 */
export class MyCloudApp<T> extends Cloud<T> {
  constructor() {
    super(undefined, {});
    const { server } = Server;
    if (!server) {
      throw "Server not initialized";
    }
    const app = initializeApp(server.config);
    const auth = getAuth(app);
    const db = getFirestore(app);
    const storage = getStorage(app);
    Cloud.registerPlugin("my-cloud", {});
    this.set("auth", "getCurrentAuth", async () => {
      return auth.currentUser;
    });
    this.set("auth", "signIn", async (provider) => {
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
    this.set("auth", "signOut", async () => {
      await auth.signOut();
    });
    this.set("auth", "deleteUser", async () => {
      await auth.currentUser?.delete();
    });
    this.set("auth", "getUserToken", async () => {
      return (await auth.currentUser?.getIdToken()) || null;
    });
    this.set("auth", "resetPassword", async () => {
      await sendPasswordResetEmail(auth, auth.currentUser?.email || "");
    });
    this.set("auth", "changeUser", async (token) => {
      await signInWithCustomToken(auth, token);
    });
    this.set("auth", "update", async (userInfo, extraInfo) => {
      await setDoc(doc(db, `users/${auth.currentUser?.uid}`), userInfo, {
        merge: true,
      });
    });
    this.set("database", "createDoc", async (path, content) => {
      await setDoc(doc(db, getPathString(path)), content, {
        merge: true,
      });
    });
    this.set("database", "upsertDoc", async (path, content) => {
      await setDoc(doc(db, getPathString(path)), content, {
        merge: true,
      });
    });
    this.set("database", "updateDoc", async (path, content) => {
      await setDoc(doc(db, getPathString(path)), content, {
        merge: true,
      });
    });
    this.set("database", "deleteDoc", async (path) => {
      await deleteDoc(doc(db, getPathString(path)));
    });
    this.set("database", "getDoc", async (path) => {
      const docRef = getDoc(doc(db, getPathString(path)));
      const docSnap = await docRef;
      let result = docSnap.data() as any | null;
      return result;
    });
    this.set("database", "getDocs", async (path) => {
      const docRef = getDocs(collection(db, getPathString(path)));
      const docSnap = await docRef;
      let result = docSnap.docs.map((info) => ({
        id: info.id,
        data: info.data(),
      })) as any;
      return result;
    });
    this.set("database", "onDocSnapshot", async (path, callback) => {
      const docRef = doc(db, getPathString(path));
      return onSnapshot(docRef, (doc) => {
        callback(doc.data() as any);
      });
    });
    this.set("storage", "createFile", async (path, content) => {
      const storeRef = ref(storage, getPathString(path));
      if (typeof content == "string") {
        await uploadString(storeRef, content);
      } else {
        await uploadBytes(storeRef, content);
      }
    });
    this.set("storage", "upsertFile", async (path, content) => {
      const storeRef = ref(storage, getPathString(path));
      if (typeof content == "string") {
        await uploadString(storeRef, content);
      } else {
        await uploadBytes(storeRef, content);
      }
    });
    this.set("storage", "updateFile", async (path, content) => {
      const storeRef = ref(storage, getPathString(path));
      if (typeof content == "string") {
        await uploadString(storeRef, content);
      } else {
        await uploadBytes(storeRef, content);
      }
    });
    this.set("storage", "deleteFile", async (path) => {
      const storeRef = ref(storage, getPathString(path));
      deleteObject(storeRef);
    });
    this.set("storage", "getFileContent", async (path) => {
      const storeRef = ref(storage, getPathString(path));
      const url = await getDownloadURL(storeRef);
      const response = await fetch(url);
      return await response.blob();
    });
    this.set("storage", "getFiles", async (path) => {
      const storeRef = ref(storage, getPathString(path));
      const list = await listAll(storeRef);
      return list.items.map((item) => item.name);
    });
    this.set("functions", "getFunction", async <P, R>(name: string, mode?: "live" | "sandbox", metaData?: any) => {
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
  }
}
