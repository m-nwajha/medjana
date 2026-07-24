"use client";

import { useWFPage } from "@/hooks/useWFPage";
import ContactHeroSect from "./ContactHeroSect";
import ContactFormSect from "./ContactFormSect";

const ContactPage = () => {
  useWFPage("692ec84ae383c17227fc8db2");

  return (
    <>
      <ContactHeroSect />
      <ContactFormSect />
    </>
  );
};

export default ContactPage;