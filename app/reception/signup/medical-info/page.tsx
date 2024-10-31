"use client";
import Box from "@/components/Reusables/Box";
import { useDarkTheme } from "@/utils/hooks";
import Image from "next/image";
import React from "react";
import { useRecoilState } from "recoil";
import { signUpFormAtom } from "@/recoil/atoms.js";
import { usePathname, useRouter } from "next/navigation";

export default function Personal() {
  const dark = useDarkTheme();
  return (
    <main className="flex flex-col gap-4 items-center justify-center h-screen overflow-y-scroll bg-base-content">
      <Progress />
      <MedicalInfo />
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
      <Line size="w-[80px]" bg="bg-primary" />
      <Line />
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

const MedicalInfo = () => {
  const router = useRouter();
  const [formState, setFormState] = useRecoilState(signUpFormAtom);

  const onChange = (e: any) => {
    const name = e.target.id;
    const value = e.target.value;
    const element = document.getElementById(name) as HTMLInputElement;
    if (element) element.defaultValue = value;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className="w-full h-[600px] lg:flex lg:flex-col hidden items-center justify-center">
          <h3 className="text-[50px] font-bold text-secondary-content drop-shadow-sm mb-5">
            Medical History
          </h3>
          <Image
            src={require("@/public/assets/design/checkup.svg")}
            alt="doctor"
            className="w-full h-full object-contain"
          />
        </div>
        <Box className="bg-base-100 rounded-none w-full h-full flex flex-col items-center justify-center gap-10 shadow-none">
          <form className="grid grid-cols-2 gap-14 items-center justify-center -mt-20">
            <Input label="Blood Type" id="bloodType" onChange={onChange}
            />
            <Input label="Allergies" id="allergies" onChange={onChange} />
            <Input
              label="Past Medical Conditions"
              id="pastMedicalConditions"
              onChange={onChange}
            />
            <Input
              label="Family Medical History"
              id="familyMedicalHistory"
              onChange={onChange}
            />
            <Input
              label="Surgical History: "
              id="surgicalHistory"
              onChange={onChange}
            />
            <Input label="Medications" id="medications" onChange={onChange} />
          </form>
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
              onClick={() => router.push("/reception/signup/generate-qrcode")}
            >
              Next
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};
