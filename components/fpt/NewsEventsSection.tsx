"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { NEWS_LIST } from "@/lib/packages";

export default function NewsEventsSection() {
  const newsItems = NEWS_LIST.slice(0, 4);

  return (
    <section className="container mx-auto mt-4 mb-8 w-[1440px] max-w-[calc(100%-32px)] md:mt-6 md:mb-10 md:rounded-2xl md:bg-white md:py-8 shadow-xs border border-slate-100">
      <h2 className="text-[22px] sm:text-[28px] leading-10 font-bold px-4 text-center text-slate-900 tracking-tight">
        Tin tức & Sự kiện
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-6 pt-6">
        {newsItems.map((news) => (
          <Link
            key={news.id}
            href={`/tin-tuc/${news.slug}`}
            className="group flex flex-col rounded-2xl bg-white overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            {/* THUMBNAIL (ASPECT 704/419 MATCHING FPT.VN) */}
            <div className="relative aspect-[704/419] w-full overflow-hidden bg-slate-100">
              <Image
                src={news.image}
                alt={news.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* TITLE & LINK */}
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#004a9c] bg-blue-50 px-2 py-0.5 rounded-full inline-block mb-2">
                  {news.category}
                </span>
                <h3 className="text-sm sm:text-base leading-[22px] font-semibold text-slate-900 group-hover:text-[#004a9c] transition-colors line-clamp-2">
                  {news.title}
                </h3>
              </div>

              <div className="mt-4 pt-2 flex items-center text-xs font-semibold text-[#004a9c] group-hover:text-[#f57020] transition-colors">
                <span>Xem thêm</span>
                <ChevronRight className="size-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* VIEW ALL LINK */}
      <div className="text-center mt-2 pb-2">
        <Link
          href="/tin-tuc"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#004a9c] hover:text-[#f57020] transition-colors"
        >
          <span>Xem tất cả tin tức & sự kiện</span>
          <ChevronRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
