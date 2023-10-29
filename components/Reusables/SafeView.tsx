import React from "react";

interface SafeViewProps {
  children: React.ReactNode;
}

export default function SafeView(props: SafeViewProps) {
  return (
    <div className="bg-gray-200 w-screen h-screen lg:pl-60 lg:pt-24 p-4 pt-24 overflow-y-scroll">
      {props.children}
    </div>
  );
}
