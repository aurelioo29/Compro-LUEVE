import React from "react";
import { notFound } from "next/navigation";
import { ENGAGEMENT_ITEMS, EXTRA_DETAILS } from "@/app/data/engagement";
import DetailCatalog from "@/app/components/ui/catalog/engagement/DetailCatalog";

export default async function DetailPageCatalog({ params }) {
  const { slug } = await params;

  const item = ENGAGEMENT_ITEMS.find((x) => x.slug === slug);
  if (!item) return notFound();

  const extra = EXTRA_DETAILS[slug] ?? {};
  return <DetailCatalog item={item} extra={extra} />;
}
