import React from "react";
import { notFound } from "next/navigation";
import { SOE_ITEMS } from "@/app/data/wedding";
import DetailCatalog from "@/app/components/ui/catalog/wedding/DetailCatalog";

export default async function DetailSOEPageCatalog({ params }) {
  const { slug } = await params;

  const item = SOE_ITEMS.find((x) => x.slug === slug);
  if (!item) return notFound();

  return <DetailCatalog item={item} scope="soe" />;
}
