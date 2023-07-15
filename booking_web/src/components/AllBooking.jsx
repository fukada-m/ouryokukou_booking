import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../utils/axios'
import { DeleteButton } from './DeleteButton';
import { Link } from 'react-router-dom';

export const AllBooking = () => {
    const [allBooking, setAllBooking] = useState([]);

    const fetchAllBooking = async () => {
        const allBooking = await axiosInstance.get("/api/get_all_booking");
        setAllBooking(allBooking.data);
    }
    useEffect(() => {
        fetchAllBooking()
    }, [])

  return (
    <>
    <h1>予約一覧</h1>
    <div style={{ display: "flex" }}>
      {allBooking.map((booking) => (
          <div key={booking.id} style={{margin: "20px"}}>
          <p>ID:{booking.id}</p>
          <p>{booking.date}({booking.week})</p>
          <p>{booking.time}</p>
          <p>{booking.name}</p>
          <p>大人{booking.number_of_adults}人</p>
          <p>子供{booking.number_of_children}人</p>
          <p>{booking.booking_category.name}</p>
          {booking.tables.map((table, index) => (
              <div key={index} >
              <p>{table.name}</p>
            </div>
          ))}
          <p>{booking.note}</p>
          <DeleteButton bookingId={booking.id} setAllBooking={setAllBooking}/>
          <Link to={`/editBooking/${booking.id}`}>編集</Link>
        </div>
      ))}
    </div>
    </>
  );

}

