"use client";

import { useTextSweepReveal } from "@/hooks/useTextSweepReveal";
import { useRef } from "react";
import Link from "next/link";

import ButtonSolid from "@/components/ui/ButtonSolid";

const SERVICES_DATA = [
  {
    id: "1",
    title: "Branding Services",
    link: "/services/branding-services",
    tags: ["Network", "Strategies", "Analytics"],
    description: "Tap into the power of affiliate marketing to fuel scalable growth. Our expert services connect you with trusted partners ready to deliver measurable results.",
    image: "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f527be8f0a339f3c487c2_brand-business-marketing-words-typography-concept.jpg",
  },
  {
    id: "2",
    title: "E-commerce Solutions",
    link: "/services/ecommerce-solutions",
    tags: ["Network", "Strategies", "Analytics"],
    description: "Leverage affiliate marketing to unlock new growth opportunities. Our network of high-performing affiliates helps your business achieve powerful, performance-based expansion.",
    image: "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f529fc847bab5604cab30_young-woman-order-purchase-product-internet-using-laptop-blithe.jpg",
  },
  {
    id: "3",
    title: "Website Maintenance",
    link: "/services/website-maintenance",
    tags: ["Network", "Strategies", "Analytics"],
    description: "Grow smarter with affiliate marketing strategies designed for success. We link your business to a network of premium affiliates driving real, sustainable growth.",
    image: "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f52d6a075b0f09f4ccf77_dv.jpg",
  },
  {
    id: "4",
    title: "Digital Marketing Strategy",
    link: "/services/digital-marketing-strategy",
    tags: ["Network", "Strategies", "Analytics"],
    description: "Experience performance-driven growth through affiliate marketing. Our services help you connect with top affiliates ready to deliver targeted, impactful results.",
    image: "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f52fd5e8caaeb598fe7c8_businesspeople-drawing-digital-marketing-diagram-table.jpg",
  },
  {
    id: "5",
    title: "Graphic Design",
    link: "/services/graphic-design",
    tags: ["Network", "Strategies", "Analytics"],
    description: "Fuel your business growth with affiliate marketing expertise. We match you with a curated network of top-performing affiliates to maximize your ROI.",
    image: "https://cdn.prod.website-files.com/680776386f5a9ba03581a0f4/680f53115ede350088f5e259_still-life-graphic-design-studio.jpg",
  }
];

const ServicesListSect = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useTextSweepReveal(sectionRef, ".ul_text_amin *");

  return (
    <section className="ul_service_sect" ref={sectionRef}>
      <div className="container">
        <div data-w-id="83f12367-7d96-cb13-4017-f2b793ddcc46" className="ul_service_title_items">
          <div className="ul_service_title_box ul_text_amin">
            <h2 className="ul_title">What kind of services do we provide?</h2>
          </div>
          <p className="ul_short_des ul_service_short_des">
            Our clients are at the heart of everything we do. At Agence NF, we pride ourselves on building lasting partnerships through services.
          </p>
        </div>
        <div className="ul_service_wrapper_box">
          <div className="w-dyn-list">
            <div role="list" className="ul_service_collection_list w-dyn-items">
              {SERVICES_DATA.map((service) => (
                <div key={service.id} role="listitem" className="ul_service_collection_items w-dyn-item">
                  <div className="ul_service_collection_box">
                    <div className="ul_service_content_box_one">
                      <div className="ul_service_collection_item-number">
                        <div>{service.id}</div>
                      </div>
                      <Link href={service.link} className="ul_service_content_title w-inline-block hover:text-[#fbd30b]!">
                        <div>{service.title}</div>
                      </Link>
                      <div className="ul_button_box">
                        <ButtonSolid 
                          href={service.link} 
                          label="Get Started" 
                          dataWId="fad39b8f-d356-a7f4-3f90-f6b786a2a77b"
                        />
                      </div>
                    </div>
                    <div className="ul_service_content_box_two">
                      <div className="ul_service_content_box">
                        <ul role="list" className="ul_service_tags_box w-list-unstyled">
                          {service.tags.map((tag, idx) => (
                            <li key={idx} className="ul_service_tags">
                              <div>{tag}</div>
                            </li>
                          ))}
                        </ul>
                        <p className="ul_short_des">{service.description}</p>
                      </div>
                      <Link href={service.link} className="ul_service_content_banner_box w-inline-block">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={service.image} 
                          loading="lazy" 
                          alt={service.title} 
                          className="ul_service_content_banner img_hover" 
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
