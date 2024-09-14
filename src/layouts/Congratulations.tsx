import { range, tw } from "@/utils";
import React, { useEffect, useState } from "react";
export const CongratulationsView = React.memo(
  () => {
    const [fadeOut, setFadeOut] = useState(false); // State to control fade-out effect
    const elementRef = React.createRef<HTMLDivElement>();
    const getRandomColor = () => {
      const colors = ["#FF5733", "#FFBD33", "#33FF57", "#3357FF", "#D133FF", "red", "blue", "yellow"];
      return colors[Math.floor(Math.random() * colors.length)];
    };
    useEffect(() => {
      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 8000);
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);
    return (
      <div className="relative flex justify-center items-center w-screen h-screen">
        <div ref={elementRef} className={tw(`absolute inset-0 pointer-events-none transition-opacity duration-[5000ms] ease-out`, fadeOut && "opacity-0")}>
          {range(1, 30).map((_, index) => (
            <div
              key={index}
              className="absolute opacity-70 confetti-piece"
              style={{
                top: -30,
                backgroundColor: getRandomColor(),
                left: Math.random() * 100 + "vw",
                animationDuration: Math.random() * 3 + 2 + "s",
                animationDelay: Math.random() * 2 + "s",
              }}
            />
          ))}
        </div>
      </div>
    );
  },
  () => true,
);
