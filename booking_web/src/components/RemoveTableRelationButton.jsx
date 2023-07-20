import React, { useState } from "react";
import { removeTableRelation, getAllBooking } from "../utils/api";
import { today } from "../utils/date";
import { useSetRecoilState } from "recoil";
import {
  allBookingState,
  todayBookingState,
  noAssignedBookingState,
} from "../atom/state";

export const RemoveTableRelationButton = (props) => {
  const { bookingId, tableNum } = props;
  const setAllBooking = useSetRecoilState(allBookingState);
  const setTodayBooking = useSetRecoilState(todayBookingState);
  const setNoAssigendBooking = useSetRecoilState(noAssignedBookingState);

//   const tableNum = [
//     { id: 1, name: "1番" },
//     { id: 2, name: "2番" },
//     { id: 3, name: "3番" },
//     { id: 5, name: "5番" },
//     { id: 11, name: "11番" },
//     { id: 12, name: "12番" },
//     { id: 13, name: "13番" },
//     { id: 14, name: "14番" },
//     { id: 15, name: "15番" },
//     { id: 16, name: "16番" },
//     { id: 21, name: "21番" },
//   ];

console.log(tableNum);

  const [table, setTable] = useState(1);

  const onClickRemoveTableRelation = async () => {
    const data = {
      booking: {
        id: bookingId,
      },
      table: {
        id: table,
      },
    };
    await removeTableRelation(data);
    const allBooking = await getAllBooking();
    setAllBooking(allBooking);
    const todayBooking = allBooking.filter(
      (booking) => booking.date === today()
    );
    setTodayBooking(todayBooking);
    const noAssigendBooking = todayBooking.filter((booking) => {
      return booking.tables.length === 0;
    });
    setNoAssigendBooking(noAssigendBooking);
  };

  return (
    <div>
      <select value={table} onChange={(e) => setTable(e.target.value)}>
        {tableNum.map((table) => (
          <option key={table.id} value={table.id}>
            {table.name}
          </option>
        ))}
      </select>
      <button onClick={onClickRemoveTableRelation}>席を解除する</button>
    </div>
  );
};
