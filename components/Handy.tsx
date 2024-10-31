import React from "react";
import Box from "./Reusables/Box";
import { delay, motion as m } from "framer-motion";
import { smoothTransition } from "@/utils/animation";
import { AiOutlineClose } from "react-icons/ai";

interface HandyProps {
  onClose?: () => void;
  children?: React.ReactNode;
}

export default function Handy(props: HandyProps) {
  return (
    <>
      <m.div
        className="absolute right-0 top-0 h-full w-full z-[1000] bg-black/10 backdrop-blur-[10px] "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
      ></m.div>
      <div>
        <m.div
          className="absolute z-[1000] top-0 right-0 left-0 bottom-0 w-full h-full flex lg:flex-row flex-col-reverse justify-center items-center gap-4 overflow-hidden overflow-y-scroll"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ ...smoothTransition }}
        >
          {props.children}
        </m.div>

        {/* Close button */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ...smoothTransition, delay: 0.3 }}
          onClick={props.onClose}
          className="absolute right-4 top-4 z-[1000] rounded-full w-[30px] h-[30px] grid place-items-center
          text-white cursor-pointer bg-white/5 backdrop-blur-3xl transition-all delay-100"
        >
          <AiOutlineClose className="text-error" />
        </m.div>
      </div>
    </>
  );
}
