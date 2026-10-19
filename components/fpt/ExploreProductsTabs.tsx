"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useRegion } from "@/context/RegionContext";
import { FPT_PACKAGES } from "@/data/fptPackages";
import FptProductCard from "@/components/fpt/FptProductCard";

export default function ExploreProductsTabs() {
  const { activeProvince } = useRegion();
  const [activeTab, setActiveTab] = useState<string>("ca_nhan");

  const tabs = [
    { id: "ca_nhan", label: "Internet cá nhân" },
    { id: "gia_dinh", label: "Internet gia đình" },
    { id: "game_thu", label: "Internet game thủ" },
    { id: "doanh_nghiep", label: "Internet doanh nghiệp" },
  ];

  const packages = FPT_PACKAGES.filter((p) => p.category === activeTab);

  return (
    <section className="container mx-auto mt-4 mb-8 w-[1440px] max-w-[calc(100%-32px)] md:mt-6 md:mb-10 md:rounded-2xl md:bg-white md:py-8 shadow-xs border border-slate-100">
      {/* SECTION TITLE WITH DYNAMIC PROVINCE */}
      <h2 className="text-[20px] sm:text-[28px] leading-10 font-bold px-4 text-center text-slate-900 tracking-tight">
        Xem ngay khuyến mãi gói cước Internet FPT tại{" "}
        <span className="text-[#004a9c] border-b-2 border-[#004a9c] pb-0.5">
          {activeProvince.name}
        </span>
      </h2>

      {/* TABS (PILL BUTTONS MATCHING FPT.VN) */}
      <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-3 p-4 pt-6 no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
              activeTab === tab.id
                ? "border-[#004a9c] text-[#004a9c] bg-blue-50 font-bold shadow-xs"
                : "border-slate-200 bg-white text-slate-600 hover:border-[#004a9c] hover:text-[#004a9c]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* PACKAGES GRID USING STANDARDIZED FPT PRODUCT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 pt-2">
        {packages.map((pkg) => (
          <FptProductCard
            key={pkg.id}
            item={{
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
              recommendedDevices: pkg.recommendedDevices,
              description: pkg.description,
              features: pkg.features,
              detailUrl: `/goi-cuoc/internet/${pkg.id}`,
            }}
          />
        ))}
      </div>

      {/* VIEW ALL LINK */}
      <div className="text-center mt-6">
        <Link
          href="/goi-cuoc/internet"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#004a9c] hover:text-[#f57020] transition-colors"
        >
          <span>Xem tất cả gói cước Internet FPT</span>
          <ChevronRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
