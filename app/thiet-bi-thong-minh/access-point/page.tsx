import type { Metadata } from "next";
import AccessPointClient from "@/components/accesspoint/AccessPointClient";

export const metadata: Metadata = {
  title: "Access Point WiFi 6 FPT | Mở Rộng Phủ Sóng, Kết Nối Toàn Nhà",
  description:
    "Khám phá thiết bị Access Point WiFi 6 FPT (AX3000CV2, AX1800AZ) giúp mở rộng vùng phủ sóng, duy trì kết nối ổn định cho nhiều thiết bị, không điểm chết. Đăng ký ngay để được tư vấn!",
  keywords: [
    "access point fpt",
    "wifi 6 fpt",
    "mesh wifi fpt",
    "ax3000cv2",
    "cục phát wifi fpt",
    "bộ mở rộng sóng fpt",
  ],
  openGraph: {
    title: "Access Point WiFi 6 FPT – Phủ Sóng Toàn Diện Không Điểm Chết",
    description:
      "Thiết bị Access Point Wi-Fi 6 thế hệ mới chuẩn AX3000 160MHz. Chuyển vùng Seamless Roaming 1 tên sóng duy nhất toàn nhà.",
    images: ["/images/access-point/banner_ap_desktop.jpg"],
  },
};

export default function AccessPointPage() {
  return <AccessPointClient />;
}
