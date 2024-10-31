"use client";
import ReceiptPDFViewer from "@/components/PDF/ReceiptPDFViewer";
import { IDResult } from "@/components/QrCode/QrCodeChecker";
import Box from "@/components/Reusables/Box";
import React, { useEffect, useState } from "react";
import userJson from "@/constants/user.json";
import { IoCloseOutline } from "react-icons/io5";
import Button from "@/components/Reusables/Button";
import Select from "@/components/Reusables/Select";
import SafeView from "@/components/Reusables/SafeView";

const newItem = {
  id: 5,
  name: "Rapacetamol 500g",
  quantity: 2,
  price: "2000",
};

const Create = () => {
  const [user, setUser] = useState<any>(userJson[0]);
  const [items, setItems] = useState<any>(userJson[0].receipts[0].items);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    let total = 0;
    items.forEach((item: any) => {
      total += item.price * item.quantity;
    });
    setTotal(total);
  }, [items]);
  return (
    <SafeView>
      <main className="w-full h-[88vh] flex lg:flex-row flex-col overflow-y-scroll">
        <div className="relative bg-base-content w-full lg:w-[60%] h-full overflow-y-scroll">
          <section className="relative p-5 flex flex-col gap-y-4">
            <h2 className="text-gray-500 text-xl font-bold mb-2">
              Create an Invoice
            </h2>
            <div>
              <IDResult />
            </div>
            {/* --------------------------
                  Status and Date
          -----------------------------*/}
            <Box className="rounded-xl">
              <div className="flex items-center justify-between">
                <h2 className="text-xl text-primary-content font-medium">
                  {user.receipts[0].date}
                </h2>
                <Select
                  title="Status"
                  label="Paid/Not Paid"
                  options={["Paid", "Pending"]}
                />
              </div>
            </Box>

            {/* --------------------------
                  Items
          -----------------------------*/}
            <Box className="rounded-xl">
              <div className="w-full flex items-center justify-between mb-4">
                <h2 className="text-secondary-content text-lg font-bold">
                  Items:
                </h2>
                <Button
                  bgColor="bg-secondary"
                  title="Add +"
                  onClick={() => setItems([newItem, ...items])}
                />
              </div>
              <div className="bg-base-content p-4 rounded-lg flex flex-col">
                <ItemHeader />
                <div className="bg-base-content rounded-lg flex flex-col gap-1 my-2 max-h-64 overflow-y-scroll">
                  {items.map((receipt: any, index: any) => (
                    <Item
                      key={index}
                      name={receipt.name}
                      quantity={receipt.quantity}
                      price={receipt.price}
                    />
                  ))}
                </div>
              </div>

              {/* --------------------------
                    Total
            -----------------------------*/}
              <div className="flex w-full items-end justify-end mt-4">
                <p className="text-lg text-gray-500 font-bold">Total:</p>
                <p className="text-2xl text-secondary font-bold mx-2">
                  {total} Ar
                </p>
              </div>
            </Box>
          </section>
          <div
            className="w-full sticky bottom-0 right-0 bg-transparent backdrop-blur-lg px-10 py-4 flex items-center justify-end
        border border-neutral"
          >
            <Button title="Save Invoice" />
          </div>
        </div>
        {/* -----------------------
              Pdf Viewer
       -------------------------*/}
        <div className="w-full lg:w-[40%]">
          <ReceiptPDFViewer data={user} items={items} total={total} />
        </div>
      </main>
    </SafeView>
  );
};

const ItemHeader = (props: any) => {
  return (
    <div className="flex flex-row items-center justify-between gap-y-4 text-gray-500 py-2 px-4 rounded-xl uppercase font-bold text-sm">
      <div className="w-[50%]">Name</div>
      <div className=" w-[10%]">Qty</div>
      <div className="w-[20%]">Price</div>
      <div className="text-xs w-[5%]"></div>
      <div className="text-xs  w-[5%]"></div>
    </div>
  );
};
const Item = (props: any) => {
  return (
    <div className="flex flex-row items-center justify-between gap-y-4 text-primary-content bg-base-100 border border-neutral p-4 rounded-xl">
      <div className="w-[50%]">{props.name}</div>
      <div className="text-gray-500 w-[10%]">x{props.quantity}</div>
      <div className="w-[20%] font-medium text-sm">{props.price}</div>
      <div className="text-xs text-gray-500 w-[5%]">Edit</div>
      <IoCloseOutline className="text-red-400 w-[5%]" />
    </div>
  );
};

export default Create;
