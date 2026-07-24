"use client";
import { useEffect } from "react";

const DEFAULT_WF_SITE = "692ec847e383c17227fc8c5b";

export const useWFPage = (dataPage: string, dataSite?: string) => {
  const setWFPage = (dataPage: string, dataSite: string = DEFAULT_WF_SITE) => {
    const html = document.documentElement;
    html.setAttribute("data-wf-page", dataPage);
    html.setAttribute("data-wf-site", dataSite);
  };
  useEffect(() => {
    setWFPage(dataPage, dataSite);
  }, [dataPage, dataSite]);
};
