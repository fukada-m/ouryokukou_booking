import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Box, Button, Select } from "@chakra-ui/react";

import { today } from "../../../utils/date";
import { removeTableRelation, getAllBooking } from "../../../utils/api";
import {
  allBookingState,
  todayBookingState,
  noAssignedBookingState,
} from "../../../atom/state";

export const RemoveTableRelationButton = (props) => {
  const { bookingId, tableNum } = props;
  const setAllBooking = useSetRecoilState(allBookingState);
  const setTodayBooking = useSetRecoilState(todayBookingState);
  const setNoAssigendBooking = useSetRecoilState(noAssignedBookingState);

  const [table, setTable] = useState();

  const onClickRemoveTableRelation = async () => {
    const data = {
      booking: {
        id: bookingId,
      },
      table: {
        id: table,
      },
    };
    console.log(table);
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

  useEffect(() => {
    if (tableNum.length > 0) {
      setTable(tableNum[0].id);
    }
  }, []);

  return (
    <>
      {tableNum.length > 0 && (
        <Box display={"flex"}>
          <Select
            w={"100px"}
            value={table}
            onChange={(e) => setTable(e.target.value)}
          >
            {tableNum.map((table) => (
              <option key={table.id} value={table.id}>
                {table.name}
              </option>
            ))}
          </Select>
          <Button onClick={onClickRemoveTableRelation}>席を解除</Button>
        </Box>
      )}
    </>
  );
};
