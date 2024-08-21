import { Analytics } from '@firebase/analytics';
import { Auth } from 'firebase/auth';
import * as brands from '@fortawesome/free-brands-svg-icons';
import { FirebaseApp } from '@firebase/app';
import { FirebaseStorage } from '@firebase/storage';
import { Firestore } from '@firebase/firestore';
import * as regular from '@fortawesome/free-regular-svg-icons';
import * as solid from '@fortawesome/free-solid-svg-icons';

export declare const allIcons: {
    solid: typeof solid;
    regular: typeof regular;
    brands: typeof brands;
};

declare const analytics: Analytics;

declare const app: FirebaseApp;

declare const auth: Auth;

declare const db: Firestore;

declare const firebase: {
    app: FirebaseApp;
    auth: Auth;
    db: Firestore;
    storage: FirebaseStorage;
    analytics: Analytics;
};

declare const firebaseConfig: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
};

export declare namespace firebaseEntry {
    export {
        firebaseConfig,
        app,
        auth,
        db,
        storage,
        analytics,
        firebase
    }
}

declare const storage: FirebaseStorage;

export { }
