import { allIcons } from "@/apis";
import { BlurOverlay, Card, CircleTip, Line, Button, Translate, Tabs, MultiScreenPage, EmptyComponent } from "@/components";
import { useCopyState, useColorMerge, ColorIds } from "@/hooks";
import { isSorted, range, tw } from "@/utils";
import React, { useState } from "react";
export const DateLayout = () => {
  const [selectedTime, setSelectedTime] = useState<{ hour: number | null; minute: number | null }>({ hour: null, minute: null });
  const [mode, setMode] = useState<"hours" | "minutes">("hours"); // State to switch between hour and minute modes
  // Arrays for hours (0-23) and minutes (0-59)
  const hours = [12, ...range(1, 11)];
  const minutes = [...range(0, 19)];
  // Function to calculate the position of each hour/minute
  const getPosition = (index: number, total: number, radius: number) => {
    const angle = (index / total) * 2 * Math.PI;
    const x = radius + radius * Math.cos(angle - Math.PI / 2); // Offset by 90 degrees
    const y = radius + radius * Math.sin(angle - Math.PI / 2);
    return { x, y };
  };
  const handleSelectTime = (value: number) => {
    if (mode === "hours") {
      setSelectedTime({ ...selectedTime, hour: value });
    } else {
      setSelectedTime({ ...selectedTime, minute: value });
    }
  };
  const timeArray = mode === "hours" ? hours : minutes; // Determine which array to display (hours or minutes)
  const totalItems = mode === "hours" ? 12 : 20; // Total items to display (24 hours or 60 minutes)
  const radius = mode === "hours" ? 120 : 120; // Outer circle radius for hours/minutes
  // Calculate the position of the hand pointing to the selected hour or minute
  const colorMerge = useColorMerge();
  const dayState = useCopyState("am");
  const afterState = useCopyState("0");
  const handPosition = React.useMemo<{
    x: number;
    y: number;
    colorId: ColorIds;
  } | null>(() => {
    const selectedValue = mode === "hours" ? selectedTime.hour : selectedTime.minute;
    if (selectedValue === null) return null;
    const angle = (selectedValue / totalItems) * 2 * Math.PI;
    const x = radius + radius * Math.cos(angle - Math.PI / 2);
    const y = radius + radius * Math.sin(angle - Math.PI / 2);
    let props: Record<string, [number, number]> =
      mode == "minutes"
        ? {
            "0": [0, 19],
            "20": [20, 39],
            "40": [40, 59],
          }
        : {
            "0": [0, 12],
            "12": [12, 24],
          };
    const [a, b] = props[mode == "minutes" ? afterState.get : dayState.get];
    return {
      x,
      y,
      colorId: isSorted(a, selectedValue, b) ? "primary" : "gray.opacity",
    };
  }, [afterState.get, dayState.get, selectedTime, totalItems, mode]);
  return (
    <BlurOverlay hidden={true}>
      <Card className="flex flex-col max-md:rounded-none w-1/2 max-md:w-full max-md:h-full">
        <div className="flex justify-between items-center gap-2 p-2">
          <h1 className="text-3xl">
            <Translate content="Date" />
          </h1>
          <div className="flex">
            <CircleTip
              icon={allIcons.solid.faXmark}
              onClick={() => {
                // close clouck picker action
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
              let isSomthing = (mode === "hours" && selectedTime.hour === +dayState.get + value) || (mode === "minutes" && selectedTime.minute === +afterState.get + value);
              return (
                <g
                  key={value}
                  onClick={() => {
                    if (mode == "minutes") {
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
                    r={mode == "hours" ? "20" : "15"}
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
                    fontSize={mode == "minutes" ? "13" : "16"}
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
                    {mode == "minutes" && value + +afterState.get}
                    {mode == "hours" && value + +dayState.get}
                  </text>
                </g>
              );
            })}
            {/* Center circle */}
          </svg>
        </div>
        <Line />
        <div className="p-3 text-5xl text-center select-none">
          <span className="cursor-pointer">
            <span
              style={{
                ...colorMerge(
                  mode == "hours" && {
                    color: "primary",
                  },
                ),
              }}
              onClick={() => {
                setMode("hours");
              }}
              className={tw(mode == "hours" && "font-bold")}
            >
              {selectedTime.hour == null ? "--" : selectedTime.hour >= 10 ? selectedTime.hour : `0${selectedTime.hour}`}
            </span>
            :
            <span
              style={{
                ...colorMerge(
                  mode == "minutes" && {
                    color: "primary",
                  },
                ),
              }}
              onClick={() => {
                setMode("minutes");
              }}
              className={tw(mode == "minutes" && "font-bold")}
            >
              {selectedTime.minute == null ? "--" : selectedTime.minute >= 10 ? selectedTime.minute : `0${selectedTime.minute}`}
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
              focused={mode == "hours" ? 0 : 1}
            />
          </div>
        </div>
        <Line />
        <div className="flex gap-1 p-2">
          <Button
            className="p-4 capitalize"
            style={{
              ...colorMerge("gray.opacity", {
                color: "text.color",
              }),
            }}
            onClick={() => {
              setSelectedTime({
                hour: null,
                minute: null,
              });
            }}
          >
            <Translate content="clear" />
          </Button>
          <Button className="p-4 capitalize" onClick={() => {}}>
            <Translate content="set" />
          </Button>
        </div>
      </Card>
    </BlurOverlay>
  );
};
