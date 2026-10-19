import { notFound } from "next/navigation";
import { Metadata } from "next";
import FptPackageDetailView, { PackageDetailData } from "@/components/fpt/FptPackageDetailView";
import { FPT_VVIP_COMBOS, findPackageOrCombo } from "@/data/fptPackages";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  FPT_VVIP_COMBOS.forEach((c) => {
    slugs.push({ slug: c.id });
    slugs.push({ slug: c.id.replace("combo-", "") });
  });
  return slugs;
}

export function generateMetadata({ params }: PageProps): Metadata {
  const result = findPackageOrCombo(params.slug);
  if (!result) {
    return {
      title: "Combo Internet & Truyền hình FPT Play | FPT Telecom",
      description: "Đăng ký combo mạng WiFi 6 và truyền hình FPT Play trọn vẹn 380 trận Ngoại Hạng Anh."
    };
  }
  const combo = result.data;
  return {
    title: `${combo.name} - Combo Internet & FPT Play Ngoại Hạng Anh | FPT Telecom`,
    description: `Combo thể thao đỉnh cao: Tốc độ ${combo.downloadSpeed}, xem trọn vẹn Ngoại Hạng Anh bản quyền, trang bị Modem Wi-Fi 6 và đầu thu FPT Play 4K.`
  };
}

export default function ComboPackageDetailPage({ params }: PageProps) {
  const result = findPackageOrCombo(params.slug);

  if (!result) {
    notFound();
  }

  // Handle if combo or internet package
  if (result.type === "combo") {
    const combo = result.data;
    const detailData: PackageDetailData = {
      id: combo.id,
      name: combo.name,
      category: "combo",
      categoryName: "Combo FPT Play",
      badge: "Bản quyền Ngoại Hạng Anh",
      price: combo.priceNgoaiThanh,
      downloadSpeed: combo.downloadSpeed,
      uploadSpeed: combo.uploadSpeed,
      image: combo.image,
      modem: "Modem Wi-Fi 6 + Đầu thu FPT Play Box 4K Voice",
      recommendedDevices: "5 - 20 thiết bị",
      description: `Gói combo thể thao & giải trí toàn diện: Tốc độ ${combo.downloadSpeed}, bản quyền 380 trận Ngoại Hạng Anh cùng gần 170 kênh truyền hình đặc sắc.`,
      features: combo.features
    };
    return <FptPackageDetailView data={detailData} />;
  } else {
    const pkg = result.data;
    const detailData: PackageDetailData = {
      id: pkg.id,
      name: `Internet ${pkg.name}`,
      category: "internet",
      categoryName: pkg.categoryName,
      badge: pkg.badge,
      price: pkg.price,
      downloadSpeed: pkg.downloadSpeed,
      uploadSpeed: pkg.uploadSpeed,
      image: pkg.image,
      modem: pkg.modem,
      recommendedDevices: pkg.recommendedDevices,
      description: pkg.description,
      features: pkg.features
    };
    return <FptPackageDetailView data={detailData} />;
  }
}
