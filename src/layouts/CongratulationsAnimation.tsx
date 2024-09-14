import React, { useState, useEffect } from "react";
interface ConfettiAttrs {
  id: number;
  size: string;
  background: string;
  left: string;
  animation: string;
}
export const Confettiful = () => {
  const containerRef = React.createRef<HTMLDivElement>();
  const [confettis, setConfettis] = useState<ConfettiAttrs[]>([]);
  const confettiColors = ["#EF2964", "#00C09D", "#2D87B0", "#48485E", "#EFFF1D", "red", "yellow", "blue"];
  const confettiAnimations = ["slow", "medium", "fast"];
  useEffect(() => {
    const containerEl = containerRef.current;
    if (!containerEl) {
      return;
    }
    if (containerEl.style.position !== "relative" && containerEl.style.position !== "absolute") {
      containerEl.style.position = "relative";
    }
    const intervalId = setInterval(() => {
      const confettiSize = `${Math.floor(Math.random() * 5 + 10)}px`;
      const confettiBackground = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      const confettiLeft = `${Math.floor(Math.random() * containerEl.offsetWidth)}px`;
      const confettiAnimation = confettiAnimations[Math.floor(Math.random() * confettiAnimations.length)];
      const newConfetti: ConfettiAttrs = {
        id: Math.random(), // Unique key for each confetti
        size: confettiSize,
        background: confettiBackground,
        left: confettiLeft,
        animation: confettiAnimation,
      };
      setConfettis((prevConfettis) => [...prevConfettis, newConfetti]);
      setTimeout(() => {
        setConfettis((prevConfettis) => prevConfettis.filter((c) => c.id !== newConfetti.id));
      }, 3000);
    }, 25);
    return () => clearInterval(intervalId);
  }, [confettiColors, confettiAnimations]);
  return (
    <div ref={containerRef} className="confetti-container">
      {confettis.map((confetti) => (
        <div
          key={confetti.id}
          className={`confetti confetti--animation-${confetti.animation}`}
          style={{
            left: confetti.left,
            width: confetti.size,
            height: confetti.size,
            backgroundColor: confetti.background,
          }}
        ></div>
      ))}
    </div>
  );
};
