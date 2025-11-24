"use client";

import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [pos, setPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) return;

    const handleMove = (event: MouseEvent) => {
      setPos({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return pos;
};

export default useMousePosition;
