import { ClientCloud, initCloud } from "./apis/server.config";
// in this momoent , a new cloud plugin named my-cloud created
export const myCloud = initCloud({
  apiKey: "AIzaSyBmcnHP80KXpBXltHrVnP1MZPsiSbVbWqQ",
  appId: "1:911813185967:web:156422661781bf11315f5a",
  authDomain: "water-fetch.firebaseapp.com",
  measurementId: "G-NE6Z35DJ1F",
  messagingSenderId: "911813185967",
  projectId: "water-fetch",
  storageBucket: "water-fetch.appspot.com",
});
export const mainCloud = new ClientCloud("main", "my-cloud");
