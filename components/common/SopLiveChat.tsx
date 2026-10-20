"use client";

import { useEffect } from "react";

export default function SopLiveChat() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Tránh nạp trùng lặp khi chuyển trang SPA trong Next.js
    if (document.getElementById("livechat-sop-script")) return;

    try {
      localStorage.setItem("sop_id", "3924");
    } catch (e) {
      console.warn("SOP Widget: Không thể lưu sop_id vào localStorage", e);
    }

    // Tự động chuẩn hóa browser_origin thành https://foxfpt.vn (bỏ www)
    // vì backend SOP FPT chỉ cấp phép domain gốc https://foxfpt.vn
    if (typeof XMLHttpRequest !== "undefined") {
      const origSend = XMLHttpRequest.prototype.send;
      XMLHttpRequest.prototype.send = function (body) {
        if (typeof body === "string" && body.includes("www.foxfpt.vn")) {
          body = body.replace(/https:\/\/www\.foxfpt\.vn/g, "https://foxfpt.vn");
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
        return origFetch.apply(this, [resource, init]);
      };
    }

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
  }, []);

  return null;
}
