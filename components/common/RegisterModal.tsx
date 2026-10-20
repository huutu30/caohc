"use client";

import React, { useState, useEffect, useRef } from "react";
import { X, CheckCircle2, ShieldCheck, Sparkles, Phone, User, MapPin, ChevronDown, Check } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";
import { useRegion, PROVINCES } from "@/context/RegionContext";
import { FPT_PACKAGES } from "@/data/fptPackages";

// DANH SÁCH GÓI SECTION 1 COMBO THỂ THAO V.VIP
const SECTION_1_DROPDOWN_PACKAGES = [
  {
    id: "combo-giga-vvip",
    name: "Combo Giga - V.VIP",
    speed: "300 Mbps",
    price: { hcm: 220000, tinh: 220000 },
  },
  {
    id: "combo-sky-vvip",
    name: "Combo Sky - V.VIP",
    speed: "1 Gbps",
    price: { hcm: 269000, tinh: 239000 },
  },
  {
    id: "combo-meta-vvip",
    name: "Combo Meta - V.VIP",
    speed: "1 Gbps",
    price: { hcm: 369000, tinh: 339000 },
  },
  {
    id: "combo-speedx1-vvip",
    name: "Combo Speedx1 - V.VIP",
    speed: "1 Gbps (Wi-Fi 7)",
    price: 369000,
  },
  {
    id: "combo-lux500-vvip",
    name: "Combo Lux 500 - V.VIP",
    speed: "500 Mbps",
    price: 830000,
  },
  {
    id: "combo-lux800-vvip",
    name: "Combo Lux 800 - V.VIP",
    speed: "800 Mbps",
    price: 1030000,
  },
];

// GÓI FPT PLAY
const FPT_PLAY_DROPDOWN_PACKAGES = [
  {
    id: "vvip1",
    name: "Gói V.VIP 1 (FPT Play)",
    speed: "1 Thiết bị NHA",
    price: 130000,
  },
  {
    id: "vvip2",
    name: "Gói V.VIP 2 (FPT Play)",
    speed: "2 Thiết bị NHA",
    price: 160000,
  },
];

export default function RegisterModal() {
  const { isRegisterModalOpen, closeRegisterModal, selectedPackage } = useRegister();
  const { activeProvince, getPrice } = useRegion();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [provinceId, setProvinceId] = useState(activeProvince.id);
  const [billingCycle, setBillingCycle] = useState<"1M" | "6M" | "12M">("6M");
  const [chosenPkgId, setChosenPkgId] = useState(selectedPackage?.id || "combo-sky-vvip");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedPackage) {
      setChosenPkgId(selectedPackage.id);
    }
  }, [selectedPackage]);

  useEffect(() => {
    setProvinceId(activeProvince.id);
  }, [activeProvince]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isRegisterModalOpen) return null;

  // TỔNG HỢP TOÀN BỘ GÓI CƯỚC ĐỂ TÍNH GIÁ CHUẨN XÁC
  const allAvailablePackages = [
    ...SECTION_1_DROPDOWN_PACKAGES,
    ...FPT_PACKAGES.map((p) => ({
      id: p.id,
      name: p.name,
      speed: p.downloadSpeed,
      price: p.price,
    })),
    ...FPT_PLAY_DROPDOWN_PACKAGES,
  ];

  const currentPkg =
    allAvailablePackages.find((p) => p.id === chosenPkgId) ||
    allAvailablePackages[0];

  // Tính giá cước theo tỉnh/vùng miền
  const rawPrice = getPrice(currentPkg);
  const pkgPrice: number = typeof rawPrice === "number" ? rawPrice : 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) return;

    setIsSubmitting(true);
    // Simulate high speed registration lead submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setIsDropdownOpen(false);
    setFullName("");
    setPhoneNumber("");
    setAddress("");
    closeRegisterModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg max-h-[92vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL HEADER - COMPACT & FIXED AT TOP */}
        <div className="bg-gradient-to-r from-[#004a9c] to-[#002f6c] p-3.5 sm:p-5 text-white relative shrink-0">
          <button
            onClick={handleResetAndClose}
            className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 p-1.5 text-white/90 hover:text-white hover:bg-white/20 rounded-full transition-colors cursor-pointer z-20"
            aria-label="Đóng cửa sổ"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-1.5 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-0.5">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Tiếp Nhận Hòa Mạng Mới 24H</span>
          </div>
          <h3 className="text-base sm:text-xl font-black text-white pr-8">
            Đăng Ký Trực Tuyến FPT Telecom
          </h3>
          <p className="text-[11px] sm:text-xs text-blue-100 mt-0.5 line-clamp-1">
            Chuyên viên tư vấn sẽ liên hệ ngay trong 5 - 15 phút để hoàn tất thủ tục
          </p>
        </div>

        {/* MODAL BODY */}
        <div className="p-3.5 sm:p-5 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="text-center py-6 space-y-3">
              <div className="h-14 w-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-black text-slate-900">
                Đăng Ký Thành Công!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Cảm ơn Quý khách <span className="font-bold text-[#004a9c]">{fullName}</span>. 
                Hệ thống FPT Telecom đã tiếp nhận thông tin gói cước{" "}
                <span className="font-bold text-[#f57020]">{currentPkg.name}</span>.
                Chuyên viên triển khai dịch vụ sẽ gọi lại qua số{" "}
                <span className="font-bold">{phoneNumber}</span> trong ít phút.
              </p>
              <button
                onClick={handleResetAndClose}
                className="mt-3 px-5 py-2 rounded-full bg-[#004a9c] text-white font-bold text-xs sm:text-sm hover:bg-[#003875] transition-colors cursor-pointer"
              >
                Đóng thông báo
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
              {/* CHỌN GÓI CƯỚC - CUSTOM POPUP DROPDOWN */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
                  Gói cước đã chọn
                </label>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-300 text-left text-xs sm:text-sm font-bold text-slate-900 rounded-xl px-3 py-2 outline-none focus:border-[#004a9c] focus:bg-white transition-all flex items-center justify-between cursor-pointer"
                >
                  <div className="truncate pr-2">
                    <span className="text-slate-900">{currentPkg.name}</span>
                    <span className="text-slate-500 font-normal text-xs ml-1">• {currentPkg.speed}</span>
                    <span className="text-[#f57020] font-bold text-xs ml-1">
                      ({pkgPrice.toLocaleString("vi-VN")} đ/tháng)
                    </span>
                  </div>
                  <ChevronDown
                    className={`size-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180 text-[#004a9c]" : ""
                    }`}
                  />
                </button>

                {/* DROPDOWN MENU: CHIỀU DÀI 70% FORM, CHIỀU NGANG 80% FORM CÓ THANH CUỘN */}
                {isDropdownOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1.5 w-[88%] sm:w-[80%] z-50 bg-white rounded-2xl shadow-2xl border border-slate-200 max-h-[290px] sm:max-h-[320px] overflow-y-auto p-2 space-y-2.5 animate-in fade-in slide-in-from-top-2 duration-150">
                    {/* NHÓM 1: COMBO V.VIP THỂ THAO */}
                    <div>
                      <div className="px-2 py-1 text-[11px] font-black uppercase tracking-wider text-amber-700 bg-amber-50 rounded-lg mb-1 flex items-center gap-1.5">
                        <span>⭐ Combo Thể Thao V.VIP (Ngoại Hạng Anh)</span>
                      </div>
                      <div className="space-y-1">
                        {SECTION_1_DROPDOWN_PACKAGES.map((pkg) => {
                          const pPrice = getPrice(pkg) || (typeof pkg.price === "number" ? pkg.price : pkg.price.tinh);
                          const isSelected = chosenPkgId === pkg.id;
                          return (
                            <button
                              key={pkg.id}
                              type="button"
                              onClick={() => {
                                setChosenPkgId(pkg.id);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full text-left p-2 rounded-xl text-xs transition-colors flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? "bg-blue-50 text-[#004a9c] font-bold border border-blue-200"
                                  : "hover:bg-slate-50 text-slate-800"
                              }`}
                            >
                              <div className="truncate pr-2">
                                <div className="font-bold flex items-center gap-1">
                                  <span>{pkg.name}</span>
                                  <span className="text-[10px] text-slate-500 font-normal">({pkg.speed})</span>
                                </div>
                                <div className="text-[11px] text-[#f57020] font-bold">
                                  {pPrice.toLocaleString("vi-VN")} đ/tháng
                                </div>
                              </div>
                              {isSelected && <Check className="size-4 text-[#004a9c] shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* NHÓM 2: INTERNET CÁ NHÂN & WI-FI 6 / WI-FI 7 */}
                    <div className="border-t border-slate-100 pt-2">
                      <div className="px-2 py-1 text-[11px] font-black uppercase tracking-wider text-blue-700 bg-blue-50 rounded-lg mb-1 flex items-center gap-1.5">
                        <span>🌐 Gói Internet Wi-Fi 6 & Wi-Fi 7</span>
                      </div>
                      <div className="space-y-1">
                        {FPT_PACKAGES.map((pkg) => {
                          const pPrice = getPrice(pkg) || (typeof pkg.price === "number" ? pkg.price : pkg.price.tinh);
                          const isSelected = chosenPkgId === pkg.id;
                          return (
                            <button
                              key={pkg.id}
                              type="button"
                              onClick={() => {
                                setChosenPkgId(pkg.id);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full text-left p-2 rounded-xl text-xs transition-colors flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? "bg-blue-50 text-[#004a9c] font-bold border border-blue-200"
                                  : "hover:bg-slate-50 text-slate-800"
                              }`}
                            >
                              <div className="truncate pr-2">
                                <div className="font-bold flex items-center gap-1">
                                  <span>{pkg.name}</span>
                                  <span className="text-[10px] text-slate-500 font-normal">({pkg.downloadSpeed})</span>
                                </div>
                                <div className="text-[11px] text-[#f57020] font-bold">
                                  {pPrice.toLocaleString("vi-VN")} đ/tháng
                                </div>
                              </div>
                              {isSelected && <Check className="size-4 text-[#004a9c] shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* NHÓM 3: TRUYỀN HÌNH FPT PLAY */}
                    <div className="border-t border-slate-100 pt-2">
                      <div className="px-2 py-1 text-[11px] font-black uppercase tracking-wider text-purple-700 bg-purple-50 rounded-lg mb-1 flex items-center gap-1.5">
                        <span>⚽ Truyền hình FPT Play V.VIP</span>
                      </div>
                      <div className="space-y-1">
                        {FPT_PLAY_DROPDOWN_PACKAGES.map((pkg) => {
                          const pPrice = getPrice(pkg) || pkg.price;
                          const isSelected = chosenPkgId === pkg.id;
                          return (
                            <button
                              key={pkg.id}
                              type="button"
                              onClick={() => {
                                setChosenPkgId(pkg.id);
                                setIsDropdownOpen(false);
                              }}
                              className={`w-full text-left p-2 rounded-xl text-xs transition-colors flex items-center justify-between cursor-pointer ${
                                isSelected
                                  ? "bg-blue-50 text-[#004a9c] font-bold border border-blue-200"
                                  : "hover:bg-slate-50 text-slate-800"
                              }`}
                            >
                              <div className="truncate pr-2">
                                <div className="font-bold flex items-center gap-1">
                                  <span>{pkg.name}</span>
                                  <span className="text-[10px] text-slate-500 font-normal">({pkg.speed})</span>
                                </div>
                                <div className="text-[11px] text-[#f57020] font-bold">
                                  {pPrice.toLocaleString("vi-VN")} đ/tháng
                                </div>
                              </div>
                              {isSelected && <Check className="size-4 text-[#004a9c] shrink-0" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* HÌNH THỨC THANH TOÁN / CHU KỲ */}
              <div>
                <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-1">
                  Chu kỳ thanh toán ưu đãi
                </label>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => setBillingCycle("1M")}
                    className={`py-1.5 sm:py-2 px-1 text-[11px] sm:text-xs font-bold rounded-xl border transition-all text-center cursor-pointer ${
                      billingCycle === "1M"
                        ? "border-[#004a9c] bg-blue-50 text-[#004a9c]"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    Trả từng tháng
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingCycle("6M")}
                    className={`relative py-1.5 sm:py-2 px-1 text-[11px] sm:text-xs font-bold rounded-xl border transition-all text-center cursor-pointer ${
                      billingCycle === "6M"
                        ? "border-[#f57020] bg-orange-50 text-[#f57020]"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <span>Đóng 6 tháng</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingCycle("12M")}
                    className={`relative py-1.5 sm:py-2 px-1 text-[11px] sm:text-xs font-bold rounded-xl border transition-all text-center cursor-pointer ${
                      billingCycle === "12M"
                        ? "border-[#f57020] bg-orange-50 text-[#f57020]"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <span>Đóng 12 tháng</span>
                    <span className="block text-[9px] sm:text-[10px] text-emerald-600 font-extrabold leading-none mt-0.5">
                      +1 Tháng
                    </span>
                  </button>
                </div>
              </div>

              {/* HỌ VÀ TÊN & SỐ ĐIỆN THOẠI (2 CỘT GỌN GÀNG TRÊN CẢ MOBILE VÀ DESKTOP) */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-0.5">
                    Họ và tên *
                  </label>
                  <div className="relative">
                    <User className="h-3.5 w-3.5 text-slate-400 absolute left-2.5 top-2.5 sm:top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 text-xs sm:text-sm font-semibold text-slate-900 rounded-xl pl-7 sm:pl-8 pr-2 py-1.5 sm:py-2 outline-none focus:border-[#004a9c] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-0.5">
                    Số điện thoại *
                  </label>
                  <div className="relative">
                    <Phone className="h-3.5 w-3.5 text-slate-400 absolute left-2.5 top-2.5 sm:top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="09xx xxx xxx"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 text-xs sm:text-sm font-semibold text-slate-900 rounded-xl pl-7 sm:pl-8 pr-2 py-1.5 sm:py-2 outline-none focus:border-[#004a9c] focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* TỈNH / THÀNH & ĐỊA CHỈ HÒA MẠNG (2 CỘT GỌN GÀNG TRÊN CẢ MOBILE VÀ DESKTOP) */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-0.5 truncate">
                    Tỉnh / Thành phố
                  </label>
                  <select
                    value={provinceId}
                    onChange={(e) => setProvinceId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 text-xs sm:text-sm font-semibold text-slate-900 rounded-xl px-2 py-1.5 sm:py-2 outline-none focus:border-[#004a9c] focus:bg-white transition-all"
                  >
                    {PROVINCES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase mb-0.5 truncate">
                    Địa chỉ bàn giao
                  </label>
                  <div className="relative">
                    <MapPin className="h-3.5 w-3.5 text-slate-400 absolute left-2.5 top-2.5 sm:top-3" />
                    <input
                      type="text"
                      placeholder="Số nhà, đường..."
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 text-xs sm:text-sm font-semibold text-slate-900 rounded-xl pl-7 sm:pl-8 pr-2 py-1.5 sm:py-2 outline-none focus:border-[#004a9c] focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* TẠM TÍNH THEO TỈNH THÀNH */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-2 sm:p-2.5 flex items-center justify-between text-[11px] sm:text-xs">
                <span className="text-slate-600 font-medium">Giá cước tại {activeProvince.name}:</span>
                <span className="font-black text-[#F26F21] text-xs sm:text-sm">
                  {(pkgPrice * (billingCycle === "1M" ? 1 : billingCycle === "6M" ? 6 : 12)).toLocaleString("vi-VN")} đ
                  <span className="text-[10px] font-normal text-slate-400 ml-1">
                    ({billingCycle === "1M" ? "/tháng" : billingCycle === "6M" ? "/6 tháng" : "/12 tháng"})
                  </span>
                </span>
              </div>

              {/* CAM KẾT CHÍNH SÁCH */}
              <div className="flex items-center space-x-1.5 text-[10px] sm:text-[11px] text-slate-500 pt-0.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                <span className="leading-tight">
                  Bảo mật thông tin tuyệt đối. Triển khai dịch vụ tận nơi trong 24 giờ.
                </span>
              </div>

              {/* NÚT SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#f57020] hover:bg-[#e05e10] text-white py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all active:scale-[0.98] disabled:opacity-70 mt-1 cursor-pointer"
              >
                {isSubmitting ? "Đang gửi đăng ký..." : "Gửi Yêu Cầu Hòa Mạng Ngay"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
