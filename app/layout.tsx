import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fpt.vn"),
  title: "FPT Telecom - Đăng Ký Lắp Đặt Mạng Internet WiFi 6 & FPT Play",
  description:
    "Cổng thông tin & tiếp nhận đăng ký lắp đặt Internet cáp quang FPT, WiFi 6 siêu tốc, Combo FPT Play Ngoại Hạng Anh. Bàn giao thiết bị trong 24h, tặng tới 2 tháng cước.",
  keywords: [
    "FPT Telecom",
    "Internet FPT",
    "Lắp mạng FPT",
    "WiFi 6 FPT",
    "Combo FPT Play",
    "Cáp quang FPT",
    "Gói cước Sky",
    "Gói cước Giga",
    "F-Game FPT",
  ],
  authors: [{ name: "FPT Telecom" }],
  openGraph: {
    title: "FPT Telecom - Đăng Ký Internet Cáp Quang WiFi 6 Siêu Tốc",
    description:
      "Trang bị miễn phí Modem WiFi 6 thế hệ mới, tặng 1-2 tháng cước khi thanh toán trước. Đội ngũ kỹ thuật hỗ trợ triển khai trong 24h.",
    url: "https://fpt.vn",
    siteName: "FPT Telecom",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/images/banner_1_desktop.webp",
        width: 1200,
        height: 630,
        alt: "FPT Telecom Internet Cáp Quang WiFi 6",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TelecommunicationsProvider",
    name: "FPT Telecom",
    legalName: "Công ty Cổ phần Viễn thông FPT",
    url: "https://fpt.vn",
    logo: "https://fpt.vn/images/fpt.webp",
    telephone: "19006600",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Số 10 Phạm Văn Bạch, Cầu Giấy",
      addressLocality: "Hà Nội",
      addressCountry: "VN",
    },
    sameAs: [
      "https://facebook.com/fpttelecom",
      "https://youtube.com/fpttelecom",
    ],
  };

  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${beVietnamPro.variable} font-sans antialiased bg-slate-50 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
