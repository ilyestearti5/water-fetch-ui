import QrCodeReader from "react-qrcode-reader";
import { useColorMerge } from "@/hooks";
import { tw } from "@/utils";
import { TitleView } from "./TitleView";
import { SeparatedViewsLine, SeparatedViewsLineTitle } from "./SeparatedComponents";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { execAction } from "@/data/system/actions.model";
import { cameraTemp } from "@/reducers/Object/allTemps";
import { CircleTip } from "@/components/CircleTip";
import { CameraOptions } from "@/types/global";
export const ContentOfImageView = () => {
  const cameraType = cameraTemp.getTemp<CameraOptions["type"]>("type");
  const colorMerge = useColorMerge();
  return (
    <SeparatedViewsLine
      className="flex flex-col justify-between max-md:rounded-none w-[70vw] max-md:w-full h-[80vh] max-md:h-full"
      list={[
        <SeparatedViewsLineTitle
          title={cameraType || "Work Off"}
          rightSide={
            <CircleTip
              icon={faXmark}
              onClick={() => {
                cameraTemp.setTemp("error", "Escape Take Image");
              }}
            />
          }
        />,
        <div className={tw(`p-2 relative overflow-hidden flex items-center`)}>
          <div
            className="border border-transparent border-solid rounded-[10px] w-full h-full overflow-hidden"
            style={{
              ...colorMerge("secondary.background", {
                borderColor: "borders",
              }),
            }}
          >
            {cameraType && <QrCodeReader onRead={() => {}} delay={200} width={400} height={400} videoConstraints />}
          </div>
        </div>,
        cameraType == "take" && (
          <div className="flex justify-evenly p-4 w-full h-[70px] text-2xl">
            <TitleView title="take image">
              <CircleTip
                onClick={() => {
                  execAction("camera-take");
                }}
                icon={faCamera}
              />
            </TitleView>
          </div>
        ),
      ]}
      tabIndex={1}
      id="camera-view"
      style={{
        ...colorMerge("primary.background", {
          borderColor: "borders",
        }),
      }}
    />
  );
};
