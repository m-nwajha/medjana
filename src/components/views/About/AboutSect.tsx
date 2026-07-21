"use client";

import { useEffect, useRef } from "react";

function divideNumbers(value: string, options: { duration?: number; delay?: number } = {}) {
  const { duration = 1000, delay = 16 } = options;
  const steps = duration / delay;
  const parts = value
    .toString()
    .split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/);
  const frames: string[] = [];

  for (let i = 0; i < steps; i++) frames.push("");

  for (let i = 0; i < parts.length; i++) {
    if (/([0-9.][,.0-9]*[0-9]*)/.test(parts[i]) && !/<[^>]+>/.test(parts[i])) {
      let numStr = parts[i];
      const separators = [...numStr.matchAll(/[.,]/g)]
        .map((m) => ({ char: m[0], i: numStr.length - (m.index ?? 0) - 1 }))
        .sort((a, b) => a.i - b.i);
      numStr = numStr.replace(/[.,]/g, "");

      let frameIndex = frames.length - 1;
      for (let step = steps; step >= 1; step--) {
        let current = String(parseInt(String((Number(numStr) / steps) * step), 10));
        current = separators.reduce((acc, { char, i: pos }) => {
          return acc.length <= pos ? acc : acc.slice(0, -pos) + char + acc.slice(-pos);
        }, current);
        frames[frameIndex--] += current;
      }
    } else {
      for (let step = 0; step < steps; step++) frames[step] += parts[i];
    }
  }
  frames[frames.length] = value.toString();
  return frames;
}

function counterUp(el: HTMLElement, options: { duration?: number; delay?: number } = {}) {
  const { duration = 1000, delay = 16 } = options;
  if (!/[0-9]/.test(el.innerHTML)) return;

  const frames = divideNumbers(el.innerHTML, { duration, delay });
  const original = el.innerHTML;
  el.innerHTML = frames[0] || "&nbsp;";
  el.style.visibility = "visible";

  let i = 0;
  const tick = () => {
    i++;
    el.innerHTML = frames[i] || "&nbsp;";
    if (i < frames.length - 1) {
      window.setTimeout(tick, delay);
    } else {
      el.innerHTML = original;
    }
  };
  window.setTimeout(tick, delay);
}

const AboutSect = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting && !el.classList.contains("is-visible")) {
          counterUp(el, { duration: 3000, delay: 16 });
          el.classList.add("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(callback, { threshold: 1 });
    const counters = sectionRef.current?.querySelectorAll(".counterup_two");
    counters?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ul_about_sect" ref={sectionRef}>
      <div className="container">
        <div
          data-w-id="60bdad17-0d3e-791e-c8a9-e3a4c2604976"
          className="ul_about_text_box ul_text_amin_two"
        >
          <p className="ul_about_text">
            At Ferula, we specialize in helping brands stand out in a crowded digital world. Our passion for creativity, innovation, and strategic growth drives every project we take on.
          </p>
        </div>
        <div className="ul_about_card_flex_box">
          <div
            data-w-id="4041d308-b0ef-de24-4b28-ef897502b955"
            className="ul_about_card_items"
          >
            <div className="ul_about_card_content_box_one">
              <h2 className="ul_about_card_content_counter counterup_two">23+</h2>
              <p className="ul_short_des">Brands Empowered</p>
            </div>
            <div className="ul_about_card_content_box_two">
              <p className="ul_short_des">
                We’ve partnered with brands across industries to craft distinctive digital identities that leave a lasting impact on their audiences.
              </p>
            </div>
          </div>
          <div
            data-w-id="2026ba38-bd76-1955-c9e1-f415dc6121fd"
            className="ul_about_card_items"
          >
            <div className="ul_about_card_content_box_one">
              <h2 className="ul_about_card_content_counter counterup_two">130+</h2>
              <p className="ul_short_des">Digital Solutions </p>
            </div>
            <div className="ul_about_card_content_box_two">
              <p className="ul_short_des">
                From websites to marketing campaigns, our creative solutions are tailored to spark growth, drive engagement, and fuel business success.
              </p>
            </div>
          </div>
          <div
            data-w-id="eb4f1786-77ad-bca3-485a-f6e8236b6d73"
            className="ul_about_card_items"
          >
            <div className="ul_about_card_content_box_one">
              <h2 className="ul_about_card_content_counter counterup_two">15+</h2>
              <p className="ul_short_des">Awards</p>
            </div>
            <div className="ul_about_card_content_box_two">
              <p className="ul_short_des">
                Our commitment to innovation and design excellence has earned us recognition from leading industry platforms and global creative communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSect;
