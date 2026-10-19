"use client";

import React from "react";
import { Flame } from "lucide-react";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";
import { FPT_VVIP_SPORTS_COMBOS } from "@/data/fptPackages";

export default function GiaDinhVvipSection() {
  // Select top family VVIP sports combos
  const targetIds = [
    "combo-giga-vvip",
    "combo-sky-vvip",
    "combo-sky-f1-vvip",
    "combo-meta-vvip",
    "combo-speedx1-vvip",
  ];

  const combos = FPT_VVIP_SPORTS_COMBOS.filter((c) => targetIds.includes(c.id));

  const cardItems: FptProductCardItem[] = combos.map((c) => ({
    id: c.id,
    name: c.name,
    category: "combo",
    badge: c.badge || "V.VIP THỂ THAO",
    isPopular: c.isPopular,
    image: c.image,
    price: { hcm: c.priceNoiThanh, tinh: c.priceNgoaiThanh },
    speed: c.downloadSpeed,
    uploadSpeed: c.uploadSpeed,
    equipment: "Modem Wi-Fi 6 + FPT Play V.VIP",
    features: c.features,
    description: c.description,
    detailUrl: `/ngoai-hang-anh`,
  }));

  return (
    <section className="py-12 md:py-20 bg-slate-50/70 border-b border-slate-200/80" id="combo-vvip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold mb-3 border border-orange-200">
            <Flame className="w-3.5 h-3.5 text-orange-600" />
            <span>Combo Internet & Truyền Hình Bản Quyền</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Đăng ký Internet truyền hình với Combo VVIP – Trọn vẹn giải trí cùng gia đình
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Tận hưởng đường truyền Wi-Fi 6 thế hệ mới kết hợp trọn bộ 380 trận Ngoại Hạng Anh & Cúp C1 đỉnh cao
          </p>
        </div>

        {/* Product Cards Grid using standard FptProductCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {cardItems.map((item) => (
            <FptProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
