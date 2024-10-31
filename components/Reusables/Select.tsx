import React, { useState } from "react";

interface SelectProps {
  options?: Array<any>;
  label?: any;
  title?: string;
}

export default function Select(props: SelectProps) {
  const [selected, setSelected] = useState<any>(props.label);
  return (
    <div className="flex lg:flex-row flex-col gap-2 items-start lg:items-center justify-center">
      <h2 className="text-md text-gray-500">{props.title}:</h2>
      <div className="dropdown light">
        <label
          tabIndex={0}
          className="btn m-1 bg-base-100 border border-neutral hover:bg-base-content hover:border-neutral text-primary-content"
        >
          {selected === props.label ? props.label : selected}
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content flex flex-col z-[1] menu p-2 shadow bg-base-100 border border-neutral rounded-box max-w-52 max-h-52 overflow-scroll text-primary-content"
        >
          {props.options?.map((option, index) => {
            return (
              <li key={index} onClick={() => setSelected(option)}>
                <a className="hover:text-secondary-content hover:bg-base-content">
                  {option}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
