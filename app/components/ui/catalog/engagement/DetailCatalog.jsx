"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

function safeRaw(t, key, fallback) {
  try {
    return t.raw(key);
  } catch {
    return fallback;
  }
}

export default function DetailCatalog({ item, extra }) {
  const t = useTranslations("engagement.details");

  const detail = safeRaw(t, item.slug, {});
  const description = detail?.description ?? "";
  const models = Array.isArray(detail?.models) ? detail.models : [];

  const bottomImg = detail?.bottomImg || extra?.longImage || "";

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Kiri: gambar utama */}
        <div className="lg:col-span-6">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl shadow">
            <Image
              src={item.image}
              alt={item.alt || item.name}
              fill
              sizes="(min-width:1024px) 560px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Kanan: judul, deskripsi, model */}
        <div className="lg:col-span-6">
          <h1 className="font-minion-pro text-[#450000] text-3xl md:text-5xl">
            {item.name}
          </h1>

          {description && (
            <p className="mt-4 font-poppins text-[#450000]/90 leading-7">
              {description}
            </p>
          )}

          {models.length > 0 && (
            <div className="mt-6">
              <h2 className="font-minion-pro text-[#450000] text-2xl">Model</h2>
              <ul className="mt-3 space-y-2 font-poppins text-[#450000]">
                {models.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Gambar lebar di bawah (opsional) */}
      {bottomImg && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-12">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl shadow">
            <Image
              src={bottomImg}
              alt={`${item.name}-bottom-image`}
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
