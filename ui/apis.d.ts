import { Auth } from 'firebase/auth';
import * as brands from '@fortawesome/free-brands-svg-icons';
import { DocumentData } from 'firebase/firestore';
import { FirebaseApp } from 'firebase/app';
import { FirebaseOptions } from 'firebase/app';
import { FirebaseStorage } from 'firebase/storage';
import { Firestore } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { Query } from 'firebase/firestore';
import * as regular from '@fortawesome/free-regular-svg-icons';
import * as solid from '@fortawesome/free-solid-svg-icons';
import { Unsubscribe } from 'firebase/firestore';

export declare const allIcons: {
    solid: typeof solid;
    regular: typeof regular;
    brands: typeof brands;
};

export declare class Cloud<M> {
    metaData: M;
    constructor(metaData: M);
    define<T extends keyof Cloud<M>["app"], S extends keyof Cloud<M>["app"][T]>(a: T, b: S, callback: Cloud<M>["app"][T][S]): void;
    private app;
    call<T extends keyof Cloud<M>["app"], S extends keyof Cloud<M>["app"][T]>(a: T, b: S): {
        database: {
            createDoc: <T_1 extends object>(path: string[] | string, content: T_1) => Promise<void>;
            upsertDoc: <T_1 extends object>(path: string[] | string, content: T_1) => Promise<void>;
            updateDoc: <T_1 extends object>(path: string[] | string, content: T_1) => Promise<void>;
            deleteDoc: (path: string[] | string) => Promise<void>;
            getDoc: <T_1 extends object>(path: string[] | string) => Promise<T_1 | null>;
            getDocs: <T_1 extends object>(path: string[] | string) => Promise<T_1[] | null>;
        };
        storage: {
            createFile(path: string[] | string, content: string | Blob | Uint8Array | ArrayBuffer): Promise<void>;
            upsertFile(path: string[] | string, content: string | Blob | Uint8Array | ArrayBuffer): Promise<void>;
            updateFile(path: string[] | string, content: string | Blob | Uint8Array | ArrayBuffer): Promise<void>;
            deleteFile(path: string[] | string): Promise<void>;
            getFileContent(path: string[] | string): Promise<Blob | null>;
            getFiles(path: string[] | string): Promise<string[] | null>;
        };
        auth: {
            changeUser(token: string): Promise<void>;
            signIn(provider: "phone" | "google" | "facebook" | "github" | "tiktok" | "linkdin"): Promise<void>;
            update(userInfo: UserDB, extraInfo: Partial<{
                pinCode: string;
                smsCode: string;
            }>): Promise<void>;
            getCurrentAuth(): Promise<UserDB | null>;
            signOut(): Promise<void>;
            deleteUser(): Promise<void>;
            getUserToken(): Promise<string | null>;
            resetPassword(): Promise<void>;
        };
        functions: {
            getFunction<T_1 extends string, S_1 extends object>(name: T_1, metaData: S_1): Promise<Function | null>;
        };
    }[T][S];
}

export declare const firebaseConfig: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
};

export declare function generateAuthUrl(params: GenerateAuthUrlParams): Promise<GenerateAuthUrlResult>;

declare interface GenerateAuthUrlParams {
    projectId: string;
    isDev?: boolean;
    key?: string;
}

declare interface GenerateAuthUrlResult {
    url: string;
}

export declare function getFunction<R = any, P = any>(name: string, isDev?: boolean | null): {
    callback: (data: P) => Promise<R>;
    signal: AbortSignal;
    controller: AbortController;
};

export declare function getLocalDB(): PouchDB.Database<{}>;

export declare function getProjectConfig(projectId: string): Promise<ProjectConfig>;

export declare function getUserFunction<T = any, P = any>(name: string, isDev?: boolean | null): {
    signal: AbortSignal;
    controller: AbortController;
    callback: (data: P) => Promise<T>;
};

export declare function onManySnaping<T extends string>(firestoreOnSnapshot: typeof onSnapshot, props: Record<T, Query<DocumentData, DocumentData>>, callback: (executed: T) => void, skip?: number): Record<T, Unsubscribe>;

export declare interface ProjectConfig {
    label: string;
    id: string;
    imageUrl?: string;
    auth?: Partial<Record<string, string>>;
    payout?: Partial<Record<string, string>>;
}

export declare class Server {
    props: ServerProps;
    static server: Server | null;
    app: FirebaseApp;
    auth: Auth;
    db: Firestore;
    storage: FirebaseStorage;
    private lockConfig;
    constructor(props: ServerProps);
    get config(): FirebaseOptions;
}

export declare interface ServerProps {
    appId: string;
    measurementId: string;
    projectId?: string;
}

export declare function signInAccount({ place, ...props }: SignInAccountProps): Promise<void>;

declare interface SignInAccountProps extends GenerateAuthUrlParams {
    place: "window" | "frame" | "redirect";
}

declare type UserDB = Partial<{
    nickname: string | null;
    firstname: string | null;
    lastname: string | null;
    email: string | null;
    phone: string | null;
    photo: string | null;
    uid: string;
    birthDay: number | null;
    extraData: Record<string, any>;
}>;

export { }
