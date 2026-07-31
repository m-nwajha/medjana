"use client";

import { useState } from "react";
import ButtonSolid from "@/components/ui/ButtonSolid";
import { slugify } from "@/utils/slugify";
import Image from "next/image";

interface Service {
  id: string;
  title: string;
  description: string;
  imageThumb: string;
}

export interface ProvideSectProps {
  getData: Service[];
}

const ProvideSect = ({ getData }: ProvideSectProps) => {
  const [activeTab, setActiveTab] = useState(getData?.[0]?.id ?? "");

  if (!getData || getData.length === 0) return null;

  const _firstFour = getData.slice(0, 4);

  return (
    <section className="ul_provide_sect">
      <div className="container ul_provide_top_border"></div>
      <div className="container">
        <div className="ul_title_with_des_box">
          <h2 className="ul_title text-[2.2rem]!">
            Alles für einen Auftritt, der Eindruck macht.
          </h2>
        </div>
        <div
          data-w-id="895bdf02-9d7d-7256-9f57-c235533d8f6f"
          className="ul_provide_wrapper_box"
        >
          <div
            data-current={activeTab}
            data-easing="ease"
            data-duration-in="300"
            data-duration-out="100"
            className="ul_provide_tab w-tabs"
          >
            {/* Tab menu */}
            <div className="ul_provide_tab_menu w-tab-menu">
              {_firstFour.map((service) => (
                <a
                  key={service.id}
                  data-w-tab={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`ul_provide_tab_link w-inline-block w-tab-link ${
                    activeTab === service.id ? "w--current" : ""
                  }`}
                >
                  <div>{service.title}</div>
                </a>
              ))}
            </div>

            {/* Tab content */}
            <div className="ul_provide_tab_content  w-tab-content">
              {_firstFour.map((service) => (
                <div
                  key={service.id}
                  data-w-tab={service.id}
                  className={`ul_provide_tab_pane w-tab-pane ${
                    activeTab === service.id ? "w--tab-active" : ""
                  }`}
                >
                  <div className="ul_provide_content_flex_box">
                    <div className="ul_provide_content_banner_box">
                      <Image
                        alt={service.title}
                        src={service.imageThumb}
                        width={500}
                        height={300}
                        loading="lazy"
                        className="ul_provide_content_banner w-[500px]! h-[300px]! object-cover"
                      />
                    </div>
                    <div className="ul_provide_content_box">
                      <p className="ul_short_des">{service.description}</p>
                      <ButtonSolid
                        dataWId="15438d65-7779-97d6-f7ae-d8e904ad86ea"
                        className="mt-8"
                        label="Explore More"
                        href={`/services/${slugify(service.title)}`}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvideSect;
