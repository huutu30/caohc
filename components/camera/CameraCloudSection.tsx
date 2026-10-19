"use client";

import React from "react";
import { Cloud, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { CAMERA_CLOUD_PLANS, CloudStoragePlan } from "@/data/cameraPageData";
import { useRegisterModal } from "@/context/RegisterContext";

export default function CameraCloudSection() {
  const { openModal } = useRegisterModal();

  const handleRegisterCloud = (plan: CloudStoragePlan) => {
    openModal({
      id: plan.id,
      name: plan.name,
      price: plan.price,
      title: `Đăng ký ${plan.name}`,
      category: "cloud_camera",
    });
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-slate-50 to-blue-50/40 border-t border-b border-slate-200/80" id="goi-cuoc-cloud">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3 border border-blue-200">
            <Cloud className="w-3.5 h-3.5 text-blue-600" />
            <span>FPT Cloud Camera An Toàn</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Gói dịch vụ lưu trữ đám mây FPT Cloud
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Bảo vệ dữ liệu an toàn tại Data Center FPT chuẩn Tier III, không lo mất mát khi thiết bị gặp sự cố hoặc bị kẻ gian tháo trộm
          </p>
        </div>

        {/* 4 Cloud Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAMERA_CLOUD_PLANS.map((plan) => {
            const isRec = plan.recommended;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl bg-white transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isRec
                    ? "border-2 border-blue-600 shadow-xl shadow-blue-500/10 scale-102 lg:-translate-y-2"
                    : "border border-slate-200/90 shadow-sm hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {/* Header ribbon for recommended */}
                {plan.badge && (
                  <div className={`py-1 px-4 text-center text-xs font-bold uppercase tracking-wider ${
                    isRec 
                      ? "bg-blue-600 text-white" 
                      : "bg-slate-100 text-slate-700 border-b border-slate-200"
                  }`}>
                    {plan.badge}
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Cloud className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="mt-4 mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-slate-900">
                        {plan.price.toLocaleString("vi-VN")}đ
                      </span>
                      <span className="text-xs text-slate-500 font-medium">/ tháng / cam</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Xem lại trọn vẹn trong vòng <strong>{plan.days} ngày</strong> gần nhất
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 text-xs text-slate-600">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Button */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => handleRegisterCloud(plan)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs md:text-sm font-bold transition-all flex items-center justify-center gap-1.5 ${
                      isRec
                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25"
                        : "bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-800 border border-slate-200"
                    }`}
                  >
                    <span>Đăng ký gói</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cloud Benefits Banner */}
        <div className="mt-12 rounded-2xl bg-white border border-blue-200/80 p-6 md:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base md:text-lg font-bold text-slate-900">
                Lưu trữ Cloud FPT an tâm tuyệt đối
              </h4>
              <p className="text-xs md:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                Máy chủ đặt trực tiếp tại các trung tâm dữ liệu tiêu chuẩn quốc tế Tier III của FPT Telecom tại Hà Nội và TP.HCM. Dữ liệu được mã hóa đa lớp, cam kết bảo mật 100% quyền riêng tư của khách hàng.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => openModal({ title: "Tư vấn gói Cloud Camera FPT", category: "cloud_camera" })}
            className="whitespace-nowrap px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs md:text-sm shadow-md shadow-orange-500/20 transition-all hover:scale-105"
          >
            Tư vấn miễn phí
          </button>
        </div>
      </div>
    </section>
  );
}
