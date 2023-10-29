"use client";
import QRCodeReader from "@/components/QrCode/QRCodeReader";
import QrCodeGenerator from "@/components/QrCode/QrCodeGenerator";
import React from "react";
import { QRCode } from "react-qrcode-logo";
import img from "@/public/vercel.svg";

export default function Page() {
  const [value, setValue] = React.useState<string>("");
  return (
    <div className="flex flex-col items-center justify-center bg-blue to-blue-500 my-4">
      {/* <QRCodeReader /> */}
      {/* <QrCodeGenerator value="123457654837" /> */}
      <QRCode
        value="458"
        size={150}
        logoImage={img}
        logoHeight={20}
        logoWidth={20}
        qrStyle="dots"
      />
    </div>
  );
}
