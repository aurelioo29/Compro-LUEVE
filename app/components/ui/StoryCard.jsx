import React from "react";
import Image from "next/image";

export default function StoryCard({
  item,
  overlayLeft,
  textLeft = true,
  priority,
  // AOS props (opsional—datang dari parent)
  contentAos = "fade-up",
  contentDelay = 0,
  imgAos = "fade",
  imgDelay = 0,
  titleDelay = 0,
  stepDelay = 0,
  descDelay = 0,
}) {
  return (
    <article
      className="
        relative overflow-hidden shadow-lg
        w-full max-w-[min(100%,637px)]
        min-h-[68svh] sm:min-h-[60svh]
        lg:w-[637px] lg:min-h-[858px]
        hover:brightness-[1.02] transition-[filter,transform] duration-300
      "
      aria-label={`${item.title}${item.step ? ` — ${item.step}` : ""}`}
    >
      {/* Foto (fill parent yang auto-height) */}
      <div
        className="absolute inset-0 -z-10"
        data-aos={imgAos}
        data-aos-delay={imgDelay}
      >
        <Image
          src={item.imageSrc}
          alt={item.imageAlt || ""}
          fill
          sizes="(min-width:1024px) 637px, 100vw"
          priority={priority}
          className="object-cover"
        />
      </div>

      {/* BLUR setengah sisi */}
      <div
        className={[
          "absolute inset-y-0 w-1/2 z-0",
          overlayLeft ? "right-0" : "left-0",
          "backdrop-blur-[7px]",
        ].join(" ")}
        aria-hidden
      />

      {/* Gradient bawah halus (bantu kontras teks) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/70 to-transparent z-10"
        aria-hidden
      />

      {/* KONTEN */}
      <div
        className={[
          "relative z-20 flex flex-col justify-start gap-2",
          "py-6 sm:py-8 mt-10 md:mt-24",
          textLeft
            ? "ml-auto w-1/2 pl-5 sm:pl-7 pr-4 text-left"
            : "mr-auto w-1/2 pr-5 sm:pr-7 pl-4 text-right",
        ].join(" ")}
        data-aos={contentAos}
        data-aos-delay={contentDelay}
      >
        {/* Title + Step (stagger kecil via delay berbeda) */}
        <div
          className={`flex flex-col ${
            textLeft ? "border-l-4 pl-2" : "border-r-4 pr-2"
          } gap-2 border-[#800000]`}
          data-aos="fade-up"
          data-aos-delay={titleDelay}
        >
          <h3 className="font-minion-pro text-[#800000] text-3xl sm:text-2xl md:text-4xl uppercase">
            {item.title}
          </h3>

          {item.step && (
            <span
              className="font-poppins text-[#CEA660] text-3xl md:text-5xl font-bold text-shadow-lg"
              data-aos="fade-up"
              data-aos-delay={stepDelay}
            >
              {item.step}
            </span>
          )}
        </div>

        {/* Deskripsi */}
        <p
          className="mt-2 font-poppins text-sm sm:text-sm md:text-base leading-6 text-[#800000]/90"
          data-aos="fade-up"
          data-aos-delay={descDelay}
        >
          {item.desc}
        </p>
      </div>
    </article>
  );
}
