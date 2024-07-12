import { tw } from "@/functions/react-utils";
import { Scroll } from "./Scroll";
import React from "react";
interface MultiScreenPageProps {
  pages?: JSX.Element[];
  focused?: number;
}
export function MultiScreenPage({ pages = [], focused = 0 }: MultiScreenPageProps) {
  const FocusedPage = React.useMemo(() => pages[focused], [pages, focused]);
  return (
    <div
      className={tw(`
        h-full
        flex
        absolute
        inset-y-0
        transition-[left]
        duration-300
        overflow-hidden
      `)}
      style={{
        width: `${100 * pages.length}%`,
        left: `${-100 * focused}%`,
      }}
    >
      <div
        className="h-full"
        style={{
          width: `${(focused / pages.length) * 100}%`,
        }}
      />
      <div
        className="h-full overflow-hidden"
        style={{
          width: `${(1 / pages.length) * 100}%`,
        }}
      >
        <Scroll>{FocusedPage}</Scroll>
      </div>
      <div
        className="h-full"
        style={{
          width: `${(1 - (focused + 1) / pages.length) * 100}%`,
        }}
      />
    </div>
  );
}
