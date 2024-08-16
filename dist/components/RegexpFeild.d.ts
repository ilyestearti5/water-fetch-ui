import { FeildGeneralProps } from "@/types/global";
import { SettingConfig } from "@/reducers/Settings/SettingConfig";
export type RegexpFeildProps = FeildGeneralProps<string | undefined, SettingConfig["regexp"]>;
declare function RegexpFeild({ state, id }: RegexpFeildProps): import("react/jsx-runtime").JSX.Element;
export { RegexpFeild };
