"use client";

import React from "react";
import EplHeroSection from "@/components/epl/EplHeroSection";
import EplComparisonMatrix from "@/components/epl/EplComparisonMatrix";
import EplScheduleSection from "@/components/epl/EplScheduleSection";
import EplPackagesSlider from "@/components/epl/EplPackagesSlider";
import EplFptPlayOnlySection from "@/components/epl/EplFptPlayOnlySection";
import EplPromotionFeatures from "@/components/epl/EplPromotionFeatures";
import EplFaqSection from "@/components/epl/EplFaqSection";

export default function NgoaiHangAnhPage() {
  return (
    <div className="flex flex-col w-full bg-[#03091e] min-h-screen text-white">
      {/* 1. HERO BANNER + 2 NÚT CTA (ĐĂNG KÝ / NÂNG CẤP) */}
      <EplHeroSection />

      {/* 2. BẢNG SO SÁNH TÍNH NĂNG GÓI V.VIP CHUẨN FPT.VN (TRIAN COMPARISON MATRIX) */}
      <EplComparisonMatrix />

      {/* 3. LỊCH THI ĐẤU, KẾT QUẢ & BẢNG XẾP HẠNG PREMIER LEAGUE */}
      <EplScheduleSection />

      {/* 4. SLIDER BẢNG GIÁ COMBO INTERNET TRUYỀN HÌNH V.VIP KÈM BỘ LỌC KHU VỰC */}
      <EplPackagesSlider />

      {/* 5. GÓI TÀI KHOẢN FPT PLAY ONLY (CHO KHÁCH ĐÃ CÓ MẠNG) */}
      <EplFptPlayOnlySection />

      {/* 6. ĐẶC QUYỀN & ƯU ĐÃI KHI XEM NGOẠI HẠNG ANH QUA FPT */}
      <EplPromotionFeatures />

      {/* 7. CÂU HỎI THƯỜNG GẶP (FAQS) */}
      <EplFaqSection />
    </div>
  );
}
