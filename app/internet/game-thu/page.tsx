import { Metadata } from "next";
import GameThuClient from "@/components/gamethu/GameThuClient";

export const metadata: Metadata = {
  title: "Gói cước Internet Game thủ FPT – Ultra Fast giảm ping, chiến game mượt",
  description: "Đăng ký gói mạng Internet game thủ FPT F-Game tích hợp công nghệ Ultra Fast giảm ping, chống rớt gói cho hơn 50+ tựa game online hot. Trang bị Modem Wi-Fi 6 tốc độ 1 Gbps.",
  openGraph: {
    title: "Gói cước Internet Game thủ FPT – Ultra Fast giảm ping",
    description: "Đường truyền cáp quang FPT chuyên biệt cho game thủ và streamer, tối ưu ping thi đấu eSports, livestream mượt mà.",
    images: [
      {
        url: "/images/game-thu/banner_gamethu_desktop.jpg",
        width: 1200,
        height: 630,
        alt: "Gói cước Internet Game thủ FPT",
      },
    ],
  },
};

export default function InternetGameThuPage() {
  return <GameThuClient />;
}
