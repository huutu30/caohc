"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

export default function Footer() {
  const { openRegisterModal } = useRegister();

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* TOP CTA BANNER STRIP */}
        <div className="rounded-3xl bg-gradient-to-r from-[#004a9c] to-[#002f6c] p-8 sm:p-10 mb-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-700/40">
          <div className="relative z-10 text-center md:text-left">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/15 text-amber-300 text-xs font-bold mb-3 border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
              Đăng Ký & Bàn Giao Thiết Bị Tận Nơi Trong 24H
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Sẵn Sàng Trải Nghiệm Mạng Cáp Quang Wi-Fi 6 Siêu Tốc?
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm mt-2 max-w-xl leading-relaxed">
              Nhận ngay trọn bộ Modem Wi-Fi 6 thế hệ mới chuẩn AX và ưu đãi tặng đến 2 tháng cước sử dụng khi hòa mạng trực tuyến.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={() => openRegisterModal()}
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#f57020] hover:bg-[#e05e10] text-white font-black text-sm transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              <span>Đăng ký hòa mạng ngay</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
            <a
              href="tel:0902184284"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all border border-white/20 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 mr-2 text-amber-400" />
              <span>0902.184.284</span>
            </a>
          </div>
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* 4 COLUMNS STRUCTURED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* CỘT 1: THÔNG TIN CÔNG TY FPT TELECOM */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <svg
                viewBox="0 0 160 40"
                className="h-8 w-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 8 L32 8 C36 8 38 10 37 14 L35 22 C34 26 31 28 27 28 L17 28 L14 36 L4 36 L10 8 Z"
                  fill="#0066B2"
                />
                <path
                  d="M48 8 L70 8 C77 8 82 12 80 18 C78 24 72 28 65 28 L55 28 L53 36 L43 36 L48 8 Z"
                  fill="#FF6B00"
                />
                <path
                  d="M90 8 L122 8 L120 16 L108 16 L104 36 L94 36 L98 16 L88 16 L90 8 Z"
                  fill="#00A859"
                />
                <text
                  x="15"
                  y="24"
                  fill="#fff"
                  fontSize="15"
                  fontWeight="900"
                  fontStyle="italic"
                  fontFamily="sans-serif"
                >
                  F
                </text>
                <text
                  x="54"
                  y="24"
                  fill="#fff"
                  fontSize="15"
                  fontWeight="900"
                  fontStyle="italic"
                  fontFamily="sans-serif"
                >
                  P
                </text>
                <text
                  x="100"
                  y="24"
                  fill="#fff"
                  fontSize="15"
                  fontWeight="900"
                  fontStyle="italic"
                  fontFamily="sans-serif"
                >
                  T
                </text>
              </svg>
              <div className="border-l border-slate-700 pl-2">
                <span className="text-lg font-black text-white uppercase tracking-tight block leading-tight">
                  Telecom
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Công ty Cổ phần Viễn thông FPT (FPT Telecom) — Đơn vị tiên phong cung cấp hạ tầng Internet băng rộng, truyền hình FPT Play và hệ sinh thái số hiện đại hàng đầu Việt Nam.
            </p>
            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 text-[#f57020] mr-2 shrink-0 mt-0.5" />
                <span>Tòa nhà FPT Tower, số 10 Phạm Văn Bạch, Cầu Giấy, Hà Nội</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 text-[#f57020] mr-2 shrink-0" />
                <span>lienhe@fpt.vn</span>
              </p>
              <p className="flex items-center">
                <Clock className="w-4 h-4 text-[#f57020] mr-2 shrink-0" />
                <span>Tiếp nhận đăng ký: 07:30 - 21:30 hàng ngày</span>
              </p>
            </div>
          </div>

          {/* CỘT 2: DỊCH VỤ CÁ NHÂN & GIA ĐÌNH */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#f57020] pl-3">
              Dịch vụ viễn thông
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link
                  href="/goi-cuoc/internet"
                  className="hover:text-[#f57020] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Internet Cáp quang Cá nhân Giga 150
                </Link>
              </li>
              <li>
                <Link
                  href="/goi-cuoc/internet"
                  className="hover:text-[#f57020] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Internet Siêu tốc Sky 1Gbps
                </Link>
              </li>
              <li>
                <Link
                  href="/goi-cuoc/internet"
                  className="hover:text-[#f57020] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Internet Meta 1Gbps Đối Xứng
                </Link>
              </li>
              <li>
                <Link
                  href="/goi-cuoc/combo"
                  className="hover:text-[#f57020] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Combo Internet + FPT Play Ngoại Hạng Anh
                </Link>
              </li>
              <li>
                <Link
                  href="/goi-cuoc/internet"
                  className="hover:text-[#f57020] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Internet Doanh nghiệp IP Tĩnh
                </Link>
              </li>
              <li>
                <Link
                  href="/camera"
                  className="hover:text-[#f57020] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  FPT Camera AI An Ninh Đám Mây
                </Link>
              </li>
            </ul>
          </div>

          {/* CỘT 3: THÔNG TIN & QUY TRÌNH */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#f57020] pl-3">
              Quy trình & Hướng dẫn
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => openRegisterModal()}
                  className="hover:text-[#f57020] transition-colors flex items-center text-left"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Quy trình hòa mạng trực tuyến
                </button>
              </li>
              <li>
                <Link
                  href="/#cau-hoi-thuong-gap"
                  className="hover:text-[#f57020] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Câu hỏi thường gặp (FAQs)
                </Link>
              </li>
              <li>
                <Link
                  href="/tin-tuc"
                  className="hover:text-[#f57020] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Tin tức & Khuyến mãi mới
                </Link>
              </li>
              <li>
                <Link
                  href="/lien-he"
                  className="hover:text-[#f57020] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Chính sách bảo mật thông tin
                </Link>
              </li>
              <li>
                <Link
                  href="/lien-he"
                  className="hover:text-[#f57020] transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Điều khoản sử dụng dịch vụ
                </Link>
              </li>
            </ul>
          </div>

          {/* CỘT 4: HOTLINE ĐĂNG KÝ & ỨNG DỤNG HI FPT */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider border-l-2 border-[#f57020] pl-3">
              Đường dây đăng ký thuê bao
            </h4>
            <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700/80">
              <p className="text-[11px] text-slate-400">Hotline đăng ký hòa mạng mới:</p>
              <a
                href="tel:0902184284"
                className="text-2xl font-black text-amber-400 hover:text-amber-300 block mt-1 tracking-wide"
              >
                0902.184.284
              </a>
              <p className="text-[11px] text-slate-400 mt-2">Thời gian tư vấn dịch vụ:</p>
              <p className="text-xs font-semibold text-slate-200">
                07:30 - 21:30 (Thứ 2 - Chủ Nhật)
              </p>
            </div>

            <div className="pt-2">
              <p className="text-xs text-slate-400 mb-2">Tải ứng dụng Hi FPT:</p>
              <div className="flex items-center space-x-2">
                <div className="relative h-9 w-28 bg-slate-800 rounded-lg p-1 border border-slate-700">
                  <Image
                    src="/images/badge_appstore.svg"
                    alt="Tải Hi FPT trên App Store"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative h-9 w-28 bg-slate-800 rounded-lg p-1 border border-slate-700">
                  <Image
                    src="/images/badge_googleplay.svg"
                    alt="Tải Hi FPT trên Google Play"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM: MANDATORY DISCLAIMER CHUẨN GOOGLE ADS & COPYRIGHT */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className="text-center md:text-left leading-relaxed max-w-3xl">
            <span className="font-bold text-amber-400">Tuyên bố miễn trừ trách nhiệm:</span>{" "}
            Chúng tôi là kênh thông tin và hỗ trợ đăng ký hòa mạng mới các dịch vụ viễn thông FPT. Chúng tôi không phải là tổng đài chăm sóc khách hàng, hỗ trợ kỹ thuật hay báo hỏng. Quý khách có nhu cầu báo hỏng/sửa chữa vui lòng liên hệ tổng đài chính thức qua ứng dụng Hi FPT.
          </p>
          <p className="shrink-0 text-slate-400 font-medium">
            © {new Date().getFullYear()} FPT Telecom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
