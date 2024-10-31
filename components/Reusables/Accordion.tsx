import React from "react";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion = (props: AccordionProps) => {
  const [open, setOpen] = React.useState<boolean>(true);
  return (
    <div className="collapse collapse-arrow bg-base-100 border border-neutral rounded-[30px] shadow-md p-4">
      <input
        type="radio"
        className="cursor-pointer"
        checked={open}
        onChange={() => setOpen(!open)}
        onClick={() => setOpen(!open)}
      />
      <div className="collapse-title text-xl font-bold cursor-pointer text-primary-content">
        {props.title}
      </div>
      <div className="collapse-content">
        <div className="border mb-4 border-neutral" />
        {props.children}
      </div>
    </div>
  );
};
