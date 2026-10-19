"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRegion } from "@/context/RegionContext";
import { FPT_PACKAGES } from "@/data/fptPackages";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";

export default function ExploreProductsTabs() {
  const { activeProvince } = useRegion();
  const [activeTab, setActiveTab] = useState<string>("ca_nhan");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: "ca_nhan", label: "Internet cá nhân" },
    { id: "gia_dinh", label: "Internet gia đình" },
    { id: "game_thu", label: "Internet game thủ" },
    { id: "wifi_7", label: "Wi-Fi 7 Tốc độ cao" },
    { id: "doanh_nghiep", label: "Internet doanh nghiệp" },
  ];

  // Derive card items based on active tab
  const packages = FPT_PACKAGES.filter((p) => p.category === activeTab);
  const cardItems: FptProductCardItem[] = packages.map((pkg) => ({
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
    detailUrl:
      pkg.category === "ca_nhan"
        ? "/internet/ca-nhan"
        : pkg.category === "gia_dinh"
        ? "/internet/gia-dinh"
        : pkg.category === "game_thu"
        ? "/internet/game-thu"
        : pkg.category === "wifi_7"
        ? "/internet-wifi-7-xgspon"
        : pkg.category === "doanh_nghiep"
        ? "/internet/doanh-nghiep"
        : "/internet/ca-nhan",
  }));

  // Reset scroll to start when active tab changes
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeTab]);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === "left" ? -scrollContainerRef.current.clientWidth / 2 : scrollContainerRef.current.clientWidth / 2;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Determine "View All" link based on current tab
  const getViewAllLink = () => {
    switch (activeTab) {
      case "ca_nhan":
        return { href: "/internet/ca-nhan", label: "Xem tất cả gói Internet cá nhân" };
      case "gia_dinh":
        return { href: "/internet/gia-dinh", label: "Xem tất cả gói Internet gia đình" };
      case "game_thu":
        return { href: "/internet/game-thu", label: "Xem chi tiết gói cước Game thủ" };
      case "wifi_7":
        return { href: "/internet-wifi-7-xgspon", label: "Khám phá công nghệ Wi-Fi 7 & XGS-PON" };
      case "doanh_nghiep":
        return { href: "/internet/doanh-nghiep", label: "Xem toàn bộ gói Internet Doanh nghiệp" };
      default:
        return { href: "/internet/ca-nhan", label: "Xem tất cả gói cước Internet FPT" };
    }
  };

  const viewAll = getViewAllLink();

  return (
    <section className="container mx-auto mt-4 mb-8 w-[1440px] max-w-[calc(100%-32px)] md:mt-6 md:mb-10 md:rounded-2xl md:bg-white md:py-8 shadow-xs border border-slate-100 relative">
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

      {/* HORIZONTAL SLIDER CAROUSEL (IDENTICAL TO SECTION 1) */}
      <div className="relative mt-2 px-2 sm:px-6">
        {/* PREV BUTTON */}
        <button
          onClick={() => handleScroll("left")}
          aria-label="Previous slide"
          className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-700 hover:text-[#004a9c] hover:border-[#004a9c] transition-all cursor-pointer"
        >
          <ChevronLeft className="size-5" />
        </button>

        {/* SCROLL CONTAINER */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth no-scrollbar py-3 px-1 snap-x snap-mandatory items-stretch"
        >
          {cardItems.map((item) => (
            <div
              key={item.id}
              className="w-[280px] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] shrink-0 snap-start h-full"
            >
              <FptProductCard item={item} className="h-full" />
            </div>
          ))}
        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={() => handleScroll("right")}
          aria-label="Next slide"
          className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-700 hover:text-[#004a9c] hover:border-[#004a9c] transition-all cursor-pointer"
        >
          <ChevronRight className="size-5" />
        </button>
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
