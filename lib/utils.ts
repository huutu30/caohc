import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("vi-VN").format(amount) + "đ";
}

export function isValidVietnamesePhone(phone: string): boolean {
  // Regex kiểm tra số điện thoại Việt Nam (10 số, đầu số 03, 05, 07, 08, 09)
  const vnPhoneRegex = /^(03|05|07|08|09)\d{8}$/;
  return vnPhoneRegex.test(phone.trim());
}
