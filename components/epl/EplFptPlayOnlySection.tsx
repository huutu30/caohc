"use client";

import React from "react";
import Image from "next/image";
import { Info } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";
import { useProductDetail } from "@/context/ProductDetailContext";

export default function EplFptPlayOnlySection() {
  const { openRegisterModal } = useRegister();
  const { openDetailModal } = useProductDetail();

  const vvipPackages = [
    {
      id: "goi-vvip1",
      name: "Gói V.VIP 1",
      price: 120000,
      image: "/images/fpt_vvip_1.webp",
      features: [
        "Kho giải trí đa dạng, đặc biệt bóng đá Anh và bóng đá Việt",
        "Xem Ngoại Hạng Anh & FA Cup trên 1 thiết bị (Nội dung khác 5 thiết bị)",
        "Gần 100 kênh truyền hình, phim bộ, phim bom tấn Âu Mỹ",
        "Hỗ trợ xem trên TV, Box, Mobile, Web, Desktop App",
        "Chất lượng Full HD 1080p; hỗ trợ 4K",
      ],
      description:
        "Trọn vẹn giải trí đỉnh cao, đặc biệt bóng đá Ngoại Hạng Anh & FA Cup. Xem trên 1 thiết bị với nội dung thể thao, 5 thiết bị cho các nội dung giải trí khác.",
    },
    {
      id: "goi-vvip2",
      name: "Gói V.VIP 2",
      price: 140000,
      image: "/images/fpt_vvip_2.webp",
      features: [
        "Kho giải trí đa dạng, đặc biệt bóng đá Anh và bóng đá Việt",
        "Xem Ngoại Hạng Anh & FA Cup trên 2 thiết bị cùng lúc (Nội dung khác 5 thiết bị)",
        "Gần 100 kênh truyền hình, phim bộ, phim bom tấn Âu Mỹ",
        "Hỗ trợ xem trên TV, Box, Mobile, Web, Desktop App",
        "Chất lượng Full HD 1080p; hỗ trợ 4K",
      ],
      description:
        "Trọn vẹn giải trí đỉnh cao, bản quyền độc quyền Ngoại Hạng Anh & FA Cup. Đăng nhập và xem đồng thời trên 2 thiết bị cùng lúc cho thể thao.",
    },
  ];

  return (
    <section className="w-full relative py-12 sm:py-20 text-white bg-gradient-to-b from-[#0a051d] via-[#0d092b] to-[#040212] overflow-hidden border-t border-white/10">
      {/* Background Stadium Glow & Ambient Light */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-purple-600/20 blur-[120px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Bảng giá Xem Ngoại Hạng Anh 2026-27 với gói V.VIP FPT Play
          </h2>
        </div>

        {/* 2 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {vvipPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-2xl overflow-hidden bg-gradient-to-b from-[#131d42]/95 to-[#0c132f]/98 border border-[#2b3a67]/70 shadow-2xl flex flex-col justify-between transition-all duration-300 hover:border-amber-400/50 hover:shadow-amber-500/10 group"
            >
              {/* Header Image */}
              <div className="relative w-full aspect-[1250/902] overflow-hidden bg-[#0d1430]">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 450px"
                  priority
                />
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1.5">
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="text-2xl sm:text-3xl font-black text-[#f5a623] tracking-tight">
                      {new Intl.NumberFormat("vi-VN").format(pkg.price)}đ
                    </span>
                    <span className="text-xs sm:text-sm text-slate-400 font-medium">
                      /tháng
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        openDetailModal({
                          id: pkg.id,
                          name: pkg.name,
                          category: "ca_nhan",
                          categoryName: "Tài khoản FPT Play",
                          downloadSpeed: "Tốc độ cao",
                          uploadSpeed: "Tốc độ cao",
                          price: pkg.price,
                          features: pkg.features,
                          description: pkg.description,
                          image: pkg.image,
                          modem: "Thiết bị xem cá nhân / Smart TV",
                          recommendedDevices: "1 - 5 thiết bị",
                        })
                      }
                      className="text-slate-400 hover:text-amber-400 transition ml-1 p-0.5 rounded cursor-pointer"
                      title="Xem thông tin chi tiết gói"
                    >
                      <Info className="size-4" />
                    </button>
                  </div>

                  {/* Feature Bullets */}
                  <ul className="space-y-3 text-xs sm:text-[13px] text-slate-200 border-t border-white/10 pt-4">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="shrink-0 mt-0.5 text-emerald-400">
                          {/* Neon Green Soccer Ball Icon with orbital effect */}
                          <svg
                            className="size-4.5"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <circle cx="12" cy="12" r="9" stroke="currentColor" />
                            <path
                              d="M12 7l3 2.5v3.5l-3 2.5-3-2.5V9.5z"
                              fill="currentColor"
                              fillOpacity="0.25"
                            />
                            <path d="M12 7V3M15 9.5l3.5-2M15 13l3.5 2M12 15.5V21M9 13l-3.5 2M9 9.5l-3.5-2" />
                          </svg>
                        </span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-7 pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      openRegisterModal({
                        id: pkg.id,
                        name: pkg.name,
                        categoryName: "Tài khoản FPT Play",
                        price: pkg.price,
                        features: pkg.features,
                      })
                    }
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#f5a623] via-[#ffb834] to-[#f5a623] hover:from-[#e59515] hover:to-[#e59515] text-[#1c1204] text-sm sm:text-base font-black tracking-wider uppercase transition-all shadow-lg shadow-amber-500/20 active:scale-[0.99] cursor-pointer"
                  >
                    ĐĂNG KÝ NGAY
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
