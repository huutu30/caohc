import { notFound } from "next/navigation";
import { Metadata } from "next";
import FptPackageDetailView, { PackageDetailData } from "@/components/fpt/FptPackageDetailView";
import { FPT_PACKAGES, FPT_VVIP_COMBOS, findPackageOrCombo } from "@/data/fptPackages";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const slugs: { slug: string }[] = [];
  FPT_PACKAGES.forEach((p) => {
    slugs.push({ slug: p.id });
    slugs.push({ slug: `goi-${p.id}` });
    slugs.push({ slug: `goi-${p.id}-f1` });
  });
  FPT_VVIP_COMBOS.forEach((c) => {
    slugs.push({ slug: c.id });
    slugs.push({ slug: `combo-internet-${c.id.replace("combo-", "")}-lite` });
  });
  return slugs;
}

export function generateMetadata({ params }: PageProps): Metadata {
  const result = findPackageOrCombo(params.slug);
  if (!result) {
    return {
      title: "Gói cước Internet FPT Telecom",
      description: "Đăng ký lắp đặt mạng internet WiFi 6 FPT tốc độ cao trang bị modem miễn phí."
    };
  }
  const item = result.data;
  return {
    title: `${item.name} - Gói cước FPT Telecom Chính Thức`,
    description: `Khám phá chi tiết gói ${item.name} tốc độ ${item.downloadSpeed}, trang bị modem Wi-Fi 6 thế hệ mới.`
  };
}

export default function FptVnInternetDirectSlugPage({ params }: PageProps) {
  const result = findPackageOrCombo(params.slug);

  if (!result) {
    notFound();
  }

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
