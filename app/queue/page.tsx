"use client";
import React from "react";
import QrCodeChecker from "@/components/QrCode/QrCodeChecker";
import SwitchTheme from "@/components/SwitchTheme";
import { decryptQrCode, encryptQrCode } from "@/helper/function";
import QRCodeReader from "@/components/QrCode/QRCodeReader";
import QrCodeGenerator from "@/components/QrCode/QrCodeGenerator";

export default function Queue() {
  const [queue, setQueue] = React.useState<any>("");
  const qrCodeValue = encryptQrCode({ type: "queue", value: 3 });

  function onGettingResult(result: any, error: any) {
    if (result === undefined) return;
    try {
      const { type, id, value } = decryptQrCode(result);
      if (type === "queue") setQueue(value);
      else alert("Not a Queue Qr Code!");
    } catch (err) {
      alert("Invalid Qr Code!");
    }
  }

  return (
    <>
      <div className="absolute top-4 right-4">
        <SwitchTheme />
      </div>
      <div className="w-screen h-screen flex flex-col items-center justify-start bg-base-content">
        <h3 className="text-[250px] font-bold text-gray-500">{queue}</h3>
        <QRCodeReader onResult={onGettingResult} />
        {/* <QrCodeChecker
          onResult={(result, error) => setQueue(decryptQrCode(result).value)}
        /> */}
        <p>{queue}</p>
        <QrCodeGenerator value={qrCodeValue} />
      </div>
    </>
  );
}
