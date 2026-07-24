"use client";

import { useEffect } from "react";
import { useScriptsReady } from "@/components/contexts/ScriptsProvider";

export const useHeroReveal = (elementIds: string[]) => {
  const { webflow } = useScriptsReady();

  useEffect(() => {
    if (!webflow) return;

    const timeoutIds: ReturnType<typeof setTimeout>[] = [];

    const animate = () => {
      elementIds.forEach((id) => {
        const el = document.querySelector(`[data-w-id="${id}"]`) as HTMLElement | null;
        if (!el) return;
        el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
        el.style.opacity = "1";
        el.style.transform =
          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)";
      });
    };

    const rafId = requestAnimationFrame(() => {
      animate();
      timeoutIds.push(setTimeout(animate, 100));
      timeoutIds.push(setTimeout(animate, 300));
    });

    return () => {
      cancelAnimationFrame(rafId);
      timeoutIds.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webflow]);
}