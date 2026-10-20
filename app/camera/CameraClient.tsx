"use client";

import React from "react";
import CameraHeroBanner from "@/components/camera/CameraHeroBanner";
import CameraProductSlider from "@/components/camera/CameraProductSlider";
import CameraWhyChooseSection from "@/components/camera/CameraWhyChooseSection";
import CameraAppSection from "@/components/camera/CameraAppSection";
import CameraTechSection from "@/components/camera/CameraTechSection";
import CameraAwardsSection from "@/components/camera/CameraAwardsSection";
import CameraFaqSection from "@/components/camera/CameraFaqSection";
import CameraCtaBanner from "@/components/camera/CameraCtaBanner";

export default function CameraClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Carousel Banner */}
      <CameraHeroBanner />

      {/* 2. Thiết bị tiện ích bán chạy nhất (Độc lập & Combo Camera) */}
      <CameraProductSlider />

      {/* 3. Vì sao nên chọn FPT Camera (Video + 4 Trụ cột) */}
      <CameraWhyChooseSection />

      {/* 4. Trải nghiệm ứng dụng FPT Camera */}
      <CameraAppSection />

      {/* 5. Công nghệ nổi bật */}
      <CameraTechSection />

      {/* 7. Vinh danh Chất lượng và Công nghệ (8 Giải thưởng) */}
      <CameraAwardsSection />

      {/* 8. Câu hỏi thường gặp */}
      <CameraFaqSection />

      {/* 9. CTA Banner cuối trang */}
      <CameraCtaBanner />
    </div>
  );
}
