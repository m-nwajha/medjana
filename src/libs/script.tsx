"use client";
import Script from "next/script";
import { useState } from "react";

interface ScriptImportProps {
  onReady?: () => void;
}

// Hero element data-w-ids that are visible on page load (above the fold)
// These need to be animated immediately without waiting for scroll
const HERO_ELEMENT_IDS = [
  "6257fdfb-ddb3-0e3b-7a19-3c31ebb942b3",
  "aac156d4-5b26-1fa6-8081-f692a311913b",
];

const ScriptImport = ({ onReady }: ScriptImportProps) => {
  const [jQueryLoaded, setJQueryLoaded] = useState(false);
  const [webflowLoaded, setWebflowLoaded] = useState(false);
  const [gsapLoaded, setGsapLoaded] = useState(false);
  const [scrollTriggerLoaded, setScrollTriggerLoaded] = useState(false);
  const [splitTextLoaded, setSplitTextLoaded] = useState(false);

  const handleWebflowLoaded = () => {
    // webflow.js sets opacity:0 and transform on data-w-id elements via its
    // interaction engine (useFirstGroupAsInitialState). We override this for
    // hero elements that are already visible in the viewport on page load.
    const animateHeroElements = () => {
      HERO_ELEMENT_IDS.forEach((id) => {
        const el = document.querySelector(
          `[data-w-id="${id}"]`
        ) as HTMLElement | null;
        if (!el) return;

        el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
        el.style.opacity = "1";
        el.style.transform =
          "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)";
      });
    };

    // Try immediately, then again after a short delay as webflow.js
    // may apply initial styles asynchronously via Webflow.push()
    requestAnimationFrame(() => {
      animateHeroElements();
      setTimeout(animateHeroElements, 100);
      setTimeout(animateHeroElements, 300);
      setWebflowLoaded(true);
    });
  };

  return (
    <>
      <Script
        src="/assets/js/jquery-3.5.1.min.js"
        strategy="afterInteractive"
        onLoad={() => setJQueryLoaded(true)}
      />

      {jQueryLoaded && (
        <Script
          src="/assets/js/webflow.js"
          strategy="afterInteractive"
          onLoad={handleWebflowLoaded}
        />
      )}

      {webflowLoaded && (
        <Script
          src="/assets/js/gsap.min.js"
          strategy="afterInteractive"
          onLoad={() => setGsapLoaded(true)}
        />
      )}

      {gsapLoaded && (
        <Script
          src="/assets/js/ScrollTrigger.min.js"
          strategy="afterInteractive"
          onLoad={() => setScrollTriggerLoaded(true)}
        />
      )}

      {scrollTriggerLoaded && (
        <Script
          src="/assets/js/SplitText.min.js"
          strategy="afterInteractive"
          onLoad={() => setSplitTextLoaded(true)}
        />
      )}

      {splitTextLoaded && (
        <Script
          src="/assets/js/ScrollSmoother.min.js"
          strategy="afterInteractive"
          onLoad={() => {
            onReady?.();

            // ─────────────────────────────────────────────────────────────
            // ul_text_amin_two: white color sweep animation
            // Matches exactly the inline <script> at end of Webflow HTML body.
            // SplitText splits each child element into lines, then GSAP
            // scrollTrigger scrubs backgroundPositionX from 100% → 0%
            // revealing white text as the user scrolls past each line.
            // ─────────────────────────────────────────────────────────────
            document.fonts.ready.then(() => {
              const win = window as unknown as {
                gsap?: { registerPlugin: (...args: unknown[]) => void; to: (el: unknown, vars: unknown) => void; delayedCall: (delay: number, fn: () => void) => { pause: () => { restart: (reset: boolean) => void } } };
                ScrollTrigger?: unknown;
                SplitText?: new (el: Element, opts: { type: string }) => { lines: Element[]; split: () => void };
              };

              const gsap = win.gsap;
              const SplitText = win.SplitText;
              const ScrollTrigger = win.ScrollTrigger;

              if (!gsap || !SplitText || !ScrollTrigger) return;

              gsap.registerPlugin(ScrollTrigger, SplitText);

              const targets = document.querySelectorAll(".ul_text_amin_two *");
              targets.forEach((el) => {
                const split = new SplitText(el, { type: "lines" });
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
                    (ScrollTrigger as { getAll: () => { kill: () => void }[] }).getAll().forEach((t) => t.kill());
                    split.split();
                  })
                  .pause();

                window.addEventListener("resize", () => resizeDelay.restart(true));
              });
            });
          }}
        />
      )}
    </>
  );
};

export default ScriptImport;