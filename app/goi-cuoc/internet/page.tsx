"use client";

import * as React from "react";
import { Wifi } from "lucide-react";
import PricingCard from "@/components/PricingCard";
import ComparisonTable from "@/components/ComparisonTable";
import FaqAccordion from "@/components/FaqAccordion";
import { INTERNET_PACKAGES } from "@/lib/packages";

export default function InternetPackagesPage() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "6months" | "12months">("6months");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const categories = [
    { id: "all", label: "Tất cả gói cước" },
    { id: "personal", label: "Cá nhân" },
    { id: "family", label: "Gia đình" },
    { id: "gaming", label: "Gaming / Streamer" },
    { id: "enterprise", label: "Doanh nghiệp" },
  ];

  const filteredPackages =
    selectedCategory === "all"
      ? INTERNET_PACKAGES
      : INTERNET_PACKAGES.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* HERO BANNER FOR INTERNET PAGE */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
            <Wifi className="h-4 w-4" />
            <span>Hạ Tầng Cáp Quang FPT Telecom</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Bảng Giá Gói Cước Internet Cáp Quang WiFi 6
          </h1>
          <p className="mt-4 text-blue-100 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Tốc độ siêu tốc từ 150 Mbps đến 1 Gbps. Miễn phí thiết bị Modem WiFi 6 chuẩn AX tân tiến nhất, tặng thêm đến 2 tháng cước sử dụng khi trả trước.
          </p>

          {/* BILLING CYCLE SELECTOR */}
          <div className="mt-10 inline-flex p-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-brand-blue shadow-lg scale-105"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Trả theo tháng
            </button>
            <button
              onClick={() => setBillingCycle("6months")}
              className={`relative px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === "6months"
                  ? "bg-brand-orange text-white shadow-cta scale-105"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <span>Đóng 6 tháng</span>
              <span className="absolute -top-3 -right-2 bg-amber-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                TẶNG 1 THÁNG
              </span>
            </button>
            <button
              onClick={() => setBillingCycle("12months")}
              className={`relative px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === "12months"
                  ? "bg-brand-orange text-white shadow-cta scale-105"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <span>Đóng 12 tháng</span>
              <span className="absolute -top-3 -right-2 bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                TẶNG 2 THÁNG
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* FILTER BUTTONS & PACKAGES GRID */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6">
        {/* CATEGORY FILTER PILLS */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-brand-blue text-white shadow-md scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* PACKAGES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <PricingCard
              key={pkg.id}
              item={pkg}
              billingCycle={billingCycle}
            />
          ))}
        </div>
      </section>

      {/* DETAILED COMPARISON TABLE */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Bảng So Sánh Thông Số Kỹ Thuật Chi Tiết
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Xem rõ thông số băng thông quốc tế, loại thiết bị và khả năng đáp ứng
            </p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* FAQ SECTION */}
      <FaqAccordion />
    </div>
  );
}
