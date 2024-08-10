import React from "react";
export interface TextAreaProps extends React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    propositions?: string[];
    selection?: {
        direction: HTMLTextAreaElement["selectionDirection"];
        end: HTMLTextAreaElement["selectionEnd"];
        start: HTMLTextAreaElement["selectionStart"];
    };
    onSelectionChange?: (selection?: TextAreaProps["selection"]) => void;
    onValueChange?: (value: string) => any;
    tabSize?: number;
    supportTab?: boolean;
    multiLines?: boolean;
    acceptKeys?: string[];
    pattern?: string | RegExp;
}
export declare function TextArea({ className, multiLines, onChange, onKeyDown, onSelect, onSelectionChange, onValueChange, onFocus, onBlur, propositions, selection, style, tabSize, supportTab, hidden, acceptKeys, pattern, ...props }: TextAreaProps): import("react/jsx-runtime").JSX.Element;
