"use client";
import QrCodeChecker from "@/components/QrCode/QrCodeChecker";
import Box from "@/components/Reusables/Box";
import SwitchTheme from "@/components/SwitchTheme";
import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
  const router = useRouter();

  const onLogin = (e: any) => {
    e.preventDefault();
    router.push("/admin");
  };
  return (
    <section className="relative w-screen h-screen bg-base-content flex items-center justify-center">
      <div className="absolute top-4 right-4">
        <SwitchTheme />
      </div>
      <Box>
        <section className="flex flex-col gap-4 lg:w-96 min-w-fit m-2">
          <h2 className="text-3xl text-primary-content font-medium">Login</h2>
          <p className="text-primary-content text-sm">
            You can either enter your credential or use QR Code if you already
            set up a secondary password.
          </p>

          <form className="flex flex-col gap-2" onSubmit={(e) => onLogin(e)}>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered bg-base-content border border-neutral focus:border-primary text-primary-content"
            />
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered bg-base-content border border-neutral focus:border-primary text-primary-content"
            />
            <label className="cursor-pointer flex items-center gap-2 my-2">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="label-text text-primary-content">
                Remember me
              </span>
            </label>

            <button className="btn btn-primary text-white">Login</button>
          </form>
          <div className="flex items-center justify-between gap-2 w-full">
            <p className="text-secondary-content text-sm">
              Or login with Qr Code
            </p>
            <QrCodeChecker />
          </div>
        </section>
      </Box>
    </section>
  );
}
