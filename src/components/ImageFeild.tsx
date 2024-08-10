import { FeildGeneralProps } from "@/types/global";
import { SettingConfig, SettingValueType } from "@/reducers/Settings/SettingConfig";
import { ImageChoiser } from "./ImageChoiser";
type ImageFeildProps = FeildGeneralProps<SettingValueType["image"], SettingConfig["image"]>;
// term of use is when you have state contain array and you want to update the state from
export function ImageFeild({ state }: ImageFeildProps) {
  // render ArrayFeild element component
  return (
    <div className="flex justify-center">
      <ImageChoiser
        onChange={(img) => {
          img?.dataURL && state.set(img?.dataURL);
        }}
        src={state.get ?? undefined}
      />
    </div>
  );
}
