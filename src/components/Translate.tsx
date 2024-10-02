import React from "react";
import { useAsyncEffect, useCopyState, useSettingValue, useGeminiModel } from "@/hooks";
import { getTemp } from "@/reducers/Object/object.slice";
import { EmptyComponent } from "./EmptyComponent";
import { delay, transformCase } from "@/utils";
import { cashLangs, langHooks } from "@/data/system/lang.model";
export interface TranslateProps {
  content: string;
  lang?: string;
}
export const useTranslate = (content: TranslateProps["content"], lang?: string): [string, boolean] => {
  const allLangs = langHooks.getEntity();
  const cashing = useCopyState<boolean>(false);
  const systemBase = getTemp<string>("system.base");
  const genModelText = useGeminiModel({ model: "gemini-pro" });
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
  const word = React.useMemo(() => transformCase(content, "normal", "cabab").toLowerCase(), [content]);
  // try to generate the lang id
  // try getting result
  const result = React.useMemo(() => (choisedLang ? allLangs[word]?.[choisedLang] : undefined), [allLangs, word]);
  // generate AI if it is the content no used
  const isLoading = useAsyncEffect(async () => {
    if (choisedLang && !result && genModelText && choisedLang != "en") {
      await delay(300);
      const { response } = await genModelText.generateContent(`translate this text to ${choisedLang} :\n\n${content}`);
      cashing.set(true);
      langHooks.upsert([{ word, [choisedLang]: response.text() }]);
    }
  }, [result, word, choisedLang, content, genModelText]);
  const correctResult = React.useMemo(() => result || content, [result, content]);
  return [correctResult, isLoading];
};
export function Translate({ content, lang }: TranslateProps) {
  const [result, isLoading] = useTranslate(content, lang);
  return <EmptyComponent>{isLoading ? "..." : result}</EmptyComponent>;
}
export interface InnerTextProps extends TranslateProps {
  component: (props: { result: string; isLoading: boolean }) => JSX.Element;
}
export function InnerTranslate({ component, content, lang }: InnerTextProps) {
  const [result, isLoading] = useTranslate(content, lang);
  return <EmptyComponent>{component({ result, isLoading })}</EmptyComponent>;
}
