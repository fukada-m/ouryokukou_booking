import React, { useState } from "react";
import { moveSeat } from "../../../utils/api";
import { useSetRecoilState } from "recoil";
import { todayBookingState } from "../../../atom/state";
import { Box, Button, Select } from "@chakra-ui/react";

export const MoveSeatButton = (props) => {
  const { bookingId, tableId } = props;
  const setTodayBooking = useSetRecoilState(todayBookingState);

  const tableNum = [
    { id: 1, name: "1番" },
    { id: 2, name: "2番" },
    { id: 3, name: "3番" },
    { id: 5, name: "5番" },
    { id: 11, name: "11番" },
    { id: 12, name: "12番" },
    { id: 13, name: "13番" },
    { id: 14, name: "14番" },
    { id: 15, name: "15番" },
    { id: 16, name: "16番" },
    { id: 21, name: "21番" },
  ];
  const [table, setTable] = useState(tableId);

  const onClickMoveSeat = async () => {
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
    setTodayBooking(await moveSeat(addData, removeData));
  };

  return (
    <Box display={"flex"}>
      <Select w={"100px"} value={table} onChange={(e) => setTable(e.target.value)}>
        {tableNum.map((table) => (
          <option key={table.id} value={table.id}>
            {table.name}
          </option>
        ))}
      </Select>
      <Button onClick={onClickMoveSeat}>席の移動</Button>
    </Box>
  );
};
