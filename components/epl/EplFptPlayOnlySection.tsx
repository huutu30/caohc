"use client";

import React from "react";
import { Check, Tv } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

export default function EplFptPlayOnlySection() {
  const { openRegisterModal } = useRegister();

  const playPackages = [
    {
      id: "fpt-play-vvip-1",
      name: "Gói FPT Play V.VIP 1",
      badge: "Cá Nhân",
      price: 89000,
      devices: "Xem đồng thời trên 01 thiết bị",
      features: [
        "Trọn vẹn 380 trận Ngoại Hạng Anh trực tiếp Full HD, 4K",
        "Đăng nhập và xem cùng lúc trên 01 thiết bị",
        "Gần 120 kênh truyền hình giải trí trong nước và quốc tế",
        "Xem mượt mà trên Smart TV, Smartphone, Tablet, PC",
        "Kho phim chiếu rạp, anime và show truyền hình đặc sắc",
      ],
      isPopular: false,
    },
    {
      id: "fpt-play-vvip-2",
      name: "Gói FPT Play V.VIP 2",
      badge: "Xem Nhiều Nhất",
      price: 120000,
      devices: "Xem đồng thời trên 02 thiết bị",
      features: [
        "Bản quyền độc quyền 380 trận Ngoại Hạng Anh (EPL)",
        "Đăng nhập và xem cùng lúc trên 02 thiết bị",
        "Trọn gói Cúp C1 UEFA Champions League, Europa League",
        "Theo dõi FA Cup, giải bóng đá vô địch quốc gia V.League",
        "Không giới hạn kho phim bom tấn chiếu rạp 4K",
      ],
      isPopular: true,
    },
    {
      id: "fpt-play-svip",
      name: "Gói FPT Play SVIP",
      badge: "Đặc Quyền VIP",
      price: 140000,
      devices: "Xem đồng thời trên 05 thiết bị",
      features: [
        "Đặc quyền xem cùng lúc lên đến 05 thiết bị",
        "Toàn bộ thể thao đỉnh cao: EPL, Cúp C1, NBA, Golf, MMA",
        "Không bị làm phiền bởi quảng cáo khi xem phim (No-Ads)",
        "Hỗ trợ kênh âm thanh vòm Dolby 5.1 sống động",
        "Đặc quyền ưu tiên băng thông truyền hình FPT Play",
      ],
      isPopular: false,
    },
  ];

  return (
    <section className="w-full bg-[#03091e] py-12 sm:py-16 text-white border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Tv className="size-3.5" />
            <span>Chỉ Mua Tài Khoản FPT Play</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Gói Tài Khoản FPT Play Xem Ngoại Hạng Anh
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Dành cho khách hàng đã có sẵn mạng Internet và chỉ có nhu cầu đăng ký tài khoản FPT Play xem trên Smart TV, Điện thoại hoặc Máy tính.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {playPackages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                pkg.isPopular
                  ? "bg-gradient-to-b from-[#142d72] to-[#0a183d] border-2 border-orange-500 shadow-xl shadow-orange-500/15 scale-100 sm:scale-105 relative z-10"
                  : "bg-[#0b1b44]/70 border border-white/10 hover:border-white/20"
              }`}
            >
              {pkg.isPopular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-[11px] font-black uppercase tracking-wider shadow">
                  {pkg.badge}
                </span>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-black text-white">{pkg.name}</h3>
                  {!pkg.isPopular && (
                    <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-bold text-slate-300">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-black text-[#f57020]">
                      {new Intl.NumberFormat("vi-VN").format(pkg.price)}đ
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/tháng</span>
                  </div>
                  <span className="text-[11px] text-amber-300 font-bold block mt-1">
                    {pkg.devices}
                  </span>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-300 border-t border-white/10 pt-4">
                  {pkg.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="size-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <button
                  onClick={() =>
                    openRegisterModal({
                      id: pkg.id,
                      name: pkg.name,
                      categoryName: "Tài khoản FPT Play",
                      price: pkg.price,
                      features: pkg.features,
                    })
                  }
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#e86010] to-[#ff7d2e] hover:from-[#d5540a] hover:to-[#e86010] text-white text-xs font-black uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  Đăng ký tài khoản
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
