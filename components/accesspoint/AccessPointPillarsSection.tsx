import React from "react";
import Image from "next/image";
import { AP_PILLARS } from "@/data/accessPointData";

export default function AccessPointPillarsSection() {
  return (
    <section className="py-10 md:py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {AP_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md hover:border-orange-200 transition-all flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image
                  src={pillar.icon}
                  alt={pillar.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1.5">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
