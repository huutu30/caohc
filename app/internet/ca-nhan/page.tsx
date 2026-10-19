"use client";

import * as React from "react";
import Link from "next/link";
import {
  Wifi,
  ChevronRight,
  Gift,
  MapPin,
  Zap,
  ShieldCheck,
  Clock,
} from "lucide-react";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";
import { FPT_PACKAGES, FptPackage } from "@/data/fptPackages";
import { useRegion } from "@/context/RegionContext";
import { useRegister } from "@/context/RegisterContext";
import FaqAccordion from "@/components/FaqAccordion";

export default function InternetCaNhanPage() {
  const { activeProvince } = useRegion();
  const { openRegisterModal } = useRegister();

  // ONLY SINGLE-MODEM PERSONAL PACKAGES (NO MESH)
  const personalPackages = FPT_PACKAGES.filter((p) => p.category === "ca_nhan");

  const cardItems: FptProductCardItem[] = personalPackages.map((pkg: FptPackage) => ({
    id: pkg.id,
    name: `Internet ${pkg.name}`,
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
      q: "Gói cước Internet cá nhân FPT phù hợp cho những ai?",
      a: "Các gói cước cá nhân (Giga, Sky, Meta) được thiết kế tối ưu cho sinh viên, người độc thân, người đi làm thuê nhà hoặc gia đình nhỏ từ 1-5 thành viên với chi phí tiết kiệm nhất, trang bị sẵn Modem Wi-Fi 6 tốc độ cao.",
    },
    {
      q: "Thủ tục đăng ký hòa mạng Internet cá nhân cần những gì?",
      a: "Thủ tục đăng ký hòa mạng vô cùng đơn giản: Chỉ cần ảnh chụp Căn cước công dân (CCCD) 2 mặt của người đứng tên. Đội ngũ tư vấn sẽ hoàn thiện hợp đồng điện tử trong 5 phút.",
    },
    {
      q: "Thời gian triển khai bàn giao thiết bị là bao lâu?",
      a: "FPT Telecom triển khai bàn giao thiết bị và hoàn tất kết nối siêu tốc trong vòng 12 - 24 giờ kể từ khi tiếp nhận thông tin đăng ký của quý khách.",
    },
    {
      q: "Đăng ký trả trước cước có ưu đãi gì?",
      a: "Quý khách trả trước 6 tháng được tặng thêm 01 tháng cước sử dụng miễn phí; trả trước 12 tháng được tặng thêm 02 tháng cước và trang bị Modem Wi-Fi 6 hoàn toàn miễn phí.",
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
            <span className="font-semibold text-slate-800">Internet cá nhân</span>
          </nav>
        </div>
      </div>

      {/* HERO HEADER */}
      <section className="bg-white border-b border-slate-200/80 py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#f57020] text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="size-3.5" />
            <span>Wi-Fi 6 Siêu Tốc – Tối Ưu Chi Phí</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-[#101828]">
            Gói Cước Internet Cá Nhân FPT Telecom
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Đường truyền cáp quang tốc độ cao trang bị Modem Wi-Fi 6 băng tần kép. Phù hợp cho nhu cầu học tập, làm việc online, lướt web và giải trí cá nhân.
          </p>

          {/* ACTIVE LOCATION PILL */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
            <MapPin className="size-3.5 text-[#F26F21]" />
            <span>Khu vực áp dụng: </span>
            <span className="text-[#004a9c] font-bold">{activeProvince.name}</span>
          </div>
        </div>
      </section>

      {/* PROMO BANNER */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 mt-6 sm:mt-8">
        <div className="bg-gradient-to-r from-orange-500 to-[#F26F21] text-white rounded-2xl p-4 sm:p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="size-12 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
              <Gift className="size-6 text-amber-200" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black leading-snug">
                Đặc Quyền Đăng Ký Trả Trước
              </h3>
              <p className="text-xs sm:text-sm text-orange-100 mt-0.5">
                Trả trước 6 tháng tặng 01 tháng cước. Trả trước 12 tháng tặng thêm 02 tháng cước sử dụng miễn phí.
              </p>
            </div>
          </div>
          <button
            onClick={() => openRegisterModal()}
            className="shrink-0 bg-white text-[#f57020] hover:bg-orange-50 font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-sm transition-all"
          >
            Đăng ký nhận ưu đãi
          </button>
        </div>
      </div>

      {/* PACKAGES GRID */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-3xl font-black text-[#101828]">
            Bảng Giá Gói Cước Internet Cá Nhân Mới Nhất
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Giá cước đã bao gồm VAT và tự động cập nhật theo tỉnh {activeProvince.name}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {cardItems.map((item) => (
            <FptProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 4 BENEFIT PILLARS */}
      <section className="bg-white border-y border-slate-200/80 py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004a9c] bg-blue-50 px-3 py-1 rounded-full">
              Lợi thế vượt trội
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-[#101828] mt-2">
              Tại Sao Nên Chọn Internet Cá Nhân FPT?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 hover:shadow-md transition-shadow">
              <div className="size-10 rounded-xl bg-blue-100 text-[#004a9c] flex items-center justify-center mb-3">
                <Wifi className="size-5" />
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 mb-1">
                Modem Wi-Fi 6 Thế Hệ Mới
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tăng 4x băng thông, giảm 75% độ trễ, kết nối ổn định nhiều thiết bị cùng lúc không lo nghẽn mạng.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 hover:shadow-md transition-shadow">
              <div className="size-10 rounded-xl bg-orange-100 text-[#f57020] flex items-center justify-center mb-3">
                <Zap className="size-5" />
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 mb-1">
                Tốc Độ Không Giới Hạn
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Gói Sky và Meta mở rộng băng thông tối đa lên đến 1 Gbps, tải file nặng chỉ trong vài giây.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 hover:shadow-md transition-shadow">
              <div className="size-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                <Clock className="size-5" />
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 mb-1">
                Bàn Giao Siêu Tốc 24 Giờ
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Đội ngũ triển khai dịch vụ nhanh chóng, bàn giao và cấu hình thiết bị hoàn tất ngay trong ngày.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 hover:shadow-md transition-shadow">
              <div className="size-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                <ShieldCheck className="size-5" />
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 mb-1">
                Thủ Tục Đơn Giản CCCD
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Chỉ cần ảnh Căn cước công dân, ký hợp đồng điện tử trực tuyến an toàn và bảo mật thông tin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPECS COMPARISON */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-3xl font-black text-[#101828]">
            So Sánh Thông Số Các Gói Cá Nhân
          </h2>
        </div>

        <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-xs max-w-4xl mx-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 text-slate-700 font-extrabold border-b border-slate-200">
              <tr>
                <th className="p-4">Tiêu chí</th>
                <th className="p-4">Gói Giga</th>
                <th className="p-4 bg-orange-50/50 text-[#f57020]">Gói Sky (Bán chạy)</th>
                <th className="p-4">Gói Meta</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-4 font-semibold text-slate-900">Tốc độ Download</td>
                <td className="p-4 text-slate-600">150 Mbps</td>
                <td className="p-4 font-bold text-[#004a9c] bg-orange-50/20">1 Gbps (1024 Mbps)</td>
                <td className="p-4 font-bold text-[#004a9c]">1 Gbps (1024 Mbps)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Tốc độ Upload</td>
                <td className="p-4 text-slate-600">150 Mbps</td>
                <td className="p-4 text-slate-600 bg-orange-50/20">150 Mbps</td>
                <td className="p-4 font-bold text-[#004a9c]">1 Gbps (Đối xứng)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Thiết bị trang bị</td>
                <td className="p-4 text-slate-600">Modem Wi-Fi 6 AX1800</td>
                <td className="p-4 text-slate-600 bg-orange-50/20">Modem Wi-Fi 6 AX1800</td>
                <td className="p-4 text-slate-600">Modem Wi-Fi 6 AX3000</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Thiết bị kết nối</td>
                <td className="p-4 text-slate-600">1 - 5 thiết bị</td>
                <td className="p-4 text-slate-600 bg-orange-50/20">5 - 12 thiết bị</td>
                <td className="p-4 text-slate-600">10 - 25 thiết bị</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-slate-900">Nhu cầu phù hợp</td>
                <td className="p-4 text-slate-600">Lướt web, học online, mạng xã hội</td>
                <td className="p-4 text-slate-600 bg-orange-50/20">Xem phim 4K, tải game nặng, làm việc</td>
                <td className="p-4 text-slate-600">Livestream, sáng tạo nội dung, Render file</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="bg-white border-t border-slate-200/80 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-3xl font-black text-[#101828]">
              Câu Hỏi Thường Gặp
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Giải đáp các thắc mắc về gói cước Internet cá nhân FPT Telecom
            </p>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
