"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Zap,
  ArrowDown,
  ArrowUp,
  CheckCircle2,
  HardDrive,
  Users,
  Sparkles,
  ArrowRight,
  Info,
} from "lucide-react";
import { FPT_PACKAGES } from "@/data/fptPackages";
import { useRegion } from "@/context/RegionContext";
import { useRegister } from "@/context/RegisterContext";
import { useProductDetail } from "@/context/ProductDetailContext";

interface ProductSectionProps {
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export default function ProductSection({
  activeCategory: propCategory,
  onCategoryChange,
}: ProductSectionProps) {
  const [internalCategory, setInternalCategory] = useState<string>("ca_nhan");
  const [billingCycle, setBillingCycle] = useState<"1M" | "6M" | "12M">("6M");

  const category = propCategory || internalCategory;
  const setCategory = (cat: string) => {
    if (onCategoryChange) {
      onCategoryChange(cat);
    } else {
      setInternalCategory(cat);
    }
  };

  const { activeProvince } = useRegion();
  const { openRegisterModal } = useRegister();
  const { openDetailModal } = useProductDetail();

  const tabs = [
    { id: "ca_nhan", label: "Cá nhân & Căn hộ" },
    { id: "game_thu", label: "Game thủ (Ultra Fast)" },
    { id: "gia_dinh", label: "Gia đình nhiều tầng (Kèm Mesh)" },
    { id: "doanh_nghiep", label: "Doanh nghiệp & Cafe" },
  ];

  const filteredPackages = FPT_PACKAGES.filter((p) => p.category === category);

  return (
    <section id="goi-cuoc" className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* SECTION TITLE & BADGE */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#004a9c] text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="h-4 w-4 text-amber-500" />
            <span>Hạ Tầng Cáp Quang Chuẩn Wi-Fi 6</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Gói Cước Internet FPT Dành Cho Bạn
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Trang bị miễn phí Modem Wi-Fi 6 hai băng tần cực mạnh. Giá cước niêm yết áp dụng tại{" "}
            <span className="font-bold text-[#004a9c] underline underline-offset-4">
              {activeProvince.name}
            </span>
          </p>

          {/* CHU KỲ THANH TOÁN TOGGLE */}
          <div className="mt-6 inline-flex p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <button
              onClick={() => setBillingCycle("1M")}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === "1M"
                  ? "bg-[#004a9c] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Trả từng tháng
            </button>
            <button
              onClick={() => setBillingCycle("6M")}
              className={`relative px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === "6M"
                  ? "bg-[#004a9c] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Đóng 6 tháng</span>
              <span className="absolute -top-2.5 -right-2 bg-[#f57020] text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                +1 Tháng
              </span>
            </button>
            <button
              onClick={() => setBillingCycle("12M")}
              className={`relative px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === "12M"
                  ? "bg-[#004a9c] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Đóng 12 tháng</span>
              <span className="absolute -top-2.5 -right-2 bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                +2 Tháng
              </span>
            </button>
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 space-x-2 no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCategory(tab.id)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all ${
                category === tab.id
                  ? "bg-[#004a9c] text-white shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* PACKAGE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredPackages.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`flex flex-col justify-between rounded-3xl bg-white border transition-all duration-300 relative overflow-hidden ${
                  pkg.isHot
                    ? "border-orange-400 shadow-2xl ring-2 ring-[#f57020]/20 hover:-translate-y-1"
                    : "border-slate-200 shadow-card hover:shadow-card-hover hover:-translate-y-1"
                }`}
              >
                {/* HOT BADGE */}
                {pkg.badge && (
                  <div className="absolute top-0 right-0 bg-[#f57020] text-white text-[11px] font-black uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl shadow-sm z-10 flex items-center space-x-1">
                    <Sparkles className="h-3 w-3" />
                    <span>{pkg.badge}</span>
                  </div>
                )}

                {/* CARD TOP INFO */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="relative h-16 w-16 rounded-2xl bg-slate-50 border border-slate-100 p-1 overflow-hidden shrink-0">
                      <Image
                        src={pkg.image}
                        alt={pkg.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#004a9c] bg-blue-50 px-2.5 py-0.5 rounded-full">
                        {pkg.categoryName}
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 mt-1">
                        {pkg.name}
                      </h3>
                    </div>
                  </div>

                  {/* SPEED DISPLAY BLOCK */}
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 mb-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-slate-500 font-bold uppercase flex items-center">
                          <ArrowDown className="h-3 w-3 text-emerald-600 mr-1" />
                          Download
                        </div>
                        <div className="text-2xl font-black text-[#004a9c]">
                          {pkg.downloadSpeed}
                        </div>
                      </div>
                      <div className="h-8 w-px bg-slate-200" />
                      <div>
                        <div className="text-[11px] text-slate-500 font-bold uppercase flex items-center">
                          <ArrowUp className="h-3 w-3 text-blue-600 mr-1" />
                          Upload
                        </div>
                        <div className="text-lg font-black text-slate-700">
                          {pkg.uploadSpeed}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* HARDWARE & DEVICES INFO */}
                  <div className="space-y-2 mb-5 text-xs text-slate-600">
                    <div className="flex items-center space-x-2">
                      <HardDrive className="h-4 w-4 text-[#004a9c] shrink-0" />
                      <span className="font-semibold">{pkg.modem}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Khuyến nghị: {pkg.recommendedDevices}</span>
                    </div>
                  </div>

                  {/* HIGHLIGHTED FEATURES */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                    {pkg.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CARD FOOTER WITH PRICING & ACTIONS */}
                <div className="p-6 sm:p-7 pt-0 bg-slate-50/50">
                  {/* PREPAID GIFT NOTE */}
                  <div className="text-[11px] text-amber-700 bg-amber-50/80 border border-amber-200/80 rounded-xl p-2.5 mb-4 text-center font-bold">
                    {billingCycle === "6M" && (pkg.gift6M || "Tặng 01 tháng cước thứ 7")}
                    {billingCycle === "12M" && (pkg.gift12M || "Tặng 02 tháng cước thứ 13, 14")}
                    {billingCycle === "1M" && "Bàn giao thiết bị modem Wi-Fi 6"}
                  </div>

                  {/* PRICE DISPLAY */}
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-3xl font-black text-[#f57020]">
                      {pkg.price.toLocaleString("vi-VN")} đ
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      / tháng (đã gồm VAT)
                    </span>
                  </div>

                  {/* 2 ACTION BUTTONS */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => openDetailModal(pkg)}
                      className="py-3 px-3 rounded-2xl border border-slate-300 hover:border-[#004a9c] text-slate-700 hover:text-[#004a9c] text-xs font-bold transition-all flex items-center justify-center space-x-1 hover:bg-blue-50/50"
                    >
                      <Info className="h-3.5 w-3.5" />
                      <span>Chi tiết</span>
                    </button>
                    <button
                      onClick={() => openRegisterModal(pkg)}
                      className="py-3 px-3 rounded-2xl bg-[#f57020] hover:bg-[#e05e10] text-white text-xs font-black shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-1 active:scale-95"
                    >
                      <span>Đăng ký</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
