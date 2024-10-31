"use client";
import { Metadata } from "next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  // Redirect to new URL on page load
  useEffect(() => {
    router.push("/login");
  }, [router]);
}
