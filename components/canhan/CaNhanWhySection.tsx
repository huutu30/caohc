"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { CA_NHAN_WHY_ITEMS } from "@/data/caNhanData";

export default function CaNhanWhySection() {
  return (
    <section className="py-12 md:py-20 bg-white" id="vi-sao-chon-ca-nhan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold mb-3 border border-orange-200">
            <Sparkles className="w-3.5 h-3.5 text-orange-600" />
            <span>Đặc Quyền Cá Nhân</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Vì sao gói cước Internet cá nhân FPT là lựa chọn phù hợp cho bạn
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Trải nghiệm mạng tốc độ cao với chi phí tiết kiệm tối đa, thủ tục nhanh chóng chỉ trong vài phút
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CA_NHAN_WHY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 p-2.5 mb-5 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
