"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { Sparkles } from "lucide-react";
import RegistrationForm from "@/components/RegistrationForm";

function RegisterContent() {
  const searchParams = useSearchParams();
  const packageParam = searchParams.get("package") || "sky-300";

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* HEADER HERO */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
            <Sparkles className="h-4 w-4" />
            <span>Tiếp Nhận Đăng Ký Trực Tuyến Nhanh Chóng</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Đăng Ký Hòa Mạng Internet FPT Telecom
          </h1>
          <p className="mt-4 text-blue-100 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Quy trình hòa mạng nhanh chóng trong 3 bước đơn giản. Miễn phí Modem WiFi 6 và tặng thêm đến 2 tháng cước sử dụng.
          </p>

          {/* 3 STEPS PROGRESS */}
          <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left flex items-start space-x-3">
              <div className="h-8 w-8 rounded-full bg-brand-orange text-white font-black text-sm flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <p className="font-bold text-sm text-white">Chọn gói cước</p>
                <p className="text-xs text-blue-100 mt-0.5">Chọn Internet hoặc Combo phù hợp</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left flex items-start space-x-3">
              <div className="h-8 w-8 rounded-full bg-brand-orange text-white font-black text-sm flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <p className="font-bold text-sm text-white">Điền thông tin</p>
                <p className="text-xs text-blue-100 mt-0.5">Họ tên, SĐT và địa chỉ triển khai</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-left flex items-start space-x-3">
              <div className="h-8 w-8 rounded-full bg-brand-orange text-white font-black text-sm flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <p className="font-bold text-sm text-white">Bàn giao thiết bị</p>
                <p className="text-xs text-blue-100 mt-0.5">Kỹ thuật viên bàn giao trong 24h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <RegistrationForm initialPackageId={packageParam} className="py-12 sm:py-16" />
    </div>
  );
}

export default function RegisterPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Đang tải...</div>}>
      <RegisterContent />
    </React.Suspense>
  );
}
