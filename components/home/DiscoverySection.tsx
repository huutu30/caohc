"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tv, Camera, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export default function DiscoverySection() {
  const ecosystems = [
    {
      id: "fpt-play",
      title: "FPT Play - Giải Trí Không Giới Hạn",
      badge: "Truyền hình số 1",
      icon: Tv,
      image: "/images/fpt_play_only_banner.webp",
      desc: "Trải nghiệm hơn 170 kênh truyền hình trong nước & quốc tế, kho phim 4K bom tấn và trực tiếp bản quyền trọn vẹn giải Ngoại Hạng Anh.",
      features: [
        "Xem trên Smart TV, Smartphone, Máy tính bảng, PC",
        "Đăng nhập đồng thời trên nhiều thiết bị",
        "Tua lại chương trình đã phát sóng trong 48 giờ",
      ],
      linkText: "Khám phá FPT Play",
      linkHref: "/goi-cuoc/combo",
    },
    {
      id: "fpt-camera",
      title: "FPT Camera AI - Giám Sát Thông Minh",
      badge: "Bảo mật Cloud Việt Nam",
      icon: Camera,
      image: "/images/camera_fpt_tron_yeu_thuong.webp",
      desc: "Hệ thống camera an ninh thông minh tích hợp trí tuệ nhân tạo (AI), phân biệt người và vật thể, lưu trữ đám mây Server đặt tại Việt Nam.",
      features: [
        "Hình ảnh Full HD 1080p sắc nét ngày và đêm",
        "Đàm thoại 2 chiều âm thanh trung thực",
        "Cảnh báo thông minh tức thì về điện thoại",
      ],
      linkText: "Xem các dòng Camera",
      linkHref: "/camera",
    },
    {
      id: "f-safe-go",
      title: "F-Safe Go - Bảo Vệ Gia Đình Số",
      badge: "An ninh mạng",
      icon: ShieldCheck,
      image: "/images/banner_4_desktop.webp",
      desc: "Giải pháp bảo mật mạng độc quyền từ FPT Telecom, tự động ngăn chặn mã độc, phần mềm gián điệp và các trang web lừa đảo trực tuyến.",
      features: [
        "Bảo vệ toàn diện không cần cài đặt phần mềm",
        "Quản lý nội dung truy cập phù hợp cho trẻ em",
        "Kiểm soát thời gian kết nối Internet từng thiết bị",
      ],
      linkText: "Tìm hiểu giải pháp F-Safe",
      linkHref: "/goi-cuoc/internet",
    },
  ];

  return (
    <section id="camera" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#004a9c] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>Hệ Sinh Thái Công Nghệ FPT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Giải Pháp Toàn Diện Cho Ngôi Nhà Thông Minh
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Kết hợp hoàn hảo giữa đường truyền Internet cáp quang siêu tốc và các tiện ích giải trí, an ninh giám sát hiện đại.
          </p>
        </div>

        {/* 3 ECOSYSTEM CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ecosystems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* IMAGE HEADER */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#004a9c] text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center space-x-1.5">
                      <Icon className="h-3.5 w-3.5 text-[#f57020]" />
                      <span>{item.badge}</span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-xl font-black text-slate-900 group-hover:text-[#004a9c] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                      {item.features.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-2 text-xs text-slate-700"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#f57020] mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* FOOTER LINK */}
                <div className="p-6 pt-0">
                  <Link
                    href={item.linkHref}
                    className="w-full py-3 rounded-2xl bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-[#004a9c] text-xs font-bold transition-all flex items-center justify-center space-x-2 border border-slate-200 hover:border-blue-200"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
