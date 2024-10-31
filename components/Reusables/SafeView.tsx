import React from "react";

interface SafeViewProps {
  children: React.ReactNode;
  className?: string;
}

export default function SafeView(props: SafeViewProps) {
  return (
    <div
      className={`bg-base-content w-screen h-screen lg:pl-60 pt-24 p-4 overflow-y-scroll ${props.className}`}
    >
      {props.children}
    </div>
  );
}
