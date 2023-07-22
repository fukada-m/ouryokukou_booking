import React, { useState, useEffect } from "react";
import { today } from "../../utils/date";
import { getAllBooking, getTables } from "../../utils/api";
import { Booking } from "../Booking";
import { NoAssignedBooking } from "../NoAssignedBooking";
import { LeaveSeatButton } from "../LeaveSeatButton";
import { SitSeatButton } from "../SitSeatButton";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { todayBookingState, noAssignedBookingState, tableState, buttonDispState, optionDispState } from "../../atom/state";


export const TodayBooking = () => {
  const setTodayBooking = useSetRecoilState(todayBookingState);
  const [noAssigendBooking, setNoAssigendBooking] = useRecoilState(
    noAssignedBookingState
  );
  const [tables, setTables] = useRecoilState(tableState);
  const setOptionDisp = useSetRecoilState(optionDispState);


  const fetchTodayBooking = async () => {
    const allBooking = await getAllBooking();
    const todayBooking = allBooking.filter(
      (booking) => booking.date === today()
    );
    setTodayBooking(todayBooking);
    const noAssigendBooking = todayBooking.filter(
      (booking) => booking.tables.length === 0
    );
    setNoAssigendBooking(noAssigendBooking);
    setTables(await getTables());
  };

  useEffect(() => {
    fetchTodayBooking();
    setOptionDisp({
      delete: true,
      edit: true,
      addTable: true,
      removeTable: false,
      moveTable: true,
    });
  }, []);

  return (
    <>
      <h1>TodayBooking</h1>
      <div style={{ display: "flex" }}>
        {tables.map((table) => (
          <div
            key={table.id}
            style={{ backgroundColor: table.is_seated && "red" }}
          >
            <p style={{ margin: "10px" }}>{table.id}番</p>
            {table.is_seated == false ? (
              <SitSeatButton tableId={table.id} setTables={setTables} />
            ) : (
              <LeaveSeatButton tableId={table.id} setTables={setTables} />
            )}
            <Booking table={table} />

          </div>
        ))}
        {noAssigendBooking.map((booking) => (
          <div key={booking.id}>
            <NoAssignedBooking booking={booking} />
          </div>
        ))}
      </div>
    </>
  );
};
