"use client";

import React from "react";
import { Trophy } from "lucide-react";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";
import { FPT_VVIP_SPORTS_COMBOS } from "@/data/fptPackages";
import { useRegion } from "@/context/RegionContext";

export default function CaNhanSportsSection() {
  const { region } = useRegion();

  const targetIds = [
    "combo-giga-vvip",
    "combo-sky-vvip",
    "combo-meta-vvip",
  ];

  // Nội thành (region === "hcm") không áp dụng bán gói Combo Giga V.VIP
  const combos = FPT_VVIP_SPORTS_COMBOS.filter((c) => {
    if (!targetIds.includes(c.id)) return false;
    if (region === "hcm" && (c.id === "combo-giga-vvip" || c.priceNoiThanh === null)) {
      return false;
    }
    return true;
  });

  const cardItems: FptProductCardItem[] = combos.map((c) => ({
    id: c.id,
    name: c.name,
    category: "combo",
    badge: c.badge || "NGOẠI HẠNG ANH",
    isPopular: c.isPopular,
    image: c.image,
    price: { hcm: c.priceNoiThanh || c.priceNgoaiThanh, tinh: c.priceNgoaiThanh },
    speed: c.downloadSpeed,
    uploadSpeed: c.uploadSpeed,
    equipment: "Modem Wi-Fi 6 + FPT Play V.VIP",
    features: c.features,
    description: c.description,
    detailUrl: `/ngoai-hang-anh`,
  }));

  return (
    <section className="py-12 md:py-20 bg-white" id="combo-the-thao">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold mb-3 border border-orange-200">
            <Trophy className="w-3.5 h-3.5 text-orange-600" />
            <span>Đam Mê Bất Tận</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Combo Internet & Truyền hình Thể Thao – Trọn vẹn Ngoại Hạng Anh
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Tận hưởng 380 trận cầu nảy lửa Ngoại Hạng Anh chất lượng Full HD sắc nét cùng đường truyền Wi-Fi 6 mượt mà
          </p>
        </div>

        {/* Cards Grid using standard FptProductCard */}
        <div
          className={`flex overflow-x-auto gap-4 pb-4 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:gap-6 max-w-5xl mx-auto items-stretch snap-x snap-mandatory no-scrollbar ${
            combos.length === 2 ? "sm:grid-cols-2 max-w-3xl" : "sm:grid-cols-2 md:grid-cols-3"
          }`}
        >
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
