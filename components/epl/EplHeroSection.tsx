"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

export default function EplHeroSection() {
  const { openRegisterModal } = useRegister();

  return (
    <section className="w-full bg-[#03091e] relative">
      {/* BREADCRUMB */}
      <div className="bg-[#03091e] border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-3">
          <nav className="flex items-center space-x-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-[#F26F21] transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="size-3 text-slate-500" />
            <span className="font-semibold text-white">Ngoại hạng Anh</span>
          </nav>
        </div>
      </div>

      {/* HERO BANNER RESPONSIVE */}
      <div className="relative w-full overflow-hidden">
        {/* DESKTOP BANNER */}
        <div className="hidden sm:block relative w-full h-[320px] md:h-[400px] lg:h-[480px] xl:h-[540px]">
          <Image
            src="/images/epl/epl_hero_banner.jpg"
            alt="Đăng ký xem Ngoại Hạng Anh cùng Combo VVIP Lite"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* MOBILE BANNER */}
        <div className="block sm:hidden relative w-full aspect-[375/562]">
          <Image
            src="/images/epl/epl_hero_banner_mobile.jpg"
            alt="Đăng ký xem Ngoại Hạng Anh cùng Combo VVIP Lite"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>

      {/* 2 CTA ACTION BUTTONS MATCHING FPT.VN (btn-wrapper) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-5 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
          {/* NÚT 1: ĐĂNG KÝ NGAY */}
          <button
            onClick={() =>
              openRegisterModal({
                name: "Combo Ngoại Hạng Anh V.VIP",
                categoryName: "Ngoại Hạng Anh FPT Play",
              })
            }
            className="w-full sm:w-[320px] h-[58px] sm:h-[64px] rounded-2xl bg-gradient-to-r from-[#e86010] to-[#ff7d2e] hover:from-[#d5540a] hover:to-[#e86010] text-white p-1 flex flex-col items-center justify-center shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer border border-white/20 group relative overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <span className="text-base sm:text-lg font-black uppercase tracking-wider leading-tight">
              Đăng ký ngay
            </span>
            <span className="text-[11px] sm:text-xs text-orange-100 font-semibold leading-tight opacity-95">
              Bạn chưa có Internet FPT
            </span>
          </button>

          {/* NÚT 2: NÂNG CẤP NGAY */}
          <button
            onClick={() =>
              openRegisterModal({
                name: "Nâng cấp xem Ngoại Hạng Anh",
                categoryName: "Gói FPT Play Thể Thao",
              })
            }
            className="w-full sm:w-[320px] h-[58px] sm:h-[64px] rounded-2xl bg-[#09153a] hover:bg-[#0c1c4d] text-white p-1 flex flex-col items-center justify-center shadow-lg border border-blue-400/40 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer group relative overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <span className="text-base sm:text-lg font-black uppercase tracking-wider text-amber-300 leading-tight">
              Nâng cấp ngay
            </span>
            <span className="text-[11px] sm:text-xs text-blue-200 font-semibold leading-tight opacity-95">
              Bạn đã có Internet FPT
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
