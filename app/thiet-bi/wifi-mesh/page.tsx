import type { Metadata } from "next";
import AccessPointClient from "@/components/accesspoint/AccessPointClient";

export const metadata: Metadata = {
  title: "Thiết Bị WiFi Mesh FPT – Phủ Sóng Mạng Toàn Diện Không Điểm Chết",
  description:
    "Trang bị thiết bị Mesh Wi-Fi 6 chính hãng FPT Telecom (AX3000CV2). Chuẩn kết nối tốc độ cao, chuyển vùng thông minh, bảo hành chính hãng 1 đổi 1.",
  keywords: [
    "wifi mesh fpt",
    "access point fpt",
    "ax3000cv2",
    "mesh wifi 6 fpt",
    "phu song wifi",
  ],
  openGraph: {
    title: "Thiết Bị WiFi Mesh FPT – Mở Rộng Sóng Liền Mạch",
    description:
      "Giải pháp phủ sóng Wi-Fi 6 tốc độ cao toàn diện cho nhà nhiều tầng và căn hộ chung cư lớn.",
    images: ["/images/access-point/banner_ap_desktop.jpg"],
  },
};

export default function WifiMeshPage() {
  return <AccessPointClient />;
}
