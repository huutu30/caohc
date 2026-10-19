"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ShieldCheck, Sparkles, Phone, User, MapPin } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";
import { useRegion, PROVINCES } from "@/context/RegionContext";
import { FPT_PACKAGES } from "@/data/fptPackages";

export default function RegisterModal() {
  const { isRegisterModalOpen, closeRegisterModal, selectedPackage } = useRegister();
  const { activeProvince, getPrice } = useRegion();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [provinceId, setProvinceId] = useState(activeProvince.id);
  const [billingCycle, setBillingCycle] = useState<"1M" | "6M" | "12M">("6M");
  const [chosenPkgId, setChosenPkgId] = useState(selectedPackage?.id || "sky");
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

  if (!isRegisterModalOpen) return null;

  const currentPkg = FPT_PACKAGES.find((p) => p.id === chosenPkgId) || FPT_PACKAGES[1];
  const selectedPrice = selectedPackage
    ? "price" in selectedPackage
      ? selectedPackage.price
      : selectedPackage.priceNgoaiThanh
    : 0;
  const pkgPrice = selectedPrice || getPrice(currentPkg) || currentPkg.price;

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
    setFullName("");
    setPhoneNumber("");
    setAddress("");
    closeRegisterModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL HEADER */}
        <div className="bg-gradient-to-r from-[#004a9c] to-[#002f6c] p-6 text-white relative">
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="h-4 w-4" />
            <span>Tiếp Nhận Hòa Mạng Mới 24H</span>
          </div>
          <h3 className="text-xl font-black text-white">
            Đăng Ký Trực Tuyến FPT Telecom
          </h3>
          <p className="text-xs text-blue-100 mt-1">
            Chuyên viên tư vấn sẽ liên hệ ngay trong 5 - 15 phút để hoàn tất thủ tục
          </p>
        </div>

        {/* MODAL BODY */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="h-16 w-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">
                Đăng Ký Thành Công!
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Cảm ơn Quý khách <span className="font-bold text-[#004a9c]">{fullName}</span>. 
                Hệ thống FPT Telecom đã tiếp nhận thông tin gói cước{" "}
                <span className="font-bold text-[#f57020]">{currentPkg.name}</span>.
                Chuyên viên triển khai dịch vụ sẽ gọi lại qua số{" "}
                <span className="font-bold">{phoneNumber}</span> trong ít phút.
              </p>
              <button
                onClick={handleResetAndClose}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#004a9c] text-white font-bold text-sm hover:bg-[#003875] transition-colors"
              >
                Đóng thông báo
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* CHỌN GÓI CƯỚC */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Gói cước đã chọn
                </label>
                <select
                  value={chosenPkgId}
                  onChange={(e) => setChosenPkgId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 text-sm font-bold text-slate-900 rounded-xl px-3.5 py-2.5 outline-none focus:border-[#004a9c] focus:bg-white transition-all"
                >
                  {FPT_PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name} - {pkg.downloadSpeed} ({(getPrice(pkg) || pkg.price).toLocaleString("vi-VN")} đ/tháng)
                    </option>
                  ))}
                </select>
              </div>

              {/* HÌNH THỨC THANH TOÁN / CHU KỲ */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1.5">
                  Chu kỳ thanh toán ưu đãi
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setBillingCycle("1M")}
                    className={`py-2 px-2 text-xs font-bold rounded-xl border transition-all text-center ${
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
                    className={`relative py-2 px-2 text-xs font-bold rounded-xl border transition-all text-center ${
                      billingCycle === "6M"
                        ? "border-[#f57020] bg-orange-50 text-[#f57020]"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <span>Đóng 6 tháng</span>
                    <span className="block text-[10px] text-emerald-600 font-extrabold">
                      +1 Tháng
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingCycle("12M")}
                    className={`relative py-2 px-2 text-xs font-bold rounded-xl border transition-all text-center ${
                      billingCycle === "12M"
                        ? "border-[#f57020] bg-orange-50 text-[#f57020]"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <span>Đóng 12 tháng</span>
                    <span className="block text-[10px] text-red-500 font-extrabold">
                      +2 Tháng
                    </span>
                  </button>
                </div>
              </div>

              {/* HỌ VÀ TÊN & SỐ ĐIỆN THOẠI */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Họ và tên *
                  </label>
                  <div className="relative">
                    <User className="h-4 w-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 text-sm font-semibold text-slate-900 rounded-xl pl-9 pr-3 py-2.5 outline-none focus:border-[#004a9c] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Số điện thoại *
                  </label>
                  <div className="relative">
                    <Phone className="h-4 w-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="09xx xxx xxx"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 text-sm font-semibold text-slate-900 rounded-xl pl-9 pr-3 py-2.5 outline-none focus:border-[#004a9c] focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* TỈNH / THÀNH & ĐỊA CHỈ HÒA MẠNG */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Tỉnh / Thành phố
                  </label>
                  <select
                    value={provinceId}
                    onChange={(e) => setProvinceId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 text-sm font-semibold text-slate-900 rounded-xl px-3 py-2.5 outline-none focus:border-[#004a9c] focus:bg-white transition-all"
                  >
                    {PROVINCES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Địa chỉ bàn giao thiết bị
                  </label>
                  <div className="relative">
                    <MapPin className="h-4 w-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Số nhà, tên đường, phường..."
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 text-sm font-semibold text-slate-900 rounded-xl pl-9 pr-3 py-2.5 outline-none focus:border-[#004a9c] focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* TẠM TÍNH THEO TỈNH THÀNH */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between text-xs">
                <span className="text-slate-600 font-medium">Giá cước tại {activeProvince.name}:</span>
                <span className="font-black text-[#F26F21] text-sm">
                  {(pkgPrice * (billingCycle === "1M" ? 1 : billingCycle === "6M" ? 6 : 12)).toLocaleString("vi-VN")} đ
                  <span className="text-[10px] font-normal text-slate-400 ml-1">
                    ({billingCycle === "1M" ? "/tháng" : billingCycle === "6M" ? "/6 tháng" : "/12 tháng"})
                  </span>
                </span>
              </div>

              {/* CAM KẾT CHÍNH SÁCH */}
              <div className="flex items-center space-x-2 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>
                  Bảo mật thông tin khách hàng tuyệt đối. Triển khai dịch vụ tận nơi trong 24 giờ.
                </span>
              </div>

              {/* NÚT SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#f57020] hover:bg-[#e05e10] text-white py-3.5 rounded-2xl font-black text-base shadow-lg hover:shadow-xl transition-all active:scale-[0.98] disabled:opacity-70 mt-2"
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
