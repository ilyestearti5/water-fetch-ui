import React from "react";
export declare function useTextAnimation({ string, time }: {
    string?: string;
    time?: number;
}): {
    state: {
        get: string;
        set: React.Dispatch<React.SetStateAction<string>>;
    };
    value: string;
    isLoading: boolean;
};
export interface TextAnimationProps {
    content?: string;
    time?: number;
}
export declare const TextAnimation: ({ content, time }: TextAnimationProps) => import("react/jsx-runtime").JSX.Element;
