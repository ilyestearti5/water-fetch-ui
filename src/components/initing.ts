import React from "react";
import { colorHooks } from "@/data/system/colors.model";
import { setTemp } from "@/reducers/Object/object.slice";
import { getColor, getSettingValue } from "@/hooks";
export function initDarkSystem() {
  const isDark = getSettingValue("window/dark.boolean");
  const mainBackground = colorHooks.getOne("primary.background");
  const mainColor = colorHooks.getOne("text.color");
  const bgSelectedColor = colorHooks.getOne("bg.selection");
  const textSelectedColor = colorHooks.getOne("text.selection");
  React.useEffect(() => {
    // toggle attribute named data-dark=true/false
    if (isDark == undefined) {
      return;
    }
    document.body.setAttribute("data-dark", isDark ? "true" : "false");
    return () => {
      document.body.removeAttribute("data-dark");
    };
  }, [isDark]);
  React.useEffect(() => {
    if (isDark == undefined) {
      return;
    }
    if (mainBackground) {
      document.body.style.backgroundColor = getColor(isDark, mainBackground)!;
    }
    if (mainColor) {
      document.body.style.color = getColor(isDark, mainColor)!;
    }
  }, [mainBackground, mainColor, isDark]);
  const font = getSettingValue("preferences/font.enum");
  React.useEffect(() => {
    if (font) {
      document.body.style.fontFamily = font;
    }
    let element: HTMLStyleElement | null;
    if (bgSelectedColor && textSelectedColor) {
      const element = document.createElement("style");
      element.textContent = `
        ::selection {
          background: ${getColor(!!isDark, bgSelectedColor)};
          color: ${getColor(!!isDark, textSelectedColor)};
        }
      `;
      document.head.append(element);
    }
    return () => {
      element?.remove();
    };
  }, [isDark, bgSelectedColor, textSelectedColor, font]);
}
export function initAdress() {
  // desc: for check connection
  React.useEffect(() => {
    function callback() {
      setTemp("local.isOnLine", navigator.onLine);
    }
    // Call the function to check internet connection status initially
    callback();
    // Set up event listener to monitor changes in online/offline status
    window.addEventListener("online", callback);
    window.addEventListener("offline", callback);
    // Clean up event listeners and cancel the fetch when component unmounts
    return () => {
      window.removeEventListener("online", callback);
      window.removeEventListener("offline", callback);
    };
  }, []);
  // desc: for get local ip adress
}
//
export function initConfigurations(more?: () => void) {
  initDarkSystem();
  initAdress();
  more?.();
}
