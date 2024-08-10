import React from "react";
import { cashLangs, langHooks } from "@/data/system/lang.model";
import { getSettingValue } from "@/reducers/Settings/settings.model";
import { transformCase } from "@/utils/index";
import { getModel } from "../hooks/api/googleApi";
import { logHooks } from "@/data/system/logs.model";
import { store } from "@/store";
import { getTemp } from "@/reducers/Object/object.slice";
import { EmptyComponent } from "./EmptyComponent";
import { useAsyncEffect, useCopyState } from "@/hooks";
export interface TextProps {
  content: string;
}
// Hook
export const getText = (content: TextProps["content"]) => {
  const allLangs = langHooks.getEntity();
  //
  const cashing = useCopyState<boolean>(false);
  const systemBase = getTemp<string>("system.base");
  const genModelText = getModel({ model: "gemini-pro" });
  // get the choised lang from setting
  const choisedLang = getSettingValue("window/lang.enum");
  // cashing logic
  React.useEffect(() => {
    if (cashing.get) {
      cashLangs();
      cashing.set(false);
    }
  }, [systemBase, cashing.get]);
  // translate the content to camelCase content
  const cabab = React.useMemo(() => transformCase(content, "normal", "cabab"), [content]);
  // try to generate the lang id
  const langId = React.useMemo(() => (!choisedLang ? "" : `${choisedLang}->${cabab}`), [choisedLang, cabab]);
  // try getting result
  const result = React.useMemo(() => allLangs[langId]?.value, [allLangs, langId]);
  // generate AI if it is the content no used
  useAsyncEffect(async () => {
    if (!choisedLang || result || !genModelText || choisedLang == "en") {
      return;
    }
    //
    try {
      logHooks.upsert([
        {
          title: `loading translations for langId=${choisedLang}`,
          logId: choisedLang,
          type: "INFO",
        },
      ]);
      const { response } = await genModelText.generateContent(`translate this text to ${choisedLang} :\n\n${content}`);
      //
      logHooks.upsert([
        {
          title: `translations for langId=${choisedLang} content it is ${store.getState().logs.ids.length}`,
          logId: choisedLang,
          type: "SUCC",
        },
      ]);
      cashing.set(true);
      langHooks.upsert([{ langId, value: response.text() }]);
    } catch (e: any) {
      logHooks.upsert([
        {
          title: e.message,
          logId: choisedLang,
          type: "ERR",
          category: "window",
        },
      ]);
    }
    //
  }, [result, langId, choisedLang, content, genModelText]);
  //
  const correctResult = React.useMemo(() => result || content, [result, content]);
  //
  return correctResult;
};
// Component
export function Text({ content }: TextProps) {
  const result = getText(content);
  return <EmptyComponent>{result}</EmptyComponent>;
}
export interface InnerTextProps {
  component: (props: { text: string }) => JSX.Element;
  text: string;
}
export function InnerText({ component, text }: InnerTextProps) {
  const result = getText(text);
  return <EmptyComponent>{component({ text: result })}</EmptyComponent>;
}
