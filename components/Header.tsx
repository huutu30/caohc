"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  User,
  Briefcase,
  Menu,
  X,
  Wifi,
  Tv,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [packageDropdownOpen, setPackageDropdownOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
    setPackageDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Trang chủ", href: "/" },
    {
      name: "Gói cước",
      href: "/goi-cuoc/internet",
      hasDropdown: true,
      subItems: [
        {
          name: "Internet Cáp Quang",
          desc: "Tốc độ cao từ 150Mbps - 1Gbps",
          href: "/goi-cuoc/internet",
          icon: Wifi,
        },
        {
          name: "Combo Internet + TV",
          desc: "Trọn vẹn 170+ kênh & Ngoại Hạng Anh",
          href: "/goi-cuoc/combo",
          icon: Tv,
        },
      ],
    },
    { name: "Khuyến mãi", href: "/#khuyen-mai" },
    { name: "Tin tức", href: "/tin-tuc" },
    { name: "Liên hệ", href: "/lien-he" },
  ];

  return (
    <header className="w-full relative z-40">
      {/* 1. TOP BAR */}
      <div className="bg-brand-blue-dark text-slate-200 text-xs py-2 px-4 border-b border-brand-blue/30 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
              Tổng đài tư vấn toàn quốc:
              <a
                href="tel:19006600"
                className="font-bold text-amber-400 ml-1.5 hover:underline tracking-wide"
              >
                1900 6600
              </a>
              <span className="mx-2 text-slate-500">|</span>
              Hotline đăng ký nhanh:
              <a
                href="tel:0902184284"
                className="font-bold text-white ml-1.5 hover:text-amber-400"
              >
                0902.184.284
              </a>
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <Link
              href="/dang-ky"
              className="flex items-center hover:text-white transition-colors"
            >
              <User className="h-3.5 w-3.5 mr-1" />
              Đăng nhập / Tra cứu cước
            </Link>
            <span className="text-slate-600">|</span>
            <Link
              href="/tin-tuc"
              className="flex items-center hover:text-white transition-colors"
            >
              <Briefcase className="h-3.5 w-3.5 mr-1" />
              Tuyển dụng FPT Telecom
            </Link>
          </div>
        </div>
      </div>

      {/* 2. STICKY HEADER */}
      <div
        className={cn(
          "sticky top-0 left-0 right-0 transition-all duration-300 bg-white/95 backdrop-blur-md",
          isScrolled
            ? "shadow-md py-2.5 border-b border-slate-200/80"
            : "py-3.5 border-b border-slate-100"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* LOGO FPT TELECOM */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="flex items-center">
              <span className="text-3xl font-black italic tracking-tighter text-[#0066B2]">F</span>
              <span className="text-3xl font-black italic tracking-tighter text-[#FF6B00]">P</span>
              <span className="text-3xl font-black italic tracking-tighter text-[#00A859]">T</span>
            </div>
            <div className="flex flex-col border-l border-slate-300 pl-2">
              <span className="text-lg font-black tracking-tight text-brand-blue uppercase leading-tight">
                Telecom
              </span>
              <span className="text-[10px] text-slate-500 font-semibold tracking-wider -mt-0.5 hidden sm:block">
                Mọi kết nối, một tương lai
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setPackageDropdownOpen(true)}
                    onMouseLeave={() => setPackageDropdownOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                        pathname.startsWith("/goi-cuoc")
                          ? "text-brand-blue bg-blue-50/70"
                          : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
                      )}
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "ml-1 h-4 w-4 transition-transform duration-200",
                          packageDropdownOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* DROPDOWN MENU */}
                    {packageDropdownOpen && (
                      <div className="absolute top-full left-0 w-72 rounded-2xl bg-white shadow-2xl border border-slate-100 p-2 animate-in fade-in slide-in-from-top-2 duration-150">
                        {link.subItems?.map((sub) => {
                          const Icon = sub.icon;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="flex items-start p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                            >
                              <div className="p-2 rounded-lg bg-blue-50 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors mr-3 shrink-0">
                                <Icon className="h-5 w-5" />
                              </div>
                              <div>
                                <p className="text-sm font-bold text-slate-900 group-hover:text-brand-blue">
                                  {sub.name}
                                </p>
                                <p className="text-xs text-slate-500 mt-0.5">
                                  {sub.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-semibold transition-colors",
                    isActive
                      ? "text-brand-blue bg-blue-50/70 font-bold"
                      : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA & PHONE BUTTON */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="tel:19006600"
              className="hidden xl:flex items-center space-x-2 text-slate-700 hover:text-brand-blue px-3 py-2 text-sm font-semibold"
            >
              <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue">
                <Phone className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p className="text-[11px] text-slate-500 leading-none">Tư vấn miễn phí</p>
                <p className="text-sm font-bold text-brand-blue leading-tight">1900 6600</p>
              </div>
            </a>

            <Link href="/dang-ky">
              <Button
                variant="default"
                size="default"
                className="group relative overflow-hidden font-bold"
              >
                <Sparkles className="h-4 w-4 mr-1.5 animate-bounce" />
                Đăng ký lắp đặt
              </Button>
            </Link>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Link href="/dang-ky" className="sm:hidden">
              <Button size="sm" variant="default" className="text-xs px-3">
                Đăng ký
              </Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-brand-blue" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] sm:top-[70px] bottom-0 bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white border-b border-slate-200 p-5 shadow-2xl animate-in slide-in-from-top-4 duration-200 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className={cn(
                  "px-4 py-3 rounded-xl font-bold text-base transition-colors",
                  pathname === "/" ? "bg-blue-50 text-brand-blue" : "text-slate-800"
                )}
              >
                Trang chủ
              </Link>

              <div className="rounded-xl bg-slate-50 p-3 space-y-2">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider px-2">
                  Danh mục gói cước
                </p>
                <Link
                  href="/goi-cuoc/internet"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-800 hover:bg-white font-medium"
                >
                  <Wifi className="h-5 w-5 text-brand-blue" />
                  <span>Internet Cáp Quang</span>
                </Link>
                <Link
                  href="/goi-cuoc/combo"
                  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-800 hover:bg-white font-medium"
                >
                  <Tv className="h-5 w-5 text-brand-orange" />
                  <span>Combo Internet + Truyền hình</span>
                </Link>
              </div>

              <Link
                href="/#khuyen-mai"
                className="px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-slate-50"
              >
                Khuyến mãi mới nhất
              </Link>
              <Link
                href="/tin-tuc"
                className="px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-slate-50"
              >
                Tin tức & Công nghệ
              </Link>
              <Link
                href="/lien-he"
                className="px-4 py-3 rounded-xl font-semibold text-slate-800 hover:bg-slate-50"
              >
                Liên hệ & Điểm giao dịch
              </Link>

              <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
                <div className="flex items-center justify-between bg-blue-50 p-3 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-5 w-5 text-brand-blue" />
                    <span className="text-sm font-semibold text-slate-700">
                      Hotline tư vấn:
                    </span>
                  </div>
                  <a
                    href="tel:19006600"
                    className="font-bold text-brand-blue text-base hover:underline"
                  >
                    1900 6600
                  </a>
                </div>

                <Link href="/dang-ky" className="w-full">
                  <Button variant="default" className="w-full py-3 font-bold text-base">
                    Đăng ký lắp đặt ngay
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
