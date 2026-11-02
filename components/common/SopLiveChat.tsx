"use client";

import { useEffect } from "react";
import { pushGTMEvent } from "@/lib/gtm";

export default function SopLiveChat() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Tránh nạp trùng lặp khi chuyển trang SPA trong Next.js
    if (document.getElementById("livechat-sop-script")) return;

    let hasTrackedSop = false;
    const PHONE_REGEX = /(?:0|\+84)[35789][0-9]{8}/;

    // Kiểm tra chuỗi payload có chứa số điện thoại hợp lệ không
    const hasPhoneNumber = (text: string) => {
      const cleaned = text.replace(/[\s.-]/g, "");
      return PHONE_REGEX.test(cleaned);
    };

    // Kiểm tra các ô input bên trong khung chat SOP đã được nhập SĐT chưa
    const hasSopInputPhone = () => {
      const container = document.getElementById("livechat-sop");
      if (!container) return false;
      const inputs = Array.from(container.querySelectorAll("input"));
      return inputs.some((inp) => {
        const val = inp.value ? inp.value.replace(/[\s.-]/g, "") : "";
        return PHONE_REGEX.test(val);
      });
    };

    const trackSopRegistration = (source: string) => {
      if (hasTrackedSop) return;
      hasTrackedSop = true;
      pushGTMEvent("Lượt Đăng Ký_SOP", { source });
      setTimeout(() => {
        hasTrackedSop = false;
      }, 30000); // Cooldown 30s tránh ghi đè liên tục
    };

    try {
      localStorage.setItem("sop_id", "3924");
    } catch (e) {
      console.warn("SOP Widget: Không thể lưu sop_id vào localStorage", e);
    }

    // Tự động chuẩn hóa browser_origin thành https://foxfpt.vn (bỏ www)
    // vì backend SOP FPT chỉ cấp phép domain gốc https://foxfpt.vn
    if (typeof XMLHttpRequest !== "undefined") {
      const origSend = XMLHttpRequest.prototype.send;
      XMLHttpRequest.prototype.send = function (body?: Document | XMLHttpRequestBodyInit | null) {
        if (typeof body === "string") {
          if (body.includes("www.foxfpt.vn")) {
            body = body.replace(/https:\/\/www\.foxfpt\.vn/g, "https://foxfpt.vn");
          }
          // CHỈ BẮN KHI REQUEST THỰC SỰ CHỨA SỐ ĐIỆN THOẠI KHÁCH HÀNG GỬI ĐI
          if (hasPhoneNumber(body)) {
            trackSopRegistration("xhr_phone_submit");
          }
        }
        return origSend.call(this, body);
      };
    }

    if (typeof window.fetch !== "undefined") {
      const origFetch = window.fetch;
      window.fetch = function (resource, init) {
        if (init && typeof init.body === "string" && init.body.includes("www.foxfpt.vn")) {
          init.body = init.body.replace(/https:\/\/www\.foxfpt\.vn/g, "https://foxfpt.vn");
        }
        // CHỈ BẮN KHI FETCH POST LÊN MÁY CHỦ SOP VÀ CHỨA SỐ ĐIỆN THOẠI THỰC TẾ
        if (init && init.method && init.method.toUpperCase() === "POST") {
          const urlStr = typeof resource === "string" ? resource : (resource as Request)?.url || "";
          if (urlStr.includes("portal-sop.fpt.vn") && typeof init.body === "string" && hasPhoneNumber(init.body)) {
            trackSopRegistration("fetch_phone_submit");
          }
        }
        return origFetch.apply(this, [resource, init]);
      };
    }

    // Lắng nghe người dùng bấm nút "Tư Vấn Ngay" / Submit khi đã điền SĐT
    const handleSopClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.closest("#livechat-sop")) {
        const btn = target.closest("button, [role='button'], input[type='submit']");
        if (btn) {
          const btnText = btn.textContent || (btn as HTMLInputElement).value || "";
          // Nếu bấm nút gửi/tư vấn và đã có số điện thoại trong input
          if (/tư vấn|gửi|submit|bắt đầu/i.test(btnText) && hasSopInputPhone()) {
            trackSopRegistration("button_click_submit");
          }
        }
      }
    };

    const handleDomSubmit = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target.closest("#livechat-sop")) {
        if (hasSopInputPhone()) {
          trackSopRegistration("dom_form_submit");
        }
      }
    };

    document.addEventListener("click", handleSopClick, true);
    document.addEventListener("submit", handleDomSubmit, true);

    // 1. Nạp file CSS của SOP Livechat
    const cssId = "livechat-sop-css";
    if (!document.getElementById(cssId)) {
      const link = document.createElement("link");
      link.id = cssId;
      link.rel = "stylesheet";
      link.href = "https://portal-sop.fpt.vn/livechat-service/widget.css";
      document.head.appendChild(link);
    }

    // 2. Tạo container #livechat-sop trong DOM
    let container = document.getElementById("livechat-sop");
    if (!container) {
      container = document.createElement("div");
      container.id = "livechat-sop";
      document.body.appendChild(container);
    }

    // 3. Nạp module script Widget.js của SOP
    const script = document.createElement("script");
    script.id = "livechat-sop-script";
    script.type = "module";
    script.crossOrigin = "";
    script.src = "https://portal-sop.fpt.vn/livechat-service/Widget.js";
    document.body.appendChild(script);

    return () => {
      document.removeEventListener("click", handleSopClick, true);
      document.removeEventListener("submit", handleDomSubmit, true);
    };
  }, []);

  return null;
}
