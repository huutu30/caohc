"use client";

import * as React from "react";
import Link from "next/link";
import {
  Send,
  CheckCircle2,
  ChevronRight,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  const [fullName, setFullName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [service, setService] = React.useState("internet");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const serviceLabels: Record<string, string> = {
    internet: "Internet Cáp Quang Wi-Fi 6",
    combo: "Combo Internet + Truyền hình FPT Play",
    camera: "FPT Camera An Ninh Cloud",
    enterprise: "Internet Doanh Nghiệp IP Tĩnh",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;

    setIsSubmitting(true);
    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          phoneNumber: phone,
          address,
          packageName: serviceLabels[service] || service,
          notes: "Khách gửi yêu cầu từ trang Liên hệ (/lien-he)",
        }),
      });
    } catch (err) {
      console.error("Lỗi gửi liên hệ:", err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

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
            <span className="font-semibold text-slate-800">Liên hệ</span>
          </nav>
        </div>
      </div>

      {/* HEADER */}
      <section className="bg-white border-b border-slate-200/80 py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-[#101828]">
            Liên Hệ Đăng Ký Dịch Vụ FPT Telecom
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Hệ thống tiếp nhận đăng ký hòa mạng mới các dịch vụ Internet Cáp Quang, Combo FPT Play và Camera An Ninh trên toàn quốc.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT - FORM CENTERED */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-14">
        <div className="max-w-xl mx-auto">
          {/* CONSULTATION FORM */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101828] mb-2">
              Đăng Ký Tư Vấn Gói Cước
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Chuyên viên FPT Telecom sẽ liên hệ lại trong vòng 10 phút để báo giá và kiểm tra hạ tầng chi tiết.
            </p>

            {isSuccess ? (
              <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="size-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="font-bold text-emerald-900 text-lg">
                  Gửi yêu cầu thành công!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed">
                  Cảm ơn quý khách. Đội ngũ tiếp nhận FPT Telecom sẽ gọi lại qua số điện thoại <b>{phone}</b> trong ít phút.
                </p>
                <Button
                  onClick={() => {
                    setIsSuccess(false);
                    setFullName("");
                    setPhone("");
                    setAddress("");
                  }}
                  variant="outline"
                  className="text-xs font-semibold mt-2"
                >
                  Gửi yêu cầu khác
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs sm:text-sm font-semibold text-slate-700 block mb-1.5">
                    Họ và tên quý khách <span className="text-red-500">*</span>
                  </label>
                  <Input
                    required
                    placeholder="Ví dụ: Nguyễn Văn A"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="rounded-xl h-11 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-semibold text-slate-700 block mb-1.5">
                    Số điện thoại liên hệ <span className="text-red-500">*</span>
                  </label>
                  <Input
                    required
                    type="tel"
                    placeholder="Ví dụ: 0912 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-xl h-11 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-semibold text-slate-700 block mb-1.5">
                    Địa chỉ đăng ký hòa mạng <span className="text-red-500">*</span>
                  </label>
                  <Input
                    required
                    placeholder="Số nhà, tên đường, phường/xã, quận/huyện"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="rounded-xl h-11 text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs sm:text-sm font-semibold text-slate-700 block mb-1.5">
                    Dịch vụ quan tâm
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full h-11 px-3.5 rounded-xl border border-input bg-background text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F26F21]"
                  >
                    <option value="internet">Internet Cáp Quang Wi-Fi 6</option>
                    <option value="combo">Combo Internet + Truyền hình FPT Play</option>
                    <option value="camera">FPT Camera An Ninh Cloud</option>
                    <option value="enterprise">Internet Doanh Nghiệp IP Tĩnh</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#F26F21] hover:bg-[#E05E10] text-white py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Đang gửi yêu cầu..." : "Gửi yêu cầu tư vấn miễn phí"}</span>
                  <Send className="size-4" />
                </button>

                <p className="text-[11px] sm:text-xs text-center text-slate-400 pt-1">
                  Thông tin của quý khách được bảo mật tuyệt đối theo chính sách FPT.
                </p>
              </form>
            )}
          </div>

          {/* MANDATORY DISCLAIMER BOX */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-5 text-amber-900 text-xs leading-relaxed flex items-start gap-3">
            <ShieldAlert className="size-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold mb-1">Tuyên bố miễn trừ trách nhiệm</p>
              <p className="text-amber-800">
                Chúng tôi là kênh thông tin và hỗ trợ đăng ký hòa mạng mới các dịch vụ viễn thông FPT. Chúng tôi không phải là tổng đài chăm sóc khách hàng, hỗ trợ kỹ thuật hay báo hỏng. Quý khách có nhu cầu báo hỏng/sửa chữa vui lòng liên hệ tổng đài chính thức qua ứng dụng Hi FPT.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
