"use client";

import { useHeroReveal } from "@/hooks/useHeroReveal";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

const FORM_REVEAL_IDS = [
  "16ca77c5-048b-f001-fc1e-43d93b6cc7b3",
  "16ca77c5-048b-f001-fc1e-43d93b6cc7bd",
  "16ca77c5-048b-f001-fc1e-43d93b6cc7c7",
  "16ca77c5-048b-f001-fc1e-43d93b6cc7d0",
];

const CONTACT_DATA = [
  {
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
        </svg>
      </>
    ),
    title: "Email",
    contact: "ferula@gmail.com",
    href: "mailto:ferula@gmail.com",
  },
  {
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
          />
        </svg>
      </>
    ),
    title: "Phone",
    contact: "+9190-8687-3345",
  },
  {
    icon: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
        </svg>
      </>
    ),
    title: "Location",
    contact: "Malang, Indonesia",
  },
];

const ContactFormSect = () => {
  useHeroReveal(FORM_REVEAL_IDS);

  return (
    <section className="ul_contact_sect">
      <div className="container">
        <div className="ul_contact_grid_box">
          <div className="ul_contact_info_items">
            <ul role="list" className="ul_contact_info_box w-list-unstyled">
              {CONTACT_DATA.map((item, index) => (
                <li
                  data-w-id="16ca77c5-048b-f001-fc1e-43d93b6cc7b3"
                  className="ul_contact_info_list"
                  key={index}
                >
                  <div className="ul_contact_info_content">
                    <div className="ul_contact_info_icon_box bg-[#ffcf00]!">
                      <div className="ul_contact_info_icon">{item.icon}</div>
                    </div>
                    <div className="ul_contact_info_content_box">
                      <h5 className="ul_contact_info_content_title">
                        {item.title}
                      </h5>
                      <a
                        href={item.href || "#"}
                        className="ul_contact_info_link w-inline-block hover:text-[#ffcf00]!"
                      >
                        <div>{item.contact}</div>
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            data-w-id="16ca77c5-048b-f001-fc1e-43d93b6cc7d0"
            className="w-form"
          >
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              method="get"
              className="ul_contact_form_box"
              data-wf-page-id="692ec84ae383c17227fc8db2"
              data-wf-element-id="16ca77c5-048b-f001-fc1e-43d93b6cc7d1"
            >
              <Input
                maxLength={256}
                name="First_Name"
                data-name="First Name"
                placeholder="your First name"
                type="text"
                id="First_Name"
                required
              />
              <Input
                maxLength={256}
                name="Last-Nmae"
                data-name="Last Nmae"
                placeholder="your Last name"
                type="text"
                id="Last-Nmae"
                required
              />
              <Input
                className="hp_contact_form_input_email"
                maxLength={256}
                name="Your-Email"
                data-name="Your Email"
                placeholder="Your Email"
                type="email"
                id="Your-Email"
                required
              />
              <Input
                maxLength={256}
                name="Subject"
                data-name="Subject"
                placeholder="Subject"
                type="text"
                id="Subject"
                required
              />
              <Textarea
                id="Message"
                name="Message"
                maxLength={5000}
                data-name="Message"
                placeholder="Type Your Message"
              />
              <input
                type="submit"
                data-wait="Please wait..."
                className="ul_contact_form_button w-button bg-[#ffcf00]! hover:bg-[#fff]! border-[#ffcf00]!"
                value="Send Message"
              />
            </form>
            <div className="ul_contact_form_success w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSect;
