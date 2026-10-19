"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { ACCESS_POINT_FAQS } from "@/data/accessPointData";

export default function AccessPointFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="py-14 md:py-20 bg-slate-50 border-t border-slate-200" id="faqs-access-point">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-semibold mb-3 border border-orange-200">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Giải Đáp Thắc Mắc</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Câu Hỏi Thường Gặp Về Thiết Bị Access Point FPT
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Mọi điều bạn cần biết về chuẩn Wi-Fi 6, khả năng phủ sóng và chính sách bảo hành thiết bị
          </p>
        </div>

        <div className="space-y-3">
          {ACCESS_POINT_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-orange-600 text-sm md:text-base transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-orange-100 text-orange-600" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
