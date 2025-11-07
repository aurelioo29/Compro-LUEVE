"use client";

import React, { useEffect } from "react";
import { Link } from "@/lib/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();

  // Init AOS (hapus ini bila kamu sudah init AOS di entry point lain)
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <section
      aria-labelledby="about-heading"
      className="py-12 md:py-24 bg-white"
    >
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-12 items-start lg:auto-rows-min">
          {/* LEFT TOP: Heading + body + CTA */}
          <div
            className="lg:col-span-8 lg:col-start-1 lg:row-start-1 mt-20"
            data-aos="fade-up"
          >
            <h2
              id="about-heading"
              className="font-minion-pro text-[#800000] text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              {t("heading")}
            </h2>

            <p className="mt-4 md:mt-4 text-[#800000] font-poppins text-base md:text-xl leading-8 md:leading-8 text-justify mb-0 md:mb-0">
              {t.rich("body", {
                brand: (c) => <span className="font-semibold">{c}</span>,
                wedding: (c) => <span className="font-semibold">{c}</span>,
                engagement: (c) => <span className="font-semibold">{c}</span>,
              })}
            </p>

            <div className="mt-24 lg:mt-[150px]">
              <div className="flex items-center border-b-[3px] border-[#800000] pb-2">
                <Link
                  href="/about"
                  locale={locale}
                  className="font-poppins text-[#800000] text-sm md:text-base hover:underline underline-offset-4 font-semibold"
                >
                  {t("cta")}
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT TOP image */}
          <div
            className="lg:col-span-4 lg:col-start-9 lg:row-start-1"
            data-aos="fade-left"
            data-aos-delay="80"
          >
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-[3/4] overflow-hidden lg:rounded-tr-[150px] lg:rounded-none md:rounded-2xl rounded-3xl">
              <Image
                src="/images/about/right-top-about.svg"
                alt={t("topRightAlt")}
                fill
                sizes="(min-width:1024px) 320px, 80vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* LEFT BOTTOM big image */}
          <div
            className="lg:col-span-8 lg:col-start-1 lg:row-start-2"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-[18/9] overflow-hidden lg:rounded-tl-[300px] lg:rounded-none md:rounded-2xl rounded-3xl">
              <Image
                src="/images/about/bottom-about.svg"
                alt={t("bottomLeftAlt")}
                fill
                sizes="(min-width:1024px) 800px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT BOTTOM small image */}
          <div
            className="lg:col-span-4 lg:col-start-9 lg:row-start-2"
            data-aos="fade-left"
            data-aos-delay="160"
          >
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-[3/3] overflow-hidden lg:rounded-br-[150px] lg:rounded-none md:rounded-2xl rounded-3xl">
              <Image
                src="/images/about/right-bottom-about.svg"
                alt={t("bottomRightAlt")}
                fill
                sizes="(min-width:1024px) 360px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
