"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Wifi,
  Tv,
  Camera,
  Flame,
  Zap,
  Shield,
  Smartphone,
  PhoneCall
} from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

interface MegaSubItem {
  name: string;
  href: string;
  desc?: string;
  badge?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface MegaColumn {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: MegaSubItem[];
}

export default function HeaderNav() {
  const { openRegisterModal } = useRegister();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // MEGA MENU STRUCTURE MATCHING FPT.VN SCREENSHOT
  const megaColumns: MegaColumn[] = [
    {
      title: "Internet - Wifi",
      icon: Wifi,
      items: [
        {
          name: "Internet gia đình",
          href: "/internet/gia-dinh",
          desc: "Kèm Mesh Wi-Fi 6 phủ sóng mọi góc nhà, căn hộ rộng",
          icon: Wifi,
        },
        {
          name: "Internet cá nhân",
          href: "/internet/ca-nhan",
          desc: "Modem Wi-Fi 6 tốc độ cao, chi phí tiết kiệm nhất",
          icon: Zap,
        },
        {
          name: "Internet game thủ",
          href: "/internet/game-thu",
          desc: "Tích hợp công nghệ Ultra Fast độc quyền giảm Ping",
          icon: Flame,
        },
        {
          name: "Internet Wi-Fi 7",
          href: "/internet/wifi-7",
          desc: "Đột phá chuẩn Wi-Fi 7 thế hệ mới đến 10 Gbps",
          badge: "Mới",
          icon: Sparkles,
        },
        {
          name: "Internet doanh nghiệp",
          href: "/internet/doanh-nghiep",
          desc: "Băng thông quốc tế cam kết lớn, miễn phí IP Tĩnh",
          icon: Shield,
        },
        {
          name: "Wifi Mesh",
          href: "/thiet-bi/wifi-mesh",
          desc: "Thiết bị mở rộng vùng phủ sóng không góc chết",
          icon: Smartphone,
        },
      ],
    },
    {
      title: "Truyền hình & Giải trí",
      icon: Tv,
      items: [
        {
          name: "Xem Ngoại Hạng Anh",
          href: "/ngoai-hang-anh",
          desc: "Bản quyền trọn vẹn 380 trận Ngoại Hạng Anh & Cúp C1",
          badge: "Nổi bật",
          icon: Flame,
        },
      ],
    },
    {
      title: "Thiết bị & An ninh",
      icon: Camera,
      items: [
        {
          name: "FPT Camera Cloud",
          href: "/camera",
          desc: "Camera an ninh đám mây nhận diện AI, bảo mật tuyệt đối",
          badge: "AI Cloud",
          icon: Camera,
        },
        {
          name: "Thiết bị Access Point",
          href: "/thiet-bi-thong-minh/access-point",
          desc: "Mở rộng vùng phủ sóng Wi-Fi 6 AX3000 liền mạch không góc chết",
          icon: Wifi,
        },
      ],
    },
  ];

  const newsSubItems = [
    { name: "Khuyến mại mới nhất", href: "/tin-tuc" },
    { name: "Thể thao & Ngoại Hạng Anh", href: "/tin-tuc" },
    { name: "Công nghệ số & Đời sống", href: "/tin-tuc" },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-xs">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-8 py-3.5">
        {/* LOGO FPT TELECOM */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/logo-ftel.svg"
            alt="FPT Telecom"
            width={109}
            height={36}
            className="h-9 w-auto shrink-0"
            priority
          />
        </Link>

        {/* NAVIGATION MENU ITEMS */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* 1. SẢN PHẨM DỊCH VỤ - MEGA MENU */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("san-pham")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm xl:text-base font-bold text-slate-800 hover:text-[#f57020] transition-colors cursor-pointer">
              <span>Sản phẩm dịch vụ</span>
              <ChevronDown
                className={`size-4 text-slate-500 transition-transform duration-200 ${
                  activeMenu === "san-pham" ? "rotate-180 text-[#f57020]" : ""
                }`}
              />
            </button>

            {/* MEGA MENU FLYOUT */}
            {activeMenu === "san-pham" && (
              <div className="absolute top-full -left-20 xl:left-0 w-[840px] xl:w-[920px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 z-50 animate-in fade-in slide-in-from-top-2 grid grid-cols-3 gap-6">
                {megaColumns.map((col, idx) => (
                  <div key={idx} className="flex flex-col">
                    {/* Column Header */}
                    <div className="flex items-center gap-2 pb-3 mb-2 border-b border-slate-100">
                      <div className="size-7 rounded-lg bg-orange-50 text-[#f57020] flex items-center justify-center">
                        <col.icon className="size-4" />
                      </div>
                      <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                        {col.title}
                      </h4>
                    </div>

                    {/* Column Items */}
                    <div className="space-y-1">
                      {col.items.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setActiveMenu(null)}
                          className="group block p-2.5 rounded-xl hover:bg-slate-50 transition-all border border-transparent hover:border-slate-100"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-slate-800 group-hover:text-[#004a9c] transition-colors">
                              {item.name}
                            </span>
                            {item.badge && (
                              <span
                                className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase ${
                                  item.badge === "Nổi bật"
                                    ? "bg-red-500 text-white animate-pulse"
                                    : "bg-orange-100 text-[#f57020]"
                                }`}
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>
                          {item.desc && (
                            <p className="text-xs text-slate-500 mt-0.5 line-clamp-1 leading-snug">
                              {item.desc}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* BOTTOM HIGHLIGHT STRIP IN MEGA MENU */}
                <div className="col-span-3 bg-gradient-to-r from-blue-50 to-orange-50 rounded-xl p-3 px-4 flex items-center justify-between border border-blue-100/50 mt-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <Sparkles className="size-4 text-[#f57020]" />
                    <span>
                      Đăng ký hòa mạng online – Bàn giao thiết bị Wi-Fi 6 siêu tốc trong 24 giờ!
                    </span>
                  </div>
                  <a
                    href="tel:0902184284"
                    className="flex items-center gap-1.5 text-xs font-extrabold text-[#004a9c] hover:text-[#f57020] transition-colors"
                  >
                    <PhoneCall className="size-3.5" />
                    <span>0902.184.284</span>
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* 2. TIN TỨC */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMenu("tin-tuc")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-sm xl:text-base font-semibold text-slate-800 hover:text-[#f57020] transition-colors cursor-pointer">
              <span>Tin tức</span>
              <ChevronDown
                className={`size-4 text-slate-500 transition-transform duration-200 ${
                  activeMenu === "tin-tuc" ? "rotate-180 text-[#f57020]" : ""
                }`}
              />
            </button>

            {activeMenu === "tin-tuc" && (
              <div className="absolute top-full left-0 w-60 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-1">
                {newsSubItems.map((sub) => (
                  <Link
                    key={sub.name}
                    href={sub.href}
                    onClick={() => setActiveMenu(null)}
                    className="block px-3 py-2 text-xs xl:text-sm font-medium text-slate-700 hover:text-[#004a9c] hover:bg-blue-50/70 rounded-lg transition-colors"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* 3. THANH TOÁN & HỖ TRỢ */}
          <Link
            href="/lien-he"
            className="px-3 py-2 text-sm xl:text-base font-semibold text-slate-800 hover:text-[#f57020] transition-colors block"
          >
            Thanh toán & hỗ trợ
          </Link>
        </nav>

        {/* RIGHT: SEARCH & ORANGE CTA BUTTON "ĐĂNG KÝ ONLINE" */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => openRegisterModal()}
            className="hidden sm:flex items-center gap-2 bg-[#f57020] hover:bg-[#e05e10] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
          >
            <Sparkles className="size-4 text-amber-200" />
            <span>Đăng ký online</span>
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white p-4 space-y-4 max-h-[85vh] overflow-y-auto animate-in fade-in">
          {/* CATEGORIES ACCORDION ON MOBILE */}
          <div className="space-y-4">
            {megaColumns.map((col, idx) => (
              <div key={idx} className="border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2 mb-2 text-slate-900 font-black text-sm uppercase">
                  <col.icon className="size-4 text-[#f57020]" />
                  <span>{col.title}</span>
                </div>
                <div className="pl-3 space-y-2">
                  {col.items.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between py-1 text-xs font-semibold text-slate-700 hover:text-[#004a9c]"
                    >
                      <span>• {sub.name}</span>
                      {sub.badge && (
                        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-orange-100 text-[#f57020]">
                          {sub.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div className="border-b border-slate-100 pb-2">
              <Link
                href="/tin-tuc"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-sm text-slate-900 block py-1"
              >
                Tin tức & Khuyến mại
              </Link>
            </div>
            <div className="border-b border-slate-100 pb-2">
              <Link
                href="/lien-he"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-sm text-slate-900 block py-1"
              >
                Thanh toán & Hướng dẫn
              </Link>
            </div>
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openRegisterModal();
            }}
            className="w-full bg-[#f57020] text-white py-3 rounded-full font-bold text-sm text-center shadow-md flex items-center justify-center gap-2 mt-4 cursor-pointer"
          >
            <Sparkles className="size-4" />
            <span>Đăng ký online</span>
          </button>
        </div>
      )}
    </div>
  );
}

