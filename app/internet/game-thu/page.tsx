"use client";

import * as React from "react";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Flame,
  Zap,
  Gamepad2,
  Cpu,
  Activity,
} from "lucide-react";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";
import { FPT_PACKAGES, FptPackage } from "@/data/fptPackages";
import { useRegion } from "@/context/RegionContext";
import { useRegister } from "@/context/RegisterContext";
import FaqAccordion from "@/components/FaqAccordion";

export default function InternetGameThuPage() {
  const { activeProvince } = useRegion();
  const { openRegisterModal } = useRegister();

  // GAMER PACKAGES (F-Game, F-Game F1)
  const gamerPackages = FPT_PACKAGES.filter(
    (p) => p.category === "game_thu" || p.id === "meta"
  );

  const cardItems: FptProductCardItem[] = gamerPackages.map((pkg: FptPackage) => ({
    id: pkg.id,
    name: pkg.name.includes("Internet") ? pkg.name : `Gói ${pkg.name}`,
    category: pkg.category,
    badge: pkg.badge || (pkg.id === "meta" ? "Streamer VIP" : undefined),
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

  const supportedGames = [
    { name: "Liên Minh Huyền Thoại (LoL)", ping: "< 8 ms", icon: "⚔️" },
    { name: "Valorant", ping: "< 12 ms", icon: "🎯" },
    { name: "Counter-Strike 2 (CS2)", ping: "< 15 ms", icon: "💣" },
    { name: "PUBG: Battlegrounds", ping: "< 20 ms", icon: "🪂" },
    { name: "FC Online (FIFA Online 4)", ping: "< 5 ms", icon: "⚽" },
    { name: "Genshin Impact", ping: "< 25 ms", icon: "✨" },
    { name: "Dota 2", ping: "< 18 ms", icon: "🛡️" },
    { name: "Liên Quân Mobile", ping: "< 10 ms", icon: "📱" },
  ];

  const faqs = [
    {
      q: "Tính năng Ultra Fast trong gói F-Game hoạt động như thế nào?",
      a: "Ultra Fast là tính năng độc quyền của FPT Telecom, ứng dụng công nghệ Trí tuệ nhân tạo (AI) và Big Data để tự động nhận diện lưu lượng các luồng dữ liệu chơi game. Hệ thống sẽ ưu tiên dẫn luồng dữ liệu qua các tuyến cáp quang trực tiếp ngắn nhất tới máy chủ game tại Việt Nam và quốc tế, giúp giảm Ping tới 50% và loại bỏ hoàn toàn hiện tượng mất gói tin (Packet Loss).",
    },
    {
      q: "Tôi có cần cài đặt hay cấu hình thiết bị gì thêm để dùng Ultra Fast không?",
      a: "Hoàn toàn không. Tính năng Ultra Fast được tích hợp sẵn trực tiếp trên hạ tầng đường truyền và Modem Gaming Wi-Fi 6 của FPT. Quý khách chỉ cần kết nối và chơi game bình thường, hệ thống tự động tối ưu 100%.",
    },
    {
      q: "Gói F-Game có chơi tốt các game trên máy chủ quốc tế như Singapore, Hàn Quốc, Nhật Bản không?",
      a: "FPT Telecom sở hữu nhiều tuyến cáp quang biển quốc tế lớn (APG, AAE-1, AAG) với băng thông ưu tiên riêng cho luồng game. Nhờ đó, Ping khi kết nối tới cụm máy chủ Singapore chỉ dao động từ 15-25ms, máy chủ Hồng Kông / Nhật Bản từ 35-50ms cực kỳ ổn định.",
    },
    {
      q: "Streamer có nên dùng gói F-Game hay gói Meta?",
      a: "Nếu bạn vừa chơi game thi đấu vừa Livestream đa nền tảng (YouTube, Facebook, TikTok) ở độ phân giải 2K-4K, gói Meta (1Gbps đối xứng) hoặc F-Game F1 là sự lựa chọn tối ưu nhờ băng thông tải lên cực lớn và độ trễ thấp.",
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
            <span className="font-semibold text-slate-800">Internet game thủ</span>
          </nav>
        </div>
      </div>

      {/* HERO HEADER */}
      <section className="bg-gradient-to-b from-slate-900 via-[#0B1A3D] to-slate-900 text-white py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-bold uppercase tracking-wider mb-4">
            <Flame className="size-3.5" />
            <span>Độc Quyền Công Nghệ Ultra Fast – Tối Ưu Ping</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Gói Cước Internet Game Thủ FPT Telecom
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Trải nghiệm thi đấu eSports đỉnh cao với công nghệ AI tự động định tuyến đường truyền. Giảm Ping tối đa, triệt tiêu giật lag và hiện tượng Packet Loss.
          </p>

          {/* ACTIVE LOCATION PILL & CTA */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-xs font-semibold text-white">
              <MapPin className="size-3.5 text-[#F26F21]" />
              <span>Khu vực áp dụng: </span>
              <span className="text-orange-300 font-bold">{activeProvince.name}</span>
            </div>
            <button
              onClick={() => openRegisterModal()}
              className="inline-flex items-center gap-2 bg-[#f57020] hover:bg-[#e05e10] text-white px-5 py-2 rounded-full font-bold text-xs shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Gamepad2 className="size-3.5" />
              <span>Đăng ký gói Game thủ</span>
            </button>
          </div>
        </div>
      </section>

      {/* PACKAGES GRID */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-10 sm:py-14">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-3xl font-black text-[#101828]">
            Các Gói Cước Chuyên Biệt Dành Cho Gamer & Streamer
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Được tích hợp sẵn Modem Gaming Wi-Fi 6 độ trễ siêu thấp
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {cardItems.map((item) => (
            <FptProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* ULTRA FAST BENCHMARK & SUPPORTED GAMES */}
      <section className="bg-white border-y border-slate-200/80 py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004a9c] bg-blue-50 px-3 py-1 rounded-full">
              Hỗ trợ 50+ Game Hot
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-[#101828] mt-2">
              Ping Ổn Định Tuyệt Đối Tới Các Máy Chủ eSports
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {supportedGames.map((g, i) => (
              <div
                key={i}
                className="bg-[#F8FAFC] border border-slate-200/80 rounded-2xl p-4 flex flex-col items-center text-center hover:border-orange-300 hover:shadow-sm transition-all"
              >
                <span className="text-2xl mb-2">{g.icon}</span>
                <h4 className="font-bold text-xs text-slate-800 line-clamp-1">{g.name}</h4>
                <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <Activity className="size-3" />
                  <span>Ping: {g.ping}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ULTRA FAST 3 HIGHLIGHTS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
            <div className="p-6 rounded-2xl bg-orange-50/50 border border-orange-100 text-center">
              <div className="size-12 rounded-2xl bg-orange-100 text-[#f57020] flex items-center justify-center mx-auto mb-3">
                <Cpu className="size-6" />
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 mb-1">
                AI Phân Luồng Thông Minh
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tự động nhận diện dữ liệu game và ưu tiên truyền tải tức thì, không bị ảnh hưởng khi người khác đang tải phim hay xem YouTube 4K.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100 text-center">
              <div className="size-12 rounded-2xl bg-blue-100 text-[#004a9c] flex items-center justify-center mx-auto mb-3">
                <Zap className="size-6" />
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 mb-1">
                Triệt Tiêu 0% Packet Loss
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Đảm bảo mọi phát bắn và combo chiêu thức không bị nuốt đạn, giật khựng trong những pha giao tranh căng thẳng.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-center">
              <div className="size-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <Gamepad2 className="size-6" />
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 mb-1">
                Hỗ Trợ Mọi Nền Tảng
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tối ưu trên PC Gaming, Laptop, máy chơi game Console (PlayStation 5, Xbox, Nintendo Switch) và cả Smartphone.
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
              Câu Hỏi Thường Gặp Của Game Thủ
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
