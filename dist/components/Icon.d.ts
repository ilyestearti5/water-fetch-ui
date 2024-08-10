import { ReactElement } from "@/types/global";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
export interface IconProps {
    icon?: FontAwesomeIconProps["icon"];
    iconClassName?: ReactElement["className"];
}
export declare const Icon: ({ icon, iconClassName }: IconProps) => import("react/jsx-runtime").JSX.Element;
