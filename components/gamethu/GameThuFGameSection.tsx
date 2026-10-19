"use client";

import React from "react";
import { Flame } from "lucide-react";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";
import { FPT_PACKAGES } from "@/data/fptPackages";

export default function GameThuFGameSection() {
  const gamePackages = FPT_PACKAGES.filter((p) => p.category === "game_thu");

  const cardItems: FptProductCardItem[] = gamePackages.map((pkg) => ({
    id: pkg.id,
    name: pkg.name,
    category: pkg.category,
    badge: pkg.badge || "GAME THỦ",
    isPopular: pkg.isHot,
    image: pkg.image,
    price: pkg.price,
    speed: pkg.downloadSpeed,
    uploadSpeed: pkg.uploadSpeed,
    equipment: pkg.modem,
    features: pkg.features,
    description: pkg.description,
    recommendedDevices: pkg.recommendedDevices,
    detailUrl: `/internet/${pkg.id}`,
  }));

  return (
    <section className="py-12 md:py-20 bg-slate-50 border-b border-slate-200" id="goi-cuoc-fgame">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-semibold mb-3 border border-red-200">
            <Flame className="w-3.5 h-3.5 text-red-600" />
            <span>Công Nghệ Ultra Fast Độc Quyền</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Các gói cước game thủ F-Game – Tối ưu tốc độ, giảm ping, chơi game mượt hơn
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Hạ ping thần tốc, chống rớt gói vượt trội cho hơn 50+ tựa game online hot nhất hiện nay
          </p>
        </div>

        {/* Product Cards Grid using standard FptProductCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {cardItems.map((item) => (
            <FptProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
