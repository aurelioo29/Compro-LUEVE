"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function TermsConditionsPage() {
  const t = useTranslations("terms");
  const sections = Array.isArray(t.raw("sections")) ? t.raw("sections") : [];

  return (
    // tarik ke belakang navbar
    <section className="-mt-[100px] md:-mt-[120px] relative overflow-x-clip">
      {/* Hero full-bleed 1 layar */}
      <div className="h-[20svh] md:h-[20dvh] overflow-hidden">
        <Image
          src="/images/term-conditions-bg.svg"
          alt={t("bgAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 pb-32 md:pb-52 md:mt-10">
        <h1 className="text-center font-minion-pro text-[#800000] text-3xl md:text-7xl">
          {t("title")}
        </h1>

        <div className="mt-6 md:mt-20">
          <ol className="space-y-8 md:space-y-10 rounded-[40px] md:rounded-[80px] bg-white/20 backdrop-blur-md shadow-2xl p-6 sm:p-10 md:p-16">
            {sections.map((sec, i) => (
              <li key={i} className="relative">
                <div
                  data-i={String(i + 1).padStart(2, "0")}
                  className="relative mb-3 pl-14 sm:pl-16 md:pl-20
                  font-minion-pro text-[#800000] font-semibold tracking-wide leading-none
                  text-[clamp(1.125rem,1.2vw+0.9rem,1.625rem)]  

                  before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2
                  before:text-[#CEA660] before:font-poppins before:font-semibold before:tabular-nums
                  before:[content:attr(data-i)]
                  before:text-[clamp(1.25rem,2vw+1rem,1.875rem)]

                  after:absolute after:top-1/2 after:-translate-y-1/2 after:rounded
                  after:left-9.5 sm:after:left-12 md:after:left-11  
                  after:w-3   sm:after:w-4   md:after:w-7        
                  after:h-[2px] after:bg-[#800000]
                  "
                >
                  {sec.title}
                </div>

                <div className="flex items-start gap-2">
                  {sec.intro && (
                    <p className="mt-2 font-poppins text-sm md:text-base leading-7 text-[#800000]/90">
                      {sec.intro}
                    </p>
                  )}

                  {Array.isArray(sec.list) && sec.list.length > 0 && (
                    <ul className="mt-3 list-disc pl-6 font-poppins text-sm md:text-base leading-7 text-[#800000]/90 space-y-1.5">
                      {sec.list.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {sec.sub && (
                    <p className="mt-3 font-poppins text-sm md:text-base text-[#800000]">
                      <span className="font-semibold">{sec.sub}</span>
                    </p>
                  )}
                  {Array.isArray(sec.list2) && sec.list2.length > 0 && (
                    <ul className="mt-2 list-disc pl-6 font-poppins text-sm md:text-base leading-7 text-[#800000]/90 space-y-1.5">
                      {sec.list2.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {sec.note && (
                    <p className="mt-3 font-poppins text-sm md:text-base text-[#800000]/80">
                      {sec.note}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
