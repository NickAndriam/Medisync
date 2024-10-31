import React from "react";
import { CgMenuLeftAlt } from "react-icons/cg";

export default function Search() {
  return (
    <div className="flex items-center gap-2 lg:gap-4 md:gap-4">
      <CgMenuLeftAlt className="text-[25px] text-gray-600 lg:hidden md:hidden flex" />
      <input
        type="text"
        placeholder="Search "
        className="input input-bordered lg:w-[400px] md:w-[400px] w-full h-11 rounded-full bg-base-content border-neutral text-primary-content"
      />
    </div>
  );
}
