"use client";

import React from "react";
import { User, ArrowRight } from "lucide-react";
import { CA_NHAN_NEEDS } from "@/data/caNhanData";
import { useRegisterModal } from "@/context/RegisterContext";

export default function CaNhanNeedsSection() {
  const { openModal } = useRegisterModal();

  return (
    <section className="py-12 md:py-20 bg-slate-50/70 border-b border-slate-200/80" id="nhu-cau-ca-nhan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3 border border-blue-200">
            <User className="w-3.5 h-3.5 text-blue-600" />
            <span>Phù Hợp Cho Từng Cá Nhân</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Đăng ký gói cước Internet dành cho cá nhân – Giá ưu đãi, nhiều tiện ích
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Dù bạn là học sinh, sinh viên, người đi làm hay nhà sáng tạo nội dung, FPT đều có gói cước đo ni đóng giày phù hợp nhất
          </p>
        </div>

        {/* 4 Persona Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CA_NHAN_NEEDS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-white text-[11px] font-semibold">
                    {item.tag}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                  <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-100 text-xs text-blue-900 font-semibold">
                    {item.recommendedPkg}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  type="button"
                  onClick={() => openModal({ title: `Tư vấn gói cước cho ${item.title}`, category: "tu_van_ca_nhan" })}
                  className="w-full py-2 px-3 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Nhận tư vấn ngay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
