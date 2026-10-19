"use client";

import React from "react";
import AccessPointHeroBanner from "./AccessPointHeroBanner";
import AccessPointPillarsSection from "./AccessPointPillarsSection";
import AccessPointFeaturedSection from "./AccessPointFeaturedSection";
import AccessPointCatalogSection from "./AccessPointCatalogSection";
import AccessPointPromoBanner from "./AccessPointPromoBanner";
import AccessPointFaqSection from "./AccessPointFaqSection";
import AccessPointCtaSection from "./AccessPointCtaSection";

export default function AccessPointClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Banner */}
      <AccessPointHeroBanner />

      {/* 2. 4 Cam kết / Tiêu chuẩn thương hiệu */}
      <AccessPointPillarsSection />

      {/* 3. Sản phẩm bán chạy nhất: AX3000CV2 */}
      <AccessPointFeaturedSection />

      {/* 4. Danh mục sản phẩm Access Point FPT */}
      <AccessPointCatalogSection />

      {/* 5. Banner ưu đãi dịch vụ số FPT */}
      <AccessPointPromoBanner />

      {/* 6. Câu hỏi thường gặp */}
      <AccessPointFaqSection />

      {/* 7. Bottom CTA */}
      <AccessPointCtaSection />
    </div>
  );
}
