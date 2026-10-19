"use client";

import React from "react";
import { Cpu } from "lucide-react";
import { CAMERA_TECH_FEATURES } from "@/data/cameraPageData";

export default function CameraTechSection() {
  return (
    <section className="py-12 md:py-20 bg-white" id="cong-nghe-noi-bat">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold mb-3 border border-orange-200">
            <Cpu className="w-3.5 h-3.5 text-orange-600" />
            <span>Tiêu Chuẩn Công Nghệ 4.0</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Công nghệ nổi bật
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Trí tuệ nhân tạo AI kết hợp nền tảng điện toán đám mây Cloud chuẩn quốc tế mang lại sự an tâm tuyệt đối
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAMERA_TECH_FEATURES.map((tech) => (
            <div
              key={tech.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* SVG Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 p-2.5 mb-5 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                  <img
                    src={tech.icon}
                    alt={tech.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-4">
                  {tech.title}
                </h3>

                {/* Bullets List */}
                <ul className="space-y-2.5 text-xs md:text-sm text-slate-600">
                  {tech.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                      <span
                        dangerouslySetInnerHTML={{ __html: bullet }}
                        className="leading-relaxed"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
