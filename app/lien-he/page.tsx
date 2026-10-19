"use client";

import * as React from "react";
import {
  Phone,
  MapPin,
  Send,
  Building,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

export default function ContactPage() {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setIsSuccess(true);
  };

  const branches = [
    {
      region: "Hà Nội (Trụ sở chính)",
      address: "Tòa nhà FPT Tower, số 10 Phạm Văn Bạch, Cầu Giấy, Hà Nội",
      hotline: "1900 6600",
      hours: "07:30 - 18:30 (Thứ 2 - Chủ Nhật)",
    },
    {
      region: "TP. Hồ Chí Minh",
      address: "Lô 37-39A, đường 19, Khu Chế Xuất Tân Thuận, Quận 7, TP.HCM",
      hotline: "1900 6600",
      hours: "07:30 - 18:30 (Thứ 2 - Chủ Nhật)",
    },
    {
      region: "Đà Nẵng",
      address: "Số 182-184 Đường 2 Tháng 9, Quận Hải Châu, TP. Đà Nẵng",
      hotline: "1900 6600",
      hours: "07:30 - 18:00 (Thứ 2 - Thứ 7)",
    },
    {
      region: "Hải Phòng",
      address: "Số 137 Tô Hiệu, Trại Cau, Lê Chân, TP. Hải Phòng",
      hotline: "1900 6600",
      hours: "07:30 - 18:00 (Thứ 2 - Thứ 7)",
    },
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* HEADER */}
      <section className="bg-gradient-to-r from-brand-blue to-blue-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
            <Building className="h-4 w-4" />
            <span>Kênh Liên Hệ Toàn Quốc</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Liên Hệ & Điểm Giao Dịch FPT Telecom
          </h1>
          <p className="mt-4 text-blue-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Chúng tôi luôn sẵn sàng lắng nghe, giải đáp mọi yêu cầu tư vấn gói cước và hỗ trợ hòa mạng mới trên khắp 63 tỉnh thành.
          </p>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT: CONTACT FORM */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card">
            <h2 className="text-2xl font-black text-slate-900 mb-2">
              Gửi Thông Tin Yêu Cầu Tư Vấn
            </h2>
            <p className="text-sm text-slate-500 mb-6">
              Vui lòng điền thông tin bên dưới, nhân viên chăm sóc khách hàng FPT sẽ liên hệ lại trong thời gian sớm nhất.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Họ và tên của bạn <span className="text-red-500">*</span>
                </label>
                <Input
                  required
                  placeholder="VD: Trần Văn Bình"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Số điện thoại <span className="text-red-500">*</span>
                  </label>
                  <Input
                    required
                    placeholder="VD: 0902184284"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email liên hệ
                  </label>
                  <Input
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nội dung cần hỗ trợ hoặc đăng ký
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Mô tả nhu cầu lắp mạng, gói cước cần tham khảo..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none shadow-sm"
                />
              </div>

              <Button
                type="submit"
                variant="default"
                className="w-full h-12 font-bold text-sm shadow-cta"
              >
                <Send className="h-4 w-4 mr-2" />
                Gửi thông tin liên hệ
              </Button>
            </form>
          </div>

          {/* RIGHT: INFO & BRANCHES */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-brand-blue to-blue-900 rounded-3xl p-8 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Phone className="h-5 w-5 mr-2 text-amber-400" />
                Đường Dây Nóng Tư Vấn
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-xs text-blue-200">Tổng đài đăng ký thuê bao:</p>
                  <a
                    href="tel:19006600"
                    className="text-2xl font-black text-amber-400 hover:underline block"
                  >
                    1900 6600
                  </a>
                </div>
                <div>
                  <p className="text-xs text-blue-200">Đường dây hỗ trợ trực tiếp:</p>
                  <a
                    href="tel:0902184284"
                    className="text-lg font-bold text-white hover:text-amber-400 block"
                  >
                    0902.184.284
                  </a>
                </div>
                <div>
                  <p className="text-xs text-blue-200">Email phản hồi:</p>
                  <p className="font-semibold text-white">hotrokhachhang@fpt.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center">
                <Building className="h-5 w-5 mr-2 text-brand-orange" />
                Văn Phòng Giao Dịch Tiêu Biểu
              </h3>

              <div className="space-y-4 divide-y divide-slate-100">
                {branches.map((b, i) => (
                  <div key={i} className={i > 0 ? "pt-3" : ""}>
                    <p className="text-xs font-bold text-brand-blue uppercase">
                      {b.region}
                    </p>
                    <p className="text-xs text-slate-600 mt-1 flex items-start">
                      <MapPin className="h-3.5 w-3.5 mr-1 text-slate-400 shrink-0 mt-0.5" />
                      <span>{b.address}</span>
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Giờ làm việc: {b.hours}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS MODAL */}
      <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
        <div className="text-center py-4">
          <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <DialogTitle className="text-xl font-bold text-slate-900">
            Gửi Yêu Cầu Thành Công!
          </DialogTitle>
          <DialogDescription className="text-slate-600 text-sm mt-2">
            Cảm ơn bạn đã liên hệ FPT Telecom. Chúng tôi đã nhận được thông tin và sẽ phản hồi qua số điện thoại <strong>{phone}</strong> trong ít phút.
          </DialogDescription>
          <DialogFooter className="mt-6">
            <Button
              onClick={() => {
                setIsSuccess(false);
                setName("");
                setPhone("");
                setMessage("");
              }}
              variant="default"
              className="w-full font-bold"
            >
              Đóng cửa sổ
            </Button>
          </DialogFooter>
        </div>
      </Dialog>
    </div>
  );
}
