"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, Phone, AlertCircle } from "lucide-react";

const YoutubeIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-1.125 0-2.511.236-2.511 1.41v1.56h3.804l-.318 3.667h-3.485v7.98H9.101z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#4b5563] text-sm border-t border-slate-200 mt-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* TOP ROW: LOGO, SOCIAL, HOTLINE */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 sm:py-8 border-b border-slate-200 gap-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="block">
              <Image
                src="/images/logo-ftel.svg"
                alt="FPT Telecom Logo"
                width={150}
                height={38}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          <div className="flex items-center flex-wrap gap-6 sm:gap-8">
            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold text-slate-500 hidden md:inline">Kết nối:</span>
              <a
                href="#"
                className="text-[#0056D2] font-black text-lg hover:scale-110 transition-transform"
                aria-label="Hi FPT"
              >
                Hi
              </a>
              <a
                href="https://www.youtube.com/@fpttelecom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF0000] hover:scale-110 transition-transform"
                aria-label="YouTube"
              >
                <YoutubeIcon size={22} />
              </a>
              <a
                href="https://www.instagram.com/fpttelecom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E1306C] hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="#"
                className="text-[#0068FF] font-bold text-sm hover:scale-110 transition-transform"
                aria-label="Zalo"
              >
                Zalo
              </a>
              <a
                href="https://www.facebook.com/fpttelecom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
            </div>

            {/* HOTLINE BLOCK */}
            <div className="flex items-center gap-2 border-l border-slate-200 pl-4 sm:pl-6">
              <span className="text-xs text-slate-500 font-medium">Hotline đăng ký:</span>
              <a
                href="tel:0775780962"
                className="text-[#f57020] font-black text-lg tracking-tight hover:underline flex items-center gap-1.5"
              >
                <Phone className="size-4 text-[#f57020]" />
                <span>0775 780 962</span>
              </a>
            </div>
          </div>
        </div>

        {/* MAIN 4-COLUMN SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 py-10">
          {/* COLUMN 1: COMPANY INFO (5 COLS) */}
          <div className="lg:col-span-5 space-y-3 text-xs leading-relaxed text-slate-600 pr-0 lg:pr-4">
            <p className="font-bold text-sm text-[#f57020]">
              Kênh Đăng Ký Dịch Vụ FPT Telecom
            </p>
            <p className="text-[13px] text-slate-700 leading-normal">
              Website là cổng thông tin trực tuyến tiếp nhận đăng ký hòa mạng mới các dịch vụ viễn thông của FPT Telecom trên toàn quốc.
            </p>
            <p className="text-[11.5px] text-slate-500 italic leading-normal">
              * Lưu ý: Đây là website giới thiệu dịch vụ và tiếp nhận đăng ký đường truyền trực tuyến của FPT Telecom.
            </p>
            <p className="text-slate-500">
              Giấy chứng nhận ĐKDN số 0101778163 do Sở Kế hoạch Đầu tư TP. Hà Nội cấp ngày 28/07/2005.
            </p>
            <p className="text-slate-500">
              Giấy phép cung cấp dịch vụ viễn thông số 255/GP-CVT do Cục Viễn thông cấp ngày 07/11/2022.
            </p>

            <p className="font-bold text-slate-900 text-[13px] pt-1">
              Công ty Cổ phần Viễn thông FPT
            </p>

            <div className="space-y-2 text-slate-600 pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="size-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Tòa nhà FPT Tower, số 10 Phạm Văn Bạch, Cầu Giấy, TP. Hà Nội</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-slate-400 shrink-0" />
                <a href="mailto:lienhe@fpt.vn" className="hover:text-[#f57020]">
                  lienhe@fpt.vn
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-slate-400 shrink-0" />
                <a href="tel:0775780962" className="hover:text-[#f57020] font-semibold text-slate-800">
                  0775 780 962
                </a>
              </div>
            </div>

            <p className="text-slate-500 pt-1">Người đại diện: Ông Hoàng Việt Anh</p>

            {/* PAYMENT WARNING BOX */}
            <div className="bg-[#f8fafc] border border-slate-200 rounded-xl p-3.5 my-3 space-y-1.5">
              <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs">
                <AlertCircle className="size-4 text-[#f57020] shrink-0" />
                <span>Thông tin thanh toán cước FPT Telecom</span>
              </div>
              <p className="text-[11.5px] text-slate-600 leading-normal">
                Khi thanh toán sản phẩm/dịch vụ, Quý khách thực hiện qua ứng dụng Hi FPT hoặc mã QR Code chính thức (Đơn vị thụ hưởng: <strong>FPT Telecom</strong> hoặc <strong>Công ty Cổ phần Viễn thông FPT</strong>).
              </p>
              <p className="text-[11.5px] text-[#f57020] font-semibold">
                Quý khách vui lòng không chuyển tiền vào số tài khoản cá nhân.
              </p>
            </div>

            {/* BỘ CÔNG THƯƠNG SEAL */}
            <div className="pt-2">
              <Image
                src="/images/bct.webp"
                alt="Đã thông báo Bộ Công Thương"
                width={140}
                height={52}
                className="h-12 w-auto object-contain"
              />
            </div>
          </div>

          {/* COLUMN 2: SẢN PHẨM DỊCH VỤ (LINK TRANG CON) (3 COLS) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">Sản phẩm & Dịch vụ</h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/internet/ca-nhan" className="hover:text-[#f57020] transition-colors block">
                  Internet Cá Nhân
                </Link>
              </li>
              <li>
                <Link href="/internet/gia-dinh" className="hover:text-[#f57020] transition-colors block">
                  Internet Gia Đình (Mesh Wi-Fi)
                </Link>
              </li>
              <li>
                <Link href="/internet/game-thu" className="hover:text-[#f57020] transition-colors block">
                  Internet Game Thủ (Ultra Fast)
                </Link>
              </li>
              <li>
                <Link href="/internet-wifi-7-xgspon" className="hover:text-[#f57020] transition-colors block font-semibold text-[#004a9c]">
                  Wi-Fi 7 & XGS-PON 10Gbps
                </Link>
              </li>
              <li>
                <Link href="/internet/doanh-nghiep" className="hover:text-[#f57020] transition-colors block">
                  Internet Doanh Nghiệp (IP Tĩnh)
                </Link>
              </li>
              <li>
                <Link href="/ngoai-hang-anh" className="hover:text-[#f57020] transition-colors block font-semibold text-[#f57020]">
                  Combo Ngoại Hạng Anh & FPT Play
                </Link>
              </li>
              <li>
                <Link href="/camera" className="hover:text-[#f57020] transition-colors block">
                  FPT Camera AI An Ninh Đám Mây
                </Link>
              </li>
              <li>
                <Link href="/thiet-bi-thong-minh/access-point" className="hover:text-[#f57020] transition-colors block">
                  Thiết bị Access Point Wi-Fi 6
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: VỀ FPT TELECOM & TIN TỨC (2 COLS) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">Về FPT Telecom</h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/lien-he" className="hover:text-[#f57020] transition-colors block">
                  Giới thiệu chung
                </Link>
              </li>
              <li>
                <Link href="/tin-tuc" className="hover:text-[#f57020] transition-colors block">
                  Tin tức & Khuyến mãi
                </Link>
              </li>
              <li>
                <Link href="/dang-ky" className="hover:text-[#f57020] transition-colors block">
                  Đăng ký hòa mạng mới
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="hover:text-[#f57020] transition-colors block">
                  Khách hàng & Đối tác
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-[#f57020] transition-colors block">
                  Sơ đồ trang web
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: CHÍNH SÁCH & QUY ĐỊNH (2 COLS) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm">Chính sách & Quy định</h4>
            <ul className="space-y-2.5 text-xs text-slate-600">
              <li>
                <Link href="/lien-he" className="hover:text-[#f57020] transition-colors block">
                  Chính sách thanh toán
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="hover:text-[#f57020] transition-colors block">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="hover:text-[#f57020] transition-colors block">
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link href="/#cau-hoi-thuong-gap" className="hover:text-[#f57020] transition-colors block">
                  Câu hỏi thường gặp (FAQs)
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="hover:text-[#f57020] transition-colors block">
                  Liên hệ tiếp nhận dịch vụ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: MANDATORY GOOGLE ADS DISCLAIMER & COPYRIGHT */}
        <div className="border-t border-slate-200 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center md:text-left leading-relaxed max-w-3xl">
            <strong className="text-slate-700">Tuyên bố miễn trừ trách nhiệm:</strong>{" "}
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
