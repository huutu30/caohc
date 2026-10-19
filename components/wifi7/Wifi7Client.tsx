"use client";

import React from "react";
import Wifi7HeroBanner from "./Wifi7HeroBanner";
import Wifi7WhySection from "./Wifi7WhySection";
import Wifi7PackagesSection from "./Wifi7PackagesSection";
import Wifi7DemandSection from "./Wifi7DemandSection";
import Wifi7ReviewSection from "./Wifi7ReviewSection";
import Wifi7FaqSection from "./Wifi7FaqSection";
import Wifi7CtaSection from "./Wifi7CtaSection";

export default function Wifi7Client() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* 1. Hero Banner */}
      <Wifi7HeroBanner />

      {/* 2. Vì sao nên chọn Wi-Fi 7 XGSPON */}
      <Wifi7WhySection />

      {/* 3. Bảng giá các gói cước Wi-Fi 7 (SpeedX) */}
      <Wifi7PackagesSection />

      {/* 4. Đáp ứng mọi nhu cầu tương lai */}
      <Wifi7DemandSection />

      {/* 5. Góc nhìn từ các reviewer / chuyên gia */}
      <Wifi7ReviewSection />

      {/* 6. Câu hỏi thường gặp */}
      <Wifi7FaqSection />

      {/* 7. Bottom CTA */}
      <Wifi7CtaSection />
    </div>
  );
}
