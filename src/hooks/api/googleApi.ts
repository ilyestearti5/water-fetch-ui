import { GoogleGenerativeAI } from "@google/generative-ai";
import React from "react";
export interface GetModelProps {
  model?: "gemini-pro" | "gemini-pro-vision";
}
export const getModel = ({ model = "gemini-pro" }: GetModelProps) => {
  const s = React.useMemo(() => {
    const apiKey = import.meta.env.GEMINI_API_KEY;
    if (!apiKey) {
      return null;
    }
    const ai = new GoogleGenerativeAI(apiKey);
    return ai.getGenerativeModel({ model });
  }, [model]);
  return s;
};
