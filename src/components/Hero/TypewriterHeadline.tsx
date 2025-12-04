"use client";

import { useEffect, useState } from "react";

const sequence = [{ text: "BUILD SYSTEMS. AUTOMATE OUTCOMES.", pause: 1200 }];

const TypewriterHeadline = () => {
  const [step, setStep] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const current = sequence[step];
    let charIndex = 0;
    let cancelled = false;

    const typeNext = () => {
      if (cancelled) return;
      if (charIndex <= current.text.length) {
        setDisplayed(current.text.slice(0, charIndex));
        charIndex += 1;
        setTimeout(typeNext, 28);
      } else {
        setTimeout(() => {
          if (step < sequence.length - 1) {
            setStep((prev) => prev + 1);
          }
        }, current.pause);
      }
    };

    typeNext();
    return () => {
      cancelled = true;
    };
  }, [step]);

  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
      <span className="block text-neonBlue">{displayed}</span>
    </h1>
  );
};

export default TypewriterHeadline;
