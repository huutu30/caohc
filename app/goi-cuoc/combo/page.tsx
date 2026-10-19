"use client";

import * as React from "react";
import Link from "next/link";
import {
  Tv,
  Wifi,
  Sparkles,
  CheckCircle2,
  Gift,
  Film,
  Trophy,
  ArrowRight,
} from "lucide-react";
import { COMBO_PACKAGES } from "@/lib/packages";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import FaqAccordion from "@/components/FaqAccordion";

export default function ComboPackagesPage() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "6months" | "12months">("6months");

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* HERO BANNER FOR COMBO PAGE */}
      <section className="bg-gradient-to-r from-blue-950 via-brand-blue to-blue-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-brand-orange/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
            <Tv className="h-4 w-4" />
            <span>FPT Play Đỉnh Cao Giải Trí</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Combo Internet Cáp Quang + Truyền Hình FPT Play
          </h1>
          <p className="mt-4 text-blue-100 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Tiết kiệm tới 35% chi phí khi đăng ký trọn gói Internet WiFi 6 siêu tốc và kho giải trí FPT Play 170+ kênh, bản quyền Ngoại Hạng Anh & Cúp C1 châu Âu.
          </p>

          {/* BILLING CYCLE SELECTOR */}
          <div className="mt-10 inline-flex p-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-brand-blue shadow-lg scale-105"
                  : "text-white/80 hover:text-white"
              }`}
            >
              Trả theo tháng
            </button>
            <button
              onClick={() => setBillingCycle("6months")}
              className={`relative px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === "6months"
                  ? "bg-brand-orange text-white shadow-cta scale-105"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <span>Đóng 6 tháng</span>
              <span className="absolute -top-3 -right-2 bg-amber-400 text-slate-900 text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                TẶNG 1 THÁNG
              </span>
            </button>
            <button
              onClick={() => setBillingCycle("12months")}
              className={`relative px-5 sm:px-7 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                billingCycle === "12months"
                  ? "bg-brand-orange text-white shadow-cta scale-105"
                  : "text-white/80 hover:text-white"
              }`}
            >
              <span>Đóng 12 tháng</span>
              <span className="absolute -top-3 -right-2 bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                TẶNG 2 THÁNG
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 4 COMBO PACKAGES GRID */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {COMBO_PACKAGES.map((combo) => {
            let displayPrice = combo.priceMonthly;
            let giftText = "";
            let billingNote = "Thanh toán từng tháng";

            if (billingCycle === "6months") {
              displayPrice = Math.round(combo.price6Months / 7);
              giftText = combo.gift6Months;
              billingNote = `Tổng ${formatCurrency(combo.price6Months)} / 7 tháng`;
            } else if (billingCycle === "12months") {
              displayPrice = Math.round(combo.price12Months / 14);
              giftText = combo.gift12Months;
              billingNote = `Tổng ${formatCurrency(combo.price12Months)} / 14 tháng`;
            }

            return (
              <div
                key={combo.id}
                className={`relative rounded-3xl bg-white border p-7 sm:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between ${
                  combo.isPopular
                    ? "border-2 border-brand-orange shadow-xl hover:-translate-y-1"
                    : "border-slate-200/90 hover:-translate-y-1"
                }`}
              >
                {combo.isPopular && (
                  <div className="absolute -top-3.5 left-8 z-20">
                    <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-gradient-to-r from-brand-orange to-amber-500 text-white shadow-cta">
                      <Sparkles className="w-3.5 h-3.5 mr-1" />
                      {combo.badge || "Gói Đề Xuất Cho Gia Đình"}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-3 py-1 rounded-full">
                        {combo.categoryLabel}
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 mt-2">
                        {combo.name}
                      </h3>
                    </div>
                    <div className="text-left sm:text-right">
                      <div className="flex items-baseline sm:justify-end space-x-1">
                        <span className="text-3xl sm:text-4xl font-black text-brand-orange">
                          {formatCurrency(displayPrice)}
                        </span>
                        <span className="text-xs font-semibold text-slate-500">
                          / tháng
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {billingNote}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {combo.description}
                  </p>

                  {/* HIGHLIGHT SPECS */}
                  <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                    <div className="flex items-center space-x-2.5">
                      <div className="h-8 w-8 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center shrink-0">
                        <Wifi className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase font-semibold">
                          Tốc độ mạng
                        </p>
                        <p className="text-sm font-bold text-slate-900">
                          {combo.speed}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2.5">
                      <div className="h-8 w-8 rounded-lg bg-orange-100 text-brand-orange flex items-center justify-center shrink-0">
                        <Tv className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase font-semibold">
                          Truyền hình
                        </p>
                        <p className="text-sm font-bold text-slate-900 truncate">
                          170+ Kênh 4K
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* FEATURES LIST */}
                  <ul className="space-y-3 mb-6">
                    {combo.features.map((f, i) => (
                      <li key={i} className="flex items-start text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 mr-2.5 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {giftText && (
                    <div className="mb-6 flex items-center space-x-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3.5 py-2 rounded-xl border border-emerald-200">
                      <Gift className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>{giftText}</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link href={`/dang-ky?package=${combo.id}&cycle=${billingCycle}`}>
                    <Button
                      variant={combo.isPopular ? "default" : "primary"}
                      className="w-full h-12 rounded-xl font-bold text-sm shadow-md hover:scale-[1.01]"
                    >
                      Đăng ký gói Combo này
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY COMBO HIGHLIGHTS */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Đặc Quyền Giải Trí Cùng FPT Play
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Kho nội dung bản quyền phong phú đáp ứng sở thích của mọi thành viên
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 text-center">
              <div className="h-14 w-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Trọn Vẹn Thể Thao Đỉnh Cao
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Độc quyền trực tiếp toàn bộ 380 trận đấu giải Ngoại Hạng Anh, UEFA Champions League, Cúp C2, FA Cup và các giải golf PGA danh giá.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 text-center">
              <div className="h-14 w-14 rounded-2xl bg-blue-100 text-brand-blue flex items-center justify-center mx-auto mb-4">
                <Film className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Kho Phim Chiếu Rạp 4K
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Hàng ngàn giờ phim bom tấn Hollywood, phim bộ Hàn Quốc, Trung Quốc phát song song cùng ngày với đài truyền hình quốc tế.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 text-center">
              <div className="h-14 w-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <Tv className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Điều Khiển Bằng Giọng Nói
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Đầu thu thế hệ mới tích hợp điều khiển giọng nói tiếng Việt chuẩn xác mọi vùng miền, dễ dàng tìm kiếm video cho trẻ em và người cao tuổi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FaqAccordion />
    </div>
  );
}
