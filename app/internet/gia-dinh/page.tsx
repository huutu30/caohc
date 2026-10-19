"use client";

import * as React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Gift,
  MapPin,
  Home,
  ShieldCheck,
  Signal,
  Layers,
} from "lucide-react";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";
import { FPT_PACKAGES, FptPackage } from "@/data/fptPackages";
import { useRegion } from "@/context/RegionContext";
import { useRegister } from "@/context/RegisterContext";
import FaqAccordion from "@/components/FaqAccordion";

export default function InternetGiaDinhPage() {
  const { activeProvince } = useRegion();
  const { openRegisterModal } = useRegister();

  // ONLY FAMILY PACKAGES WITH MESH WI-FI 6
  const familyPackages = FPT_PACKAGES.filter((p) => p.category === "gia_dinh");

  const cardItems: FptProductCardItem[] = familyPackages.map((pkg: FptPackage) => ({
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
      q: "Gói cước Internet gia đình khác gì so với gói cá nhân?",
      a: "Gói Internet gia đình được trang bị thêm từ 01 đến 02 thiết bị Mesh Wi-Fi 6 mở rộng vùng phủ sóng. Các thiết bị tự động liên kết thành mạng thống nhất (Seamless Roaming), giúp sóng phủ đều mọi ngóc ngách, tầng trệt đến tầng thượng mà không bị gián đoạn hay chập chờn.",
    },
    {
      q: "Nhà 3 tầng hoặc diện tích trên 100m2 nên chọn gói nào?",
      a: "FPT Telecom khuyến nghị quý khách lựa chọn gói Sky F1 (kèm 01 Mesh Wi-Fi 6) cho nhà 2 tầng hoặc căn hộ 80-120m2; và gói Sky F2 (kèm 02 Mesh Wi-Fi 6) cho nhà phố từ 3-4 tầng để đảm bảo sóng căng vạch ở mọi phòng.",
    },
    {
      q: "Thiết bị Mesh Wi-Fi 6 được cấp theo dạng cho mượn hay bán?",
      a: "Tất cả các thiết bị Modem Wi-Fi 6 và thiết bị Mesh phụ trợ đều được FPT Telecom trang bị miễn phí trong suốt quá trình sử dụng dịch vụ và được hỗ trợ đổi mới nếu xảy ra lỗi phần cứng.",
    },
    {
      q: "Đăng ký gói gia đình có tích hợp được Camera an ninh hoặc Smart TV không?",
      a: "Đường truyền Internet gia đình Wi-Fi 6 của FPT chịu tải cùng lúc từ 15 đến 35 thiết bị, hoàn toàn tương thích và mượt mà khi kết nối nhiều Smart TV 4K, hệ thống Camera Cloud và các thiết bị Smart Home.",
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
            <span className="font-semibold text-slate-800">Internet gia đình</span>
          </nav>
        </div>
      </div>

      {/* HERO HEADER */}
      <section className="bg-white border-b border-slate-200/80 py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#004a9c] text-xs font-bold uppercase tracking-wider mb-3">
            <Home className="size-3.5" />
            <span>Phủ Sóng Toàn Diện – Trang Bị Mesh Wi-Fi 6</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-[#101828]">
            Gói Cước Internet Gia Đình FPT Telecom
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Giải pháp WiFi Mesh phủ sóng xuyên tầng, triệt tiêu hoàn toàn góc chết sóng. Phù hợp cho nhà phố nhiều tầng, căn hộ chung cư nhiều phòng ngủ và biệt thự.
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
        <div className="bg-gradient-to-r from-blue-700 via-[#004a9c] to-indigo-800 text-white rounded-2xl p-4 sm:p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="size-12 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
              <Gift className="size-6 text-amber-300" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black leading-snug">
                Ưu Đãi Trang Bị Thiết Bị Mesh Wi-Fi 6 Miễn Phí
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-0.5">
                Đăng ký gói gia đình hôm nay: Tặng thêm đến 02 tháng cước khi thanh toán trước và trang bị trọn bộ thiết bị Mesh phụ trợ.
              </p>
            </div>
          </div>
          <button
            onClick={() => openRegisterModal()}
            className="shrink-0 bg-[#F26F21] hover:bg-orange-600 font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm text-white shadow-md transition-all cursor-pointer"
          >
            Đăng ký tư vấn ngay
          </button>
        </div>
      </div>

      {/* PACKAGES GRID */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-3xl font-black text-[#101828]">
            Bảng Giá Gói Cước Internet Gia Đình Wi-Fi Mesh
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Tất cả các gói dưới đây đều được trang bị sẵn thiết bị Mesh Wi-Fi 6 mở rộng vùng phủ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {cardItems.map((item) => (
            <FptProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* MESH WI-FI 6 TECHNOLOGY HIGHLIGHTS */}
      <section className="bg-white border-y border-slate-200/80 py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004a9c] bg-blue-50 px-3 py-1 rounded-full">
              Công nghệ đỉnh cao
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-[#101828] mt-2">
              Tại Sao Gia Đình Nên Sử Dụng Wi-Fi Mesh?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 text-center">
              <div className="size-12 rounded-2xl bg-orange-100 text-[#f57020] flex items-center justify-center mx-auto mb-4">
                <Signal className="size-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-2">
                Một Tên WiFi Duy Nhất (SSID)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Toàn bộ căn nhà chỉ dùng chung 1 tên Wi-Fi và mật khẩu duy nhất. Điện thoại tự động bắt sóng mạnh nhất khi di chuyển giữa các phòng.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 text-center">
              <div className="size-12 rounded-2xl bg-blue-100 text-[#004a9c] flex items-center justify-center mx-auto mb-4">
                <Layers className="size-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-2">
                Chuyển Vùng Liền Mạch (Roaming)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Di chuyển từ tầng 1 lên tầng 3 khi đang gọi video Call hay chơi game mà hoàn toàn không bị ngắt kết nối hay rớt mạng dù chỉ 1 giây.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/70 text-center">
              <div className="size-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="font-extrabold text-base text-slate-900 mb-2">
                Cân Tải Nhiều Thiết Bị Cùng Lúc
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Đáp ứng mượt mà cho 15 - 35 thiết bị gia đình: Smart TV xem 4K, camera an ninh ghi hình liên tục, máy tính và điện thoại của cả nhà.
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
              Câu Hỏi Thường Gặp Về Gói Gia Đình
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
