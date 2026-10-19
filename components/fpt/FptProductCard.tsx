"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Zap, Wifi, ArrowRight } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";
import { FptPackage } from "@/data/fptPackages";

export interface FptProductCardItem {
  id: string;
  name: string;
  category?: string;
  badge?: string;
  isPopular?: boolean;
  image: string;
  price: number;
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

  const formattedPrice = new Intl.NumberFormat("vi-VN").format(item.price);
  const formattedOriginalPrice = item.originalPrice
    ? new Intl.NumberFormat("vi-VN").format(item.originalPrice)
    : null;

  // Determine detail link matching fpt.vn routes
  const detailHref =
    item.detailUrl ||
    (item.category === "combo"
      ? `/goi-cuoc/combo/${item.id}`
      : `/goi-cuoc/internet/${item.id}`);

  return (
    <div
      className={`group relative flex flex-col rounded-2xl bg-white border border-[#EAECF0] hover:border-[#F26F21]/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden ${
        item.isPopular ? "ring-2 ring-[#F26F21]/80" : ""
      } ${className}`}
    >
      {/* BADGE (BÁN CHẠY NHẤT / HOT) - ROUNDED BR CORNER LIKE FPT.VN */}
      {item.badge && (
        <div className="absolute top-0 left-0 z-20">
          <span
            className={`inline-flex items-center px-3.5 py-1.5 rounded-br-2xl text-[11px] font-black uppercase tracking-wider shadow-sm text-white ${
              item.isPopular
                ? "bg-[#F26F21]"
                : "bg-[#0B1A3D]"
            }`}
          >
            {item.badge}
          </span>
        </div>
      )}

      {/* TOP IMAGE CONTAINER (169/130 ASPECT RATIO MATCHING FPT.VN) */}
      <Link
        href={detailHref}
        className="block relative aspect-[16/11] w-full bg-[#F8F9FA] flex items-center justify-center p-4 overflow-hidden border-b border-[#EAECF0]/60 cursor-pointer"
        title={`Xem chi tiết ${item.name}`}
      >
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      {/* BODY CONTENT */}
      <div className="flex flex-1 flex-col p-5">
        {/* TITLE & SPEED HIGHLIGHT */}
        <div className="mb-3">
          <Link href={detailHref} className="block group-hover:text-[#004a9c] transition-colors">
            <h3 className="text-xl font-black text-[#101828] group-hover:text-[#004a9c] transition-colors leading-snug">
              {item.name}
            </h3>
          </Link>
          {item.description && (
            <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
              {item.description}
            </p>
          )}
        </div>

        {/* SPEED & EQUIPMENT BOX (FPT.VN STYLE) */}
        <div className="bg-[#F8F9FA] rounded-xl p-3 border border-slate-200/70 mb-4 flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs">
              <Zap className="size-3.5 text-[#F26F21]" />
              <span className="text-slate-500 font-medium">Tốc độ:</span>
              <span className="font-extrabold text-[#004a9c]">
                {item.speed}
                {item.uploadSpeed && item.uploadSpeed !== item.speed && (
                  <span className="text-slate-400 font-normal text-[11px] ml-1">
                    (Up: {item.uploadSpeed})
                  </span>
                )}
              </span>
            </div>

            {item.equipment && (
              <div className="flex items-center gap-1.5 text-xs">
                <Wifi className="size-3.5 text-[#004a9c]" />
                <span className="text-slate-500 font-medium">Thiết bị:</span>
                <span className="font-semibold text-slate-700 text-[11px] max-w-[150px] truncate">
                  {item.equipment}
                </span>
              </div>
            )}
          </div>

          {/* Speed Gauge Icon Box */}
          <div className="size-9 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 text-[#F26F21] shadow-xs">
            <Zap className="size-4 fill-current" />
          </div>
        </div>

        {/* FEATURES CHECKLIST */}
        <div className="space-y-2 mb-5 flex-1">
          {item.features.slice(0, 4).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
              <div className="size-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="size-3" strokeWidth={3} />
              </div>
              <span className="leading-snug">{feat}</span>
            </div>
          ))}
        </div>

        {/* PRICE BLOCK */}
        <div className="pt-3 border-t border-[#EAECF0] mb-4">
          <div className="flex items-baseline gap-1.5">
            <span className="text-xs text-slate-500 font-medium">Chỉ từ</span>
            <span className="text-2xl sm:text-3xl font-black text-[#F26F21] tracking-tight">
              {formattedPrice}đ
            </span>
            <span className="text-xs text-slate-500 font-medium">/tháng</span>
            {formattedOriginalPrice && (
              <span className="text-xs text-slate-400 line-through ml-auto">
                {formattedOriginalPrice}đ
              </span>
            )}
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">
            (Đã bao gồm thuế VAT)
          </p>
        </div>

        {/* ACTION BUTTONS (FPT.VN STYLE) */}
        <div className="space-y-2">
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
                price: item.price,
                image: item.image,
                modem: item.equipment || "Modem Wi-Fi 6",
                recommendedDevices: item.recommendedDevices || "1 - 10 thiết bị",
                features: item.features,
                description: item.description || item.name,
              })
            }
            className="w-full bg-[#F26F21] hover:bg-[#E05E10] text-white py-3 px-4 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Đăng ký ngay</span>
            <ArrowRight className="size-4" />
          </button>

          {/* SECONDARY LINK: XEM CHI TIẾT GÓI CƯỚC (DIRECT NAVIGATION TO DETAIL PAGE) */}
          <Link
            href={detailHref}
            className="w-full py-2.5 text-center text-xs font-bold text-[#004a9c] hover:text-[#F26F21] transition-colors flex items-center justify-center gap-1.5 group/link cursor-pointer"
          >
            <span>Xem chi tiết gói cước</span>
            <ArrowRight className="size-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

