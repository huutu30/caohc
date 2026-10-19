"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";
import { useRegion } from "@/context/RegionContext";

const EPL_SLIDER_PACKAGES: FptProductCardItem[] = [
  {
    id: "combo-giga-vvip",
    name: "Combo Giga - V.VIP",
    badge: "BÁN CHẠY NHẤT",
    isPopular: true,
    image: "/images/giga-vvip.webp",
    price: { hcm: 230000, tinh: 220000 },
    speed: "300 Mbps",
    uploadSpeed: "300 Mbps",
    equipment: "Modem Wi-Fi 6 AX1800",
    description: "Modem Wi-Fi 6, tốc độ 300 Mbps, xem Ngoại Hạng Anh 2026/27 trọn vẹn qua FPT Play.",
    features: [
      "Xem trực tiếp 380 trận Ngoại hạng Anh & FA Cup",
      "Gần 120 kênh giải trí, thể thao tổng hợp",
      "Trang bị Modem Wi-Fi 6 tốc độ 300 Mbps",
      "Ưu đãi mua Smart TV giảm đến 43% so với giá niêm yết",
    ],
    detailUrl: "/goi-cuoc/combo/combo-giga-vvip",
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
      "Kết nối đồng thời lên đến 25 thiết bị mượt mà",
    ],
    detailUrl: "/goi-cuoc/combo/combo-sky-vvip",
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
      "Kết nối mượt mà cùng lúc trên 25 thiết bị",
    ],
    detailUrl: "/goi-cuoc/combo/combo-meta-vvip",
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
      "Kết nối đồng thời lên đến 100 thiết bị không nghẽn",
    ],
    detailUrl: "/ngoai-hang-anh",
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
      "Kết nối đồng thời lên đến 125 thiết bị khách hàng",
    ],
    detailUrl: "/ngoai-hang-anh",
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
      "Tích hợp tính năng Ultra Fast độc quyền",
    ],
    detailUrl: "/ngoai-hang-anh",
  },
];

export default function EplPackagesSlider() {
  const { region } = useRegion();
  const scrollRef = useRef<HTMLDivElement>(null);

  const displayedPackages = EPL_SLIDER_PACKAGES.filter((combo) => {
    if (region === "hcm" && combo.id === "combo-giga-vvip") {
      return false;
    }
    return true;
  });

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth / 2;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="w-full bg-[#050e26] py-12 sm:py-16 text-white border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* HEADLINE */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
            Bảng giá gói xem Ngoại Hạng Anh 2026-27 với Combo V.VIP
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Xem Ngoại Hạng Anh 2026-27 trọn vẹn với Combo V.VIP Lite. Internet tốc độ cao, trải nghiệm xem Ngoại Hạng Anh sắc nét đến 4K trên FPT Play, kết hợp gần 120 kênh truyền hình cho cả gia đình.
          </p>
        </div>

        {/* CAROUSEL WRAPPER WITH NAVIGATION ARROWS */}
        <div className="relative mt-8 px-2 sm:px-6">
          <button
            onClick={() => handleScroll("left")}
            aria-label="Previous slide"
            className="hidden md:flex absolute -left-2 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-white text-slate-800 shadow-xl items-center justify-center hover:bg-slate-100 hover:text-[#004a9c] transition-all cursor-pointer"
          >
            <ChevronLeft className="size-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth no-scrollbar py-3 px-1 snap-x snap-mandatory"
          >
            {displayedPackages.map((combo) => (
              <div
                key={combo.id}
                className="w-[280px] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] shrink-0 snap-start"
              >
                <FptProductCard item={combo} />
              </div>
            ))}
          </div>

          <button
            onClick={() => handleScroll("right")}
            aria-label="Next slide"
            className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-white text-slate-800 shadow-xl items-center justify-center hover:bg-slate-100 hover:text-[#004a9c] transition-all cursor-pointer"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
