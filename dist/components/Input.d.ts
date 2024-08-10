import React from "react";
interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    onValueChange?: (value: string, number: number) => any;
    selectOnFocus?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default _default;
