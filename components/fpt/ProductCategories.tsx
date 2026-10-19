"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCategories() {
  const categories = [
    {
      title: "Internet Cá Nhân",
      image: "/images/product-internet-personal.png",
      href: "/goi-cuoc/internet",
    },
    {
      title: "Internet Gia Đình",
      image: "/images/product-internet-family.png",
      href: "/goi-cuoc/internet",
    },
    {
      title: "Internet Doanh Nghiệp",
      image: "/images/product-internet-gamethu.png",
      href: "/goi-cuoc/internet",
    },
    {
      title: "Truyền Hình FPT Play",
      image: "/images/product-tv-entertainment.png",
      href: "/goi-cuoc/combo",
    },
    {
      title: "FPT Camera",
      image: "/images/product-camera.png",
      href: "/camera",
    },
    {
      title: "Dịch Vụ Số",
      image: "/images/product-digital-services.png",
      href: "/#smart-home",
    },
  ];

  return (
    <section className="container mx-auto mt-4 mb-8 w-[1440px] max-w-[calc(100%-32px)] md:mt-6 md:mb-10 md:rounded-2xl md:bg-white md:py-8 shadow-xs border border-slate-100">
      <h2 className="text-[22px] sm:text-[28px] leading-10 font-bold px-4 text-center text-slate-900 tracking-tight">
        Danh mục sản phẩm đa dạng
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 p-4 sm:p-6 pt-6">
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            href={cat.href}
            className="group relative overflow-hidden rounded-2xl border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col items-center"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
