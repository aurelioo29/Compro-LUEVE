import Image from "next/image";
import React from "react";
import { ClockFading, Mail, Phone } from "lucide-react";
import { Link } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="px-2 sm:px-4 md:px-6 py-6 md:py-8 lg:py-7 border-t-2 border-[#800000]">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 justify-items-center lg:justify-items-start text-center lg:text-left">
        {/* LEFT BRAND / HOURS / SOCIAL */}
        <div className="lg:col-span-3 space-y-4 sm:space-y-6 flex flex-col items-center lg:items-start">
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
              <time dateTime="11:00">11.00 AM</time>
              <span>–</span>
              <time dateTime="18:00">18.00 PM</time>
            </div>
          </section>

          <ul className="flex items-center justify-center lg:justify-start gap-5 sm:gap-6 pt-1">
            <li>
              <Link
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-block"
              >
                <span className="sr-only">Instagram</span>
                <Image
                  src="/icons/social-media/instagram.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-block"
              >
                <span className="sr-only">Facebook</span>
                <Image
                  src="/icons/social-media/facebook.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="inline-block"
              >
                <span className="sr-only">TikTok</span>
                <Image
                  src="/icons/social-media/tiktok.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* NAVIGATION */}
        <nav className="lg:col-span-2" aria-label="Footer navigation">
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

        {/* COMPANY */}
        <nav className="lg:col-span-2" aria-label="Company">
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

        {/* RESOURCES */}
        <nav className="lg:col-span-2" aria-label="Resources">
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

        {/* CONTACT */}
        <address className="lg:col-span-3 not-italic" aria-label="Contact Us">
          <h3 className="font-minion-pro text-2xl sm:text-3xl text-[#800000]">
            Contact Us
          </h3>
          <ul className="mt-4 sm:mt-6 md:mt-8 space-y-4 sm:space-y-6 md:space-y-8 text-[#800000] font-poppins tracking-wider text-base sm:text-lg">
            <li>
              <Link
                href="tel:081533780888"
                className="flex items-center justify-center lg:justify-start gap-3 hover:underline underline-offset-4"
              >
                <Phone className="w-5 h-5 shrink-0" />
                <span>0815 3378 0888</span>
              </Link>
            </li>
            <li>
              <Link
                href="mailto:example@gmail.com"
                className="flex items-center justify-center lg:justify-start gap-3 hover:underline underline-offset-4"
              >
                <Mail className="w-5 h-5 shrink-0" />
                <span>example@gmail.com</span>
              </Link>
            </li>
          </ul>
        </address>
      </div>

      <div className="mx-auto max-w-7xl mt-8 md:mt-12 border-t border-[#800000] pt-4 md:pt-6 text-sm sm:text-base md:text-lg lg:text-xl text-[#800000] text-center font-minion-pro">
        <p>Copyright © {new Date().getFullYear()}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
