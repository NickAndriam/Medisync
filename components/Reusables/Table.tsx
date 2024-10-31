"use client";
import React, { useEffect, useState } from "react";
import { TableAppointment, TableName } from "./TableRow";
import { useRouter } from "next/navigation";

interface TableProps {
  td?: React.ReactNode;
}

export function PatientsTable(props: TableProps) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return;
  return (
    <>
      <table className="coolEdge w-full overflow-hidden text-primary-content">
        <tr className="stickyRow text-center text-white bg-primary shadow-sm rounded-2xl overflow-hidden">
          <th className="py-4 text-center px-4">Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Blood</th>
          <th>Appointments</th>
        </tr>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
          return (
            <>
              <div className="my-3" />
              <tr
                className="text-center border border-neutral bg-base-100 shadow-sm hover:bg-neutral hover:border-neutral cursor-pointer transition-all"
                onClick={() => router.push("/patient/12344")}
              >
                <td className="py-6">
                  <TableName />
                </td>
                <td className="text-primary font-medium">Male</td>
                <td>25</td>
                <td>032 19 163 97</td>
                <td>FLM 67Ha Fanantenana </td>
                <td className="text-purple-500 font-bold">O+</td>
                <td className="">
                  <TableAppointment />
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
}
