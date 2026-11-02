"use client";

import React from "react";
import Image from "next/image";
import { useRegisterModal } from "@/context/RegisterContext";

export default function NavEpl() {
  const saleLink = "https://fpt.vn/sale/nguyenddb3";
  const { openRegisterModal } = useRegisterModal();

  return (
    <div className="w-[1440px] max-w-[calc(100%-32px)] mx-auto mt-3 sm:mt-5 mb-5 sm:mb-8 relative z-30">
      <div className="flex flex-row justify-center items-stretch gap-3 sm:gap-6">
        {/* CARD 1: ĐĂNG KÝ NGAY - BẠN CHƯA CÓ INTERNET FPT (GIỮ NGUYÊN LINK) */}
        <a
          href={saleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[480px] bg-white rounded-2xl py-4 sm:py-6 px-2 sm:px-10 flex flex-col items-center justify-center text-center gap-1.5 sm:gap-2 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer group active:scale-98 min-h-[105px] sm:min-h-[140px]"
        >
          <div className="size-10 sm:size-14 relative shrink-0 flex items-center justify-center">
            <Image
              src="/images/icon-wifi.gif"
              alt="Đăng ký ngay"
              width={56}
              height={56}
              className="object-contain size-full group-hover:scale-105 transition-transform"
              unoptimized
            />
          </div>
          <div className="min-w-0 w-full">
            <span className="text-[13.5px] sm:text-lg font-bold text-slate-900 group-hover:text-[#f57020] transition-colors block leading-tight">
              Đăng ký ngay
            </span>
            <span className="text-[10.5px] sm:text-sm text-slate-500 font-normal block mt-1 leading-tight whitespace-nowrap">
              Bạn chưa có Internet FPT
            </span>
          </div>
        </a>

        {/* CARD 2: NÂNG CẤP NGAY - MỞ TRỰC TIẾP FORM ĐĂNG KÝ */}
        <button
          type="button"
          onClick={() =>
            openRegisterModal({
              id: "nang-cap-fpt",
              name: "Nâng cấp dịch vụ FPT",
              title: "Nâng cấp dịch vụ FPT",
            })
          }
          className="flex-1 max-w-[480px] bg-white rounded-2xl py-4 sm:py-6 px-2 sm:px-10 flex flex-col items-center justify-center text-center gap-1.5 sm:gap-2 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer group active:scale-98 min-h-[105px] sm:min-h-[140px]"
        >
          <div className="size-10 sm:size-14 relative shrink-0 flex items-center justify-center">
            <Image
              src="/images/icon-upgrade.svg"
              alt="Nâng cấp ngay"
              width={56}
              height={56}
              className="object-contain size-full group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="min-w-0 w-full">
            <span className="text-[13.5px] sm:text-lg font-bold text-slate-900 group-hover:text-[#004a9c] transition-colors block leading-tight">
              Nâng cấp ngay
            </span>
            <span className="text-[10.5px] sm:text-sm text-slate-500 font-normal block mt-1 leading-tight whitespace-nowrap">
              Bạn đã có Internet FPT
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
