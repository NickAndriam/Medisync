"use client";
import Box from "@/components/Reusables/Box";
import { useDarkTheme } from "@/utils/hooks";
import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { signUpFormAtom } from "@/recoil/atoms.js";
import { usePathname, useRouter } from "next/navigation";
import QrCodeGenerator from "@/components/QrCode/QrCodeGenerator";
import Button from "@/components/Reusables/Button";
import { decryptQrCode, encryptQrCode } from "@/helper/function";

export default function Personal() {
  const dark = useDarkTheme();
  return (
    <main className="flex flex-col gap-4 items-center justify-center h-screen overflow-y-scroll bg-base-content">
      <Progress />
      <QrCode />
    </main>
  );
}

const Progress = ({ progress = 0 }) => {
  const pathname = usePathname();
  function Line({ size = "w-[40px]", bg = "bg-gray-400" }) {
    return (
      <div
        className={`${bg} h-2 rounded-full ${size} hover:bg-primary cursor-pointer`}
      />
    );
  }
  return (
    <div className="absolute top-10 right-0 z-10 lg:w-1/2 w-full flex items-center justify-center gap-2">
      <Line />
      <Line />
      <Line size="w-[80px]" bg="bg-primary" />
    </div>
  );
};

const Input = ({
  label = "",
  type = "text",
  placeholder = "...",
  ...props
}) => {
  const [currentValue, setCurrentValue] = React.useState("");
  return (
    <div>
      <p className="text-secondary-content">{label}:</p>
      <input
        type={type}
        {...props}
        onChange={(e) => setCurrentValue(e.target.value)}
        className="font-bold text-xl border-b border-neutral outline-none text-primary-content p-2 rounded-sm w-full focus:border-b-primary transition-all
        bg-transparent"
      />
    </div>
  );
};
const DateOfBirth = ({
  label = "",
  type = "text",
  placeholder = "...",
  // onChange = () => {},
}) => {
  return (
    <div>
      <p className="text-secondary-content text-sm">{label}:</p>
      <input
        type={type}
        // onChange={onChange}
        placeholder={placeholder}
        className="font-bold text-xl border-b-2 border-b-neutral outline-none text-primary-content p-2 rounded-sm w-[100%] focus:border-b-primary transition-all"
      />
    </div>
  );
};

const QrCode = () => {
  const router = useRouter();
  const [formState, setFormState] = useRecoilState(signUpFormAtom);
  const encrypted = encryptQrCode({ type: "id", value: `${formState.id}` });
  // console.log(decryptQrCode(encrypted));
  const onChange = (e: any) => {
    setFormState({ ...formState, fname: e.target.value });
  };
  console.log(formState);

  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="w-full h-[600px] lg:flex lg:flex-col hidden items-center justify-center">
          <h3 className="text-[50px] font-bold text-secondary-content drop-shadow-sm mb-5">
            Generate Qr Code
          </h3>
          <Image
            src={require("@/public/assets/design/qrcode.svg")}
            alt="doctor"
            className="w-full h-full object-contain"
          />
        </div>
        <Box className="bg-base-100 rounded-none w-full h-full flex flex-col items-center justify-center gap-10 shadow-none">
          <QrCodeGenerator value={formState.id} size={300} />
          <Button title="Download" />
          <h3 className="bg-base-content p-2 text-secondary-content">
            ID: {formState.id.toUpperCase()}
          </h3>
          <div
            className="absolute bottom-0 right-0 flex items-center justify-center w-full
          bg-red-100 h-16"
          >
            <div
              className="w-full bg-gray-500 h-full hover:bg-gray-600 cursor-pointer grid place-items-center text-white text-xl"
              onClick={() => router.back()}
            >
              Previous
            </div>
            <div
              className="w-full bg-primary h-full hover:bg-blue-500 cursor-pointer grid place-items-center text-white text-xl"
              onClick={() => router.push(`/patient/${formState.id}`)}
            >
              Done
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};
