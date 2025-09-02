"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("faq");

  const raw = t.raw("items");
  const items = Array.isArray(raw) ? raw : [];

  const [open, setOpen] = useState(new Set());

  const toggle = (idx) => {
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  return (
    <section aria-labelledby="faq-heading" className="py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-8 sm:px-6">
        {/* Heading di tengah */}
        <h2
          id="faq-heading"
          className="text-center font-minion-pro text-[#450000] uppercase tracking-[0.12em] leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl max-w-5xl mx-auto"
        >
          {t("heading.top")}
          <br className="hidden sm:block" />
          {t("heading.bottom")}
        </h2>

        <div className="mt-8 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          {/* Kiri: gambar */}
          <div className="md:col-span-5 md:self-center flex justify-center md:justify-start">
            <div className="relative w-[220px] h-[200px] sm:w-[280px] sm:h-[250px] md:w-[360px] md:h-[320px] lg:w-[420px] lg:h-[500px]">
              <Image
                src="/images/faq/faq-ring.svg"
                alt={t("imageAlt")}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Kanan: accordion */}
          <div className="md:col-span-7">
            <dl className="mt-2 md:mt-0">
              {items.map((it, idx) => {
                const isOpen = open.has(idx);
                return (
                  <div key={idx} className="py-1">
                    <dt className="border-b-2 border-[#450000]">
                      <button
                        type="button"
                        className="w-full flex items-center justify-between text-left font-poppins text-[#450000] text-lg sm:text-base md:text-lg py-3"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${idx}`}
                        onClick={() => toggle(idx)}
                      >
                        <span>{it.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </dt>

                    <dd
                      id={`faq-panel-${idx}`}
                      className={`grid transition-[grid-template-rows,opacity] duration-200 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="pt-3 pb-5 text-[#450000]/90 text-sm md:text-base leading-7 font-poppins">
                          {it.a}
                        </p>
                      </div>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
