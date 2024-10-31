import React, { useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";
import img from "@/assets/img/logo.png";
import { useDarkTheme } from "@/utils/hooks";
import logo from "@/public/assets/img/logo.png";
import { encryptQrCode } from "@/helper/function";

interface QrCGen {
  value: any;
  size?: number;
  id?: string;
}

export default function QrCodeGenerator({ value, size = 200, id }: QrCGen) {
  return (
    <QRCode
      id={id}
      value={value}
      qrStyle="dots"
      size={size || 200}
      style={{ background: "white", borderRadius: "5px !important" }}
      bgColor="white"
      eyeColor="black"
      fgColor="black"
      logoWidth={size < 100 ? 20 : 80}
      logoHeight={size < 100 ? 8 : 25}
      logoOpacity={0.5}
      logoImage={logo.src}
    />
  );
}
