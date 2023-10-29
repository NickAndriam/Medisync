"use client";
import React from "react";
import cn from "classnames";

interface ModalProps {
  button: React.ReactNode;
  children: React.ReactNode;
}

export default function Modal(props: ModalProps) {
  const [open, setOpen] = React.useState(false);
  const modalClass = cn({
    "modal-open": open,
  });
  return (
    <>
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {props.button}
      </div>
      <dialog id="my_modal_3" className={`modal ${modalClass} bg-gray-300`}>
        <div className="modal-box bg-white">
          <form method="dialog" onChange={() => console.log("opened")}>
            {/* if there is a button in form, it will close the modal */}
            <div
              className="bg-white hover:bg-gray-100 rounded-full absolute right-2 top-2 text-red-500 w-8 h-8 grid place-items-center cursor-pointer"
              onClick={() => setOpen(false)}
            >
              ✕
            </div>
          </form>
          {props.children}
        </div>
      </dialog>
    </>
  );
}
