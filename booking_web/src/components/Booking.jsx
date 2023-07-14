import React from 'react'
import { DeleteButton } from './DeleteButton'

export const Booking = (props) => {
  const { tableNum, todayBooking, setTodayBooking } = props;

  const booking = todayBooking.filter((booking) => {
    const table = booking.tables.filter((table) => {
        return table.id === tableNum
    })
    return table.length > 0
  })

  return (
    <div >
      <p>{tableNum}番</p>
      {booking.map((booking) => (
        <div key={booking.id} style={{margin: "20px"}}>
          <p>{booking.date}({booking.week})</p>
          <p>{booking.time}</p>
          <p>{booking.name}</p>
          <p>大人{booking.number_of_adults}人</p>
          <p>子供{booking.number_of_children}人</p>
          <p>{booking.booking_category.name}</p>
          <p>{booking.note}</p>
          <DeleteButton bookingId={booking.id} setTodayBooking={setTodayBooking}/>
        </div>
        ))}
      </div>
  )
}

