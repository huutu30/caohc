"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

interface BannerSlide {
  id: number;
  desktopImg: string;
  mobileImg: string;
  title: string;
  subtitle: string;
  tag: string;
  ctaText: string;
}

const SLIDES: BannerSlide[] = [
  {
    id: 1,
    desktopImg: "/images/banner_1_desktop.webp",
    mobileImg: "/images/banner_1_mobile.webp",
    title: "Internet FPT Chuẩn Wi-Fi 6 Siêu Tốc",
    subtitle: "Tốc độ Download lên đến 1Gbps - Bàn giao thiết bị trong 24 giờ",
    tag: "Khuyến mãi nóng",
    ctaText: "Đăng ký nhận ưu đãi",
  },
  {
    id: 2,
    desktopImg: "/images/banner_2_desktop.webp",
    mobileImg: "/images/banner_2_mobile.webp",
    title: "Combo Internet + FPT Play Trọn Vẹn",
    subtitle: "Bản quyền trọn vẹn giải Ngoại Hạng Anh & Cúp C1 UEFA",
    tag: "Thể thao đỉnh cao",
    ctaText: "Trải nghiệm ngay",
  },
  {
    id: 3,
    desktopImg: "/images/banner_3_desktop.webp",
    mobileImg: "/images/banner_3_mobile.webp",
    title: "Gói Cước F-Game Ultra Fast Dành Cho Game Thủ",
    subtitle: "Tối ưu hóa Ping và giảm giật lag với hơn 50+ tựa game hot",
    tag: "Công nghệ độc quyền",
    ctaText: "Xem gói F-Game",
  },
  {
    id: 4,
    desktopImg: "/images/banner_4_desktop.webp",
    mobileImg: "/images/banner_4_mobile.webp",
    title: "FPT Camera AI Lưu Trữ Đám Mây An Toàn",
    subtitle: "Cảnh báo chuyển động thông minh, lưu trữ bảo mật Cloud tại Việt Nam",
    tag: "An tâm gia đình",
    ctaText: "Khám phá Camera",
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
      className="relative w-full overflow-hidden bg-slate-900 group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* BANNER ASPECT RATIO CONTAINER: 1920x717 Desktop (~2.67:1), Mobile (~1.25:1) */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[2.35/1] lg:aspect-[1920/717] min-h-[360px] sm:min-h-[460px] max-h-[640px]">
        {SLIDES.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              {/* DESKTOP BANNER IMAGE */}
              <div className="hidden sm:block absolute inset-0">
                <Image
                  src={slide.desktopImg}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                  quality={90}
                />
              </div>

              {/* MOBILE BANNER IMAGE */}
              <div className="block sm:hidden absolute inset-0">
                <Image
                  src={slide.mobileImg}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="100vw"
                  quality={90}
                />
              </div>

              {/* SUBTLE GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:bg-gradient-to-r sm:from-black/70 sm:via-black/20 sm:to-transparent" />

              {/* FLOATING TEXT CONTENT & FAST ACTION */}
              <div className="absolute inset-0 max-w-7xl mx-auto px-6 sm:px-12 flex flex-col justify-end sm:justify-center pb-12 sm:pb-0 z-20">
                <div className="max-w-xl text-white">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#f57020] text-white text-[11px] font-black uppercase tracking-wider mb-2.5 shadow-md">
                    <Sparkles className="h-3 w-3" />
                    <span>{slide.tag}</span>
                  </span>
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white drop-shadow-md">
                    {slide.title}
                  </h1>
                  <p className="mt-2 text-xs sm:text-base text-slate-200 line-clamp-2 max-w-lg drop-shadow">
                    {slide.subtitle}
                  </p>

                  <div className="mt-4 sm:mt-6 flex items-center space-x-3">
                    <button
                      onClick={() => openRegisterModal()}
                      className="bg-[#f57020] hover:bg-[#e05e10] text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all active:scale-95 flex items-center space-x-2"
                    >
                      <span>{slide.ctaText}</span>
                    </button>
                    <a
                      href="#goi-cuoc"
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-5 py-3 rounded-full font-semibold text-xs sm:text-sm transition-all border border-white/30"
                    >
                      Bảng giá cước
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* LEFT / RIGHT ARROWS */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 hidden sm:block"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* BOTTOM DOT INDICATORS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-8 h-2.5 bg-[#f57020]"
                  : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
