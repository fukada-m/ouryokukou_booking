import React from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

import { DeleteButton } from "./atoms/button/DeleteButton";
import { AddTableRelationButton } from "./atoms/button/AddTableRelationButton";
import { useRecoilValue } from "recoil";
import { noAssignedBookingState, buttonDispState } from "../atom/state";

export const NoAssignedBooking = (props) => {
  const { booking } = props;
  const dispButton = useRecoilValue(buttonDispState);

  const {
    date,
    week,
    time,
    name,
    number_of_adults,
    number_of_children,
    booking_category,
    note,
    id,
  } = booking;

  return (
    <div>
      <Text m={2}>席が未定</Text>
      <p>
        {date}({week})
      </p>
      <p>{time}</p>
      <p>{name}</p>
      <p>
        大人{number_of_adults}人 子供{number_of_children}人
      </p>
      <Text color={booking.booking_category.name === "LINE" && "green.500"}>
        {booking.booking_category.name}
      </Text>
      <p>{note}</p>
      {dispButton.addTable && <AddTableRelationButton bookingId={id} />}
      {dispButton.delete && <DeleteButton bookingId={id} />}
      {dispButton.edit && <Link to={`/editBooking/${booking.id}`}>編集</Link>}
    </div>
  );
};
