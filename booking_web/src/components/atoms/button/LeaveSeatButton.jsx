import React from "react";
import { leaveSeat } from "../../../utils/api";
import { Button } from "@chakra-ui/react";

export const LeaveSeatButton = (props) => {
  const { tableId, setTables } = props;

  const onClickLeaveSeat = async () => {
    const data = {
      table: {
        id: tableId,
      },
    };
    setTables(await leaveSeat(data));
  };

  return (
    <div>
      <Button onClick={onClickLeaveSeat}>会計</Button>
    </div>
  );
};
