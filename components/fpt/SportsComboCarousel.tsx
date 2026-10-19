"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";

// =========================================================================
// 6 GÓI COMBO THỂ THAO CHÍNH THỨC TRÊN SECTION 1 CỦA FPT.VN
// ORDER: GIGA -> SKY -> META -> SPEEDX1 -> LUX 500 -> LUX 800
// =========================================================================
const SECTION_1_COMBOS: FptProductCardItem[] = [
  {
    id: "combo-giga-vvip",
    name: "Combo Giga - V.VIP",
    badge: "BÁN CHẠY NHẤT",
    isPopular: true,
    image: "/images/giga-vvip.webp",
    price: 220000,
    speed: "300 Mbps",
    uploadSpeed: "300 Mbps",
    equipment: "Modem Wi-Fi 6 AX1800",
    description: "Modem Wi-Fi 6, tốc độ 300 Mbps, xem Ngoại Hạng Anh 2026/27 trọn vẹn qua FPT Play.",
    features: [
      "Xem trực tiếp 380 trận Ngoại hạng Anh & FA Cup",
      "Gần 120 kênh giải trí, thể thao tổng hợp",
      "Trang bị Modem Wi-Fi 6 tốc độ 300 Mbps",
      "Ưu đãi mua Smart TV giảm đến 43% so với giá niêm yết"
    ],
    detailUrl: "/goi-cuoc/combo/combo-giga-vvip"
  },
  {
    id: "combo-sky-vvip",
    name: "Combo Sky - V.VIP",
    badge: "XEM NHIỀU NHẤT",
    isPopular: true,
    image: "/images/sky-vvip.webp",
    price: 239000,
    speed: "1 Gbps",
    uploadSpeed: "300 Mbps",
    equipment: "Modem Wi-Fi 6 Chuẩn AX",
    description: "Modem Wi-Fi 6 tốc độ đến 1Gbps, bản quyền trọn vẹn Ngoại Hạng Anh & Cúp C1 UEFA.",
    features: [
      "Băng thông Download không giới hạn lên đến 1 Gbps",
      "Trọn vẹn Ngoại hạng Anh, Cúp C1 & The Emirates FA Cup",
      "Gần 120 kênh truyền hình thể thao & giải trí",
      "Kết nối đồng thời lên đến 25 thiết bị mượt mà"
    ],
    detailUrl: "/goi-cuoc/combo/combo-sky-vvip"
  },
  {
    id: "combo-meta-vvip",
    name: "Combo Meta - V.VIP",
    badge: "1GBPS ĐỐI XỨNG",
    image: "/images/meta-vvip.webp",
    price: 339000,
    speed: "1 Gbps",
    uploadSpeed: "1 Gbps",
    equipment: "Modem Wi-Fi 6 AX3000",
    description: "Tốc độ 1 Gbps đối xứng Download & Upload, xem Ngoại Hạng Anh và phim chiếu rạp 4K.",
    features: [
      "Download/Upload đối xứng 1 Gbps đỉnh cao",
      "Xem AFF ASEAN Cup & Ngoại Hạng Anh qua FPT Play",
      "Trang bị Modem Wi-Fi 6 AX3000 cao cấp",
      "Kết nối mượt mà cùng lúc trên 25 thiết bị"
    ],
    detailUrl: "/goi-cuoc/combo/combo-meta-vvip"
  },
  {
    id: "combo-speedx1-vvip",
    name: "Combo Speedx1 - V.VIP",
    badge: "CHUẨN WI-FI 7",
    image: "/images/combo-speedx1-vvip.webp",
    price: 369000,
    speed: "1 Gbps",
    uploadSpeed: "1 Gbps",
    equipment: "Modem Wi-Fi 7 XGS-PON",
    description: "Modem Wi-Fi 7 tăng khả năng tải gấp 4 lần, công nghệ XGS-PON tốc độ 1 Gbps đối xứng.",
    features: [
      "Chuẩn Wi-Fi 7 thế hệ mới phủ sóng xuyên mọi vật cản",
      "Xem Ngoại Hạng Anh & FA Cup trên 2 thiết bị cùng lúc",
      "FPT Play gần 120 kênh truyền hình giải trí đa dạng",
      "Kết nối đồng thời lên đến 100 thiết bị không nghẽn"
    ],
    detailUrl: "/ngoai-hang-anh"
  },
  {
    id: "combo-lux500-vvip",
    name: "Combo Lux 500 - V.VIP",
    badge: "QUÁN CAFE / NHÀ HÀNG",
    image: "/images/lux500-vvip.webp",
    price: 830000,
    speed: "500 Mbps",
    uploadSpeed: "500 Mbps",
    equipment: "Router Wi-Fi 6 Doanh Nghiệp",
    description: "Modem Wi-Fi 6 tốc độ đến 500 Mbps, trình chiếu Ngoại Hạng Anh 4K sắc nét cho quán cafe, nhà hàng.",
    features: [
      "Băng thông 500 Mbps đối xứng chịu tải cực lớn",
      "Xem trọn vẹn Ngoại hạng Anh 4K sắc nét công cộng",
      "Tích hợp Ultra Fast tối ưu hóa đường truyền",
      "Kết nối đồng thời lên đến 125 thiết bị khách hàng"
    ],
    detailUrl: "/ngoai-hang-anh"
  },
  {
    id: "combo-lux800-vvip",
    name: "Combo Lux 800 - V.VIP",
    badge: "DOANH NGHIỆP VVIP",
    image: "/images/lux800-vvip.webp",
    price: 1030000,
    speed: "800 Mbps",
    uploadSpeed: "800 Mbps",
    equipment: "Router Wi-Fi 6 Doanh Nghiệp",
    description: "Đẳng cấp 800 Mbps đối xứng, phục vụ chuỗi nhà hàng, khách sạn lớn chiếu bóng đá 4K.",
    features: [
      "Băng thông 800 Mbps đối xứng cực đại trong nước",
      "Xem trọn vẹn Ngoại Hạng Anh 4K không độ trễ",
      "Kết nối lên đến 160 thiết bị cùng lúc mượt mà",
      "Tích hợp tính năng Ultra Fast độc quyền"
    ],
    detailUrl: "/ngoai-hang-anh"
  }
];

export default function SportsComboCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const cardWidth = scrollContainerRef.current.clientWidth / 2;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="container mx-auto mt-6 mb-8 w-[1440px] max-w-[calc(100%-32px)] md:mt-8 md:mb-10 md:rounded-2xl md:bg-white md:py-8 shadow-xs border border-slate-100 relative">
      {/* SECTION HEADER */}
      <h2 className="text-[20px] sm:text-[28px] leading-10 font-bold px-4 text-center text-slate-900 tracking-tight">
        Xem thể thao đỉnh cao với các Combo Internet - Truyền hình - Ngoại Hạng Anh
      </h2>

      {/* CAROUSEL WRAPPER WITH NAVIGATION ARROWS */}
      <div className="relative mt-4 px-2 sm:px-6">
        {/* PREV BUTTON */}
        <button
          onClick={() => handleScroll("left")}
          aria-label="Previous slide"
          className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-700 hover:text-[#004a9c] hover:border-[#004a9c] transition-all cursor-pointer"
        >
          <ChevronLeft className="size-5" />
        </button>

        {/* HORIZONTAL SCROLL CAROUSEL (FPT.VN SLIDER MATCH) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth no-scrollbar py-3 px-1 snap-x snap-mandatory"
        >
          {SECTION_1_COMBOS.map((combo) => (
            <div
              key={combo.id}
              className="w-[280px] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] shrink-0 snap-start"
            >
              <FptProductCard item={combo} />
            </div>
          ))}
        </div>

        {/* NEXT BUTTON */}
        <button
          onClick={() => handleScroll("right")}
          aria-label="Next slide"
          className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-700 hover:text-[#004a9c] hover:border-[#004a9c] transition-all cursor-pointer"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      {/* VIEW ALL LINK */}
      <div className="text-center mt-6">
        <Link
          href="/ngoai-hang-anh"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#004a9c] hover:text-[#f57020] transition-colors"
        >
          <span>Xem tất cả</span>
          <ChevronRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
