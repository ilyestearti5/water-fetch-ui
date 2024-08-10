import React from "react";
import { State } from "@/types/global";
interface UseInputHookProps {
    attributes?: React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;
    extends?: string;
}
export declare function useInput({ extends: ext, // extends value from main redux store
attributes: { value: _v, ref: _r, onChange, onFocus, onBlur, "aria-multiline": ariaMultiLine, onKeyDown, className, ...props }, }: UseInputHookProps): {
    InputElement: import("react/jsx-runtime").JSX.Element;
    value: State<string | undefined>;
    focused: {
        get: boolean;
        set: React.Dispatch<React.SetStateAction<boolean>>;
    };
    inputRef: React.RefObject<HTMLTextAreaElement>;
    cursorValue: string | undefined;
    cursor: State<{
        direction: HTMLTextAreaElement["selectionDirection"];
        end: HTMLTextAreaElement["selectionEnd"];
        start: HTMLTextAreaElement["selectionStart"];
    } | undefined>;
};
interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    onValueChange?: (value: string) => any;
}
export declare function Input({ onValueChange, ...props }: InputProps): import("react/jsx-runtime").JSX.Element;
export {};
