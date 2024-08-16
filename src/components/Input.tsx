import { getSettingValue, useColorMerge } from "@/hooks";
import { tw } from "@/utils";
import React from "react";
export interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onValueChange?: (value: string, number: number) => any;
  selectOnFocus?: boolean;
}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, selectOnFocus, onFocus, onBlur, onValueChange, onChange, style, ...props }: InputProps, ref: React.Ref<HTMLInputElement>) => {
    const colorMerge = useColorMerge();
    const [focused, setFocused] = React.useState(false);
    const isAnimation = getSettingValue("preferences/animation.boolean");
    return (
      <input
        {...props}
        ref={ref}
        onFocus={(e) => {
          !focused && setFocused(true);
          if (selectOnFocus) {
            e.currentTarget.select();
          }
          onFocus?.(e);
        }}
        onBlur={(e) => {
          focused && setFocused(false);
          onBlur?.(e);
        }}
        className={tw(
          `
            p-2
            border
            border-solid
            border-transparent
            font-[inherit]
            resize-none
            whitespace-nowrap
            rounded-sm
            w-full
          `,
          isAnimation && "transition-[border-color]",
          className,
        )}
        style={{
          ...colorMerge(
            {
              borderColor: "borders",
              backgroundColor: "field.background",
            },
            focused && {
              borderColor: "primary",
            },
          ),
          ...style,
        }}
        onChange={(e) => {
          onValueChange?.(e.currentTarget.value, e.currentTarget.valueAsNumber);
          onChange?.(e);
        }}
      />
    );
  },
);
