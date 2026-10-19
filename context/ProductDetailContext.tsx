"use client";

import React, { createContext, useContext, useState } from "react";
import { FptPackage } from "@/data/fptPackages";

interface ProductDetailContextType {
  isOpen: boolean;
  isDetailModalOpen: boolean;
  product: FptPackage | null;
  selectedProduct: FptPackage | null;
  openDetail: (pkg: FptPackage) => void;
  openDetailModal: (pkg: FptPackage) => void;
  closeDetail: () => void;
  closeDetailModal: () => void;
}

const ProductDetailContext = createContext<ProductDetailContextType | undefined>(undefined);

export function ProductDetailProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<FptPackage | null>(null);

  const openDetail = (pkg: FptPackage) => {
    setProduct(pkg);
    setIsOpen(true);
  };

  const closeDetail = () => {
    setIsOpen(false);
  };

  return (
    <ProductDetailContext.Provider
      value={{
        isOpen,
        isDetailModalOpen: isOpen,
        product,
        selectedProduct: product,
        openDetail,
        openDetailModal: openDetail,
        closeDetail,
        closeDetailModal: closeDetail,
      }}
    >
      {children}
    </ProductDetailContext.Provider>
  );
}

export function useProductDetail() {
  const context = useContext(ProductDetailContext);
  if (!context) {
    throw new Error("useProductDetail must be used within a ProductDetailProvider");
  }
  return context;
}
