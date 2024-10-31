"use client";

import { useState } from "react";
import { BrowserMultiFormatReader, DecodeHintType } from "@zxing/library";
import QrCodeGenerator from "./QrCodeGenerator";
import NextImage from "next/image";
import jsQR from "jsqr";
import {
  decryptQrCode,
  encryptQrCode,
  handleDecrypt,
  handleEncrypt,
} from "@/helper/function";

const QRCodeUpload: React.FC = () => {
  const qrCode = handleEncrypt({
    type: "login",
    id: "f3445j-33920-sldkfjasdlkj",
    sk: "fjgkfealtiajdslj-23ljzkdjfsaldkfj",
    ppwd: "fjgkfealtiajdslj-23ljzkdjfsaldkfj",
  });

  const [file, setFile] = useState<any>(null);
  const [qrCodeValue, setQRCodeValue] = useState<string | null>(null);

  const handleImageUpload = (e: any) => {
    const image = e.target.files[0];
    const imgURL = URL.createObjectURL(image);
    setFile(imgURL);
    decodeQRCode(imgURL);
  };

  const decodeQRCode = async (imgURL: string) => {
    const imageElement = document.createElement("img") as HTMLImageElement;
    imageElement.src = imgURL || file;
    const codeReader = new BrowserMultiFormatReader();
    const hints = new Map();
    hints.set(DecodeHintType.PURE_BARCODE, true);
    codeReader.hints = hints;
    try {
      const result = await codeReader.decodeFromImageElement(imageElement);
      console.log("Encrypted QR code:", result.getText());
      //   return result.text;
      console.log("decrypted", handleDecrypt(qrCode));
    } catch (error) {
      if (error) {
        console.log("Error decoding QR code, retrying....");
        decodeQRCode(imgURL);
      }
      return;
    }
  };

  const download = () => {
    const canvas = document.getElementById(
      "download-qr"
    ) as HTMLCanvasElement | null;

    const pngUrl = canvas
      ?.toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl || "";
    downloadLink.download = "qr-code.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  console.log(qrCode);

  return (
    <div>
      <QrCodeGenerator
        value={
          "123 116 121 112 101 058 032 034 118 097 108 117 101 034 044 032 197 008 058 032 034 049 050 051 052 034 125"
        }
        size={300}
        id="download-qr"
      />

      <p className="text-primary-content" onClick={download}>
        Download
      </p>
      <br />
      <input type="file" onChange={handleImageUpload} />
      <p onClick={() => decodeQRCode(file)} className="text-primary-content">
        Scan
      </p>
      {file && (
        <NextImage
          id="uploaded-img"
          src={file}
          alt="Uploaded QR Code"
          width={300}
          height={300}
          priority
        />
      )}
      {qrCodeValue && <p>QR Code Value: {qrCodeValue}</p>}
    </div>
  );
};

export default QRCodeUpload;
