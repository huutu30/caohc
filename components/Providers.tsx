"use client";

import React from "react";
import { RegionProvider } from "@/context/RegionContext";
import { RegisterProvider } from "@/context/RegisterContext";
import { ProductDetailProvider } from "@/context/ProductDetailContext";
import RegisterModal from "@/components/common/RegisterModal";
import ProductDetailModal from "@/components/common/ProductDetailModal";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RegionProvider>
      <RegisterProvider>
        <ProductDetailProvider>
          {children}
          <RegisterModal />
          <ProductDetailModal />
        </ProductDetailProvider>
      </RegisterProvider>
    </RegionProvider>
  );
}
