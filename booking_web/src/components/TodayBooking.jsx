import React, { useState, useEffect } from 'react'
import { axiosInstance } from '../utils/axios'
import { Booking } from './Booking'
import { today } from '../utils/today'

export const TodayBooking = () => {
    const [todayBooking, setTodayBooking] = useState([]);
    const table_num = [1, 2, 3, 5, 11, 12, 13, 14, 15, 16, 21 ]


const fetchAllBooking = async () => {
  try {
    const allBooking = await axiosInstance.get("/api/get_all_booking");
    const todayBooking =allBooking.data.filter(
      (booking) => booking.date === today()
    );
    setTodayBooking(todayBooking)
  } catch (error) {
    console.error(error);
  }
};


    useEffect(() => {
      fetchAllBooking();
    }, []);

  return (
    <>
      <h1>TodayBooking</h1>
      <div style={{ display: "flex" }}>
        {table_num.map((table) => (
          <div key={table}>
            <Booking tableNum={table} todayBooking={todayBooking} setTodayBooking={setTodayBooking} />
          </div>
        ))}
      </div>
    </>
  );
}

