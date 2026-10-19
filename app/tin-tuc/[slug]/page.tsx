import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { NEWS_LIST } from "@/lib/packages";
import { Button } from "@/components/ui/button";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return NEWS_LIST.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = NEWS_LIST.find((p) => p.slug === params.slug);
  if (!post) {
    return {
      title: "Không tìm thấy bài viết - FPT Telecom",
    };
  }

  return {
    title: `${post.title} | FPT Telecom`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  };
}

export default function NewsDetailPage({ params }: Props) {
  const post = NEWS_LIST.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = NEWS_LIST.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="w-full bg-slate-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* BREADCRUMBS */}
        <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500 mb-6">
          <Link href="/" className="hover:text-brand-blue">
            Trang chủ
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/tin-tuc" className="hover:text-brand-blue">
            Tin tức
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-slate-800 font-semibold truncate max-w-[200px] sm:max-w-none">
            {post.title}
          </span>
        </nav>

        {/* ARTICLE CONTAINER */}
        <article className="rounded-3xl bg-white p-6 sm:p-10 border border-slate-200/90 shadow-card">
          {/* CATEGORY & METAS */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-blue-50 text-brand-blue text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
              {post.category}
            </span>
            <span className="flex items-center text-xs text-slate-500">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              {post.date}
            </span>
            <span className="flex items-center text-xs text-slate-500">
              <Clock className="h-3.5 w-3.5 mr-1" />
              {post.readTime}
            </span>
            <span className="flex items-center text-xs text-slate-500">
              <User className="h-3.5 w-3.5 mr-1" />
              {post.author}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* EXCERPT CALLOUT */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border-l-4 border-brand-orange text-slate-700 font-medium text-sm sm:text-base leading-relaxed mb-8">
            {post.excerpt}
          </div>

          {/* FEATURED IMAGE */}
          <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden mb-8 shadow-md">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* ARTICLE BODY */}
          <div className="prose prose-slate max-w-none space-y-5 text-slate-700 text-sm sm:text-base leading-relaxed">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 my-8">
              <h3 className="text-base font-bold text-brand-blue mb-2 flex items-center">
                <ShieldCheck className="h-5 w-5 mr-2 text-brand-orange" />
                Lưu ý quan trọng khi đăng ký dịch vụ FPT Telecom
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Quý khách có nhu cầu hòa mạng mới vui lòng cung cấp CCCD còn hiệu lực. Đội ngũ kỹ thuật FPT Telecom sẽ khảo sát và triển khai bàn giao thiết bị hoàn toàn miễn phí trong vòng 24 giờ kể từ khi tiếp nhận yêu cầu.
              </p>
            </div>
          </div>

          {/* IN-ARTICLE CTA BOX */}
          <div className="mt-10 rounded-2xl bg-gradient-to-r from-brand-blue to-blue-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-xl font-bold text-white">
                Đăng ký lắp mạng FPT ngay hôm nay!
              </h3>
              <p className="text-blue-100 text-xs sm:text-sm mt-1">
                Tặng modem WiFi 6 + Tặng thêm đến 2 tháng cước sử dụng
              </p>
            </div>
            <Link href="/dang-ky">
              <Button variant="default" className="font-bold text-sm shadow-cta whitespace-nowrap">
                Đăng ký tư vấn ngay
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Button>
            </Link>
          </div>

          {/* BACK BUTTON */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
            <Link
              href="/tin-tuc"
              className="inline-flex items-center text-xs sm:text-sm font-bold text-slate-600 hover:text-brand-blue transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1.5" />
              Quay lại danh sách tin tức
            </Link>
          </div>
        </article>

        {/* RELATED ARTICLES */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Bài viết liên quan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                href={`/tin-tuc/${related.slug}`}
                className="group rounded-2xl bg-white p-4 border border-slate-200/90 shadow-sm hover:shadow-md transition-all block"
              >
                <div className="relative h-32 w-full rounded-xl overflow-hidden mb-3">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="text-xs text-brand-blue font-bold mb-1">
                  {related.category}
                </p>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-blue transition-colors line-clamp-2">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
