"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FptProductCard from "@/components/fpt/FptProductCard";

interface SportsComboItem {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  image: string;
  price: number;
  downloadSpeed: string;
  uploadSpeed: string;
  modem: string;
  features: string[];
  description?: string;
}

const SPORTS_COMBOS: SportsComboItem[] = [
  {
    id: "combo-sky-vvip-lite",
    name: "Combo Internet Sky V.VIP",
    badge: "BÁN CHẠY NHẤT",
    isPopular: true,
    image: "/images/c-the-thao-sky.webp",
    price: 239000,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "150 Mbps",
    modem: "Modem Wi-Fi 6 AX1800",
    description: "Trọn vẹn 380 trận Ngoại Hạng Anh & Cúp C1 UEFA, trang bị Box TV giọng nói 4K.",
    features: [
      "Trọn vẹn 380 trận Ngoại Hạng Anh & Cúp C1 UEFA",
      "Trang bị 01 Box TV giọng nói FPT Play 4K",
      "Ưu đãi Camera AI & Cloud lưu trữ",
      "Đăng nhập đồng thời trên 3 thiết bị",
    ],
  },
  {
    id: "combo-giga-vvip",
    name: "Combo Internet Giga V.VIP",
    badge: "TIẾT KIỆM",
    image: "/images/combo-giga.webp",
    price: 220000,
    downloadSpeed: "150 Mbps",
    uploadSpeed: "150 Mbps",
    modem: "Modem Wi-Fi 6 AX1800",
    description: "Xem trực tiếp Ngoại Hạng Anh, FA Cup với gần 170 kênh truyền hình đặc sắc.",
    features: [
      "Xem trực tiếp Ngoại Hạng Anh, FA Cup",
      "Gần 170 kênh truyền hình trong & ngoài nước",
      "Trang bị Modem Wi-Fi 6 thế hệ mới",
      "Bàn giao thiết bị tận nhà trong 24h",
    ],
  },
  {
    id: "combo-meta-vvip",
    name: "Combo Internet Meta V.VIP",
    badge: "1GBPS ĐỐI XỨNG",
    image: "/images/c-the-thao-meta.webp",
    price: 345000,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "1 Gbps",
    modem: "Modem Wi-Fi 6 AX3000 + Box Voice",
    description: "Tốc độ đối xứng cực đại 1Gbps / 1Gbps, xem phim điện ảnh 4K không quảng cáo.",
    features: [
      "Tốc độ đối xứng cực đại 1Gbps / 1Gbps",
      "Kho phim điện ảnh chiếu rạp không quảng cáo",
      "Xem mượt mà đồng thời trên 5 thiết bị",
      "Đặc quyền chăm sóc và phục vụ ưu tiên",
    ],
  },
  {
    id: "combo-sky-f1-vvip",
    name: "Combo Sky F1 (Kèm Mesh)",
    badge: "NHÀ NHIỀU TẦNG",
    image: "/images/c-the-thao-sky-f1.webp",
    price: 269000,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "150 Mbps",
    modem: "01 Modem Wi-Fi 6 + 01 Mesh Wi-Fi 6",
    description: "Phủ sóng xuyên tường toàn bộ căn hộ, nhà phố; trọn vẹn bản quyền Ngoại Hạng Anh 4K.",
    features: [
      "Phủ sóng xuyên tường toàn bộ căn hộ, nhà phố",
      "Trọn vẹn bản quyền Ngoại Hạng Anh 4K",
      "Tích hợp FPT Play Box điều khiển giọng nói",
      "Tặng thêm tới 2 tháng cước sử dụng",
    ],
  },
];

export default function SportsComboCarousel() {
  return (
    <section className="container mx-auto mt-6 mb-8 w-[1440px] max-w-[calc(100%-32px)] md:mt-8 md:mb-10 md:rounded-2xl md:bg-white md:py-8 shadow-xs border border-slate-100">
      <h2 className="text-[22px] sm:text-[28px] leading-10 font-bold px-4 text-center text-slate-900 tracking-tight">
        Xem thể thao đỉnh cao với các Combo Internet - Truyền hình - Ngoại Hạng Anh
      </h2>

      {/* GRID OF 4 COMBOS USING STANDARDIZED FPT PRODUCT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-6 pt-6">
        {SPORTS_COMBOS.map((combo) => (
          <FptProductCard
            key={combo.id}
            item={{
              id: combo.id,
              name: combo.name,
              category: "combo",
              badge: combo.badge,
              isPopular: combo.isPopular,
              image: combo.image,
              price: combo.price,
              speed: combo.downloadSpeed,
              uploadSpeed: combo.uploadSpeed,
              equipment: combo.modem,
              description: combo.description,
              features: combo.features,
              detailUrl: `/goi-cuoc/combo/${combo.id}`,
            }}
          />
        ))}
      </div>

      {/* VIEW ALL LINK */}
      <div className="text-center mt-6">
        <Link
          href="/goi-cuoc/combo"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#004a9c] hover:text-[#f57020] transition-colors"
        >
          <span>Xem tất cả gói Combo Thể Thao FPT Play</span>
          <ChevronRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
