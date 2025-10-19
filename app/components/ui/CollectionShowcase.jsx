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
          className="text-center font-serif text-[40px] sm:text-5xl md:text-6xl leading-none tracking-wide text-[#7b0f12] mb-6 md:mb-10"
        >
          {t("vertical")}
        </h2>

        <div className="relative">
          {/* glow belakang kartu tengah */}
          <div
            aria-hidden
            className="hidden md:block absolute inset-0 -top-6 h-[360px] mx-auto max-w-4xl blur-2xl
                       bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.18),transparent_65%)]"
          />

          <div className="relative z-10 flex items-end justify-center gap-2 md:gap-6">
            {/* KIRI — BESAR + 3D tilt inward */}
            <aside
              className="
                relative hidden md:block w-[280px] lg:w-[340px] xl:w-[360px] aspect-[3/4]
                rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-[0_25px_80px_rgba(0,0,0,.25)]
                z-10 transform-gpu
                [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]
                [-webkit-mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]
              "
              style={{
                // menghadap ke tengah: tepi kanan lebih dekat ke viewer
                transform:
                  "perspective(1400px) rotateY(-14deg) rotateZ(8deg) translateX(28px) translateY(16px) scale(1.02)",
              }}
            >
              <Image
                src={
                  slides[prev]?.thumbSrc ||
                  slides[prev]?.imageSrc ||
                  "/placeholder.svg"
                }
                alt={slides[prev]?.thumbAlt || slides[prev]?.imageAlt || ""}
                fill
                sizes="(min-width:1280px) 360px, (min-width:1024px) 340px, 280px"
                className="object-cover"
                priority
              />
            </aside>

            {/* TENGAH — slider + pop-in */}
            <div
              className={`relative w-[82vw] sm:w-[520px] md:w-[520px] lg:w-[560px] aspect-[3/4]
                          rounded-2xl overflow-hidden ring-1 ring-black/5 z-30
                          shadow-[0_30px_80px_rgba(0,0,0,0.25)]
                          [&_.splide__track]:h-full [&_.splide__list]:h-full [&_.splide__slide]:h-full
                          ${pop ? "animate-colx-pop" : ""}`}
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
                onMounted={(s) => setIdx(s.index)}
                onMoved={(_, i) => setIdx(i)}
                className="h-full"
              >
                {slides.map((s, i) => (
                  <SplideSlide key={i} className="relative">
                    <Image
                      src={s.imageSrc}
                      alt={s.imageAlt}
                      fill
                      sizes="(min-width:1024px) 560px, 82vw"
                      className="object-cover"
                      priority={i === 0}
                    />
                  </SplideSlide>
                ))}
              </Splide>
            </div>

            {/* KANAN — BESAR + 3D tilt inward (kebalikan kiri) */}
            <aside
              className="
                relative hidden md:block w-[280px] lg:w-[340px] xl:w-[360px] aspect-[3/4]
                rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-[0_25px_80px_rgba(0,0,0,.25)]
                z-10 transform-gpu
                [mask-image:linear-gradient(to_left,transparent,black_12%,black_88%,transparent)]
                [-webkit-mask-image:linear-gradient(to_left,transparent,black_12%,black_88%,transparent)]
              "
              style={{
                transform:
                  "perspective(1400px) rotateY(14deg) rotateZ(-8deg) translateX(-28px) translateY(16px) scale(1.02)",
              }}
            >
              <Image
                src={
                  slides[next]?.thumbSrc ||
                  slides[next]?.imageSrc ||
                  "/placeholder.svg"
                }
                alt={slides[next]?.thumbAlt || slides[next]?.imageAlt || ""}
                fill
                sizes="(min-width:1280px) 360px, (min-width:1024px) 340px, 280px"
                className="object-cover"
                priority
              />
            </aside>
          </div>

          {/* Caption aktif */}
          {slides[idx]?.desc && (
            <p className="mt-6 md:mt-10 text-center max-w-3xl mx-auto text-xs sm:text-sm md:text-[15px] leading-relaxed text-[#7b0f12]">
              {slides[idx].desc}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
