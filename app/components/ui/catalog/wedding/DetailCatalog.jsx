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
    <div
      className={`
        w-full
        md:max-w-[320px] lg:max-w-[360px] xl:max-w-[380px]
        mx-auto
        ${className}
      `}
    >
      <h3 className="text-center font-minion-pro text-[#800000] text-xl md:text-2xl font-semibold">
        {title}
      </h3>

      <dl
        className="
          mt-8 md:mt-10
          grid grid-cols-[max-content_1fr]
          gap-x-10 gap-y-1.5
          items-start
          [&_dt]:m-0 [&_dd]:m-0
          [&_dt]:leading-tight [&_dd]:leading-tight
          text-[#800000]
        "
      >
        {rows.map(([label, value]) => (
          <React.Fragment key={label}>
            <dt className="font-minion-pro text-lg md:text-xl whitespace-nowrap">
              {label.replaceAll("·", ".")}
            </dt>
            <dd className="font-minion-pro text-lg md:text-xl text-[#800000]">
              {Array.isArray(value) ? value.join(", ") : value}
            </dd>
          </React.Fragment>
        ))}
      </dl>
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
    <div
      aria-hidden
      className="
        hidden md:block absolute left-0 right-0
        top-12 bottom-4
        pointer-events-none
      "
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

function Paragraphs({ text }) {
  const raw = String(text ?? "");

  const normalized = raw
    .replace(/&lt;\s*\/?\s*space\s*&gt;/gi, "<space>")
    .replace(/\r\n/g, "\n");

  const parts = normalized
    .split(/(?:<\/?space>|<space\s*\/?>|\n{2,}|<br\s*\/?>)/gi)
    .map((s) => s.trim())
    .filter(Boolean);

  if (!parts.length) return null;

  return (
    <div className="space-y-10 md:space-y-8">
      {parts.map((p, i) => (
        <p
          key={i}
          className="font-minion-pro text-[#800000]/90 text-[15px] md:text-[20px] leading-[1.7] text-justify"
        >
          {p}
        </p>
      ))}
    </div>
  );
}

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-all duration-700 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {children}
    </div>
  );
}

/* -------- REUSABLE DETAIL -------- */
export default function DetailCatalog({ item, scope }) {
  // support scope single / array fallback
  const scopes = Array.isArray(scope) ? scope : [scope];
  const t = useTranslations(); // root translator

  let detail = {};
  for (const s of scopes) {
    const d = safeRaw(t, `${s}.details.${item.slug}`, null);
    if (d) {
      detail = d;
      break;
    }
  }

  const description = detail?.description ?? "";
  const specs = detail?.specs ?? {};
  const pictures = detail?.picture ?? null;

  const groups = [
    specs.centerDiamond && {
      title: "CENTRE DIAMOND",
      items: specs.centerDiamond,
    },
    specs.sideDiamond && { title: "SIDE DIAMOND", items: specs.sideDiamond },
    specs.metal && { title: "METAL", items: specs.metal },
  ].filter(Boolean);

  const colCount = groups.length;

  // padding kecil untuk 2 col biar gak terlalu nempel
  const paddingLeft = colCount === 2 ? "md:pl-6" : "md:pl-0";

  // ✅ 3 col: kiri - tengah(auto) - kanan
  const gridCols =
    colCount === 3
      ? "md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]"
      : colCount === 2
      ? "md:grid-cols-2"
      : "md:grid-cols-1";

  const gridGaps =
    colCount === 2
      ? "md:gap-x-28 lg:gap-x-36 xl:gap-x-44"
      : "md:gap-x-16 lg:gap-x-20 xl:gap-x-24";

  // ✅ 3 cols center, 2 cols stretch left-right
  const gridAlign =
    colCount === 2 ? "md:justify-items-stretch" : "md:justify-items-center";

  const gridWrap =
    colCount === 3 ? "md:w-full md:mx-auto" : "md:w-full md:mx-auto";

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-10 sm:px-6">
        {/* TOP */}
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
                <span className="absolute top-0 -left-1/3 h-full w-1/3 bg-white/20 blur-[2px] -skew-x-12 translate-x-[-160%] transition-transform duration-700 ease-out motion-safe:group-hover:translate-x-[360%]" />
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <dl className="grid grid-cols-[max-content_1fr] gap-x-20 gap-y-2 items-start [&_dt]:m-0 [&_dd]:m-0">
              <dt className="font-minion-pro text-[15px] md:text-[20px] tracking-normal text-[#800000]/85">
                Name
              </dt>
              <dd className="font-minion-pro text-[#800000] uppercase tracking-[0.045em] text-[15px] md:text-[20px]">
                {item.name}
              </dd>

              <dt className="font-minion-pro text-[15px] md:text-[20px] tracking-normal text-[#800000]/85">
                Meaning
              </dt>
              <dd>
                <Paragraphs text={description} />
              </dd>
            </dl>
          </div>
        </div>

        {/* DETAIL */}
        <div className="mt-16 md:mt-20">
          <div className="text-center">
            <h2 className="font-minion-pro text-[#D9C293] tracking-widest text-3xl md:text-4xl font-semibold">
              DETAIL
            </h2>
            <div className="mt-5 mx-0 md:mx-6 border-t-[4px] border-[#D9C293]" />
          </div>

          <div
            className={`relative mt-10 md:mt-8 pt-6 grid grid-cols-1
              ${gridCols} ${gridAlign} ${gridWrap} ${gridGaps}
              gap-12 md:gap-y-16`}
          >
            <DottedDividers count={colCount} />

            {groups.map((g, idx) => {
              const isMiddle = colCount === 3 && idx === 1; // SIDE DIAMOND
              return (
                <SpecCol
                  key={idx}
                  title={g.title}
                  items={g.items}
                  className={
                    colCount === 2
                      ? `md:mx-0 md:max-w-none md:w-full ${paddingLeft}`
                      : isMiddle
                      ? "md:justify-self-center"
                      : "md:justify-self-stretch"
                  }
                />
              );
            })}
          </div>
        </div>

        {/* PICTURES (optional) */}
        {pictures && (pictures.left || pictures.right) ? (
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            {pictures.left && (
              <Reveal>
                <div className="group relative w-full aspect-[4/5] overflow-hidden rounded-md bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-500 ease-out motion-safe:hover:shadow-[0_16px_50px_rgba(0,0,0,0.14)]">
                  <Image
                    src={pictures.left.src}
                    alt={pictures.left.alt || `${item.name} left`}
                    fill
                    sizes="(min-width:768px) 50vw, 100vw"
                    className="object-contain transition-transform duration-500 ease-out will-change-transform motion-safe:group-hover:scale-[1.03] motion-safe:group-hover:rotate-[0.25deg]"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 overflow-hidden rounded-md"
                  >
                    <span className="absolute top-0 -left-1/3 h-full w-1/3 bg-white/20 blur-[2px] -skew-x-12 translate-x-[-160%] transition-transform duration-700 ease-out motion-safe:group-hover:translate-x-[360%]" />
                  </span>
                </div>
              </Reveal>
            )}
            {pictures.right && (
              <Reveal delay={120}>
                <div className="group relative w-full aspect-[4/5] overflow-hidden rounded-md bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow duration-500 ease-out motion-safe:hover:shadow-[0_16px_50px_rgba(0,0,0,0.14)]">
                  <Image
                    src={pictures.right.src}
                    alt={pictures.right.alt || `${item.name} right`}
                    fill
                    sizes="(min-width:768px) 50vw, 100vw"
                    className="object-contain transition-transform duration-500 ease-out will-change-transform motion-safe:group-hover:scale-[1.03] motion-safe:group-hover:-rotate-[0.25deg]"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 overflow-hidden rounded-md"
                  >
                    <span className="absolute top-0 -left-1/3 h-full w-1/3 bg-white/20 blur-[2px] -skew-x-12 translate-x-[-160%] transition-transform duration-700 ease-out motion-safe:group-hover:translate-x-[360%]" />
                  </span>
                </div>
              </Reveal>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}
