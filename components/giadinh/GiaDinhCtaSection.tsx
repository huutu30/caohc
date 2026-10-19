"use client";

import React from "react";
import { PhoneCall, ShieldCheck, Clock, Gift, Sparkles } from "lucide-react";
import { useRegisterModal } from "@/context/RegisterContext";

export default function GiaDinhCtaSection() {
  const { openModal } = useRegisterModal();

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-semibold mb-3 border border-white/15">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Khuyến Mại Hòa Mạng Mới Hôm Nay</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Đăng ký ngay gói mạng Wi-Fi 6 FPT cho gia đình bạn
            </h2>
            <p className="mt-3 text-sm md:text-base text-blue-100 leading-relaxed">
              Trang bị miễn phí trọn bộ Modem Wi-Fi 6 chuẩn AX + Thiết bị Mesh mở rộng sóng, tặng thêm cước sử dụng khi hòa mạng trực tuyến.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs md:text-sm text-blue-100">
              <div className="flex items-center gap-1.5">
                <Gift className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Trang bị Modem Wi-Fi 6 miễn phí</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bảo mật F-Safe bảo vệ con nhỏ</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-300 shrink-0" />
                <span>Bàn giao thiết bị chu đáo</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => openModal({ title: "Đăng ký mạng Internet gia đình", category: "internet_gia_dinh" })}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 active:scale-95 text-white font-extrabold text-sm md:text-base shadow-xl shadow-orange-500/25 transition-all text-center"
            >
              Đăng ký hòa mạng ngay
            </button>
            <a
              href="tel:0775780962"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 text-white font-bold text-sm md:text-base transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Hotline: 0775 780 962</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
