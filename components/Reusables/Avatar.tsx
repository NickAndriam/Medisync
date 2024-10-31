import Image from "next/image";
import React from "react";

interface AvatarProps {
  src?: string;
  size?: number;
  alt?: string;
}

export default function Avatar({ size = 40, ...props }: AvatarProps) {
  return (
    <div
      className={`rounded-full overflow-hidden border border-primary`}
      style={{ width: size, height: size }}
    >
      <Image src={require("@/public/assets/img/Nick.jpeg")} alt="avatar" />
    </div>
  );
}
