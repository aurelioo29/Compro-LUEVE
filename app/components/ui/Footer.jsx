import Image from "next/image";
import React from "react";
import { ClockFading, Mail, Phone } from "lucide-react";
import { Link } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="px-2 sm:px-4 md:px-6 py-6 md:py-8 lg:py-7 border-t-2 border-[#800000]">
      <div
        className="
          mx-auto max-w-7xl
          grid grid-cols-6 md:grid-cols-3 lg:grid-cols-12
          gap-8 sm:gap-12 lg:gap-16
          justify-items-center lg:justify-items-start
          text-center lg:text-left
        "
      >
        {/* 1) BRAND / HOURS / SOCIAL — mobile: col-span-3 (2 kolom) */}
        <div className="col-span-3 md:col-span-1 lg:col-span-3 space-y-4 sm:space-y-6 flex flex-col items-center lg:items-start">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo/lueve-logo.svg"
              alt="LUEVE — Long Lasting Memories"
              width={200}
              height={106}
              priority
              className="w-40 sm:w-48 md:w-[200px] h-auto"
            />
          </Link>

          <section aria-labelledby="opening-hours" className="w-full">
            <h2
              id="opening-hours"
              className="text-2xl sm:text-3xl text-[#800000] font-minion-pro"
            >
              Opening Hours
            </h2>
            <div className="mt-3 sm:mt-4 md:mt-6 flex items-center justify-center lg:justify-start gap-2 sm:gap-3 text-[#800000] font-poppins text-sm sm:text-base">
              <ClockFading className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
              <time dateTime="11:00">11.00</time>
              <span>–</span>
              <time dateTime="18:00">18.00 WIB</time>
            </div>
          </section>

          <ul className="flex items-center justify-center lg:justify-start gap-5 sm:gap-6 pt-1">
            <li>
              <Link
                href="https://www.instagram.com/lueve.official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <span className="sr-only">Instagram</span>
                <span className="relative inline-block w-6 h-6">
                  <Image
                    src="/icons/social-media/instagram.svg"
                    alt=""
                    fill
                    sizes="24px"
                    className="object-contain"
                    unoptimized
                  />
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="http://www.tiktok.com/@lueve.official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <span className="sr-only">TikTok</span>
                <span className="relative inline-block w-6 h-6">
                  <Image
                    src="/icons/social-media/tiktok.svg"
                    alt=""
                    fill
                    sizes="24px"
                    className="object-contain"
                    unoptimized
                  />
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* 2) CONTACT — mobile: col-span-3 (2 kolom) */}
        <address
          className="col-span-3 md:col-span-1 lg:col-span-3 not-italic mt-8 md:mt-0"
          aria-label="Contact Us"
        >
          <h3 className="font-minion-pro text-[#800000] text-2xl sm:text-3xl leading-tight">
            Contact Us
          </h3>

          <ul className="mt-3 md:mt-10 space-y-4 md:space-y-8 text-[#800000] font-poppins text-sm md:text-lg leading-tight">
            <li className="flex items-center justify-center md:justify-start gap-2 md:gap-3">
              <Phone className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
              <Link
                href="https://wa.me/081533780888"
                className="whitespace-nowrap hover:underline underline-offset-4"
              >
                0815 3378 0888
              </Link>
            </li>

            <li className="flex items-center justify-center md:justify-start gap-2 md:gap-3">
              <Mail className="w-4 h-4 md:w-5 md:h-5 shrink-0" />
              <Link
                href="mailto:lueve.official@gmail.com"
                className="truncate max-w-[180px] sm:max-w-none hover:underline underline-offset-4"
                title="lueve.official@gmail.com"
              >
                lueve.official@gmail.com
              </Link>
            </li>
          </ul>
        </address>

        {/* 3) NAVIGATION — mobile: col-span-2 (3 kolom) */}
        <nav
          className="col-span-2 md:col-span-1 lg:col-span-2"
          aria-label="Footer navigation"
        >
          <h3 className="font-minion-pro text-2xl sm:text-3xl text-[#800000]">
            Navigation
          </h3>
          <ul className="mt-4 sm:mt-6 md:mt-8 space-y-4 sm:space-y-6 md:space-y-8 text-[#800000] font-poppins tracking-wider text-base sm:text-lg">
            <li>
              <Link href="/" className="hover:underline underline-offset-4">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/collection"
                className="hover:underline underline-offset-4"
              >
                Our Collection
              </Link>
            </li>
          </ul>
        </nav>

        {/* 4) COMPANY — mobile: col-span-2 (3 kolom) */}
        <nav
          className="col-span-2 md:col-span-1 lg:col-span-2"
          aria-label="Company"
        >
          <h3 className="font-minion-pro text-2xl sm:text-3xl text-[#800000]">
            Company
          </h3>
          <ul className="mt-4 sm:mt-6 md:mt-8 space-y-4 sm:space-y-6 md:space-y-8 text-[#800000] font-poppins tracking-wider text-base sm:text-lg">
            <li>
              <Link
                href="/about"
                className="hover:underline underline-offset-4"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:underline underline-offset-4"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/reviews"
                className="hover:underline underline-offset-4"
              >
                Reviews
              </Link>
            </li>
            <li>
              <Link
                href="/services/custom-ring"
                className="hover:underline underline-offset-4"
              >
                Custom Ring
              </Link>
            </li>
          </ul>
        </nav>

        {/* 5) RESOURCES — mobile: col-span-2 (3 kolom) */}
        <nav
          className="col-span-2 md:col-span-1 lg:col-span-2"
          aria-label="Resources"
        >
          <h3 className="font-minion-pro text-2xl sm:text-3xl text-[#800000]">
            Resources
          </h3>
          <ul className="mt-4 sm:mt-6 md:mt-8 space-y-4 sm:space-y-6 md:space-y-8 text-[#800000] font-poppins tracking-wider text-base sm:text-lg">
            <li>
              <Link
                href="/terms-conditions"
                className="hover:underline underline-offset-4"
              >
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="hover:underline underline-offset-4"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl mt-8 md:mt-12 border-t border-[#800000] pt-4 md:pt-6 text-sm sm:text-base md:text-lg lg:text-xl text-[#800000] text-center font-minion-pro">
        <p>Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
