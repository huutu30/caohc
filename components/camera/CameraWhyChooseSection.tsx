"use client";

import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { WHY_CHOOSE_ITEMS } from "@/data/cameraPageData";

export default function CameraWhyChooseSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="py-12 md:py-20 bg-white" id="vi-sao-chon-camera">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Vì sao nên chọn FPT Camera
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Giải pháp an ninh thông minh Make in Vietnam với công nghệ AI hàng đầu và bảo mật tuyệt đối
          </p>
        </div>

        {/* Video Banner Feature */}
        <div className="relative mb-12 md:mb-16 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 group">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] max-h-[480px] bg-slate-900">
            <img
              src="/images/camera/image_video.png"
              alt="Camera AI thông minh, kháng nước, kháng bụi, chịu nhiệt, sắc nét"
              className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
              loading="lazy"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-10">
              <div className="max-w-3xl">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-semibold uppercase tracking-wider mb-2 backdrop-blur-sm">
                  Công Nghệ Tiên Phong
                </span>
                <h3 className="text-xl md:text-3xl font-extrabold text-white leading-tight">
                  Camera AI thông minh, kháng nước, kháng bụi, chịu nhiệt, sắc nét
                </h3>
                <div className="mt-4 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsVideoModalOpen(true)}
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs md:text-sm font-bold shadow-lg shadow-orange-500/30 transition-all hover:scale-105"
                  >
                    <Play className="w-4 h-4 fill-white" />
                    <span>Xem video giới thiệu</span>
                  </button>
                  <span className="text-xs text-white/80 hidden sm:inline">
                    Thời lượng 1:30 phút
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                  {item.title}
                </h4>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal Popup */}
      {isVideoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
              aria-label="Đóng video"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full aspect-video">
              <iframe
                src="https://www.youtube-nocookie.com/embed/kqlB9X20ClU?autoplay=1"
                title="Camera AI thông minh FPT"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
