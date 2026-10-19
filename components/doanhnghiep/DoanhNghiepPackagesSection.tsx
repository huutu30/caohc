"use client";

import React, { useState } from "react";
import { Zap, Check, ArrowRight, ShieldCheck, Server, Users } from "lucide-react";
import { DOANH_NGHIEP_PACKAGES, DoanhNghiepPackage } from "@/data/doanhNghiepData";
import { useRegisterModal } from "@/context/RegisterContext";

export default function DoanhNghiepPackagesSection() {
  const [activeTab, setActiveTab] = useState<"wifi6" | "super_biz">("wifi6");
  const { openModal } = useRegisterModal();

  const filteredPackages = DOANH_NGHIEP_PACKAGES.filter(
    (pkg) => pkg.type === activeTab
  );

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

        {/* Packages Grid */}
        <div
          className={`grid gap-6 ${
            activeTab === "wifi6"
              ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
          }`}
        >
          {filteredPackages.map((pkg: DoanhNghiepPackage) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                pkg.highlight
                  ? "border-blue-600 shadow-xl ring-2 ring-blue-500/20"
                  : "border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300"
              }`}
            >
              {pkg.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
                  {pkg.badge}
                </div>
              )}

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-black text-slate-900">
                  {pkg.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>Quy mô: <strong>{pkg.recommendedScale}</strong></span>
                </p>

                {/* Price block */}
                <div className="mt-5 pb-5 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-extrabold text-blue-700 tracking-tight">
                      {pkg.price.toLocaleString("vi-VN")}
                    </span>
                    <span className="text-sm font-medium text-slate-500">đ/tháng</span>
                  </div>
                  {pkg.originalPrice && (
                    <div className="text-xs text-slate-400 line-through mt-0.5">
                      {pkg.originalPrice.toLocaleString("vi-VN")} đ/tháng
                    </div>
                  )}
                  <div className="mt-2 text-[11px] text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md inline-block">
                    Giá chưa bao gồm VAT. Xuất hóa đơn GTGT đầy đủ
                  </div>
                </div>

                {/* Speed & Key Highlights */}
                <div className="py-4 space-y-2.5 border-b border-slate-100 text-xs sm:text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <Zap className="w-4 h-4 text-amber-500" />
                      Tốc độ trong nước:
                    </span>
                    <span className="font-extrabold text-slate-900">{pkg.speedDownload}</span>
                  </div>
                  {pkg.internationalSpeed && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 flex items-center gap-1.5">
                        <Server className="w-4 h-4 text-blue-500" />
                        Băng thông quốc tế:
                      </span>
                      <span className="font-bold text-blue-700">{pkg.internationalSpeed}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Địa chỉ IP:
                    </span>
                    <span className="font-bold text-emerald-600">{pkg.ipStatic}</span>
                  </div>
                </div>

                {/* Hardware Devices */}
                <div className="py-4 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Trang bị thiết bị
                  </span>
                  <div className="space-y-1.5">
                    {pkg.devices.map((device, i) => (
                      <div key={i} className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span>{device}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Feature checklist */}
                <div className="pt-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                    Đặc quyền dịch vụ
                  </span>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action CTA */}
              <div className="p-6 md:p-8 pt-0">
                <button
                  type="button"
                  onClick={() =>
                    openModal({
                      title: `Đăng ký gói doanh nghiệp ${pkg.name}`,
                      category: "internet_doanh_nghiep",
                    })
                  }
                  className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    pkg.highlight
                      ? "bg-blue-700 hover:bg-blue-800 text-white shadow-blue-500/20 active:scale-95"
                      : "bg-slate-900 hover:bg-blue-700 text-white active:scale-95"
                  }`}
                >
                  <span>Đăng ký tư vấn doanh nghiệp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
