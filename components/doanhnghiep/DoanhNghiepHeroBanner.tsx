import React from "react";

export default function DoanhNghiepHeroBanner() {
  return (
    <section className="relative w-full bg-[#081B4B] overflow-hidden">
      <div className="w-full">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/doanh-nghiep/banner_doanhnghiep_desktop.jpg"
          />
          <img
            src="/images/doanh-nghiep/banner_doanhnghiep_mobile.png"
            alt="Internet FPT WiFi 6 Cho Doanh Nghiệp - Kết Nối Vượt Trội"
            className="w-full h-auto block object-cover max-h-[580px]"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>
    </section>
  );
}
