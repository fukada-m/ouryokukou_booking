import React from "react";
import {
  deleteBooking,
  getAllBooking,
  getTables,
  leaveSeat,
} from "../../../utils/api";
import { today } from "../../../utils/date";
import { useSetRecoilState } from "recoil";
import {
  allBookingState,
  todayBookingState,
  noAssignedBookingState,
  tableState,
} from "../../../atom/state";
import { Button } from "@chakra-ui/react";

export const DeleteButton = (props) => {
  const setAllBooking = useSetRecoilState(allBookingState);
  const setTodayBooking = useSetRecoilState(todayBookingState);
  const setNoAssigendBooking = useSetRecoilState(noAssignedBookingState);
  const setTables = useSetRecoilState(tableState);

  const { bookingId, table } = props;

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
    setNoAssigendBooking(noAssigendBooking);
    setAllBooking(allBooking);
    setTodayBooking(todayBooking);
    if (table !== null) {
      const tableId = {
        table: {
          id: table.id,
        },
      };
      await leaveSeat(tableId);
      setTables(await getTables());
    }
  };

  return (
    <div>
      <Button onClick={onClickDelete}>削除</Button>
    </div>
  );
};
