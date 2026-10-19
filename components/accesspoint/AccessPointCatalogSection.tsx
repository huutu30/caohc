"use client";

import React from "react";
import Image from "next/image";
import { Check, ArrowRight, Zap } from "lucide-react";
import { ACCESS_POINT_PRODUCTS, AccessPointProduct } from "@/data/accessPointData";
import { useRegisterModal } from "@/context/RegisterContext";

export default function AccessPointCatalogSection() {
  const { openModal } = useRegisterModal();

  return (
    <section className="py-14 md:py-20 bg-white" id="danh-muc-access-point">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3 border border-blue-200">
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>Hệ Sinh Thái Thiết Bị Mở Rộng Sóng</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Danh Mục Thiết Bị Access Point FPT
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Đa dạng tùy chọn phù hợp mọi diện tích nhà ở, căn hộ chung cư và văn phòng làm việc
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACCESS_POINT_PRODUCTS.map((prod: AccessPointProduct) => (
            <div
              key={prod.id}
              className={`rounded-3xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                prod.highlight
                  ? "border-orange-500 shadow-xl ring-2 ring-orange-500/10 bg-white"
                  : "border-slate-200 shadow-sm hover:shadow-lg bg-white"
              }`}
            >
              <div>
                {/* Badge */}
                {prod.badge && (
                  <div className="inline-block px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-[11px] font-bold mb-3">
                    {prod.badge}
                  </div>
                )}

                {/* Image */}
                <div className="relative aspect-square w-full max-w-[240px] mx-auto bg-slate-50 rounded-2xl p-4 mb-4 flex items-center justify-center">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    width={200}
                    height={200}
                    className="object-contain hover:scale-105 transition-transform"
                  />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">{prod.name}</h3>
                <div className="text-xs font-semibold text-blue-600 mb-3">{prod.speed}</div>

                <div className="flex items-baseline gap-1.5 mb-4 pb-4 border-b border-slate-100">
                  <span className="text-2xl font-black text-orange-600">
                    {prod.price.toLocaleString("vi-VN")} đ
                  </span>
                  {prod.originalPrice && (
                    <span className="text-xs text-slate-400 line-through">
                      {prod.originalPrice.toLocaleString("vi-VN")} đ
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {prod.desc}
                </p>

                <ul className="space-y-2 mb-6">
                  {prod.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() =>
                  openModal({
                    title: `Đăng ký ${prod.name}`,
                    category: "thiet_bi",
                  })
                }
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                  prod.highlight
                    ? "bg-orange-600 hover:bg-orange-500 text-white shadow-orange-500/20 active:scale-95"
                    : "bg-slate-900 hover:bg-blue-600 text-white active:scale-95"
                }`}
              >
                <span>Đăng ký mua thiết bị</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
