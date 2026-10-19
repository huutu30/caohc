"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, MapPin } from "lucide-react";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";
import { useRegion } from "@/context/RegionContext";

// =========================================================================
// 6 GÓI COMBO THỂ THAO CHÍNH THỨC TRÊN SECTION 1 CỦA FPT.VN
// ORDER: GIGA -> SKY -> META -> SPEEDX1 -> LUX 500 -> LUX 800
// LOGIC CHUẨN:
// 1. NỘI THÀNH: KHÔNG CÓ GÓI COMBO GIGA V.VIP (ẨN HOÀN TOÀN)
// 2. NGOẠI THÀNH / TỈNH: CÓ GÓI COMBO GIGA V.VIP (220K - 230K)
// 3. GIÁ CƯỚC TỰ ĐỘNG LẤY TỪ PROVINCE_PRICES THEO TỪNG VÙNG MIỀN
// =========================================================================
const SECTION_1_COMBOS: FptProductCardItem[] = [
  {
    id: "combo-giga-vvip",
    name: "Combo Giga - V.VIP",
    badge: "BÁN CHẠY NHẤT",
    isPopular: true,
    image: "/images/giga-vvip.webp",
    price: { hcm: 220000, tinh: 220000 },
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
    price: { hcm: 269000, tinh: 239000 },
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
    price: { hcm: 369000, tinh: 339000 },
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
    price: { hcm: 830000, tinh: 830000 },
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
    price: { hcm: 1030000, tinh: 1030000 },
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
  const { region, activeProvince, setActiveProvince } = useRegion();
  const [activeArea, setActiveArea] = useState<"noi-thanh" | "ngoai-thanh">(
    region === "hcm" ? "noi-thanh" : "ngoai-thanh"
  );
  const [isLoading, setIsLoading] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Sync default selection whenever global region context changes
  useEffect(() => {
    const targetArea = region === "hcm" ? "noi-thanh" : "ngoai-thanh";
    if (targetArea !== activeArea) {
      setIsLoading(true);
      setActiveArea(targetArea);
      const timer = setTimeout(() => setIsLoading(false), 200);
      return () => clearTimeout(timer);
    }
  }, [region, activeArea]);

  const handleAreaChange = (newArea: "noi-thanh" | "ngoai-thanh") => {
    if (newArea === activeArea) return;
    setIsLoading(true);
    setActiveArea(newArea);

    if (newArea === "noi-thanh") {
      if (activeProvince.id === "hcm-ngoai-thanh") {
        setActiveProvince("hcm");
      } else if (activeProvince.id === "ha-noi-ngoai-thanh") {
        setActiveProvince("ha-noi");
      } else if (region !== "hcm") {
        setActiveProvince("hcm");
      }
    } else {
      if (activeProvince.id === "hcm") {
        setActiveProvince("hcm-ngoai-thanh");
      } else if (activeProvince.id === "ha-noi") {
        setActiveProvince("ha-noi-ngoai-thanh");
      } else if (region === "hcm") {
        setActiveProvince("toan-quoc");
      }
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  // Check if current area is Noi thanh
  const isNoiThanh = activeArea === "noi-thanh";

  // Ở nội thành thì KHÔNG có gói combo giga vvip, gói này chỉ có ở ngoại thành và tỉnh
  const displayedCombos = SECTION_1_COMBOS.filter((item) => {
    if (isNoiThanh) {
      return item.id !== "combo-giga-vvip";
    }
    return true;
  });

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

      {/* AREA SELECTOR TABS (NỘI THÀNH VS NGOẠI THÀNH / TỈNH) */}
      <div className="flex flex-col items-center justify-center mt-3 mb-2 gap-2">
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#004a9c] uppercase tracking-wider">
          <MapPin className="size-3.5 text-[#ef4444]" />
          <span>Vui lòng chọn khu vực:</span>
          <span className="text-slate-500 font-semibold normal-case">
            ({activeProvince.name})
          </span>
        </div>

        <div className="inline-flex p-1 bg-white border-2 border-blue-100 rounded-xl shadow-xs gap-1">
          <button
            type="button"
            onClick={() => handleAreaChange("noi-thanh")}
            className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${activeArea === "noi-thanh"
                ? "bg-gradient-to-r from-[#e86010] to-[#ff8030] text-white shadow-md shadow-orange-500/25"
                : "text-slate-600 hover:text-[#e86010]"
              }`}
          >
            Nội thành
          </button>
          <button
            type="button"
            onClick={() => handleAreaChange("ngoai-thanh")}
            className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${activeArea === "ngoai-thanh"
                ? "bg-gradient-to-r from-[#e86010] to-[#ff8030] text-white shadow-md shadow-orange-500/25"
                : "text-slate-600 hover:text-[#e86010]"
              }`}
          >
            Ngoại thành / Tỉnh
          </button>
        </div>
      </div>

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
          className={`flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth no-scrollbar py-3 px-1 snap-x snap-mandatory transition-opacity duration-200 ${isLoading ? "opacity-50" : "opacity-100"
            }`}
        >
          {displayedCombos.map((combo) => (
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
