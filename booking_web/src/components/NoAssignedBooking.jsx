import React from "react";
import { DeleteButton } from "./atoms/button/DeleteButton";
import { AddTableRelationButton } from "./AddTableRelationButton";
import { useRecoilValue } from "recoil";
import { noAssignedBookingState, buttonDispState } from "../atom/state";
import { Link } from "react-router-dom";

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
      <p style={{ margin: "10px" }}>席が未定</p>
      <p>
        {date}({week})
      </p>
      <p>{time}</p>
      <p>{name}</p>
      <p>
        大人{number_of_adults}人 子供{number_of_children}人
      </p>
      <p>{booking_category.name}</p>
      <p>{note}</p>
      { dispButton.addTable == true && <AddTableRelationButton
        bookingId={id}
      />}
      { dispButton.delete == true && <DeleteButton bookingId={id} />}
      { dispButton.edit == true && <Link to={`/editBooking/${booking.id}`}>編集</Link>}
    </div>
  );
};
