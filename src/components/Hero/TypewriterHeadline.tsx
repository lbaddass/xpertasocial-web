"use client";

import { useEffect, useState } from "react";

const sequence = [
  { text: "Cada mañana, su competencia abre 12 nuevos WhatsApps.", pause: 800 },
  { text: "Mientras usted revisa el mismo CRM vacío.", pause: 800 },
  { text: "Eso termina hoy.", pause: 1200 },
];

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
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
      <span className="block text-signalRed">{displayed}</span>
      {step === sequence.length - 1 && (
        <span className="block text-techCyan mt-2 animate-fade-in">Su sistema tampoco debería.</span>
      )}
    </h1>
  );
};

export default TypewriterHeadline;
