"use client";

import React from "react";
import Image from "next/image";
import { Link } from "@/lib/navigation";
import { useTranslations, useLocale } from "next-intl";
import { ArrowUpRight } from "lucide-react";

export default function Discover() {
  const t = useTranslations("discover");
  const locale = useLocale();

  return (
    <section className="bg-[#E0C698] min-h-screen md:min-h-screen py-10 sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col justify-center">
        {/* Title */}
        <h2 className="text-center font-minion-pro text-[#450000] uppercase tracking-[0.12em] leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl max-w-5xl mx-auto">
          {t("title.top")}
          <br className="hidden sm:block" />
          {t("title.bottom")}
        </h2>

        {/* Cards */}
        <div className="mt-8 sm:mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-32 justify-items-center">
          {/* Wedding */}
          <article className="group w-full md:w-auto">
            <div className="relative w-[88%] sm:w-[72%] max-w-[430px] aspect-[590/635] md:w-[590px] md:h-[635px] md:max-w-none md:aspect-auto overflow-hidden rounded-lg sm:rounded-2xl mx-auto">
              <Image
                src="/images/discover/wedding-ring-info.svg"
                alt={t("wedding.alt")}
                fill
                sizes="(min-width:1024px) 590px, (min-width:768px) 430px, 88vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                priority
              />
            </div>

            {/* Caption + Link */}
            <div className="mt-3 sm:mt-4 md:mt-5 flex flex-row items-end justify-between w-[88%] sm:w-[72%] max-w-[430px] md:w-[590px] md:max-w-none gap-2 mx-auto">
              <div>
                <h3 className="font-futura-dee text-[#450000] text-4xl sm:text-2xl md:text-5xl">
                  {t("wedding.title")}
                </h3>
                <p className="mt-0.5 sm:mt-1 font-futura-dee text-[#450000]/80 text-lg sm:text-sm md:text-xl">
                  {t("wedding.caption")}
                </p>
              </div>

              <Link
                href="/collection"
                locale={locale}
                className="inline-flex items-center
                           gap-1 font-futura-dee text-xl md:text-base text-[#450000]
                           group/link hover:underline underline-offset-4"
                aria-label={t("discover")}
              >
                {t("discover")}
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-200
                                         group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                />
              </Link>
            </div>
          </article>

          {/* Engagement */}
          <article className="group w-full md:w-auto">
            <div className="relative w-[88%] sm:w-[72%] max-w-[430px] aspect-[590/635] md:w-[590px] md:h-[635px] md:max-w-none md:aspect-auto overflow-hidden rounded-lg sm:rounded-2xl mx-auto">
              <Image
                src="/images/discover/engagement-ring-info.svg"
                alt={t("engagement.alt")}
                fill
                sizes="(min-width:1024px) 590px, (min-width:768px) 430px, 88vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                priority
              />
            </div>

            {/* Caption + Link */}
            <div className="mt-3 sm:mt-4 md:mt-5 flex flex-row items-end justify-between w-[88%] sm:w-[72%] max-w-[430px] md:w-[590px] md:max-w-none gap-2 mx-auto">
              <div>
                <h3 className="font-futura-dee text-[#450000] text-4xl sm:text-2xl md:text-5xl">
                  {t("engagement.title")}
                </h3>
                <p className="mt-0.5 sm:mt-1 font-futura-dee text-[#450000]/80 text-lg sm:text-sm md:text-xl">
                  {t("engagement.caption")}
                </p>
              </div>

              <Link
                href="/collection"
                locale={locale}
                className="inline-flex items-center
                           gap-1 font-futura-dee text-xl md:text-base text-[#450000]
                           group/link hover:underline underline-offset-4"
                aria-label={t("discover")}
              >
                {t("discover")}
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-200
                                         group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
