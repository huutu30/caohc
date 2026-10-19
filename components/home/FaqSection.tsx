"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Thủ tục đăng ký hòa mạng mới Internet FPT cần những giấy tờ gì?",
    a: "Thủ tục vô cùng đơn giản và nhanh gọn. Đối với khách hàng cá nhân, Quý khách chỉ cần chuẩn bị ảnh chụp bản gốc Căn cước công dân (CCCD). Đối với doanh nghiệp, cần Giấy phép đăng ký kinh doanh và CCCD của người đại diện pháp luật.",
  },
  {
    q: "Thời gian triển khai và bàn giao thiết bị là bao lâu?",
    a: "Sau khi hoàn tất đăng ký online, chuyên viên tư vấn sẽ liên hệ xác nhận và đội ngũ triển khai dịch vụ sẽ có mặt để bàn giao thiết bị tại địa chỉ của Quý khách trong vòng 24 - 48 giờ.",
  },
  {
    q: "Chương trình ưu đãi khi thanh toán trả trước cước như thế nào?",
    a: "Khi Quý khách lựa chọn hình thức trả trước 6 tháng sẽ được tặng thêm 01 tháng cước sử dụng miễn phí. Khi trả trước 12 tháng sẽ được tặng thêm 02 tháng cước và ưu đãi trang bị thêm thiết bị mở rộng sóng Mesh Wi-Fi 6.",
  },
  {
    q: "Modem Wi-Fi 6 thế hệ mới có phải trả thêm chi phí mua thiết bị không?",
    a: "Hoàn toàn miễn phí. Toàn bộ khách hàng đăng ký mới các gói cước Giga, Sky, Meta hay Combo FPT Play đều được FPT Telecom trang bị miễn phí 100% Modem Wi-Fi 6 chuẩn AX băng tần kép cao cấp trong suốt quá trình sử dụng.",
  },
  {
    q: "Tôi đang dùng nhà mạng khác muốn chuyển sang FPT có được ưu đãi gì không?",
    a: "FPT Telecom luôn có chính sách đồng hành đặc biệt cho khách hàng chuyển mạng giữ nguyên nhu cầu kết nối: Tặng thêm tháng cước, hỗ trợ hoàn tất thủ tục bàn giao thiết bị ưu tiên trong ngày.",
  },
  {
    q: "Khi thiết bị ngoại tuyến hoặc đường truyền tạm ngưng thì liên hệ thế nào?",
    a: "Quý khách có thể dễ dàng quản lý thiết bị, kiểm tra tình trạng kết nối hoặc gửi yêu cầu chăm sóc trực tiếp thông qua ứng dụng thông minh Hi FPT, hoặc liên hệ qua đường dây tư vấn chính thức của chúng tôi.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#004a9c] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="h-4 w-4" />
            <span>Giải Đáp Thắc Mắc</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Câu Hỏi Thường Gặp Khi Đăng Ký FPT
          </h2>
          <p className="mt-2 text-slate-600 text-xs sm:text-sm">
            Thông tin chi tiết về chính sách hòa mạng, thủ tục giấy tờ và ưu đãi thiết bị
          </p>
        </div>

        {/* ACCORDION LIST */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className={`w-full text-left p-5 flex items-center justify-between transition-colors ${
                    isOpen ? "bg-blue-50/70 text-[#004a9c]" : "hover:bg-slate-50 text-slate-800"
                  }`}
                >
                  <span className="font-bold text-sm sm:text-base pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#004a9c]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 pt-0 bg-blue-50/40 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-blue-100 animate-in fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
