"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SlideData {
  id: number;
  tag: string;
  headline: string;
  highlightText: string;
  subHeadline: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  image: string;
  badge: string;
}

const SLIDES: SlideData[] = [
  {
    id: 1,
    tag: "INTERNET HỘ GIA ĐÌNH",
    headline: "Internet Siêu Tốc Chuẩn WiFi 6",
    highlightText: "Giải Trí Không Giới Hạn",
    subHeadline:
      "Tốc độ bứt phá lên đến 1Gbps, xem phim 4K mượt mà trên nhiều thiết bị cùng lúc. Trang bị miễn phí modem WiFi 6 băng tần kép thế hệ mới.",
    ctaText: "Đăng ký lắp đặt ngay",
    ctaLink: "/dang-ky",
    secondaryCtaText: "Xem các gói cước",
    secondaryCtaLink: "/goi-cuoc/internet",
    image: "/images/banner_1_desktop.webp",
    badge: "Tặng đến 2 tháng cước sử dụng",
  },
  {
    id: 2,
    tag: "ĐỘC QUYỀN GAME THỦ & STREAMER",
    headline: "Tối Ưu Ping Cực Đại",
    highlightText: "Tự Tin Bứt Phá Mọi Bậc Rank",
    subHeadline:
      "Tích hợp tính năng Ultra Fast nhận diện 50+ tựa game eSports hàng đầu thế giới. Băng thông ưu tiên giúp chống giật lag, rớt gói tuyệt đối.",
    ctaText: "Trải nghiệm gói F-Game",
    ctaLink: "/goi-cuoc/internet",
    secondaryCtaText: "Tư vấn miễn phí",
    secondaryCtaLink: "/dang-ky",
    image: "/images/banner_3_desktop.webp",
    badge: "Ping chỉ từ 4ms - Chống Packet Loss",
  },
  {
    id: 3,
    tag: "GIẢI PHÁP DOANH NGHIỆP B2B",
    headline: "Đường Truyền Doanh Nghiệp 1Gbps",
    highlightText: "Ổn Định Tuyệt Đối Với IP Tĩnh",
    subHeadline:
      "Cam kết băng thông quốc tế chuẩn SLA 99.9%. Tặng kèm địa chỉ IP Tĩnh và thiết bị Gateway chịu tải hàng trăm nhân sự làm việc liên tục.",
    ctaText: "Nhận báo giá doanh nghiệp",
    ctaLink: "/dang-ky",
    secondaryCtaText: "Chi tiết gói Super Biz",
    secondaryCtaLink: "/goi-cuoc/internet",
    image: "/images/banner_2_desktop.webp",
    badge: "Hỗ trợ kỹ thuật 24/7/365 ưu tiên",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  // Auto play carousel every 6 seconds
  React.useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const slide = SLIDES[currentSlide];

  return (
    <section
      className="relative w-full bg-slate-950 overflow-hidden text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[580px] lg:min-h-[640px] flex items-center">
        {/* BACKGROUND IMAGE WITH SMOOTH FADE */}
        {SLIDES.map((s, index) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={s.image}
              alt={s.headline}
              fill
              priority={index === 0}
              className="object-cover object-center lg:object-right"
              sizes="100vw"
            />
            {/* GRADIENT OVERLAYS FOR HIGH CONTRAST READABILITY */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent lg:w-3/4" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent md:hidden" />
          </div>
        ))}

        {/* CONTENT OVERLAY */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 w-full">
          <div className="max-w-2xl">
            {/* BADGE */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-brand-blue/80 border border-blue-400/30 text-blue-200 text-xs sm:text-sm font-semibold mb-5 backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-300">
              <Zap className="h-4 w-4 text-amber-400" />
              <span>{slide.tag}</span>
              <span className="text-blue-300">•</span>
              <span className="text-amber-300 font-bold">{slide.badge}</span>
            </div>

            {/* HEADLINE */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-white">
              {slide.headline} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-brand-orange to-orange-500">
                {slide.highlightText}
              </span>
            </h1>

            {/* SUBHEADLINE */}
            <p className="mt-5 text-sm sm:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              {slide.subHeadline}
            </p>

            {/* TRUST BULLETS */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center">
                <ShieldCheck className="h-4 w-4 text-emerald-400 mr-1.5" />
                Miễn phí Modem WiFi 6
              </span>
              <span className="flex items-center">
                <ShieldCheck className="h-4 w-4 text-emerald-400 mr-1.5" />
                Lắp đặt nhanh trong 24h
              </span>
              <span className="flex items-center">
                <ShieldCheck className="h-4 w-4 text-emerald-400 mr-1.5" />
                Hỗ trợ kỹ thuật 24/7
              </span>
            </div>

            {/* CTA BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link href={slide.ctaLink}>
                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto font-bold text-base shadow-cta hover:scale-105 transition-transform"
                >
                  {slide.ctaText}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link href={slide.secondaryCtaLink}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm"
                >
                  {slide.secondaryCtaText}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* NAVIGATION ARROWS */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-11 w-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center border border-white/10 backdrop-blur-sm transition-all hidden md:flex"
          aria-label="Slide trước"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 h-11 w-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center border border-white/10 backdrop-blur-sm transition-all hidden md:flex"
          aria-label="Slide tiếp theo"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* PAGINATION DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-brand-orange"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Đi tới slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
