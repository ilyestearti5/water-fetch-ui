import React from "react";
import { useColorMerge } from "models/system/colors.model";
import { tw } from "@/functions/react-utils";
import { useCopyState } from "@/functions/react-utils";
interface ImageProps extends Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, "alt"> {
  alt?: any;
}
export function Image({ className, alt, src, children, style, ...props }: ImageProps) {
  const colorMerge = useColorMerge();
  const focused = useCopyState(false);
  React.useEffect(() => {
    () => {
      focused.set(false);
    };
  }, []);
  return (
    <div
      tabIndex={-1}
      {...props}
      className={tw(`overflow-hidden rounded-full w-[150px] h-[150px] border border-solid border-transparent transition-shadow duration-300 relative text-xs`, className)}
      style={{
        ...colorMerge(focused.get && { borderColor: "primary" }),
        ...style,
      }}
      onFocus={() => {
        focused.set(true);
      }}
      onBlur={() => {
        focused.set(false);
      }}
    >
      {src && <img src={src} className={tw(`absolute inset-0 w-full h-full object-cover`)} draggable={false} />}
      {!src && <div className="top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2">{alt}</div>}
      <div className={"absolute inset-0 overflow-hidden"}>{children}</div>
    </div>
  );
}
