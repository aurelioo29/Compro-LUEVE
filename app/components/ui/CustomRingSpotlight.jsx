"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CustomRingSpotlight() {
  const t = useTranslations("customRingSpotlight");

  return (
    <section aria-labelledby="fs-heading" className="relative py-12 md:py-20">
      {/* glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-6 -translate-x-1/2 w-[85%] max-w-5xl h-40 bg-[#E0C698]/60 blur-2xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Gambar di atas (mobile/tablet), teks di kanan (desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          {/* Gambar */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[400px] aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={t("image.src")}
                alt={t("image.alt")}
                fill
                sizes="(min-width:1024px) 640px, 100vw"
                className="object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/10" />
            </div>
          </div>

          {/* Teks + CTA */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col items-center lg:items-start">
            <p
              className="text-[#450000]/90 font-minion-pro text-base sm:text-lg md:text-4xl
                max-w-[48ch] text-center lg:text-left mx-auto lg:mx-0"
            >
              {t.rich("body", {
                brand: (chunks) => (
                  <span className="text-[#CEA660]">{chunks}</span>
                ),
              })}
            </p>

            {/* CTA: center di mobile, kiri di desktop */}
            <div className="mt-6 md:mt-36 w-full flex justify-center lg:justify-start">
              <Link
                href="#the-lueve-privilege"
                className="group inline-flex items-center gap-2 font-futura-dee text-[#450000] text-base md:text-lg hover:underline underline-offset-4 border border-[#450000] p-3 rounded-xl hover:border-[#CEA660]"
                aria-label={t("cta.label")}
              >
                {t("cta.label")}
                <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
