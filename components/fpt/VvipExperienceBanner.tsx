"use client";

import React from "react";
import Image from "next/image";
import { Camera, Tv, Monitor, Shield, ArrowRight } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

export default function VvipExperienceBanner() {
  const { openRegisterModal } = useRegister();

  const features = [
    {
      icon: Camera,
      title: "Ưu đãi nhận thêm Camera, Cloud miễn phí",
      desc: "Chỉ từ 220K/tháng sở hữu Combo Internet - Truyền hình - Ngoại Hạng Anh kèm ưu đãi Camera và Cloud miễn phí.",
    },
    {
      icon: Tv,
      title: "Hệ sinh thái giải trí đa dạng",
      desc: "Trọn vẹn Ngoại hạng Anh, Cúp C1 UEFA, The Emirates FA Cup, LPBank V.League 1 và gần 170 kênh truyền hình đặc sắc.",
    },
    {
      icon: Monitor,
      title: "Hỗ trợ xem đa thiết bị, chất lượng vượt trội",
      desc: "Hỗ trợ Smart TV, Box 4K, Mobile, Web, Desktop App với chất lượng Full HD 1080p và 4K sắc nét.",
    },
    {
      icon: Shield,
      title: "Xem đồng thời trên nhiều thiết bị",
      desc: "Xem đồng thời Ngoại hạng Anh trên 2 thiết bị cùng lúc, thưởng thức các nội dung phim ảnh trên tối đa 5 thiết bị.",
    },
  ];

  return (
    <section className="container mx-auto my-8 sm:my-12 w-[1440px] max-w-[calc(100%-32px)] rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-12 relative overflow-hidden shadow-2xl border border-blue-900/50">
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
          Gói combo Internet truyền hình V.VIP - Cho trải nghiệm trọn vẹn nhất
        </h2>
        <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
          Trải nghiệm trọn vẹn thể thao, giải trí đỉnh cao trên FPT Play với hạ tầng Wi-Fi 6 siêu tốc và đường truyền cáp quang thông suốt.
        </p>
      </div>

      {/* 2 COLUMNS: LEFT 2x2 FEATURE CARDS, RIGHT SQUARE PROMO IMAGE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT 2x2 CARDS (7 COLS) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/15 hover:bg-white/15 transition-all duration-300"
              >
                <div className="size-12 rounded-xl bg-[#f57020]/20 text-[#f57020] border border-[#f57020]/30 flex items-center justify-center mb-3">
                  <Icon className="size-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* RIGHT SQUARE BANNER (5 COLS) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full aspect-square max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <Image
              src="/images/combo-net-vvip-home-1000.jpg"
              alt="Gói combo Internet truyền hình V.VIP FPT Telecom"
              fill
              className="object-cover"
            />
          </div>

          <button
            onClick={() => openRegisterModal()}
            className="mt-6 w-full max-w-[420px] bg-[#f57020] hover:bg-[#e05e10] text-white py-3.5 rounded-full font-black text-sm shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
          >
            <span>Đăng ký nhận ưu đãi V.VIP</span>
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
