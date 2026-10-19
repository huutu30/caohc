import type { Metadata } from "next";
import Wifi7Client from "@/components/wifi7/Wifi7Client";

export const metadata: Metadata = {
  title: "Internet FPT Wi-Fi 7 XGSPON – Tốc Độ Đột Phá Lên Đến 10 Gbps",
  description:
    "FPT Telecom tiên phong cung cấp chuẩn Wi-Fi 7 trên nền hạ tầng XGSPON hiện đại nhất Việt Nam. Băng thông đối xứng đến 10 Gbps, giảm trễ 90%, trang bị Modem Wi-Fi 7 thế hệ mới.",
  keywords: [
    "wifi 7 fpt",
    "fpt wifi 7",
    "xgspon fpt",
    "speedx fpt",
    "internet wifi 7",
    "đăng ký wifi 7 fpt",
    "modem wifi 7 xgspon",
  ],
  openGraph: {
    title: "Internet FPT Wi-Fi 7 XGSPON – Bứt Phá Giới Hạn Kết Nối",
    description:
      "Tốc độ siêu khủng lên đến 10 Gbps, công nghệ MLO đa băng tần, trang bị Modem Wi-Fi 7 thế hệ mới nhất từ FPT Telecom.",
    images: ["/images/wifi-7/banner_wifi7_desktop.webp"],
  },
};

export default function InternetWifi7Page() {
  return <Wifi7Client />;
}
