"use client";

import * as React from "react";
import { Search, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { VIETNAM_PROVINCES } from "@/lib/packages";
import { Button } from "@/components/ui/button";

export default function CoverageChecker() {
  const [selectedProvince, setSelectedProvince] = React.useState("Hà Nội");
  const [district, setDistrict] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [result, setResult] = React.useState<{
    checked: boolean;
    hasCoverage: boolean;
    province: string;
    details: string;
  } | null>(null);

  const handleCheckCoverage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProvince) return;

    setIsLoading(true);
    setResult(null);

    // Mock realistic network infrastructure check delay
    setTimeout(() => {
      setIsLoading(false);
      setResult({
        checked: true,
        hasCoverage: true,
        province: selectedProvince,
        details: `Khu vực ${district ? district + ", " : ""}${selectedProvince} đã được phủ sóng 100% hạ tầng Cáp Quang Băng Rộng GPON/AON thế hệ mới. Đội ngũ kỹ thuật sẵn sàng triển khai trong 24h!`,
      });
    }, 700);
  };

  return (
    <div className="relative -mt-10 sm:-mt-12 z-30 max-w-5xl mx-auto px-4">
      <div className="rounded-3xl bg-white p-5 sm:p-7 shadow-2xl border border-slate-200/80 backdrop-blur-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-2xl bg-orange-50 text-brand-orange flex items-center justify-center shrink-0 border border-orange-100">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                Tra Cứu Vùng Phủ Sóng & Ưu Đãi Địa Phương
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Nhập Tỉnh/Thành để kiểm tra độ phủ cáp quang và nhận bảng giá độc quyền
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
            <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
            Đã phủ sóng 63/63 Tỉnh Thành
          </div>
        </div>

        {/* INPUT FORM */}
        <form
          onSubmit={handleCheckCoverage}
          className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
        >
          {/* PROVINCE SELECT */}
          <div className="sm:col-span-5 relative">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Tỉnh / Thành Phố
            </label>
            <select
              value={selectedProvince}
              onChange={(e) => setSelectedProvince(e.target.value)}
              className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm font-semibold text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
            >
              {VIETNAM_PROVINCES.map((prov) => (
                <option key={prov} value={prov}>
                  {prov}
                </option>
              ))}
            </select>
          </div>

          {/* DISTRICT INPUT */}
          <div className="sm:col-span-4 relative">
            <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Quận / Huyện / Địa chỉ cụ thể
            </label>
            <input
              type="text"
              placeholder="VD: Cầu Giấy, Quận 1, Ngõ 12..."
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue transition-all"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="sm:col-span-3 sm:self-end">
            <Button
              type="submit"
              disabled={isLoading}
              variant="default"
              className="w-full h-12 rounded-xl font-bold text-sm shadow-cta"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Đang kiểm tra...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-1.5">
                  <Search className="h-4 w-4" />
                  <span>Kiểm tra hạ tầng</span>
                </div>
              )}
            </Button>
          </div>
        </form>

        {/* LOOKUP RESULT ALERT */}
        {result && (
          <div className="mt-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-emerald-900">
                    Hạ tầng Cáp quang tại {result.province} đang hoạt động hoàn hảo!
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-700 mt-0.5">
                    {result.details}
                  </p>
                </div>
              </div>
              <a
                href="#goi-cuoc-noi-bat"
                className="inline-flex items-center px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shrink-0 shadow-sm transition-all"
              >
                Xem gói cước ngay
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
