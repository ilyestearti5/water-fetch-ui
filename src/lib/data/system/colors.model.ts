import React from "react";
import { TableDefConfig } from "models/pkg/types";
import { Nothing } from "utils/interfaces";
import { getSettingValue } from "@/reducers/Settings/settings.model";
import { EntityId } from "@reduxjs/toolkit";
import { defineTable } from "models/pkg/table.def";
import { data } from "api/color.json";
export type ColorIds = keyof typeof data;
// Each Record Of One Color
export interface Color {
  colorId: string;
  dark?: string;
  light?: string;
  default?: string;
  propositions?: string[];
}
const initConfig: TableDefConfig<Color, "colorId", "color"> = {
  id: "colorId",
  name: "color",
  data,
};
export const { hooks: colorHooks, slice: colorSlice, init: initColors, select: selectColors, entity: colorEntity, entitySelect: colorSelectors } = defineTable(initConfig);
type CssColorKeys =
  | "background"
  | "backgroundColor"
  | "color"
  | "borderColor"
  | "outlineColor"
  | "borderLeftColor"
  | "borderRightColor"
  | "borderBottomColor"
  | "borderTopColor"
  | "boxShadow"
  | "caretColor"
  | "fill"
  | "stroke";
// This Values Represent No Value
export function useColorMerge<T extends Partial<Record<CssColorKeys, ColorIds | ReturnColorHandelFunction>>>() {
  const allColors = colorHooks.getEntity();
  const isDark = getSettingValue("window/dark.boolean");
  return React.useCallback(
    (...args: (Nothing | ColorIds | T)[]) => {
      const firstResult: any = {};
      type Ret = Partial<Record<keyof T, string>>;
      const result: Ret = {};
      if (isDark == undefined) {
        return result;
      }
      args.forEach((css) => {
        if (css) {
          if (typeof css == "string") {
            firstResult.backgroundColor = css;
            return;
          }
          Object.entries(css).forEach(([cssProp, colorIdOrFn]) => {
            if (typeof colorIdOrFn == "function") {
              firstResult[cssProp] = colorIdOrFn;
              return;
            }
            firstResult[cssProp] = colorIdOrFn;
          });
        }
      });
      for (const prop in firstResult as Ret) {
        const itemInCss = firstResult[prop];
        if (typeof itemInCss == "function") {
          result[prop] = itemInCss(allColors, isDark);
        } else if (typeof itemInCss == "string") {
          const color = allColors[itemInCss];
          if (color) result[prop] = getColor(isDark, color);
        }
      }
      return result;
    },
    [isDark, allColors],
  );
}
export type ReturnColorHandelFunction = (allColors: Record<EntityId, Color>, isDark: boolean) => string;
export function handelGradientColor(direction: string, ...colors: ColorIds[]): ReturnColorHandelFunction {
  return (allColors, isDark) => {
    return `linear-gradient(${direction} , ${colors
      .filter((colorId) => allColors[colorId])
      .map((colorId) => {
        const clr = allColors[colorId]!;
        return getColor(isDark, clr);
      })
      .join(" , ")})`;
  };
}
export function getColor(isDark: boolean, color: Color) {
  if (isDark) {
    return color.dark || color.default;
  } else {
    return color.light || color.default;
  }
}
export function handelShadowColor(
  array: {
    colorId: ColorIds;
    x?: number;
    y?: number;
    size?: number;
    blur?: number;
    isInset?: boolean;
  }[] = [],
): ReturnColorHandelFunction {
  return (allColors, isDark) =>
    array
      .filter((item) => {
        return allColors[item.colorId];
      })
      .map(({ colorId, x = 0, y = 0, blur = 3, size = 1, isInset = false }) => {
        const color = allColors[colorId]!;
        return `${x}px ${y}px ${blur}px ${size}px ${getColor(isDark, color)} ${isInset ? "inset" : ""}`;
      })
      .join(" , ");
}
