import React, { useState, useEffect } from "react";
import { today } from "../utils/date";
import { getAllBooking, getTables } from "../utils/api";
import { Booking } from "./Booking";
import { NoAssignedBooking } from "./NoAssignedBooking";
import { LeaveSeatButton } from "./LeaveSeatButton";
import { SitSeatButton } from "./SitSeatButton";

export const TodayBooking = () => {
  const [todayBooking, setTodayBooking] = useState([]);
  const [noAssigendBooking, setNoAssigendBooking] = useState([]);
  const [tables, setTables] = useState([]);

  const fetchTodayBooking = async () => {
    const allBooking = await getAllBooking();
    const todayBooking = allBooking.filter((booking) => booking.date === today());
    setTodayBooking(todayBooking);
    const noAssigendBooking = todayBooking.filter((booking) => booking.tables.length === 0 );
    setNoAssigendBooking(noAssigendBooking);
    setTables(await getTables());
  };

  useEffect(() => {
    fetchTodayBooking();
  }, []);

  return (
    <>
      <h1>TodayBooking</h1>
      <div style={{ display: "flex" }}>
        {tables.map((table) => (
          <div key={table.id}>
            <Booking
              table={table}
              todayBooking={todayBooking}
              setTodayBooking={setTodayBooking}
              setTables={setTables}
            />
            {table.is_seated == false ? (
              <SitSeatButton tableId={table.id} setTables={setTables} />
            ) : (
              <LeaveSeatButton tableId={table.id} setTables={setTables} />
            )}
          </div>
        ))}
        {noAssigendBooking.map((booking) => (
          <div key={booking.id}>
            <NoAssignedBooking
              noAssigendBooking={booking}
              setNoAssigendBooking={setNoAssigendBooking}
              setTodayBooking={setTodayBooking}
            />
          </div>
        ))}
      </div>
    </>
  );
};
