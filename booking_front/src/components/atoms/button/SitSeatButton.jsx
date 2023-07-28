import React from "react";
import { sitSeat, getTables } from "../../../utils/api";
import { Button } from "@chakra-ui/react";

export const SitSeatButton = (props) => {
  const { tableId, setTables } = props;

  const onClickSitSeat = async () => {
    const data = {
      table: {
        id: tableId,
      },
    };
    await sitSeat(data);
    const tables = await getTables();
    tables.sort((a, b) => {
      return a.id - b.id;
    });
    setTables(tables);
  };

  return (
    <div>
      <Button onClick={onClickSitSeat}>来店</Button>
    </div>
  );
};
