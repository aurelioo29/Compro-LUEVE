"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

/* -------- utils -------- */
function safeRaw(t, key, fallback) {
  try {
    return t.raw(key);
  } catch {
    return fallback;
  }
}

function SpecCol({ title, items = {}, className = "" }) {
  const rows = Object.entries(items).filter(
    ([k, v]) => String(k || "").trim() && String(v || "").trim()
  );
  if (!rows.length) return null;

  return (
    <div className={`w-full mx-auto flex flex-col items-center ${className}`}>
      {/* ✅ JUDUL TETAP DI TENGAH */}
      <h3 className="text-center font-minion-pro text-[#800000] text-xl md:text-2xl font-semibold">
        {title}
      </h3>

      {/* ✅ BLOK DT-DD DI-TENGAH, TAPI ISI TETAP KIRI-KANAN */}
      <div className="mt-8 mx-auto">
        <dl
          className="
            grid
            grid-cols-[auto_auto]
            gap-x-20
            gap-y-2
            text-[#800000]
          "
        >
          {rows.map(([label, value]) => (
            <React.Fragment key={label}>
              {/* LABEL – rata kiri */}
              <dt className="font-minion-pro text-lg whitespace-nowrap text-left">
                {label.replaceAll("·", ".")}
              </dt>

              {/* VALUE – rata kiri juga (seperti di foto kamu) */}
              <dd className="font-minion-pro text-lg whitespace-nowrap text-left">
                {Array.isArray(value) ? value.join(", ") : value}
              </dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </div>
  );
}

function DottedDividers({ count }) {
  if (count < 2) return null;

  const positions = Array.from(
    { length: count - 1 },
    (_, i) => ((i + 1) / count) * 100
  );

  return (
    <div className="hidden md:block absolute inset-y-0 left-0 right-0 pointer-events-none">
      {positions.map((pct, idx) => (
        <span
          key={idx}
          className="absolute top-0 bottom-0 border-l-[3px] border-dotted border-[#D9C293]"
          style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
        />
      ))}
    </div>
  );
}

function Paragraphs({ text }) {
  if (!text) return null;
  return (
    <p className="font-minion-pro text-[#800000]/90 text-[15px] md:text-[20px] leading-[1.7]">
      {text}
    </p>
  );
}

/* -------- MAIN DETAIL -------- */
export default function DetailCatalog({ item }) {
  const t = useTranslations("engagement.details");
  const detail = safeRaw(t, item.slug, null);

  const description = detail?.description ?? "";
  const specs = detail?.specs ?? {};

  const groups = [
    specs.centerDiamond && {
      title: "CENTRE DIAMOND",
      items: specs.centerDiamond,
    },
    specs.sideDiamond && { title: "SIDE DIAMOND", items: specs.sideDiamond },
    specs.metal && { title: "METAL", items: specs.metal },
  ].filter(Boolean);

  const colCount = groups.length;

  /* ✅ FIXED GRID LOGIC */
  const gridCols =
    colCount === 3
      ? "md:grid-cols-3"
      : colCount === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-1";

  const gridGaps =
    colCount === 2 ? "md:gap-x-32 lg:gap-x-40" : "md:gap-x-20 lg:gap-x-28";

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-[1500px] px-10 sm:px-6">
        {/* IMAGE + DESCRIPTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-square overflow-hidden rounded-md bg-white shadow-md">
              <Image
                src={item.image}
                alt={item.alt || item.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <dl className="grid grid-cols-[max-content_1fr] gap-x-32 gap-y-2">
              <dt className="font-minion-pro text-[15px] md:text-[20px] text-[#800000]">
                Name
              </dt>
              <dd className="font-minion-pro text-[#800000] uppercase tracking-[0.045em] text-[15px] md:text-[20px]">
                {item.name}
              </dd>

              <dt className="font-minion-pro text-[15px] md:text-[20px] text-[#800000]">
                Meaning
              </dt>
              <dd>
                <Paragraphs text={description} />
              </dd>
            </dl>
          </div>
        </div>

        {/* DETAIL SECTION */}
        <div className="mt-16 md:mt-20">
          <div className="text-center">
            <h2 className="font-minion-pro text-[#D9C293] tracking-widest text-3xl md:text-4xl">
              DETAIL
            </h2>
            <div className="mt-5 mx-auto max-w-[1500px] border-t-[4px] border-[#D9C293]" />
          </div>

          <div
            className={`
              relative mt-12 grid grid-cols-1
              ${gridCols} ${gridGaps}
              gap-y-16 md:gap-y-0
              md:items-start md:justify-items-center
            `}
          >
            <DottedDividers count={colCount} />

            {groups.map((g, idx) => (
              <SpecCol
                key={idx}
                title={g.title}
                items={g.items}
                className="w-full max-w-[380px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
