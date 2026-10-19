"use client";

import React from "react";
import TopBar from "@/components/fpt/TopBar";
import HeaderNav from "@/components/fpt/HeaderNav";
import AnnouncementBar from "@/components/fpt/AnnouncementBar";

export default function Navbar() {
  return (
    <>
      <TopBar />
      <HeaderNav />
      <AnnouncementBar />
    </>
  );
}
