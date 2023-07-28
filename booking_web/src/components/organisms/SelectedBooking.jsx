import React, { useState, useEffect } from "react";
import { Box, Text, chakra } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { todayBookingState, buttonDispState } from "../../atom/state";

import { BookingContents } from "../molecules/BookingContents";
import { OptionButtonCollection } from "../molecules/OptionButtonCollection";
import { MoveSeatButton } from "../atoms/button/MoveSeatButton";

export const SelectedBooking = (props) => {
  const { table } = props;
  const todayBooking = useRecoilValue(todayBookingState);
  const buttonDisp = useRecoilValue(buttonDispState);


  const booking = todayBooking.filter((booking) => {
    const selectedTable = booking.tables.filter((todayTable) => {
      return todayTable.id === table.id;
    });
    return selectedTable.length > 0;
  });

  return (
    <div>
      {booking.map((booking) => (
        <Box key={booking.id}>
          <BookingContents booking={booking} />
          <OptionButtonCollection booking={booking} table={table} />
          {buttonDisp.moveTable && (
            <MoveSeatButton bookingId={booking.id} tableId={table.id} />
          )}
        </Box>
      ))}
    </div>
  );
};
