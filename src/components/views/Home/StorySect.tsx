"use client";

import { useState } from "react";
import Modal from "@/components/ui/Modal";
import { useWebflowReinit } from "@/hooks/useWebflowReinit";

const StorySect = () => {
  const [isOpen, setIsOpen] = useState(false);

  useWebflowReinit(["ix2"]);
  return (
    <section className="ul_story_sect">
      <div className="container">
        <div
          data-w-id="c88fe188-2514-8ff7-ad34-837dc933de0d"
          className="ul_story_short_des_flex_box"
        >
          <div className="ul_story_short_des_box max-w-[40%]!">
            <p className="ul_story_short_des">
              Kurze Wege. Klare Ideen. Saubere Umsetzung.
            </p>
          </div>
          <div className="ul_story_short_des_box max-w-[40%]!">
            <p className="ul_story_short_des text-[1.1rem]!">
              Bei Medjana bekommen Sie Beratung, Gestaltung und Produktion aus
              einer Hand. Wir arbeiten persönlich, verständlich und
              lösungsorientiert.
            </p>
          </div>
        </div>

        <div
          data-w-id="37aed0df-9274-b657-af77-c9d739caea88"
          className="ul_story_banner_box relative group cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/google-360.png"
            loading="lazy"
            alt="story Banner"
            className="ul_story_banner"
          />

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <button
              type="button"
              data-w-id="15438d65-7779-97d6-f7ae-d8e904ad86ea"
              className="ul_button w-inline-block bg-[#fbd30b]! border-[#fbd30b]! hover:bg-white! mt-8"
            >
              <div
                className="ul_button_text flex items-center gap-2 "
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
                Panorama ansehen
              </div>
            </button>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1785484817745!6m8!1m7!1sCAoSHENJQUJJaERtREZUWWJCMHphOEVVTzVNQWdheWM.!2m2!1d52.30971024102529!2d9.800811832282784!3f143.82!4f-17.47!5f0.7820865974627469"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Medjana Standort auf Google Maps"
          className="w-full block"
        />
      </Modal>
    </section>
  );
};

export default StorySect;
