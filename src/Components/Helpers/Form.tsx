import { ReactElement } from "@/types/global";
import { tw } from "main/src/functions/react-utils";
export interface LabelProps extends ReactElement {
  labelName?: string;
}
export function Label({ children, labelName, className, ...props }: LabelProps) {
  return (
    <div className={tw("flex p-1 items-center gap-3", className)} {...props}>
      {labelName && <label className="text-right w-full truncate">{labelName} : </label>}
      <div className="w-full">{children}</div>
    </div>
  );
}
