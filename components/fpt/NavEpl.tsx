"use client";

import React from "react";
import Image from "next/image";
import { useRegisterModal } from "@/context/RegisterContext";

export default function NavEpl() {
  const saleLink = "https://fpt.vn/sale/nguyenddb3";
  const { openRegisterModal } = useRegisterModal();

  return (
    <div className="w-full max-w-[1440px] px-3 sm:px-4 mx-auto mt-3.5 sm:mt-5 mb-5 sm:mb-8 relative z-30">
      <div className="flex flex-row justify-center items-stretch gap-2.5 sm:gap-6">
        {/* CARD 1: ĐĂNG KÝ NGAY - BẠN CHƯA CÓ INTERNET FPT (GIỮ NGUYÊN LINK) */}
        <a
          href={saleLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 max-w-[480px] bg-white rounded-2xl py-4 px-3 sm:py-6 sm:px-10 flex items-center sm:flex-col justify-center gap-3 sm:gap-2 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer group text-left sm:text-center active:scale-98 min-h-[76px]"
        >
          <div className="size-12 sm:size-16 relative shrink-0 flex items-center justify-center">
            <Image
              src="/images/icon-wifi.gif"
              alt="Đăng ký ngay"
              width={64}
              height={64}
              className="object-contain size-full group-hover:scale-105 transition-transform"
              unoptimized
            />
          </div>
          <div className="min-w-0 flex-1 sm:flex-initial">
            <span className="text-[14px] sm:text-lg font-bold text-slate-900 group-hover:text-[#f57020] transition-colors block leading-tight truncate">
              Đăng ký ngay
            </span>
            <span className="text-[11.5px] sm:text-sm text-slate-500 font-normal block mt-1 leading-tight truncate">
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
          className="flex-1 max-w-[480px] bg-white rounded-2xl py-4 px-3 sm:py-6 sm:px-10 flex items-center sm:flex-col justify-center gap-3 sm:gap-2 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer group text-left sm:text-center active:scale-98 min-h-[76px]"
        >
          <div className="size-12 sm:size-16 relative shrink-0 flex items-center justify-center">
            <Image
              src="/images/icon-upgrade.svg"
              alt="Nâng cấp ngay"
              width={64}
              height={64}
              className="object-contain size-full group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="min-w-0 flex-1 sm:flex-initial">
            <span className="text-[14px] sm:text-lg font-bold text-slate-900 group-hover:text-[#004a9c] transition-colors block leading-tight truncate">
              Nâng cấp ngay
            </span>
            <span className="text-[11.5px] sm:text-sm text-slate-500 font-normal block mt-1 leading-tight truncate">
              Bạn đã có Internet FPT
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
