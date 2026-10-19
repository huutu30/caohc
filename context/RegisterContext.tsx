"use client";

import React, { createContext, useContext, useState } from "react";
import { FptPackage, FptVvipSportsCombo } from "@/data/fptPackages";

interface RegisterContextType {
  isOpen: boolean;
  isRegisterModalOpen: boolean;
  selectedPackage: any | null;
  openModal: (pkg?: any) => void;
  openRegisterModal: (pkg?: any) => void;
  closeModal: () => void;
  closeRegisterModal: () => void;
}

const RegisterContext = createContext<RegisterContextType | undefined>(undefined);

export function RegisterProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any | null>(null);

  const openModal = (pkg?: any) => {
    if (pkg) setSelectedPackage(pkg);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <RegisterContext.Provider
      value={{
        isOpen,
        isRegisterModalOpen: isOpen,
        selectedPackage,
        openModal,
        openRegisterModal: openModal,
        closeModal,
        closeRegisterModal: closeModal,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegisterModal() {
  const context = useContext(RegisterContext);
  if (!context) {
    throw new Error("useRegisterModal must be used within a RegisterProvider");
  }
  return context;
}

export const useRegister = useRegisterModal;
