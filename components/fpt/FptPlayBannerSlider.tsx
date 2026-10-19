"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight, Info } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

export default function FptPlayBannerSlider() {
  const { openRegisterModal } = useRegister();

  const packages = [
    {
      id: "vvip1",
      name: "Gói V.VIP 1",
      price: 130000,
      period: "tháng",
      image: "/images/vvip1.jpg",
      features: [
        "Kho giải trí đa dạng, đặc biệt bóng đá Anh và bóng đá Việt",
        "Xem Ngoại Hạng Anh và FA Cup",
      ],
      description: "Xem Ngoại Hạng Anh và FA Cup trọn vẹn trên 1 thiết bị thể thao, 5 thiết bị giải trí.",
    },
    {
      id: "vvip2",
      name: "Gói V.VIP 2",
      price: 160000,
      period: "tháng",
      image: "/images/vvip2.jpg",
      features: [
        "Kho giải trí đa dạng, đặc biệt bóng đá Anh và bóng đá Việt",
        "Xem Ngoại Hạng Anh và FA Cup",
      ],
      description: "Xem Ngoại Hạng Anh và FA Cup đồng thời trên 2 thiết bị thể thao, 5 thiết bị giải trí.",
    },
  ];

  return (
    <section className="container mx-auto mt-4 mb-8 w-[1440px] max-w-[calc(100%-32px)] md:mt-6 md:mb-10 md:rounded-2xl md:bg-white md:py-8 shadow-xs border border-slate-100">
      <h2 className="text-[22px] sm:text-[28px] leading-10 font-bold px-4 text-center text-slate-900 tracking-tight">
        FPT Play - Gói xem truyền hình, giải trí, thể thao đa phương tiện
      </h2>

      <div className="flex flex-col lg:flex-row items-stretch gap-6 p-4 sm:p-6 pt-6">
        {/* LEFT POSTER BANNER */}
        <div className="w-full lg:w-[320px] shrink-0 flex flex-col">
          <Link
            href="/ngoai-hang-anh"
            className="relative aspect-[318/421] w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group block flex-1 bg-slate-900"
          >
            <Image
              src="/images/fpt_play_only_banner.jpg"
              alt="Đã mê Ngoại Hạng phải chọn FPT"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 320px"
              priority
            />
          </Link>
        </div>

        {/* RIGHT 2 PACKAGE CARDS MATCHING FPT.VN */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              {/* TOP BANNER IMAGE (OFFICIAL VVIP1 / VVIP2 FROM FPT.VN) */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-900">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 450px"
                />
              </div>

              {/* CARD BODY */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-[#2f54eb] transition-colors">
                    {pkg.name}
                  </h4>

                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-bold text-[#2f54eb]">
                      {pkg.price.toLocaleString("vi-VN")}đ
                    </span>
                    <span className="text-xs text-slate-500 font-medium">/tháng</span>
                  </div>

                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <span>(Đã bao gồm VAT)</span>
                    <Info className="size-3.5 text-slate-400" />
                  </p>

                  <ul className="mt-4 space-y-2.5 text-xs text-slate-600">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="size-4 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() =>
                    openRegisterModal({
                      id: pkg.id,
                      name: pkg.name,
                      price: pkg.price,
                      category: "giai_tri",
                      categoryName: "FPT Play V.VIP",
                      downloadSpeed: "Đa nền tảng",
                      uploadSpeed: "Đa nền tảng",
                      image: pkg.image,
                      modem: "Tài khoản FPT Play bản quyền",
                      recommendedDevices: "1 - 2 thiết bị",
                      features: pkg.features,
                      description: pkg.description,
                    })
                  }
                  className="mt-6 w-full bg-[#2f54eb] hover:bg-[#1d39c4] text-white py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all active:scale-95 cursor-pointer"
                >
                  Mua ngay
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIEW ALL LINK */}
      <div className="text-center mt-2 pb-2">
        <Link
          href="/ngoai-hang-anh"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#004a9c] hover:text-[#f57020] transition-colors"
        >
          <span>Xem tất cả gói FPT Play</span>
          <ChevronRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
