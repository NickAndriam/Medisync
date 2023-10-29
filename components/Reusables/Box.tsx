import React from "react";

interface BoxProps {
  children: React.ReactNode;
}

export default function Box(props: BoxProps) {
  return (
    <div className="relative bg-white rounded-[40px] lg:p-8 md:p-6 p-4 shadow min-w-min">
      {props.children}
    </div>
  );
}
