"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

interface BannerSlide {
  id: number;
  desktopImg: string;
  mobileImg: string;
  alt: string;
}

const SLIDES: BannerSlide[] = [
  {
    id: 1,
    desktopImg: "/images/fpt_banners/banner_1_desktop.jpg",
    mobileImg: "/images/fpt_banners/banner_1_mobile.png",
    alt: "Đăng ký Combo truyền hình FPT - NGOẠI HẠNG 2026",
  },
  {
    id: 2,
    desktopImg: "/images/fpt_banners/banner_2_desktop.webp",
    mobileImg: "/images/fpt_banners/banner_2_mobile.webp",
    alt: "Ưu đãi nâng cấp Combo Internet truyền hình xem Ngoại Hạng Anh",
  },
  {
    id: 3,
    desktopImg: "/images/fpt_banners/banner_3_desktop.jpg",
    mobileImg: "/images/fpt_banners/banner_3_mobile.jpg",
    alt: "Ưu đãi đăng ký gói FPT Play VVIP 12 tháng",
  },
  {
    id: 4,
    desktopImg: "/images/fpt_banners/banner_4_desktop.jpg",
    mobileImg: "/images/fpt_banners/banner_4_mobile.jpg",
    alt: "Ưu đãi khuyến mại giới thiệu bạn bè đăng ký mạng FPT",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { openRegisterModal } = useRegister();

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <div
      className="relative w-full overflow-hidden bg-[#0B1A3D] select-none group md:mb-6"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ASPECT CONTAINER MATCHING FPT.VN (1920x717 on Desktop, 375/236 on Mobile) */}
      <div className="relative w-full max-md:aspect-[375/236] md:h-[460px] lg:h-[540px] xl:h-[620px] 2xl:h-[718px]">
        {SLIDES.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              onClick={() => openRegisterModal()}
              className={`absolute inset-0 cursor-pointer transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* DESKTOP BANNER IMAGE */}
              <div className="hidden md:block absolute inset-0">
                <Image
                  src={slide.desktopImg}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="h-full w-full object-cover"
                  sizes="100vw"
                  quality={95}
                />
              </div>

              {/* MOBILE BANNER IMAGE */}
              <div className="block md:hidden absolute inset-0">
                <Image
                  src={slide.mobileImg}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="h-full w-full object-cover"
                  sizes="100vw"
                  quality={95}
                />
              </div>
            </div>
          );
        })}

        {/* LEFT / RIGHT ARROWS (FPT.VN STYLE) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 size-11 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-xs flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hidden md:flex cursor-pointer"
          aria-label="Previous slide"
        >
          <ChevronLeft className="size-6" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 size-11 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-xs flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hidden md:flex cursor-pointer"
          aria-label="Next slide"
        >
          <ChevronRight className="size-6" />
        </button>

        {/* SLIDE DOTS (AUTHENTIC FPT.VN PILL CONTAINER) */}
        <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5 rounded-full bg-[#252525]/40 px-3 py-1.5 backdrop-blur-xs">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation();
                setCurrent(i);
              }}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                i === current
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
