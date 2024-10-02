import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
export interface UseGeminiModelProps {
  model?: "gemini-pro" | "gemini-pro-vision";
}
export const useGeminiModel = ({ model = "gemini-pro" }: UseGeminiModelProps) => {
  const result = React.useMemo(() => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      return null;
    }
    const ai = new GoogleGenerativeAI(apiKey);
    return ai.getGenerativeModel({ model });
  }, [model]);
  return result;
};
