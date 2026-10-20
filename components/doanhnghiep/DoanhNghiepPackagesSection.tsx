"use client";

import React, { useState } from "react";
import { Zap } from "lucide-react";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";
import { FPT_PACKAGES } from "@/data/fptPackages";

export default function DoanhNghiepPackagesSection() {
  const [activeTab, setActiveTab] = useState<"wifi6" | "super_biz">("wifi6");

  const bizPackages = FPT_PACKAGES.filter((p) => p.category === "doanh_nghiep");

  // Separate Wi-Fi 6 LUX packages from Super Biz
  const wifi6Packages = bizPackages.filter(
    (p) => p.id === "lux500" || p.id === "lux800"
  );
  const superBizPackages = bizPackages.filter(
    (p) => p.id !== "lux500" && p.id !== "lux800"
  );

  const activeList = activeTab === "wifi6" ? wifi6Packages : superBizPackages;

  const cardItems: FptProductCardItem[] = activeList.map((pkg) => ({
    id: pkg.id,
    name: pkg.name,
    category: pkg.category,
    badge: pkg.badge || "DOANH NGHIỆP",
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
    <section className="py-14 md:py-20 bg-slate-50" id="goi-cuoc-doanh-nghiep">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-3 border border-blue-200">
            <Zap className="w-3.5 h-3.5 text-blue-700" />
            <span>Bảng Giá Gói Cước Mới Nhất</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Gói Cước Internet Doanh Nghiệp FPT
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Tặng kèm địa chỉ IP Tĩnh độc quyền, trang bị thiết bị Gateway công nghiệp và cam kết băng thông quốc tế ổn định
          </p>

          {/* Tab buttons */}
          <div className="mt-8 inline-flex p-1.5 bg-slate-200/80 rounded-2xl">
            <button
              type="button"
              onClick={() => setActiveTab("wifi6")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "wifi6"
                  ? "bg-white text-blue-800 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Gói Wi-Fi 6 Doanh Nghiệp (LUX)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("super_biz")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "super_biz"
                  ? "bg-white text-blue-800 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Cáp Quang Chuyên Dụng (Super Biz)
            </button>
          </div>
        </div>

        {/* Packages Grid using standard FptProductCard */}
        <div
          className={`flex overflow-x-auto gap-4 pb-4 pt-1 px-4 -mx-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:gap-6 items-stretch snap-x snap-mandatory no-scrollbar ${
            activeTab === "wifi6"
              ? "sm:grid-cols-2 max-w-4xl mx-auto"
              : "sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
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
