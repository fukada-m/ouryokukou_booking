import React, { useState, useEffect } from 'react'
import { axiosInstance } from '../utils/axios'
import { Booking } from './Booking'
import { today } from '../utils/today'
import { NoAssignedBooking } from './NoAssignedBooking'
import { LeaveSeatButton } from './LeaveSeatButton'
import { SitSeatButton } from './SitSeatButton'

export const TodayBooking = () => {
    const [todayBooking, setTodayBooking] = useState([]);
    const [noAssigendBooking, setNoAssigendBooking] = useState([]);
    const [tables, setTables] = useState([]);


  const fetchTodayBooking = async () => {
    try {
      const allBooking = await axiosInstance.get("/api/get_all_booking");
      const todayBooking =allBooking.data.filter(
        (booking) => booking.date === today()
      );
      setTodayBooking(todayBooking)
      const noAssigendBooking = todayBooking.filter((booking) => {
        return booking.tables.length === 0
      })
      setNoAssigendBooking(noAssigendBooking)
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSeat = async () => {
    try {
      const res = await axiosInstance.get("/api/get_all_tables");
      console.log(res.data);
      setTables(res.data);
    } catch (error) {
      console.error(error);
    }
  };


    useEffect(() => {
      fetchTodayBooking();
      fetchSeat();
    }, []);

  return (
    <>
      <h1>TodayBooking</h1>
      <div style={{ display: "flex" }}>
        {tables.map((table) => (
          <div key={table.id}>
            <Booking
              table={table}
              todayBooking={todayBooking}
              setTodayBooking={setTodayBooking}
            />
            {table.is_seated || <SitSeatButton tableId={table.id} setTables={setTables} />}
            {table.is_seated && <LeaveSeatButton tableId={table.id} setTables={setTables} />}
          </div>
        ))}
        {noAssigendBooking.map((booking) => (
          <div key={booking.id}>
            <NoAssignedBooking
              noAssigendBooking={booking}
              setNoAssigendBooking={setNoAssigendBooking}
            />
          </div>
        ))}
      </div>
    </>
  );
}

