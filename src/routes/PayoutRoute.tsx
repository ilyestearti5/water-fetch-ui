import { getUserFunction } from "@/apis";
import { CircleLoading, EmptyComponent } from "@/components";
import { useUser, useAsyncEffect, useCopyState } from "@/hooks";
import { delay } from "@/utils";
import React from "react";
export interface PayoutRouteProps {
  onPayoutSuccess?: (payout: PayoutResult) => void;
  successComponent?: JSX.Element | ((props: { payout: PayoutResult }) => JSX.Element);
}
export type ChargeStatus = "pending" | "paid" | "failed" | "canceled";
export interface PayoutResult {
  payoutId: string;
  amount: number;
  createdAt: number;
  payedAt?: number;
  payer: string;
  key: string;
  projectId: string;
  status: ChargeStatus;
  type: "subscription" | "transaction" | "payment";
  subscription?: {
    label: string;
    duration: number;
  };
  transaction?: {
    saller?: string;
  };
}
export const PayoutRoute = ({ onPayoutSuccess, successComponent: Component = <EmptyComponent /> }: PayoutRouteProps) => {
  const searchParams = new URLSearchParams(location.search);
  const payoutId = searchParams.get("payout_id");
  const user = useUser();
  const payoutState = useCopyState<PayoutResult | null>(null);
  const isLoading = useAsyncEffect(async () => {
    await delay(1200);
    if (payoutId && user) {
      const fn = await getUserFunction<{ payoutId: string }, PayoutResult>("payout-get");
      if (!fn) {
        return;
      }
      const payout = await fn.callback({
        payoutId,
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
