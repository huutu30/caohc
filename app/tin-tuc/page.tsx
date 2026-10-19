"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, Newspaper } from "lucide-react";
import { NEWS_LIST } from "@/lib/packages";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const categories = [
    { id: "all", label: "Tất cả bài viết" },
    { id: "Công nghệ", label: "Công nghệ WiFi 6" },
    { id: "Khuyến mãi", label: "Khuyến mãi HOT" },
    { id: "Hướng dẫn", label: "Hướng dẫn mạng" },
    { id: "Doanh nghiệp", label: "Giải pháp B2B" },
    { id: "Mẹo công nghệ", label: "Mẹo sử dụng" },
  ];

  const filteredNews =
    selectedCategory === "all"
      ? NEWS_LIST
      : NEWS_LIST.filter((n) => n.category === selectedCategory);

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
            <Newspaper className="h-4 w-4" />
            <span>Thông Tin & Khuyến Mãi FPT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Tin Tức & Sự Kiện FPT Telecom
          </h1>
          <p className="mt-4 text-blue-100 text-sm sm:text-base max-w-2xl mx-auto">
            Cập nhật các chương trình ưu đãi hòa mạng mới nhất, kiến thức công nghệ mạng WiFi 6 và xu hướng giải trí số.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === c.id
                  ? "bg-brand-blue text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <article
              key={news.id}
              className="group flex flex-col rounded-3xl bg-white overflow-hidden border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
            >
              <Link href={`/tin-tuc/${news.slug}`} className="relative h-52 w-full overflow-hidden bg-slate-100 block">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-brand-blue/90 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                  {news.category}
                </div>
              </Link>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center text-slate-400 text-xs mb-3 space-x-3">
                    <span className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {news.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      {news.readTime}
                    </span>
                  </div>

                  <Link href={`/tin-tuc/${news.slug}`}>
                    <h2 className="text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                      {news.title}
                    </h2>
                  </Link>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {news.excerpt}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 flex items-center">
                    <User className="h-3.5 w-3.5 mr-1 text-slate-400" />
                    {news.author}
                  </span>
                  <Link
                    href={`/tin-tuc/${news.slug}`}
                    className="inline-flex items-center text-xs font-bold text-brand-blue group-hover:text-brand-orange transition-colors"
                  >
                    <span>Chi tiết</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
