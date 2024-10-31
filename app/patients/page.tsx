import Avatar from "@/components/Reusables/Avatar";
import Box from "@/components/Reusables/Box";
import SafeView from "@/components/Reusables/SafeView";
import { PatientsTable } from "@/components/Reusables/Table";
import React from "react";

export default function page() {
  return (
    <SafeView>
      <section className="lg:p-4 p-2">
        <h2 className="text-primary-content text-2xl">Patients</h2>
        <br />
        <PatientsTable />
      </section>
    </SafeView>
  );
}

const Name = () => {
  return (
    <div>
      <Avatar />
    </div>
  );
};
