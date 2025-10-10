"use client";

import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { Link } from "@/lib/navigation";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function PillCard({ img, alt, title, caption, href }) {
  const t = useTranslations("discover");
  const locale = useLocale();
  const prefersReduced = useReducedMotion();

  const variants = {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.article
      className="group relative w-full"
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Card shell */}
      <motion.div
        className="relative mx-auto w-[80%] max-w-[420px] md:w-[500px] md:h-[850px] rounded-full backdrop-blur-xl border border-white/60 shadow-[0_20px_60px_rgba(0,0,0,.25)] flex flex-col items-center text-center px-6 sm:px-3 pt-5 pb-8"
        whileHover={{
          y: -6,
          rotateX: prefersReduced ? 0 : -2,
          rotateY: prefersReduced ? 0 : 2,
          transition: { type: "spring", stiffness: 180, damping: 16 },
        }}
      >
        {/* Circle image */}
        <motion.div
          className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl"
          animate={
            prefersReduced
              ? { opacity: 1 }
              : { y: [0, -8, 0] }
          }
          transition={prefersReduced ? undefined : { duration: 7, repeat: Infinity, ease: "easeInOut" }}
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
          <motion.div
            aria-hidden
            className="absolute inset-0 rounded-full"
            initial={{ boxShadow: "0 0 0 rgba(224,198,152,0)" }}
            whileHover={{ boxShadow: "0 0 80px rgba(224,198,152,0.35)" }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>

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
        <motion.div className="mt-12" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          <Link
            href={href}
            locale={locale}
            className="inline-flex items-center gap-1 rounded-full border border-[#800000]/30 bg-[#E0C698] px-4 py-1.5 font-futura-dee text-[#800000] text-sm hover:border-[#E0C698] hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E0C698]"
            aria-label={t("discover")}
          >
            {t("discover")}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}
