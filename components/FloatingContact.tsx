"use client";

import * as React from "react";
import Link from "next/link";
import { Phone, FileText, ArrowUp } from "lucide-react";

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
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end space-y-3 pointer-events-auto">
      {/* NÚT CUỘN LÊN ĐẦU TRANG */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="h-10 w-10 rounded-full bg-white text-slate-700 shadow-lg border border-slate-200 flex items-center justify-center hover:bg-slate-100 hover:text-brand-blue transition-all"
          aria-label="Cuộn lên đầu trang"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* NÚT ĐĂNG KÝ NHANH */}
      <Link
        href="/dang-ky"
        className="group flex items-center space-x-2 bg-gradient-to-r from-blue-700 to-brand-blue text-white py-2.5 px-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-blue-400/40"
      >
        <span className="flex h-7 w-7 rounded-full bg-white/20 items-center justify-center text-white">
          <FileText className="h-4 w-4" />
        </span>
        <span className="text-xs sm:text-sm font-bold tracking-wide pr-1">
          Đăng Ký Nhanh
        </span>
      </Link>

      {/* NÚT ZALO CHAT */}
      <a
        href="https://zalo.me/0775780962"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center h-13 w-13 rounded-full bg-[#0068FF] text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 border-2 border-white"
        aria-label="Chat qua Zalo"
      >
        <span className="absolute -left-28 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-md whitespace-nowrap hidden sm:block">
          Chat Zalo Tư Vấn
        </span>
        <span className="font-black text-sm tracking-tighter">Zalo</span>
        <span className="absolute inset-0 rounded-full bg-[#0068FF] animate-ping opacity-25 pointer-events-none" />
      </a>

      {/* NÚT GỌI HOTLINE */}
      <a
        href="tel:0775780962"
        className="group relative flex items-center justify-center h-14 w-14 rounded-full bg-brand-orange text-white shadow-cta hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110 border-2 border-white animate-shake"
        aria-label="Gọi hotline tư vấn"
      >
        <span className="absolute -left-32 bg-slate-900 text-white text-xs font-semibold px-2.5 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-md whitespace-nowrap hidden sm:block">
          Gọi Ngay 0775 780 962
        </span>
        <Phone className="h-6 w-6 animate-pulse" />
        <span className="absolute inset-0 rounded-full bg-brand-orange animate-ping opacity-30 pointer-events-none" />
      </a>
    </div>
  );
}
