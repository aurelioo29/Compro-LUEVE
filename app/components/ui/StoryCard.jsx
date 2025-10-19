import React from "react";
import Image from "next/image";

export default function StoryCard({
  item,
  overlayLeft,
  textLeft = true,
  priority,
}) {
  return (
    <article
      className="relative overflow-hidden shadow-lg w-full max-w-[min(100%,637px)] aspect-[3/4] sm:aspect-[4/5] lg:w-[637px] lg:h-[858px] lg:aspect-auto"
      aria-label={`${item.title}${item.step ? ` — ${item.step}` : ""}`}
    >
      {/* Foto */}
      <div className="absolute inset-0">
        <Image
          src={item.imageSrc}
          alt={item.imageAlt || ""}
          fill
          sizes="(min-width:1024px) 637px, 100vw"
          priority={priority}
          className="object-cover"
        />
      </div>

      {/* BLUR setengah sisi (z-0) */}
      <div
        className={[
          "absolute inset-y-0 w-1/2 z-0",
          overlayLeft ? "right-0" : "left-0",
          "backdrop-blur-[7px]",
        ].join(" ")}
      />

      {/* KONTEN di atas blur (z-20) */}
      <div
        className={[
          "absolute inset-y-0 z-20 flex flex-col justify-start gap-2",
          "py-6 sm:py-8 mt-10 md:mt-36",
          textLeft
            ? "right-0 w-1/2 pl-5 sm:pl-7 pr-4 text-left"
            : "left-0 w-1/2 pr-5 sm:pr-7 pl-4 text-right",
        ].join(" ")}
      >
        <div
          className={`flex flex-col ${
            textLeft ? "border-l-4 pl-2" : "border-r-4 pr-2"
          } gap-2 border-[#800000]`}
        >
          <h3 className="font-minion-pro text-[#800000] text-3xl sm:text-2xl md:text-4xl uppercase">
            {item.title}
          </h3>
          {item.step && (
            <span className="font-poppins text-[#CEA660] text-3xl md:text-5xl font-bold text-shadow-lg">
              {item.step}
            </span>
          )}
        </div>

        <p className="mt-2 font-poppins text-sm sm:text-sm md:text-base leading-6 text-[#800000]/90">
          {item.desc}
        </p>
      </div>
    </article>
  );
}
