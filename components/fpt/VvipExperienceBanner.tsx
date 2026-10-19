"use client";

import React from "react";
import Image from "next/image";
import { useRegister } from "@/context/RegisterContext";

export default function VvipExperienceBanner() {
  const { openRegisterModal } = useRegister();

  const features = [
    {
      icon: "/images/nha-icon-camera.webp",
      alt: "Ưu đãi nhận thêm Camera",
      title: "Ưu đãi nhận thêm Camera, Cloud miễn phí",
      desc: "Chỉ từ 220K/tháng sở hữu Combo Internet - Truyền hình - Ngoại Hạng Anh kèm ưu đãi Camera và Cloud miễn phí đến 1 năm.",
    },
    {
      icon: "/images/nha-icon-ball.webp",
      alt: "Hệ sinh thái giải trí",
      title: "Hệ sinh thái giải trí đa dạng",
      desc: "Trọn vẹn Ngoại hạng Anh, AFF ASEAN Hyundai Cup 2026, The Emirates FA Cup, LPBank V.League 1 và gần 120 kênh thể thao, giải trí hấp dẫn khác.",
    },
    {
      icon: "/images/nha-icon-4k.webp",
      alt: "Chất lượng 4K",
      title: "Hỗ trợ xem đa thiết bị, chất lượng vượt trội",
      desc: "Hỗ trợ TV, Box, Mobile, Web, Desktop App với chất lượng Full HD 1080p, 4K sắc nét",
    },
    {
      icon: "/images/nha-icon-devices.webp",
      alt: "Xem đồng thời 2 thiết bị",
      title: "Xem đồng thời trên 2 thiết bị cùng một lúc",
      desc: "Xem đồng thời Ngoại hạng Anh và FA Cup trên 2 thiết bị, thưởng thức các nội dung giải trí khác trên tối đa 5 thiết bị.",
    },
  ];

  const handleRegister = () => {
    openRegisterModal({
      id: "combo-sky-vvip",
      name: "Combo Sky V.VIP Ngoại Hạng Anh",
      price: 245000,
      category: "combo",
      categoryName: "Combo Thể Thao V.VIP",
      downloadSpeed: "1 Gbps",
      uploadSpeed: "150 Mbps",
      image: "/images/nha-promo-banner.webp",
      modem: "Modem Wi-Fi 6 + Box FPT Play Voice 4K",
      recommendedDevices: "Xem cùng lúc 3 - 5 thiết bị",
      features: [
        "Internet tốc độ cao 1 Gbps",
        "Trọn vẹn 380 trận Ngoại Hạng Anh",
        "Tặng 1 Camera AI & 12 tháng Cloud miễn phí",
      ],
      description: "Trọn mùa Ngoại Hạng Anh - Chốt Combo Sky V.VIP tốc độ cao 1 Gbps kèm Camera AI và Cloud miễn phí.",
    });
  };

  return (
    <section
      className="relative w-full py-12 px-4 sm:px-6 lg:px-8 my-6 overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/images/nha-bg.webp'), linear-gradient(115deg, #c22a63 0%, #d6376a 22%, #e8623f 52%, #e2892f 72%, #2f8f4e 100%)",
      }}
    >
      <div className="relative max-w-[1440px] mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-9">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-bold tracking-tight leading-tight drop-shadow-md">
            Gói combo Internet truyền hình V.VIP - Cho trải nghiệm trọn vẹn nhất
          </h2>
          <p className="mt-2.5 text-white/90 text-sm sm:text-[17px] leading-relaxed drop-shadow-sm font-normal">
            Trải nghiệm trọn vẹn thể thao, giải trí, game show trên FPT Play với hạ tầng Wi-Fi 6 siêu tốc và hệ sinh thái FPT Play mượt mà
          </p>
        </div>

        {/* MAIN CONTENT: 60% 4 CARDS, 40% PROMO BANNER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* LEFT 4 GLASSMORPHIC CARDS (7 COLS / ~60%) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 h-full">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-[30px] rounded-2xl p-5 sm:p-6 border border-white/20 shadow-lg flex flex-col gap-3 transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 relative">
                  <Image
                    src={item.icon}
                    alt={item.alt}
                    width={64}
                    height={64}
                    className="object-contain drop-shadow-md"
                  />
                </div>
                <h3 className="text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT PROMOTIONAL BANNER (5 COLS / ~40%) */}
          <div
            onClick={handleRegister}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") handleRegister();
            }}
            className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
          >
            <div className="relative w-full aspect-square max-w-[560px] rounded-2xl overflow-hidden">
              <Image
                src="/images/nha-promo-banner.webp"
                alt="Trọn mùa Ngoại Hạng - Chốt Combo Sky V.VIP FPT Telecom"
                fill
                className="object-contain group-hover:scale-[1.02] transition-transform duration-500 rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
