"use client";

import React from "react";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacy");
  const sections = Array.isArray(t.raw("sections")) ? t.raw("sections") : [];

  return (
    <main
      aria-labelledby="policy-heading"
      className="mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-20"
    >
      {/* Judul */}
      <h1
        id="policy-heading"
        className="text-center font-minion-pro text-[#800000] uppercase tracking-wide text-3xl sm:text-4xl md:text-7xl"
      >
        {t("title")}
      </h1>

      {/* Konten */}
      <div className="mt-20 space-y-10 sm:space-y-12">
        {sections.map((s, i) => (
          <article key={i} id={`s${s.num}`} className="space-y-4">
            {/* Subjudul bernomor */}
            <h2 className="font-minion-pro text-[#800000] uppercase text-xl sm:text-2xl font-semibold">
              <span className="font-semibold font-poppins">{s.num} — </span>
              {s.title}
            </h2>

            {s.intro && (
              <p className="font-poppins text-[#800000] text-sm sm:text-base leading-7">
                {s.intro}
              </p>
            )}

            {/* Paragraf bebas */}
            {Array.isArray(s.paragraphs) &&
              s.paragraphs.map((p, j) => (
                <p
                  key={j}
                  className="font-poppins text-[#800000] text-sm sm:text-base leading-7"
                >
                  {p}
                </p>
              ))}

            {/* Daftar poin (pertama) */}
            {Array.isArray(s.list) && s.list.length > 0 && (
              <ul className="list-disc pl-5 font-poppins text-[#800000] text-sm sm:text-base leading-7 space-y-1">
                {s.list.map((li, k) => (
                  <li key={k}>{li}</li>
                ))}
              </ul>
            )}

            {/* Subjudul kecil sebelum daftar kedua */}
            {s.sub && (
              <p className="font-poppins text-[#800000] text-sm sm:text-base leading-7">
                {s.sub}
              </p>
            )}

            {/* Daftar poin (kedua) */}
            {Array.isArray(s.list2) && s.list2.length > 0 && (
              <ul className="list-disc pl-5 font-poppins text-[#800000] text-sm sm:text-base leading-7 space-y-1">
                {s.list2.map((li, k) => (
                  <li key={k}>{li}</li>
                ))}
              </ul>
            )}

            {/* Catatan */}
            {s.note && (
              <p className="font-poppins text-[#800000] text-sm sm:text-base leading-7">
                {s.note}
              </p>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
