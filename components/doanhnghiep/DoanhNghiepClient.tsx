"use client";

import React from "react";
import DoanhNghiepHeroBanner from "./DoanhNghiepHeroBanner";
import DoanhNghiepPillarsSection from "./DoanhNghiepPillarsSection";
import DoanhNghiepPackagesSection from "./DoanhNghiepPackagesSection";
import DoanhNghiepFeaturesSection from "./DoanhNghiepFeaturesSection";
import DoanhNghiepSolutionsSection from "./DoanhNghiepSolutionsSection";
import DoanhNghiepFaqSection from "./DoanhNghiepFaqSection";
import DoanhNghiepCtaSection from "./DoanhNghiepCtaSection";

export default function DoanhNghiepClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Banner */}
      <DoanhNghiepHeroBanner />

      {/* 2. Tiêu chuẩn kết nối doanh nghiệp (4 Pillars) */}
      <DoanhNghiepPillarsSection />

      {/* 3. Bảng giá các gói cước (Wi-Fi 6 LUX & Super Biz) */}
      <DoanhNghiepPackagesSection />

      {/* 4. Năng lực hạ tầng FPT */}
      <DoanhNghiepFeaturesSection />

      {/* 5. Giải pháp may đo theo từng quy mô */}
      <DoanhNghiepSolutionsSection />

      {/* 6. Câu hỏi thường gặp */}
      <DoanhNghiepFaqSection />

      {/* 7. Bottom CTA */}
      <DoanhNghiepCtaSection />
    </div>
  );
}
