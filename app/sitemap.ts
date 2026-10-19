import { MetadataRoute } from "next";
import { NEWS_LIST } from "@/lib/packages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fpt.vn";

  const staticRoutes = [
    "",
    "/goi-cuoc/internet",
    "/goi-cuoc/combo",
    "/tin-tuc",
    "/lien-he",
    "/dang-ky",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const newsRoutes = NEWS_LIST.map((post) => ({
    url: `${baseUrl}/tin-tuc/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...newsRoutes];
}
