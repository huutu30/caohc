"use client";

import React from "react";
import Image from "next/image";
import { Check, Download, Upload, ShieldCheck } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

export default function EplComparisonMatrix() {
  const { openRegisterModal } = useRegister();

  const packages = [
    {
      id: "combo-giga-vvip",
      name: "Combo Giga - V.VIP",
      headerImg: "/images/epl/giga_vvip_header.png",
      subtitle: "Phù hợp cá nhân, sinh viên",
      priceNgoaiThanh: "220.000đ",
      priceNoiThanh: "Không áp dụng",
      isNoiThanhAvailable: false,
      dlSpeed: "300 Mbps",
      ulSpeed: "300 Mbps",
      platform: "Smart TV, Mobile, Web, App",
      eplDevices: "Xem đồng thời trên 2 thiết bị",
      internetDevices: "10 thiết bị",
      badge: null,
      isHot: false,
    },
    {
      id: "combo-sky-vvip",
      name: "Combo Sky - V.VIP",
      headerImg: "/images/epl/sky_vvip_header.png",
      subtitle: "Phù hợp hộ gia đình 3 - 5 người",
      priceNgoaiThanh: "239.000đ",
      priceNoiThanh: "269.000đ",
      isNoiThanhAvailable: true,
      dlSpeed: "1000 Mbps",
      ulSpeed: "300 Mbps",
      platform: "Smart TV, Mobile, Web, App",
      eplDevices: "Xem đồng thời trên 2 thiết bị",
      internetDevices: "15 thiết bị",
      badge: "Combo Tiết Kiệm Nhất",
      isHot: true,
    },
    {
      id: "combo-meta-vvip",
      name: "Combo Meta - V.VIP",
      headerImg: "/images/epl/meta_vvip_header.png",
      subtitle: "Phù hợp game thủ, quán cafe, nhà hàng",
      priceNgoaiThanh: "339.000đ",
      priceNoiThanh: "369.000đ",
      isNoiThanhAvailable: true,
      dlSpeed: "1000 Mbps",
      ulSpeed: "1000 Mbps",
      platform: "Smart TV, Mobile, Web, App",
      eplDevices: "Xem đồng thời trên 2 thiết bị",
      internetDevices: "25 thiết bị",
      badge: "1Gbps Đối Xứng",
      isHot: false,
    },
  ];

  return (
    <section className="w-full bg-[#03091e] py-12 sm:py-16 text-white relative overflow-hidden border-t border-white/10">
      {/* BACKGROUND ACCENTS */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#004a9c]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#f57020]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        {/* SECTION HEADLINE */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-amber-400 text-xs font-black uppercase tracking-wider mb-3">
            <ShieldCheck className="size-4 text-[#f57020]" />
            <span>Bản Quyền Độc Quyền FPT Play</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black tracking-tight leading-tight text-white uppercase">
            Xem Ngoại Hạng Anh 2026-27 trên FPT Play: Trực tiếp 4K
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Xem trọn vẹn 380 trận Ngoại Hạng Anh trên FPT Play với chất lượng lên đến 4K siêu nét,
            kết hợp đường truyền Internet Wi-Fi 6 tốc độ cao và gần 120 kênh truyền hình đặc sắc.
          </p>
        </div>

        {/* COMPARISON MATRIX (DESKTOP GRID & MOBILE SCROLLABLE) */}
        <div className="overflow-x-auto pb-4 no-scrollbar">
          <div className="min-w-[960px] grid grid-cols-4 gap-4 bg-[#071333]/90 rounded-3xl p-4 sm:p-6 border border-white/10 shadow-2xl backdrop-blur-md">
            {/* COLUMN 1: FIXED CRITERIA */}
            <div className="flex flex-col">
              <div className="h-[96px] flex flex-col justify-end pb-3 border-b border-white/10">
                <span className="text-sm font-black text-amber-400 uppercase tracking-wider">
                  Thông tin gói cước
                </span>
                <span className="text-[11px] text-slate-400">Tiêu chuẩn kỹ thuật & giá</span>
              </div>

              <div className="divide-y divide-white/10 text-xs text-slate-300 font-semibold">
                <div className="h-[104px] flex flex-col justify-center px-2">
                  <span className="text-white font-bold">Giá gói cước / tháng</span>
                  <span className="text-[10px] text-slate-400 font-normal">Đã bao gồm thuế VAT</span>
                </div>

                <div className="h-[76px] flex flex-col justify-center px-2">
                  <span className="text-white font-bold">Gói Internet tốc độ cao</span>
                  <span className="text-[10px] text-slate-400 font-normal">Download / Upload</span>
                </div>

                <div className="h-[52px] flex items-center px-2">
                  <span>Nền tảng hỗ trợ</span>
                </div>

                <div className="h-[60px] flex items-center gap-2 px-2">
                  <span>Xem Ngoại hạng Anh</span>
                  <div className="size-6 relative shrink-0">
                    <Image
                      src="/images/epl/premier_league_icon.png"
                      alt="Premier League"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="h-[52px] flex items-center px-2">
                  <span>Thiết bị truy cập Internet</span>
                </div>

                <div className="h-[52px] flex items-center px-2">
                  <span>Thể thao không giới hạn (Cúp C1, FA Cup)</span>
                </div>

                <div className="h-[52px] flex items-center px-2">
                  <span>Kho phim bộ, phim rạp, anime</span>
                </div>

                <div className="h-[52px] flex items-center px-2">
                  <span>Modem Wi-Fi 6 băng tần kép</span>
                </div>

                <div className="h-[60px] flex items-center justify-between px-2">
                  <span>Chất lượng hình ảnh</span>
                  <div className="w-16 h-7 relative">
                    <Image
                      src="/images/epl/badge_1080_4k.png"
                      alt="Full HD 4K"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="h-[68px] flex items-center px-2">
                  <span className="text-slate-400 text-[11px]">Đăng ký hòa mạng trực tuyến</span>
                </div>
              </div>
            </div>

            {/* COLUMNS 2, 3, 4: PACKAGES */}
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`flex flex-col rounded-2xl p-4 transition-all ${
                  pkg.isHot
                    ? "bg-gradient-to-b from-[#10245a] to-[#0a183d] border-2 border-orange-500 shadow-xl shadow-orange-500/10 relative"
                    : "bg-[#0b1b44]/70 border border-white/10 hover:border-white/20"
                }`}
              >
                {/* PACKAGE HEADER */}
                <div className="h-[96px] flex flex-col justify-between pb-3 border-b border-white/10 relative">
                  {pkg.badge && (
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-orange-500 text-white text-[10px] font-extrabold uppercase tracking-wider shadow">
                      {pkg.badge}
                    </span>
                  )}
                  <div className="h-8 relative w-40">
                    <Image
                      src={pkg.headerImg}
                      alt={pkg.name}
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium line-clamp-1">
                    {pkg.subtitle}
                  </span>
                </div>

                {/* DETAILS ROWS */}
                <div className="divide-y divide-white/10 text-xs">
                  {/* PRICE ROWS */}
                  <div className="h-[104px] flex flex-col justify-center px-2 gap-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">Ngoại thành / Tỉnh:</span>
                      <span className="text-base sm:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                        {pkg.priceNgoaiThanh}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">Nội thành HN/HCM:</span>
                      <span
                        className={`text-sm font-bold ${
                          pkg.isNoiThanhAvailable ? "text-white" : "text-slate-500 line-through"
                        }`}
                      >
                        {pkg.priceNoiThanh}
                      </span>
                    </div>
                  </div>

                  {/* SPEED */}
                  <div className="h-[76px] flex flex-col justify-center px-2 gap-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="flex items-center gap-1 text-slate-400">
                        <Download className="size-3 text-emerald-400" /> Tải về:
                      </span>
                      <span className="font-bold text-white">{pkg.dlSpeed}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="flex items-center gap-1 text-slate-400">
                        <Upload className="size-3 text-blue-400" /> Tải lên:
                      </span>
                      <span className="font-bold text-white">{pkg.ulSpeed}</span>
                    </div>
                  </div>

                  {/* PLATFORM */}
                  <div className="h-[52px] flex items-center justify-center px-2 text-center text-[11px] text-slate-200">
                    <span>{pkg.platform}</span>
                  </div>

                  {/* EPL DEVICES */}
                  <div className="h-[60px] flex items-center justify-center px-2 text-center text-xs font-bold text-amber-300">
                    <span>{pkg.eplDevices}</span>
                  </div>

                  {/* INTERNET DEVICES */}
                  <div className="h-[52px] flex items-center justify-center px-2 text-center font-bold text-white">
                    <span>{pkg.internetDevices}</span>
                  </div>

                  {/* FEATURES CHECKS */}
                  <div className="h-[52px] flex items-center justify-center">
                    <div className="size-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Check className="size-3.5" />
                    </div>
                  </div>

                  <div className="h-[52px] flex items-center justify-center">
                    <div className="size-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Check className="size-3.5" />
                    </div>
                  </div>

                  <div className="h-[52px] flex items-center justify-center">
                    <div className="size-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Check className="size-3.5" />
                    </div>
                  </div>

                  <div className="h-[60px] flex items-center justify-center">
                    <div className="size-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                      <Check className="size-3.5" />
                    </div>
                  </div>

                  {/* ACTION CTA */}
                  <div className="h-[68px] flex items-center justify-center pt-2">
                    <button
                      onClick={() =>
                        openRegisterModal({
                          id: pkg.id,
                          name: pkg.name,
                          categoryName: "Ngoại Hạng Anh V.VIP",
                          features: [
                            `Tốc độ Download/Upload: ${pkg.dlSpeed}`,
                            pkg.eplDevices,
                            "Xem trọn vẹn 380 trận Ngoại Hạng Anh 4K",
                            "Trang bị Modem Wi-Fi 6 chính hãng",
                          ],
                        })
                      }
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#e86010] to-[#ff7d2e] hover:from-[#d5540a] hover:to-[#e86010] text-white text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-orange-500/20 transition-all cursor-pointer text-center"
                    >
                      Đăng ký ngay
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
