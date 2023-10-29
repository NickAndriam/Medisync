import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description: "This is home",
};

export default function Home() {
  return (
    <main className="">
      <Link href={"/qrcode"} title="Qrcode">
        <p>Go to QR Code</p>
      </Link>
      <Link href={"/about"} title="Qrcode">
        <p>About</p>
      </Link>
    </main>
  );
}
