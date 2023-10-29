"use client";
import React from "react";
import { RecoilRoot } from "recoil";
import Navbar from "./Layout/Navbar";

interface RootComponentsProps {
  children: React.ReactNode;
}

export default function RootComponents(props: RootComponentsProps) {
  return <RecoilRoot>{props.children}</RecoilRoot>;
}
