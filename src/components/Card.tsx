import { useColorMerge } from "@/hooks";
import { ReactElement } from "@/types/global";
import { twMerge } from "tailwind-merge";
export type CardProps = ReactElement;
export const Card = ({ className, style, ...props }: CardProps) => {
  const colorMerge = useColorMerge();
  return (
    <div
      {...props}
      className={twMerge("flex flex-col shadow-lg border border-transparent border-solid rounded-2xl w-1/2", className)}
      style={{
        ...colorMerge({
          backgroundColor: "secondary.background",
          borderColor: "borders",
        }),
        ...style,
      }}
    />
  );
};
