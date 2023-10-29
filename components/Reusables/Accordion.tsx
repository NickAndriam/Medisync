import React from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion = (props: AccordionProps) => {
  const [open, setOpen] = React.useState<boolean>(true);
  return (
    <div className="collapse collapse-arrow bg-white rounded-[30px] shadow-md p-4">
      <input
        type="radio"
        className="cursor-pointer"
        checked={open}
        onChange={() => setOpen(!open)}
        onClick={() => setOpen(!open)}
      />
      <div className="collapse-title text-xl font-bold cursor-pointer">
        {props.title}
      </div>
      <div className="collapse-content">
        <div className="border mb-4" />
        {props.children}
      </div>
    </div>
  );
};
