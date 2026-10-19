"use client";

import React from "react";
import CaNhanHeroBanner from "./CaNhanHeroBanner";
import CaNhanPackagesSection from "./CaNhanPackagesSection";
import CaNhanSportsSection from "./CaNhanSportsSection";
import CaNhanNeedsSection from "./CaNhanNeedsSection";
import CaNhanWhySection from "./CaNhanWhySection";
import CaNhanFaqSection from "./CaNhanFaqSection";
import CaNhanCtaSection from "./CaNhanCtaSection";

export default function CaNhanClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Carousel Banner */}
      <CaNhanHeroBanner />

      {/* 2. Gói cước Internet cá nhân Wi-Fi 6 đơn lẻ */}
      <CaNhanPackagesSection />

      {/* 3. Bảng giá gói thể thao Ngoại Hạng Anh */}
      <CaNhanSportsSection />

      {/* 4. Gợi ý theo đối tượng cá nhân */}
      <CaNhanNeedsSection />

      {/* 5. Vì sao nên chọn FPT cho cá nhân */}
      <CaNhanWhySection />

      {/* 6. Câu hỏi thường gặp */}
      <CaNhanFaqSection />

      {/* 7. Bottom CTA */}
      <CaNhanCtaSection />
    </div>
  );
}
