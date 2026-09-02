"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";

type LenisContextValue = {
  lenis: Lenis | null;
  stopScroll: () => void;
  startScroll: () => void;
};

const LenisContext = createContext<LenisContextValue>({
  lenis: null,
  stopScroll: () => { },
  startScroll: () => { },
});

export const useLenis = () => useContext(LenisContext);

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const rafId = useRef<number | null>(null);
  const instanceRef = useRef<Lenis | null>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const instance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    instanceRef.current = instance;
    setLenis(instance);

    function raf(time: number) {
      instance.raf(time);
      rafId.current = requestAnimationFrame(raf);
    }
    rafId.current = requestAnimationFrame(raf);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      instance.destroy();
      instanceRef.current = null;
    };
  }, []);

  const stopScroll = () => {
    instanceRef.current?.stop();
    document.body.style.overflow = "hidden";
  };

  const startScroll = () => {
    instanceRef.current?.start();
    document.body.style.overflow = "";
  };

  return (
    <LenisContext.Provider value={{ lenis, stopScroll, startScroll }}>
      {children}
    </LenisContext.Provider>
  );
}