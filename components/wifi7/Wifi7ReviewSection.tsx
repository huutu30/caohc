"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { WIFI7_REVIEWS, Wifi7ReviewItem } from "@/data/wifi7Data";

export default function Wifi7ReviewSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Đánh giá thực tế
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
            Góc Nhìn Từ Các Chuyên Gia Công Nghệ
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Các reviewer hàng đầu Việt Nam trải nghiệm và đánh giá thực tế tốc độ mạng Wi-Fi 7 XGSPON FPT.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WIFI7_REVIEWS.map((review: Wifi7ReviewItem, index: number) => (
            <div
              key={index}
              onClick={() => setActiveVideo(review.youtubeId)}
              className="group cursor-pointer bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
                <Image
                  src={review.image}
                  alt={review.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600/90 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/30">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-md bg-black/70 backdrop-blur text-[11px] font-semibold text-blue-400 border border-blue-500/30">
                  {review.channel}
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-sm font-semibold text-slate-200 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {review.title}
                </h3>
                <div className="mt-3 text-xs text-blue-400 flex items-center gap-1 font-medium">
                  Xem video review &rarr;
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Popup Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-slate-800/80 text-white flex items-center justify-center hover:bg-slate-700 transition"
              aria-label="Đóng"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Review Wi-Fi 7 FPT"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
