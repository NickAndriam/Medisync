import { type } from "os";
import React from "react";

interface TextInfoProps {
  type: string;
  text: string | undefined;
  className?: string;
}

export default function TextInfo(props: TextInfoProps) {
  return (
    <p className="text-secondary-content ">
      <b className="text-primary-content">{props.type}: </b>
      {props.text}
    </p>
  );
}
