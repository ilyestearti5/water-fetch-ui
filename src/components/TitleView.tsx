import React from "react";
import { TitleInitState, setX, setPosition, setTitle, setY } from "@/reducers/Global/title.slice";
export interface TitleViewProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  position?: {
    x?: TitleInitState["x"];
    y?: TitleInitState["y"];
  };
  canMouseOn?: boolean;
}
export function TitleView({
  title,
  onClick,
  position: { x = "right", y = "bottom" } = { x: "right", y: "bottom" },
  onMouseMove,
  onMouseLeave,
  children,
  canMouseOn = false,
  ...props
}: TitleViewProps) {
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
  const resetTitle = () => {
    if (!canMouseOn) {
      setTitle(null);
      setPosition(null);
    }
  };
  return (
    <div
      ref={element}
      onClick={(e) => {
        resetTitle();
        onClick?.(e);
      }}
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
        resetTitle();
        onMouseLeave?.(e);
      }}
      {...props}
    >
      {children}
    </div>
  );
}
