import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiVU_IeOUIczVGpmc6xGnQk2cDRe2Xjjc",
  authDomain: "build-commerce.firebaseapp.com",
  projectId: "build-commerce",
  storageBucket: "build-commerce.appspot.com",
  messagingSenderId: "188159236489",
  appId: "1:188159236489:web:952cbee7f68b8218f86958",
  measurementId: "G-DNPQ1E5HL6",
};
export const firebaseInited = initializeApp(firebaseConfig);
const store = getStorage(firebaseInited);
const db = getFirestore(firebaseInited);
const auth = getAuth(firebaseInited);
export const firebaseApp = {
  store,
  db,
  auth,
};
