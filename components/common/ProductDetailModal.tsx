"use client";

import React from "react";
import { X, CheckCircle2, ArrowRight, Zap, Shield, Wifi, HardDrive } from "lucide-react";
import { useProductDetail } from "@/context/ProductDetailContext";
import { useRegister } from "@/context/RegisterContext";

export default function ProductDetailModal() {
  const { isDetailModalOpen, closeDetailModal, selectedProduct } = useProductDetail();
  const { openRegisterModal } = useRegister();

  if (!isDetailModalOpen || !selectedProduct) return null;

  const handleRegisterFromDetail = () => {
    closeDetailModal();
    openRegisterModal(selectedProduct);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="bg-gradient-to-r from-[#004a9c] to-[#002f6c] p-6 text-white relative shrink-0">
          <button
            onClick={closeDetailModal}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            Thông Số Kỹ Thuật Chi Tiết
          </div>
          <h3 className="text-2xl font-black text-white">
            Gói Cước Internet FPT: {selectedProduct.name}
          </h3>
          <p className="text-xs text-blue-100 mt-1">
            Đột phá công nghệ WiFi 6 AX - Đường truyền quang tốc độ cao
          </p>
        </div>

        {/* SCROLLABLE BODY */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* SPEED & HARDWARE SUMMARY */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-4 text-center">
              <div className="flex items-center justify-center text-[#004a9c] mb-1">
                <Zap className="h-5 w-5 mr-1 text-amber-500" />
                <span className="text-xs font-bold uppercase">Download / Upload</span>
              </div>
              <div className="text-xl font-black text-[#004a9c]">
                {selectedProduct.downloadSpeed}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Upload: {selectedProduct.uploadSpeed}
              </div>
            </div>

            <div className="bg-orange-50/70 border border-orange-200/80 rounded-2xl p-4 text-center">
              <div className="flex items-center justify-center text-[#f57020] mb-1">
                <Wifi className="h-5 w-5 mr-1" />
                <span className="text-xs font-bold uppercase">Chuẩn WiFi</span>
              </div>
              <div className="text-xl font-black text-[#f57020]">
                Wi-Fi 6 AX
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Băng tần kép 2.4 & 5 GHz
              </div>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 text-center">
              <div className="flex items-center justify-center text-emerald-700 mb-1">
                <HardDrive className="h-5 w-5 mr-1" />
                <span className="text-xs font-bold uppercase">Thiết bị kèm theo</span>
              </div>
              <div className="text-sm font-black text-emerald-800 line-clamp-1">
                {selectedProduct.modem || "Modem WiFi 6"}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Phù hợp {selectedProduct.recommendedDevices || "1 - 10 thiết bị"}
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-2">
              Giới thiệu tổng quan
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
              {selectedProduct.description}
            </p>
          </div>

          {/* FEATURES LIST */}
          <div>
            <h4 className="text-xs font-bold uppercase text-slate-400 tracking-wider mb-3">
              Đặc quyền & Tính năng nổi bật
            </h4>
            <div className="space-y-2.5">
              {selectedProduct.features?.map((feat: string, idx: number) => (
                <div key={idx} className="flex items-start space-x-3 text-sm text-slate-800">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PREPAID OFFERS */}
          {(selectedProduct.gift6M || selectedProduct.gift12M) && (
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-4 rounded-2xl">
              <h4 className="text-xs font-bold uppercase text-amber-800 tracking-wider mb-2 flex items-center">
                <Shield className="h-4 w-4 mr-1.5 text-amber-600" />
                Chính sách ưu đãi thanh toán trước
              </h4>
              <ul className="space-y-1.5 text-xs font-semibold text-slate-800">
                {selectedProduct.gift6M && (
                  <li>• Đóng 6 tháng: {selectedProduct.gift6M}</li>
                )}
                {selectedProduct.gift12M && (
                  <li>• Đóng 12 tháng: {selectedProduct.gift12M}</li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* MODAL FOOTER */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs text-slate-500 block">Giá cước niêm yết:</span>
            <span className="text-2xl font-black text-[#f57020]">
              {selectedProduct.price?.toLocaleString("vi-VN")} đ
            </span>
            <span className="text-xs text-slate-500 font-medium ml-1">/ tháng (đã gồm VAT)</span>
          </div>

          <button
            onClick={handleRegisterFromDetail}
            className="bg-[#f57020] hover:bg-[#e05e10] text-white px-6 py-3 rounded-full font-black text-sm shadow-md hover:shadow-lg transition-all flex items-center space-x-2 active:scale-95"
          >
            <span>Đăng ký gói này ngay</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
