"use client";

import * as React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock,
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
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const branches = [
    {
      city: "Hà Nội (Trụ sở chính)",
      address: "Tòa nhà FPT Tower, số 10 Phạm Văn Bạch, Cầu Giấy, Hà Nội",
      hotline: "0902.184.284",
      hours: "07:30 - 18:30 (Thứ 2 - Chủ Nhật)",
    },
    {
      city: "TP. Hồ Chí Minh",
      address: "Lô 37-39A, đường 19, KCX Tân Thuận, Phường Tân Thuận Đông, Quận 7, TP.HCM",
      hotline: "0902.184.284",
      hours: "07:30 - 18:30 (Thứ 2 - Chủ Nhật)",
    },
    {
      city: "Đà Nẵng",
      address: "Số 182-184 Đường 2 Tháng 9, Quận Hải Châu, TP. Đà Nẵng",
      hotline: "0902.184.284",
      hours: "07:30 - 18:00 (Thứ 2 - Thứ 7)",
    },
    {
      city: "Hải Phòng",
      address: "Số 137 Tô Hiệu, Phường Trại Cau, Quận Lê Chân, TP. Hải Phòng",
      hotline: "0902.184.284",
      hours: "07:30 - 18:00 (Thứ 2 - Thứ 7)",
    },
    {
      city: "Cần Thơ",
      address: "Số 118-120 Đường 30 Tháng 4, Phường An Phú, Quận Ninh Kiều, TP. Cần Thơ",
      hotline: "0902.184.284",
      hours: "07:30 - 18:00 (Thứ 2 - Thứ 7)",
    },
  ];

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
            <span className="font-semibold text-slate-800">Liên hệ & Điểm giao dịch</span>
          </nav>
        </div>
      </div>

      {/* HEADER */}
      <section className="bg-white border-b border-slate-200/80 py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-[#101828]">
            Thông Tin Liên Hệ & Điểm Giao Dịch FPT Telecom
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Hệ thống tiếp nhận đăng ký hòa mạng mới các dịch vụ Internet Cáp Quang, Combo FPT Play và Camera An Ninh trên toàn quốc.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT COLUMN: BRANCHES & HOTLINE (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            {/* HOTLINE CARD */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-xl bg-orange-50 text-[#F26F21] flex items-center justify-center shrink-0">
                  <Phone className="size-6" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Đường dây tư vấn đăng ký thuê bao
                  </h3>
                  <a
                    href="tel:0902184284"
                    className="text-2xl sm:text-3xl font-black text-[#F26F21] hover:underline block mt-1"
                  >
                    0902.184.284
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Hỗ trợ kiểm tra hạ tầng và tư vấn gói cước nhanh từ 07:30 - 21:00 hàng ngày.
                  </p>
                </div>
              </div>
            </div>

            {/* BRANCHES LIST */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <h2 className="text-xl font-bold text-[#101828] mb-6 flex items-center gap-2">
                <MapPin className="size-5 text-[#004a9c]" />
                <span>Các Điểm Giao Dịch FPT Tiêu Biểu</span>
              </h2>

              <div className="divide-y divide-slate-100">
                {branches.map((b, idx) => (
                  <div key={idx} className="py-4 first:pt-0 last:pb-0">
                    <h3 className="font-bold text-slate-900 text-sm">{b.city}</h3>
                    <p className="text-xs text-slate-600 mt-1 flex items-start gap-2">
                      <MapPin className="size-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span>{b.address}</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5 text-slate-400" />
                        <span>{b.hours}</span>
                      </span>
                      <span className="flex items-center gap-1.5 font-semibold text-[#004a9c]">
                        <Phone className="size-3.5" />
                        <span>{b.hotline}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MANDATORY DISCLAIMER BOX */}
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 text-amber-900 text-xs leading-relaxed flex items-start gap-3">
              <ShieldAlert className="size-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold mb-1">Tuyên bố miễn trừ trách nhiệm</p>
                <p className="text-amber-800">
                  Chúng tôi là kênh thông tin và hỗ trợ đăng ký hòa mạng mới các dịch vụ viễn thông FPT. Chúng tôi không phải là tổng đài chăm sóc khách hàng, hỗ trợ kỹ thuật hay báo hỏng. Quý khách có nhu cầu báo hỏng/sửa chữa vui lòng liên hệ tổng đài chính thức qua ứng dụng Hi FPT.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FAST CONSULTATION FORM (5 COLS) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs sticky top-24">
              <h2 className="text-xl font-bold text-[#101828] mb-2">
                Đăng Ký Tư Vấn Gói Cước
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Chuyên viên FPT Telecom sẽ liên hệ lại trong vòng 10 phút để báo giá và kiểm tra hạ tầng chi tiết.
              </p>

              {isSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <div className="size-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="size-6" />
                  </div>
                  <h3 className="font-bold text-emerald-900 text-base">
                    Gửi yêu cầu thành công!
                  </h3>
                  <p className="text-xs text-emerald-700 leading-relaxed">
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
                    className="text-xs font-semibold"
                  >
                    Gửi yêu cầu khác
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Họ và tên quý khách <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      placeholder="Ví dụ: Nguyễn Văn A"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Số điện thoại liên hệ <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      type="tel"
                      placeholder="Ví dụ: 0912 345 678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Địa chỉ lắp đặt dự kiến <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      placeholder="Số nhà, tên đường, phường/xã, quận/huyện"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      Dịch vụ quan tâm
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full h-10 px-3 rounded-xl border border-input bg-background text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#F26F21]"
                    >
                      <option value="internet">Internet Cáp Quang Wi-Fi 6</option>
                      <option value="combo">Combo Internet + Truyền hình FPT Play</option>
                      <option value="camera">FPT Camera An Ninh Cloud</option>
                      <option value="enterprise">Internet Doanh Nghiệp IP Tĩnh</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F26F21] hover:bg-[#E05E10] text-white py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2 mt-2"
                  >
                    <span>Gửi yêu cầu tư vấn miễn phí</span>
                    <Send className="size-4" />
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    Thông tin của quý khách được bảo mật tuyệt đối theo chính sách FPT.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
