import { getSettingValue } from "@/reducers/Settings/settings.model";
import { GoogleGenerativeAI } from "@google/generative-ai";
import React from "react";
export interface GetModelProps {
  model?: "gemini-pro" | "gemini-pro-vision";
}
export const getModel = ({ model = "gemini-pro" }: GetModelProps) => {
  const apiKey = getSettingValue("ai/googleGeminiApiKey.string");
  const s = React.useMemo(() => {
    if (!apiKey) {
      return null;
    }
    const ai = new GoogleGenerativeAI(apiKey);
    return ai.getGenerativeModel({ model });
  }, [apiKey, model]);
  return s;
};
