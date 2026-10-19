import { Metadata } from "next";
import CameraClient from "./CameraClient";

export const metadata: Metadata = {
  title: "FPT Camera AI – Giám sát thông minh, Lưu trữ Cloud Tier III an toàn",
  description: "Trang bị Camera AI chính hãng FPT giám sát an ninh toàn diện cho gia đình, văn phòng, cửa hàng kinh doanh. Nhận diện người thông minh, lưu trữ đám mây bảo mật tuyệt đối.",
  openGraph: {
    title: "FPT Camera AI – Giám sát thông minh, Lưu trữ Cloud Tier III",
    description: "Camera AI chính hãng FPT với công nghệ nhận diện khuôn mặt, cảnh báo chuyển động, đàm thoại 2 chiều và lưu trữ đám mây chuẩn quốc tế.",
    images: [
      {
        url: "/images/camera/banner_mon_qua_an_tam_desktop.jpg",
        width: 1200,
        height: 630,
        alt: "FPT Camera AI",
      },
    ],
  },
};

export default function CameraPage() {
  return <CameraClient />;
}
