"use client";

import React from "react";
import { Zap, Tv, Smartphone, Award, Trophy } from "lucide-react";

export default function EplPromotionFeatures() {
  const features = [
    {
      icon: Trophy,
      title: "Trọn Vẹn 380 Trận Đỉnh Cao",
      desc: "Trực tiếp và độc quyền toàn bộ 380 trận đấu mỗi mùa giải, trọn vẹn các trận Super Sunday giữa các ông lớn Big 6.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Zap,
      title: "Đường Truyền Wi-Fi 6 Ultra Fast",
      desc: "Hạ tầng cáp quang tốc độ cao từ 300 Mbps đến 1 Gbps tích hợp Ultra Fast chống giật lag, không xoay vòng giờ cao điểm.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Tv,
      title: "Trang Bị Box FPT Play Voice 4K",
      desc: "Đầu thu thông minh điều khiển giọng nói tiếng Việt, tìm kiếm trận đấu nhanh chóng và biến TV thường thành Smart TV.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Smartphone,
      title: "Đăng Nhập & Xem Đa Nền Tảng",
      desc: "Xem đồng thời trên Smart TV, Smartphone, Tablet, PC với 1 tài khoản duy nhất, cập nhật highlight và bàn thắng tức thì.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="w-full bg-[#03091e] py-12 sm:py-16 text-white border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="size-3.5" />
            <span>Trải Nghiệm Thể Thao Đỉnh Cao</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Đặc Quyền Khi Đăng Ký Ngoại Hạng Anh FPT Telecom
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Hạ tầng mạng tiên tiến kết hợp nền tảng truyền hình bản quyền chất lượng hàng đầu Việt Nam
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="bg-[#0b1b44]/70 border border-white/10 hover:border-orange-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg group"
              >
                <div
                  className={`size-12 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform`}
                >
                  <Icon className="size-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {f.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
