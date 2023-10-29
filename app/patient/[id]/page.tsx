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
import { MdOutlineAir } from "react-icons/md";
import { FaTemperatureEmpty } from "react-icons/fa6";
import { Note } from "@/components/Reusables/Note";

export default function PatientId() {
  const { id } = useParams<{ id: string }>();
  return (
    <SafeView>
      <div className="flex lg:flex-row md:flex-row flex-col gap-5 lg:p-2">
        <section className="flex w-full md:w-3/5 lg:w-2/3 flex-col gap-5">
          <PersonalInfo id={id} />
          <VitalSigns />
          <MedicalHistory />
        </section>
        <section className="w-full md:w-2/5 lg:min-w-[200px] lg:w-1/3 flex flex-col gap-5">
          <Appointments />
        </section>
      </div>
    </SafeView>
  );
}

const PersonalInfo: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Box>
      <div className="absolute right-8 top-6 lg:block md:hidden hidden">
        <QRCode value={id} size={80} qrStyle="dots" />
      </div>
      <section className="flex items-center gap-4 rounded-2xl">
        <div className="w-[90px] h-[90px] bg-blue-400 rounded-full" />
        <div className="flex flex-col gap-2">
          <TextInfo type="ID" text={id} />
          <TextInfo type="First Name" text="RAZAFIMANANTSOA" />
          <TextInfo type="Last Name" text="Andriamaheriniaina Jedidia" />
        </div>
      </section>
      {/* <div className="w-[60%] h-3 bg-transparent rounded-full shadow-lg mx-auto my-4" /> */}
      <h2 className="my-4 bold text-blue-400 ml-4 font-bold">
        Additional Info:
      </h2>
      <section className="flex flex-col gap-1 mt-2 lg:p-10 md:p-6 p-6 bg-gray-100 rounded-3xl">
        <TextInfo type="Height" text="174 cm" />
        <TextInfo type="Weight" text="60 Kg" />
        <TextInfo type="Date of Birth" text="12 February 1997" />
        <TextInfo type="Phone Number" text="0321916397" />
        <TextInfo type="Emergency Number" text="0321916300" />
        <TextInfo type="Email" text="razzz@gmail.com" />
        <TextInfo type="Address" text="FLM 67ha Fanantenana" />
      </section>
    </Box>
  );
};

const MedicalHistory: React.FC = () => {
  return (
    <Accordion title="Medical History">
      <div className="flex flex-col gap-2">
        <TextInfo type="Allergies" text="N/A" />
        <TextInfo type="Past Medical Conditions" text="Asthma, Migrain" />
        <TextInfo type="Family Medical History" text="N/A" />
        <TextInfo type="Surgical History" text="Right Ankle" />
        <TextInfo type="Medications" text="N/A" />
        <TextInfo type="Immunization History" text="N/A" />
      </div>
    </Accordion>
  );
};

const VitalSigns: React.FC = () => {
  return (
    <Accordion title="Vital Signs">
      <div className="flex flex-row gap-2 w-full items-center justify-around">
        <MyIcon
          icon={TbHeartRateMonitor}
          size={50}
          title="Blood Pressure"
          label="120/80"
          color="text-purple-700"
        />
        <MyIcon
          icon={BsHeartPulseFill}
          size={48}
          title="Heart Rate"
          label="82"
          color="text-red-600"
        />
        <MyIcon
          icon={MdOutlineAir}
          size={50}
          title="Respiratory Rate"
          label="12"
          color="text-blue-500"
        />
        <MyIcon
          icon={FaTemperatureEmpty}
          size={50}
          title="Body Temperature"
          label="26"
          color="text-green-500"
        />
      </div>
    </Accordion>
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
