import React from "react";
import Image from "next/image";
import { Building2 } from "lucide-react";
import { DOANH_NGHIEP_PILLARS } from "@/data/doanhNghiepData";

export default function DoanhNghiepPillarsSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3 border border-blue-200">
            <Building2 className="w-3.5 h-3.5" />
            <span>Tiêu Chuẩn Kết Nối Doanh Nghiệp</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Giải Pháp Mạng Chuyên Biệt Cho Doanh Nghiệp Của Bạn
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            FPT Telecom đồng hành cùng hàng chục ngàn doanh nghiệp Việt Nam với hạ tầng băng thông rộng ổn định và an toàn tối đa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOANH_NGHIEP_PILLARS.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-6 hover:shadow-lg hover:border-blue-500/30 transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 p-2.5 mb-5 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
