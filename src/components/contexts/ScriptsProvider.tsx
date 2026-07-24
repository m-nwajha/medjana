"use client";

import Script from "next/script";
import { createContext, useContext, useReducer, type ReactNode } from "react";

type ScriptKey =
  | "jquery"
  | "webflow"
  | "gsap"
  | "scrollTrigger"
  | "splitText"
  | "scrollSmoother";

type ScriptsState = {
  jquery: boolean;
  webflow: boolean;
  gsap: boolean;
  scrollTrigger: boolean;
  splitText: boolean;
  scrollSmoother: boolean;
  allReady: boolean;
};

type ScriptsAction = { type: "SCRIPT_LOADED"; key: ScriptKey };

const SCRIPT_ORDER: ScriptKey[] = [
  "jquery",
  "webflow",
  "gsap",
  "scrollTrigger",
  "splitText",
  "scrollSmoother",
];

const initialState: ScriptsState = {
  jquery: false,
  webflow: false,
  gsap: false,
  scrollTrigger: false,
  splitText: false,
  scrollSmoother: false,
  allReady: false,
};

function scriptsReducer(
  state: ScriptsState,
  action: ScriptsAction,
): ScriptsState {
  switch (action.type) {
    case "SCRIPT_LOADED": {
      const next = { ...state, [action.key]: true };
      next.allReady = SCRIPT_ORDER.every((key) => next[key]);
      return next;
    }
    default:
      return state;
  }
}

const ScriptsContext = createContext<ScriptsState>(initialState);

export function useScriptsReady() {
  return useContext(ScriptsContext);
}

export function ScriptsProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(scriptsReducer, initialState);
  const loaded = (key: ScriptKey) => dispatch({ type: "SCRIPT_LOADED", key });

  return (
    <ScriptsContext.Provider value={state}>
      <Script
        src="/assets/js/jquery-3.5.1.min.js"
        strategy="afterInteractive"
        onLoad={() => loaded("jquery")}
      />

      {state.jquery && (
        <Script
          src="/assets/js/webflow.js"
          strategy="afterInteractive"
          onLoad={() => loaded("webflow")}
        />
      )}
      {state.webflow && (
        <Script
          src="/assets/js/gsap.min.js"
          strategy="afterInteractive"
          onLoad={() => loaded("gsap")}
        />
      )}
      {state.gsap && (
        <Script
          src="/assets/js/ScrollTrigger.min.js"
          strategy="afterInteractive"
          onLoad={() => loaded("scrollTrigger")}
        />
      )}
      {state.scrollTrigger && (
        <Script
          src="/assets/js/SplitText.min.js"
          strategy="afterInteractive"
          onLoad={() => loaded("splitText")}
        />
      )}
      {state.splitText && (
        <Script
          src="/assets/js/ScrollSmoother.min.js"
          strategy="afterInteractive"
          onLoad={() => loaded("scrollSmoother")}
        />
      )}

      {children}
    </ScriptsContext.Provider>
  );
}
