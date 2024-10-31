import React from "react";
import Avatar from "./Avatar";

export function TableName() {
  return (
    <div className="flex items-center justify-center gap-4">
      <Avatar size={45} />
      <div className="text-left">
        <h3 className="text-primary-content">RAZAFIMANANTSOA</h3>
        <h3 className="text-secondary-content">Andriamaheriniaina Jedidia</h3>
      </div>
    </div>
  );
}
export function TableAppointment() {
  return (
    <p className="text-white font-medium w-6 h-6 bg-secondary flex items-center justify-center rounded-full lg:ml-16 ml-4">
      2
    </p>
  );
}
