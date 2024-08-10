export interface GetModelProps {
    model?: "gemini-pro" | "gemini-pro-vision";
}
export declare const getModel: ({ model }: GetModelProps) => import("@google/generative-ai").GenerativeModel | null;
