"use client";

import React from "react";
import Image from "next/image";
import {
  Trophy,
  CheckCircle2,
  ArrowRight,
  Flame,
} from "lucide-react";
import { VVIP_SPORTS_PACKAGES } from "@/data/fptPackages";
import { useRegion } from "@/context/RegionContext";
import { useRegister } from "@/context/RegisterContext";

export default function VvipSportsSection() {
  const { activeProvince } = useRegion();
  const { openRegisterModal } = useRegister();

  const isNoiThanh = activeProvince.region === "hcm";

  return (
    <section
      id="the-thao"
      className="py-20 sm:py-24 bg-[#07162c] text-white relative overflow-hidden"
    >
      {/* BACKGROUND GLOW ACCENTS */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#004a9c]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#f57020]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-amber-400 text-xs font-black uppercase tracking-wider mb-4 backdrop-blur-sm">
              <Trophy className="h-4 w-4" />
              <span>Bản Quyền Độc Quyền FPT Play</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Combo Internet + FPT Play Thể Thao Đỉnh Cao
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              Thưởng thức trọn vẹn 380 trận Ngoại Hạng Anh (Premier League), Cúp C1 UEFA Champions League siêu nét 4K cùng hơn 170 kênh truyền hình đặc sắc.
            </p>
          </div>

          <div className="flex items-center space-x-3 shrink-0">
            <div className="bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 text-xs font-semibold text-slate-200">
              Khu vực: <span className="font-bold text-amber-400">{activeProvince.name}</span>
            </div>
          </div>
        </div>

        {/* HERO PROMOTIONAL BANNER BOX */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-white/15 mb-12 shadow-2xl">
          <div className="relative h-48 sm:h-72 w-full">
            <Image
              src="/images/nha-promo-banner.webp"
              alt="Bản quyền Ngoại Hạng Anh FPT Play"
              fill
              className="object-cover object-center"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[#07162c] via-[#07162c]/60 to-transparent flex items-center p-6 sm:p-12">
              <div className="max-w-lg">
                <span className="bg-[#f57020] text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider inline-block mb-2 shadow">
                  Mùa Giải Mới
                </span>
                <h3 className="text-xl sm:text-3xl font-black leading-snug drop-shadow-md">
                  Cháy Hết Mình Cùng 380 Trận Cầu Ngoại Hạng Anh
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-2 line-clamp-2">
                  Trực tiếp và độc quyền tất cả các vòng đấu, hình ảnh chuẩn Full HD/4K không giật lag trên hạ tầng Wi-Fi 6 FPT.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 COMBO CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {VVIP_SPORTS_PACKAGES.map((combo) => {
            const price = isNoiThanh ? combo.priceNoiThanh : combo.priceNgoaiThanh;
            return (
              <div
                key={combo.id}
                className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-orange-400/80 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#f57020]/20 text-[#f57020] border border-[#f57020]/30 text-xs font-black uppercase">
                      Combo Thể Thao
                    </span>
                    <span className="text-xs font-bold text-amber-400 flex items-center">
                      <Flame className="h-3.5 w-3.5 mr-1" />
                      Hot 2026
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                    {combo.name}
                  </h3>

                  <div className="mt-4 p-3 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase">
                        Băng thông Internet
                      </span>
                      <span className="text-lg font-black text-white">
                        {combo.downloadSpeed}
                      </span>
                    </div>
                    <div className="h-7 w-px bg-white/10" />
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase">
                        Kèm Đầu TV Box
                      </span>
                      <span className="text-sm font-bold text-amber-400">
                        Box Voice 4K
                      </span>
                    </div>
                  </div>

                  {/* HIGHLIGHTED FEATURES */}
                  <ul className="mt-5 space-y-2.5 text-xs text-slate-200">
                    {combo.features.map((f, idx) => (
                      <li key={idx} className="flex items-start space-x-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* PRICING & CTA */}
                <div className="mt-6 pt-5 border-t border-white/15">
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-3xl font-black text-[#f57020]">
                      {price.toLocaleString("vi-VN")} đ
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      / tháng (đã gồm VAT)
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      openRegisterModal({
                        id: combo.id,
                        name: combo.name,
                        price: price,
                        category: "gia_dinh",
                        categoryName: "Combo Thể Thao",
                        downloadSpeed: combo.downloadSpeed,
                        uploadSpeed: combo.uploadSpeed,
                        image: combo.image,
                        modem: "Modem Wi-Fi 6 + Box FPT Play Voice 4K",
                        recommendedDevices: "5 - 15 thiết bị",
                        features: combo.features,
                        description: "Combo Thể Thao FPT Play xem trọn vẹn 380 trận Ngoại Hạng Anh.",
                      })
                    }
                    className="w-full bg-[#f57020] hover:bg-[#e05e10] text-white py-3.5 rounded-2xl font-black text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center space-x-2 active:scale-95"
                  >
                    <span>Đăng ký Combo này</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
