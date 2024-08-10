import { useColorMerge } from "@/data/system/colors.model";
import { ReactElement } from "@/types/global";
import { twMerge } from "tailwind-merge";
export type CardProps = ReactElement;
export const Card = ({ className, style, ...props }: CardProps) => {
  const colorMerge = useColorMerge();
  return (
    <div
      {...props}
      className={twMerge("rounded-2xl w-1/2 border-solid border-transparent border shadow-lg flex flex-col", className)}
      style={{
        ...colorMerge({
          backgroundColor: "secondry.background",
          borderColor: "borders",
        }),
        ...style,
      }}
    />
  );
};
