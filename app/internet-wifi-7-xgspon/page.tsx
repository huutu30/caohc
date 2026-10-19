import type { Metadata } from "next";
import Wifi7Client from "@/components/wifi7/Wifi7Client";

export const metadata: Metadata = {
  title: "Internet FPT Wi-Fi 7 XGSPON – Băng Thông Đỉnh Cao 10 Gbps",
  description:
    "Trang bị công nghệ Wi-Fi 7 thế hệ mới trên nền tảng cáp quang XGSPON FPT Telecom. Độ trễ cực thấp, tốc độ lên đến 10 Gbps đối xứng.",
  keywords: [
    "wifi 7 xgspon",
    "fpt wifi 7 xgspon",
    "speedx fpt",
    "đăng ký internet wifi 7",
  ],
  openGraph: {
    title: "Internet FPT Wi-Fi 7 XGSPON – Bứt Phá Giới Hạn Kết Nối",
    description:
      "Tốc độ siêu khủng lên đến 10 Gbps, công nghệ MLO đa băng tần, trang bị Modem Wi-Fi 7 thế hệ mới nhất từ FPT Telecom.",
    images: ["/images/wifi-7/banner_wifi7_desktop.webp"],
  },
};

export default function InternetWifi7XgsponPage() {
  return <Wifi7Client />;
}
