"use client";

import React from "react";
import { Tv, Check, Flame, ArrowDown, ArrowUp } from "lucide-react";
import { CA_NHAN_SPORTS_COMBOS, CaNhanPackage } from "@/data/caNhanData";
import { useRegisterModal } from "@/context/RegisterContext";

export default function CaNhanSportsSection() {
  const { openModal } = useRegisterModal();

  const handleRegister = (pkg: CaNhanPackage) => {
    openModal({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      title: `Đăng ký ${pkg.name}`,
      category: "combo_ca_nhan",
    });
  };

  return (
    <section className="py-12 md:py-20 bg-white" id="combo-the-thao">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold mb-3 border border-orange-200">
            <Flame className="w-3.5 h-3.5 text-orange-600" />
            <span>Ngoại Hạng Anh Đỉnh Cao</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Bảng giá gói cước thể thao – Trọn vẹn giải trí, nhận thêm ưu đãi
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Xem trọn vẹn 380 trận Ngoại Hạng Anh và các giải thể thao hàng đầu thế giới trên đường truyền Wi-Fi 6 siêu tốc
          </p>
        </div>

        {/* 3 Sports Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CA_NHAN_SPORTS_COMBOS.map((pkg) => {
            const isHighlight = pkg.highlight;
            const isDiscounted = pkg.originalPrice && pkg.originalPrice > pkg.price;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl bg-white transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isHighlight
                    ? "border-2 border-orange-500 shadow-xl shadow-orange-500/10 scale-102 lg:-translate-y-2 ring-2 ring-orange-500/20"
                    : "border border-slate-200/90 shadow-sm hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {/* Ribbon badge */}
                {pkg.badge && (
                  <div className={`py-1 px-3 text-center text-xs font-bold uppercase tracking-wider ${
                    isHighlight
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                      : "bg-slate-100 text-slate-700 border-b border-slate-200"
                  }`}>
                    {pkg.badge}
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900">{pkg.name}</h3>
                    <div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                      <Tv className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-3 mb-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-orange-600">
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
                    <div className="text-[11px] text-slate-500 mb-1 font-medium">Tốc độ (Download/Upload)</div>
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
                  <div className="space-y-2 text-xs text-slate-600 flex-1">
                    <div className="font-semibold text-slate-800 text-[11px] uppercase tracking-wider">
                      Trang bị kèm theo:
                    </div>
                    {pkg.devices.map((dev, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 font-medium text-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-1.5" />
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
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-md shadow-orange-500/20 active:scale-95"
                        : "bg-slate-100 hover:bg-orange-500 hover:text-white text-slate-800 border border-slate-200"
                    }`}
                  >
                    Đăng ký gói thể thao
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
