"use client";

import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { useRegisterModal } from "@/context/RegisterContext";

export default function Wifi7HeroBanner() {
  const { openModal } = useRegisterModal();

  return (
    <div className="relative w-full overflow-hidden bg-slate-950">
      <div className="relative w-full aspect-[375/732] md:aspect-[1920/774] max-h-[640px]">
        <picture className="w-full h-full block">
          <source media="(max-width: 768px)" srcSet="/images/wifi-7/banner_wifi7_mobile.webp" />
          <img
            src="/images/wifi-7/banner_wifi7_desktop.webp"
            alt="FPT SpeedX Wi-Fi 7 XGSPON"
            className="w-full h-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
        </picture>

        {/* Hero Overlay CTA */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end pb-8 md:pb-14 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold mb-2 border border-cyan-500/30 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Tiên Phong Công Nghệ Wi-Fi 7</span>
              </span>
              <h1 className="text-2xl md:text-4xl font-black text-white tracking-tight drop-shadow-md">
                FPT SpeedX – Kỷ Nguyên Wi-Fi 7 XGSPON
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => openModal({ title: "Đăng ký gói FPT SpeedX Wi-Fi 7", category: "wifi7" })}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-xs md:text-sm shadow-xl shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>Đăng ký trải nghiệm</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
