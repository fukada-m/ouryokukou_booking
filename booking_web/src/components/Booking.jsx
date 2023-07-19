import React, { useState, useEffect } from "react";
import { DeleteButton } from "./DeleteButton";
import { MoveSeatButton } from "./MoveSeatButton";
import { useRecoilValue } from "recoil";
import { todayBookingState } from "../atom/state";


export const Booking = (props) => {
  const { table } = props;
  const todayBooking = useRecoilValue(todayBookingState);

  const booking = todayBooking.filter((booking) => {
    const selectedTable = booking.tables.filter((todayTable) => {
      return todayTable.id === table.id;
    });
    return selectedTable.length > 0;
  });

  return (
    <div >
      {booking.map((booking) => (
        <div key={booking.id}>
          <p>
            {booking.date}({booking.week})
          </p>
          <p>{booking.time}</p>
          <p>{booking.name}</p>
          <p>
            大人{booking.number_of_adults}人 子供{booking.number_of_children}人
          </p>
          <p>{booking.booking_category.name}</p>
          <p>{booking.note}</p>
          <MoveSeatButton
            bookingId={booking.id}
            tableId={table.id}
          />
          <DeleteButton
            bookingId={booking.id}
            table={table}
          />
        </div>
      ))}
    </div>
  );
};
