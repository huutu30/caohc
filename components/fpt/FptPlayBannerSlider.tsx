"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

export default function FptPlayBannerSlider() {
  const { openRegisterModal } = useRegister();

  const packages = [
    {
      id: "play-vvip",
      name: "Gói FPT Play VVIP (12 Tháng)",
      badge: "ƯU ĐÃI LỚN",
      price: 180000,
      period: "tháng",
      channels: "Gần 170 kênh truyền hình",
      image: "/images/vvip1.webp",
      features: [
        "Bản quyền trọn vẹn 380 trận Ngoại Hạng Anh",
        "Cúp C1 UEFA Champions League, Europa League",
        "Kho phim bom tấn 4K không quảng cáo",
        "Đăng nhập & xem đồng thời trên 5 thiết bị",
      ],
    },
    {
      id: "play-vip",
      name: "Gói FPT Play VIP Thể Thao",
      badge: "PHỔ BIẾN",
      price: 120000,
      period: "tháng",
      channels: "Hơn 150 kênh đặc sắc",
      image: "/images/fpt_play_premium.webp",
      features: [
        "Trực tiếp các giải thể thao đỉnh cao thế giới",
        "Phim truyền hình độc quyền Châu Á, Âu Mỹ",
        "Đăng nhập trên Smart TV, Box, Smartphone",
        "Xem lại chương trình phát sóng trong 48h",
      ],
    },
  ];

  return (
    <section className="container mx-auto mt-4 mb-8 w-[1440px] max-w-[calc(100%-32px)] md:mt-6 md:mb-10 md:rounded-2xl md:bg-white md:py-8 shadow-xs border border-slate-100">
      <h2 className="text-[22px] sm:text-[28px] leading-10 font-bold px-4 text-center text-slate-900 tracking-tight">
        FPT Play - Gói xem truyền hình, giải trí, thể thao đa phương tiện
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-6 p-4 sm:p-6 pt-6">
        {/* LEFT POSTER BANNER */}
        <div className="w-full lg:w-[320px] shrink-0">
          <div className="relative aspect-[318/421] w-full rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/images/fpt-play-banner-poster.png"
              alt="FPT Play VVIP"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT PACKAGE CARDS */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#004a9c] bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {pkg.channels}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#f57020] bg-orange-50 px-2.5 py-0.5 rounded-full">
                    {pkg.badge}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#004a9c] transition-colors mt-2">
                  {pkg.name}
                </h4>

                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-[#f57020]">
                    {pkg.price.toLocaleString("vi-VN")} đ
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ {pkg.period}</span>
                </div>

                <ul className="mt-5 space-y-2.5 text-xs text-slate-600">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="size-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="size-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() =>
                  openRegisterModal({
                    id: pkg.id,
                    name: pkg.name,
                    price: pkg.price,
                    category: "gia_dinh",
                    categoryName: "Gói FPT Play",
                    downloadSpeed: "Không giới hạn",
                    uploadSpeed: "Không giới hạn",
                    image: pkg.image,
                    modem: "Tài khoản FPT Play đa nền tảng",
                    recommendedDevices: "3 - 5 thiết bị",
                    features: pkg.features,
                    description: "Gói FPT Play xem thể thao và phim ảnh trực tuyến.",
                  })
                }
                className="mt-6 w-full bg-[#f57020] hover:bg-[#e05e10] text-white py-2.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Đăng ký ngay
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* VIEW ALL LINK */}
      <div className="text-center mt-2 pb-2">
        <Link
          href="/goi-cuoc/combo"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#004a9c] hover:text-[#f57020] transition-colors"
        >
          <span>Xem tất cả gói FPT Play</span>
          <ChevronRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
