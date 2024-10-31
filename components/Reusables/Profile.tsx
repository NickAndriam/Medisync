import React from "react";
import Avatar from "./Avatar";

export default function Profile() {
  return (
    <div className="flex items-center gap-x-2">
      <Avatar />
      <p className="lg:flex md:flex hidden text-sm text-primary-content">
        Dr. Nick Andriam{" "}
      </p>
    </div>
  );
}
