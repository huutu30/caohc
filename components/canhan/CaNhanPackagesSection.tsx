"use client";

import React from "react";
import { Wifi } from "lucide-react";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";
import { FPT_PACKAGES } from "@/data/fptPackages";

export default function CaNhanPackagesSection() {
  const targetIds = ["giga", "sky", "meta", "f-game"];
  const caNhanPackages = FPT_PACKAGES.filter((p) => targetIds.includes(p.id));

  const cardItems: FptProductCardItem[] = caNhanPackages.map((pkg) => ({
    id: pkg.id,
    name: pkg.name,
    category: pkg.category,
    badge: pkg.badge,
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
    <section className="py-12 md:py-20 bg-slate-50/70 border-b border-slate-200/80" id="goi-cuoc-ca-nhan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3 border border-blue-200">
            <Wifi className="w-3.5 h-3.5 text-blue-600" />
            <span>Mạng Cáp Quang Wi-Fi 6 Đơn Lẻ</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Các gói cước Internet cá nhân FPT – Linh hoạt nhu cầu, dễ chọn theo mức sử dụng
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Trang bị miễn phí Modem Wi-Fi 6 thế hệ mới chuẩn AX, đường truyền tốc độ cao ổn định và mượt mà
          </p>
        </div>

        {/* 4 Cards Grid using standard FptProductCard */}
        <div className="flex overflow-x-auto gap-4 pb-4 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 items-stretch snap-x snap-mandatory no-scrollbar">
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
