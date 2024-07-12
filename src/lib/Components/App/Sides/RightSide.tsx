import { ResizeView } from "@/Components/Helpers/ResizeView";
import { settingHooks, getSettingValue } from "@/reducers/Settings/settings.model";
import { useColorMerge } from "models/system/colors.model";
import { isSorted } from "utils/index";
import { tw } from "@/functions/react-utils";
const rightSideVisibility = "visibility/rightSide.boolean";
export interface RightSideProps {
  children?: React.ReactNode;
}
export const RightSide = ({ children }: RightSideProps) => {
  const visibility = getSettingValue(rightSideVisibility);
  const colorMerge = useColorMerge();
  return (
    <ResizeView
      min={200}
      temp="rightSide.currentWidth"
      max={() => Math.max(window.innerWidth / 3, 350)}
      handelResize={({ size }) => {
        const s = isSorted(150, size);
        s != visibility && settingHooks.setOneFeild(rightSideVisibility, "value", s);
      }}
      position="left"
      hidden={!visibility}
      style={{
        ...colorMerge({
          backgroundColor: "secondry.background",
          borderColor: "borders",
        }),
      }}
      className={tw(
        `
        h-full
        flex-col
        flex
        overflow-hidden
        border-l
        border-solid
        border-transparent
        z-[10000000000000]
      `,
        !visibility && "border-l-0",
      )}
      children={children}
    ></ResizeView>
  );
};
