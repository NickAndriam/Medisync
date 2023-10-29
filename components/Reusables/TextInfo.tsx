import { type } from "os";
import React from "react";

interface TextInfoProps {
  type: string;
  text: string | undefined;
}

export default function TextInfo(props: TextInfoProps) {
  return (
    <p className="text-gray-600">
      <b className="text-gray-700">{props.type}: </b>
      {props.text}
    </p>
  );
}
