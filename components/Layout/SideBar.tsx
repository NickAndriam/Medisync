"use client";

import React from "react";
import { IconType } from "react-icons";
import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import Link from "next/link";
import { useHideElement } from "@/utils/hooks";
import { usePathname } from "next/navigation";
export default function SideBar() {
  const pathname = usePathname();
  if (useHideElement()) return null;
  if (pathname.includes("/reception")) return null;
  return (
    <aside className="lg:block md:hidden hidden z-10 w-56 h-screen bg-base-100 absolute left-0 top-0 p-x-4 rounded-r-2xl">
      {/* ----------------
            logo
        ---------------- */}
      <Link
        className="text-2xl font-bold uppercase text-primary w-full  flex h-20 items-center justify-start pl-4"
        href="/"
      >
        MediCare
      </Link>

      {/* ---------------
           Menu List
       -------------------*/}
      <section className="p-4">
        <p className="font-bold text-sm my-4 text-primary-content">Main Menu</p>
        <div className="flex items-start justify-start flex-col gap-y-5 my-5">
          <SideBarItem title="Profile" Icon={TbLayoutDashboard} to="/admin" />
          <SideBarItem
            title="Patients"
            Icon={MdOutlinePersonalInjury}
            size={25}
            to="/patients"
          />
          <SideBarItem
            title="Schedule"
            Icon={AiOutlineSchedule}
            size={25}
            to="/appointments"
          />
        </div>
      </section>
    </aside>
  );
}

const SideBarItem: React.FC<{
  title: string;
  Icon: IconType;
  size?: number;
  to?: string;
}> = ({ title, Icon, size = 25, to }) => {
  return (
    <Link href={`${to}`} className="w-full">
      <div className="flex items-center justify-start gap-2 text-secondary-content hover:text-white hover:bg-blue-400 p-2 w-full rounded-lg hover:shadow-lg">
        <Icon className="" size={size} />
        <p className="font-normal">{title}</p>
      </div>
    </Link>
  );
};
