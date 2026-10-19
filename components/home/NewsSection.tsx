"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar, ChevronRight, ArrowRight } from "lucide-react";
import { NEWS_LIST } from "@/lib/packages";

export default function NewsSection() {
  const latestNews = NEWS_LIST.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#004a9c] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="h-4 w-4" />
              <span>Bản Tin Công Nghệ & Khuyến Mãi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Tin Tức FPT Telecom Mới Nhất
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm">
              Cập nhật các chương trình ưu đãi hòa mạng mới và cẩm nang công nghệ số
            </p>
          </div>
          <Link
            href="/tin-tuc"
            className="text-xs sm:text-sm font-bold text-[#004a9c] hover:text-[#f57020] transition-colors flex items-center shrink-0"
          >
            <span>Xem toàn bộ tin tức</span>
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        {/* 4 NEWS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestNews.map((news) => (
            <Link
              key={news.id}
              href={`/tin-tuc/${news.slug}`}
              className="group flex flex-col rounded-3xl bg-white overflow-hidden border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#004a9c]/90 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {news.category}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-slate-400 text-[11px] mb-2 space-x-2">
                    <Calendar className="h-3 w-3" />
                    <span>{news.date}</span>
                    <span>•</span>
                    <span>{news.readTime}</span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#004a9c] transition-colors line-clamp-2 leading-snug">
                    {news.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {news.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-bold text-[#004a9c] group-hover:text-[#f57020] transition-colors">
                  <span>Đọc tiếp</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
