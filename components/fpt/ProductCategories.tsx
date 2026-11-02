"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      title: "Internet Cá Nhân",
      image: "/images/product-internet-personal.png",
      href: "/internet/ca-nhan",
    },
    {
      title: "Internet Gia Đình",
      image: "/images/product-internet-family.png",
      href: "/internet/gia-dinh",
    },
    {
      title: "Internet Game Thủ",
      image: "/images/product-internet-gamethu.png",
      href: "/internet/game-thu",
    },
    {
      title: "Giải Trí Ngoại Hạng Anh",
      image: "/images/product-tv-entertainment.png",
      href: "/ngoai-hang-anh",
    },
    {
      title: "FPT Camera",
      image: "/images/product-camera.png",
      href: "/camera",
    },
  ];

  const handleScroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = dir === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-[1440px] max-w-[calc(100%-24px)] sm:max-w-[calc(100%-32px)] mx-auto mt-4 mb-8 md:mt-6 md:mb-10 md:rounded-2xl md:bg-white md:py-8 md:px-6 shadow-xs border border-slate-100">
      <div className="flex items-center justify-between mb-3 sm:mb-6 px-1">
        <h2 className="text-xl sm:text-[26px] md:text-[28px] font-bold text-slate-900 tracking-tight">
          Danh mục sản phẩm đa dạng
        </h2>
        {/* Nút lướt nhẹ trên màn hình tablet/desktop nếu cần */}
        <div className="hidden sm:flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Lướt sang trái"
            className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#004a9c] flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Lướt sang phải"
            className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#004a9c] flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* DANH MỤC: TRƯỢT NGANG TRÊN MOBILE - LƯỚI 5 CỘT TRÊN DESKTOP */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-3 sm:gap-4 pb-3 pt-1 -mx-2 px-2 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-5 no-scrollbar scroll-smooth"
      >
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            href={cat.href}
            className="w-[160px] sm:w-auto shrink-0 sm:shrink snap-start group relative overflow-hidden rounded-2xl border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col items-center"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 640px) 160px, (max-width: 1024px) 20vw, 250px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
