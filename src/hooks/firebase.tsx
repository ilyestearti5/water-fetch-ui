import { firebaseApp } from "@/functions/app/web/firebase";
import { useCopyState } from "@/functions/react-utils";
import { User, onAuthStateChanged } from "firebase/auth";
import React from "react";
export function getUser() {
  let user = useCopyState<User | null>(null);
  React.useEffect(() => {
    user.set(firebaseApp.auth.currentUser);
    const unsubscribe = onAuthStateChanged(firebaseApp.auth, async (info) => {
      user.set(info);
    });
    return unsubscribe;
  }, []);
  return user;
}
