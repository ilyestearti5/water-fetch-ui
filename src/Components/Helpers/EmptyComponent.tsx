import { ReactElement } from "@/types/global";
export interface EmptyComponentProps {
  children?: ReactElement["children"];
}
export const EmptyComponent = ({ children }: EmptyComponentProps) => <>{children}</>;
