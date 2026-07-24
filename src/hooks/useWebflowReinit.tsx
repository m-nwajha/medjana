"use client";

import { useEffect } from "react";
import { useScriptsReady } from "@/components/contexts/ScriptsProvider";

type WebflowModuleName = "ix2" | "lightbox" | "tabs" | "slider" | "navbar" | "dropdown";

interface WebflowGlobal {
  destroy: () => void;
  ready: () => void;
  require: (name: WebflowModuleName) => { init?: () => void; ready?: () => void } | undefined;
}

export const useWebflowReinit = (modules: WebflowModuleName[] = ["ix2"]) => {
  const { webflow } = useScriptsReady();

  useEffect(() => {
    if (!webflow) return;

    const win = window as unknown as { Webflow?: WebflowGlobal };
    if (!win.Webflow) return;

    win.Webflow.destroy();
    win.Webflow.ready();

    modules.forEach((name) => {
      const mod = win.Webflow?.require(name);
      mod?.init?.();
      mod?.ready?.();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webflow]);
}