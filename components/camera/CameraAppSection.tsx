"use client";

import React from "react";
import { MessageSquare, Bell, Search, Users, Smartphone } from "lucide-react";
import { CAMERA_APP_FEATURES } from "@/data/cameraPageData";

export default function CameraAppSection() {
  const iconList = [MessageSquare, Bell, Search, Users];

  return (
    <section className="py-12 md:py-20 bg-slate-50/80 border-t border-b border-slate-200/80" id="ung-dung-fpt-camera">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & Features */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3 border border-blue-200 w-fit">
              <Smartphone className="w-3.5 h-3.5 text-blue-600" />
              <span>Ứng Dụng FPT Camera</span>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Theo dõi dễ dàng – Không độ trễ trên ứng dụng FPT Camera
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              Trải nghiệm giám sát thời gian thực siêu mượt mà. Mọi dữ liệu hình ảnh được truyền trực tiếp từ cụm máy chủ trong nước giúp bạn an tâm kiểm soát ngôi nhà từ bất kỳ đâu.
            </p>

            {/* 4 Feature Items */}
            <div className="mt-8 space-y-4">
              {CAMERA_APP_FEATURES.map((item, idx) => {
                const IconComponent = iconList[idx] || Smartphone;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-600 mt-0.5">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-600 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Download Badges */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Tải ứng dụng miễn phí:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://apps.apple.com/vn/app/fpt-camera/id1451381280"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-105"
                  title="Tải ứng dụng trên App Store"
                >
                  <img
                    src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
                    alt="Download on the App Store"
                    className="h-9 w-auto"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.fpt.camera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform hover:scale-105"
                  title="Tải ứng dụng trên Google Play"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-9 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mockup */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-md mx-auto group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-orange-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative rounded-2xl overflow-hidden p-2">
                <img
                  src="/images/camera_app_screens.webp"
                  alt="Giao diện ứng dụng FPT Camera"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
