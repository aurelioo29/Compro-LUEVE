// ===== Install once (if you haven't) =====

"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import PillCard from "./Pillcard";

export default function Discover() {
  const t = useTranslations("discover");
  const locale = useLocale();
  const { scrollY } = useScroll();
  const prefersReduced = useReducedMotion();

  // Subtle parallax for the background. If prefers-reduced-motion, keep it static.
  const bgY = useTransform(scrollY, [0, 600], [0, prefersReduced ? 0 : -80]);

  // Stagger children: pill title + cards
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative h-screen isolate overflow-hidden min-h-[190svh] md:min-h-[100svh] lg:h-[1360px]">
      {/* background full-bleed with parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Image
          src="/images/discover/background-discover.svg"
          alt=""
          aria-hidden
          fill
          priority
          sizes="100vw"
          className="object-cover pointer-events-none select-none"
        />
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-14 md:py-24"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Title dalam pill */}
        <motion.div className="flex justify-center" variants={fadeUp}>
          <motion.div
            className="rounded-full px-6 py-3 sm:px-8 sm:py-4 backdrop-blur-md border border-white/50 shadow-[0_10px_30px_rgba(0,0,0,.15)]"
            initial={{ boxShadow: "0 10px 30px rgba(0,0,0,.15)" }}
            whileHover={{
              boxShadow: "0 20px 60px rgba(0,0,0,.25)",
              scale: 1.02,
              transition: { type: "spring", stiffness: 220, damping: 16 },
            }}
          >
            <h2 className="font-minion-pro text-[#800000] uppercase text-5xl sm:text-5xl md:text-[75px]">
              {t("title")}{" "}
            </h2>
          </motion.div>
        </motion.div>

        {/* 2 kartu */}
        <div className="mt-32 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 place-items-center">
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
      </motion.div>

      {/* Floating accent glints (decorative). Hidden on prefers-reduced-motion. */}
      {!prefersReduced && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute -left-10 top-24 h-40 w-40 rounded-full bg-white/30 blur-2xl"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute right-16 bottom-20 h-32 w-32 rounded-full bg-[#E0C698]/30 blur-2xl"
            animate={{ y: [0, 14, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
        </>
      )}
    </section>
  );
}
