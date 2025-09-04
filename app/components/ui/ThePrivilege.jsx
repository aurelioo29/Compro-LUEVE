import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FeaturePrivilege from "./FeaturePrivilege";

export default function ThePrivilege() {
  const t = useTranslations("privilege");

  const left = Array.isArray(t.raw("left")) ? t.raw("left") : [];
  const right = Array.isArray(t.raw("right")) ? t.raw("right") : [];
  const image = t.raw("image") || {};

  const waPhone = "6282168039285";
  const waHref = `https://wa.me/${waPhone}?text=${encodeURIComponent(
    t("waText")
  )}`;

  return (
    <section id="the-lueve-privilege" className="py-12 md:py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Title (LUEVE berwarna emas) */}
        <h2 className="text-center font-minion-pro text-[#450000] text-4xl md:text-6xl lg:text-7xl leading-tight">
          {t.rich("title", {
            brand: (chunks) => <span className="text-[#CEA660]">{chunks}</span>,
          })}
        </h2>

        {/* Grid utama */}
        <div className="mt-10 md:mt-36 grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-14 items-start">
          {/* Tagline */}
          <div className="lg:col-span-3 flex flex-col items-center text-center order-0">
            <span className="inline-block rounded-full border border-[#450000] px-5 py-2 text-[#450000] font-minion-pro text-lg md:text-2xl transition-colors hover:bg-[#450000] hover:text-[#E0C698]">
              {t("tagline.title")}
            </span>
            <p className="mt-3 max-w-2xl text-[#450000]/90 font-poppins text-sm md:text-base">
              {t.rich("tagline.body", {
                brand: (chunks) => (
                  <span className="text-[#CEA660]">{chunks}</span>
                ),
              })}
            </p>
          </div>

          {/* Kolom kiri (fitur 1 & 2) */}
          <div className="space-y-10 lg:space-y-16 order-2 lg:order-none">
            {left.map((f, i) => (
              <FeaturePrivilege
                key={i}
                title={f.title}
                body={f.body}
                mobileAlign={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>

          {/* Gambar tengah (mobile tampil di atas fitur) */}
          <div className="flex justify-center order-1 lg:order-none">
            <div className="relative w-64 sm:w-80 lg:w-[420px] aspect-square rounded-full overflow-hidden shadow-xl">
              <Image
                src={image.src}
                alt={image.alt || ""}
                fill
                sizes="(min-width:1024px) 420px, 80vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Kolom kanan (fitur 3 & 4) */}
          <div className="space-y-10 lg:space-y-16 order-3 lg:order-none">
            {right.map((f, i) => {
              const globalIndex = i + left.length;
              return (
                <FeaturePrivilege
                  key={i}
                  title={f.title}
                  body={f.body}
                  mobileAlign={globalIndex % 2 === 0 ? "left" : "right"}
                />
              );
            })}
          </div>

          {/* CTA */}
          <div className="lg:col-span-3 flex justify-center order-4">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[#450000] px-5 py-2 text-[#450000] font-futura-dee hover:border-[#CEA660]"
              aria-label={t("cta")}
            >
              {t("cta")}
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
