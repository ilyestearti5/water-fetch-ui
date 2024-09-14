import { JSX as JSX_2 } from 'react/jsx-runtime';
import { User } from 'firebase/auth';

export declare const AuthRoute: ({ onAuthSuccess, successComponent: Component }: AuthRouteProps) => JSX_2.Element;

export declare interface AuthRouteProps {
    onAuthSuccess?: (user: User) => void;
    successComponent?: JSX.Element | ((props: {
        user: User;
    }) => JSX.Element);
}

export declare type ChargeStatus = "pending" | "processing" | "paid" | "failed" | "expired" | "canceled";

export declare interface PayoutResult {
    payoutId: string;
    amount: number;
    createdAt: number;
    payedAt?: number;
    payer: string;
    platform: "test" | "web" | "desktop" | "mobile";
    projectId: string;
    status: ChargeStatus;
}

export declare const PayoutRoute: ({ onPayoutSuccess, successComponent: Component }: PayoutRouteProps) => JSX_2.Element;

export declare interface PayoutRouteProps {
    onPayoutSuccess?: (payout: PayoutResult) => void;
    successComponent?: JSX.Element | ((props: {
        payout: PayoutResult;
    }) => JSX.Element);
}

export { }
