import React from "react";
import { IconType } from "react-icons";
import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { AiOutlineSchedule } from "react-icons/ai";
import Link from "next/link";
export default function SideBar() {
  return (
    <aside className="lg:block md:hidden hidden z-10 w-56 h-screen bg-white absolute left-0 top-0 p-x-4 rounded-r-2xl">
      <Link
        className="text-2xl font-bold uppercase text-blue-400 w-full  flex h-20 items-center justify-start pl-4"
        href="/"
      >
        MediCare
      </Link>
      <section className="p-4">
        <p className="font-bold text-sm my-4">Main Menu</p>
        <div className="flex items-start justify-start flex-col gap-y-5 my-5">
          <SideBarItem title="Overview" Icon={TbLayoutDashboard} />
          <SideBarItem
            title="Patients"
            Icon={MdOutlinePersonalInjury}
            size={25}
          />
          <SideBarItem
            title="Appointments"
            Icon={MdOutlinePersonalInjury}
            size={25}
            to="/appointments"
          />
          <SideBarItem title="Schedule" Icon={AiOutlineSchedule} />
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
}> = ({ title, Icon, size = 22, to }) => {
  return (
    <Link href={`${to}`}>
      <div className="flex items-center justify-start gap-2 text-gray-600 hover:text-white hover:bg-blue-400 p-2 w-full rounded-lg hover:shadow-lg">
        <Icon className="" size={size} />
        <p className="font-normal">{title}</p>
      </div>
    </Link>
  );
};
