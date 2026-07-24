"use client";

import { useEffect, type RefObject } from "react";
import { counterUp } from "@/utils/counterup";

export function useCounterUp(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const elements = root.querySelectorAll<HTMLElement>(".counterup_two");

    const callback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting && !el.classList.contains("is-visible")) {
          counterUp(el, { duration: 3000, delay: 16 });
          el.classList.add("is-visible");
        }
      });
    };

    const io = new IntersectionObserver(callback, { threshold: 1 });
    elements.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, [ref]);
}
