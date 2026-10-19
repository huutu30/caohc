"use client";

import * as React from "react";
import Link from "next/link";
import { Tv, ChevronRight, Gift, Trophy, Film, MapPin } from "lucide-react";
import FptProductCard from "@/components/fpt/FptProductCard";
import { useRegion } from "@/context/RegionContext";
import FaqAccordion from "@/components/FaqAccordion";

export default function ComboPackagesPage() {
  const { activeProvince } = useRegion();

  const sportsCombos = [
    {
      id: "combo-sky-vvip-lite",
      name: "Combo Internet Sky V.VIP",
      category: "combo",
      badge: "BÁN CHẠY NHẤT",
      isPopular: true,
      image: "/images/c-the-thao-sky.webp",
      price: 239000,
      originalPrice: 280000,
      speed: "1 Gbps",
      uploadSpeed: "150 Mbps",
      equipment: "Modem Wi-Fi 6 AX1800 + Box Voice 4K",
      description: "Xem trọn vẹn 380 trận Ngoại Hạng Anh & Cúp C1 UEFA, kho giải trí 170+ kênh đặc sắc.",
      features: [
        "Bản quyền 380 trận Ngoại Hạng Anh & Cúp C1 UEFA",
        "Trang bị 01 Box TV điều khiển giọng nói 4K",
        "Modem Wi-Fi 6 AX1800 băng tần kép thế hệ mới",
        "Đăng nhập đồng thời trên 3 thiết bị xem mượt mà",
      ],
      detailUrl: "/goi-cuoc/combo/combo-sky-vvip",
    },
    {
      id: "combo-giga-vvip",
      name: "Combo Internet Giga V.VIP",
      category: "combo",
      badge: "TIẾT KIỆM",
      isPopular: false,
      image: "/images/combo-giga.webp",
      price: 220000,
      originalPrice: 250000,
      speed: "150 Mbps",
      uploadSpeed: "150 Mbps",
      equipment: "Modem Wi-Fi 6 AX1800 + FPT Play",
      description: "Phù hợp gia đình nhỏ lướt web tốc độ cao và xem truyền hình thể thao chất lượng HD.",
      features: [
        "Xem trực tiếp Ngoại Hạng Anh, FA Cup",
        "Gần 170 kênh truyền hình trong & ngoài nước",
        "Trang bị Modem Wi-Fi 6 chuẩn AX tân tiến",
        "Bàn giao thiết bị tận nhà trong vòng 24 giờ",
      ],
      detailUrl: "/goi-cuoc/combo/combo-giga-vvip",
    },
    {
      id: "combo-meta-vvip",
      name: "Combo Internet Meta V.VIP",
      category: "combo",
      badge: "1GBPS ĐỐI XỨNG",
      isPopular: false,
      image: "/images/c-the-thao-meta.webp",
      price: 345000,
      originalPrice: 390000,
      speed: "1 Gbps",
      uploadSpeed: "1 Gbps",
      equipment: "Modem Wi-Fi 6 AX3000 + Box Voice",
      description: "Tốc độ đối xứng cực đại 1Gbps / 1Gbps, xem phim điện ảnh 4K không quảng cáo.",
      features: [
        "Tốc độ đối xứng cực đại 1Gbps / 1Gbps",
        "Kho phim điện ảnh chiếu rạp không quảng cáo",
        "Xem mượt mà đồng thời trên 5 thiết bị",
        "Đặc quyền chăm sóc và phục vụ ưu tiên",
      ],
      detailUrl: "/goi-cuoc/combo/combo-meta-vvip",
    },
    {
      id: "combo-sky-f1-vvip",
      name: "Combo Sky F1 (Kèm Mesh)",
      category: "combo",
      badge: "NHÀ NHIỀU TẦNG",
      isPopular: false,
      image: "/images/c-the-thao-sky-f1.webp",
      price: 269000,
      originalPrice: 310000,
      speed: "1 Gbps",
      uploadSpeed: "150 Mbps",
      equipment: "01 Modem Wi-Fi 6 + 01 Mesh Wi-Fi 6",
      description: "Phủ sóng xuyên tường toàn bộ căn hộ, nhà phố; trọn vẹn bản quyền Ngoại Hạng Anh 4K.",
      features: [
        "Phủ sóng xuyên tường toàn bộ căn hộ, nhà phố",
        "Trọn vẹn bản quyền Ngoại Hạng Anh 4K",
        "Tích hợp FPT Play Box điều khiển giọng nói",
        "Tặng thêm tới 2 tháng cước sử dụng",
      ],
      detailUrl: "/goi-cuoc/combo/combo-sky-vvip",
    },
  ];

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen">
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-3">
          <nav className="flex items-center space-x-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#F26F21] transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="font-semibold text-slate-800">Combo Internet + Truyền hình FPT Play</span>
          </nav>
        </div>
      </div>

      {/* SUBPAGE HEADER (CLEAN FPT STYLE) */}
      <section className="bg-white border-b border-slate-200/80 py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#F26F21] text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="size-3.5" />
            <span>Bản Quyền Ngoại Hạng Anh 2026</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-[#101828]">
            Combo Internet Wi-Fi 6 + Truyền Hình FPT Play
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Tiết kiệm tới 35% chi phí khi đăng ký trọn gói Internet Wi-Fi 6 siêu tốc và gói FPT Play VVIP xem trọn vẹn 380 trận Ngoại Hạng Anh, Cúp C1 UEFA cùng 170+ kênh truyền hình.
          </p>

          {/* ACTIVE LOCATION PILL */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
            <MapPin className="size-3.5 text-[#F26F21]" />
            <span>Khu vực áp dụng: </span>
            <span className="text-[#004a9c] font-bold">{activeProvince.name}</span>
          </div>
        </div>
      </section>

      {/* ADVANCE PAYMENT PROMOTION BANNER */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 mt-6 sm:mt-8">
        <div className="bg-gradient-to-r from-orange-500 to-[#F26F21] text-white rounded-2xl p-4 sm:p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="size-12 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
              <Gift className="size-6 text-amber-200" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black leading-snug">
                Ưu Đãi Đặc Biệt Cho Gói Combo FPT Play
              </h3>
              <p className="text-xs sm:text-sm text-orange-100 mt-0.5">
                Trang bị miễn phí Đầu thu giọng nói 4K + Modem Wi-Fi 6. Tặng thêm đến 2 tháng cước khi thanh toán trước.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="bg-white/20 px-3 py-1.5 rounded-lg text-xs font-bold">
              Box 4K giọng nói
            </span>
            <span className="bg-white/20 px-3 py-1.5 rounded-lg text-xs font-bold">
              Ngoại Hạng Anh 4K
            </span>
          </div>
        </div>
      </div>

      {/* COMBO PACKAGES GRID */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sportsCombos.map((pkg) => (
            <FptProductCard key={pkg.id} item={pkg} />
          ))}
        </div>
      </section>

      {/* ENTERTAINMENT HIGHLIGHTS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 pb-12">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-black text-[#101828] mb-8 text-center">
            Đặc Quyền Giải Trí Đỉnh Cao Trên FPT Play
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
              <div className="size-12 rounded-full bg-blue-100 text-[#004a9c] flex items-center justify-center mb-4">
                <Trophy className="size-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Thể Thao Độc Quyền
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Trọn vẹn 380 trận Ngoại Hạng Anh, Cúp C1 UEFA, Cúp C2, Emirates FA Cup, V.League, VBA, UFC phát sóng trực tiếp.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
              <div className="size-12 rounded-full bg-orange-100 text-[#F26F21] flex items-center justify-center mb-4">
                <Film className="size-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Kho Phim Điện Ảnh 4K
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Hơn 10.000 giờ phim chiếu rạp bom tấn Hollywood, Châu Á, anime Nhật Bản cập nhật mới liên tục mỗi ngày không quảng cáo.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
              <div className="size-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Tv className="size-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                170+ Kênh Truyền Hình
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Gần 170 kênh truyền hình trong nước và quốc tế đặc sắc như VTV, HTV, HBO, Cinemax, Cartoon Network, Discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 pb-16">
        <FaqAccordion />
      </div>
    </div>
  );
}
