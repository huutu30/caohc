"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Tv,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useRegister } from "@/context/RegisterContext";
import FaqAccordion from "@/components/FaqAccordion";

export default function FptPlayBoxPage() {
  const { openRegisterModal } = useRegister();

  const boxSpecs = [
    { title: "Hệ điều hành", value: "Android TV chính chủ Google mới nhất" },
    { title: "Độ phân giải hỗ trợ", value: "Ultra HD 4K 60fps sắc nét" },
    { title: "Điều khiển từ xa", value: "Remote Voice tìm kiếm giọng nói tiếng Việt" },
    { title: "Kho ứng dụng", value: "Google Play Store với 10.000+ ứng dụng" },
    { title: "Cổng kết nối", value: "HDMI 2.1, Cổng LAN, USB, Cổng quang Optical" },
    { title: "Kết nối không dây", value: "Wi-Fi băng tần kép 2.4GHz & 5GHz, Bluetooth 5.0" },
  ];

  const faqs = [
    {
      q: "TV đời cũ CRT hoặc TV LCD không có Smart TV có dùng được FPT Play Box không?",
      a: "Có thể sử dụng tốt 100%. FPT Play Box hỗ trợ cả cổng HDMI hiện đại và cổng AV (cho TV đời cũ), biến mọi chiếc TV thông thường thành một chiếc Smart TV thông minh xem YouTube, phim ảnh và bóng đá.",
    },
    {
      q: "Làm thế nào để được trang bị FPT Play Box miễn phí?",
      a: "Quý khách đăng ký bất kỳ gói Combo Internet + Truyền hình FPT Play nào (Combo Sky, Combo Giga, Combo Meta, Combo V.VIP) đều được FPT Telecom trang bị miễn phí 01 đầu thu FPT Play Box 4K kèm Remote điều khiển giọng nói.",
    },
    {
      q: "Điều khiển giọng nói có nhận dạng được giọng địa phương vùng miền không?",
      a: "Remote Voice FPT Play Box ứng dụng công nghệ nhận diện giọng nói tiếng Việt chuẩn xác cho cả 3 miền Bắc, Trung, Nam, tìm kiếm bài hát trên YouTube hay kênh truyền hình chỉ trong 1 giây.",
    },
  ];

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
            <span className="text-slate-500">Thiết bị</span>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="font-semibold text-slate-800">FPT Play Box 4K Voice</span>
          </nav>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="bg-white border-b border-slate-200/80 py-12 sm:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#f57020] text-xs font-bold uppercase tracking-wider mb-4">
                <Tv className="size-3.5" />
                <span>Đầu Thu Điều Khiển Giọng Nói 4K</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-[#101828] leading-tight">
                FPT Play Box 4K Giọng Nói
              </h1>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Biến mọi chiếc tivi thành trung tâm giải trí đa phương tiện đỉnh cao. Điều khiển giọng nói tiếng Việt mượt mà, xem gần 170 kênh truyền hình và trọn vẹn 380 trận Ngoại Hạng Anh.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => openRegisterModal()}
                  className="bg-[#f57020] hover:bg-[#e05e10] text-white font-bold px-6 py-3 rounded-full text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Đăng ký trang bị miễn phí
                </button>
                <Link
                  href="/truyen-hinh-fpt-play"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#004a9c] hover:text-[#f57020] transition-colors"
                >
                  <span>Xem các gói Combo TV</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-6 border-t border-slate-100 pt-6">
                <div>
                  <div className="text-2xl font-black text-[#f57020]">4K UHD</div>
                  <div className="text-xs text-slate-500">Chuẩn nét 60fps</div>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <div className="text-2xl font-black text-[#004a9c]">Voice AI</div>
                  <div className="text-xs text-slate-500">Giọng nói 3 miền</div>
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <div className="text-2xl font-black text-emerald-600">170+</div>
                  <div className="text-xs text-slate-500">Kênh truyền hình</div>
                </div>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl bg-gradient-to-tr from-slate-100 to-blue-50/50 p-8 flex items-center justify-center border border-slate-200/70">
              <Image
                src="/images/fpt_play_only_banner.webp"
                alt="FPT Play Box 4K"
                fill
                className="object-contain p-6"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* TECH SPECS */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12">
        <div className="text-center mb-10">
          <h2 className="text-xl sm:text-3xl font-black text-[#101828]">
            Thông Số Kỹ Thuật FPT Play Box 4K
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 shadow-xs overflow-hidden">
          {boxSpecs.map((spec, i) => (
            <div key={i} className="flex items-center justify-between p-4 text-xs sm:text-sm">
              <span className="font-semibold text-slate-600">{spec.title}</span>
              <span className="font-bold text-slate-900">{spec.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="bg-white border-t border-slate-200/80 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-3xl font-black text-[#101828]">
              Câu Hỏi Thường Gặp Về FPT Play Box
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
