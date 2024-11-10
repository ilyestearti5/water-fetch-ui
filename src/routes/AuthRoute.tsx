import { getMainCloud } from "@/apis/server.config";
import { CircleLoading, EmptyComponent } from "@/components";
import { useUser, useAsyncEffect, UserDB } from "@/hooks";
import { delay } from "@/utils";
import React from "react";
export interface AuthRouteProps {
  onAuthSuccess?: (user: UserDB) => void;
  successComponent?: JSX.Element | ((props: { user: UserDB }) => JSX.Element);
}
export const AuthRoute = ({ onAuthSuccess, successComponent: Component = <EmptyComponent /> }: AuthRouteProps) => {
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const user = useUser();
  const isLoading = useAsyncEffect(async () => {
    await delay(1200);
    if (token) {
      await getMainCloud().app.auth.signInWithCustomToken(token);
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
