"use client";

import * as React from "react";
import { Check, Zap, ArrowRight, Gift, Sparkles } from "lucide-react";
import { PackageItem, ComboItem } from "@/lib/packages";
import { formatCurrency, cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRegister } from "@/context/RegisterContext";

interface PricingCardProps {
  item: PackageItem | (ComboItem & { speed: string; uploadSpeed?: string; equipment?: string; devicesRecommended?: string });
  billingCycle: "monthly" | "6months" | "12months";
  onSelect?: (item: PackageItem | ComboItem) => void;
  className?: string;
}

export default function PricingCard({
  item,
  billingCycle,
  onSelect,
  className,
}: PricingCardProps) {
  const { openRegisterModal } = useRegister();

  // Compute price and bonus based on billing cycle
  let displayPrice = item.priceMonthly;
  let giftText = "";
  let billingNote = "Thanh toán từng tháng";

  if (billingCycle === "6months") {
    displayPrice = Math.round(item.price6Months / 7);
    giftText = item.gift6Months;
    billingNote = `Tổng ${formatCurrency(item.price6Months)} / 7 tháng`;
  } else if (billingCycle === "12months") {
    displayPrice = Math.round(item.price12Months / 14);
    giftText = item.gift12Months;
    billingNote = `Tổng ${formatCurrency(item.price12Months)} / 14 tháng`;
  }

  const isPopular = item.isPopular;

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-3xl bg-white transition-all duration-300",
        isPopular
          ? "border-2 border-brand-orange shadow-xl hover:shadow-2xl hover:-translate-y-1 z-10"
          : "border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1",
        className
      )}
    >
      {/* POPULAR BADGE */}
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
          <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-brand-orange to-amber-500 text-white shadow-cta">
            <Sparkles className="w-3.5 h-3.5 mr-1 animate-spin" />
            {item.badge || "Gói Bán Chạy Nhất"}
          </span>
        </div>
      )}

      {/* HEADER */}
      <div className="p-6 sm:p-7 pb-4 border-b border-slate-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            {item.categoryLabel}
          </span>
          {item.badge && !isPopular && (
            <span className="text-[11px] font-bold text-brand-blue bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
              {item.badge}
            </span>
          )}
        </div>

        <h3 className="text-2xl font-black text-slate-900 group-hover:text-brand-blue transition-colors">
          {item.name}
        </h3>
        <p className="text-xs text-slate-500 mt-1 line-clamp-2 min-h-[32px]">
          {item.description}
        </p>

        {/* SPEED BADGE */}
        <div className="mt-4 flex items-center justify-between bg-gradient-to-r from-blue-50/80 to-slate-50 p-3 rounded-2xl border border-blue-100/60">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-xl bg-brand-blue text-white flex items-center justify-center font-bold">
              <Zap className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold leading-none">
                Tốc độ truyền dẫn
              </p>
              <p className="text-lg font-black text-brand-blue leading-tight">
                {item.speed}
              </p>
            </div>
          </div>
          {item.uploadSpeed && (
            <div className="text-right">
              <p className="text-[10px] text-slate-500 uppercase font-semibold leading-none">
                Upload
              </p>
              <p className="text-xs font-bold text-slate-700">
                {item.uploadSpeed}
              </p>
            </div>
          )}
        </div>

        {/* PRICE TAG */}
        <div className="mt-5">
          <div className="flex items-baseline space-x-1">
            <span className="text-3xl sm:text-4xl font-black text-brand-orange">
              {formatCurrency(displayPrice)}
            </span>
            <span className="text-sm font-semibold text-slate-500">/ tháng</span>
          </div>
          <p className="text-xs font-semibold text-slate-500 mt-1">
            {billingNote}
          </p>
        </div>

        {/* GIFT BADGE */}
        {giftText ? (
          <div className="mt-3 flex items-center space-x-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200/80">
            <Gift className="h-4 w-4 text-emerald-600 shrink-0" />
            <span className="truncate">{giftText}</span>
          </div>
        ) : (
          <div className="mt-3 text-xs text-slate-400 py-1.5">
            Miễn phí 100% trang bị Modem WiFi 6
          </div>
        )}
      </div>

      {/* FEATURES LIST */}
      <div className="p-6 sm:p-7 pt-5 flex-1 flex flex-col justify-between space-y-6">
        <ul className="space-y-3">
          {item.features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 leading-snug">
              <div className="h-4 w-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
                <Check className="h-2.5 w-2.5 stroke-[3]" />
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* EXTRA DETAILS */}
        {item.devicesRecommended && (
          <div className="pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
            <span>Thiết bị khuyên dùng:</span>
            <span className="font-bold text-slate-700">{item.devicesRecommended}</span>
          </div>
        )}

        {/* ACTION BUTTON */}
        <div className="pt-2">
          <Button
            onClick={() => {
              if (onSelect) {
                onSelect(item);
              } else {
                openRegisterModal({
                  id: item.id,
                  name: item.name,
                  price: displayPrice,
                  category: "ca_nhan",
                  categoryName: item.categoryLabel || "Internet",
                  downloadSpeed: item.speed,
                  uploadSpeed: item.uploadSpeed || "150 Mbps",
                  image: item.image || "/images/giga.webp",
                  modem: item.equipment || "Modem Wi-Fi 6",
                  recommendedDevices: item.devicesRecommended || "1 - 10 thiết bị",
                  features: item.features || [],
                  description: item.description || "",
                });
              }
            }}
            variant={isPopular ? "default" : "primary"}
            className="w-full h-12 rounded-xl font-bold text-sm shadow-md transition-all hover:scale-[1.02] flex items-center justify-center space-x-2"
          >
            <span>Đăng ký gói này</span>
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
