// Import the functions you need from the SDKs you need
import { UserDB } from "@/hooks";
import { CloudFunction } from "@/types/global";
export * from "./plugins/mycloud";
export const getPathString = (path: string | string[]) => {
  return typeof path === "string" ? path : path.join("/");
};
export class ClientCloud {
  inited: Record<string, boolean> = {};
  public app = {
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
      onDocSnapshot: <T extends object>(path: string[] | string, callback: (data: T | null) => void) => {
        return () => {};
      },
      onCollectionSnapshot: <T extends object>(path: string[] | string, callback: (data: { id: string; data: T }[]) => void) => {
        return () => {};
      },
      onAutoSnapshot: <T extends object, ID extends boolean>(path: string[] | string, callback: (data: ID extends true ? T | null : { id: string; data: T }[]) => void) => {
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
        // extraInfo: Partial<{
        //   pinCode: string;
        //   smsCode: string;
        // }>,
      ) {},
      async getCurrentAuth(): Promise<UserDB | null> {
        return null;
      },
      async signOut() {},
      async deleteUser() {},
      async getUserToken(): Promise<string | null> {
        return null;
      },
      async signInWithCustomToken(token: string): Promise<void> {},
      async resetPassword() {},
      onAuthStateChanged(callback: (user: UserDB | null) => void) {
        return () => {};
      },
      async signInWithEmailAndPassword(email: string, password: string) {},
      async createUserWithEmailAndPassword(email: string, password: string) {},
    },
    functions: {
      // write options
      getFunction: async <P, R>(name: string, mode: "sandbox" | "live", metaData: object): Promise<CloudFunction<P, R> | null> => {
        return null;
      },
      getUserFunction: async <P, R>(name: string, mode: "sandbox" | "live", metaData: object) => {
        const fn = await this.app.functions.getFunction<{ token: string | null; data: P }, R>(name, mode, metaData);
        if (!fn) {
          return null;
        }
        const { callback, signal, controller } = fn;
        return {
          signal,
          controller,
          callback: async (data: P) => {
            const token = await this.app.auth.getUserToken();
            return await callback({
              data,
              token,
            });
          },
        };
      },
      // rest of the functions methods
    },
  };
  static plugins: Record<string, ClientCloud> = {};
  constructor(name: string, extend?: string | ClientCloud) {
    if (extend) {
      if (extend instanceof ClientCloud) {
        this.app = extend.app;
      } else {
        this.app = ClientCloud.plugins[extend].app;
      }
      ClientCloud.plugins[name] = this;
    }
  }
  set<T extends keyof ClientCloud["app"], S extends keyof ClientCloud["app"][T]>(a: T, b: S, callback: ClientCloud["app"][T][S]) {
    this.inited[`${a}/${b.toString()}`] = true;
    this.app[a][b] = callback;
  }
  remove<T extends keyof ClientCloud["app"], S extends keyof ClientCloud["app"][T]>(a: T, b: S) {
    this.inited[`${a}/${b.toString()}`] = false;
  }
  get<T extends keyof ClientCloud["app"], S extends keyof ClientCloud["app"][T]>(a: T, b: S) {
    const state = `${a}/${b.toString()}`;
    return this.inited[state]
      ? this.app[a][b]
      : () => {
          throw `${state} Not Defined`;
        };
  }
}
export const getMainCloud = () => {
  return ClientCloud.plugins["main"];
};
