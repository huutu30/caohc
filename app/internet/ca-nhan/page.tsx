import { Metadata } from "next";
import CaNhanClient from "@/components/canhan/CaNhanClient";

export const metadata: Metadata = {
  title: "Bảng giá gói cước Internet cá nhân FPT – Wi-Fi 6 siêu tốc chỉ từ 180K",
  description: "Đăng ký gói mạng Internet cá nhân FPT trang bị miễn phí Modem Wi-Fi 6 thế hệ mới chuẩn AX. Tốc độ lên đến 1 Gbps, thủ tục đơn giản chỉ cần CCCD, ưu đãi tặng tháng cước.",
  openGraph: {
    title: "Bảng giá gói cước Internet cá nhân FPT – Wi-Fi 6 siêu tốc",
    description: "Đường truyền cáp quang FPT Wi-Fi 6 tốc độ cao dành cho cá nhân, sinh viên, người đi làm với chi phí tối ưu chỉ từ 180.000đ/tháng.",
    images: [
      {
        url: "/images/ca-nhan/banner_vvip_desktop.jpg",
        width: 1200,
        height: 630,
        alt: "Gói cước Internet cá nhân FPT",
      },
    ],
  },
};

export default function InternetCaNhanPage() {
  return <CaNhanClient />;
}
