import React from "react";

interface BigTextsWithInfoProps {
  text: string;
  label: string;
}

export const BigTextsWithInfo = (props: BigTextsWithInfoProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-3xl text-gray-600">{props.text}</div>
      <div className="text-sm text-gray-500">{props.label}</div>
    </div>
  );
};
