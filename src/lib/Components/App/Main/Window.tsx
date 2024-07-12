import React from "react";
import { HeaderNotification } from "@/Components/HeaderNotification";
import { tw } from "@/functions/react-utils";
import { getSettingValue } from "@/reducers/Settings/settings.model";
export interface WindowProps {
  children?: React.ReactNode;
}
export function Window({ children }: WindowProps) {
  const visibility = getSettingValue("visibility/header.boolean");
  const isAnimation = getSettingValue("preferences/animation.boolean");
  return (
    <div className={tw("absolute bottom-0 inset-x-0 w-full border-solid border-transparent border-b top-0 flex flex-col", visibility && "top-[51px]", isAnimation && "transition-[top] duration-200")}>
      <HeaderNotification />
      <div className="flex items-stretch h-full overflow-hidden">{children}</div>
    </div>
  );
}
