import React from "react";
export type WindowsButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
export const WindowsButton = ({ ...props }: WindowsButtonProps) => {
  return <span className="w-[40px] h-full inline-flex items-center justify-center transition-[background]" {...props} tabIndex={-1} />;
};
export interface SVGIconProps {
  color?: string;
}
export const MinimizeActionIcon = ({ color }: SVGIconProps) => (
  <svg version="1.1" width="10" height="10">
    <path className="transition-[fill]" fill={color} d="M 0,5 10,5 10,6 0,6 Z" />
  </svg>
);
export const UnMaximizeActionIcon = ({ color }: SVGIconProps) => (
  <svg version="1.1" width="10" height="10">
    <path className="transition-[fill]" fill={color} d="m 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z" />
  </svg>
);
export const CloseActionIcon = ({ color }: SVGIconProps) => (
  <svg version="1.1" width="10" height="10">
    <path className="transition-[fill]" fill={color} d="M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z" />
  </svg>
);
export const MaximizeActionIcon = ({ color }: SVGIconProps) => (
  <svg version="1.1" width="10" height="10">
    <path className="transition-[fill]" fill={color} d="M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z" />
  </svg>
);
