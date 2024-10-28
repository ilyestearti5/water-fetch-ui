import React from "react";
import { colorHooks } from "@/data/system/colors.model";
import { getColor, setTemp, useSettingValue } from "@/hooks";
import { setModifier } from "@/reducers/Global/keyboard.slice";
export function initConfigurations(more?: () => void) {
  const isDark = useSettingValue("window/dark.boolean");
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
    const metaThemeColor = document.createElement("meta");
    metaThemeColor.name = "theme-color";
    document.head.appendChild(metaThemeColor);
    if (mainBackground) {
      const color = getColor(isDark, mainBackground)!;
      metaThemeColor.content = color;
      document.body.style.backgroundColor = color;
    }
    if (mainColor) {
      document.body.style.color = getColor(isDark, mainColor)!;
    }
    return () => {
      metaThemeColor.remove();
    };
  }, [mainBackground, mainColor, isDark]);
  const font = useSettingValue("preferences/font.enum");
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
  React.useEffect(() => {
    const handel = (e: KeyboardEvent) => {
      if (!e.repeat) {
        setModifier("Shift", e.getModifierState("Shift"));
        setModifier("Alt", e.getModifierState("Alt"));
        setModifier("Control", e.getModifierState("Control"));
        setModifier("SymbolLock", e.getModifierState("SymbolLock"));
        setModifier("AltGraph", e.getModifierState("AltGraph"));
        setModifier("CapsLock", e.getModifierState("CapsLock"));
        setModifier("Fn", e.getModifierState("Fn"));
        setModifier("FnLock", e.getModifierState("FnLock"));
        setModifier("Hyper", e.getModifierState("Hyper"));
        setModifier("Meta", e.getModifierState("Meta"));
        setModifier("NumLock", e.getModifierState("NumLock"));
        setModifier("Super", e.getModifierState("Super"));
        setModifier("ScrollLock", e.getModifierState("ScrollLock"));
        setModifier("Symbol", e.getModifierState("Symbol"));
        setModifier("Key", e.key);
      }
    };
    addEventListener("keydown", handel);
    addEventListener("keyup", handel);
    return () => {
      removeEventListener("keydown", handel);
      removeEventListener("keyup", handel);
    };
  }, []);
  more?.();
}
