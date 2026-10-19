"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, Zap } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";
import { useProductDetail } from "@/context/ProductDetailContext";

interface SportsComboItem {
  id: string;
  name: string;
  badge?: string;
  image: string;
  price: number;
  downloadSpeed: string;
  uploadSpeed: string;
  modem: string;
  features: string[];
}

const SPORTS_COMBOS: SportsComboItem[] = [
  {
    id: "combo-sky-vvip-lite",
    name: "Combo Internet Sky V.VIP",
    badge: "BÁN CHẠY NHẤT",
    image: "/images/c-the-thao-sky.webp",
    price: 239000,
    downloadSpeed: "1 Gbps",
    uploadSpeed: "150 Mbps",
    modem: "Modem Wi-Fi 6 AX1800",
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
    features: [
      "Phủ sóng xuyên tường toàn bộ căn hộ, nhà phố",
      "Trọn vẹn bản quyền Ngoại Hạng Anh 4K",
      "Tích hợp FPT Play Box điều khiển giọng nói",
      "Tặng thêm tới 2 tháng cước sử dụng",
    ],
  },
];

export default function SportsComboCarousel() {
  const { openRegisterModal } = useRegister();
  const { openDetailModal } = useProductDetail();

  return (
    <section className="container mx-auto mt-6 mb-8 w-[1440px] max-w-[calc(100%-32px)] md:mt-8 md:mb-10 md:rounded-2xl md:bg-white md:py-8 shadow-xs border border-slate-100">
      <h2 className="text-[22px] sm:text-[28px] leading-10 font-bold px-4 text-center text-slate-900 tracking-tight">
        Xem thể thao đỉnh cao với các Combo Internet - Truyền hình - Ngoại Hạng Anh
      </h2>

      {/* CAROUSEL / GRID OF 4 COMBOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-6 pt-6">
        {SPORTS_COMBOS.map((combo) => (
          <div
            key={combo.id}
            className="flex flex-col justify-between rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 relative"
          >
            {/* TOP BADGE */}
            {combo.badge && (
              <div className="absolute top-3 left-3 bg-[#f57020] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full z-10 shadow-sm">
                {combo.badge}
              </div>
            )}

            {/* TOP IMAGE */}
            <div className="relative h-[210px] sm:h-[220px] w-full bg-slate-100 overflow-hidden">
              <Image
                src={combo.image}
                alt={combo.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* CONTENT */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#004a9c] transition-colors leading-snug">
                  {combo.name}
                </h3>

                <div className="mt-2.5 flex items-baseline gap-1">
                  <span className="text-2xl font-black text-[#f57020]">
                    {combo.price.toLocaleString("vi-VN")} đ
                  </span>
                  <span className="text-xs text-slate-500 font-medium">/ tháng</span>
                </div>

                {/* SPEED BOX */}
                <div className="mt-3 bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 text-xs text-slate-700 flex items-center justify-between">
                  <span className="font-semibold flex items-center gap-1">
                    <Zap className="size-3.5 text-[#004a9c]" />
                    {combo.downloadSpeed}
                  </span>
                  <span className="text-slate-400">|</span>
                  <span className="text-slate-600 truncate max-w-[120px]">
                    {combo.modem}
                  </span>
                </div>

                {/* FEATURES LIST */}
                <ul className="mt-4 space-y-2 text-xs text-slate-600">
                  {combo.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="size-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="size-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() =>
                    openRegisterModal({
                      id: combo.id,
                      name: combo.name,
                      price: combo.price,
                      category: "gia_dinh",
                      categoryName: "Combo Thể Thao",
                      downloadSpeed: combo.downloadSpeed,
                      uploadSpeed: combo.uploadSpeed,
                      image: combo.image,
                      modem: combo.modem,
                      recommendedDevices: "5 - 15 thiết bị",
                      features: combo.features,
                      description: "Combo Thể Thao FPT Play xem trọn vẹn 380 trận Ngoại Hạng Anh.",
                    })
                  }
                  className="w-full bg-[#f57020] hover:bg-[#e05e10] text-white py-2.5 rounded-xl font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Đăng ký ngay
                </button>
                <button
                  onClick={() =>
                    openDetailModal({
                      id: combo.id,
                      name: combo.name,
                      price: combo.price,
                      category: "gia_dinh",
                      categoryName: "Combo Thể Thao",
                      downloadSpeed: combo.downloadSpeed,
                      uploadSpeed: combo.uploadSpeed,
                      image: combo.image,
                      modem: combo.modem,
                      recommendedDevices: "5 - 15 thiết bị",
                      features: combo.features,
                      description: "Combo Thể Thao FPT Play xem trọn vẹn 380 trận Ngoại Hạng Anh.",
                    })
                  }
                  className="w-full py-2 text-xs font-semibold text-slate-600 hover:text-[#004a9c] transition-colors cursor-pointer"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW ALL LINK */}
      <div className="text-center mt-2 pb-2">
        <Link
          href="/goi-cuoc/combo"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#004a9c] hover:text-[#f57020] transition-colors"
        >
          <span>Xem tất cả gói Combo Thể Thao</span>
          <ChevronRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
