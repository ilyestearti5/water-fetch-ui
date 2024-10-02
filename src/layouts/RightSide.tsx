import { ResizeView } from "@/components/ResizeView";
import { useColorMerge } from "@/hooks";
import { isSorted } from "@/utils/index";
import { tw } from "@/utils";
import { useSettingValue, settingHooks } from "@/hooks";
const rightSideVisibility = "visibility/rightSide.boolean";
export interface RightSideProps {
  children?: React.ReactNode;
}
export const RightSide = ({ children }: RightSideProps) => {
  const visibility = useSettingValue(rightSideVisibility);
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
          backgroundColor: "secondary.background",
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
