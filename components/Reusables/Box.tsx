import React from "react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export default function Box(props: BoxProps) {
  return (
    <div
      className={`relative bg-base-100 rounded-[40px] lg:p-8 md:p-6 p-4 shadow min-w-min border border-neutral ${props.className}`}
    >
      {props.children}
    </div>
  );
}
