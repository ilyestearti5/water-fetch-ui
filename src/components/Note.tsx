import { useColorMerge } from "@/data/system/colors.model";
import { ClickProps } from "@/types/global";
import { tw } from "@/utils";

export type NoteProps = ClickProps<HTMLSpanElement>;
export function Note({ onClick, className, children, iconClassName, ...props }: NoteProps) {
  const colorMerge = useColorMerge();
  return (
    <span
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
      }}
      className={tw(
        className,
        `
          absolute
          top-0
          right-0
          rounded-xl
          flex
          min-w-[22px]
          h-[22px]
          justify-center
          items-center
          overflow-hidden
        `,
      )}
      {...props}
      style={{
        ...colorMerge("primary", {
          color: "primary.content",
        }),
      }}
    >
      {children}
    </span>
  );
}
