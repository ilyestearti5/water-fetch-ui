import React from "react";
import { Delay, range } from "main/utils";
import { Card } from "../../Helpers/Card";
import { useCopyState } from "main/src/functions/react-utils";
import { Line } from "main/src/Components/Helpers/Line";
import { State } from "@/types/global";

const hex = [...range(1, 9), ..."abcdef".split("").map((s) => s.toUpperCase())].map(String);
export interface ChangeColorComponentProps {
  state: State<null | string>;
}
export const ChangeColorComponent = ({ state }: ChangeColorComponentProps) => {
  const allColorsCanvas = React.createRef<HTMLCanvasElement>();
  const colorsDetectionCanvas = React.createRef<HTMLCanvasElement>();
  const lastColor = useCopyState("F");
  React.useEffect(() => {
    const element = allColorsCanvas.current;
    if (!element) {
      return;
    }
    const context = element.getContext("2d");
    if (!context) {
      return;
    }
    const widthForOne = element.width / hex.length;
    hex.forEach((h1, i1) => {
      hex.forEach((h2, i2) => {
        context.fillStyle = "#" + h1 + h2 + lastColor.get;
        context.fillRect(i1 * widthForOne, i2 * widthForOne, widthForOne, widthForOne);
        context.fill();
      });
    });
    element.onmousemove = async ({ offsetX, offsetY }) => {
      const x = parseInt(String((offsetX / element.width) * hex.length));
      const y = parseInt(String((offsetY / element.height) * hex.length));
      choisedColor.set("#" + hex[x] + hex[y] + lastColor.get);
    };
    element.onclick = ({ offsetX, offsetY }) => {
      const x = parseInt(String((offsetX / element.width) * hex.length));
      const y = parseInt(String((offsetY / element.height) * hex.length));
      state.set("#" + hex[x] + hex[y] + lastColor.get);
    };
    element.onmouseleave = () => {
      choisedColor.set(null);
    };
    return () => {
      element.onmouseleave = null;
      element.onmousemove = null;
      element.onclick = null;
      context?.clearRect(0, 0, element.width, element.height);
    };
  }, [allColorsCanvas.current, lastColor.get]);
  const choisedColor = useCopyState<string | null>(null);
  React.useEffect(() => {
    const element = colorsDetectionCanvas.current;
    if (!element) {
      return;
    }
    const context = element.getContext("2d");
    if (!context) {
      return;
    }
    const widthForOne = element.width / hex.length;
    hex.forEach((h1, i1) => {
      context.fillStyle = "#FF" + h1;
      context.fillRect(i1 * widthForOne, 0, widthForOne, widthForOne);
    });
    const timer = new Delay();
    element.onmousemove = async ({ offsetX }) => {
      timer.clear();
      timer.start(2000);
      const x = parseInt(String((offsetX / element.width) * hex.length));
      lastColor.set(hex[x]);
    };
    return () => {
      element.onmousemove = null;
      context?.clearRect(0, 0, element.width, element.height);
    };
  }, [colorsDetectionCanvas.current]);
  return (
    <Card className="inline-block w-[316px] h-fit">
      <div className="p-2">
        <canvas className="cursor-pointer" width={300} height={300} ref={allColorsCanvas} />
      </div>
      <Line />
      <div className="flex justify-evenly items-center">
        {state.get != choisedColor.get &&
          [choisedColor.get, state.get].map((color, i) => {
            return (
              <div key={i} className="flex justify-center items-center gap-3 p-2">
                <span
                  className="inline-block rounded-full w-[calc(300px/16)] h-[calc(300px/16)]"
                  style={{
                    backgroundColor: color ?? undefined,
                  }}
                />
                {color ?? "no color choised"}
              </div>
            );
          })}
        {state.get == choisedColor.get && (
          <div className="flex justify-center items-center gap-3 p-2">
            <span
              className="inline-block rounded-full w-[calc(300px/16)] h-[calc(300px/16)]"
              style={{
                backgroundColor: state.get ?? undefined,
              }}
            />
            {state.get ?? "no color choised"}
          </div>
        )}
      </div>
      <Line />
      <div className="p-2">
        <canvas width={300} height={300 / hex.length} ref={colorsDetectionCanvas} />
      </div>
    </Card>
  );
};
