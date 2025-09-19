"use client";

import React from "react";
import { Link } from "@/lib/navigation";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "motion/react";
import { Stagger, staggerItem } from "../anim/Stagger";
import Reveal from "../anim/Reveal";

export default function About() {
  const t = useTranslations("about");
  const locale = useLocale();

  return (
    <section
      aria-labelledby="about-heading"
      className="py-12 md:py-24 bg-white"
    >
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6">
        <div className="grid gap-6 lg:gap-10 lg:grid-cols-12 items-start lg:auto-rows-min">
          {/* LEFT TOP: Heading + body + CTA */}
          <Stagger className="lg:col-span-8 lg:col-start-1 lg:row-start-1 mt-20">
            <motion.h2
              variants={staggerItem}
              id="about-heading"
              className="font-minion-pro text-[#800000] text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              {t("heading")}
            </motion.h2>

            {/* paragraf ikut stagger biar urut animasinya */}
            <motion.p
              variants={staggerItem}
              className="mt-4 md:mt-4 text-[#800000] font-poppins text-base md:text-xl leading-8 md:leading-8 text-justify mb-0 md:mb-0"
            >
              {t.rich("body", {
                brand: (c) => <span className="font-semibold">{c}</span>,
                wedding: (c) => <span className="font-semibold">{c}</span>,
                engagement: (c) => <span className="font-semibold">{c}</span>,
              })}
            </motion.p>

            {/* CTA + underline */}
            <motion.div variants={staggerItem} className="mt-24 lg:mt-[150px]">
              <div className="flex items-center border-b-[3px] border-[#800000] pb-2">
                <Link
                  href="/about"
                  locale={locale}
                  className="font-poppins text-[#800000] text-sm md:text-base hover:underline underline-offset-4 font-semibold"
                >
                  {t("cta")}
                </Link>
              </div>
            </motion.div>
          </Stagger>

          {/* RIGHT TOP image */}
          <Reveal
            className="lg:col-span-4 lg:col-start-9 lg:row-start-1"
            y={24}
          >
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-[3/4] overflow-hidden lg:rounded-tr-[150px] lg:rounded-none md:rounded-2xl rounded-3xl">
              <Image
                src="/images/about/right-top-about.svg"
                alt={t("topRightAlt")}
                fill
                sizes="(min-width:1024px) 320px, 80vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          {/* LEFT BOTTOM big image */}
          <Reveal
            className="lg:col-span-8 lg:col-start-1 lg:row-start-2"
            y={24}
            delay={0.05}
          >
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-[18/9] overflow-hidden lg:rounded-tl-[300px] lg:rounded-none md:rounded-2xl rounded-3xl">
              <Image
                src="/images/about/bottom-about.svg"
                alt={t("bottomLeftAlt")}
                fill
                sizes="(min-width:1024px) 800px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* RIGHT BOTTOM small image */}
          <Reveal
            className="lg:col-span-4 lg:col-start-9 lg:row-start-2"
            y={24}
            delay={0.1}
          >
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-[3/3] overflow-hidden lg:rounded-br-[150px] lg:rounded-none md:rounded-2xl rounded-3xl">
              <Image
                src="/images/about/right-bottom-about.svg"
                alt={t("bottomRightAlt")}
                fill
                sizes="(min-width:1024px) 360px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
