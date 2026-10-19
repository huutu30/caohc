import * as React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* TOP CTA STRIP */}
        <div className="rounded-3xl bg-gradient-to-r from-brand-blue to-blue-900 p-8 sm:p-10 mb-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 border border-blue-700/50">
          <div className="relative z-10 text-center md:text-left">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-semibold mb-3 border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 mr-1.5" />
              Tư vấn & Hòa mạng miễn phí 100%
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Sẵn sàng trải nghiệm Internet Cáp Quang Siêu Tốc?
            </h3>
            <p className="text-blue-100 text-sm sm:text-base mt-2 max-w-xl">
              Đăng ký ngay hôm nay để nhận trọn bộ Modem WiFi 6 chuẩn AX và ưu đãi tặng đến 2 tháng cước sử dụng!
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              href="/dang-ky"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-bold text-sm sm:text-base transition-all shadow-cta hover:scale-105"
            >
              Đăng ký hòa mạng ngay
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <a
              href="tel:19006600"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base transition-all border border-white/20 backdrop-blur-sm"
            >
              <Phone className="w-4 h-4 mr-2 text-amber-400" />
              1900 6600
            </a>
          </div>
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* 4 COLUMNS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* CỘT 1: THÔNG TIN CÔNG TY FPT TELECOM */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="flex items-center">
                <span className="text-3xl font-black italic tracking-tighter text-[#0066B2]">F</span>
                <span className="text-3xl font-black italic tracking-tighter text-[#FF6B00]">P</span>
                <span className="text-3xl font-black italic tracking-tighter text-[#00A859]">T</span>
              </div>
              <div className="border-l border-slate-700 pl-2">
                <span className="text-xl font-black text-white uppercase tracking-tight block">
                  Telecom
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              FPT Telecom — Công ty Cổ phần Viễn thông FPT, đơn vị tiên phong cung cấp hạ tầng Internet băng thông rộng và dịch vụ truyền hình thông minh hàng đầu tại Việt Nam.
            </p>
            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 text-brand-orange mr-2 shrink-0 mt-0.5" />
                <span>Tòa nhà FPT Tower, số 10 Phạm Văn Bạch, Cầu Giấy, Hà Nội</span>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 text-brand-orange mr-2 shrink-0" />
                <span>hotrokhachhang@fpt.com</span>
              </p>
              <p className="flex items-center">
                <Clock className="w-4 h-4 text-brand-orange mr-2 shrink-0" />
                <span>08:00 - 21:00 (Tất cả các ngày trong tuần)</span>
              </p>
            </div>
          </div>

          {/* CỘT 2: DỊCH VỤ & GÓI CƯỚC */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider border-l-2 border-brand-orange pl-3">
              Dịch vụ & Gói cước
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/goi-cuoc/internet"
                  className="hover:text-brand-orange transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Internet Cáp quang Cá nhân
                </Link>
              </li>
              <li>
                <Link
                  href="/goi-cuoc/internet"
                  className="hover:text-brand-orange transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Internet Hộ gia đình Sky 300
                </Link>
              </li>
              <li>
                <Link
                  href="/goi-cuoc/internet"
                  className="hover:text-brand-orange transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Gói F-Game tối ưu Ping leo rank
                </Link>
              </li>
              <li>
                <Link
                  href="/goi-cuoc/internet"
                  className="hover:text-brand-orange transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Internet Doanh nghiệp IP Tĩnh
                </Link>
              </li>
              <li>
                <Link
                  href="/goi-cuoc/combo"
                  className="hover:text-brand-orange transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Combo Internet + Truyền hình 4K
                </Link>
              </li>
            </ul>
          </div>

          {/* CỘT 3: HỖ TRỢ & CHÍNH SÁCH */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider border-l-2 border-brand-orange pl-3">
              Hỗ trợ khách hàng
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/dang-ky"
                  className="hover:text-brand-orange transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Quy trình đăng ký hòa mạng
                </Link>
              </li>
              <li>
                <Link
                  href="/lien-he"
                  className="hover:text-brand-orange transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Tra cứu điểm giao dịch gần nhất
                </Link>
              </li>
              <li>
                <Link
                  href="/#cau-hoi-thuong-gap"
                  className="hover:text-brand-orange transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Câu hỏi thường gặp (FAQs)
                </Link>
              </li>
              <li>
                <Link
                  href="/tin-tuc"
                  className="hover:text-brand-orange transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Chính sách bảo mật thông tin
                </Link>
              </li>
              <li>
                <Link
                  href="/lien-he"
                  className="hover:text-brand-orange transition-colors flex items-center"
                >
                  <ArrowRight className="w-3.5 h-3.5 mr-2 text-slate-500" />
                  Điều khoản sử dụng dịch vụ
                </Link>
              </li>
            </ul>
          </div>

          {/* CỘT 4: HOTLINE & KẾT NỐI */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider border-l-2 border-brand-orange pl-3">
              Tổng đài tư vấn
            </h4>
            <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700/60">
              <p className="text-xs text-slate-400">Đăng ký hòa mạng mới 24/7:</p>
              <a
                href="tel:19006600"
                className="text-2xl font-black text-amber-400 hover:text-amber-300 block mt-1 tracking-wide"
              >
                1900 6600
              </a>
              <p className="text-xs text-slate-400 mt-2">Đường dây nóng tiếp nhận:</p>
              <a
                href="tel:0902184284"
                className="text-lg font-bold text-white hover:text-brand-orange block"
              >
                0902.184.284
              </a>
            </div>

            <div className="pt-2">
              <p className="text-xs text-slate-400 mb-3">Kết nối với FPT Telecom:</p>
              <div className="flex items-center space-x-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-xl bg-slate-800 hover:bg-red-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://zalo.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-xl bg-slate-800 hover:bg-blue-500 flex items-center justify-center text-slate-300 hover:text-white transition-colors font-bold text-xs"
                  aria-label="Zalo"
                >
                  Zalo
                </a>
                <a
                  href="mailto:hotrokhachhang@fpt.com"
                  className="h-9 w-9 rounded-xl bg-slate-800 hover:bg-brand-orange flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM: DISCLAIMER & COPYRIGHT */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className="text-center md:text-left leading-relaxed max-w-3xl">
            <span className="font-semibold text-slate-300">Tuyên bố miễn trừ trách nhiệm:</span>{" "}
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
