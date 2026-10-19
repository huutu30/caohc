"use client";

import React, { useState } from "react";
import HeroSlider from "@/components/home/HeroSlider";
import QuickServices from "@/components/home/QuickServices";
import ProductSection from "@/components/home/ProductSection";
import VvipSportsSection from "@/components/home/VvipSportsSection";
import DiscoverySection from "@/components/home/DiscoverySection";
import CoverageSection from "@/components/home/CoverageSection";
import NewsSection from "@/components/home/NewsSection";
import FaqSection from "@/components/home/FaqSection";
import RegistrationForm from "@/components/RegistrationForm";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ca_nhan");

  return (
    <div className="flex flex-col w-full bg-white">
      {/* 1. HERO SLIDER BANNER (1920x717 Desktop / 800x640 Mobile) */}
      <HeroSlider />

      {/* 2. 5 QUICK ACCESS SERVICES */}
      <QuickServices
        activeCategory={selectedCategory}
        onSelectCategory={(cat) => setSelectedCategory(cat)}
      />

      {/* 3. GÓI CƯỚC DÀNH CHO BẠN (TABS & MODALS) */}
      <ProductSection
        activeCategory={selectedCategory}
        onCategoryChange={(cat) => setSelectedCategory(cat)}
      />

      {/* 4. ĐỈNH CAO THỂ THAO & GIẢI TRÍ VVIP NGOẠI HẠNG ANH */}
      <VvipSportsSection />

      {/* 5. HỆ SINH THÁI CÔNG NGHỆ SỐ FPT */}
      <DiscoverySection />

      {/* 6. TRA CỨU HẠ TẦNG CÁP QUANG 63 TỈNH THÀNH */}
      <CoverageSection />

      {/* 7. TIN TỨC & BẢN TIN KHUYẾN MÃI MỚI NHẤT */}
      <NewsSection />

      {/* 8. CÂU HỎI THƯỜNG GẶP (FAQS) */}
      <FaqSection />

      {/* 9. FORM ĐĂNG KÝ TƯ VẤN NHANH */}
      <section id="dang-ky-tu-van" className="bg-slate-50 py-12 border-t border-slate-200">
        <RegistrationForm />
      </section>
    </div>
  );
}
