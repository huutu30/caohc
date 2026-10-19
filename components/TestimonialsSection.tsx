"use client";

import * as React from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";
import { TESTIMONIALS } from "@/lib/packages";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const item = TESTIMONIALS[currentIndex];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="h-4 w-4" />
            <span>Phản Hồi Thực Tế</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Khách Hàng Nói Gì Về FPT Telecom?
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Hàng ngàn gia đình, game thủ và chủ doanh nghiệp đã tin tưởng đồng hành cùng chúng tôi
          </p>
        </div>

        {/* TESTIMONIAL CAROUSEL CONTAINER */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative rounded-3xl bg-white p-8 sm:p-12 shadow-2xl border border-slate-200/90 overflow-hidden">
            <Quote className="absolute right-6 top-6 h-24 w-24 text-blue-50 -z-0 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              {/* AVATAR & INFO */}
              <div className="flex flex-col items-center text-center shrink-0">
                <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-brand-orange-light shadow-lg mb-4">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-lg font-black text-slate-900 leading-snug">
                  {item.name}
                </h4>
                <p className="text-xs font-semibold text-brand-blue mt-0.5">
                  {item.role}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {item.location}
                </p>
                <span className="mt-2 inline-flex items-center text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {item.packageUsed}
                </span>
              </div>

              {/* QUOTE & STARS */}
              <div className="flex-1 text-center md:text-left">
                {/* 5 STARS */}
                <div className="flex items-center justify-center md:justify-start space-x-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <blockquote className="text-base sm:text-xl text-slate-700 font-medium italic leading-relaxed">
                  &ldquo;{item.content}&rdquo;
                </blockquote>
              </div>
            </div>

            {/* CONTROLS */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? "w-8 bg-brand-orange" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                    }`}
                    aria-label={`Xem đánh giá ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={prev}
                  className="h-10 w-10 rounded-xl bg-slate-100 hover:bg-brand-blue hover:text-white text-slate-700 flex items-center justify-center transition-colors"
                  aria-label="Đánh giá trước"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  className="h-10 w-10 rounded-xl bg-slate-100 hover:bg-brand-blue hover:text-white text-slate-700 flex items-center justify-center transition-colors"
                  aria-label="Đánh giá tiếp theo"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
