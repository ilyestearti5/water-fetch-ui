import { useColorMerge } from "models/system/colors.model";
import { tw } from "@/functions/react-utils";
import React from "react";
interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  onValueChange?: (value: string, number: number) => any;
  selectOnFocus?: boolean;
}
function Input({ className, selectOnFocus, onFocus, onBlur, onValueChange, onChange, style, ...props }: InputProps, ref: React.Ref<HTMLInputElement>) {
  const colorMerge = useColorMerge();
  const [focused, setFocused] = React.useState(false);
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
        className,
      )}
      style={{
        ...colorMerge(
          {
            borderColor: "borders",
            backgroundColor: "feild.background",
          },
          focused && { borderColor: "primary" },
        ),
        ...style,
      }}
      onChange={(e) => {
        onValueChange?.(e.currentTarget.value, e.currentTarget.valueAsNumber);
        onChange?.(e);
      }}
    />
  );
}
export default React.forwardRef<HTMLInputElement, InputProps>(Input);
