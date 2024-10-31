import React from "react";

interface ButtonProps {
  bgColor?: string;
  onClick?: () => void;
  title: string;
}

export default function Button(props: ButtonProps) {
  return (
    <div
      onClick={props.onClick}
      className={`${
        props.bgColor || "bg-primary"
      } hover:bg-secondary w-max p-2 px-4 text-white rounded-3xl cursor-pointer`}
    >
      {props.title}
    </div>
  );
}
