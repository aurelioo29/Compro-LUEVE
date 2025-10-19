import React from "react";
import { notFound } from "next/navigation";
import { ENGAGEMENT_ITEMS } from "@/app/data/engagement";
import DetailCatalog from "@/app/components/ui/catalog/engagement/DetailCatalog";

// ==== WAJIB untuk static export: daftar semua slug ====
export function generateStaticParams({ params }) {
  // Next bakal manggil ini per-locale (karena di [locale]/layout udah ada generateStaticParams)
  const slugs = ENGAGEMENT_ITEMS.map((x) => x.slug);
  return slugs.map((slug) => ({ slug }));
}

// Kunci biar gak ada path dadakan waktu runtime
export const dynamicParams = false;
export const dynamic = "error";
export const revalidate = false;

export default function DetailPageCatalog({ params: { slug } }) {
  const item = ENGAGEMENT_ITEMS.find((x) => x.slug === slug);
  if (!item) return notFound();
  return <DetailCatalog item={item} />;
}
