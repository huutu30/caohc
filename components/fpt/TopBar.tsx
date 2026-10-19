"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapPin, User, ChevronDown, Check } from "lucide-react";
import { useRegion, PROVINCES, Province } from "@/context/RegionContext";

export default function TopBar() {
  const { activeProvince, setActiveProvince, customerType, setCustomerType } =
    useRegion();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <div className="bg-[#0B1A3D] text-white text-xs border-b border-blue-950">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-8 py-2">
        {/* LEFT: PHÂN ĐOÀN KHÁCH HÀNG */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setCustomerType("personal")}
            className={`text-sm leading-6 font-semibold transition-colors cursor-pointer ${
              customerType === "personal"
                ? "underline [text-underline-position:from-font] text-white"
                : "opacity-80 hover:opacity-100 text-slate-200"
            }`}
          >
            Khách hàng cá nhân
          </button>
          <button
            onClick={() => setCustomerType("business")}
            className={`text-sm leading-6 font-semibold transition-colors cursor-pointer ${
              customerType === "business"
                ? "underline [text-underline-position:from-font] text-white"
                : "opacity-80 hover:opacity-100 text-slate-200"
            }`}
          >
            Khách hàng doanh nghiệp
          </button>
        </div>

        {/* RIGHT: CHỌN VỊ TRÍ & ĐĂNG NHẬP / HOTLINE */}
        <div className="flex items-center gap-6">
          {/* LOCATION SELECTOR */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 hover:opacity-90 transition-opacity cursor-pointer text-slate-200 hover:text-white"
              aria-label="Chọn vị trí"
            >
              <MapPin className="size-4 text-[#DDE4FC]" />
              <span className="text-sm leading-6 font-medium">
                {activeProvince.name}
              </span>
              <ChevronDown
                className={`size-3.5 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 max-h-80 overflow-y-auto bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-1">
                <div className="px-3 py-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  Chọn khu vực áp dụng ưu đãi
                </div>
                <div className="py-1">
                  {PROVINCES.map((prov: Province) => (
                    <button
                      key={prov.id}
                      onClick={() => {
                        setActiveProvince(prov);
                        setDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors flex items-center justify-between cursor-pointer ${
                        activeProvince.id === prov.id
                          ? "bg-blue-50 text-[#004a9c] font-bold"
                          : "hover:bg-slate-50 text-slate-700"
                      }`}
                    >
                      <span>{prov.name}</span>
                      {activeProvince.id === prov.id && (
                        <Check className="size-3.5 text-[#004a9c]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ĐĂNG NHẬP / HOTLINE */}
          <a
            href="tel:0902184284"
            className="flex items-center gap-1.5 hover:opacity-90 transition-opacity text-slate-200 hover:text-white"
          >
            <User className="size-4 text-[#DDE4FC]" />
            <span className="text-sm leading-6">Đăng ký: 0902.184.284</span>
          </a>
        </div>
      </div>
    </div>
  );
}
