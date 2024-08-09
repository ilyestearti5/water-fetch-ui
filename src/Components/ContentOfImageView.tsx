import React from "react";
import QrCodeReader from "react-qrcode-reader";
import { useColorMerge } from "@/data/system/colors.model";
import { tw } from "main/src/functions/react-utils";
import { TitleView } from "./Helpers/Title";
import { SeparatedViewsLine, SeparatedViewsLineTitle } from "./Helpers/SimpleComponents";
import { faCamera, faXmark } from "@fortawesome/free-solid-svg-icons";
import { execAction } from "@/data/system/actions.model";
import { CircleTip } from "./Helpers/Buttons";
import { cameraTemp } from "@/reducers/Object/allTemps";
import { CameraOptions } from "main/src/functions/app-utils";
export const ContentOfImageView = React.memo(() => {
  const cameraType = cameraTemp.getTemp<CameraOptions["type"]>("type");
  const colorMerge = useColorMerge();
  return (
    <SeparatedViewsLine
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
        <div className={tw(`p-2 relative overflow-hidden`)}>
          <div
            className="border border-transparent border-solid rounded-[10px] overflow-hidden"
            style={{
              ...colorMerge("secondry.background", {
                borderColor: "borders",
              }),
            }}
          >
            {cameraType && <QrCodeReader delay={200} width={400} height={400} videoConstraints />}
          </div>
        </div>,
        cameraType == "take" && (
          <div className="flex justify-evenly p-4 w-full text-2xl">
            <TitleView title="take image">
              <CircleTip
                onClick={() => {
                  execAction("camera.take");
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
});
