"use client";

import useMousePosition from "@/hooks/useMousePosition";

const MouseTracker = () => {
  const mouse = useMousePosition();

  return (
    <div
      className="fixed inset-0 opacity-20 pointer-events-none"
      style={{
        background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(230, 57, 70, 0.28) 0%, rgba(6, 182, 212, 0.18) 35%, transparent 70%)`,
        transition: "background 0.3s ease-out",
      }}
      aria-hidden
    />
  );
};

export default MouseTracker;
