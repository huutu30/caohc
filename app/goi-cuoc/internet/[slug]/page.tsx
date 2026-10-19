import { notFound } from "next/navigation";
import { Metadata } from "next";
import FptPackageDetailView, { PackageDetailData } from "@/components/fpt/FptPackageDetailView";
import { FPT_PACKAGES, findPackageOrCombo } from "@/data/fptPackages";

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
  });
  return slugs;
}

export function generateMetadata({ params }: PageProps): Metadata {
  const result = findPackageOrCombo(params.slug);
  if (!result || result.type !== "internet") {
    return {
      title: "Gói cước Internet FPT - FPT Telecom",
      description: "Đăng ký lắp đặt mạng internet WiFi 6 FPT tốc độ cao trang bị modem miễn phí."
    };
  }
  const pkg = result.data;
  return {
    title: `${pkg.name} - Gói cước Internet WiFi 6 FPT | FPT Telecom`,
    description: `${pkg.description} Tốc độ ${pkg.downloadSpeed}, cước chỉ từ ${new Intl.NumberFormat("vi-VN").format(pkg.price)}đ/tháng.`
  };
}

export default function InternetPackageDetailPage({ params }: PageProps) {
  const result = findPackageOrCombo(params.slug);

  if (!result || result.type !== "internet") {
    notFound();
  }

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
