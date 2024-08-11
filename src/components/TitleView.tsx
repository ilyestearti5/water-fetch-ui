import React from "react";
import { TitleInitState, setX, setPosition, setTitle, setY } from "@/reducers/Global/title.slice";
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
