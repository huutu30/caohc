"use client";

import * as React from "react";
import Link from "next/link";
import { Wifi, ChevronRight, Gift, MapPin } from "lucide-react";
import FptProductCard from "@/components/fpt/FptProductCard";
import { FPT_PACKAGES } from "@/data/fptPackages";
import { useRegion } from "@/context/RegionContext";
import FaqAccordion from "@/components/FaqAccordion";

export default function InternetPackagesPage() {
  const { activeProvince } = useRegion();
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const categories = [
    { id: "all", label: "Tất cả gói cước" },
    { id: "ca_nhan", label: "Internet cá nhân" },
    { id: "gia_dinh", label: "Internet gia đình" },
    { id: "game_thu", label: "Internet game thủ" },
    { id: "doanh_nghiep", label: "Internet doanh nghiệp" },
  ];

  const filteredPackages =
    selectedCategory === "all"
      ? FPT_PACKAGES
      : FPT_PACKAGES.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen">
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-3">
          <nav className="flex items-center space-x-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#F26F21] transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="font-semibold text-slate-800">Gói cước Internet FPT</span>
          </nav>
        </div>
      </div>

      {/* SUBPAGE HEADER (CLEAN FPT STYLE) */}
      <section className="bg-white border-b border-slate-200/80 py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#004a9c] text-xs font-bold uppercase tracking-wider mb-3">
            <Wifi className="size-3.5" />
            <span>Hạ Tầng Cáp Quang FPT Telecom</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-[#101828]">
            Bảng Giá Gói Cước Internet Cáp Quang Wi-Fi 6
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Trang bị miễn phí Modem Wi-Fi 6 thế hệ mới chuẩn AX siêu tốc. Tốc độ từ 150 Mbps đến 1 Gbps không giới hạn băng thông.
          </p>

          {/* ACTIVE LOCATION PILL */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
            <MapPin className="size-3.5 text-[#F26F21]" />
            <span>Khu vực áp dụng: </span>
            <span className="text-[#004a9c] font-bold">{activeProvince.name}</span>
          </div>
        </div>
      </section>

      {/* ADVANCE PAYMENT PROMOTION BANNER */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 mt-6 sm:mt-8">
        <div className="bg-gradient-to-r from-orange-500 to-[#F26F21] text-white rounded-2xl p-4 sm:p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="size-12 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
              <Gift className="size-6 text-amber-200" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black leading-snug">
                Ưu Đãi Đặc Quyền Khi Thanh Toán Trước Cước
              </h3>
              <p className="text-xs sm:text-sm text-orange-100 mt-0.5">
                Trả trước 6 tháng tặng 01 tháng cước. Trả trước 12 tháng tặng thêm 02 tháng cước sử dụng miễn phí.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="bg-white/20 px-3 py-1.5 rounded-lg text-xs font-bold">
              Miễn phí hòa mạng
            </span>
            <span className="bg-white/20 px-3 py-1.5 rounded-lg text-xs font-bold">
              Trang bị Wi-Fi 6
            </span>
          </div>
        </div>
      </div>

      {/* FILTER TABS & PACKAGES GRID */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
        {/* CATEGORY TABS (FPT.VN PILL STYLE) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2.5 pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                selectedCategory === cat.id
                  ? "border-[#004a9c] text-[#004a9c] bg-blue-50 font-bold shadow-xs"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#004a9c] hover:text-[#004a9c]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* PRODUCT CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => (
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
              }}
            />
          ))}
        </div>
      </section>

      {/* TECHNICAL COMPARISON TABLE */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 pb-12">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-black text-[#101828] mb-6 text-center">
            Bảng So Sánh Thông Số Kỹ Thuật Gói Cước Internet
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-700 font-bold">
                  <th className="py-3 px-4">Gói cước</th>
                  <th className="py-3 px-4">Tốc độ Download</th>
                  <th className="py-3 px-4">Tốc độ Upload</th>
                  <th className="py-3 px-4">Thiết bị trang bị</th>
                  <th className="py-3 px-4">Số thiết bị khuyến nghị</th>
                  <th className="py-3 px-4 text-right">Giá cước niêm yết</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-600">
                {FPT_PACKAGES.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{p.name}</td>
                    <td className="py-3.5 px-4 font-semibold text-[#004a9c]">{p.downloadSpeed}</td>
                    <td className="py-3.5 px-4">{p.uploadSpeed}</td>
                    <td className="py-3.5 px-4 text-slate-700">{p.modem}</td>
                    <td className="py-3.5 px-4">{p.recommendedDevices}</td>
                    <td className="py-3.5 px-4 text-right font-black text-[#F26F21]">
                      {p.price.toLocaleString("vi-VN")} đ
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pb-16">
        <FaqAccordion />
      </div>
    </div>
  );
}
