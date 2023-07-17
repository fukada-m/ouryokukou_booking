import React from 'react'
import { DeleteButton } from './DeleteButton'
import { AddTableRelationButton } from './AddTableRelationButton'


export const NoAssignedBooking = (props) => {
    const { noAssigendBooking, setNoAssigendBooking, setTodayBooking} = props;
    const { date, week, time, name, number_of_adults, number_of_children, booking_category, note, id } = noAssigendBooking
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
        setTodayBooking={setTodayBooking}
        setNoAssigendBooking={setNoAssigendBooking}
        table={null}
      />
      <DeleteButton
        bookingId={id}
        setNoAssigendBooking={setNoAssigendBooking}
      />
    </div>
  );
}

