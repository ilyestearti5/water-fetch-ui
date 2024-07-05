import React from "react";
import { EmptyComponent } from "./EmptyComponent";
export interface JoinComponentByProps {
  list: JSX.Element[];
  joinComponent: JSX.Element;
}
export function JoinComponentBy({ joinComponent, list }: JoinComponentByProps) {
  const result = React.useMemo(() => {
    const jsxElements: JSX.Element[] = [];
    const length = list.length;
    let j = 0;
    list.forEach((component, index) => {
      jsxElements.push(<EmptyComponent key={j} children={component} />);
      index + 1 != length && jsxElements.push(<EmptyComponent key={j + 1} children={joinComponent} />);
      j += 2;
    });
    return jsxElements;
  }, [list, joinComponent]);
  return result;
}
