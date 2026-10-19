"use client";

import * as React from "react";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Flame,
} from "lucide-react";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";
import { VVIP_SPORTS_PACKAGES, FptVvipSportsCombo } from "@/data/fptPackages";
import { useRegion } from "@/context/RegionContext";
import { useRegister } from "@/context/RegisterContext";
import FaqAccordion from "@/components/FaqAccordion";

export default function NgoaiHangAnhPage() {
  const { activeProvince } = useRegion();
  const { openRegisterModal } = useRegister();

  const isNoiThanh = activeProvince.region === "hcm";
  const displayedCombos = isNoiThanh
    ? VVIP_SPORTS_PACKAGES.filter((c) => c.id !== "combo-giga-vvip")
    : VVIP_SPORTS_PACKAGES;

  const cardItems: FptProductCardItem[] = displayedCombos.map(
    (combo: FptVvipSportsCombo) => ({
      id: combo.id,
      name: combo.name,
      category: "combo",
      badge: combo.badge,
      isPopular: combo.isPopular,
      image: combo.image,
      price: {
        hcm: combo.priceNoiThanh,
        tinh: combo.priceNgoaiThanh,
      },
      speed: combo.downloadSpeed,
      uploadSpeed: combo.uploadSpeed,
      equipment: "Modem Wi-Fi 6 + Box FPT Play 4K Voice",
      features: combo.features,
      description: combo.description,
      recommendedDevices: "Xem đồng thời trên 3 - 5 màn hình",
      detailUrl: `/internet/${combo.id}`,
    })
  );

  const sportsHighlights = [
    {
      title: "Trọn Vẹn 380 Trận Ngoại Hạng Anh",
      desc: "Trực tiếp 10 trận cầu mỗi vòng đấu, độc quyền các trận Super Sunday rực lửa giữa Big 6.",
      icon: "🏆",
    },
    {
      title: "Bản Quyền Độc Quyền Cúp C1 UEFA",
      desc: "UEFA Champions League, Europa League, Conference League chất lượng âm thanh 5.1 sống động.",
      icon: "⭐",
    },
    {
      title: "Đầu Thu FPT Play Box 4K Voice",
      desc: "Trang bị đầu thu thông minh điều khiển giọng nói tiếng Việt, biến mọi TV thường thành Smart TV.",
      icon: "🎙️",
    },
    {
      title: "Đăng Nhập Đa Nền Tảng",
      desc: "Xem mượt mà đồng thời trên Smart TV, máy tính, iPad và Smartphone mọi lúc mọi nơi.",
      icon: "📱",
    },
  ];

  const faqs = [
    {
      q: "Gói cước V.VIP xem Ngoại Hạng Anh bao gồm những dịch vụ gì?",
      a: "Gói cước trọn gói 2 trong 1: Đường truyền Internet cáp quang Wi-Fi 6 tốc độ cao (từ 150 Mbps đến 1 Gbps) và tài khoản FPT Play VIP bản quyền trọn vẹn 380 trận Ngoại Hạng Anh (EPL), cúp C1 UEFA cùng gần 170 kênh truyền hình trong nước và quốc tế.",
    },
    {
      q: "Nhà tôi dùng Smart TV có cần lắp thêm đầu thu FPT Play Box không?",
      a: "Nếu nhà quý khách có Smart TV (Samsung, LG, Sony, Android TV), quý khách có thể tải trực tiếp ứng dụng FPT Play và đăng nhập xem ngay. Tuy nhiên, FPT Telecom vẫn trang bị kèm đầu thu FPT Play Box 4K Voice miễn phí nếu quý khách có nhu cầu.",
    },
    {
      q: "Quán cafe, nhà hàng trình chiếu bóng đá có lắp gói này được không?",
      a: "Đối với quán cafe, quán nhậu, nhà hàng cần phát bóng đá công cộng trên nhiều màn hình lớn, quý khách nên chọn gói 'Combo LUX 500 - V.VIP' với băng thông 500 Mbps chịu tải hàng trăm khách và bản quyền truyền hình phát sóng hợp pháp.",
    },
    {
      q: "Chất lượng hình ảnh các trận cầu Ngoại Hạng Anh trên FPT Play như thế nào?",
      a: "FPT Play phát sóng tín hiệu trực tiếp chuẩn Full HD 1080p và 4K 60fps siêu nét, không bị trễ tiếng hay bóng mờ khi cầu thủ di chuyển tốc độ cao, bình luận tiếng Việt chuyên nghiệp và cuốn hút.",
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
            <span className="font-semibold text-slate-800">Xem Ngoại Hạng Anh FPT Play</span>
          </nav>
        </div>
      </div>

      {/* HERO BANNER SECTION (STUNNING PREMIER LEAGUE ATMOSPHERE) */}
      <section className="relative bg-gradient-to-r from-[#1E0B36] via-[#38003C] to-[#0A051B] text-white py-14 sm:py-20 overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -top-24 -right-24 size-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 size-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-black uppercase tracking-widest mb-4">
            <Flame className="size-4 text-emerald-400" />
            <span>Bản Quyền Độc Quyền Premier League 380 Trận Cầu Đỉnh Cao</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Thưởng Thức Ngoại Hạng Anh <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400">
              Trọn Vẹn Trên FPT Play & Internet Wi-Fi 6
            </span>
          </h1>

          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Combo trọn gói Internet Wi-Fi 6 siêu tốc và bản quyền truyền hình FPT Play V.VIP. Xem mượt mà không độ trễ, hình ảnh 4K chân thực từng pha bóng.
          </p>

          {/* ACTIVE LOCATION PILL & CTA */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-semibold text-white">
              <MapPin className="size-3.5 text-[#F26F21]" />
              <span>Khu vực áp dụng: </span>
              <span className="text-emerald-300 font-bold">{activeProvince.name}</span>
            </div>
            <button
              onClick={() => openRegisterModal()}
              className="inline-flex items-center gap-2 bg-[#f57020] hover:bg-[#e05e10] text-white px-5 py-2 rounded-full font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Flame className="size-3.5 text-amber-300" />
              <span>Đăng ký xem Ngoại Hạng Anh</span>
            </button>
          </div>
        </div>
      </section>

      {/* PACKAGES GRID */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10 sm:py-16">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-3xl font-black text-[#101828]">
            Các Gói Combo Thể Thao V.VIP Ngoại Hạng Anh
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Đã bao gồm đường truyền Internet Wi-Fi 6 và bản quyền trọn mùa giải Ngoại Hạng Anh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cardItems.map((item) => (
            <FptProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 4 HIGHLIGHT PILLARS */}
      <section className="bg-white border-y border-slate-200/80 py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004a9c] bg-blue-50 px-3 py-1 rounded-full">
              Đặc quyền fan bóng đá
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-[#101828] mt-2">
              Trải Nghiệm Thể Thao Đỉnh Cao Không Thể Bỏ Lỡ
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sportsHighlights.map((feat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3">{feat.icon}</div>
                <h3 className="font-extrabold text-base text-slate-900 mb-2">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="bg-white border-t border-slate-200/80 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-3xl font-black text-[#101828]">
              Câu Hỏi Thường Gặp Về Gói Ngoại Hạng Anh
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
