import { allIcons } from "@/apis";
import { BlurOverlay, Card, CircleTip, Line, Button, Translate, Tabs, MultiScreenPage, EmptyComponent, Input } from "@/components";
import { useCopyState, useColorMerge, ColorIds, useTemp, getTemp, setTemp } from "@/hooks";
import { isSorted, range, tw } from "@/utils";
import React from "react";
export const DateLayout = () => {
  const timeId = useTemp<string>("date-layout-time.id");
  const initTime = getTemp<number>("date-layout-time.init");
  const selectedTime = useCopyState<{ hour: number | null; minute: number | null }>({ hour: null, minute: null });
  React.useEffect(() => {
    if (timeId.get) {
      if (initTime) {
        let dateTime = new Date(initTime);
        selectedTime.set({
          hour: dateTime.getHours(),
          minute: dateTime.getMinutes(),
        });
      } else {
        selectedTime.set({
          hour: null,
          minute: null,
        });
      }
    }
  }, [timeId.get, initTime]);
  const mode = useCopyState<"hours" | "minutes">("hours"); // State to switch between hour and minute modes
  // Arrays for hours (0-23) and minutes (0-59)
  const hours = React.useMemo(() => [12, ...range(1, 11)], []);
  const minutes = React.useMemo(() => [...range(0, 19)], []);
  // Function to calculate the position of each hour/minute
  const getPosition = React.useCallback((index: number, total: number, radius: number) => {
    const angle = (index / total) * 2 * Math.PI;
    const x = radius + radius * Math.cos(angle - Math.PI / 2); // Offset by 90 degrees
    const y = radius + radius * Math.sin(angle - Math.PI / 2);
    return { x, y };
  }, []);
  const handleSelectTime = React.useCallback(
    (value: number) => {
      if (mode.get === "hours") {
        selectedTime.set({ ...selectedTime.get, hour: value });
      } else {
        selectedTime.set({ ...selectedTime.get, minute: value });
      }
    },
    [mode.get],
  );
  const timeArray = mode.get === "hours" ? hours : minutes; // Determine which array to display (hours or minutes)
  const totalItems = mode.get === "hours" ? 12 : 20; // Total items to display (24 hours or 60 minutes)
  const radius = mode.get === "hours" ? 120 : 120; // Outer circle radius for hours/minutes
  // Calculate the position of the hand pointing to the selected hour or minute
  const colorMerge = useColorMerge();
  const dayState = useCopyState("am");
  const afterState = useCopyState("0");
  const handPosition = React.useMemo<{
    x: number;
    y: number;
    colorId: ColorIds;
  } | null>(() => {
    const selectedValue = mode.get === "hours" ? selectedTime.get.hour : selectedTime.get.minute;
    if (selectedValue === null) return null;
    const angle = (selectedValue / totalItems) * 2 * Math.PI;
    const x = radius + radius * Math.cos(angle - Math.PI / 2);
    const y = radius + radius * Math.sin(angle - Math.PI / 2);
    let props: Record<string, [number, number]> =
      mode.get == "minutes"
        ? {
            "0": [0, 19],
            "20": [20, 39],
            "40": [40, 59],
          }
        : {
            "0": [0, 12],
            "12": [12, 24],
          };
    const [a, b] = props[mode.get == "minutes" ? afterState.get : dayState.get];
    return {
      x,
      y,
      colorId: isSorted(a, selectedValue, b) ? "primary" : "gray.opacity",
    };
  }, [afterState.get, dayState.get, selectedTime.get, totalItems, mode.get]);
  return (
    <BlurOverlay hidden={!timeId.get}>
      <Card className="flex flex-col max-md:rounded-none w-1/2 max-md:w-full max-md:h-full">
        <div className="flex justify-between items-center gap-2 p-2">
          <h1 className="text-3xl">
            <Translate content="Date" />
          </h1>
          <div className="flex">
            <CircleTip
              icon={allIcons.solid.faXmark}
              onClick={() => {
                if (initTime && timeId.get) {
                  setTemp("date-layout-time.canceled", true);
                  setTemp("date-layout-time.result", initTime);
                }
              }}
            />
          </div>
        </div>
        <Line />
        <div className="flex justify-center items-center w-full h-full">
          <svg width="300" height="300" className="relative">
            {/* Clock hand */}
            {handPosition !== null && (
              <EmptyComponent>
                <circle
                  cx="150"
                  cy="150"
                  r="10"
                  style={{
                    ...colorMerge({
                      fill: handPosition.colorId,
                    }),
                  }}
                />
                <line
                  x1="150"
                  y1="150"
                  x2={handPosition.x + 30} // Adjust hand length for visual balance
                  y2={handPosition.y + 30}
                  style={{
                    ...colorMerge({
                      stroke: handPosition.colorId,
                    }),
                  }}
                  strokeWidth="2"
                />
              </EmptyComponent>
            )}
            {/* Display hours/minutes in a circular layout */}
            {timeArray.map((value, index) => {
              const { x, y } = getPosition(index, totalItems, 120); // Adjust outer radius
              let isSomthing = (mode.get === "hours" && selectedTime.get.hour === +dayState.get + value) || (mode.get === "minutes" && selectedTime.get.minute === +afterState.get + value);
              return (
                <g
                  key={value}
                  onClick={() => {
                    if (mode.get == "minutes") {
                      handleSelectTime(+afterState.get + value);
                    } else {
                      handleSelectTime(+dayState.get + value);
                    }
                  }}
                  className="cursor-pointer"
                >
                  <circle
                    cx={x + 30}
                    cy={y + 30}
                    r={mode.get == "hours" ? "20" : "15"}
                    style={{
                      ...colorMerge(
                        {
                          fill: "gray.opacity",
                        },
                        isSomthing && {
                          fill: "primary",
                        },
                      ),
                    }}
                  />
                  <text
                    x={x + 30}
                    y={y + 30}
                    dy="0.3em"
                    textAnchor="middle"
                    fontSize={mode.get == "minutes" ? "13" : "16"}
                    style={{
                      ...colorMerge(
                        {
                          fill: "text.color",
                        },
                        isSomthing && {
                          fill: "primary.content",
                        },
                      ),
                    }}
                    className="select-none"
                  >
                    {mode.get == "minutes" && value + +afterState.get}
                    {mode.get == "hours" && value + +dayState.get}
                  </text>
                </g>
              );
            })}
            {/* Center circle */}
          </svg>
        </div>
        <Line />
        <div className="p-3 text-5xl text-center select-none">
          <span tabIndex={1} className="cursor-pointer">
            <span
              style={{
                ...colorMerge(
                  mode.get == "hours" && {
                    color: "primary",
                  },
                ),
              }}
              onClick={() => {
                mode.set("hours");
              }}
              className={tw(mode.get == "hours" && "font-bold")}
            >
              {selectedTime.get.hour == null ? "--" : selectedTime.get.hour >= 10 ? selectedTime.get.hour : `0${selectedTime.get.hour}`}
            </span>
            :
            <span
              style={{
                ...colorMerge(
                  mode.get == "minutes" && {
                    color: "primary",
                  },
                ),
              }}
              onClick={() => {
                mode.set("minutes");
              }}
              className={tw(mode.get == "minutes" && "font-bold")}
            >
              {selectedTime.get.minute == null ? "--" : selectedTime.get.minute >= 10 ? selectedTime.get.minute : `0${selectedTime.get.minute}`}
            </span>
          </span>
        </div>
        <Line />
        <div>
          <div className="relative h-[90px] overflow-hidden">
            <MultiScreenPage
              pages={[
                <div className="flex justify-center items-center px-2 w-full h-full">
                  <Tabs
                    tabs={[
                      {
                        label: "AM",
                        value: "0",
                      },
                      {
                        label: "PM",
                        value: "12",
                      },
                    ]}
                    state={dayState}
                  />
                </div>,
                <div className="flex justify-center items-center px-2 w-full h-full">
                  <Tabs
                    tabs={[
                      {
                        label: "+00",
                        value: "0",
                      },
                      {
                        label: "+20",
                        value: "20",
                      },
                      {
                        label: "+40",
                        value: "40",
                      },
                    ]}
                    state={afterState}
                  />
                </div>,
              ]}
              focused={mode.get == "hours" ? 0 : 1}
            />
          </div>
        </div>
        <Line />
        <div className="flex gap-1 p-2">
          <Button
            className="capitalize"
            style={{
              ...colorMerge("gray.opacity", {
                color: "text.color",
              }),
            }}
            onClick={() => {
              selectedTime.set({
                hour: null,
                minute: null,
              });
            }}
          >
            <Translate content="clear" />
          </Button>
          <Button
            className="capitalize"
            onClick={() => {
              let time = new Date();
              typeof selectedTime.get?.hour == "number" && time.setHours(selectedTime.get.hour);
              typeof selectedTime.get?.minute == "number" && time.setMinutes(selectedTime.get.minute);
              setTemp("date-layout-time.canceled", false);
              setTemp("date-layout-time.result", time.getTime());
            }}
          >
            <Translate content="set" />
          </Button>
        </div>
      </Card>
    </BlurOverlay>
  );
};
