import { getFunction } from "@/apis";
import { CircleLoading, EmptyComponent } from "@/components";
import { getUser, useAsyncEffect, useCopyState } from "@/hooks";
import { delay } from "@/utils";
import React from "react";
export interface PayoutRouteProps {
  onPayoutSuccess?: (payout: PayoutResult) => void;
  successComponent?: JSX.Element | ((props: { payout: PayoutResult }) => JSX.Element);
}
export type ChargeStatus = "pending" | "processing" | "paid" | "failed" | "expired" | "canceled";
export interface PayoutResult {
  payoutId: string;
  amount: number;
  createdAt: number;
  payedAt?: number;
  payer: string;
  platform: "test" | "web" | "desktop" | "mobile";
  projectId: string;
  status: ChargeStatus;
}
const getPayout = getFunction<PayoutResult, { payoutId: string; userToken: string }>("payout-get");
export const PayoutRoute = ({ onPayoutSuccess, successComponent: Component = <EmptyComponent /> }: PayoutRouteProps) => {
  const searchParams = new URLSearchParams(location.search);
  const payoutId = searchParams.get("payout_id");
  const user = getUser();
  const payoutState = useCopyState<PayoutResult | null>(null);
  const isLoading = useAsyncEffect(async () => {
    await delay(1200);
    if (payoutId && user) {
      const userToken = await user.getIdToken(true);
      const payout = await getPayout({
        payoutId,
        userToken,
      });
      payoutState.set(payout);
    }
  }, [payoutId, user]);
  React.useEffect(() => {
    if (payoutState.get) {
      onPayoutSuccess?.(payoutState.get);
    }
  }, [payoutState.get]);
  return (
    <div className="flex justify-center items-center h-full">
      {isLoading && <CircleLoading circleClassName="border-4 w-[50px] h-[50px]" />}
      {payoutState.get && (typeof Component == "function" ? <Component payout={payoutState.get} /> : Component)}
    </div>
  );
};
