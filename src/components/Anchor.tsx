import { useColorMerge } from "@/hooks";
import { useCopyState } from "@/hooks";
import { tw } from "@/utils";
export type AnchorProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;
export function Anchor({ className, style, ...props }: AnchorProps) {
  const colorMerge = useColorMerge();
  const hover = useCopyState(false);
  return (
    <a
      onMouseEnter={() => hover.set(true)}
      onMouseLeave={() => hover.set(false)}
      className={tw(className, `hover:underline`)}
      style={{
        ...colorMerge(
          hover.get && {
            color: "primary",
          },
        ),
      }}
      {...props}
    />
  );
}
