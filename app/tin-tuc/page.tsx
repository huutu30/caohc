"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, Newspaper, ArrowRight } from "lucide-react";
import { NEWS_LIST } from "@/lib/packages";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const categories = [
    { id: "all", label: "Tất cả bài viết" },
    { id: "Khuyến mãi", label: "Khuyến mãi HOT" },
    { id: "Công nghệ", label: "Công nghệ Wi-Fi 6" },
    { id: "Doanh nghiệp", label: "Giải pháp Doanh nghiệp" },
    { id: "Mẹo công nghệ", label: "Đời sống số" },
  ];

  const filteredNews =
    selectedCategory === "all"
      ? NEWS_LIST
      : NEWS_LIST.filter((n) => n.category === selectedCategory);

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen">
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-3">
          <nav className="flex items-center space-x-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#F26F21] transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="font-semibold text-slate-800">Tin tức & Sự kiện</span>
          </nav>
        </div>
      </div>

      {/* SUBPAGE HEADER (CLEAN FPT STYLE) */}
      <section className="bg-white border-b border-slate-200/80 py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#004a9c] text-xs font-bold uppercase tracking-wider mb-3">
            <Newspaper className="size-3.5" />
            <span>Thông Tin & Khuyến Mại FPT Telecom</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-[#101828]">
            Tin Tức & Sự Kiện FPT Telecom
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Cập nhật các chương trình ưu đãi hòa mạng mới nhất, công nghệ Wi-Fi 6 và xu hướng giải trí thể thao đa phương tiện.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER & NEWS GRID */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
        {/* TABS (FPT.VN PILL STYLE) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2.5 pb-4 mb-8 no-scrollbar">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                selectedCategory === c.id
                  ? "border-[#004a9c] text-[#004a9c] bg-blue-50 font-bold shadow-xs"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[#004a9c] hover:text-[#004a9c]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* NEWS GRID (ASPECT 704/419 MATCHING FPT.VN) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <Link
              key={news.id}
              href={`/tin-tuc/${news.slug}`}
              className="group flex flex-col rounded-2xl bg-white overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* THUMBNAIL (704/419 RATIO) */}
              <div className="relative aspect-[704/419] w-full overflow-hidden bg-slate-100">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* BODY */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2.5">
                    <span className="font-bold text-[#004a9c] bg-blue-50 px-2.5 py-0.5 rounded-full text-[11px]">
                      {news.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="size-3 text-slate-400" />
                      <span>{news.date}</span>
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#004a9c] transition-colors leading-snug line-clamp-2">
                    {news.title}
                  </h2>
                  <p className="mt-2 text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {news.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#004a9c] group-hover:text-[#F26F21] transition-colors">
                  <span>Đọc tiếp</span>
                  <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
