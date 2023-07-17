import React from "react";
import {
  deleteBooking,
  getAllBooking,
  getTables,
  leaveSeat,
} from "../utils/api";
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

  const onClickDelete = async () => {
    const data = {
      booking: {
        id: bookingId,
      },
    };

    await deleteBooking(data);
    const allBooking = await getAllBooking();
    const todayBooking = allBooking.filter(
      (booking) => booking.date === today()
    );
    const noAssigendBooking = todayBooking.filter((booking) => {
      return booking.tables.length === 0;
    });
    setNoAssigendBooking && setNoAssigendBooking(noAssigendBooking);
    setAllBooking && setAllBooking(allBooking);
    setTodayBooking && setTodayBooking(todayBooking);
    if (setTables == true) {
      const tableId = {
        table: {
          id: table.id,
        },
      };
      leaveSeat(tableId);
      setTables(await getTables());
    }
  };

  return (
    <div>
      <button onClick={onClickDelete}>削除</button>
    </div>
  );
};
