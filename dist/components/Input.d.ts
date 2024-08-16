import React from "react";
export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    onValueChange?: (value: string, number: number) => any;
    selectOnFocus?: boolean;
}
export declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
