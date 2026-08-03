"use client";

import { useTextSweepReveal } from "@/hooks/useTextSweepReveal";
import { useRef } from "react";
import Link from "next/link";
import ButtonSolid from "@/components/ui/ButtonSolid";
import { slugify } from "@/utils/slugify";

interface Service {
  id: string;
  title: string;
  description: string;
  imageThumb: string;
  tags: string[];
}

export interface ServicesListSectProps {
  getData: Service[];
}

const ServicesListSect = ({ getData }: ServicesListSectProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useTextSweepReveal(sectionRef, ".ul_text_amin *");

  if (!getData || getData.length === 0) return null;

  return (
    <section className="ul_service_sect" ref={sectionRef}>
      <div className="container">
        <div
          data-w-id="83f12367-7d96-cb13-4017-f2b793ddcc46"
          className="ul_service_title_items"
        >
          <div className="ul_title_with_des_box justify-between! ul_text_amin items-center! w-full! ">
            <h2 className="ul_title">Services</h2>
            <p className="ul_short_des ul_short_des_max_width">
              Von Design und Branding über Print und Druck bis hin zu
              individuellen Werbelösungen – alles aus einer Hand.
            </p>
          </div>
        </div>
        <div className="ul_service_wrapper_box">
          <div className="w-dyn-list">
            <div role="list" className="ul_service_collection_list w-dyn-items">
              {getData.map((service, index) => (
                <div
                  key={service.id}
                  role="listitem"
                  className="ul_service_collection_items w-dyn-item"
                >
                  <div className="ul_service_collection_box">
                    <div className="ul_service_content_box_one">
                      <div className="ul_service_collection_item-number">
                        <div>{(index + 1).toString().padStart(2)}</div>
                      </div>
                      <Link
                        href={`/services/${slugify(service.title)}`}
                        className="ul_service_content_title w-inline-block text-[1.1rem]! md:text-[1.5rem]! lg:text-[2rem]! hover:text-[#fbd30b]!"
                      >
                        <div>{service.title}</div>
                      </Link>
                      <div className="ul_button_box">
                        <ButtonSolid
                          href={`/services/${slugify(service.title)}`}
                          label="Jetzt starten"
                          dataWId="fad39b8f-d356-a7f4-3f90-f6b786a2a77b"
                        />
                      </div>
                    </div>
                    <div className="ul_service_content_box_two items-start!">
                      <div className="ul_service_content_box">
                        <ul
                          role="list"
                          className="ul_service_tags_box w-list-unstyled"
                        >
                          {service.tags.map((tag, idx) => (
                            <li key={idx} className="ul_service_tags">
                              <div>{tag}</div>
                            </li>
                          ))}
                        </ul>
                        <p className="ul_short_des">{service.description}</p>
                      </div>
                      <Link
                        data-w-id="bc7cc430-013d-bfa7-cfef-701312d85edf"
                        href={`/services/${slugify(service.title)}`}
                        className="ul_service_content_banner_box w-inline-block"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={service.imageThumb}
                          loading="lazy"
                          alt={service.title}
                          className="ul_service_content_banner img_hover h-[400px]! object-cover!"
                        />
                      </Link>
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

export default ServicesListSect;
