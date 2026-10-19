import React from "react";

export default function AccessPointHeroBanner() {
  return (
    <section className="relative w-full bg-[#05112F] overflow-hidden">
      <div className="w-full">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet="/images/access-point/banner_ap_desktop.jpg"
          />
          <img
            src="/images/access-point/banner_ap_mobile.jpg"
            alt="Thiết bị Access Point WiFi 6 FPT - Phủ Sóng Toàn Nhà"
            className="w-full h-auto block object-cover max-h-[580px]"
            loading="eager"
            fetchPriority="high"
          />
        </picture>
      </div>
    </section>
  );
}
