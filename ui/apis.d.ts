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
    get app(): {
        readonly database: {
            createDoc<T extends object>(path: string[] | string, content: T): Promise<void>;
            upsertDoc<T extends object>(path: string[] | string, content: T): Promise<void>;
            updateDoc<T extends object>(path: string[] | string, content: T): Promise<void>;
            deleteDoc(path: string[] | string): Promise<void>;
            getDoc(path: string[] | string): Promise<void>;
            getDocs(path: string[] | string): Promise<void>;
        };
        readonly storage: {
            createFile(path: string[] | string, content: string | Blob | Uint8Array | ArrayBuffer): Promise<void>;
            upsertFile(path: string[] | string, content: string | Blob | Uint8Array | ArrayBuffer): Promise<void>;
            updateFile(path: string[] | string, content: string | Blob | Uint8Array | ArrayBuffer): Promise<void>;
            deleteFile(path: string[] | string): Promise<void>;
            getFile(path: string[] | string): Promise<void>;
            getFiles(path: string[] | string): Promise<void>;
        };
        readonly auth: {
            getCurrentAuth(): void;
        };
        readonly functions: {
            getFunction<T extends string>(name: T, metaData: any): Promise<void>;
        };
    };
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

export { }
