"use client";

import React, { useState } from "react";
import { Check, ShieldCheck, Video, RefreshCw, Volume2, Sparkles, Eye } from "lucide-react";
import { CAMERA_DEVICES, CameraDevice } from "@/data/cameraPageData";
import { useRegisterModal } from "@/context/RegisterContext";

export default function CameraProductSlider() {
  const [activeTab, setActiveTab] = useState<"all" | "indoor" | "outdoor" | "combo">("all");
  const [selectedDevice, setSelectedDevice] = useState<CameraDevice | null>(null);
  const { openModal } = useRegisterModal();

  const filteredDevices = CAMERA_DEVICES.filter((device) => {
    if (activeTab === "all") return true;
    return device.type === activeTab;
  });

  const handleRegister = (device: CameraDevice) => {
    openModal({
      id: device.id,
      name: device.name,
      price: device.price,
      title: `Đăng ký ${device.name}`,
      category: "camera",
    });
  };

  return (
    <section className="py-10 md:py-16 bg-slate-50/70 border-b border-slate-200/80" id="thiet-bi-camera">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>FPT Camera AI Thế Hệ Mới</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Thiết bị tiện ích bán chạy nhất
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Giám sát thông minh với trí tuệ nhân tạo AI, lưu trữ Cloud máy chủ Việt Nam bảo mật tuyệt đối
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { key: "all", label: "Tất cả thiết bị" },
              { key: "indoor", label: "Trong nhà (Play 4)" },
              { key: "outdoor", label: "Ngoài trời (IQ4S)" },
              { key: "combo", label: "Combo siêu tiết kiệm" },
            ].map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key as "all" | "indoor" | "outdoor" | "combo")}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all shadow-sm ${
                    isActive
                      ? "bg-blue-600 text-white shadow-blue-500/25 shadow-md scale-105"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDevices.map((device) => {
            const isDiscounted = device.originalPrice && device.originalPrice > device.price;
            return (
              <div
                key={device.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
              >
                {/* Image Container with Badges */}
                <div className="relative w-full aspect-square bg-gradient-to-b from-slate-50 to-white p-6 flex items-center justify-center border-b border-slate-100">
                  {device.badge && (
                    <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm">
                      {device.badge}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 text-slate-600 border border-slate-200">
                    {device.typeLabel}
                  </span>
                  <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={device.image}
                      alt={device.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {device.name}
                    </h3>

                    {/* Price Block */}
                    <div className="mt-2 mb-4 flex items-baseline gap-2">
                      <span className="text-2xl font-black text-blue-600">
                        {device.price.toLocaleString("vi-VN")}đ
                      </span>
                      {isDiscounted && (
                        <span className="text-xs text-slate-400 line-through">
                          {device.originalPrice?.toLocaleString("vi-VN")}đ
                        </span>
                      )}
                    </div>

                    {/* Quick Specs List */}
                    <div className="space-y-2 py-3 border-t border-b border-slate-100 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Video className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="line-clamp-1 font-medium">{device.specs.resolution}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <RefreshCw className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="line-clamp-1">{device.specs.viewAngle}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Volume2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="line-clamp-1">{device.specs.audio}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{device.specs.storage}</span>
                      </div>
                    </div>

                    {/* Feature bullets */}
                    <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                      {device.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 pt-3 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleRegister(device)}
                      className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs md:text-sm font-bold text-center transition-all shadow-sm shadow-blue-500/20"
                    >
                      Đăng ký ngay
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedDevice(device)}
                      className="py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-all flex items-center justify-center gap-1"
                      title="Xem thông số kỹ thuật"
                    >
                      <Eye className="w-4 h-4 text-slate-500" />
                      <span className="hidden sm:inline">Chi tiết</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal xem thông số kỹ thuật chi tiết */}
      {selectedDevice && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedDevice(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-xl bg-slate-50 p-2 shrink-0 border border-slate-100 flex items-center justify-center">
                  <img src={selectedDevice.image} alt={selectedDevice.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-blue-600">{selectedDevice.typeLabel}</span>
                  <h3 className="text-lg font-bold text-slate-900">{selectedDevice.name}</h3>
                  <div className="text-xl font-extrabold text-blue-600">
                    {selectedDevice.price.toLocaleString("vi-VN")}đ
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedDevice(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Thông số kỹ thuật</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <div className="text-slate-400 text-[11px]">Độ phân giải</div>
                  <div className="font-semibold text-slate-800">{selectedDevice.specs.resolution}</div>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <div className="text-slate-400 text-[11px]">Góc quan sát</div>
                  <div className="font-semibold text-slate-800">{selectedDevice.specs.viewAngle}</div>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <div className="text-slate-400 text-[11px]">Âm thanh</div>
                  <div className="font-semibold text-slate-800">{selectedDevice.specs.audio}</div>
                </div>
                <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <div className="text-slate-400 text-[11px]">Lưu trữ</div>
                  <div className="font-semibold text-slate-800">{selectedDevice.specs.storage}</div>
                </div>
              </div>

              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-2">Tính năng nổi bật</h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {selectedDevice.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedDevice(null);
                  handleRegister(selectedDevice);
                }}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20"
              >
                Đăng ký nhận tư vấn ngay
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
