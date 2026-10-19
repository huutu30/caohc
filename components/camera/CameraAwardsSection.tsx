"use client";

import React from "react";
import { Award } from "lucide-react";
import { CAMERA_AWARDS } from "@/data/cameraPageData";

export default function CameraAwardsSection() {
  return (
    <section className="py-12 md:py-20 bg-white" id="giai-thuong-vinh-danh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold mb-3 border border-amber-200">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Thương Hiệu Quốc Gia & Quốc Tế</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Vinh danh Chất lượng và Công nghệ
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Dịch vụ chuyên nghiệp hàng đầu từ FPT Telecom được các tổ chức uy tín hàng đầu trong và ngoài nước công nhận
          </p>
        </div>

        {/* 8 Awards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {CAMERA_AWARDS.map((award) => (
            <div
              key={award.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 md:p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              <div className="w-full h-24 md:h-28 flex items-center justify-center mb-4">
                <img
                  src={award.image}
                  alt={award.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xs md:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase line-clamp-2">
                {award.title}
              </h3>
              <p className="mt-2 text-[11px] md:text-xs text-slate-600 line-clamp-3 leading-relaxed">
                {award.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
