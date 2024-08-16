import { ButtonProps } from "./Button";
export interface WaitableButtonProps<T> extends ButtonProps {
    onPress: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => Promise<T> | T;
    text?: string;
}
export declare function WaitableButton<T>({ icon, onClick, text, onPress, children, ...props }: WaitableButtonProps<T>): import("react/jsx-runtime").JSX.Element;
