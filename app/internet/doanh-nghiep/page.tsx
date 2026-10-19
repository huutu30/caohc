"use client";

import * as React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Gift,
  MapPin,
  Building2,
  Shield,
  Server,
  Network,
  FileText,
} from "lucide-react";
import FptProductCard, { FptProductCardItem } from "@/components/fpt/FptProductCard";
import { FPT_PACKAGES, FptPackage } from "@/data/fptPackages";
import { useRegion } from "@/context/RegionContext";
import { useRegister } from "@/context/RegisterContext";
import FaqAccordion from "@/components/FaqAccordion";

export default function InternetDoanhNghiepPage() {
  const { activeProvince } = useRegion();
  const { openRegisterModal } = useRegister();

  // ONLY ENTERPRISE PACKAGES
  const bizPackages = FPT_PACKAGES.filter((p) => p.category === "doanh_nghiep");

  const cardItems: FptProductCardItem[] = bizPackages.map((pkg: FptPackage) => ({
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
      q: "Đường truyền Internet doanh nghiệp FPT có cam kết băng thông quốc tế không?",
      a: "Tất cả các gói cước doanh nghiệp (Super Biz và LUX) của FPT Telecom đều có cam kết băng thông quốc tế tối thiểu bằng văn bản trên hợp đồng (từ 10.8 Mbps đến 18.9 Mbps), đảm bảo liên lạc, email, họp trực tuyến Zoom/Teams và giao dịch xuyên biên giới luôn thông suốt.",
    },
    {
      q: "Gói cước có được tặng địa chỉ IP Tĩnh (Static IP) không?",
      a: "Có. Toàn bộ các gói cước doanh nghiệp đều được miễn phí 01 địa chỉ IP Tĩnh cố định chuẩn quốc tế trong suốt thời gian sử dụng, phục vụ nhu cầu cấu hình VPN, Mail Server nội bộ, máy chủ dữ liệu hoặc camera an ninh từ xa.",
    },
    {
      q: "Thủ tục đăng ký hòa mạng doanh nghiệp gồm những giấy tờ gì?",
      a: "Quý doanh nghiệp chỉ cần chuẩn bị: Bản scan/chụp Giấy phép đăng ký kinh doanh (GPKD) và ảnh CCCD của người đại diện pháp luật (hoặc giấy ủy quyền nếu người ký không phải đại diện pháp luật). Hợp đồng điện tử được ký số hoặc ký đóng dấu tận nơi.",
    },
    {
      q: "FPT có xuất hóa đơn giá trị gia tăng (VAT) điện tử không?",
      a: "Có. FPT Telecom phát hành hóa đơn điện tử hợp pháp gửi tự động về email đăng ký của doanh nghiệp vào đầu kỳ thanh toán mỗi tháng, thuận tiện cho việc kê khai thuế và hạch toán chi phí công ty.",
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
            <span className="font-semibold text-slate-800">Internet doanh nghiệp</span>
          </nav>
        </div>
      </div>

      {/* HERO HEADER */}
      <section className="bg-white border-b border-slate-200/80 py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#004a9c] text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="size-3.5" />
            <span>Hạ Tầng Chuyên Biệt – Cam Kết Băng Thông Quốc Tế</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-[#101828]">
            Gói Cước Cáp Quang Doanh Nghiệp FPT Telecom
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Đường truyền cáp quang băng thông đối xứng tốc độ cao, miễn phí IP Tĩnh cố định. Giải pháp kết nối ổn định 24/7 cho công ty, quán cafe, nhà hàng, khách sạn và văn phòng.
          </p>

          {/* ACTIVE LOCATION PILL */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
            <MapPin className="size-3.5 text-[#F26F21]" />
            <span>Khu vực áp dụng: </span>
            <span className="text-[#004a9c] font-bold">{activeProvince.name}</span>
          </div>
        </div>
      </section>

      {/* PROMOTION BANNER */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 mt-6 sm:mt-8">
        <div className="bg-gradient-to-r from-slate-900 via-[#0B1A3D] to-slate-900 text-white rounded-2xl p-4 sm:p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4 border border-blue-900/50">
          <div className="flex items-center gap-3.5">
            <div className="size-12 rounded-xl bg-white/10 backdrop-blur-xs flex items-center justify-center shrink-0">
              <Gift className="size-6 text-amber-300" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black leading-snug">
                Chính Sách Ưu Đãi Đăng Ký Trả Trước Doanh Nghiệp
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Trả trước 6 tháng tặng 01 tháng cước + Miễn phí hòa mạng. Trả trước 12 tháng tặng thêm 02 tháng cước + 01 IP Tĩnh cố định.
              </p>
            </div>
          </div>
          <button
            onClick={() => openRegisterModal()}
            className="shrink-0 bg-[#F26F21] hover:bg-orange-600 font-bold px-5 py-2.5 rounded-full text-xs sm:text-sm text-white shadow-md transition-all cursor-pointer"
          >
            Nhận báo giá doanh nghiệp
          </button>
        </div>
      </div>

      {/* PACKAGES GRID */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-3xl font-black text-[#101828]">
            Bảng Giá Gói Cước Doanh Nghiệp Mới Nhất
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Đã bao gồm thiết bị Gateway công nghiệp chịu tải cao và địa chỉ IP Tĩnh
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {cardItems.map((item) => (
            <FptProductCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* 4 ENTERPRISE ADVANTAGES */}
      <section className="bg-white border-y border-slate-200/80 py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#004a9c] bg-blue-50 px-3 py-1 rounded-full">
              Chuẩn doanh nghiệp
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-[#101828] mt-2">
              Tại Sao Hàng Trăm Ngàn Doanh Nghiệp Tin Dùng FPT?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/70">
              <div className="size-10 rounded-xl bg-blue-100 text-[#004a9c] flex items-center justify-center mb-3">
                <Network className="size-5" />
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 mb-1">
                Băng Thông Quốc Tế Lớn
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tuyến cáp quang biển riêng biệt, cam kết tốc độ quốc tế tối thiểu, hạn chế tối đa ảnh hưởng khi đứt cáp biển.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/70">
              <div className="size-10 rounded-xl bg-orange-100 text-[#f57020] flex items-center justify-center mb-3">
                <Server className="size-5" />
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 mb-1">
                Miễn Phí 01 IP Tĩnh Chuẩn
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Định danh cố định giúp vận hành máy chủ nội bộ, quản trị camera, truy cập VPN từ xa an toàn và bảo mật cao.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/70">
              <div className="size-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
                <Shield className="size-5" />
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 mb-1">
                Router Chịu Tải Chuyên Nghiệp
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trang bị thiết bị cân bằng tải MikroTik / DrayTek hoặc Wi-Fi 6 doanh nghiệp chịu tải liên tục đến 100+ người.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200/70">
              <div className="size-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
                <FileText className="size-5" />
              </div>
              <h3 className="font-extrabold text-sm text-slate-900 mb-1">
                Hóa Đơn VAT Điện Tử
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hợp đồng pháp nhân rõ ràng, phát hành hóa đơn điện tử tự động hàng tháng đầy đủ cho doanh nghiệp hạch toán.
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
              Câu Hỏi Thường Gặp Của Khách Hàng Doanh Nghiệp
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
