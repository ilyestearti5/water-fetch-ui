// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp, FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";
import { Auth } from "firebase/auth";
import { con } from "@/utils";
import { UserDB } from "@/hooks";
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
  public app: FirebaseApp;
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
export class Cloud<M> {
  constructor(public metaData: M) {}
  // #defaultFunction = (a: string, b: string) => {
  //   con.warn(`${a}/${b} Not Defined`);
  // };
  define<T extends keyof Cloud<M>["app"], S extends keyof Cloud<M>["app"][T]>(a: T, b: S, callback: Cloud<M>["app"][T][S]) {
    this.app[a][b] = callback;
  }
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
      getDocs: async <T extends object>(path: string[] | string): Promise<T[] | null> => null,
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
      async signIn(provider: "phone" | "google" | "facebook" | "github" | "tiktok" | "linkdin") {},
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
      async getFunction<T extends string, S extends object>(name: T, metaData: S): Promise<Function | null> {
        return null;
      },
      // rest of the functions methods
    },
  };
  call<T extends keyof Cloud<M>["app"], S extends keyof Cloud<M>["app"][T]>(a: T, b: S) {
    return this.app[a][b];
  }
}
let b = new Cloud({});
const getDocs = b.call("database", "getDocs");
