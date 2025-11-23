"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function CollectionShowcase() {
  const t = useTranslations("collectionShowcase");
  const slides = Array.isArray(t.raw("slides")) ? t.raw("slides") : [];

  const [idx, setIdx] = useState(0);
  const n = Math.max(slides.length, 1);
  const prev = (idx - 1 + n) % n;
  const next = (idx + 1) % n;

  const [pop, setPop] = useState(false);
  useEffect(() => {
    setPop(true);
    const to = setTimeout(() => setPop(false), 650);
    return () => clearTimeout(to);
  }, [idx]);

  return (
    <section
      aria-labelledby="collection-heading"
      className="relative py-12 md:py-20 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2
          id="collection-heading"
          className="text-center font-minion-pro text-[40px] sm:text-5xl md:text-6xl leading-none tracking-wide text-[#7b0f12] mb-6 md:mb-10"
        >
          {t("vertical")}
        </h2>

        <div className="relative md:mt-20">
          {/* glow belakang kartu tengah */}
          <div
            aria-hidden
            className="hidden md:block absolute inset-0 top-6 h-[360px] mx-auto max-w-4xl blur-2xl bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.18),transparent_65%)]"
          />

          {/* ===== WRAPPER 3 KARTU ===== */}
          <div className="relative mx-auto mt-4 h-[360px] sm:h-[380px] md:h-[420px] lg:h-[520px] xl:h-[560px] 2xl:h-[600px] max-w-6xl">
            {/* KIRI */}
            <aside
              className="
    absolute left-0 sm:left-4 md:left-6 top-10
    hidden md:block
    w-[38%] md:w-[34%] lg:w-[36%] xl:w-[34%] 2xl:w-[32%]
    max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] 2xl:max-w-[400px]
    aspect-[3/4]
    rounded-2xl overflow-hidden ring-1 ring-black/5
    shadow-[0_18px_55px_rgba(0,0,0,.18)]
    transform-gpu -rotate-9 translate-y-4
    -translate-x-[10%] md:-translate-x-[18%] lg:-translate-x-[22%] xl:-translate-x-[26%] 2xl:-translate-x-[30%]
    z-10
  "
            >
              <Image
                src={
                  slides[prev]?.thumbSrc ||
                  slides[prev]?.imageSrc ||
                  "/placeholder.svg"
                }
                alt={slides[prev]?.thumbAlt || slides[prev]?.imageAlt || ""}
                fill
                sizes="(min-width:1280px) 320px, (min-width:1024px) 280px, 42vw"
                className="object-cover"
                priority
              />
            </aside>

            {/* TENGAH – SPLIDE */}
            <div
              className={`
    absolute left-1/2 top-0 -translate-x-1/2
    w-[72%] sm:w-[55%] md:w-[48%] lg:w-[44%] xl:w-[42%] 2xl:w-[40%]
    max-w-[420px] lg:max-w-[480px] xl:max-w-[520px] 2xl:max-w-[560px]
    aspect-[3/4]
    rounded-2xl overflow-hidden ring-1 ring-black/5
    shadow-[0_30px_80px_rgba(0,0,0,0.25)]
    bg-white z-20
    ${pop ? "animate-colx-pop" : ""}
  `}
            >
              <Splide
                aria-label={t("ariaLabel")}
                options={{
                  type: "loop",
                  perPage: 1,
                  autoplay: true,
                  interval: 4600,
                  speed: 900,
                  arrows: false,
                  pagination: true,
                  pauseOnHover: true,
                  pauseOnFocus: true,
                  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                }}
                onMounted={(s) => setIdx(s.index % slides.length)}
                onMoved={(s) => setIdx(s.index % slides.length)}
                className="collection-splide h-full"
              >
                {slides.map((s, i) => (
                  <SplideSlide key={i}>
                    <Image
                      src={s.imageSrc}
                      alt={s.imageAlt}
                      fill
                      sizes="(min-width:1024px) 420px, 72vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>

            {/* KANAN */}
            <aside
              className="
    absolute right-0 sm:right-4 md:right-6 top-10
    hidden md:block
    w-[38%] md:w-[34%] lg:w-[36%] xl:w-[34%] 2xl:w-[32%]
    max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] 2xl:max-w-[400px]
    aspect-[3/4]
    rounded-2xl overflow-hidden ring-1 ring-black/5
    shadow-[0_18px_55px_rgba(0,0,0,.18)]
    transform-gpu rotate-9 translate-y-4
    translate-x-[10%] md:translate-x-[18%] lg:translate-x-[22%] xl:translate-x-[26%] 2xl:translate-x-[30%]
    z-10
  "
            >
              <Image
                src={
                  slides[next]?.thumbSrc ||
                  slides[next]?.imageSrc ||
                  "/placeholder.svg"
                }
                alt={slides[next]?.thumbAlt || slides[next]?.imageAlt || ""}
                fill
                sizes="(min-width:1280px) 320px, (min-width:1024px) 280px, 42vw"
                className="object-cover"
                priority
              />
            </aside>
          </div>

          {/* Caption aktif */}
          {slides[idx]?.desc && (
            <p className="mt-6 md:mt-20 font-poppins text-center max-w-3xl mx-auto text-xs sm:text-sm md:text-[15px] leading-relaxed text-[#7b0f12]">
              {slides[idx].desc}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
