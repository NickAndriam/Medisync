import React from "react";

interface BigTextsWithInfoProps {
  text: any;
  label: any;
}

export const BigTextsWithInfo = (props: BigTextsWithInfoProps) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="text-3xl text-primary-content">{props.text}</div>
      <div className="text-sm text-gray-500">{props.label}</div>
    </div>
  );
};
