"use client";
import SafeView from "@/components/Reusables/SafeView";
import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import Box from "@/components/Reusables/Box";
import DateChoice from "@/components/Handy";
import EventPopUp from "@/components/Handy";
import { v4 as uuidv4 } from "uuid";
import Select from "@/components/Reusables/Select";
import SelectStyled from "@/components/Reusables/SelectStyled";
import { useTimeInOneDay } from "@/utils/hooks";
import QrCodeChecker, { IDResult } from "@/components/QrCode/QrCodeChecker";
import { BiSearch } from "react-icons/bi";
import Tabs from "@/components/Reusables/Tabs";

export default function Appointments() {
  const [eventInfo, setEventInfo] = useState<any>({
    open: false,
    event: {},
  });
  const [addEvent, setAddEvent] = useState<any>({
    open: false,
    event: {},
  });

  const typeOfReservations = [
    {
      name: "Consult",
      type: "consulting",
      color: "bg-yellow-500",
    },
    {
      name: "Meeting",
      type: "meeting",
      color: "bg-green-500",
    },
    {
      name: "Out",
      type: "out",
      color: "bg-gray-300",
    },
  ];

  const [events, setEvents] = useState<any>([
    {
      title: "Consulting",
      start: new Date("2023-10-29T07:00:00"),
      end: new Date("2023-10-29T07:30:00"),
      id: 1,
      textColor: "meeting",
    },
    {
      title: "Consulting",
      start: new Date("2023-10-29T08:15:00"),
      end: new Date("2023-10-29T08:00:00"),
      id: 2,
      textColor: "consulting",
    },
    {
      title: "Consulting",
      start: new Date("2023-10-29T09:00:00"),
      end: new Date("2023-10-29T10:00:00"),
      id: 3,
      textColor: "consulting",
    },
    {
      title: "Out",
      start: new Date("2023-10-29T12:00:00"),
      end: new Date("2023-10-29T13:00:00"),
      id: 4,
      textColor: "out",
    },
    {
      title: "Meeting",
      start: new Date("2023-10-29T09:00:00"),
      end: new Date("2023-10-29T10:00:00"),
      id: 5,
      textColor: "meeting",
    },
    {
      title: "Out",
      start: new Date("2023-10-30T12:00:00"),
      end: new Date("2023-10-30T13:00:00"),
      id: 6,
      textColor: "out",
    },
    {
      title: "Meeting",
      start: new Date("2023-10-30T13:00:00"),
      end: new Date("2023-10-30T14:00:00"),
      id: 7,
      textColor: "meeting",
    },
    {
      title: "Appointment",
      start: new Date("2023-11-02T10:00:00"),
      id: 8,
      textColor: "consulting",
    },
  ]);

  function handleSelect(e: any) {
    setAddEvent({ ...addEvent, open: true, event: e });
  }

  return (
    <SafeView>
      <div className="flex flex-col gap-4">
        {/* Fullcallendar Component */}
        <Box>
          {/* Appointments */}
          <div className="w-full cursor-pointer p-5">
            <FullCalendar
              editable
              selectable
              plugins={[dayGridPlugin, interactionPlugin]}
              events={events}
              eventContent={renderEventContent}
              initialView="dayGridMonth"
              dateClick={() => {}}
              height={600}
              dayCount={3}
              headerToolbar={{
                // start: "today prev next",
                center: `today prev next`,
                end: "dayGridMonth dayGridWeek dayGridDay",
              }}
              dayHeaderClassNames="text-primary-content"
              select={handleSelect}
              dayCellClassNames="hover:bg-base-content"
              slotLaneClassNames="bg-blue-500"
              themeSystem="sandstone"
              dayMaxEventRows={3}
            />
          </div>
        </Box>

        {/* Edit Event */}
        {eventInfo.open && (
          <EventPopUp
            onClose={() => setEventInfo({ ...eventInfo, open: false })}
          >
            <EditEvent />
          </EventPopUp>
        )}
        {addEvent.open && (
          <DateChoice onClose={() => setAddEvent({ ...addEvent, open: false })}>
            <AddEvent />
          </DateChoice>
        )}
      </div>
    </SafeView>
  );

  function EditEvent() {
    return (
      <div className="w-56 h-56 bg-white rounded-xl m-4 p-4">
        <div>Edit</div>
      </div>
    );
  }

  function AddEvent() {
    return (
      <>
        <Box>
          <h2 className="text-xl font-bold text-primary-content">New Event</h2>
          <br />
          <div className="flex gap-10">
            <section className="flex flex-col items-start justify-around gap-6 mb-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <p className="text-md text-gray-500">From</p>
                <h2 className="font-bold text-primary-content">
                  01 November 2023
                </h2>
              </div>
              <Select
                title="Time"
                label="08:00 AM"
                options={useTimeInOneDay()}
              />
            </section>
            <section className="h-full flex flex-col items-start gap-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <p className="text-md text-gray-500">To:</p>
                <h2 className="font-bold text-primary-content">N/A</h2>
              </div>
              <SelectStyled
                title="Type"
                label="Select"
                options={typeOfReservations}
                selectedOption={(option) => {}}
              />
            </section>
          </div>

          {/* <Tabs /> */}
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-md">Name</p>
            <div className="bg-base-content border border-neutral w-full rounded-xl p-2">
              <div className="flex gap-2 items-center justify-center">
                <input
                  type="text"
                  placeholder="Search For Patient"
                  className="input w-full h-10 rounded-3xl bg-base-content mx-auto border-b-1 mb-2 text-primary-content"
                />
                <BiSearch
                  size={24}
                  className="text-gray-500 hover:text-gray-600 cursor-pointer"
                />
                <QrCodeChecker />
              </div>

              <IDResult />
            </div>
          </div>
        </Box>
        <Box>
          <section className="flex flex-col gap-2">
            <h2 className="font-bold text-primary-content">Title:</h2>
            <input
              className="input h-10 bg-base-content placeholder:text-sm w-full text-primary-content border-neutral"
              placeholder="Add title"
            />
          </section>
          <section className="flex flex-col gap-2">
            <h2 className="font-bold text-primary-content mt-2">Reason:</h2>
            <textarea
              className="textarea bg-base-content border-neutral placeholder:text-sm w-full text-primary-content"
              placeholder="Add reason"
              cols={60}
              rows={5}
            />
          </section>
          <button
            className="btn bg-blue-400 hover:bg-green-400 border-none h-2 text-white w-full mt-4"
            onClick={() => {
              setEvents([
                ...events,
                {
                  start: addEvent.event.start,
                  end: addEvent.event.end,
                  id: uuidv4(),
                  textColor: "meeting",
                },
              ]);
              setAddEvent({ ...addEvent, open: false });
            }}
          >
            Add Appointment
          </button>
        </Box>
      </>
    );
  }

  function renderEventContent(eventInfo: any) {
    function colorChoice() {
      switch (eventInfo.textColor) {
        case "meeting":
          return "bg-secondary";
        case "consulting":
          return "bg-warning";

        case "out":
          return "bg-gray-400";

        default:
          return "bg-primary";
      }
    }

    return (
      <div
        className="w-full border-none"
        onClick={() =>
          setEventInfo({ ...eventInfo, open: true, event: eventInfo })
        }
      >
        <div
          className={` text-white p-1 rounded-lg ${colorChoice()} w-full`}
          // onClick={() => console.log("Event clicked")}
        >
          <b>{eventInfo.timeText} </b>
          <i>{eventInfo.event.title}</i>
        </div>
      </div>
    );
  }
}
