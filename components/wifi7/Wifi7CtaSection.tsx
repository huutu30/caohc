"use client";

import React from "react";
import { PhoneCall, Zap, ShieldCheck, Clock, Sparkles } from "lucide-react";
import { useRegisterModal } from "@/context/RegisterContext";

export default function Wifi7CtaSection() {
  const { openModal } = useRegisterModal();

  return (
    <section className="py-14 md:py-20 bg-gradient-to-r from-blue-950 via-slate-900 to-cyan-950 text-white relative overflow-hidden border-t border-cyan-500/20">
      {/* Glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 backdrop-blur-md text-cyan-400 text-xs font-semibold mb-3 border border-cyan-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tiên Phong Công Nghệ Wi-Fi 7</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Sẵn Sàng Bứt Phá Giới Hạn Tốc Độ Cùng Wi-Fi 7 XGSPON
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed">
              Trang bị Modem Wi-Fi 7 XGSPON thế hệ mới nhất, băng thông đối xứng lên đến 10 Gbps, phục vụ trọn vẹn mọi tác vụ eSports, livestream 8K và hạ tầng văn phòng số.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs md:text-sm text-slate-300">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Băng thông đối xứng đến 10 Gbps</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Modem Wi-Fi 7 XGSPON chính hãng</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Bàn giao kết nối nhanh 24H</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => openModal({ title: "Đăng ký gói mạng Wi-Fi 7 XGSPON", category: "wifi_7" })}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:scale-95 text-white font-extrabold text-sm md:text-base shadow-xl shadow-cyan-500/25 transition-all text-center"
            >
              Đăng ký Wi-Fi 7 ngay
            </button>
            <a
              href="tel:0775780962"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 text-white font-bold text-sm md:text-base transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>Hotline: 0775 780 962</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
