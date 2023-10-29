"use client";
import React from "react";
import Modal from "../Reusables/Modal";
import { BsQrCode } from "react-icons/bs";
import { CiUndo } from "react-icons/ci";
import QRCodeReader from "./QRCodeReader";
import TextInfo from "../Reusables/TextInfo";
import Link from "next/link";
import { closeModal } from "@/helper/function";

export default function QrCodeChecker() {
  const [scanResult, setScanResult] = React.useState<string | undefined>("");
  const [isCameraOn, setIsCameraOn] = React.useState<boolean>(false);

  function onGettingScaneResult(result: any, error: any) {
    if (result !== undefined) setScanResult(result);
  }

  return (
    <>
      <Modal
        button={
          <BsQrCode size={20} className="text-gray-600 hover:text-blue-400" />
        }
      >
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold">Scan Qr Code </h2>
          <div className="flex justify-around w-full my-4">
            <p>Turn camera ON</p>
            <input
              type="checkbox"
              className="toggle  bg-white text-white"
              checked={isCameraOn}
              onClick={() => setIsCameraOn(!isCameraOn)}
            />
          </div>
          {isCameraOn && (
            <QRCodeReader
              onResult={(result, error) => onGettingScaneResult(result, error)}
            />
          )}
        </div>
        {/* {scanResult !== "" && (
          <CiUndo
            size={30}
            className="mx-auto mb-4 text-blue-400 hover:-rotate-180 transition-transform cursor-pointer"
            onClick={() => setScanResult("")}
          />
        )} */}
        {scanResult && (
          <div className="bg-gray-200 p-4 grid place-items-center rounded-lg">
            <IDResult id={scanResult} />
          </div>
        )}
      </Modal>
    </>
  );
}

const IDResult: React.FC<{ id?: string }> = ({ id }) => {
  const modal = document.getElementById(
    "my_modal_3"
  ) as HTMLDialogElement | null;
  return (
    <Link href={`/patient/${id}`}>
      <div
        className="bg-white w-auto rounded-2xl hover:scale-[1.02] shadow-2xl p-4 cursor-pointer transition-all hover:border hover:border-gray-400"
        onClick={() => closeModal()}
      >
        <div className="flex items-center justify-center gap-x-4">
          <div className="w-20 h-20 bg-gray-300 rounded-full" />
          <div className="text-sm">
            <TextInfo type="First Name" text="RAZAFIMANANTSOA" />
            <TextInfo type="Last Name" text="A. Jedidia" />
            <TextInfo type="ID" text={id} />
          </div>
        </div>
      </div>
    </Link>
  );
};
