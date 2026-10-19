"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function EplFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Gói xem Ngoại Hạng Anh trên FPT Play bao gồm những nội dung và giải đấu nào?",
      a: "Gói cước V.VIP bao gồm trọn vẹn bản quyền 380 trận Ngoại Hạng Anh (Premier League), Cúp C1 UEFA Champions League, UEFA Europa League, FA Cup, giải vô địch quốc gia V.League cùng gần 120 kênh truyền hình đặc sắc trong và ngoài nước và kho phim điện ảnh 4K chiếu rạp.",
    },
    {
      q: "Nhà tôi dùng Smart TV có xem được không hay cần lắp thêm đầu thu FPT Play Box?",
      a: "Nếu nhà quý khách đang dùng Smart TV (Samsung, LG, Sony, TCL, Android TV, Google TV), quý khách chỉ cần tải ứng dụng FPT Play và đăng nhập là xem được ngay. Ngoài ra, FPT Telecom vẫn trang bị kèm miễn phí 01 Đầu thu FPT Play Box 4K điều khiển bằng giọng nói tiếng Việt khi quý khách đăng ký gói Combo.",
    },
    {
      q: "Một tài khoản FPT Play xem Ngoại Hạng Anh có thể xem đồng thời trên bao nhiêu thiết bị?",
      a: "Các gói Combo Thể Thao V.VIP cho phép đăng nhập và xem đồng thời trên 02 thiết bị cùng lúc (ví dụ 1 Smart TV tại phòng khách và 1 điện thoại/iPad). Nếu quý khách có nhu cầu xem cùng lúc 5 thiết bị, có thể lựa chọn gói FPT Play SVIP.",
    },
    {
      q: "Quán cafe, quán nhậu, nhà hàng có chiếu được bóng đá Ngoại Hạng Anh không?",
      a: "Hoàn toàn được. FPT cung cấp gói chuyên biệt dành riêng cho khách hàng kinh doanh: Combo Lux 500 - V.VIP (băng thông 500 Mbps) và Combo Lux 800 - V.VIP (800 Mbps) tích hợp công nghệ Ultra Fast chịu tải hàng trăm khách hàng truy cập Wi-Fi cùng lúc và phát sóng bóng đá 4K mượt mà.",
    },
    {
      q: "Thủ tục đăng ký hòa mạng mới dịch vụ như thế nào và bao lâu thì được triển khai?",
      a: "Thủ tục cực kỳ nhanh chóng và đơn giản, quý khách chỉ cần cung cấp thông tin CCCD/CMND. Sau khi tiếp nhận đăng ký trực tuyến, đội ngũ triển khai dịch vụ FPT Telecom sẽ liên hệ khảo sát và bàn giao thiết bị hoàn tất trong vòng 24 giờ.",
    },
  ];

  return (
    <section className="w-full bg-[#050e26] py-12 sm:py-16 text-white border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="size-3.5" />
            <span>Giải Đáp Thắc Mắc</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Câu Hỏi Thường Gặp Về Ngoại Hạng Anh FPT Play
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#0b1b44]/70 border border-white/10 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`size-5 text-orange-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5">
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
