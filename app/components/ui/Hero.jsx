"use client";

import React from "react";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const SLIDES = [
  {
    src: "/images/hero/wedding-ring.svg",
    alt: "",
    title: "Wedding Ring",
    desc: "lorem ipsum another this testing first but me okey",
  },
  {
    src: "/images/hero/engagement-ring.svg",
    alt: "",
    title: "Engagement Ring",
    desc: "lorem ipsum another this testing second but me okey",
  },
];

export default function Hero() {
  return (
    <section
      aria-label="Hero vertical slider"
      className="-mt-[88px] md:-mt-[128px] relative"
    >
      <Splide
        options={{
          type: "loop",
          direction: "ttb", // vertical
          height: "calc(100svh + 80px)", // desktop
          breakpoints: {
            768: { height: "calc(100svh + 90px)" }, // mobile/tablet
          },
          autoplay: true,
          interval: 5000,
          speed: 800,
          pauseOnHover: true,
          pauseOnFocus: true,
          arrows: false,
          pagination: true,
        }}
      >
        {SLIDES.map((item, index) => (
          <SplideSlide key={index}>
            <div className="relative h-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                priority={index === 0}
                sizes="150vw"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/80 to-transparent" />

              {/* ===== Mobile: ===== */}
              <div className="pointer-events-none absolute inset-x-4 bottom-16 md:hidden">
                <div className="flex flex-col gap-4">
                  <h1 className="font-minion-pro text-[#450000] text-4xl leading-none">
                    {item.title}
                  </h1>
                  <p className="text-[#450000]/95 text-lg font-poppins leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* ===== Desktop ===== */}
              <div className="pointer-events-none absolute left-36 bottom-20 hidden md:block">
                <h1 className="font-minion-pro text-[#450000] text-5xl lg:text-7xl leading-none">
                  {item.title}
                </h1>
              </div>

              <div className="pointer-events-none absolute right-36 bottom-20 hidden md:block max-w-[620px]">
                <p className="text-[#450000] text-base md:text-xl font-poppins text-right leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}
