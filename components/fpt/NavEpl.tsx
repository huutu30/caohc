"use client";

import React from "react";
import Image from "next/image";


export default function NavEpl() {
  const saleLink = "https://fpt.vn/sale/nguyenddb3";

  return (
    <div className="w-[1440px] max-w-[calc(100%-20px)] sm:max-w-[calc(100%-32px)] mx-auto mt-3 sm:mt-5 mb-5 sm:mb-8 relative z-30">
      <div className="flex flex-row justify-center items-stretch gap-2.5 sm:gap-6">
        {/* CARD 1: ĐĂNG KÝ NGAY - BẠN CHƯA CÓ INTERNET FPT */}
        <a
          href={saleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[480px] bg-white rounded-xl sm:rounded-2xl p-2.5 sm:py-6 sm:px-10 flex items-center sm:flex-col justify-center gap-2 sm:gap-2 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer group text-left sm:text-center active:scale-98"
        >
          <div className="size-8 sm:size-14 relative shrink-0 flex items-center justify-center">
            <Image
              src="/images/icon-wifi.gif"
              alt="Đăng ký ngay"
              width={56}
              height={56}
              className="object-contain size-full group-hover:scale-105 transition-transform"
              unoptimized
            />
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-lg font-bold text-slate-900 group-hover:text-[#f57020] transition-colors block leading-tight truncate">
              Đăng ký ngay
            </span>
            <span className="text-[10px] sm:text-sm text-slate-500 font-normal block mt-0.5 leading-tight truncate">
              Bạn chưa có Internet FPT
            </span>
          </div>
        </a>

        {/* CARD 2: NÂNG CẤP NGAY - BẠN ĐÃ CÓ INTERNET FPT */}
        <a
          href={saleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[480px] bg-white rounded-xl sm:rounded-2xl p-2.5 sm:py-6 sm:px-10 flex items-center sm:flex-col justify-center gap-2 sm:gap-2 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer group text-left sm:text-center active:scale-98"
        >
          <div className="size-8 sm:size-14 relative shrink-0 flex items-center justify-center">
            <Image
              src="/images/icon-upgrade.svg"
              alt="Nâng cấp ngay"
              width={56}
              height={56}
              className="object-contain size-full group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="min-w-0">
            <span className="text-xs sm:text-lg font-bold text-slate-900 group-hover:text-[#004a9c] transition-colors block leading-tight truncate">
              Nâng cấp ngay
            </span>
            <span className="text-[10px] sm:text-sm text-slate-500 font-normal block mt-0.5 leading-tight truncate">
              Bạn đã có Internet FPT
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
