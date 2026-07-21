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

const CounterSect = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
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
  }, []);

  return (
    <section className="ul_counter_sect">
      <div className="container" ref={sectionRef}>
        <div
          data-w-id="8d25f97b-8147-8797-31bf-54672ac2f90f"
          className="ul_counter_des_box ul_text_amin_two"
        >

          <p className="ul_counter_des">Elevate your digital presence with distinction,</p>
          <p className="ul_counter_des">immerse</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/images/counter_img_3counter_img_1.png" loading="lazy" alt="counter" className="ul_counter_img hm-aboutus-image" />
          <p className="ul_counter_des">in boundless creativity. Our team of</p>
          <p className="ul_counter_des">designers and development</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/images/counter_img_4counter_img_2.png" loading="lazy" alt="counter" className="ul_counter_img hm-aboutus-image" />
          <p className="ul_counter_des">trailblazers</p>
          <p className="ul_counter_des">ignites</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/images/counter_img_5.png" loading="lazy" alt="counter" className="ul_counter_img hm-aboutus-image" />
          <p className="ul_counter_des">your digital vision</p>
        </div>

        <div className="ul_counter_box">
          <div className="ul_counter_items">
            <h2 className="ul_counter counterup_two">40+</h2>
            <p className="ul_counter_short_des">Satisfied clients</p>
          </div>
          <div className="ul_counter_item_border"></div>
          <div className="ul_counter_items">
            <h2 className="ul_counter counterup_two">100+</h2>
            <p className="ul_counter_short_des">Projects delivered</p>
          </div>
          <div className="ul_counter_item_border"></div>
          <div className="ul_counter_items">
            <h2 className="ul_counter counterup_two">12+</h2>
            <p className="ul_counter_short_des">years of experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSect;
