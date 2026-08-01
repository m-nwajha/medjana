"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useScriptsReady } from "@/components/contexts/ScriptsProvider";

type WebflowModuleName = "ix2" | "lightbox" | "tabs" | "slider" | "navbar" | "dropdown";

interface WebflowGlobal {
  destroy: () => void;
  ready: () => void;
  require: (name: WebflowModuleName) => { init?: () => void; ready?: () => void } | undefined;
}

export const useWebflowReinit = (modules: WebflowModuleName[] = ["ix2"]) => {
  const { webflow } = useScriptsReady();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  useEffect(() => {
    if (!webflow) return;

    const timer = setTimeout(() => {
      const win = window as unknown as { Webflow?: WebflowGlobal };
      if (!win.Webflow) return;

      win.Webflow.destroy();
      win.Webflow.ready();

      modules.forEach((name) => {
        const mod = win.Webflow?.require(name);
        mod?.init?.();
        mod?.ready?.();
      });
    }, 250);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [webflow, pathname, searchParams]);
}