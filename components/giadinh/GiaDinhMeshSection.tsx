"use client";

import React from "react";
import { Wifi, Check, ArrowDown, ArrowUp, Layers } from "lucide-react";
import { GIA_DINH_MESH_PACKAGES, GiaDinhPackage } from "@/data/giaDinhData";
import { useRegisterModal } from "@/context/RegisterContext";

export default function GiaDinhMeshSection() {
  const { openModal } = useRegisterModal();

  const handleRegister = (pkg: GiaDinhPackage) => {
    openModal({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      title: `Đăng ký ${pkg.name}`,
      category: "internet_gia_dinh",
    });
  };

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

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GIA_DINH_MESH_PACKAGES.map((pkg) => {
            const isHighlight = pkg.highlight;
            const isDiscounted = pkg.originalPrice && pkg.originalPrice > pkg.price;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl bg-white transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isHighlight
                    ? "border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 scale-102 lg:-translate-y-2 ring-2 ring-emerald-500/20"
                    : "border border-slate-200/90 shadow-sm hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {/* Ribbon badge */}
                {pkg.badge && (
                  <div className={`py-1 px-3 text-center text-xs font-bold uppercase tracking-wider ${
                    isHighlight
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white"
                      : "bg-slate-100 text-slate-700 border-b border-slate-200"
                  }`}>
                    {pkg.badge}
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col">
                  {/* Title & Icon */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900 line-clamp-1">{pkg.name}</h3>
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-3 mb-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-slate-900">
                        {pkg.price.toLocaleString("vi-VN")}đ
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/tháng</span>
                    </div>
                    {isDiscounted && (
                      <span className="text-xs text-slate-400 line-through">
                        {pkg.originalPrice?.toLocaleString("vi-VN")}đ
                      </span>
                    )}
                  </div>

                  {/* Speed Dial Box */}
                  <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 mb-5">
                    <div className="text-[11px] text-slate-500 mb-1 font-medium">Băng thông tối đa</div>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                      <div className="flex items-center gap-1 text-emerald-600">
                        <ArrowDown className="w-3.5 h-3.5" />
                        <span>{pkg.speedDownload}</span>
                      </div>
                      <div className="flex items-center gap-1 text-blue-600">
                        <ArrowUp className="w-3.5 h-3.5" />
                        <span>{pkg.speedUpload}</span>
                      </div>
                    </div>
                  </div>

                  {/* Devices & Features list */}
                  <div className="space-y-2.5 text-xs text-slate-600 flex-1">
                    <div className="font-semibold text-slate-800 text-[11px] uppercase tracking-wider">
                      Trang bị thiết bị:
                    </div>
                    {pkg.devices.map((dev, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 font-medium text-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                        <span>{dev}</span>
                      </div>
                    ))}

                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-slate-500">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Register Button */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => handleRegister(pkg)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs md:text-sm font-bold transition-all ${
                      isHighlight
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-500/20 active:scale-95"
                        : "bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-800 border border-slate-200"
                    }`}
                  >
                    Đăng ký ngay
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
