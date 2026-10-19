"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowDown, ArrowUp, ArrowRight, Info } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";
import { useRegion } from "@/context/RegionContext";
import { FptPackage } from "@/data/fptPackages";

export interface FptProductCardItem {
  id: string;
  name: string;
  category?: string;
  badge?: string;
  isPopular?: boolean;
  image: string;
  price: number | { hcm: number; tinh: number };
  originalPrice?: number;
  speed: string;
  uploadSpeed?: string;
  equipment?: string;
  features: string[];
  description?: string;
  recommendedDevices?: string;
  detailUrl?: string;
}

interface FptProductCardProps {
  item: FptProductCardItem;
  className?: string;
}

export default function FptProductCard({ item, className = "" }: FptProductCardProps) {
  const { openRegisterModal } = useRegister();
  const { getPrice } = useRegion();
  const [showTooltip, setShowTooltip] = useState(false);

  const dynamicPrice = getPrice(item) || (typeof item.price === "number" ? item.price : item.price?.tinh || 0);
  const formattedPrice = new Intl.NumberFormat("vi-VN").format(dynamicPrice);

  // Determine detail link matching fpt.vn routes
  const detailHref =
    item.detailUrl ||
    (item.category === "combo"
      ? `/goi-cuoc/combo/${item.id}`
      : `/goi-cuoc/internet/${item.id}`);

  const downloadSpeed = item.speed.replace(/^Tốc độ\s*/i, "");
  const uploadSpeed = (item.uploadSpeed || item.speed).replace(/^Tốc độ\s*/i, "");

  return (
    <div
      className={`group relative flex flex-col h-full rounded-2xl bg-white border border-[#EAECF0] hover:border-[#004a9c]/50 transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 overflow-hidden ${
        item.isPopular ? "ring-2 ring-[#004a9c]/70" : ""
      } ${className}`}
    >
      {/* BADGE (BÁN CHẠY NHẤT / HOT / TAGLINE) - ROUNDED BR CORNER MATCHING FPT.VN */}
      {item.badge && (
        <div className="absolute top-0 left-0 z-20">
          <span
            className={`inline-flex items-center px-3.5 py-1.5 rounded-br-2xl text-[11px] font-black uppercase tracking-wider shadow-xs text-white ${
              item.isPopular || item.badge.toLowerCase().includes("bán chạy")
                ? "bg-[#F26F21]"
                : "bg-[#0B1A3D]"
            }`}
          >
            {item.badge}
          </span>
        </div>
      )}

      {/* TOP IMAGE CONTAINER (16/11 ASPECT RATIO MATCHING FPT.VN) */}
      <Link
        href={detailHref}
        className="block relative aspect-[16/11] w-full shrink-0 bg-[#F8F9FA] flex items-center justify-center p-3 overflow-hidden border-b border-[#EAECF0]/60 cursor-pointer"
        title={`Xem chi tiết ${item.name}`}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain p-1 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </Link>

      {/* BODY CONTENT */}
      <div className="flex flex-1 flex-col p-4 md:p-5 justify-between">
        <div>
          {/* TITLE */}
          <div className="mb-2 h-7 flex items-center">
            <Link href={detailHref} className="block group-hover:text-[#004a9c] transition-colors w-full">
              <h3 className="text-base md:text-lg font-bold text-[#101828] group-hover:text-[#004a9c] transition-colors line-clamp-1 leading-snug">
                {item.name}
              </h3>
            </Link>
          </div>

          {/* PRICE BLOCK (BLUE COLOR LIKE FPT.VN WITH INFO TOOLTIP) */}
          <div className="flex items-center gap-1.5 mb-3 h-8 relative">
            <span className="text-xl md:text-2xl font-bold text-[#004a9c] tracking-tight">
              {formattedPrice}đ
            </span>
            <span className="text-xs text-slate-500 font-medium self-end mb-1">
              /tháng
            </span>
            
            {/* Info Tooltip */}
            <div 
              className="relative inline-flex items-center self-end mb-1 cursor-pointer"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => setShowTooltip(!showTooltip)}
            >
              <Info className="size-3.5 text-slate-400 hover:text-slate-600 transition-colors" />
              {showTooltip && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2 bg-slate-900 text-white text-[10px] rounded-lg shadow-xl z-30 pointer-events-none text-center leading-normal">
                  Mức giá đã bao gồm VAT và có thể thay đổi tùy thuộc theo từng khu vực tỉnh/thành.
                </div>
              )}
            </div>
          </div>

          {/* SPEED & GAUGE BOX (STANDARDIZED FPT.VN STYLE) */}
          <div className="bg-[#F8F9FA] rounded-xl p-3 border border-slate-200/70 mb-3.5 flex items-center justify-between min-h-[72px] shrink-0">
            <div className="flex-1">
              <span className="text-[11px] text-slate-500 font-medium block mb-1">
                Tốc độ (Download/ Upload)
              </span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 font-bold text-xs md:text-sm text-slate-800">
                  <ArrowDown className="size-3.5 text-slate-500 stroke-[2.5]" />
                  <span>{downloadSpeed}</span>
                </div>
                <div className="flex items-center gap-1 font-bold text-xs md:text-sm text-slate-800">
                  <ArrowUp className="size-3.5 text-slate-500 stroke-[2.5]" />
                  <span>{uploadSpeed}</span>
                </div>
              </div>
            </div>

            {/* Speedometer Arc Gauge Icon */}
            <div className="size-11 shrink-0 flex items-center justify-center">
              <svg className="size-10 text-[#F26F21]" viewBox="0 0 48 36" fill="none">
                <path d="M6 30 A 18 18 0 0 1 42 30" stroke="#E2E8F0" strokeWidth="4" strokeLinecap="round" />
                <path d="M6 30 A 18 18 0 0 1 36 14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                <circle cx="24" cy="30" r="3" fill="#004a9c" />
                <line x1="24" y1="30" x2="33" y2="18" stroke="#004a9c" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* FEATURES CHECKLIST */}
          <div className="space-y-2 mb-4 flex-1 flex flex-col justify-start min-h-[114px]">
            {item.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-600 min-h-[34px]">
                <div className="size-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="size-3" strokeWidth={3} />
                </div>
                <span className="leading-snug line-clamp-2">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ACTION BUTTONS (BLUE PRIMARY BUTTON MATCHING FPT.VN) */}
        <div className="space-y-2 mt-auto shrink-0 pt-2">
          {/* PRIMARY BUTTON: ĐĂNG KÝ NGAY */}
          <button
            onClick={() =>
              openRegisterModal({
                id: item.id,
                name: item.name,
                category: (item.category as FptPackage["category"]) || "ca_nhan",
                categoryName: "Gói cước",
                downloadSpeed: item.speed,
                uploadSpeed: item.uploadSpeed || item.speed,
                price: dynamicPrice,
                image: item.image,
                modem: item.equipment || "Modem Wi-Fi 6",
                recommendedDevices: item.recommendedDevices || "1 - 10 thiết bị",
                features: item.features,
                description: item.description || item.name,
              })
            }
            className="w-full bg-[#004a9c] hover:bg-[#003875] text-white py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Đăng ký ngay</span>
          </button>

          {/* SECONDARY LINK: XEM CHI TIẾT GÓI CƯỚC */}
          <Link
            href={detailHref}
            className="w-full py-1.5 text-center text-xs font-bold text-[#004a9c] hover:text-[#f57020] transition-colors flex items-center justify-center gap-1 group/link cursor-pointer"
          >
            <span>Xem chi tiết</span>
            <ArrowRight className="size-3 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
