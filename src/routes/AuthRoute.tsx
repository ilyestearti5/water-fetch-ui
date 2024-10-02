import { Server } from "@/apis/firebase";
import { CircleLoading, EmptyComponent } from "@/components";
import { useUser, useAsyncEffect, useCopyState } from "@/hooks";
import { delay } from "@/utils";
import { signInWithCustomToken, User } from "firebase/auth";
import React from "react";
export interface AuthRouteProps {
  onAuthSuccess?: (user: User) => void;
  successComponent?: JSX.Element | ((props: { user: User }) => JSX.Element);
}
export const AuthRoute = ({ onAuthSuccess, successComponent: Component = <EmptyComponent /> }: AuthRouteProps) => {
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const user = useUser();
  const isLoading = useAsyncEffect(async () => {
    await delay(1200);
    if (token && Server.server) {
      await signInWithCustomToken(Server.server.auth, token);
    }
  }, [token]);
  React.useEffect(() => {
    if (user) {
      onAuthSuccess?.(user);
    }
  }, [user]);
  return (
    <div className="flex justify-center items-center h-full">
      {isLoading && <CircleLoading circleClassName="border-4 w-[50px] h-[50px]" />}
      {user && (typeof Component == "function" ? <Component user={user} /> : Component)}
    </div>
  );
};
