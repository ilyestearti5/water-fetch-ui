import React from "react";
import { useSettingValue } from "@/hooks";
import { getTemp } from "@/reducers/Object/object.slice";
import { getModel } from "../hooks/api/googleApi";
import { EmptyComponent } from "./EmptyComponent";
import { delay, transformCase } from "@/utils/index";
import { cashLangs, langHooks } from "@/data/system/lang.model";
import { useAsyncEffect, useCopyState } from "@/hooks";
export interface TextProps {
  content: string;
}
/**
 * @description this function is used to translate the content to the choised lang
 * @param content the content that you want to translate
 * @returns the translated content and the loading state
 * @example
 * const [text, isLoading] = getText("hello world");
 * console.log(text); // "hello world"
 * console.log(isLoading); // false
 */
export const getText = (content: TextProps["content"], lang?: string): [string, boolean] => {
  const allLangs = langHooks.getEntity();
  const cashing = useCopyState<boolean>(false);
  const systemBase = getTemp<string>("system.base");
  const genModelText = getModel({ model: "gemini-pro" });
  // get the choised lang from setting
  const settingLang = useSettingValue("window/lang.enum");
  const choisedLang = React.useMemo(() => lang || settingLang, [lang, settingLang]);
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
  const isLoading = useAsyncEffect(async () => {
    await delay(300);
    if (!choisedLang || result || !genModelText || choisedLang == "en") {
      return;
    }
    const { response } = await genModelText.generateContent(`translate this text to ${choisedLang} :\n\n${content}`);
    cashing.set(true);
    langHooks.upsert([{ langId, value: response.text() }]);
  }, [result, langId, choisedLang, content, genModelText]);
  const correctResult = React.useMemo(() => result || content, [result, content]);
  return [correctResult, isLoading];
};
// Component
export function Text({ content }: TextProps) {
  const [result, isLoading] = getText(content);
  return <EmptyComponent>{isLoading ? "..." : result}</EmptyComponent>;
}
export interface InnerTextProps {
  component: (props: { text: string; isLoading: boolean }) => JSX.Element;
  text: string;
}
export function InnerText({ component, text }: InnerTextProps) {
  const [result, isLoading] = getText(text);
  return <EmptyComponent>{component({ text: result, isLoading })}</EmptyComponent>;
}
