"use client";

import * as React from "react";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Sparkles,
  Zap,
  Cpu,
  Layers,
  Radio,
} from "lucide-react";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";
import { FPT_PACKAGES, FptPackage } from "@/data/fptPackages";
import { useRegion } from "@/context/RegionContext";
import { useRegister } from "@/context/RegisterContext";
import FaqAccordion from "@/components/FaqAccordion";

export default function InternetWifi7Page() {
  const { activeProvince } = useRegion();
  const { openRegisterModal } = useRegister();

  // ONLY WI-FI 7 PACKAGES
  const wifi7Packages = FPT_PACKAGES.filter((p) => p.category === "wifi_7");

  const cardItems: FptProductCardItem[] = wifi7Packages.map((pkg: FptPackage) => ({
    id: pkg.id,
    name: pkg.name,
    category: pkg.category,
    badge: pkg.badge,
    isPopular: pkg.isHot,
    image: pkg.image,
    price: pkg.price,
    speed: pkg.downloadSpeed,
    uploadSpeed: pkg.uploadSpeed,
    equipment: pkg.modem,
    features: pkg.features,
    description: pkg.description,
    recommendedDevices: pkg.recommendedDevices,
    detailUrl: `/internet/${pkg.id}`,
  }));

  const faqs = [
    {
      q: "Chuẩn Wi-Fi 7 có gì vượt trội so với Wi-Fi 6?",
      a: "Wi-Fi 7 (chuẩn 802.11be) là thế hệ mạng không dây tối tân nhất hiện nay với độ rộng kênh lên đến 320 MHz, công nghệ đa liên kết MLO (Multi-Link Operation) cho phép truyền nhận dữ liệu đồng thời trên nhiều băng tần (2.4GHz, 5GHz, 6GHz). Tốc độ truyền tải nhanh gấp 4 lần và độ trễ giảm tới 100 lần so với Wi-Fi 6.",
    },
    {
      q: "Hạ tầng XGS-PON của FPT Telecom là gì?",
      a: "XGS-PON là công nghệ mạng cáp quang đối xứng thế hệ mới, cho phép truyền tải đồng thời cả chiều tải xuống (Download) và tải lên (Upload) với tốc độ lên đến 10 Gbps (10.000 Mbps) trên cùng 1 sợi quang, không bị suy hao theo khoảng cách.",
    },
    {
      q: "Gói cước Wi-Fi 7 phù hợp cho đối tượng khách hàng nào?",
      a: "Các gói FPT SpeedX2 và SpeedX10 đặc biệt phù hợp cho các căn biệt thự cao cấp, Penthouse rộng lớn, các Studio sản xuất phim 8K, phòng thu âm chuyên nghiệp, văn phòng công nghệ cao và những người dùng đam mê trải nghiệm công nghệ đỉnh cao tương lai.",
    },
    {
      q: "Các thiết bị hiện tại của tôi có kết nối được với Wi-Fi 7 không?",
      a: "Hoàn toàn tương thích. Modem Wi-Fi 7 của FPT tương thích ngược 100% với toàn bộ các thiết bị chuẩn Wi-Fi 6, Wi-Fi 5, Wi-Fi 4 hiện có trên thị trường, đồng thời phát huy sức mạnh tối đa khi kết nối với các dòng điện thoại, laptop đời mới có hỗ trợ Wi-Fi 7.",
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
            <Link href="/internet" className="hover:text-[#F26F21] transition-colors">
              Internet - Wifi
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="font-semibold text-slate-800">Internet Wi-Fi 7</span>
          </nav>
        </div>
      </div>

      {/* HERO HEADER */}
      <section className="bg-gradient-to-r from-[#030712] via-[#0B1A3D] to-[#030712] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-black uppercase tracking-widest mb-4">
            <Sparkles className="size-4 text-amber-300" />
            <span>Kỷ Nguyên Kết Nối Tương Lai – Chuẩn Wi-Fi 7 & XGS-PON</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Internet FPT Wi-Fi 7 Siêu Tốc Đến 10 Gbps
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-lg max-w-3xl mx-auto leading-relaxed">
            FPT Telecom tiên phong cung ứng dịch vụ Internet thương mại chuẩn Wi-Fi 7 trên nền hạ tầng XGS-PON hiện đại nhất Việt Nam.
          </p>

          {/* ACTIVE LOCATION PILL & CTA */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-semibold text-white">
              <MapPin className="size-3.5 text-[#F26F21]" />
              <span>Khu vực áp dụng: </span>
              <span className="text-cyan-300 font-bold">{activeProvince.name}</span>
            </div>
            <button
              onClick={() => openRegisterModal()}
              className="inline-flex items-center gap-2 bg-[#f57020] hover:bg-[#e05e10] text-white px-5 py-2 rounded-full font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Sparkles className="size-3.5 text-amber-200" />
              <span>Đăng ký gói Wi-Fi 7</span>
            </button>
          </div>
        </div>
      </section>

      {/* PACKAGES GRID */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10 sm:py-16">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-3xl font-black text-[#101828]">
            Danh Sách Gói Cước FPT Wi-Fi 7 XGS-PON
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Trang bị trọn bộ thiết bị Wi-Fi 7 thế hệ mới và gói giải trí FPT Play VIP
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cardItems.map((item) => (
            <FptProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 4 PILLARS OF WI-FI 7 REVOLUTION */}
      <section className="bg-white border-y border-slate-200/80 py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004a9c] bg-blue-50 px-3 py-1 rounded-full">
              Đột phá công nghệ
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-[#101828] mt-2">
              Sức Mạnh Tuyệt Đối Của Chuẩn Wi-Fi 7
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/70">
              <div className="size-12 rounded-xl bg-blue-100 text-[#004a9c] flex items-center justify-center mb-4">
                <Zap className="size-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-2">
                Băng Thông 10 Gbps Đối Xứng
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tốc độ tải xuống và tải lên đều đạt kỷ lục 10.000 Mbps. Tải trọn bộ phim 8K dung lượng 100GB chỉ trong dưới 2 phút.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/70">
              <div className="size-12 rounded-xl bg-orange-100 text-[#f57020] flex items-center justify-center mb-4">
                <Radio className="size-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-2">
                Đa Liên Kết MLO Thông Minh
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thiết bị truyền nhận dữ liệu đồng thời trên cả 3 băng tần (2.4GHz, 5GHz, 6GHz), loại bỏ nghẽn sóng và triệt tiêu độ trễ.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/70">
              <div className="size-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <Cpu className="size-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-2">
                Kênh Băng Thông Rộng 320 MHz
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Độ rộng kênh gấp đôi Wi-Fi 6, cho phép truyền tải lượng dữ liệu khổng lồ trong chớp mắt mà không bị xung đột tín hiệu.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/70">
              <div className="size-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                <Layers className="size-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-2">
                Chịu Tải 200 Thiết Bị Đồng Thời
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Gateway công nghệ cao vận hành mát mẻ, kết nối hàng trăm thiết bị IoT, Smart Home, Camera AI cùng lúc mà vẫn mượt mà.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="bg-white border-t border-slate-200/80 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-3xl font-black text-[#101828]">
              Câu Hỏi Thường Gặp Về Gói Wi-Fi 7
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
