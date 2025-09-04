"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function CollectionShowcase() {
  const t = useTranslations("collectionShowcase");
  const slides = Array.isArray(t.raw("slides")) ? t.raw("slides") : [];

  const [idx, setIdx] = useState(0);
  const n = slides.length || 1;
  const prev = (idx - 1 + n) % n;
  const next = (idx + 1) % n;

  return (
    <section aria-labelledby="colx-heading" className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative">
        {/* ====== GRID CONTENT ====== */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-20 items-center">
          {/* Left preview (dibesarin + blur) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="relative mx-auto w-full max-w-[360px] aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src={
                  slides[prev]?.thumbSrc ??
                  slides[prev]?.imageSrc ??
                  "/placeholder.svg"
                }
                alt={slides[prev]?.thumbAlt || slides[prev]?.imageAlt || ""}
                fill
                sizes="360px"
                className="object-cover scale-[1.18] md:scale-[1.25] blur-[2px] md:blur-[3px]"
              />
            </div>
          </div>

          {/* Center card (NO BLUR) */}
          <div className="lg:col-span-6 relative z-10">
            <Splide
              aria-label={t("ariaLabel")}
              options={{
                type: "loop",
                perPage: 1,
                autoplay: true,
                interval: 5200,
                speed: 700,
                arrows: false,
                pagination: true,
                pauseOnHover: true,
                pauseOnFocus: true,
              }}
              onMounted={(s) => setIdx(s.index)}
              onMoved={(_, i) => setIdx(i)}
            >
              {slides.map((s, i) => (
                <SplideSlide key={i}>
                  <article className="relative mx-auto w-[86vw] sm:w-[82vw] md:w-[92vw] max-w-[553px] h-[75svh] min-h-[560px] sm:h-auto sm:aspect-[4/5] md:aspect-[553/809] lg:w-[553px] lg:h-[809px] lg:aspect-auto bg-[#D9C096] rounded-xl overflow-hidden">
                    <span
                      aria-hidden
                      className="absolute left-4 sm:left-3 md:left-4 top-6 md:top-6 bottom-24 md:bottom-28 font-minion-pro text-white drop-shadow leading-none tracking-wider z-20 [writing-mode:vertical-rl] text-[50px] md:text-6xl lg:text-7xl"
                    >
                      {t("vertical")}
                    </span>

                    {/* blok gambar + caption dalam satu wadah */}
                    <div className="absolute top-5 sm:top-6 md:top-8 left-10 sm:left-12 md:left-14 right-4 sm:right-8 md:right-14">
                      {/* frame foto */}
                      <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] bg-white rounded-xl overflow-hidden shadow">
                        <Image
                          src={s.imageSrc}
                          alt={s.imageAlt}
                          fill
                          sizes="(min-width:1024px) 525px, (min-width:640px) 82vw, 86vw"
                          priority={i === 0}
                          className="object-cover"
                        />
                      </div>

                      {/* caption tepat di bawah gambar */}
                      {s.desc && (
                        <p className="mt-3 sm:mt-4 text-white/95 font-poppins text-sm sm:text-base md:text-[17px] leading-6 text-justify">
                          {s.desc}
                        </p>
                      )}
                    </div>
                  </article>
                </SplideSlide>
              ))}
            </Splide>
          </div>

          {/* Right preview (dibesarin + blur) */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="relative mx-auto w-full max-w-[360px] aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src={
                  slides[next]?.thumbSrc ??
                  slides[next]?.imageSrc ??
                  "/placeholder.svg"
                }
                alt={slides[next]?.thumbAlt || slides[next]?.imageAlt || ""}
                fill
                sizes="360px"
                className="object-cover scale-[1.18] md:scale-[1.25] blur-[2px] md:blur-[3px]"
              />
            </div>
          </div>
        </div>

        {/* ====== BLUR OVERLAY (spotlight di tengah) ====== */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 hidden lg:block backdrop-blur-[3px] [mask-image:radial-gradient(340px_540px_at_50%_55%,transparent,black)]
            [-webkit-mask-image:radial-gradient(340px_540px_at_50%_55%,transparent,black)]"
        />
      </div>
    </section>
  );
}
