import React from 'react'

export const Booking = (props) => {
  const { tableNum, booking } = props;

  const newBooking = booking.filter((booking) => {
    const table = booking.tables.filter((table) => {
        return table.id === tableNum
    })
    return table.length > 0
  })

  return (
    <div >
      <p>{tableNum}番</p>
      {newBooking.map((booking) => (
        <div key={booking.id} style={{margin: "20px"}}>
          <p>{booking.date}({booking.week})</p>
          <p>{booking.time}</p>
          <p>{booking.name}</p>
          <p>大人{booking.number_of_adults}人</p>
          <p>子供{booking.number_of_children}人</p>
          <p>{booking.booking_category.name}</p>
          <p>{booking.note}</p>
        </div>
        ))}
      </div>
  )
}

