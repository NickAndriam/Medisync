import React from "react";

interface MyIconProps {
  icon: any;
  size?: number;
  title?: string;
  label?: string;
  color?: string;
}
export const MyIcon = (props: MyIconProps) => {
  return (
    <div className="flex flex-col gap-y-2 items-center justify-around min-w-min text-center">
      <props.icon
        className={`${props.color || "text-gray-700"}`}
        size={props.size || 25}
      />
      <p className={`text-xl font-bold ${props.color}`}>{props.label}</p>
      <p className={`text-[12px] ${props.color} opacity-90`}>{props.title}</p>
    </div>
  );
};
