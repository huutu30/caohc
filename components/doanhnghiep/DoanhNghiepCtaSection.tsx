"use client";

import React from "react";
import { PhoneCall, Building2, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import { useRegisterModal } from "@/context/RegisterContext";

export default function DoanhNghiepCtaSection() {
  const { openModal } = useRegisterModal();

  return (
    <section className="py-14 md:py-20 bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-cyan-300 text-xs font-semibold mb-3 border border-white/15">
              <Building2 className="w-3.5 h-3.5" />
              <span>Đối Tác Viễn Thông Tin Cậy Hàng Đầu</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight">
              Đăng Ký Internet Doanh Nghiệp FPT Ngay Hôm Nay
            </h2>
            <p className="mt-3 text-sm md:text-base text-blue-100 leading-relaxed">
              Trang bị miễn phí Router Gateway công nghiệp, tặng kèm địa chỉ IP Tĩnh độc quyền và cam kết chất lượng dịch vụ SLA uy tín cho công ty của bạn.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs md:text-sm text-blue-200">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Băng thông đối xứng đến 800 Mbps</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Miễn phí 01 IP Tĩnh định tuyến</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>Xuất hóa đơn VAT nhanh chóng</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={() =>
                openModal({
                  title: "Đăng ký tư vấn Internet Doanh Nghiệp",
                  category: "internet_doanh_nghiep",
                })
              }
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 active:scale-95 text-white font-extrabold text-sm md:text-base shadow-xl shadow-blue-500/25 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Đăng ký tư vấn ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:0775780962"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-95 border border-white/20 text-white font-bold text-sm md:text-base transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Hotline: 0775 780 962</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
