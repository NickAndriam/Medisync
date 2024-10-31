import React, { useState } from "react";

interface SelectProps {
  options?: Array<any>;
  label?: any;
  title?: string;
  selectedOption?: (option: any) => void;
}

export default function SelectStyled({
  selectedOption = () => {},
  ...props
}: SelectProps) {
  const [selected, setSelected] = useState<any>(props.label);
  return (
    <div className="flex lg:flex-row flex-col gap-2 items-start lg:items-center justify-center">
      <h2 className="text-md  text-gray-500">{props.title}:</h2>
      <div className="dropdown light">
        <label
          tabIndex={0}
          className="btn m-1 uppercase-none bg-base-100 border border-neutral hover:border-neutral hover:bg-base-content text-primary-content"
        >
          {selected === props.label ? (
            props.label
          ) : (
            <div className="flex items-center gap-2 p-3 hover:bg-base-content rounded-lg cursor-pointer">
              <div
                className={`${selected.color} w-[10px] h-[10px] rounded-full`}
              />
              <a>{selected.name}</a>
            </div>
          )}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border border-neutral rounded-box w-52"
        >
          {props.options?.map((option, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-2 p-3 hover:bg-base-content rounded-lg cursor-pointer text-primary-content"
                onClick={() => {
                  setSelected(option), selectedOption(option.type);
                }}
              >
                <div
                  className={`${option.color} w-[10px] h-[10px] rounded-full`}
                />
                <a>{option.name}</a>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
