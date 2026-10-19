import type { Metadata } from "next";
import DoanhNghiepClient from "@/components/doanhnghiep/DoanhNghiepClient";

export const metadata: Metadata = {
  title: "Đăng Ký Internet Doanh Nghiệp FPT – IP Tĩnh, Bảo Mật Cao & Cân Bằng Tải",
  description:
    "Đăng ký Internet doanh nghiệp FPT cho văn phòng, cửa hàng, công ty nhiều thiết bị. Tặng địa chỉ IP Tĩnh, thiết bị Gateway cân bằng tải công nghiệp, cam kết băng thông quốc tế ổn định.",
  keywords: [
    "internet doanh nghiep fpt",
    "wifi doanh nghiep fpt",
    "goi cuoc lux fpt",
    "super biz fpt",
    "ip tinh fpt",
    "can bang tai fpt",
    "dang ky mang doanh nghiep",
  ],
  openGraph: {
    title: "Internet Doanh Nghiệp FPT – Kết Nối Vượt Trội, Đón Đầu Xu Thế",
    description:
      "Giải pháp cáp quang doanh nghiệp chuyên biệt: Tặng IP Tĩnh, Router DrayTek / Wi-Fi 6 Gateway, cam kết SLA chất lượng cao.",
    images: ["/images/doanh-nghiep/banner_doanhnghiep_desktop.jpg"],
  },
};

export default function InternetDoanhNghiepPage() {
  return <DoanhNghiepClient />;
}
