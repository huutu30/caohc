"use client";

import * as React from "react";
import { HelpCircle, Search } from "lucide-react";
import { FAQS } from "@/lib/packages";
import { AccordionItem } from "@/components/ui/accordion";

export interface FaqItem {
  id?: string;
  q?: string;
  a?: string;
  question?: string;
  answer?: string;
}

interface FaqAccordionProps {
  items?: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps = {}) {
  const [searchTerm, setSearchTerm] = React.useState("");
  
  const rawList = items
    ? items.map((it, idx) => ({
        id: it.id || `faq-${idx}`,
        question: it.question || it.q || "",
        answer: it.answer || it.a || "",
      }))
    : FAQS;

  const [openId, setOpenId] = React.useState<string | null>(rawList[0]?.id || null);

  const filteredFaqs = rawList.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="cau-hoi-thuong-gap" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="h-4 w-4" />
            <span>Giải Đáp Thắc Mắc</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Câu Hỏi Thường Gặp
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Mọi thông tin về thủ tục, thiết bị, gói cước và quy trình hòa mạng FPT Telecom
          </p>

          {/* SEARCH BOX */}
          <div className="mt-6 max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Tìm kiếm câu hỏi (VD: thủ tục, thanh toán, modem...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-12 rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue shadow-sm transition-all"
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
          </div>
        </div>

        {/* ACCORDION LIST */}
        <div className="rounded-3xl bg-slate-50/60 p-6 sm:p-8 border border-slate-200/80 shadow-card">
          {filteredFaqs.length > 0 ? (
            <div className="divide-y divide-slate-200">
              {filteredFaqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  title={faq.question}
                  isOpen={openId === faq.id}
                  onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                >
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </AccordionItem>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">
              Không tìm thấy câu hỏi phù hợp với từ khóa &ldquo;{searchTerm}&rdquo;. Quý khách vui lòng liên hệ Hotline đăng ký thuê bao 0775 780 962 để được tư vấn gói cước nhanh chóng.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
