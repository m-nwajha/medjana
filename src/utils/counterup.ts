function divideNumbers(value: string, options: { duration?: number; delay?: number } = {}) {
  const { duration = 1000, delay = 16 } = options;
  const steps = duration / delay;
  const parts = value.toString().split(/(<[^>]+>|[0-9.][,.0-9]*[0-9]*)/);
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

export function counterUp(el: HTMLElement, options: { duration?: number; delay?: number } = {}) {
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