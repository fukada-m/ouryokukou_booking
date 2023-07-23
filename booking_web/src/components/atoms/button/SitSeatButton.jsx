import React from "react";
import { sitSeat } from "../../../utils/api";
import { Button } from "@chakra-ui/react";

export const SitSeatButton = (props) => {
  const { tableId, setTables } = props;

  const onClickSitSeat = async () => {
    const data = {
      table: {
        id: tableId,
      },
    };
    setTables(await sitSeat(data));
  };

  return (
    <div>
      <Button onClick={onClickSitSeat}>来店</Button>
    </div>
  );
};
