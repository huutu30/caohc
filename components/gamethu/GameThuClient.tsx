"use client";

import React from "react";
import GameThuHeroBanner from "./GameThuHeroBanner";
import GameThuFGameSection from "./GameThuFGameSection";
import GameThuSpeedXSection from "./GameThuSpeedXSection";
import GameThuTechSection from "./GameThuTechSection";
import GameThuFaqSection from "./GameThuFaqSection";
import GameThuCtaSection from "./GameThuCtaSection";

export default function GameThuClient() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* 1. Hero Banner */}
      <GameThuHeroBanner />

      {/* 2. Gói cước F-Game Ultra Fast */}
      <GameThuFGameSection />

      {/* 3. Gói SpeedX Wi-Fi 7 XGSPON */}
      <GameThuSpeedXSection />

      {/* 4. Công nghệ tối ưu game thủ */}
      <GameThuTechSection />

      {/* 5. Câu hỏi thường gặp */}
      <GameThuFaqSection />

      {/* 6. Bottom CTA */}
      <GameThuCtaSection />
    </div>
  );
}
