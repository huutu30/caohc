"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  CheckCircle2,
  Sparkles,
  Phone,
  User,
  MapPin,
  ArrowRight,
  Wifi,
  Tv,
  Camera,
  Trophy,
  ShieldCheck,
} from "lucide-react";
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

// DANH SÁCH SẢN PHẨM / DỊCH VỤ QUAN TÂM
const INTERESTED_SERVICES = [
  { id: "internet", name: "Internet", icon: Wifi },
  { id: "truyen-hinh", name: "Truyền hình", icon: Tv },
  { id: "camera", name: "Camera", icon: Camera },
  { id: "combo-fpt-play", name: "Combo FPT Play", icon: Trophy },
  { id: "combo-camera", name: "Combo Camera", icon: ShieldCheck },
];

export default function RegisterModal() {
  const { isRegisterModalOpen, closeRegisterModal, selectedPackage } =
    useRegister();
  const { activeProvince, getPrice } = useRegion();

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [provinceId, setProvinceId] = useState(activeProvince.id);
  const [chosenPkgId, setChosenPkgId] = useState(
    selectedPackage?.id || "combo-sky-vvip"
  );
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "internet",
  ]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedPackage) {
      setChosenPkgId(selectedPackage.id);
      // Auto-detect service category
      const pkgName = selectedPackage.name?.toLowerCase() || "";
      if (pkgName.includes("combo") && pkgName.includes("camera")) {
        setSelectedServices(["combo-camera"]);
      } else if (pkgName.includes("camera")) {
        setSelectedServices(["camera"]);
      } else if (
        pkgName.includes("combo") ||
        pkgName.includes("play") ||
        pkgName.includes("ngoại hạng")
      ) {
        setSelectedServices(["combo-fpt-play"]);
      } else if (pkgName.includes("truyền hình")) {
        setSelectedServices(["truyen-hinh"]);
      } else {
        setSelectedServices(["internet"]);
      }
    }
  }, [selectedPackage]);

  useEffect(() => {
    setProvinceId(activeProvince.id);
  }, [activeProvince]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isRegisterModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isRegisterModalOpen]);

  if (!isRegisterModalOpen) return null;

  // Aggregate packages to compute price
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

  const rawPrice = getPrice(currentPkg);
  const pkgPrice: number = typeof rawPrice === "number" ? rawPrice : 0;

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id)
        ? prev.length > 1
          ? prev.filter((item) => item !== id)
          : prev
        : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber) return;

    setIsSubmitting(true);
    try {
      const serviceNames = selectedServices
        .map((id) => INTERESTED_SERVICES.find((s) => s.id === id)?.name)
        .filter(Boolean)
        .join(", ");

      const provinceName =
        PROVINCES.find((p) => p.id === provinceId)?.name ||
        activeProvince.name;

      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phoneNumber,
          province: provinceName,
          address,
          packageName: selectedPackage?.name || currentPkg?.name,
          price: pkgPrice,
          notes: `Dịch vụ quan tâm: ${serviceNames || "Internet"}`,
        }),
      });
    } catch (err) {
      console.error("Lỗi gửi form đăng ký:", err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFullName("");
    setPhoneNumber("");
    setAddress("");
    closeRegisterModal();
  };

  const displayName = selectedPackage?.name || currentPkg.name;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-[480px] max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* MODAL HEADER */}
        <div className="px-5 pt-5 pb-3 sm:px-6 sm:pt-6 flex items-start justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200 text-[#f57020] text-[10px] sm:text-xs font-bold mb-1.5">
              <Sparkles className="size-3" />
              <span>Tiếp nhận nhanh 24/7</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
              Đăng ký trực tiếp
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-snug">
              Chuyên viên của chúng tôi sẽ gọi lại trong vòng 5 phút
            </p>
          </div>

          <button
            onClick={handleResetAndClose}
            className="size-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors flex items-center justify-center cursor-pointer shrink-0 ml-2"
            aria-label="Đóng cửa sổ"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="px-5 pb-5 sm:px-6 sm:pb-6 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="text-center py-6 space-y-3.5">
              <div className="size-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border-4 border-emerald-100 animate-in zoom-in-95">
                <CheckCircle2 className="size-9" />
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                Đăng Ký Thành Công!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Cảm ơn Quý khách{" "}
                <span className="font-bold text-[#004a9c]">{fullName}</span>. Hệ
                thống FPT Telecom đã tiếp nhận yêu cầu hòa mạng{" "}
                <span className="font-bold text-[#f57020]">{displayName}</span>.
              </p>
              <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-2xl text-xs text-slate-700 font-medium max-w-sm mx-auto">
                📞 Chuyên viên tư vấn sẽ liên hệ lại qua số{" "}
                <strong className="text-[#004a9c] font-black">{phoneNumber}</strong>{" "}
                trong vòng 5 phút để bàn giao thiết bị.
              </div>
              <button
                onClick={handleResetAndClose}
                className="mt-2 px-6 py-2.5 rounded-full bg-[#0A3D91] hover:bg-[#072a66] text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
              >
                Hoàn tất
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              {/* SẢN PHẨM ĐANG CHỌN (BOX NỔI BẬT) */}
              <div className="bg-gradient-to-r from-blue-50/70 via-slate-50 to-orange-50/60 rounded-2xl p-3 sm:p-3.5 border border-blue-100 flex items-center justify-between gap-2 shadow-xs">
                <div className="min-w-0">
                  <span className="text-xs sm:text-sm text-slate-600 font-medium">
                    Sản phẩm đang chọn:{" "}
                  </span>
                  <strong className="text-xs sm:text-sm font-black text-[#004a9c]">
                    {displayName}
                  </strong>
                  {currentPkg?.speed && (
                    <span className="text-[11px] sm:text-xs text-slate-500 font-normal ml-1">
                      ({currentPkg.speed})
                    </span>
                  )}
                </div>
                {pkgPrice > 0 && (
                  <div className="shrink-0 text-right">
                    <span className="text-xs sm:text-sm font-extrabold text-[#f57020] whitespace-nowrap">
                      {pkgPrice.toLocaleString("vi-VN")} đ/th
                    </span>
                  </div>
                )}
              </div>

              {/* HÀNG 1: HỌ VÀ TÊN & SỐ ĐIỆN THOẠI (2 CỘT) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {/* HỌ VÀ TÊN */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Họ và tên <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User className="size-4" />
                    </div>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#004a9c] focus:ring-2 focus:ring-blue-500/15 transition-all text-slate-900 placeholder:text-slate-400 font-medium"
                    />
                  </div>
                </div>

                {/* SỐ ĐIỆN THOẠI */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Phone className="size-4" />
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="0912 345 678"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#004a9c] focus:ring-2 focus:ring-blue-500/15 transition-all text-slate-900 placeholder:text-slate-400 font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* HÀNG 2: ĐỊA CHỈ ĐĂNG KÝ DỊCH VỤ */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Địa chỉ đăng ký dịch vụ <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <MapPin className="size-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Số nhà, tên đường, phường/xã, quận/huyện..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 text-base sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#004a9c] focus:ring-2 focus:ring-blue-500/15 transition-all text-slate-900 placeholder:text-slate-400 font-medium"
                  />
                </div>
              </div>

              {/* HÀNG 3: SẢN PHẨM QUAN TÂM (PILL TAGS CÓ ICON) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Sản phẩm quan tâm
                </label>
                <div className="flex flex-wrap gap-2">
                  {INTERESTED_SERVICES.map((srv) => {
                    const isSelected = selectedServices.includes(srv.id);
                    const Icon = srv.icon;
                    return (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => toggleService(srv.id)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl sm:rounded-2xl text-xs font-bold transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                          isSelected
                            ? "bg-gradient-to-r from-[#e05408] via-[#f57020] to-[#ff7d2e] text-white shadow-md shadow-orange-500/25 border border-transparent"
                            : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200"
                        }`}
                      >
                        <Icon
                          className={`size-3.5 shrink-0 ${
                            isSelected ? "text-white" : "text-slate-500"
                          }`}
                        />
                        <span>{srv.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* NÚT GỬI YÊU CẦU */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#081c47] hover:bg-[#0c265f] text-white py-3.5 px-6 rounded-2xl font-black text-sm tracking-wider uppercase shadow-xl shadow-blue-950/20 hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-70 disabled:cursor-not-allowed group border border-blue-900/40"
                >
                  <span>
                    {isSubmitting ? "Đang gửi yêu cầu..." : "GỬI YÊU CẦU"}
                  </span>
                  <ArrowRight className="size-4.5 text-amber-300 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="text-center text-[11px] text-slate-400 mt-2.5">
                  🔒 Bảo mật thông tin tuyệt đối • Khảo sát & tư vấn hoàn toàn miễn phí
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
