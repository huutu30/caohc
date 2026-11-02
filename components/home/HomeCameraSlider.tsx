"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Video, Sparkles, ShieldCheck, ArrowRight, Eye } from "lucide-react";
import { CAMERA_DEVICES, CameraDevice } from "@/data/cameraPageData";
import { useRegisterModal } from "@/context/RegisterContext";

export default function HomeCameraSlider() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const { openRegisterModal } = useRegisterModal();

  const handleScroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -320 : 320;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleRegister = (device: CameraDevice) => {
    openRegisterModal({
      id: device.id,
      name: device.name,
      price: device.price,
      title: `Đăng ký ${device.name}`,
    });
  };

  return (
    <section className="w-[1440px] max-w-[calc(100%-24px)] sm:max-w-[calc(100%-32px)] mx-auto mt-6 sm:mt-10 mb-8 sm:mb-12 relative z-20">
      {/* HEADER SECTION */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-6 gap-2">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#f57020] text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FPT Camera AI – Nhận Diện Thông Minh</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Thiết Bị Camera An Ninh Cloud FPT
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Lưu trữ Cloud máy chủ Việt Nam bảo mật tuyệt đối, cảnh báo chuyển động AI chính xác
          </p>
        </div>

        {/* NÚT ĐIỀU HƯỚNG TRƯỢT TRÊN DESKTOP */}
        <div className="hidden sm:flex items-center gap-2">
          <Link
            href="/camera"
            className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#004a9c] hover:text-[#f57020] mr-2 transition-colors"
          >
            Xem tất cả thiết bị
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Trượt sang trái"
            className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#004a9c] hover:border-[#004a9c] shadow-xs flex items-center justify-center transition-all cursor-pointer active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Trượt sang phải"
            className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#004a9c] hover:border-[#004a9c] shadow-xs flex items-center justify-center transition-all cursor-pointer active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* HORIZONTAL SLIDER CONTAINER (TRƯỢT NGANG MƯỢT MÀ TRÊN MOBILE) */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-3.5 sm:gap-5 pb-3 pt-1 -mx-3 px-3 sm:mx-0 sm:px-0 no-scrollbar scroll-smooth"
      >
        {CAMERA_DEVICES.map((device) => {
          const isDiscounted = device.originalPrice && device.originalPrice > device.price;
          return (
            <div
              key={device.id}
              className="w-[260px] sm:w-[280px] md:w-[300px] shrink-0 snap-start bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* PHẦN ẢNH SẢN PHẨM & BADGE */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-slate-50 to-white p-4 flex items-center justify-center border-b border-slate-100 overflow-hidden">
                {device.badge && (
                  <span className="absolute top-2.5 left-2.5 z-10 px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-xs">
                    {device.badge}
                  </span>
                )}
                <span className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                  {device.typeLabel}
                </span>

                <div className="relative w-36 h-36 transform group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={device.image}
                    alt={device.name}
                    fill
                    sizes="(max-width: 768px) 260px, 300px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* PHẦN THÔNG TIN CHI TIẾT */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#004a9c] transition-colors line-clamp-1">
                    {device.name}
                  </h3>

                  {/* GIÁ TIỀN */}
                  <div className="mt-1.5 mb-3 flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-black text-[#f57020]">
                      {device.price.toLocaleString("vi-VN")}đ
                    </span>
                    {isDiscounted && (
                      <span className="text-xs text-slate-400 line-through">
                        {device.originalPrice?.toLocaleString("vi-VN")}đ
                      </span>
                    )}
                  </div>

                  {/* TÍNH NĂNG NỔI BẬT */}
                  <div className="space-y-1.5 py-2.5 border-t border-slate-100 text-[11px] sm:text-xs text-slate-600">
                    <div className="flex items-center gap-2">
                      <Video className="w-3.5 h-3.5 text-[#004a9c] shrink-0" />
                      <span className="line-clamp-1">{device.specs.resolution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-3.5 h-3.5 text-[#004a9c] shrink-0" />
                      <span className="line-clamp-1">{device.specs.nightVision}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="line-clamp-1">{device.specs.storage}</span>
                    </div>
                  </div>
                </div>

                {/* 2 NÚT HÀNH ĐỘNG */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleRegister(device)}
                    className="flex-1 py-2 px-3 rounded-xl bg-gradient-to-r from-[#e05408] to-[#f57020] text-white text-xs sm:text-sm font-bold shadow-md shadow-orange-500/20 hover:shadow-orange-500/40 transition-all text-center active:scale-95 cursor-pointer"
                  >
                    Đăng ký ngay
                  </button>
                  <Link
                    href="/camera"
                    className="py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors shrink-0"
                  >
                    Chi tiết
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* LINK XEM TẤT CẢ TRÊN MOBILE */}
      <div className="sm:hidden mt-3 text-center">
        <Link
          href="/camera"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004a9c] hover:text-[#f57020] transition-colors"
        >
          Xem toàn bộ bảng giá FPT Camera
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
