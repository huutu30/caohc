"use client";

import React from "react";
import { Tv, Check, ArrowDown, ArrowUp, Flame, Shield } from "lucide-react";
import { GIA_DINH_VVIP_COMBOS, GiaDinhPackage } from "@/data/giaDinhData";
import { useRegisterModal } from "@/context/RegisterContext";

export default function GiaDinhVvipSection() {
  const { openModal } = useRegisterModal();

  const handleRegister = (pkg: GiaDinhPackage) => {
    openModal({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      title: `Đăng ký ${pkg.name}`,
      category: "combo_gia_dinh",
    });
  };

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

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {GIA_DINH_VVIP_COMBOS.map((pkg) => {
            const isHighlight = pkg.highlight;
            const isDiscounted = pkg.originalPrice && pkg.originalPrice > pkg.price;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl bg-white transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isHighlight
                    ? "border-2 border-blue-600 shadow-xl shadow-blue-500/10 scale-102 lg:-translate-y-2 ring-2 ring-blue-600/20"
                    : "border border-slate-200/90 shadow-sm hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {/* Ribbon badge */}
                {pkg.badge && (
                  <div className={`py-1 px-3 text-center text-[11px] font-bold uppercase tracking-wider ${
                    isHighlight
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                      : "bg-slate-100 text-slate-700 border-b border-slate-200"
                  }`}>
                    {pkg.badge}
                  </div>
                )}

                <div className="p-5 flex-1 flex flex-col">
                  {/* Title & Speed */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-slate-900 line-clamp-1">{pkg.name}</h3>
                    <div className="w-7 h-7 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                      <Tv className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-3 mb-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-blue-600">
                        {pkg.price.toLocaleString("vi-VN")}đ
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">/tháng</span>
                    </div>
                    {isDiscounted && (
                      <span className="text-[11px] text-slate-400 line-through">
                        {pkg.originalPrice?.toLocaleString("vi-VN")}đ
                      </span>
                    )}
                  </div>

                  {/* Speed Dial Box */}
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-4">
                    <div className="text-[11px] text-slate-500 mb-1 font-medium">Tốc độ (Download/Upload)</div>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                      <div className="flex items-center gap-1 text-emerald-600">
                        <ArrowDown className="w-3 h-3" />
                        <span>{pkg.speedDownload}</span>
                      </div>
                      <div className="flex items-center gap-1 text-blue-600">
                        <ArrowUp className="w-3 h-3" />
                        <span>{pkg.speedUpload}</span>
                      </div>
                    </div>
                  </div>

                  {/* Devices & Features list */}
                  <div className="space-y-2 text-xs text-slate-600 flex-1">
                    <div className="font-semibold text-slate-800 text-[11px] uppercase tracking-wider">
                      Trang bị kèm theo:
                    </div>
                    {pkg.devices.map((dev, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 font-medium text-slate-700">
                        <Shield className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{dev}</span>
                      </div>
                    ))}

                    <div className="pt-2 border-t border-slate-100 space-y-1.5">
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-500">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Register Button */}
                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => handleRegister(pkg)}
                    className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                      isHighlight
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 active:scale-95"
                        : "bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 border border-slate-200"
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
