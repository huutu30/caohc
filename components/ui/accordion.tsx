"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export function AccordionItem({
  title,
  children,
  isOpen,
  onToggle,
  className,
}: AccordionItemProps) {
  return (
    <div
      className={cn(
        "border-b border-slate-200 transition-colors last:border-b-0",
        className
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left font-semibold text-slate-800 hover:text-brand-blue transition-all group"
      >
        <span className="text-base sm:text-lg pr-4 group-hover:translate-x-1 transition-transform">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-hover:text-brand-blue",
            isOpen && "rotate-180 text-brand-blue"
          )}
        />
      </button>
      {isOpen && (
        <div className="pb-4 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed animate-in fade-in-50 duration-200">
          {children}
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  items: { id: string; question: string; answer: string }[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = React.useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={cn("divide-y divide-slate-100", className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.question}
          isOpen={openId === item.id}
          onToggle={() => toggle(item.id)}
        >
          {item.answer}
        </AccordionItem>
      ))}
    </div>
  );
}
