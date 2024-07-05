import React from "react";
import { TitleInitState, getX, getPosition, getTitle, setX, setPosition, setTitle, setY, getY } from "@/reducers/Global/title.slice";
import { handelShadowColor, useColorMerge } from "models/system/colors.model";
import { mergeObject, tw } from "@/functions/react-utils";
import { MarkDown } from "./MarkDown";
export interface TitleViewProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  position?: {
    x?: TitleInitState["x"];
    y?: TitleInitState["y"];
  };
  canMouseOn?: boolean;
}
export function TitleView({ title, position: { x = "right", y = "bottom" } = { x: "right", y: "bottom" }, onMouseMove, onMouseLeave, children, canMouseOn = false, ...props }: TitleViewProps) {
  // desc: element ref
  const element = React.createRef<HTMLDivElement>();
  // desc: state
  React.useEffect(() => {
    // when element removed
    return () => {
      setTitle(null);
      setPosition(null);
    };
  }, []);
  // effect element
  return (
    <div
      ref={element}
      onMouseMove={(e) => {
        if (title) {
          setTitle(title);
          setPosition([e.clientX, e.clientY]);
          setX(x);
          setY(y);
        }
        onMouseMove?.(e);
      }}
      onMouseLeave={(e) => {
        if (!canMouseOn) {
          setTitle(null);
          setPosition(null);
        }
        onMouseLeave?.(e);
      }}
      {...props}
    >
      {children}
    </div>
  );
}
export function TitleProvider() {
  const title = getTitle();
  const position = getPosition();
  const x = getX();
  const y = getY();
  const colorMerge = useColorMerge();
  return (
    <div
      onTransitionEnd={() => {
        if (!title) {
          setPosition(null);
        }
      }}
      className={tw(
        `
          fixed
          z-[1000000000000000000000]
          pointer-events-none
          opacity-0
          transition-opacity
          delay-300
          duration-500
        `,
        position && "opacity-100",
        x == "left" && "-translate-x-full",
        x == "center" && "-translate-x-1/2",
        y == "top" && "-translate-y-full",
        y == "center" && "-translate-y-1/2",
        (title || title == 0) && "opacity-100",
      )}
      style={{
        ...mergeObject(
          {
            left: "-1000px",
            top: "-2000px",
          },
          position && {
            left: `${position[0]}px`,
            top: `${position[1]}px`,
          },
        ),
      }}
    >
      <div
        className={tw(`
          border
          border-solid
          border-transparent
          rounded-lg
          m-3
          py-1
          px-2
        `)}
        style={{
          ...colorMerge("secondry.background", {
            borderColor: "borders",
            boxShadow: handelShadowColor([{ colorId: "shadow.color", blur: 30, size: 1, x: 0, y: 10 }]),
          }),
        }}
      >
        <MarkDown value={String(title)} />
      </div>
    </div>
  );
}
