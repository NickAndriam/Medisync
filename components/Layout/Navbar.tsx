"use client";

import React from "react";
import Profile from "../Reusables/Profile";
import { IoMdNotificationsOutline } from "react-icons/io";
import Search from "../Reusables/Search";
import QrCodeChecker from "../QrCode/QrCodeChecker";
import Link from "next/link";
import SwitchTheme from "../SwitchTheme";
import { useHideElement } from "@/utils/hooks";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  if (useHideElement()) return null;
  if (pathname.includes("/reception")) return null;
  return (
    <div
      className="absolute z-20 top-0 left-0 w-full h-20 bg-base-100  flex items-center justify-between p-2 lg:p-8 md:p-4 lg:pl-60 md:pl-4
    rounded-b-r-2xl shadow-sm"
    >
      {/* ----------- Logo --------------- */}
      <Link
        className="text-xl font-bold uppercase text-primary w-56 lg:flex hidden h-20 items-center justify-start pl-4
        absolute top-0 left-0 border-r border-base-200"
        href="/"
      >
        <span>Medi</span>
        <span className="bg-primary text-white ml-1 p-1 rounded-lg">Sync</span>
      </Link>

      {/* ----------- Search --------------- */}
      <Search />

      {/* Notifications, Qr Code, Theme Switch */}
      <div className="flex items-center gap-2 lg:gap-4 md:gap-4">
        <QrCodeChecker />
        <IoMdNotificationsOutline
          size={30}
          className="text-secondary-content"
        />
        <SwitchTheme />
        <Profile />
      </div>
    </div>
  );
}
