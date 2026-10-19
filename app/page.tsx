"use client";

import React from "react";
import HeroSlider from "@/components/home/HeroSlider";
import NavEpl from "@/components/fpt/NavEpl";
import SportsComboCarousel from "@/components/fpt/SportsComboCarousel";
import ExploreProductsTabs from "@/components/fpt/ExploreProductsTabs";
import VvipExperienceBanner from "@/components/fpt/VvipExperienceBanner";
import ProductCategories from "@/components/fpt/ProductCategories";
import FptPlayBannerSlider from "@/components/fpt/FptPlayBannerSlider";
import CoverageSection from "@/components/home/CoverageSection";
import NewsEventsSection from "@/components/fpt/NewsEventsSection";
import FaqSection from "@/components/home/FaqSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#f8fafc]">
      {/* 1. HERO BANNER CAROUSEL (1920x717 Desktop / 800x640 Mobile) */}
      <HeroSlider />

      {/* 2. KHỐI 2 NÚT ĐĂNG KÝ NGAY / NÂNG CẤP NGAY (NAV-EPL MATCHING FPT.VN) */}
      <NavEpl />

      {/* 3. XEM THỂ THAO ĐỈNH CAO VỚI CÁC COMBO INTERNET - TRUYỀN HÌNH - NGOẠI HẠNG ANH */}
      <SportsComboCarousel />

      {/* 4. XEM NGAY KHUYẾN MÃI GÓI CƯỚC INTERNET FPT TẠI [LOCATION] */}
      <ExploreProductsTabs />

      {/* 5. GÓI COMBO INTERNET TRUYỀN HÌNH V.VIP - CHO TRẢI NGHIỆM TRỌN VẸN NHẤT */}
      <VvipExperienceBanner />

      {/* 6. DANH MỤC SẢN PHẨM ĐA DẠNG */}
      <ProductCategories />

      {/* 7. FPT PLAY - GÓI XEM TRUYỀN HÌNH, GIẢI TRÍ, THỂ THAO ĐA PHƯƠNG TIỆN */}
      <FptPlayBannerSlider />

      {/* 8. TRA CỨU HẠ TẦNG CÁP QUANG FPT 63 TỈNH THÀNH */}
      <CoverageSection />

      {/* 9. TIN TỨC & SỰ KIỆN */}
      <NewsEventsSection />

      {/* 10. CÂU HỎI THƯỜNG GẶP (FAQS) */}
      <FaqSection />
    </div>
  );
}
