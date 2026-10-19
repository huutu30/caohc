"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Tv,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import CoverageChecker from "@/components/CoverageChecker";
import PricingCard from "@/components/PricingCard";
import ComparisonTable from "@/components/ComparisonTable";
import AdvantagesSection from "@/components/AdvantagesSection";
import PromotionsSection from "@/components/PromotionsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqAccordion from "@/components/FaqAccordion";
import RegistrationForm from "@/components/RegistrationForm";
import { INTERNET_PACKAGES, COMBO_PACKAGES, NEWS_LIST } from "@/lib/packages";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "6months" | "12months">("6months");

  // 3 Gói cước nổi bật: Cá nhân (Giga 150), Gia đình (Sky 300), Doanh nghiệp (Meta 1Gbps)
  const featuredPackages = [
    INTERNET_PACKAGES[0], // Giga 150
    INTERNET_PACKAGES[1], // Sky 300 (Bán chạy nhất)
    INTERNET_PACKAGES[3], // Meta 1Gbps
  ];

  // 2 Gói combo tiêu biểu
  const featuredCombos = [
    COMBO_PACKAGES[0], // Combo Giga
    COMBO_PACKAGES[1], // Combo Sky (Thể thao Ngoại Hạng Anh)
  ];

  // 4 bài viết tin tức mới nhất
  const latestNews = NEWS_LIST.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO CAROUSEL */}
      <HeroCarousel />

      {/* 2. TRA CỨU VÙNG PHỦ SÓNG */}
      <CoverageChecker />

      {/* 3. GÓI CƯỚC INTERNET NỔI BẬT */}
      <section id="goi-cuoc-noi-bat" className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="h-4 w-4 text-amber-500" />
            <span>Đường Truyền Cáp Quang WiFi 6</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Gói Cước Internet Được Lựa Chọn Nhiều Nhất
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Miễn phí 100% trang bị Modem WiFi 6 thế hệ mới, đường truyền đối xứng không giới hạn dung lượng truy cập.
          </p>

          {/* CHU KỲ THANH TOÁN TOGGLE */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-brand-blue shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Trả từng tháng
            </button>
            <button
              onClick={() => setBillingCycle("6months")}
              className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === "6months"
                  ? "bg-brand-blue text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Đóng 6 tháng</span>
              <span className="absolute -top-2.5 -right-2 bg-brand-orange text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                +1 Tháng
              </span>
            </button>
            <button
              onClick={() => setBillingCycle("12months")}
              className={`relative px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === "12months"
                  ? "bg-brand-blue text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Đóng 12 tháng</span>
              <span className="absolute -top-2.5 -right-2 bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                +2 Tháng
              </span>
            </button>
          </div>
        </div>

        {/* 3 PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-2">
          {featuredPackages.map((pkg) => (
            <PricingCard
              key={pkg.id}
              item={pkg}
              billingCycle={billingCycle}
            />
          ))}
        </div>

        {/* VIEW ALL PACKAGES LINK */}
        <div className="mt-12 text-center">
          <Link href="/goi-cuoc/internet">
            <Button
              variant="outline"
              size="lg"
              className="font-bold border-brand-blue text-brand-blue hover:bg-blue-50"
            >
              Xem tất cả 6 gói cước Internet & Doanh nghiệp
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* 4. BẢNG SO SÁNH GÓI CƯỚC */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              So Sánh Chi Tiết Các Gói Cước
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Xem chi tiết sự khác biệt về tốc độ, thiết bị đi kèm và quyền lợi ưu tiên
            </p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* 5. SECTION COMBO INTERNET + TRUYỀN HÌNH FPT PLAY */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
                <Tv className="h-4 w-4" />
                <span>Giải Trí Đa Phương Tiện</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Combo Internet + Truyền Hình FPT Play
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-2xl">
                Trọn gói 2 dịch vụ trên 1 đường truyền với hơn 170 kênh truyền hình đặc sắc, bản quyền trọn vẹn giải bóng đá Ngoại Hạng Anh & Cúp C1 UEFA.
              </p>
            </div>
            <Link href="/goi-cuoc/combo">
              <Button variant="outline" className="font-bold border-slate-300">
                Xem toàn bộ gói Combo
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* 2 COMBO CARDS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCombos.map((combo) => (
              <div
                key={combo.id}
                className="rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-white to-blue-50/30 p-8 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-center"
              >
                <div className="relative h-48 w-full md:w-52 rounded-2xl overflow-hidden shrink-0 shadow-md">
                  <Image
                    src={combo.image}
                    alt={combo.name}
                    fill
                    className="object-cover"
                  />
                  {combo.badge && (
                    <div className="absolute top-3 left-3 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      {combo.badge}
                    </div>
                  )}
                </div>

                <div className="flex-1 flex flex-col justify-between w-full">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {combo.categoryLabel}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-2">
                      {combo.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {combo.description}
                    </p>

                    <div className="mt-4 flex items-baseline space-x-2">
                      <span className="text-3xl font-black text-brand-orange">
                        {formatCurrency(combo.priceMonthly)}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        / tháng
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 mr-2 shrink-0" />
                        <span>Internet cáp quang {combo.speed}</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 mr-2 shrink-0" />
                        <span>{combo.channels}</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 mr-2 shrink-0" />
                        <span>Trang bị miễn phí đầu thu TV Box giọng nói 4K</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link href={`/dang-ky?package=${combo.id}`}>
                      <Button variant="default" className="w-full font-bold shadow-cta">
                        Đăng ký gói Combo này
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ƯU ĐIỂM DỊCH VỤ (4 Ô) */}
      <AdvantagesSection />

      {/* 7. KHUYẾN MÃI (3 BANNER CARDS) */}
      <PromotionsSection />

      {/* 8. ĐÁNH GIÁ KHÁCH HÀNG (CAROUSEL 5 TESTIMONIALS) */}
      <TestimonialsSection />

      {/* 9. FAQ ACCORDION (8 CÂU HỎI) */}
      <FaqAccordion />

      {/* 10. TIN TỨC MỚI NHẤT */}
      <section className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="h-4 w-4" />
                <span>Bản Tin Công Nghệ & Khuyến Mãi</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Tin Tức FPT Telecom Mới Nhất
              </h2>
            </div>
            <Link
              href="/tin-tuc"
              className="text-sm font-bold text-brand-blue hover:text-brand-orange transition-colors flex items-center"
            >
              Xem toàn bộ bài viết
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>

          {/* 4 NEWS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestNews.map((news) => (
              <Link
                key={news.id}
                href={`/tin-tuc/${news.slug}`}
                className="group flex flex-col rounded-3xl bg-white overflow-hidden border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-brand-blue/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                    {news.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center text-slate-400 text-xs mb-2 space-x-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{news.date}</span>
                      <span>•</span>
                      <span>{news.readTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                      {news.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {news.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-bold text-brand-blue group-hover:text-brand-orange transition-colors">
                    <span>Đọc tiếp</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FORM ĐĂNG KÝ TƯ VẤN NHANH */}
      <RegistrationForm />
    </div>
  );
}
