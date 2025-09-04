"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/lib/navigation";

export default function Navbar() {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const pathname = usePathname();
  const other = locale === "en" ? "id" : "en";

  const [open, setOpen] = useState(false);
  const [openCollection, setOpenCollection] = useState(false);
  const [openServices, setOpenServices] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-0 md:px-20">
      {/* ================= BACKDROP ================= */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-white/55 backdrop-blur-md border-b border-black/10 shadow-sm [mask-image:linear-gradient(to_bottom,black,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)]"></div>

      {/* ================= DESKTOP ================= */}
      <nav className="hidden md:flex items-center justify-between px-6 py-8 gap-20 relative z-10">
        <Link href={"/"} locale={locale}>
          <Image
            src="/images/logo/lueve-logo.svg"
            alt="Lueve"
            width={120}
            height={64}
            priority
          />
        </Link>

        {/* Menu */}
        <ul className="flex items-center gap-14 text-[#450000] font-poppins font-medium text-2xl tracking-[0.1em]">
          {/* About */}
          <li>
            <Link
              href="/about"
              locale={locale}
              className="hover:opacity-70 transition-opacity uppercase hover:font-semibold"
            >
              {t("about")}
            </Link>
          </li>

          {/* Collection (MEGA MENU) */}
          <li className="relative group">
            <Link
              href="/collection"
              locale={locale}
              className="hover:opacity-70 transition-opacity uppercase hover:font-semibold"
            >
              {t("collection")}
            </Link>

            {/* panel */}
            <div
              className="
                invisible opacity-0 translate-y-1
                group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0
                absolute left-[80%] -translate-x-1/2 mt-4 w-[150px] md:w-[225px]
                z-50 rounded-lg bg-[#450000] text-[#E0C698]
                shadow-xl backdrop-blur transition-all duration-150
                font-futura-dee
              "
              role="menu"
              aria-label="Collection menu"
            >
              <div className="p-3">
                <Link className="text-3xl mb-6 font-futura-dee tracking-wide hover:bg-[#450000]/80">
                  Engagement Ring
                </Link>
                <div className="h-[2px] w-full bg-white my-3" />

                <Link className="text-3xl font-futura-dee tracking-wide hover:bg-[#450000]/80">
                  Wedding Ring
                </Link>

                <ul className="space-y-3 tracking-wide text-2xl text-white pl-2 mt-3">
                  <li>
                    <Link
                      href="/collection/silhouettes-of-earth"
                      locale={locale}
                      className="block hover:underline underline-offset-4"
                      role="menuitem"
                    >
                      Silhouettes of Earth
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collection/constellation-of-love"
                      locale={locale}
                      className="block hover:underline underline-offset-4"
                      role="menuitem"
                    >
                      Constellation of Love
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/collection/the-heritage"
                      locale={locale}
                      className="block hover:underline underline-offset-4"
                      role="menuitem"
                    >
                      The Heritage
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          {/* Services (DROPDOWN KECIL) */}
          <li className="relative group">
            <Link
              href="/services"
              locale={locale}
              className="hover:opacity-70 transition-opacity uppercase hover:font-semibold"
            >
              {t("services")}
            </Link>

            <div
              className="
                invisible opacity-0 translate-y-1
                group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0
                absolute left-[70%] -translate-x-1/2 mt-4 w-[150px] md:w-[150px]
                z-50 rounded-lg bg-[#450000] text-[#E0C698]
                shadow-xl backdrop-blur transition-all duration-150
                font-futura-dee
              "
              role="menu"
              aria-label="Services menu"
            >
              <ul className="px-4 py-3">
                <li>
                  <Link
                    href="/services/custom-ring"
                    locale={locale}
                    className="block text-2xl tracking-wide rounded-md hover:bg-[#450000]/80"
                    role="menuitem"
                  >
                    Custom Ring
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        {/* Language toggle + Search */}
        <div className="flex items-center gap-4">
          <Link
            href={pathname || "/"}
            locale={other}
            prefetch={false}
            className="group inline-flex items-center gap-3 rounded-full px-3.5 py-1 bg-[#450000] text-[#CEA66D] shadow-sm font-poppins"
          >
            <span className="text-md font-semibold">
              {other === "en" ? t("lang.en") : t("lang.id")}
            </span>
            <span className="relative w-[30px] h-[30px] overflow-hidden">
              <Image
                src={
                  other === "en"
                    ? "/icons/flags/en-US.svg"
                    : "/icons/flags/id-ID.svg"
                }
                alt={other === "en" ? "English" : "Indonesian"}
                fill
                sizes="30px"
                className="object-cover"
              />
            </span>
          </Link>

          <button
            type="button"
            aria-label="Search"
            className="p-2 rounded-full hover:bg-black/5 transition-colors cursor-crosshair"
          >
            <Search className="w-5 h-5 text-[#450000]" />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE / TABLET ================= */}
      <nav className="md:hidden px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={"/"} locale={locale} className="shrink-0">
            <Image
              src="/images/logo/lueve-logo.svg"
              alt="Lueve"
              width={110}
              height={56}
              priority
            />
          </Link>

          <div className="flex items-center gap-2">
            {/* Language toggle (kecil) */}
            <Link
              href={pathname || "/"}
              locale={other}
              prefetch={false}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 bg-[#450000] text-[#CEA66D]"
            >
              <span className="text-xs font-semibold font-poppins">
                {other === "en" ? t("lang.en") : t("lang.id")}
              </span>
              <span className="relative w-[25px] h-[25px] overflow-hidden">
                <Image
                  src={
                    other === "en"
                      ? "/icons/flags/en-US.svg"
                      : "/icons/flags/id-ID.svg"
                  }
                  alt={other === "en" ? "English" : "Indonesian"}
                  fill
                  sizes="22px"
                  className="object-cover"
                />
              </span>
            </Link>

            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className="p-2 rounded-full hover:bg-black/5 active:bg-black/10"
            >
              <Search className="w-5 h-5 text-[#450000]" />
            </button>

            {/* Hamburger */}
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md hover:bg-black/5 active:bg-black/10 cursor-pointer"
            >
              {open ? (
                <X className="w-6 h-6 text-[#450000]" />
              ) : (
                <Menu className="w-6 h-6 text-[#450000]" />
              )}
            </button>
          </div>
        </div>

        {/* Panel slide down */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-[max-height,opacity] duration-200 ${
            open ? "max-h-[60vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-6 rounded-xl bg-[#450000] text-[#E0C698] shadow-lg">
            <ul className="divide-y divide-[#CEA66D]/20">
              {/* About */}
              <li>
                <Link
                  href="/about"
                  locale={locale}
                  className="block px-4 py-3 uppercase tracking-widest font-poppins text-lg font-medium hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {t("about")}
                </Link>
              </li>

              {/* Collection (collapsible) */}
              <li>
                {/* Baris header: LINK + TOGGLE */}
                <div className="w-full px-4 py-3 flex items-center justify-between uppercase tracking-widest font-poppins text-lg font-medium">
                  {/* klik label = navigate ke /collection */}
                  <Link
                    href="/collection"
                    locale={locale}
                    className="block pr-3 hover:opacity-80"
                    onClick={() => setOpen(false)}
                  >
                    {t("collection")}
                  </Link>

                  {/* klik chevron = toggle submenu */}
                  <button
                    type="button"
                    aria-expanded={openCollection}
                    aria-controls="collection-submenu"
                    onClick={() => setOpenCollection((s) => !s)}
                    className="p-2 rounded-md hover:bg-white/5 active:bg-white/10 cursor-pointer"
                    aria-label={
                      openCollection
                        ? "Collapse collection"
                        : "Expand collection"
                    }
                  >
                    {openCollection ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Panel submenu */}
                <div
                  id="collection-submenu"
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ${
                    openCollection
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-3 space-y-5 text-[#E0C698] font-futura-dee">
                      <Link
                        href={"/"}
                        className="px-1 pt-2 opacity-90 tracking-wider text-xl"
                      >
                        Engagement Ring
                      </Link>
                      <div className="h-px my-3 bg-white" />
                      <Link className="px-1 opacity-90 tracking-wider text-xl">
                        Wedding Ring
                      </Link>

                      <ul className="mt-2 space-y-2 text-[19px] normal-case tracking-normal pl-2">
                        <li>
                          <Link
                            href="/collection/silhouettes-of-earth"
                            locale={locale}
                            className="block px-1 py-1 rounded text-white hover:underline"
                            onClick={() => setOpen(false)}
                          >
                            Silhouettes of Earth
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/collection/constellation-of-love"
                            locale={locale}
                            className="block px-1 py-1 rounded text-white hover:underline"
                            onClick={() => setOpen(false)}
                          >
                            Constellation of Love
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/collection/the-heritage"
                            locale={locale}
                            className="block px-1 py-1 rounded text-white hover:underline"
                            onClick={() => setOpen(false)}
                          >
                            The Heritage
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              {/* Services (collapsible) */}
              <li>
                {/* Baris header: LINK + TOGGLE */}
                <div className="w-full px-4 py-3 flex items-center justify-between uppercase tracking-widest font-poppins text-lg font-medium">
                  {/* klik label = navigate ke /services */}
                  <Link
                    href="/services"
                    locale={locale}
                    className="block pr-3 hover:opacity-80"
                    onClick={() => setOpen(false)} // tutup panel setelah pindah halaman
                  >
                    {t("services")}
                  </Link>

                  {/* klik chevron = toggle submenu */}
                  <button
                    type="button"
                    aria-expanded={openServices}
                    aria-controls="services-submenu"
                    onClick={() => setOpenServices((s) => !s)}
                    className="p-2 rounded-md hover:bg-white/5 active:bg-white/10 cursor-pointer"
                    aria-label={
                      openServices ? "Collapse services" : "Expand services"
                    }
                  >
                    {openServices ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Panel submenu */}
                <div
                  id="services-submenu"
                  className={`grid transition-[grid-template-rows,opacity] duration-200 ${
                    openServices
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="px-4 pb-3 space-y-2 text-[15px] normal-case tracking-normal">
                      <li>
                        <Link
                          href="/services/custom-ring"
                          locale={locale}
                          className="block px-1 py-1 rounded font-futura-dee tracking-wider text-xl"
                          onClick={() => setOpen(false)}
                        >
                          Custom Ring
                        </Link>
                      </li>
                      {/* Tambah item lain di sini kalau perlu */}
                    </ul>
                  </div>
                </div>
              </li>
            </ul>

            {/* footer kecil panel (opsional) */}
            <div className="px-4 py-3 flex items-center justify-center font-poppins">
              <span className="text-xs opacity-70">
                © LUEVE {new Date().getFullYear()}. All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
