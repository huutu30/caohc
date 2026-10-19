"use client";

import React from "react";
import { Home, ArrowRight } from "lucide-react";
import { HOUSING_NEEDS } from "@/data/giaDinhData";
import { useRegisterModal } from "@/context/RegisterContext";

export default function GiaDinhNeedsSection() {
  const { openModal } = useRegisterModal();

  return (
    <section className="py-12 md:py-20 bg-slate-50/70 border-b border-slate-200/80" id="nhu-cau-khong-gian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3 border border-blue-200">
            <Home className="w-3.5 h-3.5 text-blue-600" />
            <span>Tối Ưu Cho Mọi Không Gian</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Gợi ý gói cước Internet gia đình theo không gian sống
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Lựa chọn gói mạng thông minh theo diện tích và kết cấu ngôi nhà giúp tối ưu chi phí và phủ sóng khỏe nhất
          </p>
        </div>

        {/* 3 Housing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOUSING_NEEDS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-semibold">
                    {item.area}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-100 text-xs text-blue-900 font-semibold flex items-center justify-between">
                    <span>Đề xuất: {item.recommendedPkg}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => openModal({ title: `Tư vấn mạng cho ${item.title}`, category: "tu_van_gia_dinh" })}
                  className="w-full py-2.5 px-4 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold text-xs md:text-sm transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Tư vấn phương án tối ưu</span>
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
