"use client";

import React from "react";
import { Cpu } from "lucide-react";
import { ULTRA_FAST_TECH_ITEMS } from "@/data/gameThuData";

export default function GameThuTechSection() {
  return (
    <section className="py-12 md:py-20 bg-slate-900 text-white" id="cong-nghe-game">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-3 border border-blue-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Công Nghệ Hàng Đầu</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            FPT sử dụng công nghệ nào ở các gói cước wifi dành riêng cho Game thủ / Streamer?
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-400">
            Trí tuệ Nhân tạo AI và Big Data phân tích đường truyền, đảm bảo phản hồi tức thì trong từng pha combat
          </p>
        </div>

        {/* 3 Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ULTRA_FAST_TECH_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-base md:text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
