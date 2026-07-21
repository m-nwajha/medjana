"use client";
import Script from "next/script";
import { useState } from "react";

const ScriptImport = () => {
  const [jQueryLoaded, setJQueryLoaded] = useState(false);
  const [webflowLoaded, setWebflowLoaded] = useState(false);

  return (
    <>
      {/* jQuery must load first — afterInteractive ensures it runs after hydration */}
      <Script
        src="/assets/js/jquery-3.5.1.min.js"
        strategy="afterInteractive"
        onLoad={() => setJQueryLoaded(true)}
      />

      {/* Webflow depends on jQuery — only inject after jQuery is ready */}
      {jQueryLoaded && (
        <Script
          src="/assets/js/webflow.js"
          strategy="afterInteractive"
          onLoad={() => setWebflowLoaded(true)}
        />
      )}

      {/* GSAP suite — load after webflow */}
      {webflowLoaded && (
        <>
          <Script src="/assets/js/gsap.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/ScrollTrigger.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/SplitText.min.js" strategy="afterInteractive" />
          <Script src="/assets/js/ScrollSmoother.min.js" strategy="afterInteractive" />
        </>
      )}
    </>
  );
};

export default ScriptImport;