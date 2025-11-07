"use client";

import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { Link } from "@/lib/navigation";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function PillCard({ img, alt, title, caption, href }) {
  const t = useTranslations("discover");
  const locale = useLocale();

  return (
    <article
      className="group relative w-full"
      data-aos="fade-up"
      data-aos-offset="120"
    >
      {/* Card shell */}
      <div className="relative mx-auto w-[80%] max-w-[420px] md:w-[500px] md:h-[850px] rounded-full backdrop-blur-xl border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,.25)] flex flex-col items-center text-center px-6 sm:px-3 pt-5 pb-8 transition-transform duration-300 will-change-transform hover:-translate-y-1 hover:[transform:perspective(1000px)_rotateX(-2deg)_rotateY(2deg)]">
        {/* Circle image */}
        <div
          className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl transition-transform duration-700 group-hover:-translate-y-1"
        >
          <Image
            src={img}
            alt={alt}
            fill
            sizes="(min-width:768px) 384px, 80vw"
            className="object-cover select-none"
            priority
          />
          {/* soft inner glow on hover */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-full transition-all duration-300"
          />
        </div>

        {/* Title */}
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
            className="inline-flex items-center gap-1 rounded-full border border-[#800000]/30 bg-[#E0C698] px-4 py-1.5 font-futura-dee text-[#800000] text-sm transition-all duration-200 hover:border-[#E0C698] hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E0C698]"
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
