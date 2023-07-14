import React from 'react'
import { axiosInstance } from '../utils/axios'
import { today } from '../utils/today'

export const DeleteButton = (props) => {
  const { bookingId, setAllBooking, setTodayBooking } = props;

  const data = {
    booking: {
      id: bookingId,
    },
  };

    const destory = async () => {
      try {
        const res = await axiosInstance.delete("/api/delete_booking", { data });
        console.log(res.data);
        const allBooking = await axiosInstance.get("/api/get_all_booking");
        const todayBooking = allBooking.data.filter(
          (booking) => booking.date === today()
        );
        setAllBooking && setAllBooking(allBooking.data);
        setTodayBooking && setTodayBooking(todayBooking);
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <div><button onClick={destory}>削除</button></div>
  )
}

