"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Wifi,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useRegister } from "@/context/RegisterContext";
import FaqAccordion from "@/components/FaqAccordion";

export default function WifiMeshPage() {
  const { openRegisterModal } = useRegister();

  const meshSpecs = [
    { title: "Chuẩn kết nối", value: "Wi-Fi 6 (802.11ax) thế hệ mới" },
    { title: "Băng tần hoạt động", value: "Băng tần kép 2.4GHz & 5GHz" },
    { title: "Tốc độ lý thuyết", value: "Lên đến 1800 - 3000 Mbps" },
    { title: "Số thiết bị kết nối", value: "30 - 60 thiết bị đồng thời" },
    { title: "Công nghệ Roaming", value: "802.11k/v/r chuyển vùng không độ trễ" },
    { title: "Cổng kết nối LAN", value: "Cổng Gigabit Ethernet 1000 Mbps" },
  ];

  const faqs = [
    {
      q: "Thiết bị Wifi Mesh FPT có hoạt động với modem của nhà mạng khác không?",
      a: "Thiết bị Mesh Wi-Fi 6 của FPT Telecom được tối ưu hóa đặc biệt và đồng bộ tốt nhất với hệ sinh thái modem cáp quang FPT, giúp kích hoạt trọn vẹn tính năng Seamless Roaming và quản lý trực tiếp qua ứng dụng Hi FPT.",
    },
    {
      q: "Chi phí trang bị thiết bị Mesh Wi-Fi 6 là bao nhiêu?",
      a: "Quý khách đăng ký các gói cước F1 (Sky F1, Giga F1, Meta F1) hoặc F2 (Sky F2) sẽ được FPT Telecom trang bị miễn phí 1 đến 2 thiết bị Mesh trong suốt thời gian sử dụng. Trường hợp quý khách muốn trang bị thêm cục phát lẻ, chi phí chỉ từ 30.000đ/tháng.",
    },
    {
      q: "Lắp đặt thiết bị Mesh có phải đục tường hay đi dây mạng lòng thòng không?",
      a: "Hoàn toàn không. Các thiết bị Mesh Wi-Fi 6 kết nối không dây (Wireless Backhaul) với nhau cực kỳ thẩm mỹ, quý khách chỉ cần cắm nguồn điện ở vị trí phù hợp trong nhà là hệ sinh thái tự động bắt sóng và khuếch đại.",
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
            <span className="text-slate-500">Thiết bị</span>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="font-semibold text-slate-800">Wifi Mesh Wi-Fi 6</span>
          </nav>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="bg-white border-b border-slate-200/80 py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#004a9c] text-xs font-bold uppercase tracking-wider mb-4">
                <Wifi className="size-3.5" />
                <span>Thiết Bị Mở Rộng Sóng Wi-Fi 6 Chính Hãng</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-[#101828] leading-tight">
                Thiết Bị Wifi Mesh FPT Telecom
              </h1>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Giải pháp phủ sóng mạng không dây thông minh, triệt tiêu mọi góc chết sóng trong căn hộ nhiều phòng, nhà phố nhiều tầng và biệt thự rộng lớn.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => openRegisterModal()}
                  className="bg-[#f57020] hover:bg-[#e05e10] text-white font-bold px-6 py-3 rounded-full text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Đăng ký trang bị miễn phí
                </button>
                <Link
                  href="/internet/gia-dinh"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#004a9c] hover:text-[#f57020] transition-colors"
                >
                  <span>Xem các gói gia đình kèm Mesh</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-6 border-t border-slate-100 pt-6">
                <div>
                  <div className="text-2xl font-black text-[#004a9c]">100%</div>
                  <div className="text-xs text-slate-500">Phủ sóng không góc chết</div>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <div className="text-2xl font-black text-[#f57020]">1 Tên</div>
                  <div className="text-xs text-slate-500">SSID duy nhất toàn nhà</div>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <div className="text-2xl font-black text-emerald-600">30+</div>
                  <div className="text-xs text-slate-500">Thiết bị chịu tải</div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-tr from-slate-100 to-orange-50/50 p-8 flex items-center justify-center border border-slate-200/70">
              <Image
                src="/images/sky-f1.webp"
                alt="Thiết bị Wifi Mesh FPT"
                fill
                className="object-contain p-6"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-3xl font-black text-[#101828]">
            Thông Số Kỹ Thuật Thiết Bị Mesh Wi-Fi 6
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 shadow-xs overflow-hidden">
          {meshSpecs.map((spec, i) => (
            <div key={i} className="flex items-center justify-between p-4 text-xs sm:text-sm">
              <span className="font-semibold text-slate-600">{spec.title}</span>
              <span className="font-bold text-slate-900">{spec.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="bg-white border-t border-slate-200/80 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-3xl font-black text-[#101828]">
              Câu Hỏi Thường Gặp Về Thiết Bị Mesh
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
