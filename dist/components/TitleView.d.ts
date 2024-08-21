import React from "react";
import { TitleInitState } from "@/reducers/Global/title.slice";
export interface TitleViewProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    position?: {
        x?: TitleInitState["x"];
        y?: TitleInitState["y"];
    };
    canMouseOn?: boolean;
}
export declare function TitleView({ title, onClick, position: { x, y }, onMouseMove, onMouseLeave, children, canMouseOn, ...props }: TitleViewProps): import("react/jsx-runtime").JSX.Element;
