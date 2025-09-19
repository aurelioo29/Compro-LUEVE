"use client";

import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import PillCard from "./Pillcard";

export default function Discover() {
  const t = useTranslations("discover");
  const locale = useLocale();

  return (
    <section className="relative h-screen isolate overflow-hidden min-h-[190svh] md:min-h-[100svh] lg:h-[1360px]">
      {/* background full-bleed */}
      <Image
        src="/images/discover/background-discover.svg"
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-14 md:py-24">
        {/* Title dalam pill */}
        <div className="flex justify-center">
          <div className="rounded-full px-6 py-3 sm:px-8 sm:py-4 backdrop-blur-md border border-white/50 shadow-[0_10px_30px_rgba(0,0,0,.15)]">
            <h2 className="font-minion-pro text-[#800000] uppercase text-5xl sm:text-5xl md:text-[75px]">
              {t("title")}{" "}
            </h2>
          </div>
        </div>

        {/* 2 kartu */}
        <div className="mt-32 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 place-items-center">
          {/* Engagement (kiri) */}
          <PillCard
            img="/images/discover/engagement-left-rings.svg"
            alt={t("engagement.alt")}
            title={t("engagement.title")}
            caption={t("engagement.caption")}
            href="/collection/engagement-rings"
          />

          {/* Wedding (kanan) */}
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
