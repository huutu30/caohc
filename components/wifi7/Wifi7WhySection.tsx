"use client";

import React from "react";
import Image from "next/image";
import { Cpu } from "lucide-react";
import { WIFI7_WHY_ITEMS } from "@/data/wifi7Data";

export default function Wifi7WhySection() {
  return (
    <section className="py-12 md:py-20 bg-slate-950 text-white" id="vi-sao-chon-wifi7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-3 border border-cyan-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Đột Phá Băng Thông</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Vì sao chọn SpeedX – Wi-Fi 7 của FPT
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-400">
            Bứt phá giới hạn tốc độ và độ trễ với tiêu chuẩn kết nối không dây hiện đại bậc nhất thế giới
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WIFI7_WHY_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm hover:shadow-xl hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 p-3 mb-5 flex items-center justify-center group-hover:scale-110 group-hover:border-cyan-500/50 transition-all duration-300">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-base md:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
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
