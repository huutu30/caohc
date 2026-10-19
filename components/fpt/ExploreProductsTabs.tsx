"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, Zap } from "lucide-react";
import { useRegion } from "@/context/RegionContext";
import { useRegister } from "@/context/RegisterContext";
import { useProductDetail } from "@/context/ProductDetailContext";
import { FPT_PACKAGES } from "@/data/fptPackages";

export default function ExploreProductsTabs() {
  const { activeProvince } = useRegion();
  const { openRegisterModal } = useRegister();
  const { openDetailModal } = useProductDetail();

  const [activeTab, setActiveTab] = useState<string>("ca_nhan");

  const tabs = [
    { id: "ca_nhan", label: "Internet cá nhân" },
    { id: "gia_dinh", label: "Internet gia đình" },
    { id: "game_thu", label: "Internet game thủ" },
    { id: "doanh_nghiep", label: "Internet doanh nghiệp" },
  ];

  const packages = FPT_PACKAGES.filter((p) => p.category === activeTab);

  return (
    <section className="container mx-auto mt-4 mb-8 w-[1440px] max-w-[calc(100%-32px)] md:mt-6 md:mb-10 md:rounded-2xl md:bg-white md:py-8 shadow-xs border border-slate-100">
      {/* SECTION TITLE WITH DYNAMIC PROVINCE */}
      <h2 className="text-[20px] sm:text-[28px] leading-10 font-bold px-4 text-center text-slate-900 tracking-tight">
        Xem ngay khuyến mãi gói cước Internet FPT tại{" "}
        <span className="text-[#004a9c] border-b-2 border-[#004a9c] pb-0.5">
          {activeProvince.name}
        </span>
      </h2>

      {/* TABS (PILL BUTTONS MATCHING FPT.VN) */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-3 p-4 pt-6 no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
              activeTab === tab.id
                ? "border-[#004a9c] text-[#004a9c] bg-blue-50 font-bold shadow-xs"
                : "border-slate-200 bg-white text-slate-600 hover:border-[#004a9c] hover:text-[#004a9c]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* PACKAGES GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 pt-2">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`flex flex-col justify-between rounded-2xl bg-white border transition-all duration-300 relative overflow-hidden group hover:-translate-y-1 ${
              pkg.isHot
                ? "border-orange-400 shadow-md ring-1 ring-[#f57020]/30"
                : "border-slate-200 shadow-xs hover:shadow-md"
            }`}
          >
            {/* BADGE */}
            {pkg.badge && (
              <div className="absolute top-3 left-3 bg-[#f57020] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full z-10 shadow-sm">
                {pkg.badge}
              </div>
            )}

            {/* TOP IMAGE */}
            <div className="relative h-[200px] w-full bg-slate-50 overflow-hidden flex items-center justify-center p-4">
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#004a9c] transition-colors leading-snug">
                  {pkg.name}
                </h3>

                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-2xl font-black text-[#f57020]">
                    {pkg.price.toLocaleString("vi-VN")} đ
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ tháng (đã gồm VAT)</span>
                </div>

                {/* SPEED & HARDWARE BOX */}
                <div className="mt-3 bg-slate-50 border border-slate-200/80 rounded-xl p-3 text-xs text-slate-700 flex items-center justify-between">
                  <div className="flex items-center gap-1 font-bold text-[#004a9c]">
                    <Zap className="size-4 text-amber-500" />
                    <span>{pkg.downloadSpeed}</span>
                  </div>
                  <div className="text-slate-500 truncate max-w-[140px]">
                    {pkg.modem}
                  </div>
                </div>

                {/* FEATURES LIST */}
                <ul className="mt-4 space-y-2 text-xs text-slate-600">
                  {pkg.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="size-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="size-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => openRegisterModal(pkg)}
                  className="w-full bg-[#f57020] hover:bg-[#e05e10] text-white py-2.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Đăng ký ngay
                </button>
                <button
                  onClick={() => openDetailModal(pkg)}
                  className="w-full py-2 text-xs font-semibold text-slate-600 hover:text-[#004a9c] transition-colors cursor-pointer"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW ALL LINK */}
      <div className="text-center mt-2 pb-2">
        <Link
          href="/goi-cuoc/internet"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#004a9c] hover:text-[#f57020] transition-colors"
        >
          <span>Xem tất cả gói cước Internet</span>
          <ChevronRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
