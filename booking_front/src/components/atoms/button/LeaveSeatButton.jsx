import React from "react";
import { leaveSeat, getTables } from "../../../utils/api";
import { Button } from "@chakra-ui/react";

export const LeaveSeatButton = (props) => {
  const { tableId, setTables } = props;

  const onClickLeaveSeat = async () => {
    const data = {
      table: {
        id: tableId,
      },
    };
    await leaveSeat(data);
    const tables = await getTables();
    tables.sort((a, b) => {
      return a.id - b.id;
    });
    setTables(tables);
  };

  return (
    <div>
      <Button onClick={onClickLeaveSeat}>会計</Button>
    </div>
  );
};
