import React from 'react'
import { DeleteButton } from './DeleteButton'
import { AddTableRelationButton } from './AddTableRelationButton'


export const NoAssignedBooking = (props) => {
    const { noAssigendBooking, setNoAssigendBooking } = props;
  return (
    <div>
      <p style={{ margin: "10px" }}>席が未定</p>
      <p>
        {noAssigendBooking.date}({noAssigendBooking.week})
      </p>
      <p>{noAssigendBooking.time}</p>
      <p>{noAssigendBooking.name}</p>
      <p>大人{noAssigendBooking.number_of_adults}人</p>
      <p>子供{noAssigendBooking.number_of_children}人</p>
      <p>{noAssigendBooking.booking_category.name}</p>
      <p>{noAssigendBooking.note}</p>
      <AddTableRelationButton bookingId={noAssigendBooking.id} />
      <DeleteButton
        bookingId={noAssigendBooking.id}
        setNoAssigendBooking={setNoAssigendBooking}
      />
    </div>
  );
}

