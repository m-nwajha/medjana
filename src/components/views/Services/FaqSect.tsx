"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    id: "1d8432d7-8be1-cc08-f6de-66dfec729a85",
    question: "Welche Services bietet Medjana an?",
    answer:
      "Wir bieten Druck & Print, Speisekarten & Menüs, TV & Video-Design, Webdesign, Markenauftritt & Design sowie Werbetechnik & Ausstattung - alles aus einer Hand.",
  },
  {
    id: "8cb9c9b0-5bf0-efc4-ae42-f2a2d59b8b75",
    question: "Wie lange dauert ein typisches Projekt?",
    answer:
      "Die Dauer hängt vom jeweiligen Umfang ab, aber wir sorgen stets für eine effiziente Umsetzung bei höchstem gestalterischem Anspruch.",
  },
  {
    id: "0dd765b0-fe06-907e-4135-b274f30421a1",
    question: "Arbeitet ihr auch mit kleinen Unternehmen zusammen?",
    answer:
      "Auf jeden Fall! Wir unterstützen gerne Gastronomen und kleine Unternehmen dabei, einen starken Markenauftritt zu entwickeln und sichtbar zu werden.",
  },
  {
    id: "c6c79945-a399-8959-8235-958035281be5",
    question: "Bietet ihr auch individuelle Webdesigns an?",
    answer:
      "Ja, jede Website, die wir erstellen, ist vollständig individuell gestaltet und verbindet Funktionalität mit Design, ganz auf Ihre Ziele abgestimmt.",
  },
];

const FaqSect = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="ul_faq_sect">
      <div className="container">
        <div className="ul_faq_grid_box">
          <div className="ul_faq_title_box ul_text_amin">
            <h2 className="ul_title">Häufig gestellte Fragen</h2>
          </div>
          <div className="ul_faq_wrapper_box">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={item.id}
                data-w-id={item.id}
                className={`ul_faq_items ${activeIndex === index ? "ul_faq_items_active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="ul_faq_content_title_box">
                  <h4 className="ul_faq_title">{item.question}</h4>
                  <div className="ul_faq_icon_box">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  className={`ul_faq_content_box ${activeIndex === index ? "ul_faq_content_box_active" : ""}`}
                >
                  <p className="ul_short_des">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .ul_faq_items:last-child{
            margin-bottom: 0;
          }
          .ul_faq_content_box{
              transform: translateY(65%);
              transition: all 0.60s;
              opacity: 0;
              height: 0px;
              padding-top: 0;
              overflow: hidden;
          }
          .ul_faq_items_active{
            border-color:  #212020;
          }
          .ul_faq_content_box.ul_faq_content_box_active{
              transform: translateY(0);
              opacity: 1;
              padding-top: 16px;
              height: auto;
          }
          .ul_faq_items_active .ul_faq_icon_box{
                transition: all 0.60s;
          }
          .ul_faq_items_active .ul_faq_icon_box{
              transform: rotate(45deg);
          }
        `,
        }}
      />
    </section>
  );
};

export default FaqSect;
