"use client";

import React from "react";
import { Link } from "@/lib/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <section
      aria-labelledby="about-heading"
      className="px-6 md:px-10 lg:px-60 py-12 md:py-32 bg-[#EBEBEB]"
    >
      <div className="grid gap-5 lg:gap-12 lg:grid-cols-12 items-start">
        {/* LEFT: Image + maroon offset block */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[520px] aspect-[3/4]">
            <Image
              src="/images/about/about-illustration.svg"
              alt={t("imageAlt")}
              fill
              priority
              sizes="(min-width:1024px) 520px, 90vw"
              className="object-cover relative z-10"
            />
          </div>
        </div>

        {/* RIGHT: Heading + body + view more */}
        <div className="lg:col-span-7 flex flex-col h-full">
          <h2
            id="about-heading"
            className="font-minion-pro text-[#450000] text-5xl md:text-5xl lg:text-7xl leading-tight text-center md:text-left"
          >
            {t("heading")}
          </h2>

          <p className="mt-6 text-[#450000] font-poppins text-lg sm:text-base md:text-xl tracking-widest text-justify leading-10">
            {t.rich("body", {
              brand: (chunks) => (
                <span className="text-[#CEA660]">{chunks}</span>
              ),
              wedding: (chunks) => (
                <span className="text-[#CEA660]">{chunks}</span>
              ),
              engagement: (chunks) => (
                <span className="text-[#CEA660]">{chunks}</span>
              ),
            })}
          </p>

          {/* View more + garis panjang ke kanan */}
          <div className="mt-8 md:mt-10 lg:mt-auto">
            <div className="flex items-center border-0 border-b-4 border-[#450000] py-4">
              <Link
                href="/about"
                locale={locale}
                className="font-poppins text-[#450000] text-sm sm:text-xl"
              >
                {t("cta")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
