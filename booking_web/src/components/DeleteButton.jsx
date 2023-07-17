import React from "react";
import { axiosInstance } from "../utils/axios";
import { today } from "../utils/date";

export const DeleteButton = (props) => {
  const {
    bookingId,
    table,
    setTables,
    setAllBooking,
    setTodayBooking,
    setNoAssigendBooking,
  } = props;

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
      const noAssigendBooking = todayBooking.filter((booking) => {
        return booking.tables.length === 0;
      });
      setNoAssigendBooking && setNoAssigendBooking(noAssigendBooking);
      setAllBooking && setAllBooking(allBooking.data);
      setTodayBooking && setTodayBooking(todayBooking);
      const tableId = {
        table: {
          id: table.id,
        },
      };
      await axiosInstance.put("/api/is_seated_false", tableId);
      const newTable = await axiosInstance.get("/api/get_all_tables");
      setTables(newTable.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <button onClick={destory}>削除</button>
    </div>
  );
};
