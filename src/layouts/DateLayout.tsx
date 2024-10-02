import { BlurOverlay, Card, CircleTip, Line, Button, Translate } from "@/components";
import { useCopyState, useColorMerge, useSettingValue, handelShadowColor } from "@/hooks";
import { range, tw } from "@/utils";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export const DateLayout = () => {
  const timeClicked = useCopyState<number | null>(null);
  const colorMerge = useColorMerge();
  const isAnimated = useSettingValue("preferences/animation.boolean");
  return (
    <BlurOverlay>
      <Card>
        <div className="flex justify-between items-center gap-1 p-3">
          <h1 className="text-2xl">Time</h1>
          <CircleTip
            onClick={() => {
              // ignore
            }}
            icon={faXmark}
          />
        </div>
        <Line />
        <div className="flex justify-center p-3">
          <div
            style={{
              ...colorMerge("primary.background", {
                borderColor: "borders",
                boxShadow: handelShadowColor([
                  {
                    colorId: "gray.opacity",
                    blur: 20,
                    x: 0,
                    y: 4,
                  },
                ]),
              }),
            }}
            className="relative border border-transparent border-solid rounded-full w-[300px] h-[300px] text-xl"
          >
            {range(1, 12).map((number) => (
              <span
                key={number}
                onClick={() => {
                  timeClicked.set(number);
                }}
                className={tw(
                  "inline-flex absolute justify-center items-center rounded-full w-[40px] h-[40px] -translate-x-1/2 -translate-y-1/2 cursor-pointer active:scale-90",
                  isAnimated && "transition-[transform]",
                )}
                style={{
                  ...colorMerge(
                    {
                      color: "text.color",
                    },
                    timeClicked.get == number && {
                      color: "primary.content",
                      backgroundColor: "primary",
                    },
                  ),
                  top: `${50 - 40 * Math.sin(((number + 3) * 30 * Math.PI) / 180)}%`,
                  left: `${50 + 40 * -Math.cos(((number + 3) * 30 * Math.PI) / 180)}%`,
                }}
              >
                {number}
              </span>
            ))}
          </div>
        </div>
        <Line />
        <div className="flex items-center gap-1 p-2">
          {timeClicked.get && (
            <Button
              style={{
                ...colorMerge("gray.opacity", {
                  color: "text.color",
                }),
              }}
              onClick={() => {
                timeClicked.set(null);
              }}
              className="capitalize"
            >
              <Translate content="Clear" />
            </Button>
          )}
          <Button
            onClick={() => {
              // ok
            }}
            className="capitalize"
          >
            <Translate content="Set" />
          </Button>
        </div>
      </Card>
    </BlurOverlay>
  );
};
