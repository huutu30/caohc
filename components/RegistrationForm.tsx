"use client";

import * as React from "react";
import {
  User,
  Phone,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { INTERNET_PACKAGES, COMBO_PACKAGES, VIETNAM_PROVINCES } from "@/lib/packages";
import { isValidVietnamesePhone } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface RegistrationFormProps {
  initialPackageId?: string;
  className?: string;
}

export default function RegistrationForm({
  initialPackageId,
  className,
}: RegistrationFormProps) {
  const [fullName, setFullName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [province, setProvince] = React.useState("Hà Nội");
  const [address, setAddress] = React.useState("");
  const [selectedPackage, setSelectedPackage] = React.useState(
    initialPackageId || "sky-300"
  );
  const [notes, setNotes] = React.useState("");

  // Validation errors
  const [phoneError, setPhoneError] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = React.useState(false);

  // Update selected package if prop changes
  React.useEffect(() => {
    if (initialPackageId) {
      setSelectedPackage(initialPackageId);
    }
  }, [initialPackageId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    if (!fullName.trim()) {
      setNameError("Vui lòng nhập họ và tên của bạn");
      hasError = true;
    } else {
      setNameError("");
    }

    if (!phoneNumber.trim()) {
      setPhoneError("Vui lòng nhập số điện thoại liên hệ");
      hasError = true;
    } else if (!isValidVietnamesePhone(phoneNumber)) {
      setPhoneError("Số điện thoại không đúng định dạng Việt Nam (10 số, bắt đầu bằng 03, 05, 07, 08, 09)");
      hasError = true;
    } else {
      setPhoneError("");
    }

    if (hasError) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessDialog(true);
    }, 800);
  };

  const handleReset = () => {
    setShowSuccessDialog(false);
    setFullName("");
    setPhoneNumber("");
    setAddress("");
    setNotes("");
  };

  const allPackages = [
    ...INTERNET_PACKAGES.map((p) => ({ id: p.id, label: `Internet ${p.name} - ${p.speed}` })),
    ...COMBO_PACKAGES.map((c) => ({ id: c.id, label: `Combo ${c.name} - ${c.speed}` })),
  ];

  return (
    <section id="dang-ky-tu-van" className={`py-16 sm:py-24 bg-gradient-to-b from-blue-50/50 to-white ${className || ""}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-white shadow-2xl border border-slate-200/90 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* LEFT BANNER / BRAND PROMISE */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-blue to-blue-950 p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                Đăng ký trực tuyến
              </span>
              <h3 className="text-2xl sm:text-3xl font-black leading-tight text-white">
                Tư Vấn Miễn Phí <br />
                <span className="text-brand-orange">Lắp Đặt Trong 24H</span>
              </h3>
              <p className="mt-4 text-blue-100 text-sm leading-relaxed">
                Để lại thông tin, chuyên viên FPT Telecom sẽ liên hệ lại trong vòng 5 phút để tư vấn gói cước tối ưu và sắp xếp lịch hòa mạng thuận tiện nhất cho bạn.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-200">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <span>Miễn phí 100% thiết bị Modem WiFi 6</span>
                </div>
                <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-200">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <span>Tặng thêm tới 2 tháng cước sử dụng</span>
                </div>
                <div className="flex items-center space-x-3 text-xs sm:text-sm text-slate-200">
                  <div className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <span>Thủ tục CCCD đơn giản, ký hợp đồng điện tử</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 mt-8 border-t border-white/15">
              <p className="text-xs text-blue-200">Hotline đăng ký thuê bao:</p>
              <a
                href="tel:0775780962"
                className="text-2xl font-black text-amber-400 hover:underline tracking-wide block mt-1"
              >
                0775 780 962
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-7 p-8 sm:p-10">
            <h4 className="text-xl font-bold text-slate-900 mb-6">
              Điền thông tin đăng ký dịch vụ
            </h4>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* HỌ VÀ TÊN */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Họ và tên của bạn <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    placeholder="VD: Nguyễn Văn An"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (nameError) setNameError("");
                    }}
                    className={nameError ? "border-red-500" : ""}
                  />
                  <User className="absolute right-3.5 top-3.5 h-5 w-5 text-slate-400 pointer-events-none" />
                </div>
                {nameError && (
                  <p className="text-xs text-red-500 mt-1 font-semibold">{nameError}</p>
                )}
              </div>

              {/* SỐ ĐIỆN THOẠI */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Số điện thoại liên hệ <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Input
                    placeholder="VD: 0775780962 (10 chữ số)"
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (phoneError) setPhoneError("");
                    }}
                    className={phoneError ? "border-red-500" : ""}
                  />
                  <Phone className="absolute right-3.5 top-3.5 h-5 w-5 text-slate-400 pointer-events-none" />
                </div>
                {phoneError && (
                  <p className="text-xs text-red-500 mt-1 font-semibold">{phoneError}</p>
                )}
              </div>

              {/* TỈNH THÀNH & ĐỊA CHỈ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Tỉnh / Thành phố <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full h-12 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    {VIETNAM_PROVINCES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Địa chỉ lắp đặt
                  </label>
                  <Input
                    placeholder="Số nhà, đường, phường/xã"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              {/* GÓI CƯỚC QUAN TÂM */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Gói cước bạn quan tâm
                </label>
                <div className="relative">
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="w-full h-12 rounded-xl border border-slate-200 bg-white px-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    {allPackages.map((pkg) => (
                      <option key={pkg.id} value={pkg.id}>
                        {pkg.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* GHI CHÚ */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Ghi chú hoặc yêu cầu thời gian gọi lại
                </label>
                <textarea
                  rows={2}
                  placeholder="Ví dụ: Gọi cho tôi sau 18h, cần tư vấn thêm gói truyền hình..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="default"
                  className="w-full h-12 rounded-xl font-bold text-base shadow-cta hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Đang gửi thông tin...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>Gửi Yêu Cầu Đăng Ký Lắp Đặt</span>
                    </div>
                  )}
                </Button>
              </div>

              <p className="text-center text-[11px] text-slate-400 mt-2">
                🔒 Thông tin của bạn được cam kết bảo mật 100% theo chính sách FPT Telecom
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* CONFIRMATION DIALOG MODAL */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <div className="text-center py-2">
          <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-10 w-10 animate-bounce" />
          </div>

          <DialogTitle className="text-2xl font-black text-slate-900 text-center">
            Đăng Ký Thành Công!
          </DialogTitle>

          <DialogDescription className="text-slate-600 text-sm mt-2 text-center max-w-sm mx-auto">
            Cảm ơn quý khách <span className="font-bold text-slate-900">{fullName}</span> đã gửi yêu cầu.
            Chuyên viên FPT Telecom sẽ liên hệ lại số điện thoại <span className="font-bold text-brand-blue">{phoneNumber}</span> trong vòng 5 - 15 phút tới để hoàn tất thủ tục.
          </DialogDescription>

          <div className="mt-5 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-left text-xs space-y-2 text-slate-600">
            <p>
              <strong className="text-slate-800">Địa chỉ lắp đặt:</strong> {address || "Chưa cung cấp cụ thể"}, {province}
            </p>
            <p>
              <strong className="text-slate-800">Gói cước lựa chọn:</strong>{" "}
              {allPackages.find((p) => p.id === selectedPackage)?.label}
            </p>
            <p>
              <strong className="text-slate-800">Thời gian cam kết triển khai:</strong> Trong 24 giờ
            </p>
          </div>

          <DialogFooter className="mt-6 flex-col sm:flex-row gap-2">
            <Button
              onClick={handleReset}
              variant="default"
              className="w-full font-bold"
            >
              Hoàn tất & Đóng
            </Button>
          </DialogFooter>
        </div>
      </Dialog>
    </section>
  );
}
