"use client";
import Box from "@/components/Reusables/Box";
import SafeView from "@/components/Reusables/SafeView";
import TextInfo from "@/components/Reusables/TextInfo";
import { useParams } from "next/navigation";
import { QRCode } from "react-qrcode-logo";
import React from "react";
import { Accordion } from "@/components/Reusables/Accordion";
import { MyIcon } from "@/components/Reusables/MyIcon";

import { TbHeartRateMonitor } from "react-icons/tb";
import { BsHeartPulseFill } from "react-icons/bs";
import { MdEmail, MdOutlineAir } from "react-icons/md";
import { FaTemperatureEmpty, FaUserDoctor } from "react-icons/fa6";
import { Note } from "@/components/Reusables/Note";
import { BigTextsWithInfo } from "@/components/Reusables/BigTextsWithInfo";
import QrCodeGenerator from "@/components/QrCode/QrCodeGenerator";
import Avatar from "@/components/Reusables/Avatar";
import Image from "next/image";
import { useDarkTheme } from "@/utils/hooks";
import { IoCall } from "react-icons/io5";

let qrId = { type: "id", value: "1234567865" };
export default function Admin() {
  const { id } = useParams<{ id: string }>();
  return (
    <SafeView>
      <div className="flex lg:flex-row md:flex-row flex-col gap-5 lg:p-2">
        <section className="flex w-full md:w-3/5 lg:w-2/3 flex-col gap-5">
          <PersonalInfo id={id} />
          <Tasks />
        </section>
        <section className="w-full md:w-2/5 lg:min-w-[200px] lg:w-1/3 flex flex-col gap-5">
          <Appointments />
        </section>
      </div>
    </SafeView>
  );
}

const PersonalInfo: React.FC<{ id: string }> = ({ id }) => {
  const isDark = useDarkTheme();
  return (
    <Box>
      {/* ------------------
          Background Image
      ----------------------*/}
      <div className="absolute z-10 top-0 left-0 rounded-[40px] w-full h-full overflow-hidden">
        <div className="absolute w-full h-full backdrop-brightness-110" />
        <div className="w-full h-full bg-base-100">
          <Image
            src={require("@/public/assets/img/admin.jpg")}
            alt="bg"
            className={`w-full h-full transition-all ease-in-out
            ${isDark && "hidden"}`}
            height={300}
          />
        </div>
      </div>
      {/* ------------------
          Qr Code Generator
      ----------------------*/}
      <div className="absolute z-10 right-8 top-6 lg:block md:hidden hidden">
        <QrCodeGenerator size={80} value={qrId} />
      </div>

      {/* -----------------
            Profile
        -------------------*/}
      <div className="relative z-10 w-full h-full">
        <section className="flex items-center gap-4 overflow-hidden bg-base-100 rounded-full pr-4 w-max">
          <Avatar size={90} />
          <div className="flex flex-col gap-2">
            <TextInfo type="First Name" text="Andriamaheriniaina Jedidia" />
            <TextInfo type="Last Name" text="RAZAFIMANANTSOA" />
          </div>
        </section>
        {/* --------------------
            Info: Call, Email, etc...
        ------------------------*/}
        <section className="mb-8 flex items-center justify-around lg:px-14 px-0 mt-10 p-2">
          <BigTextsWithInfo
            text={<FaUserDoctor size={50} className="text-primary" />}
            label={<p className="text-primary font-bold">Psychologist</p>}
          />
          <BigTextsWithInfo
            text={
              <a href="tel:032 191 6797">
                <IoCall size={50} className="text-secondary" />
              </a>
            }
            label={
              <a className="text-secondary font-bold" href="tel:032 191 6797">
                032 191 6797
              </a>
            }
          />
          <BigTextsWithInfo
            text={
              <a href="mailto:razzz@gmail.com">
                <MdEmail size={50} className="text-purple-500" />
              </a>
            }
            label={
              <a
                className="text-purple-500 font-bold text-center"
                href="mailto:razzz@gmail.com"
              >
                razzz@gmail.com
              </a>
            }
          />
          <BigTextsWithInfo
            text={
              <p className="text-[50px] font-bold text-secondary-content mt-2">
                4+
              </p>
            }
            label={
              <p className="text-secondary-content font-bold mt-2">
                Experience
              </p>
            }
          />
        </section>

        {/* --------------------
              Motto
        ------------------------ */}
        <section className="flex flex-col gap-1 mt-2 lg:p-6 md:p-6 p-6 lg:px-10 bg-base-content rounded-3xl border border-neutral">
          <h2 className="text-primary-content font-bold text-md">Motto:</h2>
          <p className="text-secondary-content italic">
            {`"Guiding Minds on the Path to Empowerment, Inspiring Positive
            Change, and Transforming Lives for a Brighter Tomorrow"`}
          </p>
          <p className="text-secondary-content italic text-end">- Dr. Nick -</p>
        </section>
      </div>
    </Box>
  );
};

const Appointments: React.FC = () => {
  return (
    <Accordion title="Appointments">
      <Note />
      <Note color="bg-yellow-400" />
      <Note color="bg-gray-400" />
    </Accordion>
  );
};
const Tasks: React.FC = () => {
  return (
    <Accordion title="Latest Tasks">
      <Note />
      <Note color="bg-yellow-400" />
      <Note color="bg-gray-400" />
    </Accordion>
  );
};
