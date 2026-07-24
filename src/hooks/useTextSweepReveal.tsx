"use client";

import { useEffect, type RefObject } from "react";
import { useScriptsReady } from "@/components/contexts/ScriptsProvider";

interface GsapGlobal {
  registerPlugin: (...args: unknown[]) => void;
  to: (el: unknown, vars: unknown) => void;
  delayedCall: (delay: number, fn: () => void) => { pause: () => { restart: (reset: boolean) => void } };
}

interface SplitTextInstance {
  lines: Element[];
  split: () => void;
  revert: () => void;
}

type SplitTextCtor = new (el: Element, opts: { type: string }) => SplitTextInstance;

interface ScrollTriggerGlobal {
  getAll: () => { kill: () => void }[];
}

export function useTextSweepReveal(ref: RefObject<HTMLElement | null>, selector: string) {
  const { allReady } = useScriptsReady();

  useEffect(() => {
    if (!allReady) return;
    const root = ref.current;
    if (!root) return;

    let splits: SplitTextInstance[] = [];
    const resizeHandlers: (() => void)[] = [];
    let cancelled = false;

    document.fonts.ready.then(() => {
      if (cancelled) return;

      const win = window as unknown as {
        gsap?: GsapGlobal;
        ScrollTrigger?: ScrollTriggerGlobal;
        SplitText?: SplitTextCtor;
      };

      const { gsap, SplitText, ScrollTrigger } = win;
      if (!gsap || !SplitText || !ScrollTrigger) return;

      gsap.registerPlugin(ScrollTrigger, SplitText);

      const targets = root.querySelectorAll(selector);
      targets.forEach((el) => {
        const split = new SplitText(el, { type: "lines" });
        splits.push(split);

        split.lines.forEach((line) => {
          gsap.to(line, {
            backgroundPositionX: 0,
            ease: "none",
            scrollTrigger: {
              trigger: line,
              scrub: 2,
              start: "top center",
              end: "bottom center",
            },
          });
        });

        const resizeDelay = gsap
          .delayedCall(0.2, () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
            split.split();
          })
          .pause();

        const onResize = () => resizeDelay.restart(true);
        window.addEventListener("resize", onResize);
        resizeHandlers.push(() => window.removeEventListener("resize", onResize));
      });
    });

    return () => {
      cancelled = true;
      resizeHandlers.forEach((remove) => remove());
      splits.forEach((split) => split.revert?.());
      splits = [];
    };
  }, [allReady, ref, selector]);
}