"use client";

import React from "react";
import { useTranslations } from "next-intl";
import StoryCard from "./StoryCard";

export default function AboutStory() {
  const t = useTranslations("ourStory");
  const items = Array.isArray(t.raw("items")) ? t.raw("items") : [];

  return (
    <section aria-labelledby="story-heading" className="py-12 md:py-64">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <h2
          id="story-heading"
          className="text-center font-minion-pro text-[#800000] text-4xl md:text-6xl lg:text-7xl leading-tight"
        >
          {t("title")}
        </h2>

        {/* Cards grid */}
        <div className="mt-10 md:mt-36 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 place-items-center">
          {items.map((it, idx) => {
            // 01 & 03 (idx 0,2) teks kiri; 02 & 04 (idx 1,3) teks kanan
            const textLeft = idx % 2 === 0;
            // Blur kebalikan dari posisi teks:
            const overlayLeft = textLeft;

            const offsetClass =
              idx % 2 === 1 ? "lg:translate-y-8 xl:translate-y-40" : "";

            return (
              <div
                key={idx}
                className={`w-full flex justify-center ${offsetClass} transition-transform`}
              >
                <StoryCard
                  item={it}
                  textLeft={textLeft}
                  overlayLeft={overlayLeft}
                  priority={idx === 0}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
