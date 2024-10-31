"use client";
import { cameraAccessControl } from "@/helper/function";
import React, { use, useEffect } from "react";
import { QrReader } from "react-qr-reader";

interface QrCodeReaderProps {
  onResult: (result?: any, error?: any) => void;
}

export default function QRCodeReader(props: QrCodeReaderProps) {
  function handleScan(result: any, error: any) {
    if (!!result) {
      props.onResult(result?.text, undefined);
    }

    if (!!error) {
      props.onResult(undefined, error);
    }
  }

  // useEffect(() => {
  //   cameraAccessControl();
  // }, []);

  return (
    <QrReader
      onResult={handleScan}
      containerStyle={{
        background: "transparent",
        width: 250,
        height: 250,
        borderRadius: 10,
      }}
      constraints={{ facingMode: "user" }}
    />
  );
}
