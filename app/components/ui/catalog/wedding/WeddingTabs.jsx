"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const WEDDING_TABS = [
  {
    href: "/collection/wedding-rings/constellation-of-love",
    label: "Constellation of Love",
  },
  {
    href: "/collection/wedding-rings/silhouettes-of-earth",
    label: "Silhouette of Earth",
  },
  { href: "/collection/wedding-rings/the-heritage", label: "The Heritage" },
];

export default function WeddingTabs() {
  const pathname = usePathname();

  return (
    <nav className="mx-auto max-w-7xl px-4 sm:px-6">
      <h1 className="mt-19 text-center font-poppins text-[#800000] text-2xl md:text-3xl">
        Wedding
      </h1>

      <ul className="flex flex-wrap justify-evenly my-16 font-poppins text-[#800000]">
        {WEDDING_TABS.map((it) => {
          const active = pathname === it.href;
          return (
            <li key={it.href}>
              <Link
                href={it.href}
                className={`text-base md:text-lg hover:opacity-80 transition-opacity ${
                  active ? "font-semibold underline-offset-4 decoration-2" : ""
                }`}
              >
                {it.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
