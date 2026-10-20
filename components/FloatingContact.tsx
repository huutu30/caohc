"use client";

import * as React from "react";
import { Phone, ArrowUp } from "lucide-react";

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside
      aria-label="Liên hệ nhanh"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 pointer-events-auto"
    >
      {/* NÚT CUỘN LÊN ĐẦU TRANG */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white text-slate-700 shadow-md border border-slate-200 flex items-center justify-center hover:bg-slate-50 hover:text-[#004a9c] transition-all cursor-pointer mb-1"
          aria-label="Cuộn lên đầu trang"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* NÚT ZALO CHAT - KÍCH THƯỚC CHUẨN 48px MOBILE, 56px DESKTOP */}
      <a
        href="https://zalo.me/0784930338"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#0055d4] via-[#0068ff] to-[#1a8cff] text-white shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white cursor-pointer"
        aria-label="Chat qua Zalo 0784 930 338"
      >
        {/* Tooltip on Desktop */}
        <span className="absolute -left-36 bg-slate-900/95 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap hidden sm:block border border-white/10">
          Chat Zalo: 0784 930 338
        </span>

        {/* Zalo Text Icon */}
        <span className="font-black text-xs sm:text-sm tracking-tight leading-none select-none">
          Zalo
        </span>

        {/* Pulsing ring */}
        <span className="absolute inset-0 rounded-full bg-[#0068FF] animate-ping opacity-25 pointer-events-none" />
      </a>

      {/* NÚT GỌI HOTLINE - ĐỒNG BỘ CHÍNH XÁC 48px MOBILE, 56px DESKTOP */}
      <a
        href="tel:0784930338"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#e05408] via-[#f57020] to-[#ff8c38] text-white shadow-xl shadow-orange-500/40 hover:shadow-orange-500/60 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white cursor-pointer"
        aria-label="Gọi hotline tư vấn 0784 930 338"
      >
        {/* Tooltip on Desktop */}
        <span className="absolute -left-36 bg-slate-900/95 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg whitespace-nowrap hidden sm:block border border-white/10">
          Gọi Ngay: 0784 930 338
        </span>

        {/* Phone Icon */}
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform group-hover:rotate-12 animate-pulse" />

        {/* Dual Pulsing Wave Rings */}
        <span className="absolute -inset-1 rounded-full bg-[#f57020] animate-ping opacity-25 pointer-events-none" />
        <span className="absolute inset-0 rounded-full bg-[#ff8c38] animate-pulse opacity-40 pointer-events-none" />
      </a>
    </aside>
  );
}
