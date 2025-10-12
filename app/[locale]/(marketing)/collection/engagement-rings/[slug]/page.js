import React from "react";
import { notFound } from "next/navigation";
import { ENGAGEMENT_ITEMS } from "@/app/data/engagement";
import DetailCatalog from "@/app/components/ui/catalog/engagement/DetailCatalog";

export default async function DetailPageCatalog({ params }) {
  const { slug } = await params;

  const item = ENGAGEMENT_ITEMS.find((x) => x.slug === slug);
  if (!item) return notFound();

  return <DetailCatalog item={item} />;
}
