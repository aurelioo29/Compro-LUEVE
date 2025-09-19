"use client";

import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { Link } from "@/lib/navigation";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Pillcard({ img, alt, title, caption, href }) {
  const t = useTranslations("discover");
  const locale = useLocale();

  return (
    <article className="group relative w-full">
      {/* Kartu (desktop 500x950) */}
      <div
        className="
          relative mx-auto
          w-[80%] max-w-[420px]    
          md:w-[500px] md:h-[850px]
          rounded-full
          backdrop-blur-xl
          border border-white/60
          shadow-[0_20px_60px_rgba(0,0,0,.25)]
          flex flex-col items-center text-center
          px-6 sm:px-3 pt-5 pb-8
        "
      >
        {/* Circle image DI DALAM kartu */}
        <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl">
          <Image
            src={img}
            alt={alt}
            fill
            sizes="(min-width:768px) 256px, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Judul */}
        <h3 className="mt-10 lg:mt-[71px] font-quattro text-[#800000] text-5xl sm:text-3xl md:text-[40px]">
          {title}
        </h3>

        {/* Caption */}
        {caption && (
          <p className="mt-5 px-2 font-futura-dee text-[#800000]/85 text-2xl sm:text-base md:text-[27px] max-w-[200px] leading-7">
            {caption}
          </p>
        )}

        {/* CTA */}
        <div className="mt-12">
          <Link
            href={href}
            locale={locale}
            className="inline-flex items-center gap-1 rounded-full border border-[#800000]/30 bg-[#E0C698] px-4 py-1.5 font-futura-dee text-[#800000] text-sm hover:border-[#E0C698] hover:shadow"
            aria-label={t("discover")}
          >
            {t("discover")}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
