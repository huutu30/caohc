"use client";

import React from "react";
import { Check, Compass, ArrowRight } from "lucide-react";
import { DOANH_NGHIEP_SOLUTIONS, DoanhNghiepSolution } from "@/data/doanhNghiepData";
import { useRegisterModal } from "@/context/RegisterContext";

export default function DoanhNghiepSolutionsSection() {
  const { openModal } = useRegisterModal();

  return (
    <section className="py-14 md:py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-3 border border-blue-400/30">
            <Compass className="w-3.5 h-3.5" />
            <span>Tư Vấn Tận Tâm</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Giải Pháp May Đo Cho Từng Mô Hình Kinh Doanh
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-300">
            Tối ưu chi phí và hiệu quả đường truyền theo đúng đặc thù và số lượng nhân sự của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DOANH_NGHIEP_SOLUTIONS.map((item: DoanhNghiepSolution, idx: number) => (
            <div
              key={idx}
              className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-600/30 text-blue-300 text-xs font-semibold border border-blue-500/30 mb-4">
                  {item.badge}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-700/60 mb-6">
                  <div className="text-xs text-slate-400 mb-1">Gói cước tối ưu đề xuất:</div>
                  <div className="text-sm font-bold text-blue-400">{item.recommendedPkg}</div>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {item.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() =>
                  openModal({
                    title: `Tư vấn giải pháp: ${item.title}`,
                    category: "internet_doanh_nghiep",
                  })
                }
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Nhận tư vấn giải pháp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
