"use client";

import React from "react";
import { PhoneCall, Wifi, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { useRegisterModal } from "@/context/RegisterContext";

export default function AccessPointCtaSection() {
  const { openModal } = useRegisterModal();

  return (
    <section className="py-14 md:py-20 bg-gradient-to-r from-orange-600 via-orange-700 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-200 text-xs font-semibold mb-3 border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Phủ Sóng Wi-Fi Toàn Diện</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Sở Hữu Thiết Bị Access Point Wi-Fi 6 Chính Hãng FPT
            </h2>
            <p className="mt-3 text-sm md:text-base text-orange-100 leading-relaxed">
              Giải pháp mở rộng sóng mượt mà cho mọi ngôi nhà. Hỗ trợ bàn giao thiết bị và hướng dẫn kết nối tận nơi chu đáo trên toàn quốc.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs md:text-sm text-orange-100">
              <div className="flex items-center gap-1.5">
                <Wifi className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Wi-Fi 6 tốc độ đến 3.000 Mbps</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                <span>Bảo hành chính hãng 1 đổi 1</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-200 shrink-0" />
                <span>Bàn giao kết nối nhanh 24H</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() =>
                openModal({
                  title: "Đăng ký thiết bị Access Point Wi-Fi 6",
                  category: "thiet_bi",
                })
              }
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 active:scale-95 text-white font-extrabold text-sm md:text-base shadow-xl transition-all text-center cursor-pointer"
            >
              Đăng ký mua thiết bị
            </button>
            <a
              href="tel:0775780962"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 text-white font-bold text-sm md:text-base transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-300" />
              <span>Hotline: 0775 780 962</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
