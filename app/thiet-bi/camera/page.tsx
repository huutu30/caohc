import { Metadata } from "next";
import CameraClient from "@/app/camera/CameraClient";

export const metadata: Metadata = {
  title: "Thiết bị FPT Camera AI – Giám sát thông minh, Lưu trữ Cloud Tier III",
  description: "Trang bị Camera AI chính hãng FPT giám sát an ninh toàn diện cho gia đình, văn phòng, cửa hàng kinh doanh. Nhận diện người thông minh, lưu trữ đám mây bảo mật tuyệt đối.",
};

export default function ThietBiCameraPage() {
  return <CameraClient />;
}
