"use client";

import React from "react";
import { Wifi } from "lucide-react";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";
import { FPT_PACKAGES } from "@/data/fptPackages";

export default function GiaDinhMeshSection() {
  const meshPackages = FPT_PACKAGES.filter((p) => p.category === "gia_dinh");

  const cardItems: FptProductCardItem[] = meshPackages.map((pkg) => ({
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
    <section className="py-12 md:py-20 bg-white" id="goi-cuoc-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3 border border-blue-200">
            <Wifi className="w-3.5 h-3.5 text-blue-600" />
            <span>Wi-Fi 6 Mesh Toàn Diện</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bảng giá gói cước Internet gia đình trang bị Mesh Wi-Fi 6
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Mở rộng vùng phủ sóng xuyên tường và nhiều tầng, tự động chuyển vùng liền mạch không lo gián đoạn kết nối
          </p>
        </div>

        {/* 4 Cards Grid using standard FptProductCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardItems.map((item) => (
            <FptProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
