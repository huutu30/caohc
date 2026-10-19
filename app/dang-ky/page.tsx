"use client";

import * as React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ChevronRight, Sparkles } from "lucide-react";
import RegistrationForm from "@/components/RegistrationForm";

function RegisterContent() {
  const searchParams = useSearchParams();
  const packageParam = searchParams.get("goi") || "";

  return (
    <div className="w-full bg-[#F8FAFC] min-h-screen">
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-3">
          <nav className="flex items-center space-x-2 text-xs text-slate-500">
            <Link href="/" className="hover:text-[#F26F21] transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="font-semibold text-slate-800">Đăng ký hòa mạng trực tuyến</span>
          </nav>
        </div>
      </div>

      {/* SUBPAGE HEADER (CLEAN FPT STYLE) */}
      <section className="bg-white border-b border-slate-200/80 py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#F26F21] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="size-3.5" />
            <span>Tiếp Nhận Đăng Ký Trực Tuyến Nhanh Chóng</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-[#101828]">
            Đăng Ký Hòa Mạng Dịch Vụ FPT Telecom
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Quy trình tiếp nhận đăng ký đơn giản chỉ mất 2 phút. Đội ngũ triển khai dịch vụ sẽ khảo sát và bàn giao thiết bị tận nhà trong vòng 24 giờ.
          </p>

          {/* 3 STEPS PROGRESS CARDS */}
          <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <div className="size-8 rounded-full bg-[#F26F21] text-white font-black text-sm flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900">Chọn gói cước</p>
                <p className="text-xs text-slate-500 mt-0.5">Internet WiFi 6 hoặc Combo FPT Play</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <div className="size-8 rounded-full bg-[#004a9c] text-white font-black text-sm flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900">Điền thông tin</p>
                <p className="text-xs text-slate-500 mt-0.5">Họ tên, SĐT và địa chỉ triển khai</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <div className="size-8 rounded-full bg-emerald-600 text-white font-black text-sm flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900">Bàn giao thiết bị</p>
                <p className="text-xs text-slate-500 mt-0.5">Đội ngũ bàn giao thiết bị trong 24h</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <RegistrationForm initialPackageId={packageParam} className="py-0" />
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 flex items-center justify-center text-sm font-semibold text-slate-600">
          Đang tải trang đăng ký...
        </div>
      }
    >
      <RegisterContent />
    </React.Suspense>
  );
}
