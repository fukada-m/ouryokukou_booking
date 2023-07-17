import React, { useState } from "react";
import { axiosInstance } from "../utils/axios";
import { today } from "../utils/date";

export const MoveSeatButton = (props) => {
  const { bookingId, tableId, setTodayBooking } = props;
  const [table, setTable] = useState(1);

  const moveSeat = async () => {
    const removeData = {
      table: {
        id: tableId,
      },
      booking: {
        id: bookingId,
      },
    };
    const addData = {
      table: {
        id: table,
      },
      booking: {
        id: bookingId,
      },
    };
    try {
      const res1 = await axiosInstance.put("/api/add_table_relation", addData);
      console.log(res1.data);
      const res2 = await axiosInstance.put(
        "/api/remove_table_relation",
        removeData
      );
      const allBooking = await axiosInstance.get("/api/get_all_booking");
      const todayBooking = allBooking.data.filter(
        (booking) => booking.date === today()
      );
      setTodayBooking(todayBooking);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <select value={table} onChange={(e) => setTable(e.target.value)}>
          <option value="1">1番</option>
          <option value="2">2番</option>
          <option value="3">3番</option>
          <option value="5">5番</option>
          <option value="11">11番</option>
          <option value="12">12番</option>
          <option value="13">13番</option>
          <option value="14">14番</option>
          <option value="15">15番</option>
          <option value="16">16番</option>
          <option value="21">21番</option>
        </select>
      </div>
      <button onClick={moveSeat}>席の移動</button>
    </div>
  );
};
