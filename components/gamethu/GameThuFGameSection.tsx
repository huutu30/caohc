"use client";

import React from "react";
import { Gamepad2, Check, ArrowDown, ArrowUp, Flame, Shield } from "lucide-react";
import { GAME_THU_FGAME_PACKAGES, GameThuPackage } from "@/data/gameThuData";
import { useRegisterModal } from "@/context/RegisterContext";

export default function GameThuFGameSection() {
  const { openModal } = useRegisterModal();

  const handleRegister = (pkg: GameThuPackage) => {
    openModal({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      title: `Đăng ký ${pkg.name}`,
      category: "internet_game_thu",
    });
  };

  return (
    <section className="py-12 md:py-20 bg-slate-900 text-white relative overflow-hidden" id="goi-cuoc-fgame">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold mb-3 border border-red-500/20">
            <Flame className="w-3.5 h-3.5" />
            <span>Công Nghệ Ultra Fast Độc Quyền</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Các gói cước game thủ F-Game – Tối ưu tốc độ, giảm ping, chơi game mượt hơn
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-300">
            Hạ ping thần tốc, chống rớt gói vượt trội cho hơn 50+ tựa game online hot nhất hiện nay
          </p>
        </div>

        {/* 3 F-Game Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {GAME_THU_FGAME_PACKAGES.map((pkg) => {
            const isHighlight = pkg.highlight;
            const isDiscounted = pkg.originalPrice && pkg.originalPrice > pkg.price;
            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl bg-slate-800/90 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isHighlight
                    ? "border-2 border-red-500 shadow-2xl shadow-red-500/20 scale-102 lg:-translate-y-2 ring-2 ring-red-500/30"
                    : "border border-slate-700/80 shadow-sm hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {/* Ribbon badge */}
                {pkg.badge && (
                  <div className={`py-1 px-3 text-center text-xs font-bold uppercase tracking-wider ${
                    isHighlight
                      ? "bg-gradient-to-r from-red-600 to-orange-600 text-white"
                      : "bg-slate-700 text-slate-300 border-b border-slate-600"
                  }`}>
                    {pkg.badge}
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center shrink-0 border border-red-500/20">
                      <Gamepad2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mt-3 mb-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-red-400">
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
                  <div className="bg-slate-900/80 rounded-xl p-3.5 border border-slate-700/80 mb-5">
                    <div className="text-[11px] text-slate-400 mb-1 font-medium">Băng thông chiến game</div>
                    <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                      <div className="flex items-center gap-1 text-emerald-400">
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
                      Trang bị thiết bị:
                    </div>
                    {pkg.devices.map((dev, idx) => (
                      <div key={idx} className="flex items-start gap-1.5 font-medium text-slate-200">
                        <Shield className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                        <span>{dev}</span>
                      </div>
                    ))}

                    <div className="pt-3 border-t border-slate-700/80 space-y-2">
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-slate-300">
                          <Check className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
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
                        ? "bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-lg shadow-red-500/25 active:scale-95"
                        : "bg-slate-700 hover:bg-red-600 text-white border border-slate-600"
                    }`}
                  >
                    Đăng ký gói game thủ
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
