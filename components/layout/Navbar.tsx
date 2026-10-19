"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  MapPin,
  ChevronDown,
  Menu,
  X,
  Wifi,
  Tv,
  Camera,
  Home,
  Tag,
  Newspaper,
  ArrowRight,
  Sparkles,
  Search,
} from "lucide-react";
import { useRegion, PROVINCES, Province } from "@/context/RegionContext";
import { useRegister } from "@/context/RegisterContext";

export default function Navbar() {
  const pathname = usePathname();
  const { activeProvince, setActiveProvince, customerType, setCustomerType } =
    useRegion();
  const { openRegisterModal } = useRegister();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [provinceDropdownOpen, setProvinceDropdownOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const provinceRef = useRef<HTMLDivElement>(null);

  // Scroll listener for glassmorphism header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close province dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        provinceRef.current &&
        !provinceRef.current.contains(e.target as Node)
      ) {
        setProvinceDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const navMenuItems = [
    {
      id: "internet",
      title: "Internet FPT",
      href: "/goi-cuoc/internet",
      icon: Wifi,
      hasMega: true,
      items: [
        {
          name: "Gói cước Cá nhân & Gia đình",
          desc: "Tốc độ 150Mbps - 1Gbps, công nghệ WiFi 6",
          href: "/goi-cuoc/internet",
          badge: "WiFi 6",
        },
        {
          name: "Gói F-Game Siêu Tốc",
          desc: "Tối ưu hóa Ping game thủ, công nghệ Ultra Fast",
          href: "/goi-cuoc/internet#f-game",
          badge: "Gaming",
        },
        {
          name: "Gói cước Doanh nghiệp",
          desc: "Băng thông quốc tế lớn, miễn phí IP Tĩnh",
          href: "/goi-cuoc/internet#doanh-nghiep",
          badge: "IP Tĩnh",
        },
      ],
    },
    {
      id: "fptplay",
      title: "FPT Play",
      href: "/goi-cuoc/combo",
      icon: Tv,
      hasMega: true,
      items: [
        {
          name: "Combo Internet + Truyền hình",
          desc: "Gần 170 kênh đặc sắc, trang bị TV Box 4K",
          href: "/goi-cuoc/combo",
          badge: "Tiết kiệm 30%",
        },
        {
          name: "Gói Thể Thao V.VIP",
          desc: "Trọn vẹn Ngoại Hạng Anh & Cúp C1 UEFA Champions League",
          href: "/goi-cuoc/combo#the-thao",
          badge: "Bản quyền NHA",
        },
      ],
    },
    {
      id: "camera",
      title: "FPT Camera",
      href: "/#camera",
      icon: Camera,
      hasMega: false,
    },
    {
      id: "smarthome",
      title: "Smart Home",
      href: "/#smart-home",
      icon: Home,
      hasMega: false,
    },
    {
      id: "khuyenmai",
      title: "Khuyến mãi",
      href: "/#khuyen-mai",
      icon: Tag,
      hasMega: false,
    },
    {
      id: "tintuc",
      title: "Tin tức",
      href: "/tin-tuc",
      icon: Newspaper,
      hasMega: false,
    },
  ];

  return (
    <header className="w-full relative z-50">
      {/* 1. TOP BAR CHUẨN FPT.VN */}
      <div className="bg-[#002f6c] text-white text-xs border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-10 flex items-center justify-between">
          {/* LEFT: PHÂN ĐOÀN KHÁCH HÀNG */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            <button
              onClick={() => setCustomerType("personal")}
              className={`px-3 py-1 rounded-md font-medium transition-colors ${
                customerType === "personal"
                  ? "bg-[#004a9c] text-white font-bold shadow-sm"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Khách hàng cá nhân
            </button>
            <span className="text-blue-400/40">|</span>
            <button
              onClick={() => setCustomerType("business")}
              className={`px-3 py-1 rounded-md font-medium transition-colors ${
                customerType === "business"
                  ? "bg-[#004a9c] text-white font-bold shadow-sm"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Khách hàng doanh nghiệp
            </button>
          </div>

          {/* RIGHT: CHỌN TỈNH THÀNH & HOTLINE */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* PROVINCE SELECTOR DROPDOWN */}
            <div className="relative" ref={provinceRef}>
              <button
                onClick={() => setProvinceDropdownOpen(!provinceDropdownOpen)}
                className="flex items-center space-x-1 text-slate-200 hover:text-white font-medium py-1 px-2 rounded hover:bg-blue-900/50 transition-colors"
                title="Chọn khu vực áp dụng giá"
              >
                <MapPin className="h-3.5 w-3.5 text-amber-400" />
                <span className="font-semibold">{activeProvince.name}</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${
                    provinceDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {provinceDropdownOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-64 max-h-80 overflow-y-auto bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-1">
                  <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    Chọn tỉnh / thành phố của bạn
                  </div>
                  <div className="py-1">
                    {PROVINCES.map((p: Province) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          setActiveProvince(p);
                          setProvinceDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors flex items-center justify-between ${
                          activeProvince.id === p.id
                            ? "bg-blue-50 text-[#004a9c] font-bold"
                            : "hover:bg-slate-50 text-slate-700"
                        }`}
                      >
                        <span>{p.name}</span>
                        {activeProvince.id === p.id && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#004a9c]" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* HOTLINE TƯ VẤN (TUÂN THỦ GOOGLE ADS: SỐ LIÊN HỆ ĐĂNG KÝ) */}
            <div className="hidden md:flex items-center space-x-1.5 text-slate-200">
              <Phone className="h-3.5 w-3.5 text-amber-400" />
              <span>Đường dây đăng ký:</span>
              <a
                href="tel:0902184284"
                className="font-bold text-amber-400 hover:text-white ml-0.5 tracking-wide"
              >
                0902.184.284
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV BAR (STICKY WITH BACKDROP BLUR) */}
      <div
        className={`w-full bg-white transition-all duration-200 ${
          isScrolled
            ? "shadow-md py-2 border-b border-slate-200/90"
            : "py-3.5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* FPT TELECOM OFFICIAL LOGO */}
          <Link href="/" className="flex items-center space-x-3 group">
            {/* SVG 3 TRICOLOR LOGO FPT */}
            <div className="flex items-center h-10">
              <svg
                viewBox="0 0 160 40"
                className="h-9 w-auto"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* FPT Logo geometry shape */}
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
                {/* Slanted text inside shapes */}
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
            </div>
            <div className="hidden sm:flex flex-col border-l border-slate-300 pl-3">
              <span className="text-base font-black tracking-tight text-[#004a9c] uppercase leading-none">
                Telecom
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider mt-1">
                Kết Nối Đẳng Cấp
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU LINKS */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navMenuItems.map((item) => {
              const Icon = item.icon;
              const isItemActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              if (item.hasMega) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center px-3.5 py-2 rounded-lg text-sm font-bold transition-colors ${
                        isItemActive
                          ? "text-[#004a9c] bg-blue-50"
                          : "text-slate-700 hover:text-[#004a9c] hover:bg-slate-50"
                      }`}
                    >
                      <Icon className="h-4 w-4 mr-1.5 text-slate-500" />
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`h-3.5 w-3.5 ml-1 transition-transform duration-200 ${
                          activeDropdown === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </Link>

                    {/* DROPDOWN MENU */}
                    {activeDropdown === item.id && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2">
                        {item.items?.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block p-3 rounded-xl hover:bg-blue-50/60 transition-colors group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-slate-900 group-hover:text-[#004a9c]">
                                {sub.name}
                              </span>
                              {sub.badge && (
                                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-orange-100 text-[#f57020]">
                                  {sub.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                              {sub.desc}
                            </p>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`flex items-center px-3.5 py-2 rounded-lg text-sm font-bold transition-colors ${
                    isItemActive
                      ? "text-[#004a9c] bg-blue-50"
                      : "text-slate-700 hover:text-[#004a9c] hover:bg-slate-50"
                  }`}
                >
                  <Icon className="h-4 w-4 mr-1.5 text-slate-500" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>

          {/* RIGHT ACTIONS: SEARCH & ORANGE CTA BUTTON */}
          <div className="flex items-center space-x-3">
            {/* SEARCH TOGGLE */}
            <div className="relative hidden md:block">
              {isSearchOpen ? (
                <div className="flex items-center bg-slate-100 rounded-full px-3 py-1.5 border border-slate-300">
                  <Search className="h-4 w-4 text-slate-500 mr-2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm gói cước..."
                    className="bg-transparent text-xs text-slate-800 outline-none w-32 focus:w-44 transition-all"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="text-slate-400 hover:text-slate-700"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-slate-600 hover:text-[#004a9c] rounded-full hover:bg-slate-100 transition-colors"
                  title="Tìm kiếm"
                >
                  <Search className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* BUTTON "ĐĂNG KÝ ONLINE" CHUẨN FPT.VN (ORANGE PILL) */}
            <button
              onClick={() => openRegisterModal()}
              className="bg-[#f57020] hover:bg-[#e05e10] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center space-x-2 active:scale-95 group"
            >
              <Sparkles className="h-4 w-4 text-amber-200" />
              <span>Đăng ký online</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[88px] bg-slate-900/40 backdrop-blur-sm z-50 lg:hidden animate-in fade-in">
          <div className="bg-white w-full max-h-[85vh] overflow-y-auto p-5 shadow-2xl rounded-b-3xl border-b border-slate-200">
            {/* LOCATION SELECTOR IN MOBILE */}
            <div className="mb-4 p-3 bg-slate-50 rounded-2xl border border-slate-200/80">
              <div className="text-xs text-slate-500 font-bold mb-1 flex items-center">
                <MapPin className="h-3.5 w-3.5 text-amber-500 mr-1" />
                Khu vực hiện tại:
              </div>
              <select
                value={activeProvince.id}
                onChange={(e) => {
                  const found = PROVINCES.find((p) => p.id === e.target.value);
                  if (found) setActiveProvince(found);
                }}
                className="w-full bg-white border border-slate-300 text-sm font-bold text-slate-800 rounded-xl px-3 py-2 outline-none focus:border-[#004a9c]"
              >
                {PROVINCES.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* NAV LINKS */}
            <div className="space-y-1">
              {navMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="border-b border-slate-100 pb-2">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between p-3 rounded-xl font-bold text-slate-800 hover:bg-blue-50 hover:text-[#004a9c]"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-50 text-[#004a9c] rounded-lg">
                          <Icon className="h-4 w-4" />
                        </div>
                        <span>{item.title}</span>
                      </div>
                      <ChevronRightIcon className="h-4 w-4 text-slate-400" />
                    </Link>

                    {item.items && (
                      <div className="pl-12 pr-2 py-1 space-y-2">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block text-xs font-semibold text-slate-600 hover:text-[#004a9c] py-1"
                          >
                            • {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CALL TO ACTION BUTTONS IN MOBILE */}
            <div className="mt-6 pt-4 border-t border-slate-200 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openRegisterModal();
                }}
                className="w-full bg-[#f57020] text-white py-3.5 rounded-2xl font-black text-center shadow-md flex items-center justify-center space-x-2"
              >
                <Sparkles className="h-4 w-4" />
                <span>Đăng ký hòa mạng online</span>
              </button>
              <a
                href="tel:0902184284"
                className="w-full bg-slate-100 text-slate-800 py-3 rounded-2xl font-bold text-sm text-center flex items-center justify-center space-x-2 border border-slate-200"
              >
                <Phone className="h-4 w-4 text-emerald-600" />
                <span>Hotline: 0902.184.284</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}
