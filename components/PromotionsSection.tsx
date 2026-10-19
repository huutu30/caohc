import * as React from "react";
import Link from "next/link";
import { Gift, Percent, Users, ArrowRight, Sparkles } from "lucide-react";
import { PROMOTIONS } from "@/lib/packages";
import { Button } from "@/components/ui/button";

export default function PromotionsSection() {
  const iconMap: Record<string, React.ReactNode> = {
    "promo-1": <Gift className="h-6 w-6 text-white" />,
    "promo-2": <Percent className="h-6 w-6 text-white" />,
    "promo-3": <Users className="h-6 w-6 text-white" />,
  };

  return (
    <section id="khuyen-mai" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="h-4 w-4" />
              <span>Chương Trình Đặc Quyền 2026</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Khuyến Mãi Độc Quyền Dành Cho Thuê Bao Mới
            </h2>
          </div>
          <Link href="/dang-ky">
            <span className="text-sm font-bold text-brand-blue hover:text-brand-orange transition-colors flex items-center">
              Nhận trọn bộ mã ưu đãi tháng này
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </span>
          </Link>
        </div>

        {/* 3 BANNER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PROMOTIONS.map((promo) => {
            const icon = iconMap[promo.id] || <Gift className="h-6 w-6 text-white" />;
            return (
              <div
                key={promo.id}
                className={`relative rounded-3xl p-7 text-white shadow-xl bg-gradient-to-br ${promo.gradient} flex flex-col justify-between overflow-hidden group hover:scale-[1.02] transition-all duration-300`}
              >
                {/* BACKGROUND GLOW */}
                <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-44 h-44 bg-white/10 rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
                      {icon}
                    </div>
                    <span
                      className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full text-white shadow-sm ${promo.badgeColor}`}
                    >
                      {promo.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white leading-tight mb-3">
                    {promo.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {promo.description}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-white/15">
                  <Link href="/dang-ky">
                    <Button
                      variant="default"
                      className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-md"
                    >
                      {promo.buttonText}
                      <ArrowRight className="h-4 w-4 ml-2 text-brand-orange" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
