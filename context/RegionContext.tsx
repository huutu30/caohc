"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface Province {
  id: string;
  name: string;
  region: "hcm" | "hn" | "tinh";
}

export const PROVINCES: Province[] = [
  { id: "ha-noi", name: "Hà Nội", region: "hn" },
  { id: "ho-chi-minh", name: "TP. Hồ Chí Minh", region: "hcm" },
  { id: "da-nang", name: "Đà Nẵng", region: "tinh" },
  { id: "hai-phong", name: "Hải Phòng", region: "tinh" },
  { id: "can-tho", name: "Cần Thơ", region: "tinh" },
  { id: "binh-duong", name: "Bình Dương", region: "tinh" },
  { id: "dong-nai", name: "Đồng Nai", region: "tinh" },
  { id: "ba-ria-vung-tau", name: "Bà Rịa - Vũng Tàu", region: "tinh" },
  { id: "quang-ninh", name: "Quảng Ninh", region: "tinh" },
  { id: "bac-ninh", name: "Bắc Ninh", region: "tinh" },
  { id: "khanh-hoa", name: "Khánh Hòa", region: "tinh" },
  { id: "lam-dong", name: "Lâm Đồng", region: "tinh" },
  { id: "thua-thien-hue", name: "Thừa Thiên Huế", region: "tinh" },
  { id: "nghe-an", name: "Nghệ An", region: "tinh" },
  { id: "thanh-hoa", name: "Thanh Hóa", region: "tinh" },
  { id: "thai-nguyen", name: "Thái Nguyên", region: "tinh" },
  { id: "vinh-phuc", name: "Vĩnh Phúc", region: "tinh" },
  { id: "long-an", name: "Long An", region: "tinh" },
  { id: "tien-giang", name: "Tiền Giang", region: "tinh" },
  { id: "an-giang", name: "An Giang", region: "tinh" },
  { id: "kien-giang", name: "Kiên Giang", region: "tinh" },
  { id: "dak-lak", name: "Đắk Lắk", region: "tinh" },
  { id: "binh-dinh", name: "Bình Định", region: "tinh" },
  { id: "toan-quoc", name: "Tất cả tỉnh thành", region: "tinh" },
];

interface RegionContextType {
  activeProvince: Province;
  setActiveProvince: (province: Province) => void;
  customerType: "personal" | "business";
  setCustomerType: (type: "personal" | "business") => void;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export const RegionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeProvince, setActiveProvince] = useState<Province>(PROVINCES[0]);
  const [customerType, setCustomerType] = useState<"personal" | "business">(
    "personal"
  );

  useEffect(() => {
    try {
      const saved = localStorage.getItem("fpt_active_province");
      if (saved) {
        const found = PROVINCES.find((p) => p.id === saved);
        if (found) setActiveProvince(found);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const handleSetProvince = (province: Province) => {
    setActiveProvince(province);
    try {
      localStorage.setItem("fpt_active_province", province.id);
    } catch {
      // Ignore localStorage errors
    }
  };

  return (
    <RegionContext.Provider
      value={{
        activeProvince,
        setActiveProvince: handleSetProvince,
        customerType,
        setCustomerType,
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};

export const useRegion = () => {
  const context = useContext(RegionContext);
  if (!context) {
    throw new Error("useRegion must be used within a RegionProvider");
  }
  return context;
};
