"use client";

import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function WhyShop() {
  const t = useTranslations("whyShop");

  const raw = t.raw("items");
  const items = Array.isArray(raw) ? raw : [];

  return (
    <section className="relative py-12 md:py-16 lg:py-64 my-10">
      {/* Background foto */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/why-shop.svg"
          alt={t("bgAlt")}
          fill
          priority
          sizes="200vw"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* Heading */}
      <div className="pointer-events-none absolute inset-x-0 top-0 left-0 z-20">
        <div className="max-w-7xl px-8 sm:px-32">
          <div className="h-[6px] w-[270px] md:h-[6px] md:w-[600px]  bg-[#E0C698]" />
          <h2 className="mt-5 md:mt-[50px] font-minion-pro text-[#800000] text-4xl md:text-7xl tracking-wide">
            {t("title")}
          </h2>
        </div>
      </div>

      {/* Glass card */}
      <div className="w-full px-8 sm:px-32 mt-16 md:mt-10">
        <div className="relative rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-sm ring-1 ring-black/10 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-32">
            {/* Kolom kiri: 3 item */}
            <ul className="space-y-8">
              {items.slice(0, 3).map((it, i) => (
                <li
                  key={`left-${i}`}
                  className="grid grid-cols-[44px_1fr] gap-2 md:gap-10"
                >
                  {/* Icon */}
                  <span className="relative w-9 h-9 sm:w-11 sm:h-11 self-center">
                    <Image
                      src={it.imageSrc || "/placeholder.svg"}
                      alt={it.imageAlt || ""}
                      fill
                      sizes="50px"
                      className="object-contain"
                    />
                  </span>

                  <div className="self-start">
                    <h3 className="font-minion-pro text-[#800000] text-2xl md:text-4xl font-semibold md:font-normal">
                      {it.title}
                    </h3>
                    <p className="mt-2 font-poppins text-sm md:text-base text-[#800000]/90 leading-7">
                      {it.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Kolom kanan: 2 item */}
            <ul className="space-y-8">
              {items.slice(3).map((it, i) => (
                <li
                  key={`left-${i}`}
                  className="grid grid-cols-[44px_1fr] gap-2 md:gap-10"
                >
                  {/* Icon */}
                  <span className="relative w-9 h-9 sm:w-11 sm:h-11 self-center">
                    <Image
                      src={it.imageSrc || "/placeholder.svg"}
                      alt={it.imageAlt || ""} 
                      fill
                      sizes="50px"
                      className="object-contain"
                    />
                  </span>

                  <div className="self-start">
                    <h3 className="font-minion-pro text-[#800000] text-2xl md:text-4xl font-semibold md:font-normal">
                      {it.title}
                    </h3>
                    <p className="mt-2 font-poppins text-sm md:text-base text-[#800000]/90 leading-7">
                      {it.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* ring halus di tepi */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/40" />
        </div>
      </div>
    </section>
  );
}
