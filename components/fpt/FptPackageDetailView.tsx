"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Wifi,
  Tv,
  ShieldCheck,
  Check,
  ChevronRight,
  PhoneCall,
  Clock,
  Sparkles,
  Send,
  MapPin,
} from "lucide-react";
import FptProductCard from "@/components/fpt/FptProductCard";
import { FPT_PACKAGES } from "@/data/fptPackages";
import { useRegion } from "@/context/RegionContext";

export interface PackageDetailData {
  id: string;
  name: string;
  category: "internet" | "combo";
  categoryName: string;
  badge?: string;
  price: number | { hcm: number; tinh: number };
  originalPrice?: number;
  downloadSpeed: string;
  uploadSpeed: string;
  image: string;
  modem: string;
  recommendedDevices: string;
  description: string;
  features: string[];
}

interface FptPackageDetailViewProps {
  data: PackageDetailData;
}

export default function FptPackageDetailView({ data }: FptPackageDetailViewProps) {
  const { activeProvince, getPrice } = useRegion();
  const [billingCycle, setBillingCycle] = useState<"1M" | "6M" | "12M">("6M");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const currentPrice =
    getPrice(data) ||
    (typeof data.price === "number" ? data.price : data.price?.tinh || 0);
  const formattedPrice = new Intl.NumberFormat("vi-VN").format(currentPrice);
  
  // Calculate price based on cycle
  const cycleMultiplier = billingCycle === "1M" ? 1 : billingCycle === "6M" ? 6 : 12;
  const totalAmount = currentPrice * cycleMultiplier;
  const formattedTotal = new Intl.NumberFormat("vi-VN").format(totalAmount);

  // Speed numbers for hero display
  const isGbps = data.downloadSpeed.toLowerCase().includes("gbps");
  const speedNumber = data.downloadSpeed.replace(/[^0-9.]/g, "") || "1";
  const speedUnit = isGbps ? "Gbps" : "Mbps";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 9) {
      alert("Vui lòng nhập số điện thoại hợp lệ.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  // Related packages
  const relatedPackages = FPT_PACKAGES.filter((p) => p.id !== data.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-20">
      {/* BREADCRUMB */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center text-xs text-slate-500 gap-1.5 flex-wrap">
            <Link href="/" className="hover:text-[#004a9c] transition-colors">
              Trang chủ
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <Link
              href={data.category === "combo" ? "/goi-cuoc/combo" : "/goi-cuoc/internet"}
              className="hover:text-[#004a9c] transition-colors"
            >
              {data.category === "combo" ? "Combo Internet & Truyền hình" : "Gói cước Internet"}
            </Link>
            <ChevronRight className="size-3 text-slate-400" />
            <span className="font-semibold text-slate-800">{data.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* HERO TITLE (MATCHING FPT.VN H1) */}
        <div className="text-center mb-8">
          {data.badge && (
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#F26F21]/10 text-[#F26F21] mb-3">
              <Sparkles className="size-3.5" />
              <span>{data.badge}</span>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-tight">
            {data.name}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>

          {/* ACTIVE LOCATION PILL */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700">
            <MapPin className="size-3.5 text-[#F26F21]" />
            <span>Khu vực áp dụng: </span>
            <span className="text-[#004a9c] font-bold">{activeProvince.name}</span>
          </div>
        </div>

        {/* 3 HIGHLIGHT METRIC CARDS (MATCHING FPT.VN EXACT GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-10">
          {/* CARD 1: GIÁ CƯỚC */}
          <div className="rounded-2xl bg-white p-6 text-center border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">
              Giá cước hàng tháng
            </p>
            <div className="flex items-baseline justify-center gap-1.5">
              <span className="text-sm text-slate-500 font-medium">Chỉ từ</span>
              <span className="bg-gradient-to-r from-[#0593EB] to-[#1057CB] bg-clip-text text-3xl sm:text-4xl lg:text-5xl font-black text-transparent">
                {formattedPrice}đ
              </span>
              <span className="text-sm text-slate-500 font-medium">/tháng</span>
            </div>
            <p className="text-xs text-slate-400 mt-2 font-medium">
              (Đã bao gồm 10% thuế VAT)
            </p>
          </div>

          {/* CARD 2: TỐC ĐỘ (DOWNLOAD/UPLOAD) */}
          <div className="rounded-2xl bg-white p-6 text-center border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center items-center">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Zap className="size-4 text-[#F26F21]" />
              <span>Tốc độ (Download/Upload)</span>
            </p>
            <div className="flex items-baseline justify-center gap-1.5">
              <span className="bg-gradient-to-r from-[#EB2E0F] to-[#F6921E] bg-clip-text text-3xl sm:text-4xl lg:text-5xl font-black text-transparent">
                {speedNumber}
              </span>
              <span className="text-lg font-black text-slate-800">{speedUnit}</span>
              <span className="text-sm text-slate-500 font-medium">
                / {data.uploadSpeed}
              </span>
            </div>
            <p className="text-xs text-emerald-600 font-bold mt-2 flex items-center gap-1">
              <Check className="size-3.5 stroke-[3]" />
              Băng thông không giới hạn
            </p>
          </div>

          {/* CARD 3: THIẾT BỊ KẾT NỐI */}
          <div className="rounded-2xl bg-white p-6 text-center border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-center items-center">
            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Wifi className="size-4 text-[#004a9c]" />
              <span>Thiết bị kết nối khuyên dùng</span>
            </p>
            <div className="text-2xl sm:text-3xl font-black text-slate-800">
              {data.recommendedDevices}
            </div>
            <p className="text-xs text-slate-500 mt-2 line-clamp-1 max-w-[240px]">
              {data.modem}
            </p>
          </div>
        </div>

        {/* MAIN 2-COLUMN LAYOUT: SPECS & FORM */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* LEFT 7 COLS: DETAILED SPECS, INCLUDED GIFTS, AND PRIVILEGES */}
          <div className="lg:col-span-7 space-y-8">
            {/* SECTION 1: THÔNG TIN CHI TIẾT (MATCHING FPT.VN) */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl font-black text-[#101828] mb-6 flex items-center gap-2">
                <span>Thông tin chi tiết</span>
              </h2>

              <div className="space-y-4">
                {data.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="size-5 rounded-full bg-[#17ba58]/15 text-[#17ba58] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="size-3.5 stroke-[3]" />
                    </div>
                    <span className="leading-relaxed font-medium">{feature}</span>
                  </div>
                ))}
                
                {/* Standard FPT Perks */}
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="size-5 rounded-full bg-[#17ba58]/15 text-[#17ba58] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="size-3.5 stroke-[3]" />
                  </div>
                  <span className="leading-relaxed font-medium">
                    Trang bị miễn phí Modem Wi-Fi 6 thế hệ mới băng tần kép AX3000 hoặc AX1800 xuyên tường cực tốt.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="size-5 rounded-full bg-[#17ba58]/15 text-[#17ba58] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="size-3.5 stroke-[3]" />
                  </div>
                  <span className="leading-relaxed font-medium">
                    Thủ tục hòa mạng đơn giản, tiếp nhận nhanh chỉ cần CCCD người đứng tên.
                  </span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <div className="size-5 rounded-full bg-[#17ba58]/15 text-[#17ba58] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="size-3.5 stroke-[3]" />
                  </div>
                  <span className="leading-relaxed font-medium">
                    Đội ngũ triển khai dịch vụ chuyên nghiệp, bàn giao thiết bị hoàn tất trong vòng 24 - 48 giờ.
                  </span>
                </div>
              </div>
            </div>

            {/* SECTION 2: NHẬN THÊM TRONG GÓI NÀY (MATCHING FPT.VN) */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl font-black text-[#101828] mb-6">
                Nhận thêm trong gói này
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Item 1: Modem Wi-Fi 6 */}
                <div className="rounded-xl border border-slate-200 p-4 bg-[#F8F9FA] flex flex-col items-center text-center">
                  <div className="relative size-28 mb-3">
                    <Image
                      src={data.image}
                      alt="Modem Wi-Fi 6"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-black text-slate-900 text-sm mb-1">
                    Modem Wi-Fi 6 Băng Tần Kép
                  </h3>
                  <p className="text-xs text-slate-500 leading-snug">
                    Trang bị miễn phí theo hợp đồng, chuẩn công nghệ AX giảm giật lag 75%.
                  </p>
                </div>

                {/* Item 2: FPT Play Box hoặc Cloud */}
                <div className="rounded-xl border border-slate-200 p-4 bg-[#F8F9FA] flex flex-col items-center text-center">
                  <div className="relative size-28 mb-3">
                    <Image
                      src={data.category === "combo" ? "/images/product-tv-entertainment.png" : "/images/product-camera.png"}
                      alt="Quà tặng FPT"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="font-black text-slate-900 text-sm mb-1">
                    {data.category === "combo" ? "Đầu Thu FPT Play Box 4K" : "Ưu Đãi Cloud FPT Camera"}
                  </h3>
                  <p className="text-xs text-slate-500 leading-snug">
                    {data.category === "combo"
                      ? "Xem 380 trận Ngoại Hạng Anh bản quyền, điều khiển giọng nói tiếng Việt."
                      : "Tặng gói lưu trữ đám mây bảo mật chuẩn an ninh khi đăng ký kèm camera."}
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 3: ĐẶC QUYỀN DÀNH RIÊNG CHO BẠN (MATCHING FPT.VN) */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl font-black text-[#101828] mb-6">
                Đặc quyền dành riêng cho bạn
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8F9FA] border border-slate-100">
                  <div className="size-10 rounded-xl bg-blue-50 text-[#004a9c] flex items-center justify-center shrink-0">
                    <Zap className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">
                      Tốc độ Internet vượt trội
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Hạ tầng cáp quang FTTH ổn định, xem phim 4K và tải game mượt mà không delay.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8F9FA] border border-slate-100">
                  <div className="size-10 rounded-xl bg-orange-50 text-[#F26F21] flex items-center justify-center shrink-0">
                    <Tv className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">
                      Giải trí không giới hạn
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Thưởng thức kho nội dung phong phú, thể thao đỉnh cao độc quyền trên đa thiết bị.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8F9FA] border border-slate-100">
                  <div className="size-10 rounded-xl bg-emerald-50 text-[#17ba58] flex items-center justify-center shrink-0">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">
                      Bảo hành thiết bị chu đáo
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Thiết bị modem và đầu thu được bảo hành chính hãng trong suốt thời gian sử dụng.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F8F9FA] border border-slate-100">
                  <div className="size-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm mb-1">
                      Triển khai nhanh chóng
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Đội ngũ kỹ thuật tiếp nhận thông tin và triển khai bàn giao tận nơi đúng hẹn.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 5 COLS: STICKY CONSULTATION & REGISTRATION FORM */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border-2 border-[#F26F21]/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#F26F21] text-white text-[11px] font-black uppercase px-4 py-1.5 rounded-bl-xl shadow-sm">
                Ưu đãi hôm nay
              </div>

              <h2 className="text-xl font-black text-[#101828] mb-1">
                Đăng ký hòa mạng ngay
              </h2>
              <p className="text-xs text-slate-500 mb-5">
                Nhận tư vấn cước khuyến mại và khảo sát đường truyền tại nhà miễn phí
              </p>

              {/* BILLING CYCLE SELECTOR */}
              <div className="space-y-2 mb-5">
                <label className="text-xs font-bold text-slate-700 block">
                  Chọn hình thức thanh toán ưu đãi:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setBillingCycle("1M")}
                    className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                      billingCycle === "1M"
                        ? "border-[#F26F21] bg-orange-50 text-[#F26F21]"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    Từng tháng
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingCycle("6M")}
                    className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all relative cursor-pointer ${
                      billingCycle === "6M"
                        ? "border-[#F26F21] bg-orange-50 text-[#F26F21]"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <span>6 Tháng</span>
                    <span className="block text-[10px] text-emerald-600 font-extrabold">+1 Tháng</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBillingCycle("12M")}
                    className={`py-2 px-1 text-center rounded-xl text-xs font-bold border transition-all relative cursor-pointer ${
                      billingCycle === "12M"
                        ? "border-[#F26F21] bg-orange-50 text-[#F26F21]"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <span>12 Tháng</span>
                    <span className="block text-[10px] text-emerald-600 font-extrabold">+2 Tháng</span>
                  </button>
                </div>
              </div>

              {/* ESTIMATED SUMMARY BOX */}
              <div className="bg-[#F8F9FA] rounded-xl p-4 border border-slate-200 mb-5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Gói cước lựa chọn:</span>
                  <span className="font-bold text-slate-900">{data.name}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Tốc độ truy cập:</span>
                  <span className="font-bold text-[#004a9c]">{data.downloadSpeed}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500">Ưu đãi kèm theo:</span>
                  <span className="font-bold text-emerald-600">
                    {billingCycle === "1M"
                      ? "Modem Wi-Fi 6"
                      : billingCycle === "6M"
                      ? "Tặng 01 tháng cước + Modem"
                      : "Tặng 02 tháng cước + Quà FPT"}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex items-baseline justify-between">
                  <span className="text-xs font-bold text-slate-700">Tạm tính thanh toán:</span>
                  <span className="text-xl font-black text-[#F26F21]">
                    {formattedTotal}đ
                  </span>
                </div>
              </div>

              {/* REGISTRATION FORM */}
              {isSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center text-emerald-800">
                  <div className="size-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-2 font-bold">
                    ✓
                  </div>
                  <h3 className="font-bold text-sm mb-1">Gửi thông tin thành công!</h3>
                  <p className="text-xs text-emerald-700">
                    Chuyên viên FPT Telecom sẽ liên hệ lại với bạn qua số <strong>{phone}</strong> trong ít phút để xác nhận địa chỉ và hoàn tất đăng ký.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Họ và tên của bạn <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F26F21] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Số điện thoại liên hệ <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0902 xxx xxx"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F26F21] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Địa chỉ dự kiến hòa mạng <span className="text-slate-400 font-normal">(Số nhà, tên đường, Phường/Xã)</span>
                    </label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Ví dụ: 124 Hoàng Quốc Việt, Cầu Giấy, Hà Nội"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F26F21] focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#F26F21] hover:bg-[#E05E10] text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 mt-2"
                  >
                    <Send className="size-4" />
                    <span>{isSubmitting ? "Đang gửi thông tin..." : "Gửi thông tin đăng ký ngay"}</span>
                  </button>
                </form>
              )}

              {/* DIRECT HOTLINE */}
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span>Cần tư vấn trực tiếp ngay?</span>
                <a
                  href="tel:0902184284"
                  className="font-black text-[#F26F21] hover:underline flex items-center gap-1 text-sm"
                >
                  <PhoneCall className="size-3.5" />
                  0902.184.284
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED PACKAGES SECTION */}
        <div className="mt-16 pt-10 border-t border-slate-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#101828]">
              Các gói cước liên quan được ưa chuộng
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Khám phá thêm các phương án kết nối tốc độ cao phù hợp nhu cầu của bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPackages.map((pkg) => (
              <FptProductCard
                key={pkg.id}
                item={{
                  id: pkg.id,
                  name: pkg.name,
                  category: pkg.category,
                  badge: pkg.badge,
                  isPopular: pkg.isHot,
                  image: pkg.image,
                  price: pkg.price,
                  speed: pkg.downloadSpeed,
                  uploadSpeed: pkg.uploadSpeed,
                  equipment: pkg.modem,
                  features: pkg.features,
                  description: pkg.description,
                  recommendedDevices: pkg.recommendedDevices,
                  detailUrl: `/goi-cuoc/internet/${pkg.id}`
                }}
              />
            ))}
          </div>
        </div>

        {/* GOOGLE ADS POLICY MANDATORY DISCLAIMER */}
        <div className="mt-16 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-500 text-center leading-relaxed">
          <p>
            <strong>Thông báo minh bạch:</strong> Trang web là kênh thông tin và tiếp nhận đăng ký hòa mạng mới các dịch vụ viễn thông của FPT Telecom. Chúng tôi không tiếp nhận sửa chữa, xử lý sự cố kỹ thuật hay báo hỏng thiết bị. Quý khách có nhu cầu kiểm tra kỹ thuật vui lòng liên hệ ứng dụng chính thức Hi FPT.
          </p>
        </div>
      </div>
    </div>
  );
}
