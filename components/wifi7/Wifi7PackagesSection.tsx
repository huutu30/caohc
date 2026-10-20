"use client";

import React from "react";
import { Zap } from "lucide-react";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";
import { FPT_PACKAGES, FPT_VVIP_SPORTS_COMBOS } from "@/data/fptPackages";

export default function Wifi7PackagesSection() {
  const wifi7Pkgs = FPT_PACKAGES.filter((p) => p.category === "wifi_7");
  const comboWifi7 = FPT_VVIP_SPORTS_COMBOS.find((c) => c.id === "combo-speedx1-vvip");

  const cardItems: FptProductCardItem[] = wifi7Pkgs.map((pkg) => ({
    id: pkg.id,
    name: pkg.name,
    category: pkg.category,
    badge: pkg.badge || "CHUẨN WI-FI 7",
    isPopular: pkg.isHot,
    image: pkg.image,
    price: pkg.price,
    speed: pkg.downloadSpeed,
    uploadSpeed: pkg.uploadSpeed,
    equipment: pkg.modem,
    features: pkg.features,
    description: pkg.description,
    recommendedDevices: pkg.recommendedDevices,
    detailUrl: `/internet-wifi-7-xgspon`,
  }));

  // Insert Combo SpeedX1 VVIP if available
  if (comboWifi7) {
    cardItems.splice(2, 0, {
      id: comboWifi7.id,
      name: comboWifi7.name,
      category: "combo",
      badge: comboWifi7.badge || "BÁN CHẠY NHẤT",
      isPopular: true,
      image: comboWifi7.image,
      price: { hcm: comboWifi7.priceNoiThanh ?? comboWifi7.priceNgoaiThanh, tinh: comboWifi7.priceNgoaiThanh },
      speed: comboWifi7.downloadSpeed,
      uploadSpeed: comboWifi7.uploadSpeed,
      equipment: "Modem Wi-Fi 7 + FPT Play V.VIP",
      features: comboWifi7.features,
      description: comboWifi7.description,
      detailUrl: `/ngoai-hang-anh`,
    });
  }

  return (
    <section className="py-12 md:py-20 bg-slate-900 border-t border-slate-800" id="goi-cuoc-wifi7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-3 border border-cyan-500/20">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Bảng Giá Gói Cước Mới Nhất</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Các gói cước FPT Wi-Fi 7 siêu tốc độ
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-400">
            Trải nghiệm công nghệ cáp quang tương lai XGSPON với tốc độ đối xứng lên tới 10 Gbps
          </p>
        </div>

        {/* 6 Packages Grid using standard FptProductCard */}
        <div className="flex overflow-x-auto gap-4 pb-4 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 items-stretch snap-x snap-mandatory no-scrollbar">
          {cardItems.map((item) => (
            <div key={item.id} className="w-[285px] sm:w-auto shrink-0 sm:shrink snap-start h-full flex flex-col">
              <FptProductCard item={item} className="h-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
