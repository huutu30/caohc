import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck } from "lucide-react";
import { DOANH_NGHIEP_FEATURES } from "@/data/doanhNghiepData";

export default function DoanhNghiepFeaturesSection() {
  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3 border border-blue-200">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Năng Lực Hạ Tầng</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Vì Sao Doanh Nghiệp Nên Lựa Chọn Internet FPT?
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Sở hữu hạ tầng viễn thông đạt chuẩn quốc tế cùng hệ thống giám sát và vận hành mạng thông minh 24/7.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {DOANH_NGHIEP_FEATURES.map((feature, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`flex flex-col ${
                  isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-8 lg:gap-14 bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 md:p-10`}
              >
                <div className="w-full lg:w-1/2 relative aspect-video rounded-2xl overflow-hidden shadow-md bg-slate-200">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full lg:w-1/2">
                  <span className="inline-block px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-bold mb-3">
                    {feature.tag}
                  </span>
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-snug mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {feature.desc}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-xs md:text-sm font-semibold text-blue-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cam kết tính sẵn sàng của đường truyền đạt trên 99.9%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
