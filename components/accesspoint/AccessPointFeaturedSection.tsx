"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Wifi, Sparkles, ShieldCheck, ChevronRight, Layers } from "lucide-react";
import { ACCESS_POINT_PRODUCTS } from "@/data/accessPointData";
import { useRegisterModal } from "@/context/RegisterContext";

export default function AccessPointFeaturedSection() {
  const [showAllSpecs, setShowAllSpecs] = useState(false);
  const { openModal } = useRegisterModal();
  const starProduct = ACCESS_POINT_PRODUCTS[0];

  const visibleSpecs = showAllSpecs
    ? starProduct.specs
    : starProduct.specs.slice(0, 5);

  return (
    <section className="py-14 md:py-20 bg-slate-50" id="thiet-bi-noi-bat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold mb-3 border border-orange-200">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Thiết Bị Tiện Ích Bán Chạy Nhất</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Thiết Bị Access Point Wi-Fi 6 AX3000CV2
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Tốc độ cao chuẩn AX3000 160MHz, phủ sóng toàn diện, triệt tiêu mọi góc chết sóng Wi-Fi trong gia đình
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 items-center">
            {/* Product Image Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-square max-w-md bg-gradient-to-tr from-slate-50 to-orange-50/40 rounded-3xl p-8 flex items-center justify-center border border-slate-100 shadow-inner">
                <Image
                  src={starProduct.image}
                  alt={starProduct.name}
                  width={380}
                  height={380}
                  className="object-contain hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                  priority
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold shadow-md">
                  Chuẩn Wi-Fi 6 AX3000
                </div>
              </div>

              <div className="mt-6 flex items-center gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Wifi className="w-4 h-4 text-blue-600" />
                  <span>Kênh rộng 160MHz</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-orange-600" />
                  <span>Easy Mesh R4</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Bảo hành chính hãng</span>
                </div>
              </div>
            </div>

            {/* Product Info & Specs Column */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl md:text-4xl font-extrabold text-orange-600 tracking-tight">
                    {starProduct.price.toLocaleString("vi-VN")}
                  </span>
                  <span className="text-lg font-bold text-orange-600">đ</span>
                  <span className="text-xs text-slate-500 font-medium">(Đã bao gồm VAT)</span>
                </div>
                <p className="text-xs text-slate-400 mb-4 line-through">
                  Giá gốc: {starProduct.originalPrice?.toLocaleString("vi-VN")} đ
                </p>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                  {starProduct.desc}
                </p>

                {/* Features list */}
                <div className="mb-6 space-y-2">
                  {starProduct.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Specs Table */}
                <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6">
                  <div className="bg-slate-100/80 px-4 py-2.5 text-xs font-bold uppercase text-slate-700 tracking-wider">
                    Thông số kỹ thuật chi tiết
                  </div>
                  <div className="divide-y divide-slate-100">
                    {visibleSpecs.map((spec, i) => (
                      <div key={i} className="flex justify-between px-4 py-2.5 text-xs">
                        <span className="text-slate-500 font-medium">{spec.label}</span>
                        <span className="text-slate-900 font-bold text-right ml-4">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowAllSpecs(!showAllSpecs)}
                    className="w-full py-2 bg-slate-50 hover:bg-slate-100 text-blue-600 text-xs font-bold text-center border-t border-slate-100 transition-colors cursor-pointer"
                  >
                    {showAllSpecs ? "Thu gọn thông số" : `Xem đầy đủ thông số (${starProduct.specs.length})`}
                  </button>
                </div>
              </div>

              {/* Action CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() =>
                    openModal({
                      title: "Đăng ký thiết bị Access Point AX3000CV2",
                      category: "thiet_bi",
                    })
                  }
                  className="flex-1 py-3.5 px-6 rounded-xl bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-extrabold text-sm shadow-lg shadow-orange-500/25 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Đăng ký mua thiết bị</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    openModal({
                      title: "Tư vấn gói mạng F1 kèm Mesh Wi-Fi 6",
                      category: "internet_gia_dinh",
                    })
                  }
                  className="py-3.5 px-5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold text-xs sm:text-sm border border-blue-200 transition-all text-center cursor-pointer"
                >
                  Đăng ký kèm gói mạng F1 (Tiết kiệm hơn)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
