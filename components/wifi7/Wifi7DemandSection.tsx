import React from "react";
import Image from "next/image";
import { WIFI7_DEMAND_ITEMS } from "@/data/wifi7Data";

export default function Wifi7DemandSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Sẵn sàng cho kỷ nguyên số
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Đáp Ứng Mọi Nhu Cầu Tương Lai
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Công nghệ Wi-Fi 7 thế hệ mới cùng hạ tầng XGSPON đáp ứng xuất sắc các tiêu chuẩn kết nối khắt khe nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WIFI7_DEMAND_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-850/80 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 w-full bg-slate-800 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-700/50 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Đề xuất:</span>
                  <span className="font-semibold text-cyan-400">{item.recommendedPkg}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
