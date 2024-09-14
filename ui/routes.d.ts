import { JSX as JSX_2 } from 'react/jsx-runtime';
import { User } from 'firebase/auth';

export declare const AuthRoute: ({ onAuthSuccess, successComponent: Component }: AuthRouteProps) => JSX_2.Element;

export declare interface AuthRouteProps {
    onAuthSuccess?: (user: User) => void;
    successComponent?: JSX.Element | ((props: {
        user: User;
    }) => JSX.Element);
}

export { }
