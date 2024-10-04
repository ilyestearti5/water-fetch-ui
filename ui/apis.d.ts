import { Auth } from 'firebase/auth';
import * as brands from '@fortawesome/free-brands-svg-icons';
import { CollectionReference } from '@firebase/firestore';
import { DocumentData } from 'firebase/firestore';
import { DocumentSnapshot } from '@firebase/firestore';
import { FirebaseApp } from 'firebase/app';
import { FirebaseOptions } from 'firebase/app';
import { FirebaseStorage } from 'firebase/storage';
import { Firestore } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';
import { PayloadAction } from '@reduxjs/toolkit';
import { Query } from 'firebase/firestore';
import { QueryConstraint } from 'firebase/firestore';
import { QuerySnapshot } from 'firebase/firestore';
import { QueryStatus } from 'react-query';
import * as regular from '@fortawesome/free-regular-svg-icons';
import * as solid from '@fortawesome/free-solid-svg-icons';
import { StorageReference } from '@firebase/storage';
import { Unsubscribe } from 'firebase/firestore';
import { Unsubscribe as Unsubscribe_2 } from '@firebase/firestore';
import { UploadResult } from 'firebase/storage';

declare interface Action {
    actionId: string;
    status: QueryStatus | "ready";
    args?: any;
    output?: any;
}

export declare const allIcons: {
    solid: typeof solid;
    regular: typeof regular;
    brands: typeof brands;
};

export declare interface Cmd extends Command {
    keys: Omit<Key, "command">[];
}

declare interface Command {
    commandId: string;
    label?: string;
    commands?: (Command["commandId"] | PayloadAction<any> | number)[];
    private?: boolean;
    blocked?: boolean;
}

export declare const firebaseConfig: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
};

export declare const generateAuthUrl: (data: GenerateAuthUrlParams) => Promise<GenerateAuthUrlResult>;

export declare interface GenerateAuthUrlParams {
    projectId: string;
    platform: Platform;
    isDev?: boolean;
}

export declare interface GenerateAuthUrlResult {
    url: string;
}

export declare interface GeneratePayoutUrlParams {
    projectId: string;
    platform: Platform;
    amount: number;
    isDev?: boolean;
}

export declare interface GeneratePayoutUrlResult {
    url: string;
}

export declare const getFunction: <R = any, P = any>(name: string, isDev?: boolean | null) => {
    callback: (data: P) => Promise<R>;
    signal: AbortSignal;
    controller: AbortController;
};

export declare const getLocalDB: () => PouchDB.Database<{}>;

export declare const getProjectConfig: (projectId: string) => Promise<ProjectConfig>;

export declare const getUserFunction: <T = any, P = any>(name: string, isDev?: boolean | null) => {
    signal: AbortSignal;
    controller: AbortController;
    callback: (data: P) => Promise<T>;
};

declare interface Key {
    value?: string;
    keyId?: string;
    command?: Command["commandId"];
    only?: boolean;
    when?: string;
    preventDefault?: boolean;
    repeation?: boolean;
    type?: "up" | "down";
    private?: boolean;
    action?: Action["actionId"];
}

export declare function onManySnaping<T extends string>(firestoreOnSnapshot: typeof onSnapshot, props: Record<T, Query<DocumentData, DocumentData>>, callback: (executed: T) => void, skip?: number): Record<T, Unsubscribe>;

export declare type Platform = "test" | "web" | "mobile" | "desktop";

export declare interface ProjectConfig {
    label: string;
    id: string;
    imageUrl?: string;
    auth?: Partial<Record<Platform, string | null>>;
    payout?: Partial<Record<Platform, string | null>>;
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
    ref(): CollectionReference<DocumentData, DocumentData>;
    storageRef(): StorageReference;
    setDoc<T extends object>(paths: string[], data: T): Promise<void>;
    getDoc(paths: string[]): Promise<DocumentSnapshot<DocumentData, DocumentData>>;
    onSnapshot(paths: string[], q: QueryConstraint[], callback: (snapshot: QuerySnapshot<DocumentData, DocumentData>) => void): Promise<Unsubscribe_2>;
    getFile(url: string): Promise<{
        blob: Blob;
        downloadUrl: string;
        response: Response;
        newRef: StorageReference;
    }>;
    setFile(url: string, content: string | Blob | Uint8Array | ArrayBuffer): Promise<{
        result: UploadResult;
        ref: StorageReference;
    }>;
}

export declare interface ServerProps {
    appId: string;
    measurementId: string;
    projectId: string;
}

export declare const signInAccount: ({ place, ...props }: SignInAccountProps) => Promise<void>;

export declare interface SignInAccountProps extends GenerateAuthUrlParams {
    place: "window" | "frame" | "redirect";
}

export { }
