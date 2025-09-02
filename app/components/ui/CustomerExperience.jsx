"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function CustomerExperience() {
  const t = useTranslations("experience");
  const slides = Array.isArray(t.raw("slides")) ? t.raw("slides") : [];

  return (
    <section aria-labelledby="exp-heading" className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading baris atas */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="lg:col-span-7">
            <h2
              id="exp-heading"
              className="font-minion-pro text-[#450000] leading-none text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="block">{t("heading.top")}</span>
              <span className="ml-3 sm:ml-6 md:ml-12">
                {t("heading.bottom")}
              </span>
            </h2>
          </div>

          <p className="lg:col-span-5 text-[#450000] font-poppins text-sm md:text-base lg:text-lg text-right">
            {t("tagline")}
          </p>
        </div>

        {/* Slider */}
        <Splide
          aria-label={t("ariaLabel")}
          className="mt-8 md:mt-32"
          options={{
            type: "loop",
            perPage: 1,
            autoplay: true,
            interval: 5500,
            speed: 700,
            pauseOnHover: true,
            pauseOnFocus: true,
            arrows: false,
            pagination: true,
            gap: "2rem",
            breakpoints: { 768: { gap: "1rem" } },
          }}
        >
          {slides.map((s, i) => (
            <SplideSlide key={i}>
              <div className="grid grid-cols-1 lg:grid-cols-12 items-start">
                {/* Kiri: judul pita + deskripsi */}
                <div className="lg:col-span-7 mt-5 md:mt-20">
                  {/* Pita abu-abu */}
                  <div className="bg-[#D9D9D9] w-full">
                    <h3 className="px-6 py-3 font-minion-pro text-[#450000] leading-none text-4xl sm:text-4xl lg:text-5xl">
                      {s.title}
                    </h3>
                  </div>

                  <p className="mt-6 text-[#450000] font-poppins text-sm sm:text-base lg:text-lg max-w-2xl">
                    {s.desc}
                  </p>
                </div>

                {/* Kanan: gambar */}
                <div className="lg:col-span-5 mt-10 md:mt-0">
                  <div className="relative mx-auto w-[82%] sm:w-[70%] max-w-[340px] aspect-[4/3] md:w-full md:max-w-none overflow-hidden rounded-xl">
                    <Image
                      src={s.imageSrc}
                      alt={s.imageAlt}
                      fill
                      sizes="(min-width:1024px) 520px, (min-width:768px) 70vw, 82vw"
                      priority={i === 0}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
}
