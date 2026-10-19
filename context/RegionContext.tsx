"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CITY_DATA } from "@/data/cityData";
import { getProductPrice } from "@/data/priceHelper";

export interface Province {
  id: string;
  name: string;
  shortName: string;
  region: "hcm" | "tinh";
}

interface CityInfo {
  name: string;
  shortName?: string;
  region: string;
}

const cityMap = CITY_DATA as Record<string, CityInfo>;

// Chuyển đổi CITY_DATA sang danh sách PROVINCES có sắp xếp ưu tiên
const priorityIds = ["toan-quoc", "ha-noi", "hcm", "da-nang", "hai-phong", "can-tho"];

export const PROVINCES: Province[] = Object.entries(cityMap)
  .map(([id, info]) => ({
    id,
    name: info.name,
    shortName: info.shortName || info.name,
    region: (info.region === "hcm" ? "hcm" : "tinh") as "hcm" | "tinh",
  }))
  .sort((a, b) => {
    const aPri = priorityIds.indexOf(a.id);
    const bPri = priorityIds.indexOf(b.id);
    if (aPri !== -1 && bPri !== -1) return aPri - bPri;
    if (aPri !== -1) return -1;
    if (bPri !== -1) return 1;
    return a.name.localeCompare(b.name, "vi");
  });

interface ItemPriceInput {
  id?: string;
  price?: number | { hcm: number; tinh: number } | Record<string, number>;
}

interface RegionContextType {
  activeCity: string;
  activeProvince: Province;
  region: "hcm" | "tinh";
  changeCity: (cityId: string) => void;
  setActiveProvince: (province: Province | string) => void;
  customerType: "personal" | "business";
  setCustomerType: (type: "personal" | "business") => void;
  getPrice: (item: ItemPriceInput) => number;
}

const RegionContext = createContext<RegionContextType | undefined>(undefined);

export const RegionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  // Helper bóc tách city từ đường dẫn URL (vd: /dang-ky-internet-wifi/[city] hoặc /lap-internet-wifi/[city])
  const getCityFromPath = (path: string | null): string => {
    if (!path) return "toan-quoc";
    const match = path.match(/^\/(?:dang-ky-internet-wifi|lap-internet-wifi)\/([^/]+)/);
    if (match && cityMap[match[1]]) {
      return match[1];
    }
    return "toan-quoc";
  };

  const [activeCity, setActiveCity] = useState<string>("toan-quoc");
  const [customerType, setCustomerType] = useState<"personal" | "business">("personal");

  // Khôi phục từ URL path hoặc localStorage khi mount
  useEffect(() => {
    const pathCity = getCityFromPath(pathname);
    if (pathCity !== "toan-quoc") {
      setActiveCity(pathCity);
      return;
    }

    try {
      const saved = localStorage.getItem("fpt_active_city") || localStorage.getItem("fpt_active_province");
      if (saved && cityMap[saved]) {
        setActiveCity(saved);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, [pathname]);

  const changeCity = (cityId: string) => {
    if (!cityMap[cityId]) return;
    setActiveCity(cityId);
    try {
      localStorage.setItem("fpt_active_city", cityId);
    } catch {
      // Ignore localStorage errors
    }
  };

  const setActiveProvince = (provinceOrId: Province | string) => {
    const id = typeof provinceOrId === "string" ? provinceOrId : provinceOrId.id;
    changeCity(id);
  };

  // Vùng miền: nội thành Hà Nội & HCM -> 'hcm'; các tỉnh khác -> 'tinh'
  const cityInfo = cityMap[activeCity] || cityMap["toan-quoc"];
  const region: "hcm" | "tinh" = cityInfo.region === "hcm" ? "hcm" : "tinh";

  const activeProvince: Province = {
    id: activeCity,
    name: cityInfo.name,
    shortName: cityInfo.shortName || cityInfo.name,
    region,
  };

  // Helper tính giá cước tự động theo tỉnh thành hiện tại
  const getPrice = (item: ItemPriceInput): number => {
    return getProductPrice(item, activeCity, region);
  };

  return (
    <RegionContext.Provider
      value={{
        activeCity,
        activeProvince,
        region,
        changeCity,
        setActiveProvince,
        customerType,
        setCustomerType,
        getPrice,
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
