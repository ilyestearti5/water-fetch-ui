import { allIcons } from "@/apis";
import { BlurOverlay, Button, Card, CircleTip, EmptyComponent, Line, Translate } from "@/components";
import { useCopyState } from "@/hooks";
import React from "react";
export const ColorLayout = () => {
  const colorState = useCopyState<null | string>(null);
  const colorViewCanvasElement = React.createRef<HTMLCanvasElement>();
  const allColorsCanvasElement = React.createRef<HTMLCanvasElement>();
  const transparentCanvasElement = React.createRef<HTMLCanvasElement>();
  React.useEffect(() => {
    if (allColorsCanvasElement.current) {
      const context = allColorsCanvasElement.current.getContext("2d");
      if (!context) {
        return;
      }
      // for mobile
      const touchCallback = (e: TouchEvent) => {
        // const clientY = e.touches[0].clientY;
      };
      allColorsCanvasElement.current.addEventListener("touchstart", touchCallback);
      allColorsCanvasElement.current.addEventListener("touchmove", touchCallback);
      const width = allColorsCanvasElement.current.clientWidth;
      const height = allColorsCanvasElement.current.clientHeight;
      let allCases = [
        //r,g,b
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
        [1, 1, 0],
        [0, 1, 1],
        [1, 0, 1],
      ];
      allCases.forEach(([r, g, b], index) => {
        for (let i = 0; i <= 255; i++) {
          context.fillStyle = `rgb(${r * i},${g * i},${b * i})`;
          const position = ((index * 255 + i) * height) / (255 * allCases.length);
          context.fillRect(0, position, width, height / (255 * allCases.length));
        }
      });
      return () => {
        allColorsCanvasElement.current?.addEventListener("touchstart", touchCallback);
        allColorsCanvasElement.current?.addEventListener("touchmove", touchCallback);
        context.clearRect(0, 0, width, height);
      };
    }
  }, [allColorsCanvasElement.current]);
  return (
    <BlurOverlay hidden={true}>
      <Card className="flex-none justify-between w-fit">
        <div className="flex justify-between items-center p-2">
          <h1 className="md:text-2xl max-md:text-xl capitalize">
            <Translate content="colorize" />
          </h1>
          <CircleTip onClick={() => {}} icon={allIcons.solid.faXmark} />
        </div>
        <Line />
        <div className="flex justify-between items-center gap-2 p-2 h-full overflow-hidden">
          <canvas ref={colorViewCanvasElement} width={300} height={300} />
          <canvas ref={allColorsCanvasElement} width={20} height={300} />
        </div>
        <Line />
        <div className="p-2 h-1/5">
          <canvas ref={transparentCanvasElement} className="w-full" height={20} />
        </div>
        <Line />
        <div className="flex justify-between items-center gap-1 p-2 h-1/5">
          <div className="w-full">{colorState.get || <Translate content="no color" />}</div>
          <Button className="p-4">
            <Translate content="change" />
          </Button>
        </div>
      </Card>
    </BlurOverlay>
  );
};
