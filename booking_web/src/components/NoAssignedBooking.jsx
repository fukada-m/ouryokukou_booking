import React from 'react'
import { DeleteButton } from './DeleteButton'
import { AddTableRelationButton } from './AddTableRelationButton'
import { useRecoilState } from 'recoil'
import { noAssignedBookingState } from "../atom/state";

export const NoAssignedBooking = (props) => {
  const { booking } = props;

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
      <p>{date}({week})</p>
      <p>{time}</p>
      <p>{name}</p>
      <p>
        大人{number_of_adults}人 子供{number_of_children}人
      </p>
      <p>{booking_category.name}</p>
      <p>{note}</p>
      <AddTableRelationButton
        bookingId={id}
        // table={null}
      />
      <DeleteButton
        bookingId={id}
      />
    </div>
  );
}

