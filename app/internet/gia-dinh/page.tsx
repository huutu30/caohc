import { Metadata } from "next";
import GiaDinhClient from "@/components/giadinh/GiaDinhClient";

export const metadata: Metadata = {
  title: "Gói cước Internet gia đình FPT – Wi-Fi 6 Mesh phủ sóng mọi ngóc ngách",
  description: "Đăng ký gói mạng Internet gia đình FPT trang bị Modem Wi-Fi 6 và thiết bị Mesh mở rộng sóng cho nhà nhiều tầng, căn hộ chung cư lớn. Tốc độ lên đến 1 Gbps, tích hợp bảo mật F-Safe.",
  openGraph: {
    title: "Gói cước Internet gia đình FPT – Wi-Fi 6 Mesh phủ sóng toàn diện",
    description: "Trọn bộ giải pháp mạng Internet gia đình FPT Wi-Fi 6 thế hệ mới kết hợp truyền hình FPT Play bản quyền Ngoại Hạng Anh.",
    images: [
      {
        url: "/images/gia-dinh/banner_combo_vvip_desktop.jpg",
        width: 1200,
        height: 630,
        alt: "Gói cước Internet gia đình FPT",
      },
    ],
  },
};

export default function InternetGiaDinhPage() {
  return <GiaDinhClient />;
}
