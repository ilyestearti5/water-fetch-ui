import React from "react";
import { colorHooks, getColor } from "@/data/system/colors.model";
import { setTemp } from "@/reducers/Object/object.slice";
import { getSettingValue } from "@/reducers/Settings/settings.model";
export function initDarkSystem() {
  const isDark = getSettingValue("window/dark.boolean");
  const mainBackground = colorHooks.getOne("primary.background");
  const mainColor = colorHooks.getOne("text.color");
  const bgSelectedColor = colorHooks.getOne("bg.selection");
  const textSelectedColor = colorHooks.getOne("text.selection");
  React.useEffect(() => {
    if (isDark == undefined) {
      return;
    }
    if (mainBackground) {
      document.body.style.backgroundColor = getColor(isDark, mainBackground)!;
    }
  }, [mainBackground, isDark]);
  React.useEffect(() => {
    if (mainColor) {
      document.body.style.color = getColor(!!isDark, mainColor)!;
    }
  }, [mainColor, isDark]);
  React.useEffect(() => {
    if (bgSelectedColor && textSelectedColor) {
      const ruleNumber = document.styleSheets.item(0)?.insertRule(`
        ::selection {
          background-color: ${getColor(!!isDark, bgSelectedColor)};
          color: ${getColor(!!isDark, textSelectedColor)};
        }
      `);
      return () => {
        typeof ruleNumber == "number" && document.styleSheets.item(0)?.deleteRule(ruleNumber);
      };
    }
  }, [isDark, bgSelectedColor, textSelectedColor]);
}
export function initFonts() {
  const font = getSettingValue("preferences/font.enum");
  React.useEffect(() => {
    if (!font) {
      return;
    }
    const item = document.styleSheets.item(0);
    if (!item) {
      return;
    }
    item.insertRule(`* { font-family: ${font}; }`);
    return () => {
      item.deleteRule(0);
    };
  }, [font]);
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
  initFonts();
  more?.();
}
