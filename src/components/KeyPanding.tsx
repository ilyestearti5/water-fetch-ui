import { useColorMerge } from "@/data/system/colors.model";
import { tw } from "@/utils";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { JoinComponentBy } from "./JoinComponentBy";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { ReactElement } from "@/types/global";
export interface KeyPandingProps extends ReactElement<HTMLSpanElement> {
  shortcut: string | string[];
}
export interface SinglePandingProps {
  content: string;
}
export function SinglePanding({ content }: SinglePandingProps) {
  const colorMerge = useColorMerge();
  const isDarwin = false;
  const styles = {
    ...colorMerge({
      backgroundColor: "gray.opacity",
      borderColor: "gray.opacity.2",
    }),
  };
  return (
    <div
      style={styles}
      className={tw(`
        rounded-[4px]
        border-solid
        border-transparent
        border-b-4
        border-x
        border-t
        px-1
      `)}
    >
      {/control/gi.test(content) && (isDarwin ? <FontAwesomeIcon icon={faApple} /> : "ctrl")}
      {/shift/gi.test(content) && (isDarwin ? <FontAwesomeIcon icon={faAngleUp} /> : "shift")}
      {[/control/gi, /shift/gi].every((s) => !s.test(content)) && content}
    </div>
  );
}
export function KeyPanding({ shortcut = [], className, ...props }: KeyPandingProps) {
  const list = typeof shortcut == "string" ? [shortcut] : shortcut;
  return (
    <span
      {...props}
      className={tw(
        `
        capitalize
        items-center
        gap-x-2
        truncate
        mx-1
      `,
        className,
      )}
    >
      <JoinComponentBy
        list={list.map((short, i) => {
          const ary = short.split("+");
          return (
            <span className="inline-flex items-center gap-x-[1px]" key={i}>
              <JoinComponentBy
                list={ary.map((string, j) => (
                  <SinglePanding key={j} content={string} />
                ))}
                joinComponent={<span>+</span>}
              />
            </span>
          );
        })}
        joinComponent={<span className="mx-1">Or</span>}
      />
    </span>
  );
}
