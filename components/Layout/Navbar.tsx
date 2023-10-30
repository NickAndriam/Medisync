import React from "react";
import Profile from "../Reusables/Profile";
import { IoMdNotificationsOutline } from "react-icons/io";
import Search from "../Reusables/Search";
import QrCodeChecker from "../QrCode/QrCodeChecker";
import Link from "next/link";

export default function Navbar() {
  return (
    <div
      className="absolute z-20 top-0 left-0 w-full h-20 bg-white  flex items-center justify-between p-2 lg:p-8 md:p-4 lg:pl-60 md:pl-4
    rounded-b-r-2xl shadow-sm"
    >
      <Link
        className="text-2xl font-bold uppercase text-blue-400 w-56 lg:flex hidden h-20 items-center justify-start pl-4
        absolute top-0 left-0 border-r"
        href="/"
      >
        MediCare
      </Link>
      <Search />
      <div className="flex items-center gap-2 lg:gap-4 md:gap-4">
        <QrCodeChecker />
        <IoMdNotificationsOutline size={30} className="text-gray-600" />
        <Profile />
      </div>
    </div>
  );
}
