"use client";

import * as React from "react";
import Link from "next/link";
import { COMPARISON_DATA } from "@/lib/packages";
import { Button } from "@/components/ui/button";

export default function ComparisonTable() {
  return (
    <div className="w-full overflow-hidden rounded-3xl bg-white border border-slate-200/90 shadow-xl">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80">
              <th className="p-5 font-bold text-slate-500 uppercase tracking-wider text-xs w-1/4">
                Tiêu chí so sánh
              </th>
              <th className="p-5 font-bold text-slate-900 text-center w-[18.75%]">
                <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
                  Cá nhân
                </span>
                <span className="text-lg font-black text-brand-blue">Giga 150</span>
              </th>
              <th className="p-5 font-bold text-slate-900 text-center w-[18.75%] bg-blue-50/70 border-x border-blue-100 relative">
                <span className="absolute -top-0 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-b-md shadow-sm">
                  Phổ biến nhất
                </span>
                <span className="text-xs uppercase tracking-wider text-brand-orange block mb-1 pt-1">
                  Gia đình
                </span>
                <span className="text-lg font-black text-brand-orange">Sky 300</span>
              </th>
              <th className="p-5 font-bold text-slate-900 text-center w-[18.75%]">
                <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
                  Gaming
                </span>
                <span className="text-lg font-black text-slate-900">F-Game 1Gbps</span>
              </th>
              <th className="p-5 font-bold text-slate-900 text-center w-[18.75%]">
                <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
                  Cao cấp
                </span>
                <span className="text-lg font-black text-brand-blue">Meta 1Gbps</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {COMPARISON_DATA.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/40 hover:bg-slate-50/80 transition-colors"}
              >
                <td className="p-4 sm:p-5 font-semibold text-slate-800 text-xs sm:text-sm">
                  {row.criteria}
                </td>
                <td className="p-4 sm:p-5 text-center text-xs sm:text-sm font-medium">
                  {row.giga}
                </td>
                <td className="p-4 sm:p-5 text-center text-xs sm:text-sm font-bold text-brand-blue bg-blue-50/40 border-x border-blue-100">
                  {row.sky}
                </td>
                <td className="p-4 sm:p-5 text-center text-xs sm:text-sm font-medium">
                  {row.fgame}
                </td>
                <td className="p-4 sm:p-5 text-center text-xs sm:text-sm font-medium">
                  {row.meta}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-slate-50/80 border-t border-slate-200">
              <td className="p-5 text-xs text-slate-500 font-medium">
                * Toàn bộ các gói cước đều trang bị Modem WiFi 6 miễn phí
              </td>
              <td className="p-5 text-center">
                <Link href="/dang-ky?package=giga-150">
                  <Button size="sm" variant="outline" className="w-full text-xs font-bold">
                    Chọn Giga
                  </Button>
                </Link>
              </td>
              <td className="p-5 text-center bg-blue-50/70 border-x border-blue-100">
                <Link href="/dang-ky?package=sky-300">
                  <Button size="sm" variant="default" className="w-full text-xs font-bold shadow-cta">
                    Chọn Sky 300
                  </Button>
                </Link>
              </td>
              <td className="p-5 text-center">
                <Link href="/dang-ky?package=f-game">
                  <Button size="sm" variant="outline" className="w-full text-xs font-bold">
                    Chọn F-Game
                  </Button>
                </Link>
              </td>
              <td className="p-5 text-center">
                <Link href="/dang-ky?package=meta-1gbps">
                  <Button size="sm" variant="outline" className="w-full text-xs font-bold">
                    Chọn Meta
                  </Button>
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
