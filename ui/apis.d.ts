import { Analytics } from 'firebase/analytics';
import { Auth } from 'firebase/auth';
import * as brands from '@fortawesome/free-brands-svg-icons';
import { FirebaseApp } from 'firebase/app';
import { FirebaseOptions } from 'firebase/app';
import { FirebaseStorage } from 'firebase/storage';
import { Firestore } from 'firebase/firestore';
import * as regular from '@fortawesome/free-regular-svg-icons';
import * as solid from '@fortawesome/free-solid-svg-icons';

export declare const allIcons: {
    solid: typeof solid;
    regular: typeof regular;
    brands: typeof brands;
};

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

export declare const generatePayoutUrl: (data: GeneratePayoutUrlParams) => Promise<GeneratePayoutUrlResult>;

export declare interface GeneratePayoutUrlParams {
    userToken?: string;
    projectId: string;
    platform: Platform;
    amount: number;
    isDev?: boolean;
}

export declare interface GeneratePayoutUrlResult {
    url: string;
}

export declare const getFunction: <R = any, P = any>(name: string, isDev?: boolean) => (data: P) => Promise<R>;

export declare const getLocalDB: () => PouchDB.Database<{}>;

export declare const getProjectConfig: (projectId: string) => Promise<ProjectConfig>;

export declare type Platform = "test" | "web" | "mobile" | "desktop";

export declare interface ProjectConfig {
    label: string;
    id: string;
    imageUrl?: string;
    auth?: Partial<Record<Platform, string | null>>;
    payout?: Partial<Record<Platform, string | null>>;
}

export declare class Server {
    static server: Server | null;
    app: FirebaseApp;
    auth: Auth;
    db: Firestore;
    storage: FirebaseStorage;
    analytics: Analytics;
    private lockConfig;
    constructor(props: ServerProps);
    get config(): FirebaseOptions;
}

export declare interface ServerProps {
    appId: string;
    measurementId: string;
}

export declare const signInAccount: ({ place, ...props }: SignInAccountProps) => Promise<void>;

export declare interface SignInAccountProps extends GenerateAuthUrlParams {
    place: "window" | "frame";
}

export { }
