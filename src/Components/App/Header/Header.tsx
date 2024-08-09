import React from "react";
// useHooks & Redux Js Toolkit & Electron Packages & Icons Type
import { isSorted } from "utils/index";
import { tw, useCopyState } from "main/src/functions/react-utils";
// Component
import { getModifier } from "@/reducers/Global/keyboard.slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { settingHooks, getSettingValue } from "@/reducers/Settings/settings.model";
import { handelShadowColor, useColorMerge } from "@/data/system/colors.model";
import { getTemp } from "@/reducers/Object/object.slice";
export const headerVisibility = "visibility/header.boolean";
export interface HeaderProps {
  children?: React.ReactNode;
}
export function Header({ children }: HeaderProps) {
  const visibility = getSettingValue(headerVisibility);
  const showIcon = useCopyState(false);
  const shift = getModifier("Shift");
  React.useEffect(() => {
    const handelMouse = (e: MouseEvent) => {
      const X = (e.x * 100) / innerWidth;
      showIcon.set(e.y <= 100 && isSorted(25, X, 75));
    };
    document.addEventListener("mousemove", handelMouse);
    return () => document.removeEventListener("mousemove", handelMouse);
  }, []);
  // desc: color merge
  const colorMerge = useColorMerge();
  // desc: window focused
  const windowFocused = getTemp<boolean>("window.isFocused");
  const animation = getSettingValue("preferences/animation.boolean");
  // desc: header bar style
  const styles = React.useMemo(() => {
    return colorMerge(windowFocused ? "primary.background" : "secondry.background", {
      borderColor: "borders",
      boxShadow: handelShadowColor([
        {
          blur: 10,
          x: 0,
          y: 3,
          size: 0,
          colorId: "shadow.color",
        },
      ]),
    });
  }, [colorMerge, windowFocused]);
  // Render Component
  return (
    <div className="top-0 z-[10000000000000000000000000000000000000] absolute inset-x-0">
      <div
        onClick={() => {
          settingHooks.setOneFeild(headerVisibility, "value", !visibility);
        }}
        title={visibility ? "hide header bar" : "open header bar"}
        className={tw(
          `
            absolute
            top-full
            left-1/2
            -translate-x-1/2
            w-[300px]
            rounded-ee-lg
            rounded-es-lg
            flex
            items-center
            justify-center
            cursor-pointer
            overflow-hidden
            shadow-2xl
            border-solid
            border-transparent
            z-10
           `,
          animation && `transition-[height] duration-200`,
          !showIcon.get || !shift ? "h-[0px]" : "border-b border-x h-[30px]",
        )}
        style={styles}
      >
        <FontAwesomeIcon icon={visibility ? faChevronUp : faChevronDown} />
      </div>
      <div
        className={tw(
          "relative border-b border-solid border-transparent box-content flex h-[0px] items-center justify-between overflow-hidden",
          visibility && "h-[50px]",
          animation && "transition-[height]",
        )}
        style={{
          ...styles,
        }}
      >
        {children}
      </div>
    </div>
  );
}
