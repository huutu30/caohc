"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRegisterModal } from "@/context/RegisterContext";

export default function AccessPointPromoBanner() {
  const { openModal } = useRegisterModal();

  return (
    <section className="py-8 md:py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200">
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full min-h-[200px]">
            <Image
              src="/images/access-point/banner_promo.jpg"
              alt="Hệ Sinh Thái Dịch Vụ Số FPT Telecom"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/60 to-transparent flex items-center p-6 sm:p-10 md:p-14">
              <div className="max-w-lg text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold mb-3 border border-orange-500/30">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ưu Đãi Đặc Biệt</span>
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight text-white mb-2">
                  Trang Bị Miễn Phí Mesh Wi-Fi 6 Khi Đăng Ký Gói Cước F1
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6">
                  Tiết kiệm chi phí đầu tư thiết bị. Trọn bộ 1 Modem chính + 1 Access Point Mesh bảo hành 1 đổi 1 suốt thời gian hòa mạng.
                </p>
                <button
                  type="button"
                  onClick={() =>
                    openModal({
                      title: "Đăng ký gói mạng F1 kèm Mesh Wi-Fi 6 miễn phí",
                      category: "internet_gia_dinh",
                    })
                  }
                  className="px-6 py-3 rounded-xl bg-orange-600 hover:bg-orange-500 active:scale-95 text-white font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-orange-500/30 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Nhận ưu đãi trọn bộ F1</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
