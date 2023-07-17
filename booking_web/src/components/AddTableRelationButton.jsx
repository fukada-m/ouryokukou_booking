import React, { useState } from "react";
import { axiosInstance } from "../utils/axios";
import { today } from "../utils/date";

export const AddTableRelationButton = (props) => {
  const { bookingId, setTodayBooking, setAllBooking, setNoAssigendBooking } =
    props;

  const tableNum = [1, 2, 3, 5, 11, 12, 13, 14, 15, 16, 21];
  const [table, setTable] = useState(1);

  const data = {
    booking: {
      id: bookingId,
    },
    table: {
      id: table,
    },
  };
  const addTableRelation = async () => {
    const res = await axiosInstance.put("/api/add_table_relation", data);
    console.log(res.data);
    const allBooking = await axiosInstance.get("/api/get_all_booking");
    setAllBooking && setAllBooking(allBooking.data);
    const todayBooking = allBooking.data.filter(
      (booking) => booking.date === today()
    );
    setTodayBooking && setTodayBooking(todayBooking);
    const noAssigendBooking = todayBooking.filter((booking) => {
      return booking.tables.length === 0;
    });
    setNoAssigendBooking && setNoAssigendBooking(noAssigendBooking);
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
      <button onClick={addTableRelation}>席を割り振る</button>
    </div>
  );
};