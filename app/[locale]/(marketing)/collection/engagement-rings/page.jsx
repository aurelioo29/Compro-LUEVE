"use client";

import { React, useEffect, useMemo, useState } from "react";
import CatalogHero from "@/app/components/ui/catalog/engagement/CatalogHero";
import ProductGrid from "@/app/components/ui/catalog/engagement/ProductGrid";
import Pagination from "@/app/components/ui/common/Pagination";
import { ENGAGEMENT_HERO, ENGAGEMENT_ITEMS } from "@/app/data/engagement";

const PER_PAGE = 9;

export default function EngagementRingsPage() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(ENGAGEMENT_ITEMS.length / PER_PAGE);
  const pageItems = useMemo(() => {
    const start = (page - 1) * PER_PAGE;
    return ENGAGEMENT_ITEMS.slice(start, start + PER_PAGE);
  }, [page]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  return (
    <section className="pb-36">
      {/* Hero */}
      <CatalogHero
        src={ENGAGEMENT_HERO.src}
        alt={ENGAGEMENT_HERO.alt}
        bleedTop
        height={600}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <h1 className="mt-6 text-center font-poppins text-[#450000] text-2xl md:text-3xl">
          Engagement
        </h1>

        {/* Grid produk */}
        <ProductGrid items={pageItems} />

        {/* Pagination */}
        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </div>
    </section>
  );
}
