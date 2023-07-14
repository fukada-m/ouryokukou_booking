import React, {useState, useEffect} from 'react'
import { DeleteButton } from './DeleteButton'

export const Booking = (props) => {
  const { table, todayBooking, setTodayBooking } = props;

  const booking = todayBooking.filter((booking) => {
    const selectedTable = booking.tables.filter((todayTable) => {
      return todayTable.id === table.id
    })
    return selectedTable.length > 0
  })

  return (
    <div style={{ backgroundColor: table.is_seated && "red" }}>
      <p style={{ margin: "10px" }}>{table.id}番</p>
      {booking.map((booking) => (
        <div key={booking.id}>
          <p>
            {booking.date}({booking.week})
          </p>
          <p>{booking.time}</p>
          <p>{booking.name}</p>
          <p>大人{booking.number_of_adults}人</p>
          <p>子供{booking.number_of_children}人</p>
          <p>{booking.booking_category.name}</p>
          <p>{booking.note}</p>
          <p></p>
          <DeleteButton
            bookingId={booking.id}
            setTodayBooking={setTodayBooking}
          />
        </div>
      ))}
    </div>
  );
}

