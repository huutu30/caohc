"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useRegion } from "@/context/RegionContext";
import { FPT_PACKAGES, VVIP_SPORTS_PACKAGES } from "@/data/fptPackages";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";

export default function ExploreProductsTabs() {
  const { activeProvince } = useRegion();
  const [activeTab, setActiveTab] = useState<string>("ca_nhan");

  const tabs = [
    { id: "ca_nhan", label: "Internet cá nhân" },
    { id: "gia_dinh", label: "Internet gia đình" },
    { id: "game_thu", label: "Internet game thủ" },
    { id: "combo_vvip", label: "Combo Thể Thao V.VIP" },
    { id: "wifi_7", label: "Wi-Fi 7 Tốc độ cao" },
    { id: "doanh_nghiep", label: "Internet doanh nghiệp" },
  ];

  // Derive card items based on active tab
  let cardItems: FptProductCardItem[] = [];

  if (activeTab === "combo_vvip") {
    const isNoiThanh = activeProvince.region === "hcm";
    const availableCombos = isNoiThanh
      ? VVIP_SPORTS_PACKAGES.filter((c) => c.id !== "combo-giga-vvip")
      : VVIP_SPORTS_PACKAGES;
    cardItems = availableCombos.map((c) => ({
      id: c.id,
      name: c.name,
      category: "combo",
      badge: c.badge,
      isPopular: c.isPopular,
      image: c.image,
      price: {
        hcm: c.priceNoiThanh,
        tinh: c.priceNgoaiThanh,
      },
      speed: c.downloadSpeed,
      uploadSpeed: c.uploadSpeed,
      equipment: "Modem Wi-Fi 6 + Box FPT Play Voice 4K",
      features: c.features,
      description: c.description,
      recommendedDevices: "Xem cùng lúc 3 - 5 thiết bị",
      detailUrl: `/ngoai-hang-anh`,
    }));
  } else {
    const packages = FPT_PACKAGES.filter((p) => p.category === activeTab);
    cardItems = packages.map((pkg) => ({
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
      detailUrl: pkg.category === "wifi_7" 
        ? "/internet/wifi-7" 
        : pkg.category === "doanh_nghiep"
        ? "/internet/doanh-nghiep"
        : `/goi-cuoc/internet/${pkg.id}`,
    }));
  }

  // Determine "View All" link based on current tab
  const getViewAllLink = () => {
    switch (activeTab) {
      case "ca_nhan":
        return { href: "/internet/ca-nhan", label: "Xem tất cả gói Internet cá nhân" };
      case "gia_dinh":
        return { href: "/internet/gia-dinh", label: "Xem tất cả gói Internet gia đình" };
      case "game_thu":
        return { href: "/internet/game-thu", label: "Xem chi tiết gói cước Game thủ" };
      case "combo_vvip":
        return { href: "/ngoai-hang-anh", label: "Xem tất cả Combo Ngoại Hạng Anh V.VIP" };
      case "wifi_7":
        return { href: "/internet/wifi-7", label: "Khám phá công nghệ Wi-Fi 7 & XGS-PON" };
      case "doanh_nghiep":
        return { href: "/internet/doanh-nghiep", label: "Xem toàn bộ gói Internet Doanh nghiệp" };
      default:
        return { href: "/goi-cuoc/internet", label: "Xem tất cả gói cước Internet FPT" };
    }
  };

  const viewAll = getViewAllLink();

  return (
    <section className="container mx-auto mt-4 mb-8 w-[1440px] max-w-[calc(100%-32px)] md:mt-6 md:mb-10 md:rounded-2xl md:bg-white md:py-8 shadow-xs border border-slate-100">
      {/* SECTION TITLE WITH DYNAMIC PROVINCE */}
      <h2 className="text-[20px] sm:text-[28px] leading-10 font-bold px-4 text-center text-slate-900 tracking-tight">
        Xem ngay khuyến mãi gói cước FPT Telecom tại{" "}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 sm:p-6 pt-2 items-stretch">
        {cardItems.map((item) => (
          <FptProductCard key={item.id} item={item} className="h-full" />
        ))}
      </div>

      {/* VIEW ALL LINK */}
      <div className="text-center mt-6">
        <Link
          href={viewAll.href}
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#004a9c] hover:text-[#f57020] transition-colors"
        >
          <span>{viewAll.label}</span>
          <ChevronRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
