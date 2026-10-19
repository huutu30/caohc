"use client";

import React, { useState } from "react";
import { Calendar, ChevronRight, Flame, Tv } from "lucide-react";
import { useRegister } from "@/context/RegisterContext";

interface MatchItem {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeShort: string;
  awayShort: string;
  homeColor: string;
  awayColor: string;
  time: string;
  date: string;
  stadium: string;
  isHot?: boolean;
}

interface StandingItem {
  rank: number;
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  gf: number;
  ga: number;
  gd: number;
  points: number;
}

export default function EplScheduleSection() {
  const { openRegisterModal } = useRegister();
  const [activeTab, setActiveTab] = useState<"schedule" | "result" | "standing">(
    "schedule"
  );

  const matches: MatchItem[] = [
    {
      id: "m1",
      homeTeam: "Everton",
      awayTeam: "Chelsea",
      homeShort: "EVE",
      awayShort: "CHE",
      homeColor: "#003399",
      awayColor: "#034694",
      time: "18:30",
      date: "Thứ 7, 17/10",
      stadium: "Goodison Park",
      isHot: true,
    },
    {
      id: "m2",
      homeTeam: "Brentford",
      awayTeam: "Liverpool",
      homeShort: "BRE",
      awayShort: "LIV",
      homeColor: "#e30613",
      awayColor: "#c8102e",
      time: "21:00",
      date: "Thứ 7, 17/10",
      stadium: "Gtech Community",
      isHot: true,
    },
    {
      id: "m3",
      homeTeam: "Newcastle",
      awayTeam: "Aston Villa",
      homeShort: "NEW",
      awayShort: "AVL",
      homeColor: "#241f20",
      awayColor: "#95bfe5",
      time: "23:30",
      date: "Thứ 7, 17/10",
      stadium: "St James Park",
      isHot: false,
    },
    {
      id: "m4",
      homeTeam: "Leeds United",
      awayTeam: "Manchester Utd",
      homeShort: "LEE",
      awayShort: "MUN",
      homeColor: "#ffcd00",
      awayColor: "#da291c",
      time: "20:00",
      date: "Chủ nhật, 18/10",
      stadium: "Elland Road",
      isHot: true,
    },
    {
      id: "m5",
      homeTeam: "Nottingham Forest",
      awayTeam: "Arsenal",
      homeShort: "NFO",
      awayShort: "ARS",
      homeColor: "#dd0000",
      awayColor: "#ef0107",
      time: "22:30",
      date: "Chủ nhật, 18/10",
      stadium: "City Ground",
      isHot: true,
    },
    {
      id: "m6",
      homeTeam: "Manchester City",
      awayTeam: "Brighton",
      homeShort: "MCI",
      awayShort: "BHA",
      homeColor: "#6cabdd",
      awayColor: "#0057b8",
      time: "02:00",
      date: "Thứ 2, 19/10",
      stadium: "Etihad Stadium",
      isHot: false,
    },
  ];

  const results = [
    {
      homeTeam: "Manchester Utd",
      awayTeam: "Chelsea",
      homeScore: 2,
      awayScore: 1,
      date: "Vòng 6",
    },
    {
      homeTeam: "Arsenal",
      awayTeam: "Southampton",
      homeScore: 3,
      awayScore: 0,
      date: "Vòng 6",
    },
    {
      homeTeam: "Manchester City",
      awayTeam: "Fulham",
      homeScore: 3,
      awayScore: 2,
      date: "Vòng 6",
    },
    {
      homeTeam: "Crystal Palace",
      awayTeam: "Liverpool",
      homeScore: 0,
      awayScore: 1,
      date: "Vòng 6",
    },
    {
      homeTeam: "Brighton",
      awayTeam: "Tottenham",
      homeScore: 3,
      awayScore: 2,
      date: "Vòng 6",
    },
  ];

  const standings: StandingItem[] = [
    { rank: 1, team: "Liverpool", played: 7, won: 6, drawn: 0, lost: 1, gf: 13, ga: 2, gd: 11, points: 18 },
    { rank: 2, team: "Manchester City", played: 7, won: 5, drawn: 2, lost: 0, gf: 17, ga: 8, gd: 9, points: 17 },
    { rank: 3, team: "Arsenal", played: 7, won: 5, drawn: 2, lost: 0, gf: 15, ga: 6, gd: 9, points: 17 },
    { rank: 4, team: "Chelsea", played: 7, won: 4, drawn: 2, lost: 1, gf: 16, ga: 8, gd: 8, points: 14 },
    { rank: 5, team: "Aston Villa", played: 7, won: 4, drawn: 2, lost: 1, gf: 12, ga: 9, gd: 3, points: 14 },
    { rank: 6, team: "Newcastle United", played: 7, won: 3, drawn: 3, lost: 1, gf: 8, ga: 7, gd: 1, points: 12 },
    { rank: 7, team: "Tottenham Hotspur", played: 7, won: 3, drawn: 1, lost: 3, gf: 14, ga: 8, gd: 6, points: 10 },
    { rank: 8, team: "Manchester United", played: 7, won: 3, drawn: 2, lost: 2, gf: 8, ga: 8, gd: 0, points: 11 },
  ];

  return (
    <section className="w-full bg-[#050e26] py-12 sm:py-16 text-white border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Calendar className="size-3.5" />
            <span>Ngoại Hạng Anh 2026/27</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
            Xem Trực Tiếp Ngoại Hạng Anh Tuần Này
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Trực tiếp và độc quyền tất cả các trận cầu đinh trên hạ tầng mạng FPT Wi-Fi 6 siêu tốc
          </p>
        </div>

        {/* TAB SWITCHER */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8">
          <button
            onClick={() => setActiveTab("schedule")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "schedule"
                ? "bg-gradient-to-r from-[#e86010] to-[#ff7d2e] text-white shadow-lg shadow-orange-500/25"
                : "bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white"
            }`}
          >
            Lịch thi đấu tuần này
          </button>
          <button
            onClick={() => setActiveTab("result")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "result"
                ? "bg-gradient-to-r from-[#e86010] to-[#ff7d2e] text-white shadow-lg shadow-orange-500/25"
                : "bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white"
            }`}
          >
            Kết quả các vòng đấu
          </button>
          <button
            onClick={() => setActiveTab("standing")}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "standing"
                ? "bg-gradient-to-r from-[#e86010] to-[#ff7d2e] text-white shadow-lg shadow-orange-500/25"
                : "bg-white/10 text-slate-300 hover:bg-white/15 hover:text-white"
            }`}
          >
            Bảng xếp hạng
          </button>
        </div>

        {/* TAB 1: SCHEDULE CARDS */}
        {activeTab === "schedule" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {matches.map((m) => (
              <div
                key={m.id}
                className="bg-[#0b1b44]/80 border border-white/10 hover:border-orange-500/50 rounded-2xl p-5 flex flex-col justify-between transition-all hover:-translate-y-1 shadow-lg group relative overflow-hidden"
              >
                {m.isHot && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-600/30 border border-red-500/40 text-[10px] font-bold text-red-400 uppercase tracking-wide">
                    <Flame className="size-3 text-red-400" /> Trận Đinh
                  </span>
                )}

                <div>
                  <div className="flex items-center gap-2 text-xs text-amber-400 font-bold mb-4">
                    <Calendar className="size-3.5" />
                    <span>{m.date} - {m.time}</span>
                  </div>

                  {/* TEAMS VERSUS */}
                  <div className="flex items-center justify-between py-2">
                    {/* HOME TEAM */}
                    <div className="flex flex-col items-center flex-1 text-center">
                      <div
                        className="size-12 rounded-full flex items-center justify-center font-black text-sm text-white shadow-md mb-2 border border-white/20"
                        style={{ backgroundColor: m.homeColor }}
                      >
                        {m.homeShort}
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                        {m.homeTeam}
                      </span>
                    </div>

                    {/* VS BADGE */}
                    <div className="flex flex-col items-center px-3">
                      <span className="text-xs font-black text-orange-400 bg-orange-500/10 px-2 py-1 rounded-md border border-orange-500/20">
                        VS
                      </span>
                      <span className="text-[10px] text-slate-400 mt-1">4K Live</span>
                    </div>

                    {/* AWAY TEAM */}
                    <div className="flex flex-col items-center flex-1 text-center">
                      <div
                        className="size-12 rounded-full flex items-center justify-center font-black text-sm text-white shadow-md mb-2 border border-white/20"
                        style={{ backgroundColor: m.awayColor }}
                      >
                        {m.awayShort}
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                        {m.awayTeam}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 text-center text-[11px] text-slate-400">
                    Sân vận động: <span className="text-slate-300 font-medium">{m.stadium}</span>
                  </div>
                </div>

                {/* ACTION CTA */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <Tv className="size-3.5" />
                    <span>FPT Play 4K</span>
                  </div>
                  <button
                    onClick={() =>
                      openRegisterModal({
                        name: `Combo xem trận ${m.homeTeam} vs ${m.awayTeam}`,
                        categoryName: "Ngoại Hạng Anh FPT Play",
                      })
                    }
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    <span>Xem trận này</span>
                    <ChevronRight className="size-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: RESULTS */}
        {activeTab === "result" && (
          <div className="max-w-2xl mx-auto space-y-3">
            {results.map((r, idx) => (
              <div
                key={idx}
                className="bg-[#0b1b44]/70 border border-white/10 rounded-2xl p-4 flex items-center justify-between"
              >
                <span className="text-xs font-bold text-slate-400 w-20">{r.date}</span>
                <div className="flex items-center justify-center gap-4 flex-1">
                  <span className="text-sm font-bold text-right flex-1 text-white">
                    {r.homeTeam}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-orange-500/20 text-orange-400 font-black text-sm border border-orange-500/30">
                    {r.homeScore} - {r.awayScore}
                  </span>
                  <span className="text-sm font-bold text-left flex-1 text-white">
                    {r.awayTeam}
                  </span>
                </div>
                <span className="text-[10px] text-emerald-400 font-semibold w-16 text-right">
                  Đã kết thúc
                </span>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: STANDINGS TABLE */}
        {activeTab === "standing" && (
          <div className="max-w-4xl mx-auto bg-[#0b1b44]/80 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#071333] text-slate-400 uppercase font-bold border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">#</th>
                    <th className="py-3 px-4">Câu Lạc Bộ</th>
                    <th className="py-3 px-3 text-center">Trận</th>
                    <th className="py-3 px-3 text-center">T</th>
                    <th className="py-3 px-3 text-center">H</th>
                    <th className="py-3 px-3 text-center">B</th>
                    <th className="py-3 px-3 text-center">HS</th>
                    <th className="py-3 px-4 text-center font-black text-amber-400">Điểm</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {standings.map((s) => (
                    <tr
                      key={s.rank}
                      className="hover:bg-white/5 transition-colors font-medium text-slate-200"
                    >
                      <td className="py-3 px-4">
                        <span
                          className={`size-6 rounded-full inline-flex items-center justify-center font-bold text-[11px] ${
                            s.rank <= 4
                              ? "bg-blue-600 text-white"
                              : "bg-slate-800 text-slate-300"
                          }`}
                        >
                          {s.rank}
                        </span>
                      </td>
                      <td className="py-3 px-4 font-bold text-white">{s.team}</td>
                      <td className="py-3 px-3 text-center text-slate-400">{s.played}</td>
                      <td className="py-3 px-3 text-center">{s.won}</td>
                      <td className="py-3 px-3 text-center text-slate-400">{s.drawn}</td>
                      <td className="py-3 px-3 text-center text-slate-400">{s.lost}</td>
                      <td className="py-3 px-3 text-center text-slate-300">
                        {s.gd > 0 ? `+${s.gd}` : s.gd}
                      </td>
                      <td className="py-3 px-4 text-center font-black text-amber-400 text-sm">
                        {s.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
