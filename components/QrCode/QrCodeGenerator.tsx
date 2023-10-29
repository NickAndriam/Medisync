import { QRCodeSVG } from "qrcode.react";
import React from "react";

interface QrCGen {
  value: string;
  size?: number;
}

export default function QrCodeGenerator({ value, size }: QrCGen) {
  return <QRCodeSVG value={value} height={size || 250} />;
}
