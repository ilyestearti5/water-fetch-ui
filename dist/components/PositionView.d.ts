import React from "react";
import { PositionsIds } from "@/data/system/positions.model";
export interface PositionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    readonly positionId: PositionsIds | string;
}
export interface ChangableComponentProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onContentChange?: (rect: DOMRect) => any;
}
/**
 *
 * For Local State
 */
export declare const ChangableComponent: ({ onContentChange, ...props }: ChangableComponentProps) => import("react/jsx-runtime").JSX.Element;
/**
 *
 * for redux state Global
 */
export declare const PositionView: ({ positionId, ...props }: PositionProps) => import("react/jsx-runtime").JSX.Element;
