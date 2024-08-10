import { randomizeArray } from "@/utils/index";
import { useCopyState } from "@/hooks";
import React from "react";
import { EmptyComponent } from "./EmptyComponent";
export function useTextAnimation({ string = "expmle", time = 10 }: { string?: string; time?: number }) {
  const state = useCopyState(string);
  const animationString = useCopyState("");
  const isLoading = useCopyState(true);
  React.useEffect(() => {
    const string = state.get;
    const stringList: string[] = randomizeArray(string.split("").filter(Boolean));
    isLoading.set(true);
    let index = 0;
    let stringListStart = 0;
    const timerCounter = setInterval(function () {
      if (index >= string.length) {
        isLoading.set(false);
        clearInterval(timerCounter);
        return;
      }
      animationString.set(`${string.slice(0, index)}${stringList[stringListStart]}`);
      if (stringList[stringListStart] == string[index]) {
        index++;
        stringListStart = 0;
      } else {
        stringListStart++;
      }
    }, time);
    return function () {
      isLoading.set(false);
      clearInterval(timerCounter);
    };
  }, [state.get]);
  return {
    state,
    value: animationString.get,
    isLoading: isLoading.get,
  };
}
export interface TextAnimationProps {
  content?: string;
  time?: number;
}
export const TextAnimation = ({ content, time }: TextAnimationProps) => {
  const { state, value } = useTextAnimation({
    time,
    string: content,
  });
  React.useEffect(() => {
    state.set(content || "");
  }, [content]);
  return <EmptyComponent>{value}</EmptyComponent>;
};
