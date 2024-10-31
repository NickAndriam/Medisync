"use client";
import SafeView from "@/components/Reusables/SafeView";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Box from "@/components/Reusables/Box";
import Modal from "@/components/Reusables/Modal";

export default function Schedule() {
  const events = [
    {
      title: "Consulting",
      start: new Date("2023-10-29T09:00:00"),
      end: new Date("2023-10-29T10:00:00"),
      id: "consulting",
    },
    {
      title: "Out",
      start: new Date("2023-10-29T12:00:00"),
      end: new Date("2023-10-29T13:00:00"),
      id: "out",
    },
    {
      title: "Meeting",
      start: new Date("2023-10-29T09:00:00"),
      end: new Date("2023-10-29T10:00:00"),
      id: "meeting",
    },
    {
      title: "Out",
      start: new Date("2023-10-30T12:00:00"),
      end: new Date("2023-10-30T13:00:00"),
      id: "out",
    },
    {
      title: "Meeting",
      start: new Date("2023-10-30T13:00:00"),
      end: new Date("2023-10-30T14:00:00"),
      id: "meeting",
    },
    {
      title: "Appointment",
      start: new Date("2023-11-02T10:00:00"),
      id: "consulting",
    },
  ];

  function handleSelect(e: any) {
    // prompt("Enter Name", "test");
    // prompt("Enter Name", "test");
  }

  return (
    <>
      <SafeView>
        <Box>
          {/* Appointments */}
          <div className="w-full cursor-pointer">
            <FullCalendar
              editable
              selectable
              plugins={[dayGridPlugin, interactionPlugin]}
              events={events}
              eventContent={renderEventContent}
              dayCellContent={renderDayCellContent}
              // initialView="dayGridMonth"
              dateClick={(e) => <Modal button={<p>test</p>}>test</Modal>}
              height={600}
              dayCount={3}
              headerToolbar={{
                start: "today prev next",
                end: "dayGridMonth dayGridWeek dayGridDay",
              }}
              select={handleSelect}
              dayCellClassNames="hover:bg-blue-200"
              slotLaneClassNames="bg-blue-500"
            />
          </div>
        </Box>
      </SafeView>
    </>
  );
}

function renderDayCellContent(dayCellInfo: any) {
  return (
    <>
      <p className="text-end ">{dayCellInfo.dayNumberText}</p>
      <Modal
        button={
          <div className="">
            <p className="text-white">+Add</p>
          </div>
        }
      >
        <p className="bg-white">test test test test test test</p>
      </Modal>
    </>
  );
}

function renderEventContent(eventInfo: any) {
  function colorChoice() {
    switch (eventInfo.event.id) {
      case "meeting":
        return "bg-green-500";
      case "consulting":
        return "bg-yellow-500";

      case "out":
        return "bg-gray-400";

      default:
        return "bg-blue-500";
    }
  }
  return (
    <Modal
      button={
        <div
          className={`w-full text-white p-1 rounded-lg ${colorChoice()}`}
          onClick={() => console.log("Event clicked")}
        >
          <b>{eventInfo.timeText} </b>
          <i>{eventInfo.event.title}</i>
        </div>
      }
    >
      test
    </Modal>
  );
}
