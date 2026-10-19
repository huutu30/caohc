"use client";

import React from "react";
import Image from "next/image";
import { Check, Zap, Wifi, ArrowRight } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";
import { useProductDetail } from "@/context/ProductDetailContext";
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
}

interface FptProductCardProps {
  item: FptProductCardItem;
  className?: string;
}

export default function FptProductCard({ item, className = "" }: FptProductCardProps) {
  const { openRegisterModal } = useRegister();
  const { openDetailModal } = useProductDetail();

  const formattedPrice = new Intl.NumberFormat("vi-VN").format(item.price);
  const formattedOriginalPrice = item.originalPrice
    ? new Intl.NumberFormat("vi-VN").format(item.originalPrice)
    : null;

  return (
    <div
      className={`group relative flex flex-col rounded-2xl bg-white border border-[#EAECF0] hover:border-[#F26F21]/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden ${
        item.isPopular ? "ring-2 ring-[#F26F21]/80" : ""
      } ${className}`}
    >
      {/* BADGE (BÁN CHẠY NHẤT / HOT) */}
      {item.badge && (
        <div className="absolute top-3 left-3 z-20">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-sm text-white ${
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
      <div className="relative aspect-[16/11] w-full bg-[#F8F9FA] flex items-center justify-center p-4 overflow-hidden border-b border-[#EAECF0]/60">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* BODY CONTENT */}
      <div className="flex flex-1 flex-col p-5">
        {/* TITLE & SPEED HIGHLIGHT */}
        <div className="mb-3">
          <h3 className="text-xl font-black text-[#101828] group-hover:text-[#004a9c] transition-colors leading-snug">
            {item.name}
          </h3>
          {item.description && (
            <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
              {item.description}
            </p>
          )}
        </div>

        {/* SPEED & EQUIPMENT BOX (FPT.VN STYLE) */}
        <div className="bg-[#F8F9FA] rounded-xl p-3 border border-slate-100 mb-4 space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-500 font-medium flex items-center gap-1.5">
              <Zap className="size-3.5 text-[#F26F21]" />
              Tốc độ:
            </span>
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
            <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-200/60">
              <span className="text-slate-500 font-medium flex items-center gap-1.5">
                <Wifi className="size-3.5 text-[#004a9c]" />
                Thiết bị:
              </span>
              <span className="font-semibold text-slate-700 text-right text-[11px] max-w-[160px] truncate">
                {item.equipment}
              </span>
            </div>
          )}
        </div>

        {/* FEATURES CHECKLIST */}
        <div className="space-y-2 mb-6 flex-1">
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
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black text-[#F26F21] tracking-tight">
              {formattedPrice}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              đ / tháng
            </span>
            {formattedOriginalPrice && (
              <span className="text-xs text-slate-400 line-through ml-auto">
                {formattedOriginalPrice} đ
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

          {/* SECONDARY LINK: XEM CHI TIẾT */}
          <button
            onClick={() =>
              openDetailModal({
                id: item.id,
                name: item.name,
                category: (item.category as FptPackage["category"]) || "ca_nhan",
                categoryName: "Gói cước",
                downloadSpeed: item.speed,
                uploadSpeed: item.uploadSpeed || item.speed,
                price: item.price,
                pricePrepaid6M: item.price * 6,
                pricePrepaid12M: item.price * 12,
                image: item.image,
                modem: item.equipment || "Modem Wi-Fi 6",
                recommendedDevices: item.recommendedDevices || "1 - 10 thiết bị",
                description: item.description || item.name,
                features: item.features,
              })
            }
            className="w-full py-2 text-center text-xs font-semibold text-[#004a9c] hover:text-[#F26F21] transition-colors cursor-pointer"
          >
            Xem chi tiết gói cước
          </button>
        </div>
      </div>
    </div>
  );
}
