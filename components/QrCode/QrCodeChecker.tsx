"use client";
import React from "react";
import Modal from "../Reusables/Modal";
import { BsArrowRightCircle, BsQrCode } from "react-icons/bs";
import QRCodeReader from "./QRCodeReader";
import TextInfo from "../Reusables/TextInfo";
import Link from "next/link";
import {
  closeModal,
  decryptQrCode,
  encryptDecryptString,
  encryptQrCode,
} from "@/helper/function";
import QrCodeGenerator from "./QrCodeGenerator";
import Avatar from "../Reusables/Avatar";
import { useRouter } from "next/navigation";
import QRCodeUpload from "./QrCodeUpload";

let qrLogin = { type: "login", usr: "admin", pwd: "123456" };
let qrId = { type: "id", value: "1234567865" };
let receiptRes = { type: "test", value: "12345" };

interface QrCodeProps {
  onResult?: (result: any, error: any) => void;
}

export default function QrCodeChecker({
  onResult = () => {},
  ...props
}: QrCodeProps) {
  const [scanResult, setScanResult] = React.useState<string | "">("");
  const [isCameraOn, setIsCameraOn] = React.useState<boolean>(false);
  const [loginResult, setLoginResult] = React.useState<any>({
    open: false,
    result: {},
  });

  const [idResult, setIdResult] = React.useState<any>({
    open: false,
    result: {},
  });

  function onGettingScanResult(result: any, error: any) {
    if (result === undefined) return;
    onResult(result, error);
    // console.log(result);5
    const decrypted = decryptQrCode(result);
    const { type } = decrypted;
    if (type === "login") {
      setLoginResult({ open: true, result: decrypted });
      setIdResult({ ...idResult, open: false });
    } else if (type === "id") {
      setIdResult({ open: true, result: decrypted });
      setLoginResult({ ...idResult, open: false });
    } else return;
    if (result !== undefined) return setScanResult(result);
  }

  return (
    <>
      <Modal
        button={
          <BsQrCode
            size={20}
            className="text-secondary-content hover:text-blue-400"
          />
        }
        closeWrapper={
          <>
            {idResult.open && (
              <div className="bg-base-content p-4 lg:px-10 px-1 rounded-lg my-2">
                <IDResult id={idResult.result.value} />
              </div>
            )}
          </>
        }
      >
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold text-primary-content">
            Scan Qr Code{" "}
          </h2>
          <div className="flex justify-around w-full my-4 text-primary-content">
            <p>Turn camera ON</p>
            <input
              type="checkbox"
              className="toggle border-primary bg-primary toggle-primary"
              checked={isCameraOn}
              onClick={() => setIsCameraOn(!isCameraOn)}
            />
          </div>
          {isCameraOn && (
            <QRCodeReader
              onResult={(result, error) => onGettingScanResult(result, error)}
            />
          )}
          {loginResult.open && <LoginResult />}
        </div>
      </Modal>
    </>
  );
}

export const IDResult: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <Link href={`/patient/${id}`}>
      <div
        className="bg-base-100 w-auto rounded-xl shadow p-3 cursor-pointer transition-all border  border-neutral  hover:border-primary"
        onClick={() => closeModal()}
      >
        <div className="flex justify-between items-center gap-4">
          <div className="flex gap-4">
            <Avatar size={60} />
            <div className="text-sm">
              <TextInfo type="First Name" text="RAZAFIMANANTSOA" />
              <TextInfo type="Last Name" text="A. Jedidia" />
              <TextInfo type="ID" text={id} />
            </div>
          </div>
          <QrCodeGenerator value="123456567654" size={40} />
        </div>
      </div>
    </Link>
  );
};

export const LoginResult: React.FC<{ result?: any }> = ({ result }) => {
  const router = useRouter();

  function checkKey(event: any) {
    if (event.key === "Enter" || event.keyCode === 13) {
      router.push("/admin");
    }
  }
  return (
    <div
      className="absolute top-0 left-0 w-full h-full bg-white/5 backdrop-blur-2xl
    flex items-center justify-center "
    >
      <div className="flex flex-col gap-2">
        <p className="text-white font-bold text-lg">Enter Code</p>
        <div className="relative">
          <input
            type="password"
            className="input text-primary-content bg-base-100 focus:border-neutral text-lg"
            onKeyDown={checkKey}
          />
          <BsArrowRightCircle
            className="text-gray-400 absolute top-2 right-2"
            size={30}
          />
        </div>
      </div>
    </div>
  );
};

export const QueueResult: React.FC<{ result?: any }> = ({ result }) => {
  return <div></div>;
};
