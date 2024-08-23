import { FirebaseApp } from "firebase/app";
import { FirebaseStorage } from "firebase/storage";
import { Analytics } from "firebase/analytics";
import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
export declare const firebaseConfig: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
};
export interface ServerProps {
    appId: string;
    measurementId: string;
}
export declare const initServer: ({ appId, measurementId }: ServerProps) => FirebaseApp;
export declare class Server {
    static server: Server | null;
    app: FirebaseApp;
    auth: Auth;
    db: Firestore;
    storage: FirebaseStorage;
    analytics: Analytics;
    constructor(props: ServerProps);
}
