"use client";

import React, { useState } from "react";
import { Search, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { useRegion, PROVINCES } from "@/context/RegionContext";
import { useRegister } from "@/context/RegisterContext";

export default function CoverageSection() {
  const { activeProvince, setActiveProvince } = useRegion();
  const { openRegisterModal } = useRegister();

  const [selectedProvinceId, setSelectedProvinceId] = useState(activeProvince.id);
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [checked, setChecked] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setChecked(true);
  };

  const handleRegister = () => {
    openRegisterModal();
  };

  const currentProv = PROVINCES.find((p) => p.id === selectedProvinceId) || activeProvince;

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-[#004a9c] to-[#002f6c] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-sm border border-white/20">
            <Sparkles className="h-4 w-4" />
            <span>Độ Phủ Sóng 63 Tỉnh Thành</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            Tra Cứu Hạ Tầng Cáp Quang FPT Tại Địa Chỉ Của Bạn
          </h2>
          <p className="mt-2 text-blue-100 text-xs sm:text-sm leading-relaxed">
            Hạ tầng mạng cáp quang băng rộng FPT đã hoàn thiện tại 100% quận, huyện trên toàn quốc. Kiểm tra và nhận ưu đãi trang bị thiết bị Wi-Fi 6 ngay hôm nay.
          </p>
        </div>

        {/* INTERACTIVE FORM CARD */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl">
          <form onSubmit={handleCheck} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* PROVINCE SELECT */}
            <div>
              <label className="block text-xs font-bold text-blue-100 uppercase mb-1.5">
                Tỉnh / Thành phố
              </label>
              <select
                value={selectedProvinceId}
                onChange={(e) => {
                  setSelectedProvinceId(e.target.value);
                  const p = PROVINCES.find((prov) => prov.id === e.target.value);
                  if (p) setActiveProvince(p);
                  setChecked(false);
                }}
                className="w-full bg-white text-slate-800 text-sm font-bold rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f57020]"
              >
                {PROVINCES.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* DISTRICT INPUT */}
            <div>
              <label className="block text-xs font-bold text-blue-100 uppercase mb-1.5">
                Quận / Huyện / Thị xã
              </label>
              <input
                type="text"
                placeholder="VD: Quận Cầu Giấy, Quận 1..."
                value={district}
                onChange={(e) => {
                  setDistrict(e.target.value);
                  setChecked(false);
                }}
                className="w-full bg-white text-slate-800 text-sm font-semibold rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f57020]"
              />
            </div>

            {/* STREET ADDRESS & BUTTON */}
            <div>
              <label className="block text-xs font-bold text-blue-100 uppercase mb-1.5">
                Số nhà / Tên đường
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="VD: 10 Phạm Văn Bạch..."
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    setChecked(false);
                  }}
                  className="w-full bg-white text-slate-800 text-sm font-semibold rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#f57020]"
                />
                <button
                  type="submit"
                  className="bg-[#f57020] hover:bg-[#e05e10] text-white px-5 rounded-2xl font-black text-sm flex items-center justify-center shrink-0 shadow-lg active:scale-95 transition-all"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          </form>

          {/* RESULT STATUS */}
          {checked && (
            <div className="mt-6 pt-6 border-t border-white/20 animate-in fade-in duration-300">
              <div className="bg-emerald-500/20 border border-emerald-400/40 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-black text-white">
                      Hạ Tầng FPT Sẵn Sàng Tại {currentProv.name}!
                    </h4>
                    <p className="text-xs text-blue-100 mt-1">
                      Đội ngũ triển khai dịch vụ FPT Telecom có thể bàn giao thiết bị Modem Wi-Fi 6 tại địa chỉ của Quý khách trong vòng 24 - 48 giờ.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleRegister}
                  className="bg-[#f57020] hover:bg-[#e05e10] text-white px-6 py-2.5 rounded-full font-black text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center space-x-2 shrink-0 active:scale-95"
                >
                  <span>Đăng ký hòa mạng ngay</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
