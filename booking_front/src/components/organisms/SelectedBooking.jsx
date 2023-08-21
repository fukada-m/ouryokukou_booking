import React from "react";
import { Box } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { todayBookingState, buttonDispState } from "../../atom/state";
import { chakra } from "@chakra-ui/react";

import { BookingContents } from "../molecules/BookingContents";
import { Link as RouterLink } from "react-router-dom";
import { OptionButtonCollection } from "../molecules/OptionButtonCollection";
import { MoveSeatButton } from "../atoms/button/MoveSeatButton";

export const SelectedBooking = (props) => {
  const { table } = props;
  const todayBooking = useRecoilValue(todayBookingState);
  const Link = chakra(RouterLink);

  const buttonDisp = useRecoilValue(buttonDispState);

  const booking = todayBooking.filter((booking) => {
    const selectedTable = booking.tables.filter((todayTable) => {
      return todayTable.id === table.id;
    });
    return selectedTable.length > 0;
  });

  return (
    <>
      {booking.map((booking) => (
        <Box borderTop={"2px"} key={booking.id}>
          <BookingContents booking={booking} />
          <Link
            fontSize="lg"
            fontWeight={"bold"}
            bg={"gray.100"}
            py={1}
            px={3}
            borderRadius={"10px"}
            to={`/editBooking/booking/${booking.id}/table/${table.id}`}
          >
            編集
          </Link>
          {/* <OptionButtonCollection booking={booking} table={table} />
          {buttonDisp.moveTable && (
            <MoveSeatButton bookingId={booking.id} tableId={table.id} />
          )} */}
        </Box>
      ))}
    </>
  );
};
