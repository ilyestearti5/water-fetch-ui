// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp, FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc, getDoc, onSnapshot, collection, DocumentData, query, QueryConstraint, QuerySnapshot } from "firebase/firestore";
import { FirebaseStorage, getDownloadURL, getStorage, ref, uploadBytes, UploadResult, uploadString } from "firebase/storage";
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
  projectId: string;
}
export class Server {
  static server: Server | null = null;
  public app: FirebaseApp;
  public auth: Auth;
  public db: Firestore;
  public storage: FirebaseStorage;
  public analytics: Analytics;
  private lockConfig: FirebaseOptions;
  constructor(public props: ServerProps) {
    if (Server.server) {
      throw new Error("Server already initialized");
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
    this.analytics = getAnalytics(this.app);
    Server.server = this;
  }
  get config() {
    return this.lockConfig;
  }
  ref() {
    return collection(this.db, "projects", this.props.projectId);
  }
  storageRef() {
    return ref(this.storage, ["projects", this.props.projectId].join("/"));
  }
  async setDoc<T extends object>(paths: string[], data: T) {
    await setDoc(doc(this.ref(), paths.join("/")), data, { merge: true });
  }
  async getDoc(paths: string[]) {
    const docRef = doc(this.ref(), paths.join("/"));
    const docSnap = await getDoc(docRef);
    return docSnap;
  }
  async onSnapshot(paths: string[], q: QueryConstraint[], callback: (snapshot: QuerySnapshot<DocumentData, DocumentData>) => void) {
    return onSnapshot(query(collection(this.ref(), paths.join("/")), ...q), callback);
  }
  async getFile(url: string) {
    const newRef = ref(this.storageRef(), url);
    const downloadUrl = await getDownloadURL(newRef);
    const response = await fetch(downloadUrl);
    const blob = await response.blob();
    return {
      blob,
      downloadUrl,
      response,
      newRef,
    };
  }
  async setFile(url: string, content: string | Blob | Uint8Array | ArrayBuffer) {
    const newRef = ref(this.storageRef(), url);
    let result: UploadResult;
    if (typeof content == "string") {
      result = await uploadString(newRef, content);
    } else {
      result = await uploadBytes(newRef, content);
    }
    return {
      result,
      ref: newRef,
    };
  }
}
