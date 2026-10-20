"use client";

import React from "react";
import { Zap } from "lucide-react";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";
import { FPT_PACKAGES } from "@/data/fptPackages";

export default function GameThuSpeedXSection() {
  const speedXPackages = FPT_PACKAGES.filter(
    (p) => p.id === "speedx2-pro" || p.id === "speedx10-pro"
  );

  const cardItems: FptProductCardItem[] = speedXPackages.map((pkg) => ({
    id: pkg.id,
    name: pkg.name,
    category: pkg.category,
    badge: pkg.badge || "WI-FI 7 ESPORTS",
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

  return (
    <section className="py-12 md:py-20 bg-white border-b border-slate-200" id="goi-cuoc-speedx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 text-xs font-semibold mb-3 border border-cyan-200">
            <Zap className="w-3.5 h-3.5 text-cyan-600" />
            <span>Kỷ Nguyên Wi-Fi 7 XGSPON</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Gói cước SpeedX Wi-Fi 7 – Bứt phá tốc độ đến 10 Gbps cho Game thủ Hardcore
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Độ trễ tiệm cận 0ms, công nghệ Multi-Link Operation (MLO) đa băng tần độc quyền từ FPT Telecom
          </p>
        </div>

        {/* 2 SpeedX Cards Grid using standard FptProductCard */}
        <div className="flex overflow-x-auto gap-4 pb-4 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 sm:gap-6 max-w-4xl mx-auto items-stretch snap-x snap-mandatory no-scrollbar">
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
