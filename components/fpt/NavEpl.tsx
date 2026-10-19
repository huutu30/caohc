"use client";

import React from "react";
import Image from "next/image";
import { useRegister } from "@/context/RegisterContext";

export default function NavEpl() {
  const { openRegisterModal } = useRegister();

  return (
    <div className="w-[1440px] max-w-[calc(100%-32px)] mx-auto -mt-4 sm:-mt-6 mb-8 relative z-30">
      <div className="flex flex-row justify-center items-stretch gap-4 sm:gap-6">
        {/* CARD 1: ĐĂNG KÝ NGAY - BẠN CHƯA CÓ INTERNET FPT */}
        <button
          onClick={() => openRegisterModal()}
          className="flex-1 max-w-[480px] bg-white rounded-xl sm:rounded-2xl p-4 sm:py-6 sm:px-10 flex items-center sm:flex-col justify-center gap-3 sm:gap-2 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer group text-left sm:text-center"
        >
          <div className="size-12 sm:size-14 relative shrink-0">
            <Image
              src="/images/icon-wifi.gif"
              alt="Đăng ký ngay"
              width={56}
              height={56}
              className="object-contain"
              unoptimized
            />
          </div>
          <div>
            <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#f57020] transition-colors block leading-tight">
              Đăng ký ngay
            </span>
            <span className="text-xs sm:text-sm text-slate-500 font-normal block mt-0.5">
              Bạn chưa có Internet FPT
            </span>
          </div>
        </button>

        {/* CARD 2: NÂNG CẤP NGAY - BẠN ĐÃ CÓ INTERNET FPT */}
        <button
          onClick={() => openRegisterModal()}
          className="flex-1 max-w-[480px] bg-white rounded-xl sm:rounded-2xl p-4 sm:py-6 sm:px-10 flex items-center sm:flex-col justify-center gap-3 sm:gap-2 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer group text-left sm:text-center"
        >
          <div className="size-12 sm:size-14 relative shrink-0">
            <Image
              src="/images/icon-upgrade.svg"
              alt="Nâng cấp ngay"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
          <div>
            <span className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#004a9c] transition-colors block leading-tight">
              Nâng cấp ngay
            </span>
            <span className="text-xs sm:text-sm text-slate-500 font-normal block mt-0.5">
              Bạn đã có Internet FPT
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
