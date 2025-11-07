"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import AOS from "aos";
import "aos/dist/aos.css";
import PillCard from "./Pillcard";

export default function Discover() {
  const t = useTranslations("discover");
  const locale = useLocale();

  // Kalau AOS sudah di-init global, bagian ini boleh dihapus.
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative h-screen isolate overflow-hidden min-h-[200svh] md:min-h-[100svh] lg:h-[1360px]">
      {/* background full-bleed (tanpa parallax) */}
      <div className="absolute inset-0">
        <Image
          src="/images/discover/background-discover.svg"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover pointer-events-none select-none"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-14 md:py-24">
        {/* Title dalam pill */}
        <div className="flex justify-center text-center" data-aos="fade-up">
          <div className="group rounded-full px-6 py-3 sm:px-8 sm:py-4 backdrop-blur-md border border-white/50 shadow-[0_10px_30px_rgba(0,0,0,.15)] transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,.25)] hover:scale-[1.02]">
            <h2 className="font-minion-pro text-[#800000] uppercase text-5xl sm:text-5xl md:text-[75px]">
              {t("title")}
            </h2>
          </div>
        </div>

        {/* 2 kartu */}
        <div
          className="mt-32 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 place-items-center"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <PillCard
            img="/images/discover/engagement-left-rings.svg"
            alt={t("engagement.alt")}
            title={t("engagement.title")}
            caption={t("engagement.caption")}
            href="/collection/engagement-rings"
          />

          <PillCard
            img="/images/discover/wedding-right-rings.svg"
            alt={t("wedding.alt")}
            title={t("wedding.title")}
            caption={t("wedding.caption")}
            href="/collection/wedding-rings"
          />
        </div>
      </div>
    </section>
  );
}
