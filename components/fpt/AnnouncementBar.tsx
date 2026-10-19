"use client";

import React from "react";
import Image from "next/image";
import { useRegister } from "@/context/RegisterContext";

export default function AnnouncementBar() {
  const { openRegisterModal } = useRegister();

  return (
    <div
      className="w-full h-9 md:h-[42px] overflow-hidden flex items-center relative z-20 text-white shadow-inner"
      style={{
        background: "#e6aa41 url('/images/announcement/bg.png') repeat-x",
        backgroundSize: "cover",
      }}
    >
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="animate-marquee whitespace-nowrap flex items-center space-x-12 px-4 text-xs md:text-sm font-semibold tracking-wide">
          <button
            onClick={() => openRegisterModal()}
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity cursor-pointer text-left"
          >
            <Image
              src="/images/announcement/icon.png"
              alt=""
              width={26}
              height={26}
              className="size-5 md:size-[26px] shrink-0"
            />
            <span>
              Combo Internet V.VIP chỉ từ 220K: Xem Ngoại Hạng Anh - Nhận ngay Camera AI & Cloud miễn phí{" "}
              <span className="underline font-bold text-[#ffd663] ml-1">TẠI ĐÂY</span>
            </span>
          </button>

          <button
            onClick={() => openRegisterModal()}
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity cursor-pointer text-left"
          >
            <Image
              src="/images/announcement/icon.png"
              alt=""
              width={26}
              height={26}
              className="size-5 md:size-[26px] shrink-0"
            />
            <span>
              Combo Internet V.VIP chỉ từ 220K: Xem Ngoại Hạng Anh - Nhận ngay Camera AI & Cloud miễn phí{" "}
              <span className="underline font-bold text-[#ffd663] ml-1">TẠI ĐÂY</span>
            </span>
          </button>

          <button
            onClick={() => openRegisterModal()}
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity cursor-pointer text-left"
          >
            <Image
              src="/images/announcement/icon.png"
              alt=""
              width={26}
              height={26}
              className="size-5 md:size-[26px] shrink-0"
            />
            <span>
              Combo Internet V.VIP chỉ từ 220K: Xem Ngoại Hạng Anh - Nhận ngay Camera AI & Cloud miễn phí{" "}
              <span className="underline font-bold text-[#ffd663] ml-1">TẠI ĐÂY</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
