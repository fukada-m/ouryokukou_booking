import React, { useState, useEffect } from "react";
import { Box, Text, chakra } from "@chakra-ui/react";

import { DeleteButton } from "../atoms/button/DeleteButton";
import { MoveSeatButton } from "../atoms/button/MoveSeatButton";
import { useRecoilValue } from "recoil";
import { todayBookingState, buttonDispState } from "../../atom/state";
import { Link as RouterLink } from "react-router-dom";

export const Booking = (props) => {
  const { table } = props;
  const todayBooking = useRecoilValue(todayBookingState);
  const dispButton = useRecoilValue(buttonDispState);
  const Link = chakra(RouterLink);

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
          <p>
            {booking.date}({booking.week})
          </p>
          <p>{booking.time}</p>
          <p>{booking.name}</p>
          <p>
            大人{booking.number_of_adults}人 子供{booking.number_of_children}人
          </p>
          <Text color={booking.booking_category.name === "LINE" && "green.500"}>
            {booking.booking_category.name}
          </Text>
          <p>{booking.note}</p>
          {dispButton.moveTable && (
            <MoveSeatButton bookingId={booking.id} tableId={table.id} />
          )}
          {dispButton.delete && (
            <DeleteButton bookingId={booking.id} table={table} />
          )}
          {dispButton.edit && (
            <Link
              fontSize={{ base: "lg", md: "md" }}
              bg={"gray.100"}
              px={3}
              py={2}
              m="auto"
              borderRadius={"20px"}
              to={`/editBooking/${booking.id}`}
            >
              編集
            </Link>
          )}
        </Box>
      ))}
    </div>
  );
};
