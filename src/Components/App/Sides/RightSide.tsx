import { ResizeView } from "Components/Helpers/ResizeView";
import { settingHooks, getSettingValue } from "@/reducers/Settings/settings.model";
import { useColorMerge } from "models/system/colors.model";
import { delay, isSorted } from "utils/index";
import { tw } from "@/functions/react-utils";
import { RightSideView } from "./RightSideView";
import { AsyncComponent } from "@/Components/Helpers/AsyncComponent";
import { CircleLoading } from "@/Components/Helpers/Loading";
const rightSideVisibility = "visibility/rightSide.boolean";
export const RightSide = () => {
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
    >
      <AsyncComponent
        render={async () => {
          await delay(3000);
          return <RightSideView />;
        }}
        loading={
          <div className="flex justify-center items-center w-full h-full">
            <CircleLoading />
          </div>
        }
      />
    </ResizeView>
  );
};
