"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

/* --- helper: t.raw aman --- */
function safeRaw(t, key, fallback) {
  try {
    return t.raw(key);
  } catch {
    return fallback;
  }
}

/* --- kolom spesifikasi: heading + list rapat --- */
function SpecCol({ title, items = {} }) {
  const rows = Object.entries(items).filter(
    ([k, v]) => String(k || "").trim() !== "" && String(v || "").trim() !== ""
  );
  if (!rows.length) return null;

  return (
    <div>
      <h3 className="text-center font-poppins text-[#800000] text-xl md:text-2xl font-semibold">
        {title}
      </h3>
      <dl
        className="
          mt-6 grid grid-cols-[max-content_1fr]
          gap-x-10 gap-y-1.5
          [&_dt]:m-0 [&_dd]:m-0
          [&_dt]:leading-tight [&_dd]:leading-tight
          text-[#800000]
        "
      >
        {rows.map(([label, value]) => {
          // kembalikan '·' -> '.' untuk tampilan
          const displayLabel = label.replaceAll("·", ".");
          return (
            <React.Fragment key={label}>
              <dt className="font-minion-pro text-lg md:text-xl">
                {displayLabel}
              </dt>
              <dd className="font-minion-pro text-lg md:text-xl text-[#450000]">
                {Array.isArray(value) ? value.join(", ") : value}
              </dd>
            </React.Fragment>
          );
        })}
      </dl>
    </div>
  );
}

/* --- garis dotted vertikal menyesuaikan jumlah kolom --- */
function DottedDividers({ count }) {
  if (count < 2) return null;
  const positions = Array.from(
    { length: count - 1 },
    (_, i) => ((i + 1) / count) * 100
  );
  return (
    <div
      aria-hidden
      className="hidden md:block absolute inset-y-6 left-0 right-0 pointer-events-none"
    >
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

export default function DetailCatalog({ item }) {
  const t = useTranslations("engagement.details");
  const detail = safeRaw(t, item.slug, {});
  const description = detail?.description ?? "";
  const specs = detail?.specs ?? {};

  // Kumpulkan grup spesifikasi secara berurutan (bisa 2 atau 3)
  const groups = [
    specs.centerDiamond && {
      title: "CENTRE DIAMOND",
      items: specs.centerDiamond,
    },
    specs.sideDiamond && { title: "SIDE DIAMOND", items: specs.sideDiamond },
    specs.metal && { title: "METAL", items: specs.metal },
  ].filter(Boolean);

  const colCount = groups.length || 2;
  const gridCols = colCount === 3 ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-10 sm:px-6">
        {/* ===== TOP: image kiri, info kanan ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <div className="group relative w-full aspect-square overflow-hidden rounded-md bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-500 ease-out motion-safe:hover:shadow-[0_16px_50px_rgba(0,0,0,0.14)]">
              <Image
                src={item.image}
                alt={item.alt || item.name}
                fill
                sizes="(min-width:1024px) 560px, 100vw"
                className="object-contain transition-transform duration-500 ease-out will-change-transform motion-safe:group-hover:scale-[1.035]"
                priority
              />

              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-md overflow-hidden"
              >
                <span className=" absolute top-0 -left-1/3 h-full w-1/3 bg-white/20 blur-[2px] -skew-x-12 translate-x-[-160%] transition-transform duration-700 ease-out motion-safe:group-hover:translate-x-[360%]" />
              </span>
            </div>
          </div>

          {/* kanan: Name / Meaning (gaya referensi) */}
          <div className="lg:col-span-7">
            <dl className="grid grid-cols-[max-content_1fr] gap-x-20 gap-y-2 items-start [&_dt]:m-0 [&_dd]:m-0">
              <dt className="font-poppins text-[15px] md:text-[20px] tracking-normal text-[#800000]/85">
                Name
              </dt>
              <dd className="font-minion-pro text-[#800000] uppercase tracking-[0.045em] text-[15px] md:text-[20px]">
                {item.name}
              </dd>

              <dt className="font-poppins text-[15px] md:text-[20px] tracking-normal text-[#800000]/85">
                Meaning
              </dt>
              <dd className="font-poppins text-[#800000]/90 text-[15px] md:text-[20px] leading-[1.7] max-w-[52ch] text-justify">
                {description}
              </dd>
            </dl>
          </div>
        </div>

        {/* ===== DETAIL ===== */}
        <div className="mt-16 md:mt-20">
          <div className="text-center">
            <h2 className="font-minion-pro text-[#D9C293] tracking-[0.18em] text-3xl md:text-4xl">
              DETAIL
            </h2>
            <div className="mt-5 mx-0 md:mx-6 border-t-[4px] border-[#D9C293]" />
          </div>

          <div
            className={`relative mt-10 md:mt-12 pt-6 grid grid-cols-1 ${gridCols} gap-12 md:gap-20`}
          >
            <DottedDividers count={colCount} />
            {groups.map((g, idx) => (
              <SpecCol key={idx} title={g.title} items={g.items} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
