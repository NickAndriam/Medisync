import React from "react";

export default function Tabs() {
  return (
    <div className="">
      <a className="tab tab-lifted tab-active">Patient</a>
      <a className="tab tab-lifted bg-secondary">Personal</a>
      <a className="tab tab-lifted tab-active:bg-white">Leave</a>
    </div>
  );
}
