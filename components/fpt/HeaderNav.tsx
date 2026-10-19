"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, Sparkles } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

export default function HeaderNav() {
  const { openRegisterModal } = useRegister();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const menuItems = [
    {
      id: "san-pham",
      title: "Sản phẩm dịch vụ",
      hasDropdown: true,
      subItems: [
        { name: "Internet cá nhân & gia đình", href: "/goi-cuoc/internet" },
        { name: "Combo Internet + FPT Play", href: "/goi-cuoc/combo" },
        { name: "Gói F-Game tối ưu Ping", href: "/goi-cuoc/internet#f-game" },
        { name: "Internet Doanh nghiệp IP Tĩnh", href: "/goi-cuoc/internet#doanh-nghiep" },
        { name: "FPT Camera an ninh Cloud", href: "/#camera" },
      ],
    },
    {
      id: "tin-tuc",
      title: "Tin tức",
      hasDropdown: true,
      subItems: [
        { name: "Khuyến mại mới nhất", href: "/tin-tuc" },
        { name: "Thể thao & Ngoại Hạng Anh", href: "/tin-tuc" },
        { name: "Công nghệ số & Đời sống", href: "/tin-tuc" },
      ],
    },
    {
      id: "hoi-vien",
      title: "Đặc quyền hội viên",
      hasDropdown: false,
      href: "/#dac-quyen",
    },
    {
      id: "thanh-toan",
      title: "Thanh toán & hỗ trợ",
      hasDropdown: false,
      href: "/lien-he",
    },
    {
      id: "ve-fpt",
      title: "Về FPT Telecom",
      hasDropdown: false,
      href: "/lien-he",
    },
  ];

  return (
    <header className="sticky top-0 right-0 left-0 z-40 bg-white border-b border-gray-200 shadow-xs">
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
        <nav className="hidden lg:flex items-center gap-1 xl:gap-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.id)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              {item.hasDropdown ? (
                <button
                  className="flex items-center gap-1 px-3 py-2 text-sm xl:text-base font-semibold text-slate-800 hover:text-[#f57020] transition-colors cursor-pointer"
                >
                  <span>{item.title}</span>
                  <ChevronDown
                    className={`size-4 text-slate-500 transition-transform duration-200 ${
                      activeMenu === item.id ? "rotate-180 text-[#f57020]" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href || "/"}
                  className="px-3 py-2 text-sm xl:text-base font-semibold text-slate-800 hover:text-[#f57020] transition-colors block"
                >
                  {item.title}
                </Link>
              )}

              {/* DROPDOWN FLYOUT */}
              {item.hasDropdown && activeMenu === item.id && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-1">
                  {item.subItems?.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-3.5 py-2 text-xs xl:text-sm font-medium text-slate-700 hover:text-[#004a9c] hover:bg-blue-50/70 rounded-lg transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
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
        <div className="lg:hidden border-t border-gray-200 bg-white p-4 space-y-3 animate-in fade-in">
          {menuItems.map((item) => (
            <div key={item.id} className="border-b border-slate-100 pb-2">
              <span className="font-bold text-sm text-slate-900 block mb-1">
                {item.title}
              </span>
              {item.subItems?.map((sub) => (
                <Link
                  key={sub.name}
                  href={sub.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 pl-3 text-xs text-slate-600 hover:text-[#004a9c]"
                >
                  • {sub.name}
                </Link>
              ))}
            </div>
          ))}

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
    </header>
  );
}
