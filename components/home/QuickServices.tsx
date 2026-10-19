"use client";

import React from "react";
import { Wifi, Tv, Camera, Gamepad2, Router } from "lucide-react";

interface QuickServiceProps {
  onSelectCategory?: (category: string) => void;
  activeCategory?: string;
}

export default function QuickServices({
  onSelectCategory,
  activeCategory,
}: QuickServiceProps) {
  const services = [
    {
      id: "ca_nhan",
      title: "Internet FPT",
      subtitle: "WiFi 6 thế hệ mới",
      icon: Wifi,
      color: "from-blue-600 to-[#004a9c]",
      badge: "Phổ biến",
      targetId: "goi-cuoc",
    },
    {
      id: "combo",
      title: "Combo FPT Play",
      subtitle: "Trọn vẹn Ngoại Hạng Anh",
      icon: Tv,
      color: "from-orange-500 to-[#f57020]",
      badge: "Hot Thể Thao",
      targetId: "the-thao",
    },
    {
      id: "camera",
      title: "FPT Camera AI",
      subtitle: "Bảo mật đám mây Cloud",
      icon: Camera,
      color: "from-emerald-500 to-teal-700",
      badge: "An ninh",
      targetId: "camera",
    },
    {
      id: "game_thu",
      title: "F-Game Siêu Tốc",
      subtitle: "Ultra Fast giảm Ping",
      icon: Gamepad2,
      color: "from-purple-600 to-indigo-800",
      badge: "Gaming",
      targetId: "goi-cuoc",
    },
    {
      id: "gia_dinh",
      title: "WiFi 6 Mesh",
      subtitle: "Phủ sóng xuyên tầng",
      icon: Router,
      color: "from-cyan-600 to-blue-800",
      badge: "Nhà nhiều tầng",
      targetId: "goi-cuoc",
    },
  ];

  const handleClick = (s: typeof services[0]) => {
    if (onSelectCategory && (s.id === "ca_nhan" || s.id === "game_thu" || s.id === "gia_dinh")) {
      onSelectCategory(s.id);
    }
    const elem = document.getElementById(s.targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative z-20 -mt-6 sm:-mt-10 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-6 shadow-xl border border-slate-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {services.map((s) => {
          const Icon = s.icon;
          const isSelected = activeCategory === s.id;
          return (
            <button
              key={s.id}
              onClick={() => handleClick(s)}
              className={`group flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl transition-all duration-300 relative ${
                isSelected
                  ? "bg-blue-50/80 shadow-md ring-2 ring-[#004a9c]"
                  : "hover:bg-slate-50 hover:shadow-md"
              }`}
            >
              {/* TOP BADGE */}
              <span className="absolute -top-2 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-slate-100 text-slate-700 group-hover:bg-[#f57020] group-hover:text-white transition-colors">
                {s.badge}
              </span>

              {/* CIRCLE ICON */}
              <div
                className={`h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:shadow-lg transition-transform duration-300 mb-2.5 mt-1`}
              >
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>

              {/* TITLE */}
              <h2 className="text-xs sm:text-sm font-black text-slate-900 group-hover:text-[#004a9c] transition-colors leading-snug">
                {s.title}
              </h2>

              {/* SUBTITLE */}
              <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 font-medium">
                {s.subtitle}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
