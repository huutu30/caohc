import * as React from "react";
import { Clock, Wifi, Headphones, Zap, ShieldCheck } from "lucide-react";
import { ADVANTAGES } from "@/lib/packages";

export default function AdvantagesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Clock: <Clock className="h-7 w-7 text-brand-orange" />,
    Wifi: <Wifi className="h-7 w-7 text-brand-blue" />,
    Headphones: <Headphones className="h-7 w-7 text-emerald-600" />,
    Zap: <Zap className="h-7 w-7 text-amber-500" />,
  };

  const bgMap: Record<string, string> = {
    Clock: "bg-orange-50 group-hover:bg-brand-orange group-hover:text-white border-orange-100",
    Wifi: "bg-blue-50 group-hover:bg-brand-blue group-hover:text-white border-blue-100",
    Headphones: "bg-emerald-50 group-hover:bg-emerald-600 group-hover:text-white border-emerald-100",
    Zap: "bg-amber-50 group-hover:bg-amber-500 group-hover:text-white border-amber-100",
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="h-4 w-4" />
            <span>Cam Kết Dịch Vụ Vàng</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Tại Sao Hơn 1.000.000 Khách Hàng Chọn FPT Telecom?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Hạ tầng mạng cáp quang phủ sóng rộng khắp cùng tiêu chuẩn dịch vụ vượt trội luôn đồng hành cùng bạn trên mọi hành trình số.
          </p>
        </div>

        {/* 4 ADVANTAGES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVANTAGES.map((adv) => {
            const icon = iconMap[adv.icon] || <Zap className="h-7 w-7 text-brand-orange" />;
            const bgClass = bgMap[adv.icon] || "bg-orange-50 border-orange-100";

            return (
              <div
                key={adv.id}
                className="group relative rounded-3xl bg-white p-7 shadow-card hover:shadow-card-hover border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-colors duration-300 mb-6 border ${bgClass}`}
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {adv.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center text-xs font-bold text-brand-blue group-hover:text-brand-orange transition-colors">
                  <span>Tiêu chuẩn dịch vụ FPT Telecom</span>
                  <span className="ml-auto">✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
