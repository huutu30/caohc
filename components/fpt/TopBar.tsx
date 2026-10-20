"use client";

import React, { useState, useRef, useEffect } from "react";
import { MapPin, User, ChevronDown, Check, Building, X } from "lucide-react";
import { useRegion, PROVINCES, Province } from "@/context/RegionContext";

export default function TopBar() {
  const { activeProvince, setActiveProvince } = useRegion();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Grouped location structure
  const hcmProvinces = PROVINCES.filter(
    (p) => p.id === "hcm" || p.id === "hcm-ngoai-thanh"
  );
  const hanoiiProvinces = PROVINCES.filter(
    (p) => p.id === "ha-noi" || p.id === "ha-noi-ngoai-thanh"
  );
  const toanQuocProv = PROVINCES.find((p) => p.id === "toan-quoc");
  const otherProvinces = PROVINCES.filter(
    (p) =>
      ![
        "hcm",
        "hcm-ngoai-thanh",
        "ha-noi",
        "ha-noi-ngoai-thanh",
        "toan-quoc",
      ].includes(p.id)
  ).sort((a, b) => a.name.localeCompare(b.name, "vi"));

  const filteredProvinces = PROVINCES.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  const selectProvince = (prov: Province) => {
    setActiveProvince(prov);
    setDropdownOpen(false);
    setSearchQuery("");
  };

  return (
    <div className="bg-[#0B1A3D] text-white text-xs border-b border-blue-950">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-8 py-2">
        {/* LEFT: SLOGAN THÔNG TIN */}
        <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300 font-medium">
          <span className="size-1.5 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
          <span>Website đăng ký dịch vụ trực tuyến chính hãng FPT Telecom</span>
        </div>

        {/* RIGHT: CHỌN VỊ TRÍ & ĐĂNG NHẬP / HOTLINE */}
        <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">
          {/* LOCATION SELECTOR */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 hover:opacity-90 transition-opacity cursor-pointer text-slate-200 hover:text-white"
              aria-label="Chọn vị trí xem giá"
            >
              <MapPin className="size-4 text-[#ef4444]" />
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
              <>
                {/* BACKDROP FOR MOBILE */}
                <div
                  className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 sm:hidden"
                  onClick={() => setDropdownOpen(false)}
                />

                <div className="fixed inset-x-3 sm:inset-auto top-12 sm:top-full sm:right-0 sm:mt-2 w-auto sm:w-80 max-h-[80vh] sm:max-h-[440px] overflow-y-auto bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200 p-3 z-50 animate-in fade-in slide-in-from-top-1">
                  <div className="px-2 py-1.5 text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 flex items-center justify-between">
                    <span>Xem giá cước theo khu vực</span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-blue-600 font-bold">63 Tỉnh Thành</span>
                      <button
                        onClick={() => setDropdownOpen(false)}
                        className="sm:hidden p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
                        aria-label="Đóng chọn vị trí"
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  </div>

                {/* SEARCH INPUT */}
                <div className="p-1.5 border-b border-slate-100 my-1">
                  <input
                    type="text"
                    placeholder="Tìm nhanh tỉnh, thành phố..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-[#004a9c] bg-slate-50"
                    autoFocus
                  />
                </div>

                <div className="py-1 max-h-[300px] overflow-y-auto space-y-2">
                  {searchQuery ? (
                    // SEARCH RESULTS
                    <div>
                      {filteredProvinces.map((prov) => (
                        <button
                          key={prov.id}
                          onClick={() => selectProvince(prov)}
                          className={`w-full text-left px-3 py-2 text-xs rounded-xl transition-colors flex items-center justify-between cursor-pointer ${
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
                      {filteredProvinces.length === 0 && (
                        <div className="px-3 py-4 text-center text-xs text-slate-400">
                          Không tìm thấy tỉnh/thành phù hợp
                        </div>
                      )}
                    </div>
                  ) : (
                    // STRUCTURED LOCATION GROUPS
                    <>
                      {/* 1. TOÀN QUỐC */}
                      {toanQuocProv && (
                        <div className="border-b border-slate-100 pb-1.5">
                          <button
                            onClick={() => selectProvince(toanQuocProv)}
                            className={`w-full text-left px-3 py-2 text-xs rounded-xl transition-colors flex items-center justify-between cursor-pointer ${
                              activeProvince.id === toanQuocProv.id
                                ? "bg-blue-50 text-[#004a9c] font-bold"
                                : "hover:bg-slate-50 text-slate-800 font-semibold"
                            }`}
                          >
                            <span className="flex items-center gap-1.5">
                              <Building className="size-3.5 text-[#004a9c]" />
                              <span>Toàn quốc (Giá niêm yết)</span>
                            </span>
                            {activeProvince.id === toanQuocProv.id && (
                              <Check className="size-3.5 text-[#004a9c]" />
                            )}
                          </button>
                        </div>
                      )}

                      {/* 2. HỒ CHÍ MINH */}
                      <div className="border-b border-slate-100 pb-2">
                        <div className="px-2.5 py-1 text-[11px] font-bold text-slate-900 flex items-center gap-1">
                          <span className="size-2 rounded-full bg-blue-600 inline-block"></span>
                          <span>Hồ Chí Minh</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 px-1 mt-1">
                          {hcmProvinces.map((prov) => (
                            <button
                              key={prov.id}
                              onClick={() => selectProvince(prov)}
                              className={`text-left px-2.5 py-2 text-xs rounded-xl border transition-all cursor-pointer ${
                                activeProvince.id === prov.id
                                  ? "border-[#004a9c] bg-blue-50 text-[#004a9c] font-bold shadow-xs"
                                  : "border-slate-100 bg-white hover:border-slate-200 text-slate-700"
                              }`}
                            >
                              <div className="font-semibold">{prov.id === "hcm" ? "Nội thành" : "Ngoại thành"}</div>
                              <div className="text-[10px] text-slate-400">{prov.name}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* 3. HÀ NỘI */}
                      <div className="border-b border-slate-100 pb-2">
                        <div className="px-2.5 py-1 text-[11px] font-bold text-slate-900 flex items-center gap-1">
                          <span className="size-2 rounded-full bg-orange-600 inline-block"></span>
                          <span>Hà Nội</span>
                        </div>
                        <div className="grid grid-cols-2 gap-1.5 px-1 mt-1">
                          {hanoiiProvinces.map((prov) => (
                            <button
                              key={prov.id}
                              onClick={() => selectProvince(prov)}
                              className={`text-left px-2.5 py-2 text-xs rounded-xl border transition-all cursor-pointer ${
                                activeProvince.id === prov.id
                                  ? "border-[#004a9c] bg-blue-50 text-[#004a9c] font-bold shadow-xs"
                                  : "border-slate-100 bg-white hover:border-slate-200 text-slate-700"
                              }`}
                            >
                              <div className="font-semibold">{prov.id === "ha-noi" ? "Nội thành" : "Ngoại thành"}</div>
                              <div className="text-[10px] text-slate-400">{prov.name}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* 4. CÁC TỈNH THÀNH KHÁC */}
                      <div>
                        <div className="px-2.5 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Các tỉnh thành khác ({otherProvinces.length})
                        </div>
                        <div className="space-y-0.5 mt-1">
                          {otherProvinces.map((prov) => (
                            <button
                              key={prov.id}
                              onClick={() => selectProvince(prov)}
                              className={`w-full text-left px-3 py-1.5 text-xs rounded-xl transition-colors flex items-center justify-between cursor-pointer ${
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
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

          {/* ĐĂNG NHẬP / HOTLINE */}
          <a
            href="tel:0784930338"
            className="flex items-center gap-1.5 hover:opacity-90 transition-opacity text-slate-200 hover:text-white"
          >
            <User className="size-4 text-[#DDE4FC]" />
            <span className="text-sm leading-6">Đăng ký: 0784 930 338</span>
          </a>
        </div>
      </div>
    </div>
  );
}
