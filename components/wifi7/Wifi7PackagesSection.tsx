"use client";

import React from "react";
import { Zap, Check, ArrowDown, ArrowUp, Cpu } from "lucide-react";
import { WIFI7_PACKAGES, Wifi7Package } from "@/data/wifi7Data";
import { useRegisterModal } from "@/context/RegisterContext";

export default function Wifi7PackagesSection() {
  const { openModal } = useRegisterModal();

  const handleRegister = (pkg: Wifi7Package) => {
    openModal({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      title: `Đăng ký ${pkg.name}`,
      category: "wifi7",
    });
  };

  return (
    <section className="py-12 md:py-20 bg-slate-900 text-white border-t border-slate-800" id="goi-cuoc-wifi7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-3 border border-cyan-500/20">
            <Zap className="w-3.5 h-3.5" />
            <span>Bảng Giá Gói Cước Mới Nhất</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Các gói cước FPT Wi-Fi 7 siêu tốc độ
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-400">
            Trải nghiệm công nghệ cáp quang tương lai XGSPON với tốc độ đối xứng lên tới 10 Gbps
          </p>
        </div>

        {/* 6 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WIFI7_PACKAGES.map((pkg) => {
            const isHighlight = pkg.highlight;
            const isDiscounted = pkg.originalPrice && pkg.originalPrice > pkg.price;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl bg-slate-950 border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isHighlight
                    ? "border-cyan-500 shadow-2xl shadow-cyan-500/15 ring-2 ring-cyan-500/30 scale-102 lg:-translate-y-1.5"
                    : "border-slate-800 shadow-sm hover:border-cyan-500/50 hover:-translate-y-1"
                }`}
              >
                {/* Ribbon badge */}
                {pkg.badge && (
                  <div className={`py-1 px-3 text-center text-xs font-bold uppercase tracking-wider ${
                    isHighlight
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                      : "bg-slate-800 text-slate-300 border-b border-slate-700"
                  }`}>
                    {pkg.badge}
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                      <Cpu className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-3 mb-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-cyan-400">
                        {pkg.price.toLocaleString("vi-VN")}đ
                      </span>
                      <span className="text-xs text-slate-400 font-medium">/tháng</span>
                    </div>
                    {isDiscounted && (
                      <span className="text-xs text-slate-500 line-through">
                        {pkg.originalPrice?.toLocaleString("vi-VN")}đ
                      </span>
                    )}
                  </div>

                  {/* Speed Dial Box */}
                  <div className="bg-slate-900 rounded-xl p-3.5 border border-slate-800 mb-5">
                    <div className="text-[11px] text-slate-400 mb-1 font-medium">Tốc độ đối xứng</div>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                      <div className="flex items-center gap-1 text-cyan-400">
                        <ArrowDown className="w-3.5 h-3.5" />
                        <span>{pkg.speedDownload}</span>
                      </div>
                      <div className="flex items-center gap-1 text-blue-400">
                        <ArrowUp className="w-3.5 h-3.5" />
                        <span>{pkg.speedUpload}</span>
                      </div>
                    </div>
                  </div>

                  {/* Devices & Features list */}
                  <div className="space-y-2 text-xs text-slate-300 flex-1">
                    <div className="font-semibold text-white text-[11px] uppercase tracking-wider">
                      Trang bị công nghệ:
                    </div>
                    {pkg.devices.map((dev, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 font-medium text-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                        <span>{dev}</span>
                      </div>
                    ))}

                    <div className="pt-3 border-t border-slate-800 space-y-2">
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-slate-400">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
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
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25 active:scale-95"
                        : "bg-slate-800 hover:bg-cyan-500 hover:text-white text-slate-200 border border-slate-700"
                    }`}
                  >
                    Đăng ký gói cước
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
