import React, { useState } from "react";
import { addTableRelation, getAllBooking } from "../utils/api";
import { today } from "../utils/date";

export const AddTableRelationButton = (props) => {
  const { bookingId, setTodayBooking, setAllBooking, setNoAssigendBooking } =props;

  const tableNum = [
    {id: 1, name: "1番" },
    {id: 2, name: "2番" },
    {id: 3, name: "3番" },
    {id: 5, name: "5番" },
    {id: 11, name: "11番" },
    {id: 12, name: "12番" },
    {id: 13, name: "13番" },
    {id: 14, name: "14番" },
    {id: 15, name: "15番" },
    {id: 16, name: "16番" },
    {id: 21, name: "21番" }
  ];

  const [table, setTable] = useState(1);

  const onClickAddTableRelation = async () => {
    const data = {
      booking: {
        id: bookingId,
      },
      table: {
        id: table,
      },
    };
    await addTableRelation(data);
    const allBooking = await getAllBooking();
    setAllBooking && setAllBooking(allBooking);
    const todayBooking = allBooking.filter(
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
        <select value={table} onChange={(e) => setTable(e.target.value)}>
          {tableNum.map((table) => <option key={table.id} value={table.id}>{table.name}</option>)}
        </select>
      <button onClick={onClickAddTableRelation}>席を割り振る</button>
    </div>
  );
};
