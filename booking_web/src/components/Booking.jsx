import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import { DeleteButton } from "./atoms/button/DeleteButton";
import { MoveSeatButton } from "./MoveSeatButton";
import { useRecoilValue } from "recoil";
import { todayBookingState, buttonDispState } from "../atom/state";

export const Booking = (props) => {
  const { table } = props;
  const todayBooking = useRecoilValue(todayBookingState);
  const dispButton = useRecoilValue(buttonDispState);


  const booking = todayBooking.filter((booking) => {
    const selectedTable = booking.tables.filter((todayTable) => {
      return todayTable.id === table.id;
    });
    return selectedTable.length > 0;
  });

  return (
    <div>
      {booking.map((booking) => (
        <Box key={booking.id} >
            <p>
              {booking.date}({booking.week})
            </p>
            <p>{booking.time}</p>
            <p>{booking.name}</p>
            <p>
              大人{booking.number_of_adults}人 子供{booking.number_of_children}
              人
            </p>
            <p>{booking.booking_category.name}</p>
            <p>{booking.note}</p>
            {dispButton.moveTable == true && (
              <MoveSeatButton bookingId={booking.id} tableId={table.id} />
            )}
            {dispButton.delete == true && (
              <DeleteButton bookingId={booking.id} table={table} />
            )}
            {dispButton.edit == true && (
              <Link to={`/editBooking/${booking.id}`}>編集</Link>
            )}
        </Box>
      ))}
    </div>
  );
};
