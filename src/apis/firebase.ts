// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
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
}
export const initServer = ({ appId, measurementId }: ServerProps) => {
  const compltedConfig = {
    ...firebaseConfig,
    appId,
    measurementId,
  };
  return initializeApp(compltedConfig);
};
export class Server {
  static server: Server | null = null;
  public app: FirebaseApp;
  public auth: Auth;
  public db: Firestore;
  public storage: FirebaseStorage;
  public analytics: Analytics;
  constructor(props: ServerProps) {
    if (Server.server) {
      throw new Error("Server already initialized");
    }
    this.app = initServer(props);
    this.auth = getAuth(this.app);
    this.db = getFirestore(this.app);
    this.storage = getStorage(this.app);
    this.analytics = getAnalytics(this.app);
    Server.server = this;
  }
}
