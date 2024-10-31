import ReceiptPDFViewer from "@/components/PDF/ReceiptPDFViewer";
import SafeView from "@/components/Reusables/SafeView";
import React from "react";
import user from "@/constants/user.json";
import { MdEditNote } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import Link from "next/link";

export default function Preview() {
  return (
    <SafeView>
      <ReceiptPDFViewer data={user[0]} items={user[0].receipts[0].items} />
      <div
        className="bg-base-100 border border-neutral shadow-lg w-14 h-14 rounded-full fixed bottom-4 right-10
      flex items-center justify-center hover:bg-primary text-secondary-content hover:text-white"
      >
        <Link href={"/invoice/edit/1234567789"}>
          <BiEdit className="" size={25} />
        </Link>
      </div>
    </SafeView>
  );
}
