"use client";

import React from "react";
import GiaDinhHeroBanner from "./GiaDinhHeroBanner";
import GiaDinhVvipSection from "./GiaDinhVvipSection";
import GiaDinhMeshSection from "./GiaDinhMeshSection";
import GiaDinhNeedsSection from "./GiaDinhNeedsSection";
import GiaDinhWhySection from "./GiaDinhWhySection";
import GiaDinhFaqSection from "./GiaDinhFaqSection";
import GiaDinhCtaSection from "./GiaDinhCtaSection";

export default function GiaDinhClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Carousel Banner */}
      <GiaDinhHeroBanner />

      {/* 2. Combo VVIP Truyền Hình Ngoại Hạng Anh */}
      <GiaDinhVvipSection />

      {/* 3. Bảng giá gói Internet Gia Đình Mesh Wi-Fi 6 */}
      <GiaDinhMeshSection />

      {/* 4. Gợi ý theo không gian nhà */}
      <GiaDinhNeedsSection />

      {/* 5. Vì sao nên chọn FPT cho gia đình */}
      <GiaDinhWhySection />

      {/* 6. Câu hỏi thường gặp */}
      <GiaDinhFaqSection />

      {/* 7. Bottom CTA */}
      <GiaDinhCtaSection />
    </div>
  );
}
