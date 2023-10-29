import React from "react";
import Modal from "./Modal";

interface NoteProps {
  title?: string;
  description?: string;
  time?: string;
  color?: string;
  by?: string;
}

export const Note = (props: NoteProps) => {
  return (
    <Modal
      button={
        // Click
        <div className="flex items-start pb-4 my-4 border-b hover:opacity-50 cursor-pointer transition-opacity">
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="font-medium">Right Ankle Check Up</h3>
              <p className="text-xs font-bold text-gray-500">Dr. John Wick</p>
            </div>
            <p className="text-sm text-gray-500">
              We will check up your ankle to make sure the ligaments are intact
              and in the right place! We will review your x-ray and MRI results.
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <p
              className={`text-sm ${
                props.color || "bg-green-500"
              } text-white px-2 rounded-full w-min`}
            >
              11:00
            </p>
            <p className="text-xs">29/10/2023</p>
          </div>
        </div>
      }
    >
      {/* Dialog */}
      <div className="flex items-start pb-4 m-5 transition-opacity">
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="font-medium">Right Ankle Check Up</h3>
            <p className="text-xs font-bold text-gray-500">Dr. John Wick</p>
          </div>
          <p className="text-sm text-gray-500">
            We will check up your ankle to make sure the ligaments are intact
            and in the right place! We will review your x-ray and MRI results.
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <p
            className={`text-sm ${
              props.color || "bg-green-500"
            } text-white px-2 rounded-full w-min`}
          >
            11:00
          </p>
          <p className="text-xs">29/10/2023</p>
        </div>
      </div>
    </Modal>
  );
};
